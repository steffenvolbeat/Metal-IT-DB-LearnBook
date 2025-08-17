/**
 * BackendDetail - Erweiterte Backend Entwicklung Details
 * Detaillierte Backend-Beispiele, Projekte und Advanced Topics
 * Metal-Design mit praktischen Code-Beispielen
 * @returns {JSX.Element} Backend Detail Seite
 */
import React, { useState } from "react";
import MetalCodeBlock from "../components/MetalCodeBlock";
import "./BackendDetail.scss";

/**
 * Backend Detail Seite mit erweiterten Inhalten
 */
const BackendDetail = () => {
  const [activeSection, setActiveSection] = useState("microservices");
  const [completedExamples, setCompletedExamples] = useState(new Set());

  /**
   * Backend Detail Sections
   */
  const detailSections = {
    microservices: {
      title: "🏗️ Microservices Architecture",
      description: "Design und Implementation von Microservices",
      examples: [
        {
          title: "API Gateway mit Express",
          description: "Zentraler Entry Point für Microservices",
          code: `// API Gateway Implementation
const express = require('express');
const httpProxy = require('http-proxy-middleware');
const rateLimit = require('express-rate-limit');
const jwt = require('jsonwebtoken');

const app = express();

// Services Configuration
const services = {
  users: { url: 'http://localhost:3001', path: '/api/users' },
  orders: { url: 'http://localhost:3002', path: '/api/orders' },
  products: { url: 'http://localhost:3003', path: '/api/products' },
  notifications: { url: 'http://localhost:3004', path: '/api/notifications' }
};

// Rate Limiting per Service
const createRateLimiter = (windowMs, max) => rateLimit({
  windowMs,
  max,
  message: { error: 'Too many requests', retryAfter: windowMs / 1000 }
});

// Authentication Middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }
  
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid or expired token' });
    req.user = user;
    next();
  });
};

// Service Health Check
app.get('/health', async (req, res) => {
  const healthChecks = await Promise.allSettled(
    Object.entries(services).map(async ([name, config]) => {
      try {
        const response = await fetch(\`\${config.url}/health\`);
        return { service: name, status: response.ok ? 'healthy' : 'unhealthy' };
      } catch {
        return { service: name, status: 'unreachable' };
      }
    })
  );
  
  res.json({
    gateway: 'healthy',
    services: healthChecks.map(result => result.value)
  });
});

// Dynamic Proxy Routes
Object.entries(services).forEach(([serviceName, config]) => {
  app.use(
    config.path,
    createRateLimiter(15 * 60 * 1000, 100), // 100 requests per 15 minutes
    authenticateToken,
    httpProxy({
      target: config.url,
      changeOrigin: true,
      timeout: 10000,
      onError: (err, req, res) => {
        console.error(\`Proxy Error for \${serviceName}:\`, err.message);
        res.status(503).json({
          error: 'Service temporarily unavailable',
          service: serviceName
        });
      },
      onProxyReq: (proxyReq, req) => {
        // Add user context to service requests
        proxyReq.setHeader('X-User-Id', req.user.id);
        proxyReq.setHeader('X-User-Role', req.user.role);
      }
    })
  );
});

app.listen(3000, () => {
  console.log('🚀 API Gateway running on port 3000');
});`,
        },
        {
          title: "Service Discovery & Load Balancing",
          description: "Automatische Service-Erkennung und Load Balancing",
          code: `// Service Registry with Health Monitoring
class ServiceRegistry {
  constructor() {
    this.services = new Map();
    this.healthCheckInterval = 30000; // 30 seconds
    this.startHealthChecking();
  }

  // Register a new service instance
  register(serviceName, instance) {
    if (!this.services.has(serviceName)) {
      this.services.set(serviceName, []);
    }
    
    const existingIndex = this.services.get(serviceName)
      .findIndex(s => s.id === instance.id);
    
    if (existingIndex >= 0) {
      this.services.get(serviceName)[existingIndex] = {
        ...instance,
        lastSeen: Date.now(),
        healthy: true
      };
    } else {
      this.services.get(serviceName).push({
        ...instance,
        lastSeen: Date.now(),
        healthy: true
      });
    }
    
    console.log(\`📋 Service registered: \${serviceName} - \${instance.url}\`);
  }

  // Get healthy service instance (Round Robin)
  getService(serviceName) {
    const instances = this.services.get(serviceName);
    if (!instances || instances.length === 0) {
      throw new Error(\`Service not found: \${serviceName}\`);
    }
    
    const healthyInstances = instances.filter(instance => instance.healthy);
    if (healthyInstances.length === 0) {
      throw new Error(\`No healthy instances for service: \${serviceName}\`);
    }
    
    // Round Robin Load Balancing
    const instance = healthyInstances[Math.floor(Math.random() * healthyInstances.length)];
    return instance;
  }

  // Health checking for all registered services
  async startHealthChecking() {
    setInterval(async () => {
      for (const [serviceName, instances] of this.services.entries()) {
        for (const instance of instances) {
          try {
            const response = await fetch(\`\${instance.url}/health\`, {
              timeout: 5000
            });
            
            instance.healthy = response.ok;
            instance.lastSeen = Date.now();
            
            if (!response.ok) {
              console.warn(\`⚠️ Service unhealthy: \${serviceName} - \${instance.url}\`);
            }
          } catch (error) {
            instance.healthy = false;
            console.error(\`❌ Health check failed: \${serviceName} - \${instance.url}\`);
            
            // Remove instances that haven't responded for 5 minutes
            if (Date.now() - instance.lastSeen > 5 * 60 * 1000) {
              const index = instances.indexOf(instance);
              instances.splice(index, 1);
              console.log(\`🗑️ Removed dead service: \${serviceName} - \${instance.url}\`);
            }
          }
        }
      }
    }, this.healthCheckInterval);
  }

  // Get all services status
  getServicesStatus() {
    const status = {};
    for (const [serviceName, instances] of this.services.entries()) {
      status[serviceName] = {
        total: instances.length,
        healthy: instances.filter(i => i.healthy).length,
        instances: instances.map(i => ({
          id: i.id,
          url: i.url,
          healthy: i.healthy,
          lastSeen: new Date(i.lastSeen).toISOString()
        }))
      };
    }
    return status;
  }
}

// Usage Example
const registry = new ServiceRegistry();

// Services register themselves
registry.register('user-service', {
  id: 'user-service-1',
  url: 'http://localhost:3001',
  version: '1.0.0'
});

registry.register('order-service', {
  id: 'order-service-1',
  url: 'http://localhost:3002',
  version: '1.2.0'
});

// API Gateway uses service discovery
const getUserService = () => registry.getService('user-service');
const getOrderService = () => registry.getService('order-service');`,
        },
      ],
    },
    performance: {
      title: "⚡ Performance & Optimization",
      description: "Backend Performance Optimierung und Caching",
      examples: [
        {
          title: "Redis Caching Strategy",
          description:
            "Intelligentes Caching mit Redis für bessere Performance",
          code: `// Advanced Redis Caching Implementation
const redis = require('redis');
const client = redis.createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379',
  retry_strategy: (options) => {
    if (options.error && options.error.code === 'ECONNREFUSED') {
      return new Error('Redis server refused connection');
    }
    if (options.total_retry_time > 1000 * 60 * 60) {
      return new Error('Retry time exhausted');
    }
    if (options.attempt > 10) {
      return undefined;
    }
    return Math.min(options.attempt * 100, 3000);
  }
});

class CacheManager {
  constructor() {
    this.defaultTTL = 3600; // 1 hour
    this.client = client;
  }

  // Cache with automatic JSON serialization
  async set(key, value, ttl = this.defaultTTL) {
    try {
      const serialized = JSON.stringify(value);
      await this.client.setex(key, ttl, serialized);
      console.log(\`💾 Cached: \${key} (TTL: \${ttl}s)\`);
    } catch (error) {
      console.error('Cache SET error:', error);
    }
  }

  // Get with automatic JSON deserialization
  async get(key) {
    try {
      const cached = await this.client.get(key);
      if (cached) {
        console.log(\`🎯 Cache hit: \${key}\`);
        return JSON.parse(cached);
      }
      console.log(\`❌ Cache miss: \${key}\`);
      return null;
    } catch (error) {
      console.error('Cache GET error:', error);
      return null;
    }
  }

  // Cache with function execution (memoization)
  async remember(key, ttl, asyncFunction) {
    let cached = await this.get(key);
    
    if (cached !== null) {
      return cached;
    }
    
    console.log(\`🔄 Executing function for: \${key}\`);
    const result = await asyncFunction();
    await this.set(key, result, ttl);
    
    return result;
  }

  // Cache invalidation patterns
  async invalidatePattern(pattern) {
    try {
      const keys = await this.client.keys(pattern);
      if (keys.length > 0) {
        await this.client.del(keys);
        console.log(\`🗑️ Invalidated \${keys.length} keys matching: \${pattern}\`);
      }
    } catch (error) {
      console.error('Cache invalidation error:', error);
    }
  }

  // Cache warming for critical data
  async warmCache() {
    console.log('🔥 Starting cache warming...');
    
    // Warm popular user data
    const popularUsers = await User.find()
      .sort({ loginCount: -1 })
      .limit(100)
      .select('_id username email');
    
    for (const user of popularUsers) {
      await this.set(\`user:\${user._id}\`, user, 7200); // 2 hours
    }
    
    // Warm category data
    const categories = await Category.find({ active: true });
    await this.set('categories:active', categories, 86400); // 24 hours
    
    console.log(\`✅ Cache warmed with \${popularUsers.length} users and \${categories.length} categories\`);
  }
}

// Usage in Express routes
const cache = new CacheManager();

// Cached user profile endpoint
app.get('/api/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    
    const user = await cache.remember(
      \`user:\${userId}\`,
      1800, // 30 minutes
      async () => {
        return await User.findById(userId)
          .select('-password')
          .populate('profile')
          .lean();
      }
    );
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Cache invalidation on user update
app.put('/api/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const updateData = req.body;
    
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      updateData,
      { new: true, runValidators: true }
    ).select('-password');
    
    // Invalidate related caches
    await cache.invalidatePattern(\`user:\${userId}*\`);
    await cache.invalidatePattern('users:*');
    
    res.json({ success: true, data: updatedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});`,
        },
        {
          title: "Database Query Optimization",
          description: "MongoDB Query Performance und Indexing",
          code: `// MongoDB Query Optimization Strategies
const mongoose = require('mongoose');

// Optimized User Schema with Indexes
const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true, 
    unique: true,
    index: true // Single field index
  },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    index: true
  },
  profile: {
    firstName: String,
    lastName: String,
    age: { type: Number, min: 13, max: 120 },
    location: {
      city: String,
      country: String,
      coordinates: {
        type: { type: String, enum: ['Point'], default: 'Point' },
        coordinates: { type: [Number], default: [0, 0] }
      }
    }
  },
  preferences: {
    language: { type: String, default: 'de', index: true },
    theme: { type: String, default: 'dark' },
    notifications: { type: Boolean, default: true }
  },
  activity: {
    lastLogin: { type: Date, index: true },
    loginCount: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true, index: true }
  },
  role: { type: String, enum: ['user', 'admin', 'moderator'], default: 'user' },
  tags: [{ type: String, index: true }], // Multi-key index
  metadata: {
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  }
}, {
  timestamps: true
});

// Compound Indexes for complex queries
userSchema.index({ 'activity.isActive': 1, 'activity.lastLogin': -1 });
userSchema.index({ 'profile.location.country': 1, 'preferences.language': 1 });
userSchema.index({ role: 1, 'activity.isActive': 1 });
userSchema.index({ tags: 1, 'activity.isActive': 1 });

// Geospatial Index
userSchema.index({ 'profile.location.coordinates': '2dsphere' });

// Text Search Index
userSchema.index({
  username: 'text',
  'profile.firstName': 'text',
  'profile.lastName': 'text',
  tags: 'text'
});

// Query Performance Monitoring
userSchema.pre(/^find/, function() {
  this.start = Date.now();
});

userSchema.post(/^find/, function() {
  const duration = Date.now() - this.start;
  if (duration > 100) { // Log slow queries
    console.warn(\`Slow Query (\${duration}ms):, this.getQuery()\`);
  }
});

const User = mongoose.model('User', userSchema);

// Optimized Query Examples
class UserService {
  // Paginated user search with optimization
  static async searchUsers(filters = {}, options = {}) {
    const {
      search,
      country,
      language,
      isActive = true,
      role,
      ageRange
    } = filters;
    
    const {
      page = 1,
      limit = 20,
      sort = '-activity.lastLogin',
      select = 'username email profile.firstName profile.lastName activity.lastLogin'
    } = options;
    
    let query = User.find();
    
    // Build efficient query conditions
    const conditions = { 'activity.isActive': isActive };
    
    if (search) {
      // Use text search index
      conditions.$text = { $search: search };
    }
    
    if (country) {
      conditions['profile.location.country'] = country;
    }
    
    if (language) {
      conditions['preferences.language'] = language;
    }
    
    if (role) {
      conditions.role = role;
    }
    
    if (ageRange) {
      conditions['profile.age'] = {
        $gte: ageRange.min,
        $lte: ageRange.max
      };
    }
    
    // Execute optimized query
    const [users, total] = await Promise.all([
      User.find(conditions)
        .select(select)
        .sort(sort)
        .skip((page - 1) * limit)
        .limit(limit)
        .lean(), // Use lean() for better performance
      
      User.countDocuments(conditions)
    ]);
    
    return {
      users,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    };
  }

  // Geospatial user search
  static async findNearbyUsers(longitude, latitude, maxDistance = 10000) {
    return await User.find({
      'profile.location.coordinates': {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude]
          },
          $maxDistance: maxDistance
        }
      },
      'activity.isActive': true
    })
    .select('username profile.firstName profile.lastName profile.location')
    .limit(50)
    .lean();
  }

  // Aggregation pipeline for analytics
  static async getUserAnalytics(timeRange = 30) {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - timeRange);
    
    return await User.aggregate([
      {
        $match: {
          'metadata.createdAt': { $gte: startDate }
        }
      },
      {
        $group: {
          _id: {
            country: '$profile.location.country',
            language: '$preferences.language',
            role: '$role'
          },
          count: { $sum: 1 },
          avgAge: { $avg: '$profile.age' },
          activeUsers: {
            $sum: { $cond: ['$activity.isActive', 1, 0] }
          }
        }
      },
      {
        $sort: { count: -1 }
      },
      {
        $limit: 50
      }
    ]);
  }
}

// Index Management
const manageIndexes = async () => {
  try {
    // Get existing indexes
    const indexes = await User.collection.indexes();
    console.log('Current Indexes:', indexes);
    
    // Create missing indexes
    await User.createIndexes();
    console.log('✅ All indexes created successfully');
    
    // Analyze index usage (MongoDB 4.4+)
    const stats = await User.collection.aggregate([
      { $indexStats: {} }
    ]).toArray();
    
    console.log('Index Usage Statistics:', stats);
  } catch (error) {
    console.error('Index management error:', error);
  }
};

module.exports = { User, UserService, manageIndexes };`,
        },
      ],
    },
    security: {
      title: "🔐 Security & Authentication",
      description: "Backend Security Best Practices und Authentication",
      examples: [
        {
          title: "JWT Authentication mit Refresh Tokens",
          description: "Sichere Authentication mit Access und Refresh Tokens",
          code: `// Secure JWT Authentication System
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const rateLimit = require('express-rate-limit');

class AuthenticationService {
  constructor() {
    this.accessTokenSecret = process.env.JWT_ACCESS_SECRET || 'access-secret-key';
    this.refreshTokenSecret = process.env.JWT_REFRESH_SECRET || 'refresh-secret-key';
    this.accessTokenExpiry = '15m';
    this.refreshTokenExpiry = '7d';
    this.saltRounds = 12;
  }

  // Generate secure password hash
  async hashPassword(password) {
    return await bcrypt.hash(password, this.saltRounds);
  }

  // Verify password
  async verifyPassword(password, hash) {
    return await bcrypt.compare(password, hash);
  }

  // Generate access token
  generateAccessToken(user) {
    const payload = {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
      permissions: user.permissions || []
    };
    
    return jwt.sign(payload, this.accessTokenSecret, {
      expiresIn: this.accessTokenExpiry,
      issuer: 'metal-it-backend',
      audience: 'metal-it-client'
    });
  }

  // Generate refresh token
  generateRefreshToken(user) {
    const payload = {
      id: user._id,
      tokenVersion: user.tokenVersion || 0
    };
    
    return jwt.sign(payload, this.refreshTokenSecret, {
      expiresIn: this.refreshTokenExpiry,
      issuer: 'metal-it-backend',
      audience: 'metal-it-client'
    });
  }

  // Verify access token
  verifyAccessToken(token) {
    try {
      return jwt.verify(token, this.accessTokenSecret);
    } catch (error) {
      throw new Error('Invalid or expired access token');
    }
  }

  // Verify refresh token
  verifyRefreshToken(token) {
    try {
      return jwt.verify(token, this.refreshTokenSecret);
    } catch (error) {
      throw new Error('Invalid or expired refresh token');
    }
  }

  // Generate secure session ID
  generateSessionId() {
    return crypto.randomBytes(32).toString('hex');
  }
}

// Rate limiting for authentication endpoints
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 attempts per window
  message: {
    error: 'Too many authentication attempts, please try again later.',
    retryAfter: 15 * 60
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Enhanced User Model with Security Features
const userSecuritySchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin', 'moderator'], default: 'user' },
  
  // Security fields
  tokenVersion: { type: Number, default: 0 },
  lastLogin: Date,
  loginAttempts: { type: Number, default: 0 },
  lockUntil: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  emailVerificationToken: String,
  isEmailVerified: { type: Boolean, default: false },
  
  // Security settings
  twoFactorSecret: String,
  isTwoFactorEnabled: { type: Boolean, default: false },
  backupCodes: [String],
  
  // Session management
  activeSessions: [{
    sessionId: String,
    userAgent: String,
    ipAddress: String,
    createdAt: { type: Date, default: Date.now },
    lastAccessed: { type: Date, default: Date.now }
  }],
  
  // Security audit
  securityLog: [{
    action: String,
    ipAddress: String,
    userAgent: String,
    timestamp: { type: Date, default: Date.now },
    success: Boolean
  }]
}, { timestamps: true });

// Account lockout logic
userSecuritySchema.virtual('isLocked').get(function() {
  return !!(this.lockUntil && this.lockUntil > Date.now());
});

// Pre-save hook for password hashing
userSecuritySchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  const auth = new AuthenticationService();
  this.password = await auth.hashPassword(this.password);
  next();
});

// Authentication Routes
const auth = new AuthenticationService();

// Login endpoint with security features
app.post('/api/auth/login', authLimiter, async (req, res) => {
  try {
    const { email, password, rememberMe } = req.body;
    const userAgent = req.get('User-Agent');
    const ipAddress = req.ip;
    
    // Find user and check if account is locked
    const user = await User.findOne({ email }).select('+password');
    
    if (!user || user.isLocked) {
      // Log failed attempt
      if (user) {
        user.securityLog.push({
          action: 'login_failed_locked',
          ipAddress,
          userAgent,
          success: false
        });
        await user.save();
      }
      
      return res.status(401).json({
        error: 'Invalid credentials or account locked'
      });
    }
    
    // Verify password
    const isValidPassword = await auth.verifyPassword(password, user.password);
    
    if (!isValidPassword) {
      // Increment login attempts
      user.loginAttempts += 1;
      
      // Lock account after 5 failed attempts
      if (user.loginAttempts >= 5) {
        user.lockUntil = Date.now() + (30 * 60 * 1000); // 30 minutes
      }
      
      user.securityLog.push({
        action: 'login_failed_password',
        ipAddress,
        userAgent,
        success: false
      });
      
      await user.save();
      
      return res.status(401).json({
        error: 'Invalid credentials',
        attemptsRemaining: Math.max(0, 5 - user.loginAttempts)
      });
    }
    
    // Successful login - reset attempts and update session
    user.loginAttempts = 0;
    user.lockUntil = undefined;
    user.lastLogin = new Date();
    
    // Generate tokens
    const accessToken = auth.generateAccessToken(user);
    const refreshToken = auth.generateRefreshToken(user);
    const sessionId = auth.generateSessionId();
    
    // Create session record
    user.activeSessions.push({
      sessionId,
      userAgent,
      ipAddress,
      createdAt: new Date(),
      lastAccessed: new Date()
    });
    
    // Limit active sessions (keep only last 5)
    if (user.activeSessions.length > 5) {
      user.activeSessions = user.activeSessions.slice(-5);
    }
    
    // Log successful login
    user.securityLog.push({
      action: 'login_success',
      ipAddress,
      userAgent,
      success: true
    });
    
    await user.save();
    
    // Set secure HTTP-only cookie for refresh token
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: rememberMe ? 7 * 24 * 60 * 60 * 1000 : 24 * 60 * 60 * 1000 // 7 days or 1 day
    });
    
    res.json({
      success: true,
      accessToken,
      sessionId,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        isEmailVerified: user.isEmailVerified,
        isTwoFactorEnabled: user.isTwoFactorEnabled
      }
    });
    
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const UserSecurity = mongoose.model('User', userSecuritySchema);
module.exports = { AuthenticationService, UserSecurity };`,
        },
      ],
    },
  };

  /**
   * Handle Section Switch
   */
  const handleSectionSwitch = (section) => {
    setActiveSection(section);
    console.log(`🔄 Section gewechselt zu: ${section}`);
  };

  /**
   * Mark Example as Completed
   */
  const markExampleCompleted = (exampleTitle) => {
    setCompletedExamples((prev) => new Set([...prev, exampleTitle]));
    console.log(`✅ Beispiel abgeschlossen: ${exampleTitle}`);
  };

  const currentSection = detailSections[activeSection];

  return (
    <div className="backend-detail-page">
      {/* Header Section */}
      <header className="detail-header">
        <div className="header-content">
          <h1 className="detail-title">Backend Development Advanced</h1>
          <p className="detail-subtitle">
            Erweiterte Backend-Konzepte, Microservices und Production-Ready Code
          </p>
          <button
            className="back-btn"
            onClick={() => (window.location.hash = "#backend")}
          >
            ← Zurück zu Backend Grundlagen
          </button>
        </div>
      </header>

      {/* Section Navigation */}
      <nav className="section-nav">
        <div className="nav-container">
          {Object.entries(detailSections).map(([key, section]) => (
            <button
              key={key}
              className={`nav-btn ${activeSection === key ? "active" : ""}`}
              onClick={() => handleSectionSwitch(key)}
            >
              <span className="nav-title">{section.title}</span>
              <span className="nav-description">{section.description}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Current Section Content */}
      <main className="section-content">
        <div className="section-header">
          <h2 className="section-title">{currentSection.title}</h2>
          <p className="section-description">{currentSection.description}</p>
        </div>

        <div className="examples-container">
          {currentSection.examples.map((example, index) => (
            <article
              key={index}
              className={`example-card ${
                completedExamples.has(example.title) ? "completed" : ""
              }`}
            >
              <header className="example-header">
                <h3 className="example-title">{example.title}</h3>
                <p className="example-description">{example.description}</p>
                <button
                  className="complete-btn"
                  onClick={() => markExampleCompleted(example.title)}
                >
                  {completedExamples.has(example.title)
                    ? "✅ Erledigt"
                    : "Als erledigt markieren"}
                </button>
              </header>

              <div className="example-code">
                <MetalCodeBlock
                  code={example.code}
                  language={
                    activeSection === "python" ? "python" : "javascript"
                  }
                />
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Progress Summary */}
      <footer className="detail-footer">
        <div className="progress-summary">
          <h3>🎯 Dein Fortschritt in Advanced Backend</h3>
          <div className="progress-stats">
            <div className="stat">
              <span className="stat-number">{completedExamples.size}</span>
              <span className="stat-label">Beispiele abgeschlossen</span>
            </div>
            <div className="stat">
              <span className="stat-number">
                {Object.values(detailSections).reduce(
                  (total, section) => total + section.examples.length,
                  0
                )}
              </span>
              <span className="stat-label">Beispiele gesamt</span>
            </div>
            <div className="stat">
              <span className="stat-number">
                {Object.keys(detailSections).length}
              </span>
              <span className="stat-label">Themenbereiche</span>
            </div>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${
                  (completedExamples.size /
                    Object.values(detailSections).reduce(
                      (total, section) => total + section.examples.length,
                      0
                    )) *
                  100
                }%`,
              }}
            ></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BackendDetail;
