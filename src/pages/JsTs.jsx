/**
 * JsTs - JavaScript & TypeScript Lernseite
 * Comprehensive JS/TS Lernseite mit 3D-Buch und interaktiven Features
 * Metal-Design mit JavaScript-gelb und TypeScript-blau Farbschema
 * @returns {JSX.Element} JavaScript & TypeScript Lernseite
 */
import React, { useState, useEffect } from "react";
import JavaScriptBook3D from "../components/JavaScriptBook3D";
import MetalCodeBlock from "../components/MetalCodeBlock";
import "./JsTs.scss";

/**
 * JavaScript & TypeScript Hauptseite
 * Umfassende Lerninhalte mit 3D-Buch-Integration
 */
const JsTs = () => {
  // === State für interaktive Features ===
  const [activeLanguage, setActiveLanguage] = useState("javascript");
  const [showQuickStart, setShowQuickStart] = useState(true);
  const [completedTopics, setCompletedTopics] = useState(new Set());

  /**
   * JavaScript QuickStart Beispiele
   */
  const javascriptQuickStart = {
    title: "JavaScript ES6+ Schnellstart",
    description: "Moderne JavaScript Syntax und Features",
    examples: [
      {
        title: "Arrow Functions & Template Literals",
        code: `// Modern JavaScript Syntax
const greetUser = (name, role = 'Developer') => {
  return \`🚀 Hello \${name}, welcome \${role}!\`;
};

// Destructuring Assignment
const user = { name: 'Alex', age: 28, skills: ['JS', 'React'] };
const { name, skills: [primarySkill] } = user;

// Async/Await
const fetchUserData = async (userId) => {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch:', error);
  }
};`,
      },
      {
        title: "Modern Array Methods",
        code: `// Functional Programming with Arrays
const numbers = [1, 2, 3, 4, 5];

// Transform data
const doubled = numbers.map(n => n * 2);
const filtered = numbers.filter(n => n > 2);
const sum = numbers.reduce((acc, n) => acc + n, 0);

// Advanced Array Methods
const users = [
  { name: 'John', active: true, score: 85 },
  { name: 'Jane', active: false, score: 92 },
  { name: 'Bob', active: true, score: 78 }
];

const activeUsers = users
  .filter(user => user.active)
  .sort((a, b) => b.score - a.score)
  .map(user => ({ ...user, grade: user.score > 80 ? 'A' : 'B' }));`,
      },
    ],
  };

  /**
   * TypeScript QuickStart Beispiele
   */
  const typescriptQuickStart = {
    title: "TypeScript Advanced Types",
    description: "Type-safe JavaScript mit erweiterten Features",
    examples: [
      {
        title: "Interfaces & Types",
        code: `// TypeScript Type System
interface User {
  id: number;
  name: string;
  email: string;
  roles?: string[];
}

// Advanced Types
type UserRole = 'admin' | 'user' | 'moderator';
type Optional<T> = { [K in keyof T]?: T[K] };
type RequiredUser = Required<User>;

// Generic Functions
function createApiResponse<T>(data: T, success: boolean = true) {
  return {
    data,
    success,
    timestamp: new Date().toISOString()
  };
}

// Usage Examples
const userResponse = createApiResponse<User>({
  id: 1,
  name: 'TypeScript Master',
  email: 'ts@metal-it.dev'
});`,
      },
      {
        title: "Advanced Generic Patterns",
        code: `// Conditional Types & Mapped Types
type ApiResponse<T> = T extends string 
  ? { message: T }
  : { data: T };

// Utility Types in Action
interface DatabaseEntity {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

type CreateEntityInput<T extends DatabaseEntity> = Omit<T, 'id' | 'createdAt' | 'updatedAt'>;
type UpdateEntityInput<T extends DatabaseEntity> = Partial<CreateEntityInput<T>>;

// Type Guards
function isUser(obj: unknown): obj is User {
  return typeof obj === 'object' && 
         obj !== null && 
         'name' in obj && 
         'email' in obj;
}`,
      },
    ],
  };

  /**
   * Learning Topics Structure
   */
  const learningTopics = {
    javascript: [
      {
        id: "fundamentals",
        title: "JavaScript Fundamentals",
        icon: "🔥",
        difficulty: "Beginner",
      },
      {
        id: "es6-features",
        title: "ES6+ Features",
        icon: "⚡",
        difficulty: "Intermediate",
      },
      {
        id: "async-programming",
        title: "Async Programming",
        icon: "🔄",
        difficulty: "Intermediate",
      },
      {
        id: "functional-programming",
        title: "Functional Programming",
        icon: "🧩",
        difficulty: "Advanced",
      },
      {
        id: "design-patterns",
        title: "Design Patterns",
        icon: "🏗️",
        difficulty: "Advanced",
      },
      {
        id: "testing-debugging",
        title: "Testing & Debugging",
        icon: "🧪",
        difficulty: "Intermediate",
      },
    ],
    typescript: [
      {
        id: "type-system",
        title: "TypeScript Type System",
        icon: "🔷",
        difficulty: "Beginner",
      },
      {
        id: "interfaces-types",
        title: "Interfaces & Types",
        icon: "📋",
        difficulty: "Intermediate",
      },
      {
        id: "generics",
        title: "Advanced Generics",
        icon: "🧬",
        difficulty: "Advanced",
      },
      {
        id: "conditional-types",
        title: "Conditional Types",
        icon: "🎭",
        difficulty: "Advanced",
      },
      {
        id: "decorators",
        title: "Decorators",
        icon: "🎪",
        difficulty: "Advanced",
      },
      {
        id: "utility-types",
        title: "Utility Types",
        icon: "🔧",
        difficulty: "Intermediate",
      },
    ],
  };

  /**
   * Handle Language Switch
   */
  const handleLanguageSwitch = (language) => {
    setActiveLanguage(language);
    console.log(`📚 Sprache gewechselt zu: ${language}`);
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
    window.location.hash = "#js-ts-detail";
    console.log("🚀 Navigation zu JS/TS Details");
  };

  const currentQuickStart =
    activeLanguage === "javascript"
      ? javascriptQuickStart
      : typescriptQuickStart;
  const currentTopics = learningTopics[activeLanguage];

  return (
    <div className="js-ts-page">
      {/* Header Section */}
      <header className="page-header">
        <div className="header-content">
          <h1 className="page-title">JavaScript & TypeScript</h1>
          <p className="page-subtitle">
            Von ES6+ Fundamentals bis Advanced Types - Moderne Webentwicklung im
            Metal-Style
          </p>
        </div>
      </header>

      {/* 3D Book Section */}
      <section className="book-section">
        <div className="section-header">
          <h2 className="section-title">📖 Interaktives Lernbuch</h2>
          <p className="section-description">
            Erkunde JavaScript und TypeScript in unserem interaktiven 3D-Buch
          </p>
        </div>
        <JavaScriptBook3D />
      </section>

      {/* Language Toggle */}
      <section className="language-toggle-section">
        <div className="toggle-container">
          <button
            className={`toggle-btn javascript ${
              activeLanguage === "javascript" ? "active" : ""
            }`}
            onClick={() => handleLanguageSwitch("javascript")}
          >
            <span className="toggle-icon">🟨</span>
            JavaScript
          </button>
          <button
            className={`toggle-btn typescript ${
              activeLanguage === "typescript" ? "active" : ""
            }`}
            onClick={() => handleLanguageSwitch("typescript")}
          >
            <span className="toggle-icon">🔷</span>
            TypeScript
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
                    activeLanguage === "javascript"
                      ? "javascript"
                      : "typescript"
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
            📚 {activeLanguage === "javascript" ? "JavaScript" : "TypeScript"}{" "}
            Lernpfad
          </h3>
          <p className="section-description">
            Strukturierte Lerninhalte von Beginner bis Advanced Level
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
            🚀 Erweiterte Beispiele & Übungen
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
          <h4>📊 Dein Fortschritt</h4>
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
            {completedTopics.size} von {currentTopics.length} Themen
            abgeschlossen
          </p>
        </div>
      </footer>
    </div>
  );
};

export default JsTs;
