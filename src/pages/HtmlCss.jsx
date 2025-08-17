/**
 * HtmlCss - HTML & CSS Lernseite mit 3D Buch
 * Frontend-Development mit HTML5 und CSS3 Toggle-System
 * Autor: Metal-IT-Team
 */
import React, { useState } from "react";
import HtmlCssBook3D from "../components/HtmlCssBook3D";
import "./HtmlCss.scss";

/**
 * HTML & CSS Entwicklung Hauptseite
 */
const HtmlCss = () => {
  const [activeTab, setActiveTab] = useState("html");

  return (
    <div className="html-css-page">
      {/* Header mit Gradient Background */}
      <div className="html-css-header">
        <div className="header-content">
          <h1 className="page-title">
            <span className="title-icon">🎨</span>
            HTML & CSS Development
            <span className="title-decoration">⚡</span>
          </h1>
          <p className="page-subtitle">
            Modernes Frontend-Design mit semantischem HTML und fortgeschrittenem
            CSS
          </p>
        </div>
      </div>

      {/* Technology Toggle */}
      <div className="tech-toggle-container">
        <div className="tech-toggle">
          <button
            className={`toggle-btn html-btn ${
              activeTab === "html" ? "active" : ""
            }`}
            onClick={() => setActiveTab("html")}
          >
            <span className="btn-icon">📄</span>
            <span className="btn-text">HTML5</span>
            <span className="btn-version">v5.3</span>
          </button>

          <button
            className={`toggle-btn css-btn ${
              activeTab === "css" ? "active" : ""
            }`}
            onClick={() => setActiveTab("css")}
          >
            <span className="btn-icon">🎨</span>
            <span className="btn-text">CSS3</span>
            <span className="btn-version">v3.0</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="html-css-content">
        {/* Left Side - QuickStart */}
        <div className="quickstart-section">
          <div className="section-header">
            <h2 className="section-title">
              <span className="section-icon">🚀</span>
              QuickStart
            </h2>
            <p className="section-subtitle">
              Schneller Einstieg in {activeTab === "html" ? "HTML5" : "CSS3"}
            </p>
          </div>

          <div className="quickstart-content">
            {activeTab === "html" ? (
              <div className="html-quickstart">
                <div className="code-example">
                  <div className="code-header">
                    <span className="file-name">index.html</span>
                    <span className="language-badge">HTML5</span>
                  </div>
                  <pre className="code-block">
                    <code>{`<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Metal-IT Website</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="main-header">
        <nav class="navigation">
            <ul class="nav-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
            </ul>
        </nav>
    </header>
    
    <main class="main-content">
        <section class="hero-section">
            <h1>Welcome to Metal-IT</h1>
            <p>Apokalyptische Entwicklungspower!</p>
        </section>
    </main>
</body>
</html>`}</code>
                  </pre>
                </div>

                <div className="features-list">
                  <h3>🔥 HTML5 Features</h3>
                  <ul>
                    <li>
                      <span className="feature-icon">📱</span>
                      Responsive Meta Tags
                    </li>
                    <li>
                      <span className="feature-icon">🎯</span>
                      Semantische Elemente
                    </li>
                    <li>
                      <span className="feature-icon">♿</span>
                      Accessibility Support
                    </li>
                    <li>
                      <span className="feature-icon">⚡</span>
                      Performance Optimiert
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="css-quickstart">
                <div className="code-example">
                  <div className="code-header">
                    <span className="file-name">styles.css</span>
                    <span className="language-badge">CSS3</span>
                  </div>
                  <pre className="code-block">
                    <code>{`/* CSS Custom Properties (Variablen) */
:root {
  --primary-color: #ff6b35;
  --secondary-color: #004e89;
  --accent-color: #00d4ff;
  --text-color: #ffffff;
  --bg-gradient: linear-gradient(135deg, 
    var(--primary-color), 
    var(--secondary-color)
  );
}

/* Moderne CSS Grid & Flexbox */
.main-layout {
  display: grid;
  grid-template-areas: 
    "header header"
    "sidebar content"
    "footer footer";
  grid-template-columns: 250px 1fr;
  min-height: 100vh;
}

/* CSS Animations */
@keyframes metalGlow {
  0%, 100% { 
    box-shadow: 0 0 20px var(--accent-color); 
  }
  50% { 
    box-shadow: 0 0 40px var(--accent-color); 
  }
}

.metal-button {
  background: var(--bg-gradient);
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  color: var(--text-color);
  cursor: pointer;
  transition: all 0.3s ease;
  animation: metalGlow 2s infinite;
}

.metal-button:hover {
  transform: scale(1.05);
}`}</code>
                  </pre>
                </div>

                <div className="features-list">
                  <h3>🎨 CSS3 Features</h3>
                  <ul>
                    <li>
                      <span className="feature-icon">🎭</span>
                      Custom Properties
                    </li>
                    <li>
                      <span className="feature-icon">📐</span>
                      Grid & Flexbox
                    </li>
                    <li>
                      <span className="feature-icon">✨</span>
                      Animations & Transitions
                    </li>
                    <li>
                      <span className="feature-icon">📱</span>
                      Responsive Design
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Side - 3D Book */}
        <div className="book-section">
          <div className="book-container">
            <HtmlCssBook3D />
          </div>
        </div>
      </div>

      {/* Learning Topics Grid */}
      <div className="learning-topics">
        <h2 className="topics-title">
          <span className="topics-icon">📚</span>
          Lernbereiche
        </h2>

        <div className="topics-grid">
          <div className="topic-card html-card">
            <div className="card-header">
              <span className="card-icon">📄</span>
              <h3>HTML Grundlagen</h3>
            </div>
            <div className="card-content">
              <ul>
                <li>Semantische HTML5 Elemente</li>
                <li>Formulare & Validierung</li>
                <li>Accessibility & SEO</li>
                <li>Performance Optimierung</li>
              </ul>
            </div>
            <div className="card-progress">
              <div className="progress-bar">
                <div className="progress-fill html-progress"></div>
              </div>
              <span className="progress-text">85% Abgeschlossen</span>
            </div>
          </div>

          <div className="topic-card css-card">
            <div className="card-header">
              <span className="card-icon">🎨</span>
              <h3>CSS Styling</h3>
            </div>
            <div className="card-content">
              <ul>
                <li>Modern CSS Layouts</li>
                <li>Animationen & Effekte</li>
                <li>Responsive Design</li>
                <li>CSS Preprocessors</li>
              </ul>
            </div>
            <div className="card-progress">
              <div className="progress-bar">
                <div className="progress-fill css-progress"></div>
              </div>
              <span className="progress-text">92% Abgeschlossen</span>
            </div>
          </div>

          <div className="topic-card advanced-card">
            <div className="card-header">
              <span className="card-icon">🚀</span>
              <h3>Advanced Topics</h3>
            </div>
            <div className="card-content">
              <ul>
                <li>CSS-in-JS Solutions</li>
                <li>Web Components</li>
                <li>Modern Workflows</li>
                <li>Performance Patterns</li>
              </ul>
            </div>
            <div className="card-progress">
              <div className="progress-bar">
                <div className="progress-fill advanced-progress"></div>
              </div>
              <span className="progress-text">78% Abgeschlossen</span>
            </div>
          </div>

          <div className="topic-card tools-card">
            <div className="card-header">
              <span className="card-icon">🛠️</span>
              <h3>Tools & Frameworks</h3>
            </div>
            <div className="card-content">
              <ul>
                <li>Sass & PostCSS</li>
                <li>Tailwind CSS</li>
                <li>Bootstrap & Bulma</li>
                <li>Build Tools</li>
              </ul>
            </div>
            <div className="card-progress">
              <div className="progress-bar">
                <div className="progress-fill tools-progress"></div>
              </div>
              <span className="progress-text">88% Abgeschlossen</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      {/* Navigation Footer */}
      <div className="htmlcss-navigation">
        <a href="#programmierung" className="nav-link back-link">
          ← Zurück zur Programmierung
        </a>
        <a href="#dashboard" className="nav-link dashboard-link">
          Dashboard
        </a>
      </div>
    </div>
  );
};

export default HtmlCss;
