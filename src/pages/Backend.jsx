/**
 * Backend - Backend Entwicklung Lernseite
 * Comprehensive Backend Lernseite mit 3D-Buch und interaktiven Features
 * Metal-Design mit Backend-spezifischen Farben (Server-grün und Database-blau)
 * @returns {JSX.Element} Backend Entwicklung Lernseite
 */
import React, { useState, useEffect } from "react";
import BackendBook3D from "../components/BackendBook3D";
import MetalCodeBlock from "../components/MetalCodeBlock";
import "./Backend.scss";

/**
 * Backend Entwicklung Hauptseite
 * Umfassende Backend-Lerninhalte mit 3D-Buch-Integration
 */
const Backend = () => {
  // === State für interaktive Features ===
  const [activeBackendType, setActiveBackendType] = useState("nodejs");
  const [showQuickStart, setShowQuickStart] = useState(true);
  const [completedTopics, setCompletedTopics] = useState(new Set());

  /**
   * Node.js Backend QuickStart Beispiele
   */
  const nodejsQuickStart = {
    title: "Node.js Backend Schnellstart",
    description: "Moderne Server-Entwicklung mit Node.js und Express",
    examples: [
      {
        title: "Express Server Setup & REST API",
        code: `// Express Server mit modernen Features
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware Setup
app.use(helmet()); // Security headers
app.use(cors()); // CORS handling
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// REST API Routes
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(\`🚀 Server running on port \${PORT}\`);
});`,
      },
      {
        title: "Database Integration & Authentication",
        code: `// MongoDB mit Mongoose & JWT Authentication
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  createdAt: { type: Date, default: Date.now }
});

// Password Hashing Middleware
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

const User = mongoose.model('User', userSchema);

// JWT Authentication Middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }
  
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = user;
    next();
  });
};`,
      },
    ],
  };

  /**
   * Python Django/FastAPI QuickStart Beispiele
   */
  const pythonQuickStart = {
    title: "Python Backend Frameworks",
    description: "Django & FastAPI für moderne Python-Backend-Entwicklung",
    examples: [
      {
        title: "FastAPI REST API mit Pydantic",
        code: `# FastAPI Modern Python Backend
from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel, EmailStr
from typing import List, Optional
import uvicorn
import jwt
from datetime import datetime, timedelta

app = FastAPI(
    title="Metal-IT Backend API",
    description="Moderne Python Backend API",
    version="1.0.0"
)

# Pydantic Models
class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str

class UserResponse(BaseModel):
    id: int
    username: str
    email: str
    created_at: datetime
    
    class Config:
        orm_mode = True

class TokenResponse(BaseModel):
    access_token: str
    token_type: str

# Security
security = HTTPBearer()

async def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)):
    try:
        payload = jwt.decode(credentials.credentials, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise HTTPException(status_code=401, detail="Invalid token")
        return username
    except jwt.PyJWTError:
        raise HTTPException(status_code=401, detail="Invalid token")

# API Routes
@app.post("/api/users/register", response_model=UserResponse)
async def register_user(user: UserCreate):
    # User registration logic
    return {"message": "User created successfully"}

@app.get("/api/users/me", response_model=UserResponse)
async def get_current_user_profile(current_user: str = Depends(get_current_user)):
    # Get user profile logic
    return {"user": current_user}`,
      },
      {
        title: "Django REST Framework",
        code: `# Django REST Framework Setup
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.contrib.auth.models import User
from .models import Project
from .serializers import ProjectSerializer, UserSerializer

# Django Models
class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    
    class Meta:
        ordering = ['-created_at']

# API Views
class ProjectListCreateView(generics.ListCreateAPIView):
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]
    
    def get_queryset(self):
        return Project.objects.filter(owner=self.request.user)
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class ProjectDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return Project.objects.filter(owner=self.request.user)`,
      },
    ],
  };

  /**
   * Learning Topics Structure
   */
  const learningTopics = {
    nodejs: [
      {
        id: "nodejs-fundamentals",
        title: "Node.js Fundamentals",
        icon: "🟢",
        difficulty: "Beginner",
      },
      {
        id: "express-framework",
        title: "Express.js Framework",
        icon: "🚀",
        difficulty: "Intermediate",
      },
      {
        id: "database-integration",
        title: "Database Integration",
        icon: "🗄️",
        difficulty: "Intermediate",
      },
      {
        id: "authentication",
        title: "Authentication & Security",
        icon: "🔐",
        difficulty: "Advanced",
      },
      {
        id: "api-design",
        title: "REST API Design",
        icon: "🌐",
        difficulty: "Intermediate",
      },
      {
        id: "testing-deployment",
        title: "Testing & Deployment",
        icon: "🧪",
        difficulty: "Advanced",
      },
    ],
    python: [
      {
        id: "django-basics",
        title: "Django Framework",
        icon: "🐍",
        difficulty: "Beginner",
      },
      {
        id: "fastapi-modern",
        title: "FastAPI Modern Python",
        icon: "⚡",
        difficulty: "Intermediate",
      },
      {
        id: "database-orm",
        title: "Database & ORM",
        icon: "🔗",
        difficulty: "Intermediate",
      },
      {
        id: "async-python",
        title: "Async Python",
        icon: "🔄",
        difficulty: "Advanced",
      },
      {
        id: "microservices",
        title: "Microservices Architecture",
        icon: "🏗️",
        difficulty: "Advanced",
      },
      {
        id: "devops-python",
        title: "DevOps & Monitoring",
        icon: "📊",
        difficulty: "Advanced",
      },
    ],
  };

  /**
   * Handle Backend Type Switch
   */
  const handleBackendSwitch = (backendType) => {
    setActiveBackendType(backendType);
    console.log(`🖥️ Backend gewechselt zu: ${backendType}`);
  };

  /**
   * Mark Topic as Completed
   */
  const markTopicCompleted = (topicId) => {
    setCompletedTopics((prev) => new Set([...prev, topicId]));
    console.log(`✅ Topic abgeschlossen: ${topicId}`);
  };

  /**
   * Navigation zu Detail-Seite
   */
  const navigateToDetails = () => {
    window.location.hash = "#backend-detail";
    console.log("🚀 Navigation zu Backend Details");
  };

  const currentQuickStart =
    activeBackendType === "nodejs" ? nodejsQuickStart : pythonQuickStart;
  const currentTopics = learningTopics[activeBackendType];

  return (
    <div className="backend-page">
      {/* Header Section */}
      <header className="page-header">
        <div className="header-content">
          <h1 className="page-title">Backend Entwicklung</h1>
          <p className="page-subtitle">
            Von Node.js bis Python - Moderne Server-Entwicklung im Metal-Style
          </p>
        </div>
      </header>

      {/* 3D Book Section */}
      <section className="book-section">
        <div className="section-header">
          <h2 className="section-title">📖 Interaktives Backend-Buch</h2>
          <p className="section-description">
            Erkunde Backend-Entwicklung in unserem interaktiven 3D-Buch
          </p>
        </div>
        <BackendBook3D />
      </section>

      {/* Backend Type Toggle */}
      <section className="backend-toggle-section">
        <div className="toggle-container">
          <button
            className={`toggle-btn nodejs ${
              activeBackendType === "nodejs" ? "active" : ""
            }`}
            onClick={() => handleBackendSwitch("nodejs")}
          >
            <span className="toggle-icon">🟢</span>
            Node.js
          </button>
          <button
            className={`toggle-btn python ${
              activeBackendType === "python" ? "active" : ""
            }`}
            onClick={() => handleBackendSwitch("python")}
          >
            <span className="toggle-icon">🐍</span>
            Python
          </button>
        </div>
      </section>

      {/* QuickStart Section */}
      {showQuickStart && (
        <section className="quickstart-section">
          <div className="section-header">
            <h3 className="section-title">{currentQuickStart.title}</h3>
            <p className="section-description">
              {currentQuickStart.description}
            </p>
            <button
              className="close-btn"
              onClick={() => setShowQuickStart(false)}
            >
              ✕
            </button>
          </div>

          <div className="quickstart-examples">
            {currentQuickStart.examples.map((example, index) => (
              <div key={index} className="example-card">
                <h4 className="example-title">{example.title}</h4>
                <MetalCodeBlock
                  code={example.code}
                  language={
                    activeBackendType === "nodejs" ? "javascript" : "python"
                  }
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Learning Topics Grid */}
      <section className="topics-section">
        <div className="section-header">
          <h3 className="section-title">
            🖥️ {activeBackendType === "nodejs" ? "Node.js" : "Python"} Backend
            Lernpfad
          </h3>
          <p className="section-description">
            Strukturierte Backend-Lerninhalte von Beginner bis Advanced Level
          </p>
        </div>

        <div className="topics-grid">
          {currentTopics.map((topic) => (
            <div
              key={topic.id}
              className={`topic-card ${
                completedTopics.has(topic.id) ? "completed" : ""
              }`}
              onClick={() => markTopicCompleted(topic.id)}
            >
              <div className="topic-icon">{topic.icon}</div>
              <div className="topic-content">
                <h4 className="topic-title">{topic.title}</h4>
                <span
                  className={`difficulty-badge ${topic.difficulty.toLowerCase()}`}
                >
                  {topic.difficulty}
                </span>
                {completedTopics.has(topic.id) && (
                  <div className="completed-indicator">✅</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Action Buttons */}
      <section className="actions-section">
        <div className="actions-container">
          <button className="action-btn primary" onClick={navigateToDetails}>
            🚀 Erweiterte Backend-Beispiele & Projekte
          </button>
          <button
            className="action-btn secondary"
            onClick={() => setShowQuickStart(true)}
          >
            📖 QuickStart anzeigen
          </button>
        </div>
      </section>

      {/* Progress Summary */}
      <footer className="progress-footer">
        <div className="progress-content">
          <h4>📊 Dein Backend-Fortschritt</h4>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${
                  (completedTopics.size / currentTopics.length) * 100
                }%`,
              }}
            ></div>
          </div>
          <p className="progress-text">
            {completedTopics.size} von {currentTopics.length} Backend-Themen
            abgeschlossen
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Backend;
