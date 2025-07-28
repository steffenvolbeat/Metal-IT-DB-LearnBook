<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# 🔥 Metal-IT-LearnBook - Copilot Anweisungen 🔥

## Projektkontext

Dies ist ein **Metal-IT-LearnBook** - eine apokalyptische Lernplattform für IT-Technologien mit einzigartigem Metal-Design.

## Wichtige Entwicklungsrichtlinien

### 🎯 Code-Qualität Standards

- **Absolute saubere Semantik**: Jeder Code muss semantisch korrekt und professionell strukturiert sein
- **Ausführliche Kommentierung**: ALLE Codeblöcke sind wie in einer echten Entwicklungsumgebung zu kommentieren
- **Keine Shortcuts**: Vollständige Implementierung, keine Platzhalter oder TODO-Kommentare
- **TypeScript bevorzugt**: Wo möglich TypeScript für bessere Type Safety verwenden

### 🎨 Design-System Richtlinien

- **Apokalyptisches Metal-Theme**: Dunkle Farben, Neon-Effekte, KEIN ROT verwenden!
- **Farben**: metal-dark (#0f0f0f), neon-blue (#00d4ff), electric-purple (#8b5cf6), toxic-green (#10b981)
- **Typographie**: Orbitron für Headlines, Rajdhani für Body Text
- **Shadows & Glow**: Intensive Schatten und Neon-Glow-Effekte für apokalyptische Atmosphäre

### 🛠️ Technische Spezifikationen

- **React 18.3.1**: Functional Components mit Hooks bevorzugen
- **Tailwind CSS**: Utility-First Approach, Custom Tailwind Theme nutzen
- **SCSS**: Für komplexe Animationen und Mixins verwenden
- **Vite 7.0.6**: HMR und moderne ES-Module nutzen

### 📁 Projektstruktur

```
src/
├── components/          # React Komponenten (PascalCase)
├── styles/             # SCSS/CSS Dateien
├── utils/              # Utility Funktionen (camelCase)
├── hooks/              # Custom React Hooks
└── context/            # React Context Provider
```

### 🚀 Komponenten-Standards

- **Functional Components**: Keine Class Components
- **Custom Hooks**: Für Logik-Wiederverwendung
- **PropTypes/TypeScript**: Für Prop-Validierung
- **Export Standards**: Named Exports für Utilities, Default Exports für Komponenten

### 🎵 Spezielle Features

- **Login-System**: Metal-stylisches Authentifizierungsformular
- **Learn-Dashboard**: Kategorien: Programmierung, Englisch, Portfolio, Projects, Metal-Songs
- **Unique Backgrounds**: Jede Seite hat individuelles Hintergrundbild
- **Responsive Design**: Mobile-First Approach

### 💻 Lernbereiche

- **Programmierung**: HTML/CSS, JavaScript/TypeScript, React, Python
- **Englisch-Nachschlagewerk**: IT-spezifisches Vokabular
- **Portfolio**: Projektpräsentation und Referenzen
- **Projects**: Hands-on Entwicklungsprojekte
- **Metal-IT-Songs & Videos**: Multimedia-Lerncontent

## Spezielle Anweisungen für Copilot

### Bei React-Komponenten:

```jsx
/**
 * Komponenten-Name - Kurze Beschreibung
 * Ausführliche Beschreibung der Funktionalität
 * @param {Object} props - Props-Beschreibung
 * @returns {JSX.Element} - Return-Beschreibung
 */
```

### Bei SCSS/CSS:

```scss
/**
 * Datei-Name - Zweck der Styles
 * Beschreibung der Style-Logik
 * Autor: Metal-IT-Team
 */
```

### Bei Utility-Funktionen:

```javascript
/**
 * Funktions-Name - Was macht die Funktion
 * @param {type} parameter - Parameter-Beschreibung
 * @returns {type} - Return-Beschreibung
 * @example
 * // Beispiel-Verwendung
 */
```

## Verbotene Elemente

- ❌ **Rote Farben** - Passen nicht zum apokalyptischen Metal-Theme
- ❌ **Unkommentierter Code** - Jeder Block muss dokumentiert sein
- ❌ **Inline Styles** - Nur Tailwind/SCSS verwenden
- ❌ **Class Components** - Nur Functional Components
- ❌ **TODO-Kommentare** - Vollständige Implementierung erforderlich

## Erwünschte Elemente

- ✅ **Neon-Glow-Effekte** für UI-Elemente
- ✅ **Schatten-intensive Designs** für Tiefe
- ✅ **Metal-Typographie** (Orbitron/Rajdhani)
- ✅ **Smooth Animations** für bessere UX
- ✅ **Accessibility Features** für Barrierefreiheit
- ✅ **Mobile-First Responsive Design**

## Code-Beispiel Template

```jsx
/**
 * MetalButton - Apokalyptischer Button im Metal-Design
 * Wiederverwendbare Button-Komponente mit Neon-Glow-Effekten
 * @param {string} variant - Styling-Variante (primary, secondary, danger)
 * @param {string} children - Button-Text oder Icon
 * @param {function} onClick - Click-Handler-Funktion
 * @returns {JSX.Element} Styled Metal Button Element
 */
const MetalButton = ({ variant = "primary", children, onClick, ...props }) => {
  // CSS-Klassen basierend auf Variante definieren
  const baseClasses =
    "metal-button font-metal font-semibold transition-all duration-300";
  const variantClasses = {
    primary: "bg-neon-blue hover:shadow-neon",
    secondary: "bg-electric-purple hover:shadow-toxic",
    danger: "bg-toxic-green hover:shadow-apocalyptic",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default MetalButton;
```

---

**Wichtig**: Alle generierten Codes müssen diesem Standard entsprechen und das apokalyptische Metal-Theme konsequent umsetzen!
