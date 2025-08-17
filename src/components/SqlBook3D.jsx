/**
 * SqlBook3D - Realistisches 3D SQL-Datenbank Buch
 * Echte 3D-Perspektive mit Inhaltsverzeichnis, Seiten und Benutzer-Eingaben
 * Metal-Design mit umblättern, eigene Notizen und Lesezeichen
 * @returns {JSX.Element} Realistisches 3D SQL Buch
 */
import React, { useState, useEffect, useRef } from "react";
import "./SqlBook3D.scss";

/**
 * SQL-Datenbank 3D Buch mit echter Buchfunktionalität
 */
const SqlBook3D = () => {
  // === State für echtes Buch-Verhalten ===
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [userNotes, setUserNotes] = useState({});
  const [bookmarks, setBookmarks] = useState(new Set());
  const [showTableOfContents, setShowTableOfContents] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  const [showDetailView, setShowDetailView] = useState(false);
  const [currentDetailPageId, setCurrentDetailPageId] = useState(null);
  const bookRef = useRef(null);

  // === Dynamische Benutzer-Eingaben State ===
  const [userTocEntries, setUserTocEntries] = useState([]);
  const [userSqlBasicsEntries, setUserSqlBasicsEntries] = useState([]);
  const [userAdvancedSqlEntries, setUserAdvancedSqlEntries] = useState([]);
  const [userDatabaseDesignEntries, setUserDatabaseDesignEntries] = useState(
    []
  );
  const [userOptimizationEntries, setUserOptimizationEntries] = useState([]);
  const [userSecurityEntries, setUserSecurityEntries] = useState([]);
  const [userProjectsEntries, setUserProjectsEntries] = useState([]);
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
  const [showGlobalResetModal, setShowGlobalResetModal] = useState(false);
  const [showSectionAddModal, setShowSectionAddModal] = useState(false);
  const [currentDynamicPageId, setCurrentDynamicPageId] = useState(null);

  /**
   * Vollständige Buch-Struktur mit Inhaltsverzeichnis
   */
  const bookStructure = [
    // Cover
    {
      id: "cover",
      type: "cover",
      title: "SQL-Datenbank",
      subtitle: "Das vollständige Handbuch",
      author: "Metal-IT Academy",
      version: "2025 Edition",
      pageNumber: null,
      allowNotes: false,
    },

    // Inhaltsverzeichnis
    {
      id: "table-of-contents",
      type: "table-of-contents",
      title: "📚 Inhaltsverzeichnis",
      chapters: [
        { title: "1. SQL Grundlagen", page: 3, icon: "📊" },
        { title: "2. Erweiterte Abfragen", page: 8, icon: "🔍" },
        { title: "3. Datenbank Design", page: 15, icon: "🏗️" },
        { title: "4. Performance Optimierung", page: 22, icon: "⚡" },
        { title: "5. Sicherheit & Backup", page: 28, icon: "🔒" },
        { title: "6. Praxis Projekte", page: 35, icon: "🚀" },
        { title: "7. Deine Notizen", page: 42, icon: "📝" },
      ],
      pageNumber: 1,
      allowNotes: false,
    },

    // SQL Grundlagen
    {
      id: "sql-basics",
      type: "content",
      title: "1. SQL Grundlagen",
      content: {
        sections: [
          {
            title: "Grundlegende Datentypen",
            code: `-- SQL Datentypen und Tabellenerstellung
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL,
    age INTEGER CHECK(age >= 0),
    salary DECIMAL(10,2),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Daten einfügen
INSERT INTO users (username, email, age, salary) VALUES 
('metaldev', 'dev@metal-it.dev', 28, 75000.00),
('sqlmaster', 'sql@metal-it.dev', 32, 85000.00),
('databasepro', 'db@metal-it.dev', 29, 80000.00);`,
            explanation:
              "SQL Datentypen definieren die Art der Daten in Tabellenspalten.",
          },
          {
            title: "SELECT Abfragen",
            code: `-- Grundlegende SELECT Statements
SELECT * FROM users;

-- Spezifische Spalten auswählen
SELECT username, email, salary FROM users;

-- WHERE Bedingungen
SELECT * FROM users 
WHERE age > 30 AND salary > 70000;

-- Sortierung und Limitierung
SELECT username, salary 
FROM users 
WHERE is_active = TRUE
ORDER BY salary DESC
LIMIT 5;

-- Funktionen verwenden
SELECT 
    username,
    UPPER(email) as email_upper,
    AGE(CURRENT_DATE, created_at) as account_age
FROM users;`,
            explanation: "SELECT ist das Herzstück von SQL für Datenabfragen.",
          },
        ],
      },
      pageNumber: 3,
      allowNotes: true,
    },

    // Erweiterte Abfragen
    {
      id: "advanced-sql",
      type: "content",
      title: "2. Erweiterte Abfragen",
      content: {
        sections: [
          {
            title: "JOINs & Relationen",
            code: `-- JOIN Operationen
CREATE TABLE orders (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    product_name VARCHAR(100),
    amount DECIMAL(10,2),
    order_date TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- INNER JOIN
SELECT u.username, o.product_name, o.amount
FROM users u
INNER JOIN orders o ON u.id = o.user_id
WHERE o.amount > 100;

-- LEFT JOIN mit Aggregation
SELECT 
    u.username,
    COUNT(o.id) as total_orders,
    COALESCE(SUM(o.amount), 0) as total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.username
ORDER BY total_spent DESC;`,
            explanation:
              "JOINs verbinden Daten aus mehreren Tabellen miteinander.",
          },
          {
            title: "Subqueries & CTEs",
            code: `-- Common Table Expressions (CTE)
WITH high_spenders AS (
    SELECT user_id, SUM(amount) as total_spent
    FROM orders
    GROUP BY user_id
    HAVING SUM(amount) > 1000
),
user_stats AS (
    SELECT 
        u.username,
        u.email,
        hs.total_spent,
        RANK() OVER (ORDER BY hs.total_spent DESC) as spending_rank
    FROM users u
    JOIN high_spenders hs ON u.id = hs.user_id
)
SELECT * FROM user_stats WHERE spending_rank <= 10;

-- Subquery Beispiel
SELECT username, email
FROM users
WHERE id IN (
    SELECT user_id 
    FROM orders 
    WHERE order_date >= DATE('now', '-30 days')
    GROUP BY user_id 
    HAVING COUNT(*) > 5
);`,
            explanation:
              "CTEs und Subqueries ermöglichen komplexe Datenanalysen.",
          },
        ],
      },
      pageNumber: 8,
      allowNotes: true,
    },

    // Datenbank Design
    {
      id: "database-design",
      type: "content",
      title: "3. Datenbank Design",
      content: {
        sections: [
          {
            title: "Normalisierung & ERD",
            code: `-- Normalisierte Datenbankstruktur
CREATE TABLE categories (
    id INTEGER PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT
);

CREATE TABLE products (
    id INTEGER PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category_id INTEGER,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INTEGER DEFAULT 0,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE order_items (
    id INTEGER PRIMARY KEY,
    order_id INTEGER,
    product_id INTEGER,
    quantity INTEGER NOT NULL,
    unit_price DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Indizes für Performance
CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_orders_user_date ON orders(user_id, order_date);`,
            explanation:
              "Gutes Datenbankdesign verhindert Redundanz und Inkonsistenz.",
          },
        ],
      },
      pageNumber: 15,
      allowNotes: true,
    },

    // Performance Optimierung
    {
      id: "optimization",
      type: "content",
      title: "4. Performance Optimierung",
      content: {
        sections: [
          {
            title: "Indizes & Query-Optimierung",
            code: `-- Query Execution Plan analysieren
EXPLAIN QUERY PLAN
SELECT u.username, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.created_at >= '2024-01-01'
GROUP BY u.id
HAVING COUNT(o.id) > 10;

-- Composite Index erstellen
CREATE INDEX idx_users_created_active 
ON users(created_at, is_active);

-- Query Optimierung
-- Schlecht: Funktionen in WHERE
SELECT * FROM users WHERE YEAR(created_at) = 2024;

-- Besser: Index-freundliche Bedingung
SELECT * FROM users 
WHERE created_at >= '2024-01-01' 
  AND created_at < '2025-01-01';

-- Batch Updates für bessere Performance
UPDATE users 
SET salary = salary * 1.05 
WHERE id IN (
    SELECT id FROM users 
    WHERE performance_rating >= 4
    LIMIT 1000
);`,
            explanation:
              "Indizes und optimierte Queries verbessern die Performance drastisch.",
          },
        ],
      },
      pageNumber: 22,
      allowNotes: true,
    },

    // Sicherheit & Backup
    {
      id: "security",
      type: "content",
      title: "5. Sicherheit & Backup",
      content: {
        sections: [
          {
            title: "SQL Injection Prevention",
            code: `-- Prepared Statements (sicher)
-- JavaScript/Node.js Beispiel
const getUserById = (id) => {
    const query = 'SELECT * FROM users WHERE id = ?';
    return db.prepare(query).get(id);
};

-- SQL Injection Beispiel (unsicher)
-- SELECT * FROM users WHERE id = 1; DROP TABLE users; --

-- Benutzer-Rollen und Berechtigungen
CREATE ROLE readonly_user;
GRANT SELECT ON users TO readonly_user;
GRANT SELECT ON orders TO readonly_user;

CREATE ROLE app_user;
GRANT SELECT, INSERT, UPDATE ON users TO app_user;
GRANT SELECT, INSERT, UPDATE ON orders TO app_user;

-- Backup-Strategien
-- Vollbackup
-- .backup backup_file.db

-- Transaktions-Log für Point-in-Time Recovery
BEGIN TRANSACTION;
-- Mehrere Operationen...
COMMIT; -- oder ROLLBACK bei Fehlern`,
            explanation:
              "Sicherheit und Backup-Strategien schützen kritische Daten.",
          },
        ],
      },
      pageNumber: 28,
      allowNotes: true,
    },

    // Praxis Projekte
    {
      id: "projects",
      type: "content",
      title: "6. Praxis Projekte",
      content: {
        sections: [
          {
            title: "E-Commerce Datenbank",
            code: `-- Vollständige E-Commerce Schema
CREATE TABLE customers (
    customer_id INTEGER PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(15),
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE product_categories (
    category_id INTEGER PRIMARY KEY,
    category_name VARCHAR(50) NOT NULL,
    parent_category_id INTEGER,
    FOREIGN KEY (parent_category_id) REFERENCES product_categories(category_id)
);

-- Business Intelligence Query
WITH monthly_sales AS (
    SELECT 
        DATE_TRUNC('month', o.order_date) as month,
        SUM(oi.quantity * oi.unit_price) as revenue,
        COUNT(DISTINCT o.customer_id) as unique_customers,
        COUNT(o.order_id) as total_orders
    FROM orders o
    JOIN order_items oi ON o.order_id = oi.order_id
    WHERE o.order_date >= DATE('now', '-12 months')
    GROUP BY DATE_TRUNC('month', o.order_date)
)
SELECT 
    month,
    revenue,
    unique_customers,
    total_orders,
    revenue / total_orders as avg_order_value,
    LAG(revenue) OVER (ORDER BY month) as prev_month_revenue,
    (revenue - LAG(revenue) OVER (ORDER BY month)) / 
    LAG(revenue) OVER (ORDER BY month) * 100 as growth_rate
FROM monthly_sales
ORDER BY month;`,
            explanation:
              "Real-world Datenbankprojekte mit Business Intelligence Features.",
          },
        ],
      },
      pageNumber: 35,
      allowNotes: true,
    },

    // Benutzer Notizen
    {
      id: "user-notes",
      type: "user-notes",
      title: "7. Deine Notizen & Ideen",
      pageNumber: 42,
      allowNotes: true,
      isUserSection: true,
    },
  ];

  /**
   * Code-Templates für verschiedene SQL-Bereiche
   */
  const codeTemplates = {
    sql: `-- SQL Query Example
SELECT column1, column2
FROM table_name
WHERE condition = 'value'
ORDER BY column1 DESC;`,
    ddl: `-- Data Definition Language
CREATE TABLE example_table (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`,
    dml: `-- Data Manipulation Language
INSERT INTO table_name (column1, column2) 
VALUES ('value1', 'value2');

UPDATE table_name 
SET column1 = 'new_value' 
WHERE condition = 'criteria';`,
    procedure: `-- Stored Procedure Example
CREATE PROCEDURE GetUserStats()
BEGIN
    SELECT 
        COUNT(*) as total_users,
        AVG(age) as avg_age,
        MAX(created_at) as latest_signup
    FROM users;
END;`,
  };

  /**
   * Buch öffnen/schließen mit 3D-Rotation
   */
  const toggleBook = () => {
    if (!isFlipping) {
      setIsOpen((prev) => {
        const newState = !prev;
        if (newState && currentPage === 0) {
          // Beim Öffnen automatisch zum Inhaltsverzeichnis
          setTimeout(() => setCurrentPage(1), 800);
        }
        console.log(`📖 SQL-Buch ${newState ? "geöffnet" : "geschlossen"}`);
        return newState;
      });
    }
  };

  /**
   * Seite umblättern mit realistischer Animation
   */
  const flipPage = (direction) => {
    if (isFlipping) return;

    const totalPages = bookStructure.length + dynamicPages.length;

    setIsFlipping(true);

    if (direction === "next" && currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === "prev" && currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }

    // Realistische Blätter-Animation
    setTimeout(() => setIsFlipping(false), 1200);
    console.log(`📄 Seite ${direction}: ${currentPage + 1}`);
  };

  /**
   * Springe zu bestimmter Seite
   */
  const jumpToPage = (pageIndex) => {
    const totalPages = bookStructure.length + dynamicPages.length;
    if (!isFlipping && pageIndex >= 0 && pageIndex < totalPages) {
      setIsFlipping(true);
      setCurrentPage(pageIndex);
      setTimeout(() => setIsFlipping(false), 800);
      console.log(`🔖 Sprung zu Seite: ${pageIndex + 1}`);
    }
  };

  /**
   * Lesezeichen setzen/entfernen
   */
  const toggleBookmark = (pageId) => {
    setBookmarks((prev) => {
      const newBookmarks = new Set(prev);
      if (newBookmarks.has(pageId)) {
        newBookmarks.delete(pageId);
      } else {
        newBookmarks.add(pageId);
      }
      return newBookmarks;
    });
  };

  /**
   * Benutzer-Notiz bearbeiten
   */
  const handleNoteEdit = (pageId, noteText) => {
    setUserNotes((prev) => ({
      ...prev,
      [pageId]: noteText,
    }));
    console.log(`📝 Notiz gespeichert für Seite: ${pageId}`);
  };

  /**
   * Intelligente Code-Typ Erkennung
   */
  const detectCodeType = (content) => {
    if (!content) return "text";

    const sqlKeywords = [
      "SELECT",
      "INSERT",
      "UPDATE",
      "DELETE",
      "CREATE",
      "DROP",
      "ALTER",
      "FROM",
      "WHERE",
      "JOIN",
      "GROUP BY",
      "ORDER BY",
      "HAVING",
      "BEGIN",
      "END",
      "PROCEDURE",
      "FUNCTION",
    ];

    const upperContent = content.toUpperCase();
    const foundKeywords = sqlKeywords.filter((keyword) =>
      upperContent.includes(keyword)
    );

    return foundKeywords.length >= 2 ? "code" : "text";
  };

  /**
   * Auto-Format SQL Code
   */
  const formatSQLCode = (code) => {
    if (!code) return "";

    // Grundlegende SQL-Formatierung
    return code
      .replace(/\s+/g, " ")
      .replace(/\s*;\s*/g, ";\n")
      .replace(/\bSELECT\b/gi, "\nSELECT")
      .replace(/\bFROM\b/gi, "\nFROM")
      .replace(/\bWHERE\b/gi, "\nWHERE")
      .replace(/\bJOIN\b/gi, "\nJOIN")
      .replace(/\bGROUP BY\b/gi, "\nGROUP BY")
      .replace(/\bORDER BY\b/gi, "\nORDER BY")
      .replace(/\bHAVING\b/gi, "\nHAVING")
      .trim();
  };

  /**
   * Content-Change Handler mit Auto-Detection
   */
  const handleContentChange = (content) => {
    const detectedType = detectCodeType(content);

    setNewEntryData((prev) => ({
      ...prev,
      content,
      type: detectedType, // Auto-Switch zu Code wenn SQL erkannt wird
    }));
  };

  /**
   * SQL Code formatieren
   */
  const formatCurrentCode = () => {
    if (newEntryData.type === "code") {
      const formatted = formatSQLCode(newEntryData.content);
      setNewEntryData((prev) => ({
        ...prev,
        content: formatted,
      }));
    }
  };

  /**
   * Modal für neuen Eintrag öffnen
   */
  const openAddModal = (category) => {
    setCurrentCategory(category);
    setNewEntryData({
      title: "",
      content: "",
      type: "text",
    });
    setShowAddModal(true);
    setEditingEntryIndex(null);
  };

  /**
   * Code-Template in Editor einfügen (erweitert)
   */
  const insertTemplate = (templateType) => {
    const template =
      codeTemplates[templateType] || advancedTemplates[templateType];
    if (!template) return;

    setNewEntryData((prev) => {
      const newContent = prev.content
        ? `${
            prev.content
          }\n\n-- ${templateType.toUpperCase()} Beispiel:\n${template}`
        : template;

      return {
        ...prev,
        content: newContent,
        type: "code", // Automatisch auf Code-Modus wechseln
      };
    });
  };

  /**
   * Erweiterte SQL-Templates
   */
  const advancedTemplates = {
    join: `-- INNER JOIN Beispiel
SELECT u.username, p.title, p.created_at
FROM users u
INNER JOIN posts p ON u.id = p.user_id
WHERE u.active = 1
ORDER BY p.created_at DESC;`,

    subquery: `-- Subquery mit EXISTS
SELECT username, email
FROM users u
WHERE EXISTS (
    SELECT 1 
    FROM orders o 
    WHERE o.user_id = u.id 
    AND o.created_at >= CURDATE()
);`,

    window: `-- Window Functions für Analytics
SELECT 
    username,
    salary,
    ROW_NUMBER() OVER (ORDER BY salary DESC) as rank,
    AVG(salary) OVER () as avg_salary,
    LAG(salary) OVER (ORDER BY hire_date) as prev_salary
FROM employees;`,

    cte: `-- Common Table Expression (CTE)
WITH monthly_sales AS (
    SELECT 
        MONTH(order_date) as month,
        SUM(amount) as total,
        COUNT(*) as order_count
    FROM orders
    WHERE YEAR(order_date) = 2024
    GROUP BY MONTH(order_date)
)
SELECT 
    month, 
    total,
    order_count,
    ROUND(total / order_count, 2) as avg_order_value
FROM monthly_sales
WHERE total > 10000
ORDER BY month;`,
  };

  /**
   * Neuen Benutzer-Eintrag hinzufügen
   */
  const addUserEntry = () => {
    if (!newEntryData.title.trim()) return;

    const newEntry = {
      id: Date.now(),
      title: newEntryData.title,
      content: newEntryData.content,
      type: newEntryData.type,
      createdAt: new Date().toLocaleDateString("de-DE"),
    };

    // Eintrag zur entsprechenden Kategorie hinzufügen
    switch (currentCategory) {
      case "toc":
        setUserTocEntries((prev) => [...prev, newEntry]);
        // Für TOC-Einträge eine eigene Seite erstellen
        const newPage = {
          id: `user-page-${newEntry.id}`,
          type: "user-content",
          title: newEntry.title,
          createdAt: newEntry.createdAt,
          sections: [],
          pageNumber: bookStructure.length + dynamicPages.length + 1,
          allowNotes: true,
        };
        setDynamicPages((prev) => [...prev, newPage]);
        break;
      case "sql-basics":
        setUserSqlBasicsEntries((prev) => [...prev, newEntry]);
        break;
      case "advanced-sql":
        setUserAdvancedSqlEntries((prev) => [...prev, newEntry]);
        break;
      case "database-design":
        setUserDatabaseDesignEntries((prev) => [...prev, newEntry]);
        break;
      case "optimization":
        setUserOptimizationEntries((prev) => [...prev, newEntry]);
        break;
      case "security":
        setUserSecurityEntries((prev) => [...prev, newEntry]);
        break;
      case "projects":
        setUserProjectsEntries((prev) => [...prev, newEntry]);
        break;
    }

    // Modal schließen und State zurücksetzen
    setShowAddModal(false);
    setNewEntryData({
      title: "",
      content: "",
      type: "text",
    });

    console.log(`✅ Neuer ${currentCategory}-Eintrag hinzugefügt:`, newEntry);
  };

  /**
   * Zu einer Benutzer-Seite navigieren
   */
  const navigateToUserPage = (pageId) => {
    const pageIndex =
      bookStructure.length +
      dynamicPages.findIndex((page) => page.id === pageId);
    if (pageIndex >= bookStructure.length) {
      jumpToPage(pageIndex);
      console.log(
        `🔗 Navigiere zu Benutzer-Seite: ${pageId} (Seite ${pageIndex})`
      );
    } else {
      console.warn(`⚠️ Seite ${pageId} nicht gefunden`);
    }
  };

  /**
   * Benutzer-Eintrag löschen
   */
  const deleteUserEntry = (category, entryId) => {
    switch (category) {
      case "toc":
        setUserTocEntries((prev) =>
          prev.filter((entry) => entry.id !== entryId)
        );
        // Zugehörige dynamische Seite auch löschen
        setDynamicPages((prev) =>
          prev.filter((page) => page.id !== `user-page-${entryId}`)
        );
        break;
      case "sql-basics":
        setUserSqlBasicsEntries((prev) =>
          prev.filter((entry) => entry.id !== entryId)
        );
        break;
      case "advanced-sql":
        setUserAdvancedSqlEntries((prev) =>
          prev.filter((entry) => entry.id !== entryId)
        );
        break;
      case "database-design":
        setUserDatabaseDesignEntries((prev) =>
          prev.filter((entry) => entry.id !== entryId)
        );
        break;
      case "optimization":
        setUserOptimizationEntries((prev) =>
          prev.filter((entry) => entry.id !== entryId)
        );
        break;
      case "security":
        setUserSecurityEntries((prev) =>
          prev.filter((entry) => entry.id !== entryId)
        );
        break;
      case "projects":
        setUserProjectsEntries((prev) =>
          prev.filter((entry) => entry.id !== entryId)
        );
        break;
    }
    console.log(`🗑️ Eintrag gelöscht aus ${category}:`, entryId);
  };

  /**
   * Alle Einträge einer Kategorie löschen
   */
  const resetCategoryEntries = (category) => {
    switch (category) {
      case "toc":
        setUserTocEntries([]);
        setDynamicPages([]);
        break;
      case "sql-basics":
        setUserSqlBasicsEntries([]);
        break;
      case "advanced-sql":
        setUserAdvancedSqlEntries([]);
        break;
      case "database-design":
        setUserDatabaseDesignEntries([]);
        break;
      case "optimization":
        setUserOptimizationEntries([]);
        break;
      case "security":
        setUserSecurityEntries([]);
        break;
      case "projects":
        setUserProjectsEntries([]);
        break;
    }
    console.log(`🔄 Alle ${category} Einträge zurückgesetzt`);
  };

  /**
   * Alle Benutzer-Daten global zurücksetzen
   */
  const globalReset = () => {
    setUserTocEntries([]);
    setUserSqlBasicsEntries([]);
    setUserAdvancedSqlEntries([]);
    setUserDatabaseDesignEntries([]);
    setUserOptimizationEntries([]);
    setUserSecurityEntries([]);
    setUserProjectsEntries([]);
    setDynamicPages([]);
    setUserNotes({});
    setBookmarks(new Set());
    console.log("🔥 Globaler Reset - Alle Benutzer-Daten gelöscht");
  };

  /**
   * Globalen Reset bestätigen
   */
  const confirmGlobalReset = () => {
    setShowGlobalResetModal(true);
  };

  /**
   * Globalen Reset ausführen
   */
  const executeGlobalReset = () => {
    globalReset();
    setShowGlobalResetModal(false);
    // Zurück zum Anfang navigieren
    jumpToPage(0);
  };

  /**
   * Benutzer-Eintrag bearbeiten
   */
  const startEditEntry = (category, entryIndex, entry) => {
    setCurrentCategory(category);
    setEditingEntryIndex(entryIndex);
    setNewEntryData({
      title: entry.title,
      content: entry.content,
      type: entry.type,
    });
    setShowAddModal(true);
  };

  /**
   * Bearbeiteten Eintrag speichern
   */
  const updateUserEntry = () => {
    if (!newEntryData.title.trim() || editingEntryIndex === null) return;

    const updatedEntry = {
      title: newEntryData.title,
      content: newEntryData.content,
      type: newEntryData.type,
      createdAt: new Date().toLocaleDateString("de-DE"),
    };

    // Eintrag in entsprechender Kategorie aktualisieren
    switch (currentCategory) {
      case "toc":
        setUserTocEntries((prev) =>
          prev.map((entry, index) =>
            index === editingEntryIndex ? { ...entry, ...updatedEntry } : entry
          )
        );
        break;
      case "sql-basics":
        setUserSqlBasicsEntries((prev) =>
          prev.map((entry, index) =>
            index === editingEntryIndex ? { ...entry, ...updatedEntry } : entry
          )
        );
        break;
      case "advanced-sql":
        setUserAdvancedSqlEntries((prev) =>
          prev.map((entry, index) =>
            index === editingEntryIndex ? { ...entry, ...updatedEntry } : entry
          )
        );
        break;
      case "database-design":
        setUserDatabaseDesignEntries((prev) =>
          prev.map((entry, index) =>
            index === editingEntryIndex ? { ...entry, ...updatedEntry } : entry
          )
        );
        break;
      case "optimization":
        setUserOptimizationEntries((prev) =>
          prev.map((entry, index) =>
            index === editingEntryIndex ? { ...entry, ...updatedEntry } : entry
          )
        );
        break;
      case "security":
        setUserSecurityEntries((prev) =>
          prev.map((entry, index) =>
            index === editingEntryIndex ? { ...entry, ...updatedEntry } : entry
          )
        );
        break;
      case "projects":
        setUserProjectsEntries((prev) =>
          prev.map((entry, index) =>
            index === editingEntryIndex ? { ...entry, ...updatedEntry } : entry
          )
        );
        break;
    }

    // Modal schließen
    setShowAddModal(false);
    setEditingEntryIndex(null);
    setNewEntryData({
      title: "",
      content: "",
      type: "text",
    });

    console.log(`✅ ${currentCategory}-Eintrag aktualisiert`);
  };

  /**
   * Lösch-Bestätigung anzeigen
   */
  const confirmDelete = (category, entryId = null) => {
    setDeleteTarget({ category, entryId });
    setShowDeleteModal(true);
  };

  /**
   * Löschen ausführen
   */
  const executeDelete = () => {
    if (deleteTarget) {
      if (deleteTarget.category === "dynamic-section") {
        // Dynamischen Abschnitt löschen
        deleteDynamicSection(deleteTarget.pageId, deleteTarget.entryId);
      } else if (deleteTarget.entryId) {
        // Einzelnen Eintrag löschen
        deleteUserEntry(deleteTarget.category, deleteTarget.entryId);
      } else {
        // Gesamte Kategorie zurücksetzen
        resetCategoryEntries(deleteTarget.category);
      }
    }
    setShowDeleteModal(false);
    setDeleteTarget(null);
  };

  /**
   * Abschnitt zu dynamischer Seite hinzufügen (alte Funktion - bleibt für Kompatibilität)
   */
  const addSectionToDynamicPageDirect = (pageId, section) => {
    setDynamicPages((prev) =>
      prev.map((page) =>
        page.id === pageId
          ? {
              ...page,
              sections: [...page.sections, { id: Date.now(), ...section }],
            }
          : page
      )
    );
  };

  /**
   * Neuen Abschnitt zu dynamischer Seite hinzufügen (UI-Funktion)
   */
  const openSectionAddModal = (pageId) => {
    setCurrentDynamicPageId(pageId);
    setNewEntryData({
      title: "",
      content: "",
      type: "text",
    });
    setShowSectionAddModal(true);
  };

  /**
   * Abschnitt zu dynamischer Seite hinzufügen (über Modal)
   */
  const addSectionToDynamicPage = () => {
    if (!newEntryData.title.trim() || !currentDynamicPageId) return;

    const newSection = {
      id: Date.now(),
      title: newEntryData.title,
      content: newEntryData.content,
      type: newEntryData.type,
      createdAt: new Date().toLocaleDateString("de-DE"),
    };

    setDynamicPages((prev) =>
      prev.map((page) =>
        page.id === currentDynamicPageId
          ? {
              ...page,
              sections: [...page.sections, newSection],
            }
          : page
      )
    );

    // Modal schließen und State zurücksetzen
    setShowSectionAddModal(false);
    setCurrentDynamicPageId(null);
    setNewEntryData({
      title: "",
      content: "",
      type: "text",
    });

    console.log(
      `✅ Neuer Abschnitt hinzugefügt zu Seite ${currentDynamicPageId}:`,
      newSection
    );
  };

  /**
   * Abschnitt von dynamischer Seite löschen (erweitert)
   */
  const deleteDynamicSectionModal = (pageId, sectionId) => {
    setDeleteTarget({
      category: "dynamic-section",
      entryId: sectionId,
      pageId: pageId,
    });
    setShowDeleteModal(true);
  };

  /**
   * Abschnitt von dynamischer Seite bearbeiten (erweitert)
   */
  const editDynamicSectionModal = (pageId, sectionId) => {
    const page = dynamicPages.find((p) => p.id === pageId);
    const section = page?.sections.find((s) => s.id === sectionId);

    if (section) {
      setCurrentDynamicPageId(pageId);
      setEditingEntryIndex(sectionId);
      setNewEntryData({
        title: section.title,
        content: section.content,
        type: section.type,
      });
      setShowSectionAddModal(true);
    }
  };

  /**
   * Bearbeiteten Abschnitt speichern
   */
  const updateDynamicSection = () => {
    if (
      !newEntryData.title.trim() ||
      !currentDynamicPageId ||
      !editingEntryIndex
    )
      return;

    const updatedSection = {
      title: newEntryData.title,
      content: newEntryData.content,
      type: newEntryData.type,
      updatedAt: new Date().toLocaleDateString("de-DE"),
    };

    setDynamicPages((prev) =>
      prev.map((page) =>
        page.id === currentDynamicPageId
          ? {
              ...page,
              sections: page.sections.map((section) =>
                section.id === editingEntryIndex
                  ? { ...section, ...updatedSection }
                  : section
              ),
            }
          : page
      )
    );

    // Modal schließen und State zurücksetzen
    setShowSectionAddModal(false);
    setCurrentDynamicPageId(null);
    setEditingEntryIndex(null);
    setNewEntryData({
      title: "",
      content: "",
      type: "text",
    });

    console.log(`✅ Abschnitt ${editingEntryIndex} aktualisiert`);
  };
  const addNewSectionToDynamicPage = (pageId) => {
    const title = prompt("Titel des neuen Abschnitts:");
    if (!title?.trim()) return;

    const content = prompt("Inhalt des Abschnitts:");
    if (content === null) return;

    const type =
      content.includes("SELECT") ||
      content.includes("CREATE") ||
      content.includes("INSERT")
        ? "code"
        : "text";

    addSectionToDynamicPage(pageId, {
      title: title.trim(),
      content: content.trim(),
      type,
    });
  };

  /**
   * Dynamischen Abschnitt bearbeiten
   */
  const editDynamicSection = (pageId, sectionId) => {
    const page = dynamicPages.find((p) => p.id === pageId);
    const section = page?.sections.find((s) => s.id === sectionId);

    if (!section) return;

    const newTitle = prompt("Neuer Titel:", section.title);
    if (newTitle === null) return;

    const newContent = prompt("Neuer Inhalt:", section.content);
    if (newContent === null) return;

    const newType =
      newContent.includes("SELECT") ||
      newContent.includes("CREATE") ||
      newContent.includes("INSERT")
        ? "code"
        : "text";

    setDynamicPages((prev) =>
      prev.map((page) =>
        page.id === pageId
          ? {
              ...page,
              sections: page.sections.map((s) =>
                s.id === sectionId
                  ? {
                      ...s,
                      title: newTitle.trim(),
                      content: newContent.trim(),
                      type: newType,
                    }
                  : s
              ),
            }
          : page
      )
    );
  };

  /**
   * Dynamischen Abschnitt löschen
   */
  const deleteDynamicSection = (pageId, sectionId) => {
    if (!window.confirm("Abschnitt wirklich löschen?")) return;

    setDynamicPages((prev) =>
      prev.map((page) =>
        page.id === pageId
          ? {
              ...page,
              sections: page.sections.filter((s) => s.id !== sectionId),
            }
          : page
      )
    );
  };

  /**
   * Notiz-Editor öffnen/schließen
   */
  const toggleNoteEditor = (pageId) => {
    setEditingNote(editingNote === pageId ? null : pageId);
  };

  /**
   * Navigation mit Keyboard
   */
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isOpen) return;

      switch (e.key) {
        case "ArrowLeft":
        case "PageUp":
          flipPage("prev");
          break;
        case "ArrowRight":
        case "PageDown":
          flipPage("next");
          break;
        case "Home":
          jumpToPage(1); // Inhaltsverzeichnis
          break;
        case "End":
          jumpToPage(bookStructure.length - 1);
          break;
        case "Escape":
          setIsOpen(false);
          break;
        case "t":
        case "T":
          setShowTableOfContents(true);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isOpen, currentPage]);

  // Aktuelle Seitendaten (statisch oder dynamisch)
  const currentPageData =
    currentPage < bookStructure.length
      ? bookStructure[currentPage]
      : dynamicPages[currentPage - bookStructure.length];

  /**
   * Rendert den Inhalt einer Buchseite
   */
  function renderPageContent(pageData) {
    if (!pageData) return null;

    switch (pageData.type) {
      case "cover":
        return (
          <div className="cover-page">
            <div className="cover-page-content">
              <h1>{pageData.title}</h1>
              <h2>{pageData.subtitle}</h2>
              <p className="author">{pageData.author}</p>
              <p className="version">{pageData.version}</p>
            </div>
          </div>
        );

      case "table-of-contents":
        return (
          <div className="toc-page">
            <h2>{pageData.title}</h2>
            <div className="toc-entries">
              {pageData.chapters.map((chapter, index) => (
                <div
                  key={index}
                  className="toc-entry"
                  onClick={() => jumpToPage(chapter.page)}
                >
                  <span className="chapter-icon">{chapter.icon}</span>
                  <span className="chapter-title">{chapter.title}</span>
                  <div className="toc-dots"></div>
                  <span className="chapter-page">{chapter.page}</span>
                </div>
              ))}
            </div>

            {/* Benutzer-definierte Inhaltsverzeichnis-Einträge */}
            <div className="user-content-section">
              <div className="user-section-header">
                <h3>🚀 Deine eigenen Themen</h3>
                <div className="section-actions">
                  <button
                    className="add-entry-btn"
                    onClick={() => openAddModal("toc")}
                  >
                    ➕ Thema hinzufügen
                  </button>
                  {userTocEntries.length > 0 && (
                    <button
                      className="delete-all-btn"
                      onClick={() => confirmDelete("toc")}
                    >
                      🗑️ Alle löschen
                    </button>
                  )}
                </div>
              </div>

              {userTocEntries.length === 0 ? (
                <div className="empty-entries-state">
                  <p>Füge deine eigenen Themen hinzu! 🎯</p>
                </div>
              ) : (
                userTocEntries.map((entry, index) => (
                  <div key={entry.id} className="user-toc-entry">
                    <div className="entry-display">
                      <div
                        className="clickable-entry"
                        onClick={() =>
                          navigateToUserPage(`user-page-${entry.id}`)
                        }
                        title="Klicken zum Öffnen der Detailseite"
                      >
                        <div className="entry-icon">📖</div>
                        <div className="entry-info">
                          <h4>{entry.title}</h4>
                          <small>Erstellt: {entry.createdAt}</small>
                          <div className="click-hint">
                            👆 Klicken für Details
                          </div>
                        </div>
                      </div>
                      <div className="entry-actions">
                        <button
                          className="edit-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            startEditEntry("toc", index, entry);
                          }}
                          title="Bearbeiten"
                        >
                          ✏️
                        </button>
                        <button
                          className="delete-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            confirmDelete("toc", entry.id);
                          }}
                          title="Löschen"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        );

      case "content":
        return (
          <div className="content-page">
            <h2>{pageData.title}</h2>
            {pageData.content.sections.map((section, index) => (
              <div key={index} className="content-section">
                <h3>{section.title}</h3>
                <pre className="code-block">
                  <code>{section.code}</code>
                </pre>
                <p className="explanation">{section.explanation}</p>
              </div>
            ))}

            {/* Benutzer-Eingaben für diese Kategorie */}
            {(() => {
              let userEntries = [];
              let categoryName = "";

              switch (pageData.id) {
                case "sql-basics":
                  userEntries = userSqlBasicsEntries;
                  categoryName = "sql-basics";
                  break;
                case "advanced-sql":
                  userEntries = userAdvancedSqlEntries;
                  categoryName = "advanced-sql";
                  break;
                case "database-design":
                  userEntries = userDatabaseDesignEntries;
                  categoryName = "database-design";
                  break;
                case "optimization":
                  userEntries = userOptimizationEntries;
                  categoryName = "optimization";
                  break;
                case "security":
                  userEntries = userSecurityEntries;
                  categoryName = "security";
                  break;
                case "projects":
                  userEntries = userProjectsEntries;
                  categoryName = "projects";
                  break;
                default:
                  return null;
              }

              return (
                <div className="user-content-section">
                  <div className="user-section-header">
                    <h3>💡 Deine eigenen Beispiele & Notizen</h3>
                    <div className="section-actions">
                      <button
                        className="add-entry-btn"
                        onClick={() => openAddModal(categoryName)}
                      >
                        ➕ Hinzufügen
                      </button>
                      {userEntries.length > 0 && (
                        <button
                          className="delete-all-btn"
                          onClick={() => confirmDelete(categoryName)}
                        >
                          🗑️ Reset
                        </button>
                      )}
                    </div>
                  </div>

                  {userEntries.length === 0 ? (
                    <div className="empty-entries-state">
                      <p>Füge eigene Beispiele und Notizen hinzu! 📝</p>
                    </div>
                  ) : (
                    userEntries.map((entry, index) => (
                      <div key={entry.id} className="user-entry">
                        <div className="entry-header">
                          <h4>{entry.title}</h4>
                          <div className="entry-actions">
                            <button
                              className="edit-btn"
                              onClick={() =>
                                startEditEntry(categoryName, index, entry)
                              }
                            >
                              ✏️
                            </button>
                            <button
                              className="delete-btn"
                              onClick={() =>
                                confirmDelete(categoryName, entry.id)
                              }
                            >
                              🗑️
                            </button>
                          </div>
                        </div>
                        <div className="entry-content">
                          {entry.type === "code" ? (
                            <pre className="user-code-block">
                              <code>{entry.content}</code>
                            </pre>
                          ) : (
                            <div className="user-text-content">
                              <p>{entry.content}</p>
                            </div>
                          )}
                        </div>
                        <div className="entry-meta">
                          <small>
                            Erstellt: {entry.createdAt} | Typ: {entry.type}
                          </small>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              );
            })()}

            {/* Benutzer-Notizen anzeigen */}
            {userNotes[pageData.id] && (
              <div className="user-notes">
                <h4>📝 Deine Notizen:</h4>
                <div className="note-content">{userNotes[pageData.id]}</div>
              </div>
            )}

            {/* Seitennummer */}
            <div className="page-number">{pageData.pageNumber}</div>
          </div>
        );

      case "user-notes":
        return (
          <div className="user-notes-page">
            <h2>{pageData.title}</h2>
            <div className="notes-container">
              {userNotes[pageData.id] ? (
                <div className="existing-notes">
                  <div className="note-content">{userNotes[pageData.id]}</div>
                  <button
                    className="edit-note-btn"
                    onClick={() => toggleNoteEditor(pageData.id)}
                  >
                    ✏️ Bearbeiten
                  </button>
                </div>
              ) : (
                <div className="empty-notes">
                  <p>
                    Hier kannst du deine eigenen Notizen, Ideen und Projekte
                    sammeln.
                  </p>
                  <button
                    className="add-note-btn"
                    onClick={() => toggleNoteEditor(pageData.id)}
                  >
                    📝 Erste Notiz hinzufügen
                  </button>
                </div>
              )}
            </div>
            <div className="page-number">{pageData.pageNumber}</div>
          </div>
        );

      case "user-content":
        return (
          <div className="user-content-page">
            <div className="page-header">
              <h2>📖 {pageData.title}</h2>
              <div className="page-meta">
                <span className="creation-date">
                  Erstellt: {pageData.createdAt}
                </span>
                <span className="page-type">Benutzer-Seite</span>
              </div>
            </div>

            {/* Abschnitte der Benutzer-Seite */}
            {pageData.sections.map((section, index) => (
              <div key={section.id} className="user-section">
                <div className="section-header">
                  <h3>{section.title}</h3>
                  <div className="section-actions">
                    <button
                      className="edit-section-btn"
                      onClick={() =>
                        editDynamicSectionModal(pageData.id, section.id)
                      }
                    >
                      ✏️
                    </button>
                    <button
                      className="delete-section-btn"
                      onClick={() =>
                        deleteDynamicSectionModal(pageData.id, section.id)
                      }
                    >
                      🗑️
                    </button>
                  </div>
                </div>
                <div className="section-content">
                  {section.type === "code" ? (
                    <pre className="user-code-block">
                      <code>{section.content}</code>
                    </pre>
                  ) : (
                    <div className="user-text-content">
                      <p>{section.content}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Abschnitt hinzufügen */}
            <div className="add-section-area">
              <button
                className="add-section-btn"
                onClick={() => openSectionAddModal(pageData.id)}
              >
                ➕ Abschnitt hinzufügen
              </button>
            </div>

            {/* Navigation zurück */}
            <div className="navigation-footer">
              <button className="back-to-toc-btn" onClick={() => jumpToPage(1)}>
                ⬅️ Zurück zum Inhaltsverzeichnis
              </button>
            </div>

            <div className="page-number">{pageData.pageNumber}</div>
          </div>
        );

      default:
        return <div>Seite nicht gefunden</div>;
    }
  }

  return (
    <div className="realistic-book-container">
      {/* 3D Buch mit echter Perspektive */}
      <div
        ref={bookRef}
        className={`realistic-book ${isOpen ? "open" : "closed"} ${
          isFlipping ? "flipping" : ""
        }`}
        onClick={!isOpen ? toggleBook : undefined}
      >
        {/* Buch-Cover */}
        <div className="book-cover-3d">
          <div className="cover-front">
            <div className="cover-design">
              <div className="metal-pattern"></div>
              <div className="cover-content">
                <div className="cover-logo">🗄️</div>
                <h3 className="cover-title">SQL-Datenbank</h3>
                <p className="cover-subtitle">Das vollständige Handbuch</p>
                <p className="cover-author">Metal-IT Academy</p>
                <div className="cover-badges">
                  <span className="sql-badge">SQL</span>
                  <span className="db-badge">DB</span>
                </div>
              </div>
            </div>
          </div>

          <div className="book-spine">
            <span className="spine-text">SQL Handbuch</span>
          </div>

          <div className="cover-back">
            <div className="back-content">
              <p>Datenbankdesign und SQL-Optimierung für Profis</p>
            </div>
          </div>
        </div>

        {/* Buch-Seiten */}
        {isOpen && (
          <div className="book-pages-3d">
            {/* Linke Seite */}
            <div className="page left-page">
              {currentPage > 0 && (
                <div className="page-content">
                  {(() => {
                    const leftPageData =
                      currentPage - 1 < bookStructure.length
                        ? bookStructure[currentPage - 1]
                        : dynamicPages[currentPage - 1 - bookStructure.length];
                    return leftPageData && renderPageContent(leftPageData);
                  })()}
                </div>
              )}
            </div>

            {/* Rechte Seite */}
            <div className="page right-page">
              <div className="page-content">
                {renderPageContent(currentPageData)}
              </div>
            </div>

            {/* Seiten-Trennlinie */}
            <div className="page-separator"></div>
          </div>
        )}

        {/* Buch-Schatten */}
        <div className="book-shadow"></div>
      </div>

      {/* Buch-Steuerung */}
      {isOpen && (
        <>
          {/* Seiten-Navigation */}
          <div className="book-navigation">
            <button
              className="nav-btn prev-btn"
              onClick={() => flipPage("prev")}
              disabled={currentPage === 0 || isFlipping}
            >
              ◀ Zurück
            </button>

            <div className="page-info">
              <span className="page-counter">
                Seite {currentPageData.pageNumber || currentPage + 1}
              </span>
              {bookmarks.has(currentPageData.id) && (
                <span className="bookmark-indicator">🔖</span>
              )}
            </div>

            <button
              className="nav-btn next-btn"
              onClick={() => flipPage("next")}
              disabled={
                currentPage >= bookStructure.length + dynamicPages.length - 1 ||
                isFlipping
              }
            >
              Weiter ▶
            </button>
          </div>

          {/* Buch-Aktionen */}
          <div className="book-actions">
            <button
              className="action-btn toc-btn"
              onClick={() => jumpToPage(1)}
            >
              📚 Inhaltsverzeichnis
            </button>

            {currentPageData.allowNotes && (
              <button
                className="action-btn note-btn"
                onClick={() => toggleNoteEditor(currentPageData.id)}
              >
                📝 Notiz hinzufügen
              </button>
            )}

            <button
              className="action-btn bookmark-btn"
              onClick={() => toggleBookmark(currentPageData.id)}
            >
              {bookmarks.has(currentPageData.id)
                ? "🔖 Lesezeichen entfernen"
                : "🔖 Lesezeichen setzen"}
            </button>

            <button
              className="action-btn global-reset-btn"
              onClick={confirmGlobalReset}
            >
              🔄 Global Reset
            </button>

            <button
              className="action-btn close-btn"
              onClick={() => setIsOpen(false)}
            >
              ✕ Buch schließen
            </button>
          </div>
        </>
      )}

      {/* Notiz-Editor */}
      {editingNote && (
        <div className="note-editor-overlay">
          <div className="note-editor">
            <h4>📝 Notiz für: {currentPageData.title}</h4>
            <textarea
              value={userNotes[editingNote] || ""}
              onChange={(e) => handleNoteEdit(editingNote, e.target.value)}
              placeholder="Deine Notizen, Ideen und Gedanken zu diesem Kapitel..."
              rows={8}
            />
            <div className="editor-actions">
              <button className="save-btn" onClick={() => setEditingNote(null)}>
                💾 Speichern
              </button>
              <button
                className="cancel-btn"
                onClick={() => setEditingNote(null)}
              >
                ❌ Abbrechen
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Keyboard Help */}
      {isOpen && (
        <div className="keyboard-help">
          <div className="help-items">
            <span>← → Blättern</span>
            <span>Home Inhalt</span>
            <span>T Inhaltsverzeichnis</span>
            <span>ESC Schließen</span>
          </div>
        </div>
      )}

      {/* === Benutzer-Eingabe Modal === */}
      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>
                {editingEntryIndex !== null
                  ? `✏️ ${currentCategory} Eintrag bearbeiten`
                  : `➕ Neuer ${currentCategory} Eintrag`}
              </h3>
              <button
                className="modal-close-btn"
                onClick={() => setShowAddModal(false)}
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="entry-title">Titel *</label>
                <input
                  id="entry-title"
                  type="text"
                  value={newEntryData.title}
                  onChange={(e) =>
                    setNewEntryData((prev) => ({
                      ...prev,
                      title: e.target.value,
                    }))
                  }
                  placeholder="z.B. Meine SQL Query, Stored Procedure, etc."
                  autoFocus
                />
              </div>

              <div className="form-group">
                <label htmlFor="entry-type">Typ</label>
                <select
                  id="entry-type"
                  value={newEntryData.type}
                  onChange={(e) =>
                    setNewEntryData((prev) => ({
                      ...prev,
                      type: e.target.value,
                    }))
                  }
                >
                  <option value="text">📝 Text/Notiz</option>
                  <option value="code">💻 SQL-Code</option>
                </select>
              </div>

              {/* Erweiterte Code-Templates */}
              {newEntryData.type === "code" && (
                <div className="template-buttons">
                  <h4>🚀 SQL-Templates verwenden:</h4>

                  {/* Basis Templates */}
                  <div className="template-section">
                    <h5>📋 Basis SQL:</h5>
                    <div className="template-grid">
                      <button
                        type="button"
                        className="template-btn sql-template"
                        onClick={() => insertTemplate("sql")}
                      >
                        🗄️ SELECT Query
                      </button>
                      <button
                        type="button"
                        className="template-btn ddl-template"
                        onClick={() => insertTemplate("ddl")}
                      >
                        🏗️ CREATE TABLE
                      </button>
                      <button
                        type="button"
                        className="template-btn dml-template"
                        onClick={() => insertTemplate("dml")}
                      >
                        📝 INSERT/UPDATE
                      </button>
                      <button
                        type="button"
                        className="template-btn procedure-template"
                        onClick={() => insertTemplate("procedure")}
                      >
                        ⚙️ Stored Procedure
                      </button>
                    </div>
                  </div>

                  {/* Erweiterte Templates */}
                  <div className="template-section">
                    <h5>🚀 Erweitert:</h5>
                    <div className="template-grid">
                      <button
                        type="button"
                        className="template-btn join-template"
                        onClick={() => insertTemplate("join")}
                      >
                        🔗 INNER JOIN
                      </button>
                      <button
                        type="button"
                        className="template-btn subquery-template"
                        onClick={() => insertTemplate("subquery")}
                      >
                        � Subquery
                      </button>
                      <button
                        type="button"
                        className="template-btn window-template"
                        onClick={() => insertTemplate("window")}
                      >
                        📈 Window Functions
                      </button>
                      <button
                        type="button"
                        className="template-btn cte-template"
                        onClick={() => insertTemplate("cte")}
                      >
                        🧮 CTE (WITH)
                      </button>
                    </div>
                  </div>

                  {/* Code-Tools */}
                  <div className="code-tools">
                    <button
                      type="button"
                      className="tool-btn format-btn"
                      onClick={formatCurrentCode}
                      disabled={!newEntryData.content}
                    >
                      🎨 SQL formatieren
                    </button>
                    <button
                      type="button"
                      className="tool-btn clear-btn"
                      onClick={() =>
                        setNewEntryData((prev) => ({ ...prev, content: "" }))
                      }
                      disabled={!newEntryData.content}
                    >
                      🗑️ Code löschen
                    </button>
                  </div>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="entry-content">
                  {newEntryData.type === "code" ? "SQL Code" : "Inhalt"}
                </label>
                <textarea
                  id="entry-content"
                  value={newEntryData.content}
                  onChange={(e) => handleContentChange(e.target.value)}
                  rows={newEntryData.type === "code" ? 12 : 6}
                  placeholder={
                    newEntryData.type === "code"
                      ? "-- Füge deinen SQL Code hier ein...\n-- Das System erkennt automatisch SQL-Keywords\nSELECT * FROM users WHERE active = 1;"
                      : "Beschreibe deine Ideen, Learnings oder Notizen...\n\nDas System erkennt automatisch SQL-Code und wechselt zum Code-Modus."
                  }
                  className={
                    newEntryData.type === "code"
                      ? "code-textarea"
                      : "text-textarea"
                  }
                />
              </div>

              {/* Live Preview */}
              {(newEntryData.title || newEntryData.content) && (
                <div className="entry-preview">
                  <h4>👁️ Vorschau:</h4>
                  <div className="user-entry">
                    <div className="entry-header">
                      <h4>{newEntryData.title || "Titel eingeben..."}</h4>
                    </div>
                    <div className="entry-content">
                      {newEntryData.type === "code" ? (
                        <pre className="preview-code">
                          <code>
                            {newEntryData.content ||
                              "-- SQL Code hier eingeben..."}
                          </code>
                        </pre>
                      ) : (
                        <div className="preview-text">
                          <p>
                            {newEntryData.content || "Inhalt hier eingeben..."}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn-secondary"
                onClick={() => setShowAddModal(false)}
              >
                ❌ Abbrechen
              </button>
              <button
                type="button"
                className="btn-primary"
                onClick={
                  editingEntryIndex !== null ? updateUserEntry : addUserEntry
                }
                disabled={!newEntryData.title.trim()}
              >
                {editingEntryIndex !== null
                  ? "💾 Aktualisieren"
                  : "✅ Hinzufügen"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* === Lösch-Bestätigung Modal === */}
      {showDeleteModal && (
        <div
          className="modal-overlay"
          onClick={() => setShowDeleteModal(false)}
        >
          <div
            className="modal-content delete-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3>🗑️ Löschen bestätigen</h3>
              <button
                className="modal-close-btn"
                onClick={() => setShowDeleteModal(false)}
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              <p>
                {deleteTarget?.entryId
                  ? "Möchtest du diesen Eintrag wirklich löschen?"
                  : `Möchtest du wirklich ALLE ${deleteTarget?.category} Einträge löschen?`}
              </p>
              <p className="warning-text">
                ⚠️ Diese Aktion kann nicht rückgängig gemacht werden!
              </p>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn-secondary"
                onClick={() => setShowDeleteModal(false)}
              >
                ❌ Abbrechen
              </button>
              <button
                type="button"
                className="btn-danger"
                onClick={executeDelete}
              >
                🗑️ Löschen
              </button>
            </div>
          </div>
        </div>
      )}

      {/* === Global Reset Modal === */}
      {showGlobalResetModal && (
        <div
          className="modal-overlay"
          onClick={() => setShowGlobalResetModal(false)}
        >
          <div
            className="modal-content delete-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3>🔄 Global Reset</h3>
              <button
                className="modal-close-btn"
                onClick={() => setShowGlobalResetModal(false)}
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              <p>
                <strong>
                  Möchtest du wirklich ALLE Benutzer-Daten zurücksetzen?
                </strong>
              </p>
              <p>Das umfasst:</p>
              <ul>
                <li>🗂️ Alle Inhaltsverzeichnis-Einträge</li>
                <li>
                  📝 Alle Kategorie-Einträge (SQL Grundlagen, Design, etc.)
                </li>
                <li>📖 Alle dynamischen Seiten</li>
                <li>📔 Alle Notizen</li>
                <li>🔖 Alle Lesezeichen</li>
              </ul>
              <p className="warning-text">
                ⚠️ Diese Aktion kann NICHT rückgängig gemacht werden!
              </p>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn-secondary"
                onClick={() => setShowGlobalResetModal(false)}
              >
                ❌ Abbrechen
              </button>
              <button
                type="button"
                className="btn-danger"
                onClick={executeGlobalReset}
              >
                🔄 Alles zurücksetzen
              </button>
            </div>
          </div>
        </div>
      )}

      {/* === Section Add/Edit Modal === */}
      {showSectionAddModal && (
        <div
          className="modal-overlay"
          onClick={() => setShowSectionAddModal(false)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>
                {editingEntryIndex !== null
                  ? `✏️ Abschnitt bearbeiten`
                  : `➕ Neuer Abschnitt hinzufügen`}
              </h3>
              <button
                className="modal-close-btn"
                onClick={() => setShowSectionAddModal(false)}
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="section-title">📝 Abschnitts-Titel:</label>
                <input
                  id="section-title"
                  type="text"
                  value={newEntryData.title}
                  onChange={(e) =>
                    setNewEntryData((prev) => ({
                      ...prev,
                      title: e.target.value,
                    }))
                  }
                  placeholder="z.B. Meine SQL Beispiele..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="section-type">🔧 Inhalts-Typ:</label>
                <select
                  id="section-type"
                  value={newEntryData.type}
                  onChange={(e) =>
                    setNewEntryData((prev) => ({
                      ...prev,
                      type: e.target.value,
                    }))
                  }
                >
                  <option value="text">📄 Text</option>
                  <option value="code">💻 Code</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="section-content">📝 Inhalt:</label>
                <textarea
                  id="section-content"
                  value={newEntryData.content}
                  onChange={(e) =>
                    setNewEntryData((prev) => ({
                      ...prev,
                      content: e.target.value,
                    }))
                  }
                  placeholder={
                    newEntryData.type === "code"
                      ? "SELECT * FROM users WHERE active = 1;"
                      : "Hier deine Notizen und Erklärungen..."
                  }
                  className={
                    newEntryData.type === "code" ? "code-textarea" : ""
                  }
                  rows={8}
                />
              </div>

              {/* SQL Code Templates für Abschnitte */}
              {newEntryData.type === "code" && (
                <div className="template-buttons">
                  <h4>🚀 SQL-Vorlagen verwenden:</h4>
                  <div className="template-grid">
                    <button
                      type="button"
                      className="template-btn sql-template"
                      onClick={() => applyCodeTemplate("sql")}
                    >
                      SELECT Query
                    </button>
                    <button
                      type="button"
                      className="template-btn ddl-template"
                      onClick={() => applyCodeTemplate("ddl")}
                    >
                      CREATE TABLE
                    </button>
                    <button
                      type="button"
                      className="template-btn dml-template"
                      onClick={() => applyCodeTemplate("dml")}
                    >
                      INSERT/UPDATE
                    </button>
                    <button
                      type="button"
                      className="template-btn procedure-template"
                      onClick={() => applyCodeTemplate("procedure")}
                    >
                      Stored Procedure
                    </button>
                  </div>
                </div>
              )}

              {/* Live Preview */}
              <div className="entry-preview">
                <h4>👁️ Vorschau:</h4>
                <div className="user-section">
                  <div className="section-header">
                    <h3>{newEntryData.title || "Titel eingeben..."}</h3>
                  </div>
                  <div className="section-content">
                    {newEntryData.type === "code" ? (
                      <pre className="preview-code">
                        <code>
                          {newEntryData.content || "Code eingeben..."}
                        </code>
                      </pre>
                    ) : (
                      <div className="preview-text">
                        <p>{newEntryData.content || "Text eingeben..."}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn-secondary"
                onClick={() => setShowSectionAddModal(false)}
              >
                ❌ Abbrechen
              </button>
              <button
                type="button"
                className="btn-primary"
                disabled={!newEntryData.title.trim()}
                onClick={
                  editingEntryIndex !== null
                    ? updateDynamicSection
                    : addSectionToDynamicPage
                }
              >
                {editingEntryIndex !== null
                  ? "💾 Aktualisieren"
                  : "✅ Hinzufügen"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SqlBook3D;
