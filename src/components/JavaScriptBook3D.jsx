/**
 * JavaScriptBook3D - Realistisches 3D JavaScript & TypeScript Buch
 * Echte 3D-Perspektive mit Inhaltsverzeichnis, Seiten und Benutzer-Eingaben
 * Metal-Design mit umblättern, eigene Notizen und Lesezeichen
 * @returns {JSX.Element} Realistisches 3D JavaScript Buch
 */
import React, { useState, useEffect, useRef } from "react";
import "./JavaScriptBook3D.scss";

/**
 * JavaScript & TypeScript 3D Buch mit echter Buchfunktionalität
 */
const JavaScriptBook3D = () => {
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
  const [userJsBasicsEntries, setUserJsBasicsEntries] = useState([]);
  const [userEs6Entries, setUserEs6Entries] = useState([]);
  const [userAsyncEntries, setUserAsyncEntries] = useState([]);
  const [userTsBasicsEntries, setUserTsBasicsEntries] = useState([]);
  const [userAdvancedTypesEntries, setUserAdvancedTypesEntries] = useState([]);
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

  /**
   * Vollständige Buch-Struktur mit Inhaltsverzeichnis
   */
  const bookStructure = [
    // Cover
    {
      id: "cover",
      type: "cover",
      title: "JavaScript & TypeScript",
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
        { title: "1. JavaScript Grundlagen", page: 3, icon: "🔥" },
        { title: "2. ES6+ Features", page: 8, icon: "⚡" },
        { title: "3. Async Programming", page: 15, icon: "🔄" },
        { title: "4. TypeScript Basics", page: 22, icon: "🔷" },
        { title: "5. Advanced Types", page: 28, icon: "🧬" },
        { title: "6. Praxis Projekte", page: 35, icon: "🚀" },
        { title: "7. Deine Notizen", page: 42, icon: "📝" },
      ],
      pageNumber: 1,
      allowNotes: false,
    },

    // JavaScript Grundlagen
    {
      id: "js-basics",
      type: "content",
      title: "1. JavaScript Grundlagen",
      content: {
        sections: [
          {
            title: "Variablen & Datentypen",
            code: `// Modern JavaScript Variablen
let userName = "Metal Developer";
const API_URL = "https://api.metal-it.dev";
var oldStyle = "nicht empfohlen";

// Primitive Datentypen
let number = 42;
let text = "Hello Metal-IT";
let isActive = true;
let empty = null;
let notDefined = undefined;

// Objekte & Arrays
const metalSong = {
  title: "Code of Metal",
  duration: 240,
  band: "Metal-IT"
};

const languages = ["JavaScript", "TypeScript", "Python"];`,
            explanation:
              "JavaScript bietet verschiedene Datentypen für unterschiedliche Anwendungsfälle.",
          },
          {
            title: "Funktionen",
            code: `// Funktionsdeklarationen
function calculatePower(base, exponent) {
  return Math.pow(base, exponent);
}

// Arrow Functions (ES6+)
const multiply = (a, b) => a * b;

// Callback Functions
const processData = (data, callback) => {
  const result = data.map(item => item * 2);
  callback(result);
};

// Higher Order Functions
const createMultiplier = (factor) => {
  return (number) => number * factor;
};

const doubleIt = createMultiplier(2);`,
            explanation:
              "Funktionen sind die Bausteine modularer JavaScript-Anwendungen.",
          },
        ],
      },
      pageNumber: 3,
      allowNotes: true,
    },

    // ES6+ Features
    {
      id: "es6-features",
      type: "content",
      title: "2. ES6+ Features",
      content: {
        sections: [
          {
            title: "Destructuring & Spread",
            code: `// Array Destructuring
const colors = ['red', 'green', 'blue'];
const [primary, secondary, ...rest] = colors;

// Object Destructuring
const user = { name: 'Alex', age: 25, email: 'alex@example.com' };
const { name, age, email: userEmail } = user;

// Spread Operator
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5, 6];

const person = { name: 'John', age: 30 };
const employee = { ...person, role: 'Developer', salary: 75000 };

// Rest Parameters
function sum(...args) {
  return args.reduce((total, num) => total + num, 0);
}`,
            explanation:
              "Destructuring und Spread machen Code eleganter und lesbarer.",
          },
          {
            title: "Template Literals & Modules",
            code: `// Template Literals
const name = "Metal Developer";
const greeting = \`Welcome, \${name}!
Today is \${new Date().toDateString()}\`;

// Tagged Template Literals
function highlight(strings, ...values) {
  return strings.reduce((result, string, i) => {
    const value = values[i] ? \`<mark>\${values[i]}</mark>\` : '';
    return result + string + value;
  }, '');
}

// ES6 Modules
export const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000
};

export default class ApiClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
}`,
            explanation:
              "Template Literals ermöglichen komplexe String-Operationen.",
          },
        ],
      },
      pageNumber: 8,
      allowNotes: true,
    },

    // Async Programming
    {
      id: "async-programming",
      type: "content",
      title: "3. Async Programming",
      content: {
        sections: [
          {
            title: "Promises & Async/Await",
            code: `// Promise Creation
const fetchUserData = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) {
        resolve({ id: userId, name: 'User' + userId });
      } else {
        reject(new Error('Invalid user ID'));
      }
    }, 1000);
  });
};

// Async/Await
async function loadUserProfile(userId) {
  try {
    const user = await fetchUserData(userId);
    const profile = await fetchProfile(user.id);
    return { user, profile };
  } catch (error) {
    console.error('Failed to load user:', error);
    throw error;
  }
}

// Promise Combinators
const [users, posts, comments] = await Promise.all([
  fetchUsers(),
  fetchPosts(), 
  fetchComments()
]);`,
            explanation:
              "Async/Await macht asynchronen Code lesbar und wartbar.",
          },
        ],
      },
      pageNumber: 15,
      allowNotes: true,
    },

    // TypeScript Basics
    {
      id: "ts-basics",
      type: "content",
      title: "4. TypeScript Basics",
      content: {
        sections: [
          {
            title: "Types & Interfaces",
            code: `// Basic Types
let count: number = 42;
let name: string = "TypeScript Master";
let isComplete: boolean = true;
let items: string[] = ["item1", "item2"];

// Interface Definition
interface User {
  id: number;
  name: string;
  email: string;
  isActive?: boolean; // Optional property
  readonly createdAt: Date; // Readonly
}

// Type Aliases
type UserRole = 'admin' | 'user' | 'moderator';
type ApiResponse<T> = {
  data: T;
  status: 'success' | 'error';
  message?: string;
};

// Function Types
const processUser: (user: User) => string = (user) => {
  return \`Processing \${user.name}\`;
};`,
            explanation:
              "TypeScript bringt statische Typisierung zu JavaScript.",
          },
        ],
      },
      pageNumber: 22,
      allowNotes: true,
    },

    // Advanced Types
    {
      id: "advanced-types",
      type: "content",
      title: "5. Advanced Types",
      content: {
        sections: [
          {
            title: "Generics & Conditional Types",
            code: `// Generic Functions
function identity<T>(arg: T): T {
  return arg;
}

// Generic Constraints
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// Conditional Types
type MessageOf<T> = T extends { message: infer M } ? M : never;

// Mapped Types
type Optional<T> = {
  [K in keyof T]?: T[K];
};

type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

// Utility Types
interface User {
  id: number;
  name: string;
  email: string;
}

type UserUpdate = Partial<User>;
type UserInfo = Pick<User, 'name' | 'email'>;`,
            explanation:
              "Advanced Types ermöglichen flexible und sichere APIs.",
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
            title: "REST API mit TypeScript",
            code: `// API Client Implementation
class MetalApiClient {
  private baseUrl: string;
  private headers: Record<string, string>;

  constructor(baseUrl: string, apiKey?: string) {
    this.baseUrl = baseUrl;
    this.headers = {
      'Content-Type': 'application/json',
      ...(apiKey && { 'Authorization': \`Bearer \${apiKey}\` })
    };
  }

  async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(\`\${this.baseUrl}\${endpoint}\`, {
      method: 'GET',
      headers: this.headers
    });

    if (!response.ok) {
      throw new Error(\`API Error: \${response.status}\`);
    }

    return response.json();
  }

  async post<T>(endpoint: string, data: unknown): Promise<T> {
    const response = await fetch(\`\${this.baseUrl}\${endpoint}\`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data)
    });

    return response.json();
  }
}

// Usage Example
const api = new MetalApiClient('https://api.metal-it.dev');
const userData = await api.get<User>('/users/123');`,
            explanation:
              "Ein vollständiger API-Client mit TypeScript-Typsicherheit.",
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
        console.log(`📖 Buch ${newState ? "geöffnet" : "geschlossen"}`);
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

  // === Dynamische Benutzer-Eingaben Funktionen ===

  /**
   * Code-Templates für verschiedene Technologien
   */
  const codeTemplates = {
    javascript: `// JavaScript Example
function exampleFunction() {
  console.log("Hello JavaScript!");
}

exampleFunction();`,
    typescript: `// TypeScript Example
interface User {
  id: number;
  name: string;
}

const user: User = {
  id: 1,
  name: "Developer"
};`,
    html: `<!-- HTML Example -->
<div class="container">
  <h1>Hello World</h1>
  <p>This is an example.</p>
</div>`,
    css: `/* CSS Example */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  color: #333;
  font-size: 2rem;
}`,
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
   * Code-Template in Editor einfügen
   */
  const insertTemplate = (templateType) => {
    setNewEntryData((prev) => ({
      ...prev,
      content: codeTemplates[templateType],
      type: "code",
    }));
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
      case "js-basics":
        setUserJsBasicsEntries((prev) => [...prev, newEntry]);
        break;
      case "es6":
        setUserEs6Entries((prev) => [...prev, newEntry]);
        break;
      case "async":
        setUserAsyncEntries((prev) => [...prev, newEntry]);
        break;
      case "ts-basics":
        setUserTsBasicsEntries((prev) => [...prev, newEntry]);
        break;
      case "advanced-types":
        setUserAdvancedTypesEntries((prev) => [...prev, newEntry]);
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
      case "js-basics":
        setUserJsBasicsEntries((prev) =>
          prev.filter((entry) => entry.id !== entryId)
        );
        break;
      case "es6":
        setUserEs6Entries((prev) =>
          prev.filter((entry) => entry.id !== entryId)
        );
        break;
      case "async":
        setUserAsyncEntries((prev) =>
          prev.filter((entry) => entry.id !== entryId)
        );
        break;
      case "ts-basics":
        setUserTsBasicsEntries((prev) =>
          prev.filter((entry) => entry.id !== entryId)
        );
        break;
      case "advanced-types":
        setUserAdvancedTypesEntries((prev) =>
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
      case "js-basics":
        setUserJsBasicsEntries([]);
        break;
      case "es6":
        setUserEs6Entries([]);
        break;
      case "async":
        setUserAsyncEntries([]);
        break;
      case "ts-basics":
        setUserTsBasicsEntries([]);
        break;
      case "advanced-types":
        setUserAdvancedTypesEntries([]);
        break;
      case "projects":
        setUserProjectsEntries([]);
        break;
    }
    console.log(`🔄 Alle ${category} Einträge zurückgesetzt`);
  };

  /**
   * Alle Benutzer-Einträge komplett zurücksetzen
   */
  const resetAllUserEntries = () => {
    setUserTocEntries([]);
    setUserJsBasicsEntries([]);
    setUserEs6Entries([]);
    setUserAsyncEntries([]);
    setUserTsBasicsEntries([]);
    setUserAdvancedTypesEntries([]);
    setUserProjectsEntries([]);
    setDynamicPages([]);
    console.log("🔄 Alle Benutzer-Einträge zurückgesetzt");
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
      case "js-basics":
        setUserJsBasicsEntries((prev) =>
          prev.map((entry, index) =>
            index === editingEntryIndex ? { ...entry, ...updatedEntry } : entry
          )
        );
        break;
      case "es6":
        setUserEs6Entries((prev) =>
          prev.map((entry, index) =>
            index === editingEntryIndex ? { ...entry, ...updatedEntry } : entry
          )
        );
        break;
      case "async":
        setUserAsyncEntries((prev) =>
          prev.map((entry, index) =>
            index === editingEntryIndex ? { ...entry, ...updatedEntry } : entry
          )
        );
        break;
      case "ts-basics":
        setUserTsBasicsEntries((prev) =>
          prev.map((entry, index) =>
            index === editingEntryIndex ? { ...entry, ...updatedEntry } : entry
          )
        );
        break;
      case "advanced-types":
        setUserAdvancedTypesEntries((prev) =>
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
      if (deleteTarget.entryId) {
        deleteUserEntry(deleteTarget.category, deleteTarget.entryId);
      } else {
        resetCategoryEntries(deleteTarget.category);
      }
    }
    setShowDeleteModal(false);
    setDeleteTarget(null);
  };

  /**
   * Dynamische Seite aktualisieren
   */
  const updateDynamicPage = (pageId, updatedData) => {
    setDynamicPages((prev) =>
      prev.map((page) =>
        page.id === pageId ? { ...page, ...updatedData } : page
      )
    );
  };

  /**
   * Abschnitt zu dynamischer Seite hinzufügen
   */
  const addSectionToDynamicPage = (pageId, section) => {
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
  const nextPageData =
    currentPage + 1 < bookStructure.length
      ? bookStructure[currentPage + 1]
      : null;

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
                <div className="cover-logo">⚡</div>
                <h3 className="cover-title">JavaScript & TypeScript</h3>
                <p className="cover-subtitle">Das vollständige Handbuch</p>
                <p className="cover-author">Metal-IT Academy</p>
                <div className="cover-badges">
                  <span className="js-badge">JS</span>
                  <span className="ts-badge">TS</span>
                </div>
              </div>
            </div>
          </div>

          <div className="book-spine">
            <span className="spine-text">JS/TS Handbuch</span>
          </div>

          <div className="cover-back">
            <div className="back-content">
              <p>Moderne Webentwicklung mit JavaScript und TypeScript</p>
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
                  placeholder="z.B. Mein Custom Hook, API Integration, etc."
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
                  <option value="code">💻 Code-Beispiel</option>
                </select>
              </div>

              {/* Code-Templates */}
              {newEntryData.type === "code" && (
                <div className="template-buttons">
                  <h4>🚀 Code-Templates verwenden:</h4>
                  <div className="template-grid">
                    <button
                      type="button"
                      className="template-btn js-template"
                      onClick={() => insertTemplate("javascript")}
                    >
                      📱 JavaScript
                    </button>
                    <button
                      type="button"
                      className="template-btn ts-template"
                      onClick={() => insertTemplate("typescript")}
                    >
                      🔷 TypeScript
                    </button>
                    <button
                      type="button"
                      className="template-btn html-template"
                      onClick={() => insertTemplate("html")}
                    >
                      🌐 HTML
                    </button>
                    <button
                      type="button"
                      className="template-btn css-template"
                      onClick={() => insertTemplate("css")}
                    >
                      🎨 CSS
                    </button>
                  </div>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="entry-content">
                  {newEntryData.type === "code" ? "Code" : "Inhalt"}
                </label>
                <textarea
                  id="entry-content"
                  value={newEntryData.content}
                  onChange={(e) =>
                    setNewEntryData((prev) => ({
                      ...prev,
                      content: e.target.value,
                    }))
                  }
                  rows={newEntryData.type === "code" ? 12 : 6}
                  placeholder={
                    newEntryData.type === "code"
                      ? "// Füge deinen JavaScript/TypeScript Code hier ein...\nfunction example() {\n  console.log('Hello World!');\n}"
                      : "Beschreibe deine Ideen, Learnings oder Notizen..."
                  }
                  className={
                    newEntryData.type === "code" ? "code-textarea" : ""
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
                            {newEntryData.content || "// Code hier eingeben..."}
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
    </div>
  );

  /**
   * Neuen Abschnitt zu dynamischer Seite hinzufügen (UI-Funktion)
   */
  const addNewSectionToDynamicPage = (pageId) => {
    const title = prompt("Titel des neuen Abschnitts:");
    if (!title?.trim()) return;

    const content = prompt("Inhalt des Abschnitts:");
    if (content === null) return;

    const type =
      content.includes("function") ||
      content.includes("const") ||
      content.includes("let")
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
      newContent.includes("function") ||
      newContent.includes("const") ||
      newContent.includes("let")
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
                    <div
                      className="clickable-entry"
                      onClick={() =>
                        navigateToUserPage(`user-page-${entry.id}`)
                      }
                    >
                      <h4>📖 {entry.title}</h4>
                      <small>Erstellt: {entry.createdAt}</small>
                    </div>
                    <div className="entry-actions-bar">
                      <button
                        className="edit-btn"
                        onClick={() => startEditEntry("toc", index, entry)}
                      >
                        ✏️ Name bearbeiten
                      </button>
                      <button
                        className="page-edit-btn"
                        onClick={() =>
                          navigateToUserPage(`user-page-${entry.id}`)
                        }
                      >
                        📝 Seite bearbeiten
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => confirmDelete("toc", entry.id)}
                      >
                        🗑️ Löschen
                      </button>
                    </div>
                    {entry.content && (
                      <div className="entry-preview-short">
                        <p>{entry.content.substring(0, 100)}...</p>
                        <small>Typ: {entry.type}</small>
                      </div>
                    )}
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
                case "js-basics":
                  userEntries = userJsBasicsEntries;
                  categoryName = "js-basics";
                  break;
                case "es6-features":
                  userEntries = userEs6Entries;
                  categoryName = "es6";
                  break;
                case "async-programming":
                  userEntries = userAsyncEntries;
                  categoryName = "async";
                  break;
                case "ts-basics":
                  userEntries = userTsBasicsEntries;
                  categoryName = "ts-basics";
                  break;
                case "advanced-types":
                  userEntries = userAdvancedTypesEntries;
                  categoryName = "advanced-types";
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
                        editDynamicSection(pageData.id, section.id)
                      }
                    >
                      ✏️
                    </button>
                    <button
                      className="delete-section-btn"
                      onClick={() =>
                        deleteDynamicSection(pageData.id, section.id)
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
                onClick={() => addNewSectionToDynamicPage(pageData.id)}
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
        return <div>Unbekannter Seitentyp</div>;
    }
  }
};

export default JavaScriptBook3D;
