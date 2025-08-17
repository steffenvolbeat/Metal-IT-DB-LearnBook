/**
 * HtmlCssBook3D - Realistisches 3D HTML & CSS Entwicklung Buch
 * Echte 3D-Perspektive mit Frontend-Inhalten, Seiten und Benutzer-Eingaben
 * Metal-Design mit umblättern, eigene Notizen und Lesezeichen
 * @returns {JSX.Element} Realistisches 3D HTML & CSS Buch
 */
import React, { useState, useEffect, useRef } from "react";
import "./HtmlCssBook3D.scss";

/**
 * HTML & CSS Entwicklung 3D Buch mit echter Buchfunktionalität
 */
const HtmlCssBook3D = () => {
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
  const [userHtmlEntries, setUserHtmlEntries] = useState([]);
  const [userCssEntries, setUserCssEntries] = useState([]);
  const [userLayoutEntries, setUserLayoutEntries] = useState([]);
  const [userResponsiveEntries, setUserResponsiveEntries] = useState([]);
  const [userAnimationEntries, setUserAnimationEntries] = useState([]);
  const [userToolsEntries, setUserToolsEntries] = useState([]);
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
   * Vollständige HTML & CSS Buch-Struktur mit Inhaltsverzeichnis
   */
  const bookStructure = [
    // Cover Page
    {
      id: "cover",
      type: "cover",
      title: "HTML & CSS",
      subtitle: "Frontend Development Mastery",
      author: "Metal-IT Development Team",
      version: "v3.0 Extended",
    },

    // Table of Contents
    {
      id: "toc",
      type: "table-of-contents",
      title: "📋 Inhaltsverzeichnis",
      chapters: [
        { icon: "📄", title: "HTML Grundlagen", page: 3 },
        { icon: "🎨", title: "CSS Styling", page: 4 },
        { icon: "📐", title: "Layouts & Flexbox", page: 5 },
        { icon: "📱", title: "Responsive Design", page: 6 },
        { icon: "✨", title: "Animationen & Effekte", page: 7 },
        { icon: "🛠️", title: "Tools & Workflows", page: 8 },
      ],
    },

    // HTML Grundlagen
    {
      id: "html-basics",
      type: "content",
      title: "📄 HTML Grundlagen",
      pageNumber: 3,
      allowNotes: true,
      content: {
        title: "HTML5 - Semantisches Markup",
        category: "html",
        sections: [
          {
            title: "Grundstruktur einer HTML-Seite",
            description:
              "Moderne HTML5-Grundstruktur mit semantischen Elementen.",
            code: `<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Metal-IT Frontend Development">
    <title>HTML & CSS Mastery</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="site-header">
        <nav class="main-navigation">
            <ul class="nav-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main class="main-content">
        <section class="hero-section">
            <h1>Welcome to Metal-IT</h1>
            <p>Apokalyptische Frontend-Power!</p>
        </section>
    </main>
    
    <footer class="site-footer">
        <p>&copy; 2025 Metal-IT Development</p>
    </footer>
</body>
</html>`,
          },
          {
            title: "Semantische HTML5 Elemente",
            description:
              "Verwendung von semantischen Elementen für bessere Struktur und SEO.",
            code: `<!-- Semantische Struktur -->
<article class="blog-post">
    <header>
        <h1>Frontend Development Trends 2025</h1>
        <time datetime="2025-08-17">17. August 2025</time>
        <address>Von <a href="/author/metal-dev">Metal Developer</a></address>
    </header>
    
    <section>
        <h2>HTML5 Neuerungen</h2>
        <p>Die neuesten Features von HTML5...</p>
        
        <aside class="tip">
            <h3>💡 Tipp</h3>
            <p>Verwende immer semantische Elemente!</p>
        </aside>
    </section>
    
    <footer>
        <p>Tags: <mark>HTML5</mark>, <mark>Frontend</mark></p>
    </footer>
</article>`,
          },
          {
            title: "Formulare & Validierung",
            description: "Moderne Formulare mit eingebauter HTML5-Validierung.",
            code: `<form class="contact-form" method="post" action="/submit">
    <fieldset>
        <legend>Kontakt Informationen</legend>
        
        <label for="name">Name *</label>
        <input type="text" 
               id="name" 
               name="name" 
               required 
               minlength="2"
               placeholder="Ihr Name">
        
        <label for="email">E-Mail *</label>
        <input type="email" 
               id="email" 
               name="email" 
               required 
               placeholder="ihre@email.de">
        
        <label for="phone">Telefon</label>
        <input type="tel" 
               id="phone" 
               name="phone" 
               pattern="[0-9\\s\\-\\(\\)]+"
               placeholder="+49 123 456789">
        
        <label for="message">Nachricht *</label>
        <textarea id="message" 
                  name="message" 
                  required 
                  rows="5"
                  placeholder="Ihre Nachricht..."></textarea>
        
        <button type="submit">Nachricht senden</button>
    </fieldset>
</form>`,
          },
        ],
      },
    },

    // CSS Styling
    {
      id: "css-styling",
      type: "content",
      title: "🎨 CSS Styling",
      pageNumber: 4,
      allowNotes: true,
      content: {
        title: "CSS3 - Modernes Styling",
        category: "css",
        sections: [
          {
            title: "CSS Custom Properties (Variablen)",
            description: "Verwendung von CSS-Variablen für wartbaren Code.",
            code: `/* CSS Custom Properties Definition */
:root {
  /* Farb-Palette */
  --primary-color: #ff6b35;
  --secondary-color: #004e89;
  --accent-color: #00d4ff;
  --text-color: #ffffff;
  --bg-color: #0f0f0f;
  
  /* Abstände */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 2rem;
  --spacing-lg: 4rem;
  
  /* Typographie */
  --font-primary: 'Orbitron', monospace;
  --font-secondary: 'Rajdhani', sans-serif;
  --font-size-base: 1rem;
  --font-size-lg: 1.25rem;
  --font-size-xl: 2rem;
  
  /* Schatten */
  --shadow-soft: 0 4px 8px rgba(0, 0, 0, 0.1);
  --shadow-strong: 0 8px 25px rgba(0, 0, 0, 0.3);
  --shadow-neon: 0 0 20px var(--accent-color);
}

/* Verwendung der Variablen */
.metal-card {
  background: var(--bg-color);
  color: var(--text-color);
  padding: var(--spacing-md);
  font-family: var(--font-secondary);
  box-shadow: var(--shadow-strong);
  border: 1px solid var(--primary-color);
}

.metal-button {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: var(--text-color);
  padding: var(--spacing-sm) var(--spacing-md);
  font-family: var(--font-primary);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.metal-button:hover {
  box-shadow: var(--shadow-neon);
  transform: scale(1.05);
}`,
          },
          {
            title: "Advanced Selectors",
            description:
              "Moderne CSS-Selektoren für präzise Styling-Kontrolle.",
            code: `/* Pseudo-Klassen */
.nav-item:nth-child(odd) {
  background: rgba(255, 107, 53, 0.1);
}

.nav-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
}

/* Pseudo-Elemente */
.metal-heading::before {
  content: "🔥 ";
  color: var(--accent-color);
}

.metal-heading::after {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, var(--primary-color), transparent);
  margin-top: 0.5rem;
}

/* Attribut-Selektoren */
input[type="email"]:focus {
  border-color: var(--accent-color);
  box-shadow: 0 0 10px rgba(0, 212, 255, 0.3);
}

a[href^="https://"]:not([href*="metal-it.de"])::after {
  content: " 🔗";
  font-size: 0.8em;
}

/* Kombinatoren */
.card > .card-header + .card-content {
  margin-top: var(--spacing-md);
}

.sidebar ~ .main-content {
  margin-left: 250px;
}`,
          },
        ],
      },
    },

    // Layouts & Flexbox
    {
      id: "layouts-flexbox",
      type: "content",
      title: "📐 Layouts & Flexbox",
      pageNumber: 5,
      allowNotes: true,
      content: {
        title: "Moderne Layout-Techniken",
        category: "layout",
        sections: [
          {
            title: "CSS Grid Layout System",
            description: "Komplexe Layouts mit CSS Grid erstellen.",
            code: `/* Grid Container Definition */
.layout-grid {
  display: grid;
  grid-template-areas: 
    "header header header"
    "sidebar content aside"
    "footer footer footer";
  grid-template-columns: 250px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  gap: var(--spacing-md);
}

/* Grid Items */
.header { 
  grid-area: header; 
  background: var(--primary-color);
  padding: var(--spacing-md);
}

.sidebar { 
  grid-area: sidebar; 
  background: rgba(255, 255, 255, 0.05);
  padding: var(--spacing-md);
}

.main-content { 
  grid-area: content; 
  background: var(--bg-color);
  padding: var(--spacing-md);
}

.aside { 
  grid-area: aside; 
  background: rgba(0, 212, 255, 0.1);
  padding: var(--spacing-md);
}

.footer { 
  grid-area: footer; 
  background: var(--secondary-color);
  padding: var(--spacing-md);
  text-align: center;
}

/* Responsive Grid */
@media (max-width: 768px) {
  .layout-grid {
    grid-template-areas: 
      "header"
      "content"
      "sidebar"
      "aside"
      "footer";
    grid-template-columns: 1fr;
  }
}`,
          },
          {
            title: "Flexbox für Komponenten",
            description: "Flexbox für perfekte Komponenten-Ausrichtung.",
            code: `/* Flex Container */
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
}

/* Navigation mit Flexbox */
.nav-flex {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-sm);
  
  .nav-item {
    flex: 0 0 auto;
    padding: var(--spacing-xs) var(--spacing-sm);
    transition: all 0.3s ease;
  }
  
  .nav-item.active {
    flex-grow: 1;
    background: var(--primary-color);
  }
}

/* Card Layout mit Flexbox */
.card-flex {
  display: flex;
  flex-direction: column;
  min-height: 300px;
  
  .card-header {
    flex: 0 0 auto;
    background: var(--secondary-color);
    padding: var(--spacing-sm);
  }
  
  .card-body {
    flex: 1;
    padding: var(--spacing-md);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .card-footer {
    flex: 0 0 auto;
    padding: var(--spacing-sm);
    margin-top: auto;
  }
}

/* Responsive Flex */
@media (max-width: 768px) {
  .flex-container {
    flex-direction: column;
    align-items: stretch;
  }
  
  .nav-flex {
    flex-wrap: wrap;
    justify-content: center;
  }
}`,
          },
        ],
      },
    },

    // Responsive Design
    {
      id: "responsive-design",
      type: "content",
      title: "📱 Responsive Design",
      pageNumber: 6,
      allowNotes: true,
      content: {
        title: "Mobile-First Design",
        category: "responsive",
        sections: [
          {
            title: "Media Queries & Breakpoints",
            description: "Responsive Design mit Mobile-First Ansatz.",
            code: `/* Mobile-First Base Styles */
.container {
  width: 100%;
  padding: var(--spacing-sm);
  margin: 0 auto;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-sm);
}

/* Tablet Breakpoint */
@media (min-width: 768px) {
  .container {
    max-width: 750px;
    padding: var(--spacing-md);
  }
  
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-md);
  }
}

/* Desktop Breakpoint */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
  }
  
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Large Desktop */
@media (min-width: 1440px) {
  .container {
    max-width: 1400px;
  }
  
  .grid {
    grid-template-columns: repeat(4, 1fr);
    gap: var(--spacing-lg);
  }
}

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
  :root {
    --text-color: #ffffff;
    --bg-color: #0f0f0f;
  }
}

/* Motion Preferences */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}`,
          },
          {
            title: "Fluid Typography",
            description:
              "Responsive Typographie mit clamp() und CSS-Funktionen.",
            code: `/* Fluid Typography */
:root {
  --font-size-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
  --font-size-base: clamp(1rem, 0.9rem + 0.5vw, 1.25rem);
  --font-size-lg: clamp(1.25rem, 1.1rem + 0.75vw, 1.75rem);
  --font-size-xl: clamp(1.75rem, 1.5rem + 1.25vw, 2.5rem);
  --font-size-xxl: clamp(2.5rem, 2rem + 2.5vw, 4rem);
  
  --line-height-tight: 1.2;
  --line-height-normal: 1.5;
  --line-height-loose: 1.8;
}

/* Responsive Spacing */
.section {
  padding-block: clamp(2rem, 5vw, 6rem);
  padding-inline: clamp(1rem, 5vw, 3rem);
}

/* Responsive Images */
.responsive-img {
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 16/9;
}

/* Container Queries (Modern Browser) */
.card-container {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 400px) {
  .card {
    display: flex;
    flex-direction: row;
  }
  
  .card-image {
    flex: 0 0 200px;
  }
}`,
          },
        ],
      },
    },

    // Animationen & Effekte
    {
      id: "animations-effects",
      type: "content",
      title: "✨ Animationen & Effekte",
      pageNumber: 7,
      allowNotes: true,
      content: {
        title: "CSS Animationen & Transitions",
        category: "animation",
        sections: [
          {
            title: "CSS Transitions",
            description: "Sanfte Übergänge für bessere User Experience.",
            code: `/* Basic Transitions */
.metal-button {
  background: var(--primary-color);
  color: var(--text-color);
  padding: var(--spacing-sm) var(--spacing-md);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  
  /* Transition Properties */
  transition: 
    background-color 0.3s ease,
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.3s ease,
    color 0.2s ease;
}

.metal-button:hover {
  background: var(--secondary-color);
  transform: translateY(-3px) scale(1.02);
  box-shadow: 
    0 8px 25px rgba(0, 0, 0, 0.3),
    0 0 20px var(--accent-color);
}

.metal-button:active {
  transform: translateY(-1px) scale(0.98);
  transition-duration: 0.1s;
}

/* Image Hover Effects */
.image-hover {
  overflow: hidden;
  border-radius: 12px;
  
  img {
    transition: transform 0.5s ease;
    will-change: transform;
  }
  
  &:hover img {
    transform: scale(1.1) rotate(2deg);
  }
}

/* Loading States */
.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-top: 4px solid var(--accent-color);
  border-radius: 50%;
  transition: opacity 0.3s ease;
}

.loading-spinner.spinning {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`,
          },
          {
            title: "CSS Keyframe Animationen",
            description: "Komplexe Animationen mit @keyframes erstellen.",
            code: `/* Glow Effect Animation */
@keyframes metalGlow {
  0%, 100% {
    box-shadow: 
      0 0 20px rgba(255, 107, 53, 0.3),
      0 0 40px rgba(255, 107, 53, 0.1);
  }
  50% {
    box-shadow: 
      0 0 30px rgba(255, 107, 53, 0.6),
      0 0 60px rgba(255, 107, 53, 0.3);
  }
}

/* Floating Animation */
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-10px) rotate(1deg);
  }
  75% {
    transform: translateY(-5px) rotate(-1deg);
  }
}

/* Slide In Animation */
@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Usage */
.glow-element {
  animation: metalGlow 2s ease-in-out infinite;
}

.floating-icon {
  animation: float 3s ease-in-out infinite;
}

.slide-in {
  animation: slideInFromLeft 0.6s ease-out;
}

/* Staggered Animation */
.stagger-item {
  animation: slideInFromLeft 0.6s ease-out both;
}

.stagger-item:nth-child(1) { animation-delay: 0.1s; }
.stagger-item:nth-child(2) { animation-delay: 0.2s; }
.stagger-item:nth-child(3) { animation-delay: 0.3s; }
.stagger-item:nth-child(4) { animation-delay: 0.4s; }

/* Performance Optimizations */
.animated-element {
  will-change: transform, opacity;
  backface-visibility: hidden;
  perspective: 1000px;
}`,
          },
        ],
      },
    },

    // Tools & Workflows
    {
      id: "tools-workflows",
      type: "content",
      title: "🛠️ Tools & Workflows",
      pageNumber: 8,
      allowNotes: true,
      content: {
        title: "Moderne Entwicklungs-Tools",
        category: "tools",
        sections: [
          {
            title: "Sass/SCSS Setup",
            description: "CSS-Präprozessoren für erweiterte Funktionalität.",
            code: `// SCSS Variables & Mixins
$colors: (
  primary: #ff6b35,
  secondary: #004e89,
  accent: #00d4ff,
  success: #10b981,
  warning: #f59e0b,
  danger: #ef4444
);

$breakpoints: (
  xs: 480px,
  sm: 768px,
  md: 1024px,
  lg: 1440px,
  xl: 1920px
);

// Color Function
@function color($color-name) {
  @return map-get($colors, $color-name);
}

// Media Query Mixin
@mixin respond-to($breakpoint) {
  @if map-has-key($breakpoints, $breakpoint) {
    @media (min-width: map-get($breakpoints, $breakpoint)) {
      @content;
    }
  }
}

// Button Mixin
@mixin metal-button($bg-color: color(primary)) {
  background: linear-gradient(135deg, $bg-color, darken($bg-color, 10%));
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba($bg-color, 0.3);
  }
}

// Usage
.primary-btn {
  @include metal-button(color(primary));
}

.secondary-btn {
  @include metal-button(color(secondary));
}

.container {
  padding: 1rem;
  
  @include respond-to(md) {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
}`,
          },
          {
            title: "CSS-in-JS mit Styled Components",
            description: "Moderne CSS-in-JS Lösungen für React.",
            code: `import styled, { keyframes, css } from 'styled-components';

// Theme Definition
const theme = {
  colors: {
    primary: '#ff6b35',
    secondary: '#004e89',
    accent: '#00d4ff',
  },
  breakpoints: {
    sm: '768px',
    md: '1024px',
    lg: '1440px',
  },
};

// Animations
const glow = keyframes\`
  0%, 100% {
    box-shadow: 0 0 20px \${props => props.theme.colors.accent}33;
  }
  50% {
    box-shadow: 0 0 40px \${props => props.theme.colors.accent}66;
  }
\`;

// Styled Components
const MetalButton = styled.button\`
  background: linear-gradient(
    135deg, 
    \${props => props.theme.colors.primary},
    \${props => props.theme.colors.secondary}
  );
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: \${glow} 2s infinite;
  
  &:hover {
    transform: translateY(-3px) scale(1.02);
  }
  
  \${props => props.variant === 'large' && css\`
    padding: 1.5rem 3rem;
    font-size: 1.25rem;
  \`}
  
  @media (max-width: \${props => props.theme.breakpoints.sm}) {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
\`;

const Card = styled.div\`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    transform: translateY(-5px);
    border-color: \${props => props.theme.colors.accent}66;
  }
\`;`,
          },
        ],
      },
    },
  ];

  /**
   * Kombiniere statische und dynamische Seiten
   */
  const getAllPages = () => {
    return [...bookStructure, ...dynamicPages];
  };

  const currentPageData = getAllPages()[currentPage];

  /**
   * User Entries Management - Kategoriebasiert
   */
  const getUserEntries = (category) => {
    switch (category) {
      case "toc":
        return userTocEntries;
      case "html":
        return userHtmlEntries;
      case "css":
        return userCssEntries;
      case "layout":
        return userLayoutEntries;
      case "responsive":
        return userResponsiveEntries;
      case "animation":
        return userAnimationEntries;
      case "tools":
        return userToolsEntries;
      default:
        return [];
    }
  };

  const setUserEntries = (category, entries) => {
    switch (category) {
      case "toc":
        setUserTocEntries(entries);
        break;
      case "html":
        setUserHtmlEntries(entries);
        break;
      case "css":
        setUserCssEntries(entries);
        break;
      case "layout":
        setUserLayoutEntries(entries);
        break;
      case "responsive":
        setUserResponsiveEntries(entries);
        break;
      case "animation":
        setUserAnimationEntries(entries);
        break;
      case "tools":
        setUserToolsEntries(entries);
        break;
      default:
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
    console.log(`✏️ Eintrag in ${category} bearbeitet:`, entryId);
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
    setUserHtmlEntries([]);
    setUserCssEntries([]);
    setUserLayoutEntries([]);
    setUserResponsiveEntries([]);
    setUserAnimationEntries([]);
    setUserToolsEntries([]);
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
    <div className="htmlcss-book-cover">
      <div className="cover-title">{page.title}</div>
      <div className="cover-subtitle">{page.subtitle}</div>
      <div className="cover-author">von {page.author}</div>
      <div className="cover-version">{page.version}</div>
      <div className="cover-decoration">🎨</div>
    </div>
  );

  /**
   * Render Table of Contents with User Entries
   */
  const renderTableOfContents = (page) => (
    <div className="htmlcss-toc">
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

        {/* Empty State */}
        {getUserEntries("toc").length === 0 && (
          <div className="empty-toc-entries">
            <span className="empty-icon">📝</span>
            <span className="empty-text">
              Erstelle deine eigenen Kapitel mit dem ➕ Button...
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
    <div className="htmlcss-content-page">
      <h2 className="content-title">{page.content.title}</h2>

      {/* User Entry Controls */}
      <div className="user-entry-controls">
        <div className="control-group">
          <button
            className="add-entry-btn"
            onClick={() => openAddModal(page.content.category)}
            title="Neuen Eintrag hinzufügen"
          >
            ➕ Hinzufügen
          </button>
          <button
            className="reset-btn"
            onClick={() => openResetModal(page.content.category)}
            title="Alle Einträge dieser Kategorie löschen"
          >
            🔄 Reset
          </button>
        </div>
        <div className="control-group">
          <button
            className="reset-all-btn danger"
            onClick={() => openResetModal("all")}
            title="Alle Benutzer-Einträge löschen"
          >
            🗑️ Alles löschen
          </button>
        </div>
      </div>

      {/* Original Content Sections */}
      {page.content.sections.map((section, index) => (
        <div key={index} className="content-section">
          <h3 className="section-title">{section.title}</h3>
          <p className="section-description">{section.description}</p>
          {section.code && (
            <pre className="code-block">
              <code>{section.code}</code>
            </pre>
          )}
        </div>
      ))}

      {/* User Generated Content */}
      <div className="user-entries-section">
        <h3 className="user-section-title">
          👤 Deine eigenen Einträge (
          {getUserEntries(page.content.category).length})
        </h3>

        {getUserEntries(page.content.category).map((userEntry) => (
          <div key={userEntry.id} className="user-section">
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
    <div className="htmlcss-book3d-container">
      <div
        ref={bookRef}
        className={`htmlcss-book3d ${isOpen ? "open" : "closed"}`}
      >
        {/* Closed Book State */}
        {!isOpen && (
          <div className="book-spine" onClick={toggleBook}>
            <div className="spine-title">HTML & CSS</div>
            <div className="spine-author">Frontend Development</div>
          </div>
        )}

        {/* Open Book State */}
        {isOpen && (
          <>
            {/* Linke Seite */}
            <div
              className={`book-page left-page ${isFlipping ? "flipping" : ""}`}
            >
              {currentPage > 0 && (
                <>
                  {getAllPages()[currentPage - 1].type === "cover" &&
                    renderCover(getAllPages()[currentPage - 1])}
                  {getAllPages()[currentPage - 1].type ===
                    "table-of-contents" &&
                    renderTableOfContents(getAllPages()[currentPage - 1])}
                  {getAllPages()[currentPage - 1].type === "content" &&
                    renderContent(getAllPages()[currentPage - 1])}
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
              Notiz für {getAllPages().find((p) => p.id === editingNote)?.title}
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
        <div className="user-entry-modal-overlay">
          <div className="user-entry-modal">
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

            <div className="modal-form">
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
              <button className="submit-btn" onClick={saveEntry}>
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
        <div className="confirmation-modal-overlay">
          <div className="confirmation-modal">
            <div className="modal-icon">🗑️</div>
            <h3>Eintrag löschen</h3>
            <p>Möchtest du diesen Eintrag wirklich löschen?</p>
            <p>Diese Aktion kann nicht rückgängig gemacht werden.</p>

            <div className="modal-actions">
              <button
                className="cancel-btn"
                onClick={() => setShowDeleteModal(false)}
              >
                Abbrechen
              </button>
              <button className="confirm-btn" onClick={confirmDeleteEntry}>
                Ja, löschen
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reset Confirmation Modal */}
      {showResetModal && (
        <div
          className={`confirmation-modal-overlay ${
            resetCategory === "all" ? "global-reset-modal" : ""
          }`}
        >
          <div className="confirmation-modal">
            <div className="modal-icon">
              {resetCategory === "all" ? "⚠️" : "🔄"}
            </div>
            <h3>
              {resetCategory === "all"
                ? "Alle Einträge löschen"
                : `Kategorie "${resetCategory}" zurücksetzen`}
            </h3>
            <p>
              {resetCategory === "all"
                ? "Möchtest du wirklich ALLE Benutzer-Einträge und dynamischen Seiten löschen?"
                : `Möchtest du alle Einträge in der Kategorie "${resetCategory}" löschen?`}
            </p>
            <p>Diese Aktion kann nicht rückgängig gemacht werden.</p>

            <div className="modal-actions">
              <button
                className="cancel-btn"
                onClick={() => setShowResetModal(false)}
              >
                Abbrechen
              </button>
              <button className="confirm-btn" onClick={confirmResetCategory}>
                Ja, {resetCategory === "all" ? "alles löschen" : "zurücksetzen"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HtmlCssBook3D;
