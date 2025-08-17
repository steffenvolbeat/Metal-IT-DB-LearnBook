/**
 * BackendBook3D - Realistisches 3D Backend Entwicklung Buch
 * Echte 3D-Perspektive mit Backend-Inhalten, Seiten und Benutzer-Eingaben
 * Metal-Design mit umblättern, eigene Notizen und Lesezeichen
 * @returns {JSX.Element} Realistisches 3D Backend Buch
 */
import React, { useState, useEffect, useRef } from "react";
import "./BackendBook3D.scss";

/**
 * Backend Entwicklung 3D Buch mit echter Buchfunktionalität
 */
const BackendBook3D = () => {
  // === State für echtes Buch-Verhalten ===
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [userNotes, setUserNotes] = useState({});
  const [bookmarks, setBookmarks] = useState(new Set());
  const [showTableOfContents, setShowTableOfContents] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  const bookRef = useRef(null);

  // === Dynamische Benutzer-Eingaben State ===
  const [userTocEntries, setUserTocEntries] = useState([]);
  const [userNodejsEntries, setUserNodejsEntries] = useState([]);
  const [userExpressEntries, setUserExpressEntries] = useState([]);
  const [userDatabaseEntries, setUserDatabaseEntries] = useState([]);
  const [userPythonEntries, setUserPythonEntries] = useState([]);
  const [userApiEntries, setUserApiEntries] = useState([]);
  const [userDeploymentEntries, setUserDeploymentEntries] = useState([]);
  const [dynamicPages, setDynamicPages] = useState([]);

  // === Modal State für Benutzer-Eingaben ===
  const [showAddModal, setShowAddModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("");
  const [newEntryData, setNewEntryData] = useState({
    title: "",
    content: "",
    type: "text",
  });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [editingEntryIndex, setEditingEntryIndex] = useState(null);
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetCategory, setResetCategory] = useState("");

  /**
   * Vollständige Backend Buch-Struktur mit Inhaltsverzeichnis
   */
  const bookStructure = [
    // Cover
    {
      id: "cover",
      type: "cover",
      title: "Backend Entwicklung",
      subtitle: "Server & Datenbank Masterclass",
      author: "Metal-IT Academy",
      version: "2025 Edition",
      pageNumber: null,
      allowNotes: false,
    },

    // Inhaltsverzeichnis
    {
      id: "table-of-contents",
      type: "table-of-contents",
      title: "🖥️ Inhaltsverzeichnis",
      chapters: [
        { title: "1. Node.js Grundlagen", page: 3, icon: "🟢" },
        { title: "2. Express.js Framework", page: 8, icon: "🚀" },
        { title: "3. Datenbank Integration", page: 15, icon: "🗄️" },
        { title: "4. Python Backend", page: 22, icon: "🐍" },
        { title: "5. REST API Design", page: 28, icon: "🌐" },
        { title: "6. Deployment & DevOps", page: 35, icon: "🚢" },
        { title: "7. Backend Projekte", page: 42, icon: "🏗️" },
      ],
      pageNumber: 1,
      allowNotes: false,
    },

    // Node.js Grundlagen
    {
      id: "nodejs-basics",
      type: "content",
      title: "1. Node.js Grundlagen",
      content: {
        sections: [
          {
            title: "Node.js Einführung & Setup",
            code: `// Node.js Runtime Environment
console.log("🟢 Node.js Backend gestartet!");

// Module System (CommonJS)
const fs = require('fs');
const path = require('path');
const http = require('http');

// ES6 Modules (mit package.json "type": "module")
import fs from 'fs/promises';
import path from 'path';

// Environment Variables
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

console.log(\`Server läuft im \${NODE_ENV} Modus auf Port \${PORT}\`);`,
            description:
              "Node.js Runtime Setup und grundlegende Konzepte für Backend-Entwicklung",
          },
          {
            title: "HTTP Server & Request Handling",
            code: `// Native HTTP Server
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const method = req.method;
  const pathname = parsedUrl.pathname;
  
  // CORS Headers setzen
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Routing basierend auf Method und Path
  if (method === 'GET' && pathname === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'OK', timestamp: new Date() }));
  } else if (method === 'POST' && pathname === '/api/users') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const userData = JSON.parse(body);
        // User processing logic
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, user: userData }));
      } catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON' }));
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Route not found' }));
  }
});

server.listen(PORT, () => {
  console.log(\`🚀 Server läuft auf http://localhost:\${PORT}\`);
});`,
            description:
              "Native Node.js HTTP Server mit Request/Response Handling",
          },
        ],
        userEntries: userNodejsEntries,
        category: "nodejs-basics",
      },
      pageNumber: 3,
      allowNotes: true,
    },

    // Express.js Framework
    {
      id: "express-framework",
      type: "content",
      title: "2. Express.js Framework",
      content: {
        sections: [
          {
            title: "Express Setup & Middleware",
            code: `// Express.js Framework Setup
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3000;

// Security Middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
}));

// CORS Configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    error: "Too many requests from this IP, please try again later."
  },
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api/', limiter);

// Body Parsing & Logging
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(morgan('combined'));

// Health Check Endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV 
  });
});

app.listen(PORT, () => {
  console.log(\`🚀 Express Server läuft auf Port \${PORT}\`);
});`,
            description:
              "Express.js Setup mit Security, CORS, Rate Limiting und Middleware",
          },
          {
            title: "Express Router & API Structure",
            code: `// Express Router für strukturierte APIs
const express = require('express');
const router = express.Router();

// User Routes (/api/users)
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10, search } = req.query;
    const offset = (page - 1) * limit;
    
    let query = {};
    if (search) {
      query = {
        $or: [
          { name: { $regex: search, $options: 'i' } },
          { email: { $regex: search, $options: 'i' } }
        ]
      };
    }
    
    const users = await User.find(query)
      .limit(limit * 1)
      .skip(offset)
      .select('-password');
    
    const total = await User.countDocuments(query);
    
    res.json({
      success: true,
      data: users,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST /api/users - Create User
router.post('/', async (req, res) => {
  try {
    const { name, email, password, role = 'user' } = req.body;
    
    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({ 
        success: false, 
        error: 'Name, Email und Password sind erforderlich' 
      });
    }
    
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ 
        success: false, 
        error: 'User mit dieser Email existiert bereits' 
      });
    }
    
    const user = new User({ name, email, password, role });
    await user.save();
    
    res.status(201).json({ 
      success: true, 
      data: { id: user._id, name, email, role },
      message: 'User erfolgreich erstellt'
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;`,
            description:
              "Express Router für strukturierte API-Endpunkte mit Pagination und Validation",
          },
        ],
        userEntries: userExpressEntries,
        category: "express-framework",
      },
      pageNumber: 8,
      allowNotes: true,
    },

    // Datenbank Integration
    {
      id: "database-integration",
      type: "content",
      title: "3. Datenbank Integration",
      content: {
        sections: [
          {
            title: "MongoDB mit Mongoose",
            code: `// MongoDB Connection mit Mongoose
const mongoose = require('mongoose');

// Connection String
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/metalit';

// Connection Options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  family: 4
};

// Database Connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URI, options);
    console.log(\`🗄️ MongoDB Connected: \${conn.connection.host}\`);
  } catch (error) {
    console.error(\`Database Connection Error: \${error.message}\`);
    process.exit(1);
  }
};

// User Schema mit Validation
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username ist erforderlich'],
    unique: true,
    trim: true,
    minlength: [3, 'Username muss mindestens 3 Zeichen haben'],
    maxlength: [30, 'Username darf maximal 30 Zeichen haben']
  },
  email: {
    type: String,
    required: [true, 'Email ist erforderlich'],
    unique: true,
    lowercase: true,
    match: [/^\\S+@\\S+\\.\\S+$/, 'Bitte gib eine gültige Email ein']
  },
  password: {
    type: String,
    required: [true, 'Password ist erforderlich'],
    minlength: [6, 'Password muss mindestens 6 Zeichen haben']
  },
  profile: {
    firstName: { type: String, trim: true },
    lastName: { type: String, trim: true },
    avatar: { type: String },
    bio: { type: String, maxlength: 500 }
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'moderator'],
    default: 'user'
  },
  isActive: { type: Boolean, default: true },
  lastLogin: Date
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual für Vollname
userSchema.virtual('fullName').get(function() {
  return \`\${this.profile.firstName} \${this.profile.lastName}\`.trim();
});

// Pre-save Hook für Password Hashing
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = { connectDB, User };`,
            description:
              "MongoDB Setup mit Mongoose, Schema Definition und Validation",
          },
          {
            title: "PostgreSQL mit Sequelize",
            code: `// PostgreSQL mit Sequelize ORM
const { Sequelize, DataTypes } = require('sequelize');

// Database Connection
const sequelize = new Sequelize(
  process.env.DB_NAME || 'metalit_db',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASS || 'password',
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

// User Model Definition
const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true,
    validate: {
      len: [3, 30],
      notEmpty: true
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [6, 255]
    }
  },
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  role: {
    type: DataTypes.ENUM('user', 'admin', 'moderator'),
    defaultValue: 'user'
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  lastLogin: DataTypes.DATE
}, {
  timestamps: true,
  tableName: 'users',
  hooks: {
    beforeCreate: async (user) => {
      user.password = await bcrypt.hash(user.password, 12);
    },
    beforeUpdate: async (user) => {
      if (user.changed('password')) {
        user.password = await bcrypt.hash(user.password, 12);
      }
    }
  }
});

// Associations
User.associate = (models) => {
  User.hasMany(models.Post, { foreignKey: 'userId', as: 'posts' });
  User.hasMany(models.Comment, { foreignKey: 'userId', as: 'comments' });
};

// Database Sync
const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('🗄️ PostgreSQL Connection erfolreich');
    
    await sequelize.sync({ alter: true });
    console.log('📊 Database Modelle synchronisiert');
  } catch (error) {
    console.error('Database Sync Error:', error);
  }
};

module.exports = { sequelize, User, syncDatabase };`,
            description:
              "PostgreSQL Setup mit Sequelize ORM, Models und Associations",
          },
        ],
        userEntries: userDatabaseEntries,
        category: "database-integration",
      },
      pageNumber: 15,
      allowNotes: true,
    },

    // Python Backend
    {
      id: "python-backend",
      type: "content",
      title: "4. Python Backend",
      content: {
        sections: [
          {
            title: "FastAPI Modern Python Backend",
            code: `# FastAPI - Modernes Python Backend Framework
from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from pydantic import BaseModel, EmailStr, validator
from typing import List, Optional
import uvicorn
import jwt
from datetime import datetime, timedelta
from passlib.context import CryptContext

# App Initialization
app = FastAPI(
    title="Metal-IT Backend API",
    description="Moderne Python Backend API mit FastAPI",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# Middleware Setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://metal-it.dev"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.add_middleware(
    TrustedHostMiddleware, 
    allowed_hosts=["localhost", "127.0.0.1", "metal-it.dev"]
)

# Pydantic Models
class UserBase(BaseModel):
    username: str
    email: EmailStr
    first_name: Optional[str] = None
    last_name: Optional[str] = None

class UserCreate(UserBase):
    password: str
    
    @validator('password')
    def validate_password(cls, v):
        if len(v) < 8:
            raise ValueError('Password muss mindestens 8 Zeichen haben')
        return v

class UserResponse(UserBase):
    id: int
    is_active: bool
    created_at: datetime
    last_login: Optional[datetime] = None
    
    class Config:
        orm_mode = True

class Token(BaseModel):
    access_token: str
    token_type: str
    expires_in: int

# Security Setup
SECRET_KEY = "metal-it-secret-key-2025"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
security = HTTPBearer()

# Authentication Functions
def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt`,
            description:
              "FastAPI Setup mit Pydantic Models, Security und Middleware",
          },
        ],
        userEntries: userPythonEntries,
        category: "python-backend",
      },
      pageNumber: 22,
      allowNotes: true,
    },
  ];

  /**
   * === USER ENTRY MANAGEMENT FUNCTIONS ===
   */

  /**
   * Get User Entries for Category
   */
  const getUserEntries = (category) => {
    switch (category) {
      case "toc":
        return userTocEntries;
      case "nodejs-basics":
        return userNodejsEntries;
      case "express-framework":
        return userExpressEntries;
      case "database-integration":
        return userDatabaseEntries;
      case "python-backend":
        return userPythonEntries;
      case "api-design":
        return userApiEntries;
      case "deployment":
        return userDeploymentEntries;
      default:
        return [];
    }
  };

  /**
   * Set User Entries for Category
   */
  const setUserEntries = (category, entries) => {
    switch (category) {
      case "toc":
        setUserTocEntries(entries);
        break;
      case "nodejs-basics":
        setUserNodejsEntries(entries);
        break;
      case "express-framework":
        setUserExpressEntries(entries);
        break;
      case "database-integration":
        setUserDatabaseEntries(entries);
        break;
      case "python-backend":
        setUserPythonEntries(entries);
        break;
      case "api-design":
        setUserApiEntries(entries);
        break;
      case "deployment":
        setUserDeploymentEntries(entries);
        break;
    }
  };

  /**
   * Add New User Entry - Erweitert für TOC-Seitenerstellung
   */
  const addUserEntry = (category, entry) => {
    const currentEntries = getUserEntries(category);
    const newEntry = {
      id: Date.now().toString(),
      title: entry.title,
      content: entry.content,
      type: entry.type,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    // Wenn es ein TOC-Eintrag ist, erstelle eine neue dynamische Seite
    if (category === "toc") {
      const newPageNumber = bookStructure.length + dynamicPages.length + 1;
      const newPage = {
        id: `user-page-${newEntry.id}`,
        type: "content",
        title: entry.title,
        pageNumber: newPageNumber,
        isUserGenerated: true,
        allowNotes: true,
        content: {
          title: entry.title,
          category: `user-category-${newEntry.id}`,
          sections: [
            {
              title: "Eigener Inhalt",
              description:
                entry.content ||
                "Hier kannst du deinen eigenen Inhalt hinzufügen...",
            },
          ],
        },
      };

      // Seite zu dynamischen Seiten hinzufügen
      setDynamicPages((prev) => [...prev, newPage]);

      // Entry mit Seiten-Referenz erweitern
      newEntry.pageReference = newPageNumber;
      newEntry.pageId = newPage.id;

      console.log(
        `🔥 Neue dynamische Seite erstellt: ${entry.title} (Seite ${newPageNumber})`
      );
    }

    setUserEntries(category, [...currentEntries, newEntry]);
    console.log(`✅ Neuer Eintrag in ${category} hinzugefügt:`, newEntry.title);
  };

  /**
   * Edit User Entry
   */
  const editUserEntry = (category, entryId, updatedData) => {
    const currentEntries = getUserEntries(category);
    const updatedEntries = currentEntries.map((entry) =>
      entry.id === entryId
        ? {
            ...entry,
            ...updatedData,
            updatedAt: new Date().toISOString(),
          }
        : entry
    );

    setUserEntries(category, updatedEntries);
    console.log(`📝 Eintrag in ${category} bearbeitet:`, entryId);
  };

  /**
   * Delete User Entry - Erweitert für TOC-Seiten-Löschung
   */
  const deleteUserEntry = (category, entryId) => {
    const currentEntries = getUserEntries(category);

    // Wenn es ein TOC-Eintrag ist, lösche auch die zugehörige Seite
    if (category === "toc") {
      const entryToDelete = currentEntries.find(
        (entry) => entry.id === entryId
      );
      if (entryToDelete && entryToDelete.pageId) {
        setDynamicPages((prev) =>
          prev.filter((page) => page.id !== entryToDelete.pageId)
        );
        console.log(`🗑️ Dynamische Seite gelöscht: ${entryToDelete.pageId}`);
      }
    }

    const filteredEntries = currentEntries.filter(
      (entry) => entry.id !== entryId
    );

    setUserEntries(category, filteredEntries);
    console.log(`🗑️ Eintrag aus ${category} gelöscht:`, entryId);
  };

  /**
   * Reset All Entries for Category - Erweitert für TOC-Seiten-Reset
   */
  const resetCategoryEntries = (category) => {
    // Wenn TOC-Kategorie, lösche auch alle dynamischen Seiten
    if (category === "toc") {
      const tocEntries = getUserEntries("toc");
      const pageIdsToDelete = tocEntries
        .filter((entry) => entry.pageId)
        .map((entry) => entry.pageId);

      setDynamicPages((prev) =>
        prev.filter((page) => !pageIdsToDelete.includes(page.id))
      );
      console.log(`🗑️ ${pageIdsToDelete.length} dynamische Seiten gelöscht`);
    }

    setUserEntries(category, []);
    console.log(`🔄 Alle Einträge in ${category} zurückgesetzt`);
  };

  /**
   * Reset All User Entries (Complete Reset) - Erweitert für dynamische Seiten
   */
  const resetAllEntries = () => {
    setUserTocEntries([]);
    setUserNodejsEntries([]);
    setUserExpressEntries([]);
    setUserDatabaseEntries([]);
    setUserPythonEntries([]);
    setUserApiEntries([]);
    setUserDeploymentEntries([]);
    setUserNotes({});
    setBookmarks(new Set());

    // Alle dynamischen Seiten löschen
    setDynamicPages([]);

    console.log(
      "🔥 Alle Benutzer-Einträge und dynamische Seiten zurückgesetzt!"
    );
  };

  /**
   * Open Add Entry Modal
   */
  const openAddModal = (category) => {
    setCurrentCategory(category);
    setNewEntryData({ title: "", content: "", type: "text" });
    setEditingEntryIndex(null);
    setShowAddModal(true);
  };

  /**
   * Open Edit Entry Modal
   */
  const openEditModal = (category, entry) => {
    setCurrentCategory(category);
    setNewEntryData({
      title: entry.title,
      content: entry.content,
      type: entry.type,
    });
    setEditingEntryIndex(entry.id);
    setShowAddModal(true);
  };

  /**
   * Save Entry (Add or Edit)
   */
  const saveEntry = () => {
    if (!newEntryData.title.trim()) {
      alert("Bitte gib einen Titel ein!");
      return;
    }

    if (editingEntryIndex) {
      // Edit existing entry
      editUserEntry(currentCategory, editingEntryIndex, newEntryData);
    } else {
      // Add new entry
      addUserEntry(currentCategory, newEntryData);
    }

    setShowAddModal(false);
    setNewEntryData({ title: "", content: "", type: "text" });
    setEditingEntryIndex(null);
  };

  /**
   * Open Delete Confirmation
   */
  const openDeleteModal = (category, entryId) => {
    setDeleteTarget({ category, entryId });
    setShowDeleteModal(true);
  };

  /**
   * Confirm Delete Entry
   */
  const confirmDeleteEntry = () => {
    if (deleteTarget) {
      deleteUserEntry(deleteTarget.category, deleteTarget.entryId);
      setDeleteTarget(null);
      setShowDeleteModal(false);
    }
  };

  /**
   * Open Reset Category Modal
   */
  const openResetModal = (category) => {
    setResetCategory(category);
    setShowResetModal(true);
  };

  /**
   * Confirm Reset Category
   */
  const confirmResetCategory = () => {
    if (resetCategory === "all") {
      resetAllEntries();
    } else {
      resetCategoryEntries(resetCategory);
    }
    setShowResetModal(false);
    setResetCategory("");
  };

  /**
   * Buch öffnen/schließen
   */
  const toggleBook = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setCurrentPage(0);
    }
  };

  /**
   * Zur nächsten Seite blättern - Erweitert für dynamische Seiten
   */
  const nextPage = () => {
    const allPages = getAllPages();
    if (currentPage < allPages.length - 1 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  /**
   * Zur vorherigen Seite blättern - Erweitert für dynamische Seiten
   */
  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  /**
   * Aktueller Seiteninhalt - Kombiniert statische und dynamische Seiten
   */
  const getAllPages = () => {
    return [...bookStructure, ...dynamicPages];
  };

  const currentPageData = getAllPages()[currentPage];

  /**
   * Direkt zu einer Seite springen - Erweitert für dynamische Seiten
   */
  const goToPage = (pageIndex) => {
    const allPages = getAllPages();
    if (pageIndex >= 0 && pageIndex < allPages.length) {
      setCurrentPage(pageIndex);
      setShowTableOfContents(false);
    }
  };

  /**
   * Zu User-Seite navigieren
   */
  const goToUserPage = (pageId) => {
    const allPages = getAllPages();
    const pageIndex = allPages.findIndex((page) => page.id === pageId);
    if (pageIndex !== -1) {
      goToPage(pageIndex);
    }
  };

  /**
   * Lesezeichen hinzufügen/entfernen
   */
  const toggleBookmark = (pageId) => {
    const newBookmarks = new Set(bookmarks);
    if (newBookmarks.has(pageId)) {
      newBookmarks.delete(pageId);
    } else {
      newBookmarks.add(pageId);
    }
    setBookmarks(newBookmarks);
  };

  /**
   * Notiz speichern
   */
  const saveNote = (pageId, noteText) => {
    setUserNotes({ ...userNotes, [pageId]: noteText });
    setEditingNote(null);
  };

  /**
   * Render Cover Page
   */
  const renderCover = (page) => (
    <div className="backend-book-cover">
      <div className="cover-title">{page.title}</div>
      <div className="cover-subtitle">{page.subtitle}</div>
      <div className="cover-author">von {page.author}</div>
      <div className="cover-version">{page.version}</div>
      <div className="cover-decoration">🖥️</div>
    </div>
  );

  /**
   * Render Table of Contents with User Entries
   */
  const renderTableOfContents = (page) => (
    <div className="backend-toc">
      <div className="toc-header">
        <h2 className="toc-title">{page.title}</h2>
        <div className="toc-controls">
          <button
            className="add-entry-btn"
            onClick={() => openAddModal("toc")}
            title="Neues Kapitel hinzufügen"
          >
            ➕ Kapitel
          </button>
          <button
            className="reset-btn"
            onClick={() => openResetModal("toc")}
            title="Alle eigenen Kapitel löschen"
          >
            🔄 Reset
          </button>
        </div>
      </div>

      <div className="toc-chapters">
        {/* Original Chapters */}
        {page.chapters.map((chapter, index) => (
          <div
            key={index}
            className="toc-chapter original-chapter"
            onClick={() => goToPage(chapter.page - 1)}
          >
            <span className="chapter-icon">{chapter.icon}</span>
            <span className="chapter-title">{chapter.title}</span>
            <span className="chapter-page">Seite {chapter.page}</span>
          </div>
        ))}

        {/* User Added Chapters - Klickbar für Navigation */}
        {getUserEntries("toc").map((userChapter) => (
          <div
            key={userChapter.id}
            className="toc-chapter user-chapter clickable"
          >
            <div
              className="chapter-main-content"
              onClick={() => {
                if (userChapter.pageId) {
                  goToUserPage(userChapter.pageId);
                }
              }}
              title="Klicken um zur Seite zu navigieren"
            >
              <span className="chapter-icon">👤</span>
              <div className="chapter-content">
                <span className="chapter-title">{userChapter.title}</span>
                <div className="chapter-description">{userChapter.content}</div>
                <div className="chapter-meta">
                  <span className="chapter-date">
                    Erstellt:{" "}
                    {new Date(userChapter.createdAt).toLocaleDateString()}
                  </span>
                  {userChapter.pageReference && (
                    <span className="chapter-page">
                      Seite {userChapter.pageReference}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div
              className="chapter-actions"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="edit-btn"
                onClick={() => openEditModal("toc", userChapter)}
                title="Bearbeiten"
              >
                ✏️
              </button>
              <button
                className="delete-btn"
                onClick={() => openDeleteModal("toc", userChapter.id)}
                title="Löschen"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}

        {/* Empty State for User Entries */}
        {getUserEntries("toc").length === 0 && (
          <div className="empty-user-entries">
            <span className="empty-icon">📝</span>
            <span className="empty-text">
              Hier erscheinen deine eigenen Kapitel...
            </span>
          </div>
        )}
      </div>
    </div>
  );

  /**
   * Render Content Page with User Entries
   */
  const renderContent = (page) => (
    <div className="backend-content-page">
      <div className="content-header">
        <h2 className="content-title">{page.title}</h2>
        <div className="content-controls">
          <button
            className="add-entry-btn"
            onClick={() => openAddModal(page.content.category)}
            title="Neuen Inhalt hinzufügen"
          >
            ➕ Eintrag
          </button>
          <button
            className="reset-btn"
            onClick={() => openResetModal(page.content.category)}
            title="Alle eigenen Einträge löschen"
          >
            🔄 Reset
          </button>
        </div>
      </div>

      {/* Original Sections */}
      <div className="original-sections">
        {page.content.sections.map((section, index) => (
          <div key={index} className="content-section original-section">
            <h3 className="section-title">{section.title}</h3>
            <p className="section-description">{section.description}</p>
            <pre className="code-block">
              <code>{section.code}</code>
            </pre>
          </div>
        ))}
      </div>

      {/* User Added Sections */}
      <div className="user-sections">
        <h3 className="user-sections-title">
          👤 Deine Einträge in {page.title}
        </h3>

        {getUserEntries(page.content.category).map((userEntry) => (
          <div key={userEntry.id} className="content-section user-section">
            <div className="user-section-header">
              <h4 className="user-section-title">{userEntry.title}</h4>
              <div className="user-section-actions">
                <button
                  className="edit-btn"
                  onClick={() =>
                    openEditModal(page.content.category, userEntry)
                  }
                  title="Bearbeiten"
                >
                  ✏️
                </button>
                <button
                  className="delete-btn"
                  onClick={() =>
                    openDeleteModal(page.content.category, userEntry.id)
                  }
                  title="Löschen"
                >
                  🗑️
                </button>
              </div>
            </div>

            <div className="user-section-content">
              {userEntry.type === "code" ? (
                <pre className="code-block user-code">
                  <code>{userEntry.content}</code>
                </pre>
              ) : (
                <div className="user-text-content">
                  {userEntry.content.split("\n").map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              )}
            </div>

            <div className="user-section-meta">
              <span className="creation-date">
                Erstellt: {new Date(userEntry.createdAt).toLocaleDateString()}
              </span>
              {userEntry.updatedAt !== userEntry.createdAt && (
                <span className="update-date">
                  Bearbeitet:{" "}
                  {new Date(userEntry.updatedAt).toLocaleDateString()}
                </span>
              )}
            </div>
          </div>
        ))}

        {/* Empty State for User Sections */}
        {getUserEntries(page.content.category).length === 0 && (
          <div className="empty-user-sections">
            <span className="empty-icon">📝</span>
            <span className="empty-text">
              Hier erscheinen deine eigenen Code-Beispiele und Notizen...
            </span>
          </div>
        )}
      </div>

      {/* User Notes Section */}
      {page.allowNotes && (
        <div className="notes-section">
          <h4>📝 Deine Notizen zu diesem Kapitel</h4>
          {userNotes[page.id] ? (
            <div className="existing-note">
              <p>{userNotes[page.id]}</p>
              <button onClick={() => setEditingNote(page.id)}>
                Bearbeiten
              </button>
            </div>
          ) : (
            <button onClick={() => setEditingNote(page.id)}>
              Notiz hinzufügen
            </button>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className="backend-book3d-container">
      <div
        className={`backend-book3d ${isOpen ? "open" : "closed"}`}
        ref={bookRef}
        onClick={!isOpen ? toggleBook : undefined}
      >
        {/* Buch-Cover (sichtbar wenn geschlossen) */}
        {!isOpen && (
          <div className="book-spine">
            <div className="spine-title">Backend Development</div>
            <div className="spine-author">Metal-IT</div>
          </div>
        )}

        {/* Buch-Inhalt (sichtbar wenn geöffnet) */}
        {isOpen && (
          <>
            {/* Linke Seite */}
            <div
              className={`book-page left-page ${isFlipping ? "flipping" : ""}`}
            >
              {currentPage > 0 && (
                <>
                  {bookStructure[currentPage - 1].type === "cover" &&
                    renderCover(bookStructure[currentPage - 1])}
                  {bookStructure[currentPage - 1].type ===
                    "table-of-contents" &&
                    renderTableOfContents(bookStructure[currentPage - 1])}
                  {bookStructure[currentPage - 1].type === "content" &&
                    renderContent(bookStructure[currentPage - 1])}
                </>
              )}
            </div>

            {/* Rechte Seite */}
            <div
              className={`book-page right-page ${isFlipping ? "flipping" : ""}`}
            >
              {currentPageData.type === "cover" && renderCover(currentPageData)}
              {currentPageData.type === "table-of-contents" &&
                renderTableOfContents(currentPageData)}
              {currentPageData.type === "content" &&
                renderContent(currentPageData)}
            </div>

            {/* Navigation Controls */}
            <div className="book-controls">
              <button
                className="nav-btn prev"
                onClick={prevPage}
                disabled={currentPage === 0}
              >
                ◀ Zurück
              </button>

              <div className="page-info">
                {currentPageData.pageNumber && (
                  <span>Seite {currentPageData.pageNumber}</span>
                )}
              </div>

              <button
                className="nav-btn next"
                onClick={nextPage}
                disabled={currentPage === getAllPages().length - 1}
              >
                Weiter ▶
              </button>
            </div>

            {/* Bookmark Button */}
            {currentPageData.allowNotes && (
              <button
                className={`bookmark-btn ${
                  bookmarks.has(currentPageData.id) ? "active" : ""
                }`}
                onClick={() => toggleBookmark(currentPageData.id)}
              >
                🔖
              </button>
            )}

            {/* Close Button */}
            <button className="close-book-btn" onClick={toggleBook}>
              📖 Schließen
            </button>
          </>
        )}
      </div>

      {/* Note Editing Modal */}
      {editingNote && (
        <div className="note-modal-overlay">
          <div className="note-modal">
            <h3>
              Notiz für {bookStructure.find((p) => p.id === editingNote)?.title}
            </h3>
            <textarea
              placeholder="Deine Notizen hier..."
              defaultValue={userNotes[editingNote] || ""}
              rows={6}
            />
            <div className="modal-actions">
              <button onClick={() => setEditingNote(null)}>Abbrechen</button>
              <button
                onClick={(e) => {
                  const noteText =
                    e.target.parentElement.parentElement.querySelector(
                      "textarea"
                    ).value;
                  saveNote(editingNote, noteText);
                }}
              >
                Speichern
              </button>
            </div>
          </div>
        </div>
      )}

      {/* === USER ENTRY MODALS === */}

      {/* Add/Edit Entry Modal */}
      {showAddModal && (
        <div className="entry-modal-overlay">
          <div className="entry-modal">
            <div className="modal-header">
              <h3>
                {editingEntryIndex
                  ? "Eintrag bearbeiten"
                  : "Neuen Eintrag hinzufügen"}
              </h3>
              <button
                className="close-modal-btn"
                onClick={() => setShowAddModal(false)}
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              <div className="form-group">
                <label>Titel:</label>
                <input
                  type="text"
                  value={newEntryData.title}
                  onChange={(e) =>
                    setNewEntryData({
                      ...newEntryData,
                      title: e.target.value,
                    })
                  }
                  placeholder="Titel des Eintrags..."
                />
              </div>

              <div className="form-group">
                <label>Typ:</label>
                <select
                  value={newEntryData.type}
                  onChange={(e) =>
                    setNewEntryData({
                      ...newEntryData,
                      type: e.target.value,
                    })
                  }
                >
                  <option value="text">Text</option>
                  <option value="code">Code</option>
                </select>
              </div>

              <div className="form-group">
                <label>Inhalt:</label>
                <textarea
                  value={newEntryData.content}
                  onChange={(e) =>
                    setNewEntryData({
                      ...newEntryData,
                      content: e.target.value,
                    })
                  }
                  placeholder={
                    newEntryData.type === "code"
                      ? "Code hier eingeben..."
                      : "Text hier eingeben..."
                  }
                  rows={newEntryData.type === "code" ? 12 : 6}
                  className={
                    newEntryData.type === "code" ? "code-textarea" : ""
                  }
                />
              </div>
            </div>

            <div className="modal-actions">
              <button
                className="cancel-btn"
                onClick={() => setShowAddModal(false)}
              >
                Abbrechen
              </button>
              <button className="save-btn" onClick={saveEntry}>
                {editingEntryIndex
                  ? "Änderungen speichern"
                  : "Eintrag hinzufügen"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="delete-modal-overlay">
          <div className="delete-modal">
            <div className="modal-header">
              <h3>🗑️ Eintrag löschen</h3>
            </div>

            <div className="modal-body">
              <p>Möchtest du diesen Eintrag wirklich löschen?</p>
              <p className="warning-text">
                Diese Aktion kann nicht rückgängig gemacht werden.
              </p>
            </div>

            <div className="modal-actions">
              <button
                className="cancel-btn"
                onClick={() => setShowDeleteModal(false)}
              >
                Abbrechen
              </button>
              <button
                className="delete-confirm-btn"
                onClick={confirmDeleteEntry}
              >
                Ja, löschen
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reset Confirmation Modal */}
      {showResetModal && (
        <div className="reset-modal-overlay">
          <div className="reset-modal">
            <div className="modal-header">
              <h3>🔄 Einträge zurücksetzen</h3>
            </div>

            <div className="modal-body">
              {resetCategory === "all" ? (
                <>
                  <p>Möchtest du wirklich ALLE deine Einträge zurücksetzen?</p>
                  <p className="warning-text">
                    Das betrifft alle Kapitel, Notizen und Lesezeichen!
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Möchtest du alle Einträge in dieser Kategorie zurücksetzen?
                  </p>
                  <p className="warning-text">
                    Alle deine eigenen Einträge in diesem Bereich werden
                    gelöscht.
                  </p>
                </>
              )}
            </div>

            <div className="modal-actions">
              <button
                className="cancel-btn"
                onClick={() => setShowResetModal(false)}
              >
                Abbrechen
              </button>
              <button
                className="reset-confirm-btn"
                onClick={confirmResetCategory}
              >
                Ja, zurücksetzen
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global Reset Button (nur wenn Buch offen) */}
      {isOpen && (
        <div className="global-actions">
          <button
            className="global-reset-btn"
            onClick={() => openResetModal("all")}
            title="Alle Benutzer-Einträge zurücksetzen"
          >
            🔥 Alles zurücksetzen
          </button>
        </div>
      )}
    </div>
  );
};

export default BackendBook3D;
