/**
 * SqlDatabase - SQL-Datenbank Lernseite
 * Comprehensive SQL Database Lernseite mit 3D-Buch und interaktiven Features
 * Metal-Design mit SQL-spezifischen Farben und Datenbankthematik
 * @returns {JSX.Element} SQL-Datenbank Lernseite
 */
import React, { useState, useEffect } from "react";
import SqlBook3D from "../components/SqlBook3D";
import MetalCodeBlock from "../components/MetalCodeBlock";
import "./SqlDatabase.scss";

/**
 * SQL-Datenbank Hauptseite
 * Umfassende Lerninhalte mit 3D-Buch-Integration
 */
const SqlDatabase = () => {
  // === State für interaktive Features ===
  const [activeDatabase, setActiveDatabase] = useState("mysql");
  const [showQuickStart, setShowQuickStart] = useState(true);
  const [completedTopics, setCompletedTopics] = useState(new Set());

  /**
   * SQL QuickStart Beispiele
   */
  const sqlQuickStart = {
    title: "SQL Grundlagen Schnellstart",
    description: "Essential SQL Commands und Best Practices",
    examples: [
      {
        title: "DDL - Data Definition Language",
        code: `-- Datenbank erstellen
CREATE DATABASE metal_it_learning;
USE metal_it_learning;

-- Tabelle erstellen mit Constraints
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE,
    INDEX idx_username (username),
    INDEX idx_email (email)
);

-- Fremdschlüssel-Beziehung
CREATE TABLE user_profiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    bio TEXT,
    avatar_url VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);`,
      },
      {
        title: "DML - Data Manipulation Language",
        code: `-- INSERT - Daten einfügen
INSERT INTO users (username, email, password_hash) VALUES
('metalcoder', 'metal@example.com', 'hashed_password_123'),
('dbmaster', 'db@example.com', 'hashed_password_456'),
('sqlninja', 'sql@example.com', 'hashed_password_789');

-- SELECT - Daten abfragen mit JOINs
SELECT 
    u.username,
    u.email,
    CONCAT(p.first_name, ' ', p.last_name) AS full_name,
    u.created_at
FROM users u
LEFT JOIN user_profiles p ON u.id = p.user_id
WHERE u.is_active = TRUE
ORDER BY u.created_at DESC
LIMIT 10;

-- UPDATE - Daten aktualisieren
UPDATE users 
SET is_active = FALSE, 
    updated_at = CURRENT_TIMESTAMP
WHERE last_login < DATE_SUB(NOW(), INTERVAL 6 MONTH);

-- DELETE - Daten löschen
DELETE FROM users 
WHERE is_active = FALSE 
  AND created_at < DATE_SUB(NOW(), INTERVAL 1 YEAR);`,
      },
      {
        title: "Advanced Queries & Analytics",
        code: `-- Window Functions für Analytics
SELECT 
    username,
    email,
    created_at,
    ROW_NUMBER() OVER (ORDER BY created_at) as user_number,
    RANK() OVER (ORDER BY created_at DESC) as newest_rank,
    LAG(created_at) OVER (ORDER BY created_at) as prev_user_date
FROM users
WHERE is_active = TRUE;

-- Common Table Expression (CTE)
WITH user_stats AS (
    SELECT 
        YEAR(created_at) as signup_year,
        MONTH(created_at) as signup_month,
        COUNT(*) as user_count,
        COUNT(CASE WHEN is_active = TRUE THEN 1 END) as active_count
    FROM users
    GROUP BY YEAR(created_at), MONTH(created_at)
),
monthly_growth AS (
    SELECT 
        signup_year,
        signup_month,
        user_count,
        active_count,
        LAG(user_count) OVER (ORDER BY signup_year, signup_month) as prev_count,
        ROUND(
            (user_count - LAG(user_count) OVER (ORDER BY signup_year, signup_month)) 
            / LAG(user_count) OVER (ORDER BY signup_year, signup_month) * 100, 2
        ) as growth_percentage
    FROM user_stats
)
SELECT * FROM monthly_growth
WHERE growth_percentage IS NOT NULL
ORDER BY signup_year DESC, signup_month DESC;`,
      },
    ],
  };

  /**
   * TypeScript QuickStart Beispiele
   */
  const proceduresQuickStart = {
    title: "Stored Procedures & Functions",
    description: "Wiederverwendbare SQL-Logik und Performance-Optimierung",
    examples: [
      {
        title: "Stored Procedure Beispiele",
        code: `-- User Management Procedure
DELIMITER //
CREATE PROCEDURE CreateUserWithProfile(
    IN p_username VARCHAR(50),
    IN p_email VARCHAR(100),
    IN p_password_hash VARCHAR(255),
    IN p_first_name VARCHAR(50),
    IN p_last_name VARCHAR(50),
    OUT p_user_id INT
)
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL;
    END;
    
    START TRANSACTION;
    
    -- Insert user
    INSERT INTO users (username, email, password_hash)
    VALUES (p_username, p_email, p_password_hash);
    
    SET p_user_id = LAST_INSERT_ID();
    
    -- Insert profile
    INSERT INTO user_profiles (user_id, first_name, last_name)
    VALUES (p_user_id, p_first_name, p_last_name);
    
    COMMIT;
END //
DELIMITER ;

-- Verwendung der Procedure
CALL CreateUserWithProfile(
    'newuser', 
    'new@example.com', 
    'hashed_pass', 
    'John', 
    'Doe', 
    @new_user_id
);
SELECT @new_user_id as created_user_id;`,
      },
      {
        title: "User-Defined Functions",
        code: `-- Function für Alter berechnen
DELIMITER //
CREATE FUNCTION CalculateAge(birth_date DATE)
RETURNS INT
READS SQL DATA
DETERMINISTIC
BEGIN
    DECLARE age INT;
    SET age = TIMESTAMPDIFF(YEAR, birth_date, CURDATE());
    RETURN age;
END //
DELIMITER ;

-- Function für Email-Validierung
DELIMITER //
CREATE FUNCTION IsValidEmail(email VARCHAR(255))
RETURNS BOOLEAN
READS SQL DATA
DETERMINISTIC
BEGIN
    DECLARE is_valid BOOLEAN DEFAULT FALSE;
    
    IF email REGEXP '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$' THEN
        SET is_valid = TRUE;
    END IF;
    
    RETURN is_valid;
END //
DELIMITER ;

-- Verwendung der Functions
SELECT 
    username,
    email,
    birth_date,
    CalculateAge(birth_date) as age,
    IsValidEmail(email) as email_valid
FROM users
WHERE birth_date IS NOT NULL;`,
      },
    ],
  };

  /**
   * Datenbank-System Features
   */
  const databaseFeatures = [
    {
      icon: "🗄️",
      title: "Relationale Datenbanken",
      description: "MySQL, PostgreSQL, SQL Server",
      topics: ["Normalisierung", "Constraints", "Indexierung", "Transaktionen"],
    },
    {
      icon: "🔍",
      title: "Query Optimierung",
      description: "Performance-Tuning und Analyse",
      topics: ["Execution Plans", "Indexstrategien", "Query Rewriting"],
    },
    {
      icon: "🔐",
      title: "Sicherheit & Backup",
      description: "Datenschutz und Disaster Recovery",
      topics: ["User Management", "Verschlüsselung", "Backup Strategies"],
    },
    {
      icon: "📊",
      title: "Data Analytics",
      description: "Business Intelligence und Reporting",
      topics: ["Window Functions", "Pivot Tables", "Data Warehousing"],
    },
  ];

  /**
   * Lerntipps für SQL-Entwicklung
   */
  const learningTips = [
    {
      category: "🎯 Grundlagen",
      tips: [
        "Beginne mit einfachen SELECT-Statements",
        "Verstehe die Bedeutung von NULL-Werten",
        "Lerne die verschiedenen JOIN-Typen",
        "Übe mit echten Datensets",
      ],
    },
    {
      category: "⚡ Performance",
      tips: [
        "Nutze Indexe strategisch",
        "Vermeide SELECT * in Production Code",
        "Analysiere Query Execution Plans",
        "Normalisiere Daten richtig",
      ],
    },
    {
      category: "🛠️ Tools",
      tips: [
        "MySQL Workbench für Entwicklung",
        "pgAdmin für PostgreSQL",
        "SQL Server Management Studio",
        "DBeaver als universelles Tool",
      ],
    },
  ];

  /**
   * Topic als abgeschlossen markieren
   */
  const markTopicCompleted = (topicId) => {
    setCompletedTopics((prev) => new Set([...prev, topicId]));
  };

  /**
   * Aktive Database wechseln
   */
  const switchDatabase = (database) => {
    setActiveDatabase(database);
  };

  /**
   * Component Mount Effects
   */
  useEffect(() => {
    // Lade gespeicherte Fortschritte
    const savedProgress = localStorage.getItem("sql-progress");
    if (savedProgress) {
      setCompletedTopics(new Set(JSON.parse(savedProgress)));
    }
  }, []);

  useEffect(() => {
    // Speichere Fortschritte
    localStorage.setItem("sql-progress", JSON.stringify([...completedTopics]));
  }, [completedTopics]);

  return (
    <div className="sql-database-page">
      {/* === Header Section === */}
      <header className="sql-header">
        <div className="header-content">
          <div className="title-section">
            <h1 className="main-title">
              <span className="sql-icon">🗄️</span>
              SQL-Datenbank
              <span className="title-glow">Mastery</span>
            </h1>
            <p className="main-subtitle">
              Von Grundlagen bis zu fortgeschrittenen Database-Techniken
            </p>
          </div>

          <div className="database-selector">
            <h3>Database System:</h3>
            <div className="db-buttons">
              {["mysql", "postgresql", "sqlserver"].map((db) => (
                <button
                  key={db}
                  className={`db-btn ${activeDatabase === db ? "active" : ""}`}
                  onClick={() => switchDatabase(db)}
                >
                  {db.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="stats-bar">
          <div className="stat-item">
            <span className="stat-icon">📚</span>
            <span>Abgeschlossen: {completedTopics.size}/15</span>
          </div>
          <div className="stat-item">
            <span className="stat-icon">🎯</span>
            <span>
              Fortschritt: {Math.round((completedTopics.size / 15) * 100)}%
            </span>
          </div>
        </div>
      </header>

      {/* === Quick Start Section === */}
      {showQuickStart && (
        <section className="quick-start-section">
          <div className="section-header">
            <h2>🚀 SQL Quick Start</h2>
            <button
              className="close-quickstart"
              onClick={() => setShowQuickStart(false)}
            >
              ✕
            </button>
          </div>

          <div className="quickstart-tabs">
            <button
              className={`tab-btn ${
                activeDatabase === "mysql" ? "active" : ""
              }`}
              onClick={() => setActiveDatabase("mysql")}
            >
              SQL Basics
            </button>
            <button
              className={`tab-btn ${
                activeDatabase === "postgresql" ? "active" : ""
              }`}
              onClick={() => setActiveDatabase("postgresql")}
            >
              Procedures
            </button>
          </div>

          <div className="quickstart-content">
            {activeDatabase === "mysql" && (
              <div className="examples-grid">
                {sqlQuickStart.examples.map((example, index) => (
                  <div key={index} className="example-card">
                    <h4>{example.title}</h4>
                    <MetalCodeBlock
                      code={example.code}
                      language="sql"
                      theme="sql-dark"
                    />
                  </div>
                ))}
              </div>
            )}

            {activeDatabase === "postgresql" && (
              <div className="examples-grid">
                {proceduresQuickStart.examples.map((example, index) => (
                  <div key={index} className="example-card">
                    <h4>{example.title}</h4>
                    <MetalCodeBlock
                      code={example.code}
                      language="sql"
                      theme="procedure-dark"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* === 3D Book Section === */}
      <section className="book-section">
        <div className="book-container">
          <SqlBook3D />
        </div>

        <div className="book-description">
          <h3>📖 Interaktives SQL-Datenbank Handbuch</h3>
          <p>
            Klicke auf das Buch um es zu öffnen und durch die verschiedenen
            SQL-Kapitel zu navigieren. Das Buch enthält interaktive Beispiele,
            Übungen und deine persönlichen Notizen.
          </p>

          <div className="book-features">
            <div className="feature-item">
              <span className="feature-icon">🔍</span>
              <span>Interaktive SQL Queries</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📝</span>
              <span>Persönliche Notizen</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💾</span>
              <span>Code Templates</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🎯</span>
              <span>Praktische Übungen</span>
            </div>
          </div>
        </div>
      </section>

      {/* === Features Overview === */}
      <section className="features-section">
        <h2>🚀 SQL Database Features</h2>
        <div className="features-grid">
          {databaseFeatures.map((feature, index) => (
            <div
              key={index}
              className={`feature-card ${
                completedTopics.has(`feature-${index}`) ? "completed" : ""
              }`}
            >
              <div className="feature-header">
                <span className="feature-icon">{feature.icon}</span>
                <h3>{feature.title}</h3>
              </div>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-topics">
                {feature.topics.map((topic, topicIndex) => (
                  <span key={topicIndex} className="topic-tag">
                    {topic}
                  </span>
                ))}
              </div>
              <button
                className="learn-btn"
                onClick={() => markTopicCompleted(`feature-${index}`)}
              >
                {completedTopics.has(`feature-${index}`)
                  ? "✅ Gelernt"
                  : "📚 Lernen"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* === Learning Tips === */}
      <section className="tips-section">
        <h2>💡 SQL Lerntipps</h2>
        <div className="tips-grid">
          {learningTips.map((tipCategory, index) => (
            <div key={index} className="tips-card">
              <h3>{tipCategory.category}</h3>
              <ul className="tips-list">
                {tipCategory.tips.map((tip, tipIndex) => (
                  <li key={tipIndex} className="tip-item">
                    <span className="tip-bullet">▶</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* === Practice Section === */}
      <section className="practice-section">
        <h2>🎯 SQL Praxis</h2>
        <div className="practice-content">
          <div className="practice-card">
            <h3>🏋️ Daily SQL Challenge</h3>
            <p>
              Täglich neue SQL-Herausforderungen für verschiedene
              Schwierigkeitsgrade. Von einfachen SELECTs bis zu komplexen
              Analytics Queries.
            </p>
            <button className="practice-btn">Challenge Starten</button>
          </div>

          <div className="practice-card">
            <h3>📊 Database Design</h3>
            <p>
              Lerne relationale Datenbankmodellierung durch praktische Projekte.
              Erstelle ERDs und implementiere Datenbank-Schemas.
            </p>
            <button className="practice-btn">Design Üben</button>
          </div>

          <div className="practice-card">
            <h3>⚡ Performance Tuning</h3>
            <p>
              Optimiere langsame Queries und lerne Index-Strategien für bessere
              Performance in produktiven Systemen.
            </p>
            <button className="practice-btn">Tuning Lernen</button>
          </div>
        </div>
      </section>

      {/* === Progress Tracker === */}
      <section className="progress-section">
        <h2>📈 Dein SQL Progress</h2>
        <div className="progress-container">
          <div className="progress-bar-container">
            <div className="progress-label">
              Gesamtfortschritt: {Math.round((completedTopics.size / 15) * 100)}
              %
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${(completedTopics.size / 15) * 100}%` }}
              />
            </div>
          </div>

          <div className="progress-stats">
            <div className="progress-stat">
              <span className="stat-number">{completedTopics.size}</span>
              <span className="stat-label">Abgeschlossene Topics</span>
            </div>
            <div className="progress-stat">
              <span className="stat-number">{15 - completedTopics.size}</span>
              <span className="stat-label">Verbleibende Topics</span>
            </div>
            <div className="progress-stat">
              <span className="stat-number">∞</span>
              <span className="stat-label">Übungsmöglichkeiten</span>
            </div>
          </div>
        </div>
      </section>

      {/* === Footer Info === */}
      <footer className="sql-footer">
        <div className="footer-content">
          <p>
            🚀 <strong>Metal-IT SQL-Datenbank Mastery</strong> - Dein Weg zum
            SQL-Experten mit apokalyptischem Metal-Style
          </p>
          <div className="footer-links">
            <span>📚 Dokumentation</span>
            <span>🎯 Übungen</span>
            <span>💬 Community</span>
            <span>🔧 Tools</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SqlDatabase;
