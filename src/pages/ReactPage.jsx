/**
 * React Learning Page - 1:1 Layout aus JavaScript & TypeScript
 * Echtes 3D React Buch mit identischer UX/UI
 * Absolute Semantik-Übereinstimmung mit Metal-Design
 */
import React, { useState, useEffect } from "react";
import ReactBook3D from "../components/ReactBook3D";
import "./ReactPage.scss";

/**
 * React Learning Main Page - Identical zu JavaScriptPage
 */
const ReactPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("react");
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [progress, setProgress] = useState({
    react: { completed: 0, total: 7 },
  });

  // Identische Struktur wie JavaScript & TypeScript
  const reactTopics = [
    {
      id: "react-basics",
      title: "React Grundlagen",
      icon: "⚛️",
      description: "Components, JSX, Virtual DOM",
      difficulty: "Beginner",
      color: "#61dafb",
      detailPath: "#react-detail",
      completed: false,
    },
    {
      id: "components-jsx",
      title: "Komponenten & JSX",
      icon: "🧩",
      description: "Component Composition, Props, Event Handling",
      difficulty: "Beginner",
      color: "#0496c7",
      detailPath: "#react-detail",
      completed: false,
    },
    {
      id: "hooks-state",
      title: "Hooks & State",
      icon: "🪝",
      description: "useState, useEffect, Custom Hooks",
      difficulty: "Intermediate",
      color: "#006ba6",
      detailPath: "#react-detail",
      completed: false,
    },
    {
      id: "context-state",
      title: "Context & Zustand",
      icon: "🔄",
      description: "State Management, Context API, Global State",
      difficulty: "Intermediate",
      color: "#61a5c2",
      detailPath: "#react-detail",
      completed: false,
    },
    {
      id: "performance",
      title: "Performance",
      icon: "⚡",
      description: "React.memo, useCallback, useMemo, Optimization",
      difficulty: "Advanced",
      color: "#0496c7",
      detailPath: "#react-detail",
      completed: false,
    },
    {
      id: "routing",
      title: "Routing & Navigation",
      icon: "🛣️",
      description: "React Router, Navigation, URL Parameter",
      difficulty: "Advanced",
      color: "#61dafb",
      detailPath: "#react-detail",
      completed: false,
    },
  ];

  useEffect(() => {
    console.log("🎯 React Learning Page - Metal-IT Edition geladen");
    // Simuliere Fortschritt laden
    const savedProgress = localStorage.getItem("metal-react-progress");
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  const handleTopicComplete = (topicId) => {
    setProgress((prev) => {
      const newProgress = {
        ...prev,
        react: {
          ...prev.react,
          completed: prev.react.completed + 1,
        },
      };
      localStorage.setItem("metal-react-progress", JSON.stringify(newProgress));
      return newProgress;
    });
  };

  const getProgressPercentage = () => {
    return Math.round((progress.react.completed / progress.react.total) * 100);
  };

  return (
    <div className="react-learning-page">
      {/* Header - Identisch zu JavaScript & TypeScript */}
      <div className="page-header">
        <div className="header-content">
          <div className="title-section">
            <h1>
              <span className="react-icon">⚛️</span>
              React Development Mastery
            </h1>
            <p className="subtitle">
              Moderne React-Entwicklung mit Hooks, Context und
              Performance-Optimierung
            </p>
            <div className="metal-divider"></div>
          </div>

          <div className="stats-section">
            <div className="progress-card">
              <div className="progress-header">
                <span className="progress-icon">📊</span>
                <h3>Lernfortschritt</h3>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${getProgressPercentage()}%` }}
                ></div>
              </div>
              <p>
                {progress.react.completed} von {progress.react.total} Kapiteln
                abgeschlossen
              </p>
            </div>

            <div className="language-selector">
              <h4>🎯 Fokus:</h4>
              <div className="language-toggle">
                <button
                  className={`lang-btn ${
                    selectedLanguage === "react" ? "active" : ""
                  }`}
                  onClick={() => setSelectedLanguage("react")}
                >
                  ⚛️ React
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Identisches Layout */}
      <div className="main-content">
        <div className="content-grid">
          {/* Linke Spalte - 3D Buch */}
          <div className="book-section">
            <div className="book-container">
              <ReactBook3D />
              <div className="book-description">
                <h3>📖 Interaktives React-Handbuch</h3>
                <p>
                  Erkunde React durch ein realistisches 3D-Buch mit
                  vollständiger Interaktivität. Blättere durch die Seiten,
                  erstelle eigene Notizen und setze Lesezeichen für wichtige
                  Konzepte.
                </p>
                <div className="book-features">
                  <div className="feature">
                    <span className="feature-icon">📚</span>
                    <span>Inhaltsverzeichnis</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">📝</span>
                    <span>Eigene Notizen</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">🔖</span>
                    <span>Lesezeichen</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">⌨️</span>
                    <span>Keyboard-Navigation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rechte Spalte - Topics Grid */}
          <div className="topics-section">
            <h2 className="section-title">
              <span className="title-icon">🎯</span>
              React Themen & Konzepte
            </h2>

            <div className="topics-grid">
              {reactTopics.map((topic) => (
                <div
                  key={topic.id}
                  className={`topic-card ${
                    selectedTopic === topic.id ? "selected" : ""
                  }`}
                  style={{ "--topic-color": topic.color }}
                >
                  <div className="card-header">
                    <span className="topic-icon">{topic.icon}</span>
                    <div
                      className={`difficulty-badge difficulty-${topic.difficulty.toLowerCase()}`}
                    >
                      {topic.difficulty}
                    </div>
                  </div>

                  <div className="card-content">
                    <h3>{topic.title}</h3>
                    <p>{topic.description}</p>
                  </div>

                  <div className="card-actions">
                    <a href={topic.detailPath} className="learn-btn">
                      ⚡ Lernen
                    </a>
                    <button
                      className="preview-btn"
                      onClick={() =>
                        setSelectedTopic(
                          selectedTopic === topic.id ? null : topic.id
                        )
                      }
                    >
                      👁️ Preview
                    </button>
                    <button
                      className="complete-btn"
                      onClick={() => handleTopicComplete(topic.id)}
                      disabled={topic.completed}
                    >
                      {topic.completed ? "✅ Erledigt" : "📋 Markieren"}
                    </button>
                  </div>

                  {/* Progress Ring */}
                  <div className="progress-ring">
                    <svg width="40" height="40">
                      <circle
                        cx="20"
                        cy="20"
                        r="15"
                        fill="none"
                        stroke="rgba(97, 218, 251, 0.2)"
                        strokeWidth="3"
                      />
                      <circle
                        cx="20"
                        cy="20"
                        r="15"
                        fill="none"
                        stroke={topic.color}
                        strokeWidth="3"
                        strokeDasharray={`${topic.completed ? 94 : 0} 94`}
                        transform="rotate(-90 20 20)"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Topic Preview - Identisch zu JavaScript */}
            {selectedTopic && (
              <div className="topic-preview">
                <div className="preview-header">
                  <h3>
                    <span className="preview-icon">👁️</span>
                    Topic Preview:{" "}
                    {reactTopics.find((t) => t.id === selectedTopic)?.title}
                  </h3>
                  <button
                    className="close-preview"
                    onClick={() => setSelectedTopic(null)}
                  >
                    ✕
                  </button>
                </div>

                <div className="preview-content">
                  {selectedTopic === "react-basics" && (
                    <div className="preview-section">
                      <h4>📚 Was du lernen wirst:</h4>
                      <ul>
                        <li>React Setup und Virtual DOM Konzept</li>
                        <li>JSX Syntax und React.createElement</li>
                        <li>Komponenten-Grundlagen und Props</li>
                        <li>Event Handling in React</li>
                      </ul>
                      <div className="code-preview">
                        <pre>
                          <code>{`const App = () => {
  return (
    <div className="app">
      <h1>Welcome to React Metal-IT</h1>
    </div>
  );
};`}</code>
                        </pre>
                      </div>
                    </div>
                  )}

                  {selectedTopic === "hooks-state" && (
                    <div className="preview-section">
                      <h4>🪝 Hooks Übersicht:</h4>
                      <ul>
                        <li>useState für lokalen State</li>
                        <li>useEffect für Side Effects</li>
                        <li>Custom Hooks erstellen</li>
                        <li>useContext, useReducer, useMemo</li>
                      </ul>
                      <div className="code-preview">
                        <pre>
                          <code>{`const [count, setCount] = useState(0);
const [data, setData] = useState(null);

useEffect(() => {
  fetchData();
}, []);`}</code>
                        </pre>
                      </div>
                    </div>
                  )}

                  <div className="preview-actions">
                    <a
                      href={
                        reactTopics.find((t) => t.id === selectedTopic)
                          ?.detailPath
                      }
                      className="start-learning-btn"
                    >
                      🚀 Jetzt lernen
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Section - Quick Actions */}
        <div className="quick-actions">
          <h3>🚀 Schnellzugriff</h3>
          <div className="actions-grid">
            <a href="#react-examples" className="quick-action-card">
              <span className="action-icon">🧪</span>
              <h4>React Beispiele</h4>
              <p>Praktische Code-Beispiele</p>
            </a>

            <a href="#react-hooks" className="quick-action-card">
              <span className="action-icon">🪝</span>
              <h4>Hooks Referenz</h4>
              <p>Vollständige Hooks-Übersicht</p>
            </a>

            <a href="#react-projects" className="quick-action-card">
              <span className="action-icon">🛠️</span>
              <h4>React Projekte</h4>
              <p>Hands-on Projekterfahrung</p>
            </a>

            <a href="#react-advanced" className="quick-action-card">
              <span className="action-icon">🔥</span>
              <h4>Advanced React</h4>
              <p>Fortgeschrittene Konzepte</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactPage;
