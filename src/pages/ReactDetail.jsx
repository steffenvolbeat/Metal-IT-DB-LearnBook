/**
 * ReactDetail - Extrem detailreiche React-Lernseite
 * Vollständiges React-Kompendium im Metal-Style
 * @returns {JSX.Element} React Detailseite
 */

import React from "react";
import PropTypes from "prop-types";
import MetalCodeBlock from "../components/MetalCodeBlock";

const ReactDetail = () => (
  <section className="metal-card p-8 mt-8 w-full max-w-3xl mx-auto relative">
    {/* === Sticky Inhaltsverzeichnis === */}
    <nav className="sticky top-4 z-20 mb-12 flex flex-col items-center">
      <div className="bg-metal-dark/80 rounded-xl px-6 py-4 shadow-neon border border-neon-blue flex flex-col gap-2 w-full max-w-xl">
        <h2 className="font-metal text-neon-blue text-2xl mb-2 tracking-widest neon-glow">
          Inhaltsverzeichnis
        </h2>
        <ul className="flex flex-wrap gap-3 justify-center text-base font-display">
          <li>
            <a
              href="#grundlagen"
              className="hover:text-electric-purple transition-all"
            >
              Grundlagen
            </a>
          </li>
          <li>
            <a
              href="#fortgeschritten"
              className="hover:text-toxic-green transition-all"
            >
              Fortgeschritten
            </a>
          </li>
          <li>
            <a
              href="#state-management"
              className="hover:text-neon-blue transition-all"
            >
              State Management
            </a>
          </li>
          <li>
            <a
              href="#api-daten"
              className="hover:text-electric-purple transition-all"
            >
              API &amp; Daten
            </a>
          </li>
          <li>
            <a
              href="#migration"
              className="hover:text-toxic-green transition-all"
            >
              Migration
            </a>
          </li>
          <li>
            <a
              href="#community"
              className="hover:text-neon-blue transition-all"
            >
              Community
            </a>
          </li>
          <li>
            <a
              href="#praxis"
              className="hover:text-electric-purple transition-all"
            >
              Praxis
            </a>
          </li>
        </ul>
      </div>
    </nav>
    {/* === Metal-React-Kompendium Header === */}
    <header className="mb-12 text-center">
      <h1 className="text-5xl font-metal neon-glow mb-4">React Kompendium</h1>
      <p className="font-display text-xl text-text-secondary max-w-2xl mx-auto">
        Das ultimative, apokalyptische Metal-IT-LearnBook für React – von den
        absoluten Grundlagen bis zu Profi-Patterns, State-Management, Testing,
        Community und Praxisprojekten. Jeder Abschnitt ist einer klaren
        Kategorie zugeordnet. Bang your Head & Code!
      </p>
    </header>

    {/* === GRUNDLAGEN === */}
    <div id="grundlagen" className="mb-16 scroll-mt-24">
      <div className="mb-6">
        <span className="inline-block px-4 py-1 bg-metal-dark text-neon-blue font-metal rounded-full shadow-neon mb-4 text-lg tracking-widest">
          GRUNDLAGEN
        </span>
      </div>
      {/* ...alle Grundlagen-Abschnitte (Was ist React, JSX, Komponentenarten, Props, State, Lifecycle, Context)... */}
      {/* ...existing code... */}
    </div>

    {/* === FORTGESCHRITTEN === */}
    <div id="fortgeschritten" className="mb-16 scroll-mt-24">
      <div className="mb-6">
        <span className="inline-block px-4 py-1 bg-metal-dark text-electric-purple font-metal rounded-full shadow-toxic mb-4 text-lg tracking-widest">
          FORTGESCHRITTEN
        </span>
      </div>
      {/* ...alle fortgeschrittenen Abschnitte (Custom Hooks, useReducer, Event Handling, Forms, Listen, Conditional Rendering, Styling, Error Boundaries, Code Splitting, Router, Portals, Refs, Animationen, Testing, Accessibility, Best Practices, Performance, Server Components)... */}
      {/* ...existing code... */}
    </div>

    {/* === STATE MANAGEMENT === */}
    <div id="state-management" className="mb-16 scroll-mt-24">
      <div className="mb-6">
        <span className="inline-block px-4 py-1 bg-metal-dark text-toxic-green font-metal rounded-full shadow-toxic mb-4 text-lg tracking-widest">
          STATE MANAGEMENT
        </span>
      </div>
      {/* ...State Management (Redux, Zustand, Jotai, Context)... */}
      {/* ...existing code... */}
    </div>

    {/* === API & DATEN === */}
    <div id="api-daten" className="mb-16 scroll-mt-24">
      <div className="mb-6">
        <span className="inline-block px-4 py-1 bg-metal-dark text-neon-blue font-metal rounded-full shadow-neon mb-4 text-lg tracking-widest">
          API &amp; DATEN
        </span>
      </div>
      {/* ...API-Integration: fetch, axios, SWR, React Query... */}
      {/* ...existing code... */}
    </div>

    {/* === MIGRATION & MODERNISIERUNG === */}
    <div id="migration" className="mb-16 scroll-mt-24">
      <div className="mb-6">
        <span className="inline-block px-4 py-1 bg-metal-dark text-electric-purple font-metal rounded-full shadow-toxic mb-4 text-lg tracking-widest">
          MIGRATION &amp; MODERNISIERUNG
        </span>
      </div>
      {/* ...Migration von Class zu Function Components... */}
      {/* ...existing code... */}
    </div>

    {/* === COMMUNITY & ÖKOSYSTEM === */}
    <div id="community" className="mb-16 scroll-mt-24">
      <div className="mb-6">
        <span className="inline-block px-4 py-1 bg-metal-dark text-neon-blue font-metal rounded-full shadow-neon mb-4 text-lg tracking-widest">
          COMMUNITY &amp; ÖKOSYSTEM
        </span>
      </div>
      {/* ...Community & Ökosystem: DevTools, Extensions, Libraries... */}
      {/* ...existing code... */}
    </div>

    {/* === PRAXIS & CHALLENGES === */}
    <div id="praxis" className="mb-16 scroll-mt-24">
      <div className="mb-6">
        <span className="inline-block px-4 py-1 bg-metal-dark text-toxic-green font-metal rounded-full shadow-toxic mb-4 text-lg tracking-widest">
          PRAXIS &amp; CHALLENGES
        </span>
      </div>
      {/* ...Beispielprojekte & Aufgaben... */}
      {/* ...existing code... */}
    </div>
    <h2 className="text-4xl font-metal neon-glow mb-6">Was ist React?</h2>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">Philosophie</h3>
      <p className="font-display text-text-secondary mb-4">
        React ist eine{" "}
        <span className="text-electric-purple font-bold">
          JavaScript-Bibliothek
        </span>{" "}
        für den Aufbau von Benutzeroberflächen. Sie folgt dem Prinzip{" "}
        <span className="text-toxic-green font-bold">
          "UI as a function of state"
        </span>{" "}
        und setzt auf{" "}
        <span className="text-neon-blue font-bold">Komponenten</span> als
        zentrale Bausteine. Ziel ist es, komplexe UIs durch kleine,
        wiederverwendbare und isolierte Komponenten zu strukturieren.
      </p>
      <ul className="list-disc ml-6 text-text-secondary font-display mb-4">
        <li>
          Deklarativ: Du beschreibst <span className="text-neon-blue">was</span>{" "}
          du sehen willst, nicht{" "}
          <span className="text-electric-purple">wie</span> es gebaut wird.
        </li>
        <li>
          Komponentenbasiert: Alles ist eine Komponente – von Buttons bis zu
          ganzen Seiten.
        </li>
        <li>
          Unidirektionaler Datenfluss: State fließt von oben nach unten (Parent
          → Child).
        </li>
        <li>Virtual DOM für Performance und Effizienz.</li>
      </ul>
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">Virtual DOM</h3>
      <p className="font-display text-text-secondary mb-4">
        Der <span className="text-neon-blue font-bold">Virtual DOM</span> ist
        ein leichtgewichtiges, in-memory Abbild des echten DOMs. React
        vergleicht ("diffing") den aktuellen mit dem neuen Virtual DOM und führt
        nur die minimal notwendigen Änderungen ("reconciliation") im echten DOM
        durch. Das sorgt für{" "}
        <span className="text-toxic-green font-bold">maximale Performance</span>{" "}
        und flüssige UI-Updates.
      </p>

      <MetalCodeBlock
        language="jsx"
        code={`// Beispiel: Virtueller vs. echter DOM\nconst vdom = <h1>Hello Metal!</h1>;\n// React rendert daraus effiziente DOM-Operationen`}
      />
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        Komponentenmodell
      </h3>
      <p className="font-display text-text-secondary mb-4">
        Das{" "}
        <span className="text-electric-purple font-bold">
          Komponentenmodell
        </span>
        ist das Herzstück von React. Jede UI-Einheit ist eine Komponente – sie
        kapselt <span className="text-neon-blue">Struktur (JSX)</span>,{" "}
        <span className="text-toxic-green">Logik (JS)</span> und{" "}
        <span className="text-electric-purple">Styles</span>.
      </p>

      <MetalCodeBlock
        language="jsx"
        code={`// Beispiel: Einfache React-Komponente\nfunction MetalHeadline({ text }) {\n  return <h1 className=\"font-metal neon-glow\">{text}</h1>;\n}`}
      />
      <ul className="list-disc ml-6 text-text-secondary font-display">
        <li>
          Wiederverwendbarkeit: Komponenten können beliebig oft verwendet
          werden.
        </li>
        <li>
          Kapselung: Jede Komponente verwaltet ihren eigenen State und ihre
          Logik.
        </li>
        <li>
          Komposition: Komplexe UIs entstehen durch das Zusammensetzen vieler
          Komponenten.
        </li>
      </ul>
    </div>
    <h2 className="text-3xl font-metal neon-glow mb-4">React</h2>
    <p className="font-display text-text-secondary mb-6">
      Alles rund um komponentenbasierte Entwicklung mit React – Metal, Hooks
      &amp; Power!
    </p>
    <div className="mb-6">
      <h3 className="font-metal text-neon-blue text-xl mb-2">
        Beispiel: Functional Component
      </h3>

      <MetalCodeBlock
        language="jsx"
        code={`const MetalButton = ({ children }) => (\n  <button className=\"metal-button\">{children}</button>\n);`}
      />
      <p className="font-display text-text-secondary text-sm">
        Nutze immer Functional Components und Hooks!
      </p>
    </div>
    <div className="mb-6">
      <h3 className="font-metal text-neon-blue text-xl mb-2">Aufgabe</h3>
      <p className="font-display mb-2">
        Erstelle eine React-Komponente, die einen Counter anzeigt und erhöht.
      </p>

      <MetalCodeBlock
        language="jsx"
        code={`const Counter = () => {\n  const [count, setCount] = React.useState(0);\n  return (\n    <button onClick={() => setCount(count + 1)}>\n      Count: {count}\n    </button>\n  );\n};`}
      />
    </div>
    <div className="mb-6">
      <h3 className="font-metal text-neon-blue text-xl mb-2">
        Hooks: useEffect
      </h3>

      <MetalCodeBlock
        language="jsx"
        code={`React.useEffect(() => {\n  // Effekt-Code\n}, []);`}
      />
      <p className="font-display text-xs text-text-secondary">
        Mit Hooks steuerst du State und Lifecycle!
      </p>
    </div>
    {/* === JSX & Rendering === */}
    <h2 className="text-3xl font-metal neon-glow mb-6 mt-12">
      JSX &amp; Rendering
    </h2>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">Was ist JSX?</h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-neon-blue font-bold">JSX</span> (JavaScript XML)
        ist eine von React eingeführte Syntaxerweiterung, die es ermöglicht,
        HTML-ähnlichen Code direkt in JavaScript zu schreiben. JSX wird von
        Build-Tools wie Babel in reguläres JavaScript umgewandelt.
      </p>

      <MetalCodeBlock
        language="jsx"
        code={`// JSX Beispiel\nconst headline = <h1 className=\"font-metal neon-glow\">Welcome to Metal-IT!</h1>;`}
      />
      <ul className="list-disc ml-6 text-text-secondary font-display mb-4">
        <li>
          JSX kann beliebige JavaScript-Ausdrücke mit{" "}
          <span className="text-electric-purple">{"{}"}</span> einbetten.
        </li>
        <li>Alle JSX-Tags müssen geschlossen werden (&lt;img /&gt;).</li>
        <li>
          Klassen heißen <span className="text-neon-blue">className</span> statt{" "}
          <span className="text-electric-purple">class</span>.
        </li>
      </ul>
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        Rendering in React
      </h3>
      <p className="font-display text-text-secondary mb-4">
        React rendert Komponenten und JSX-Elemente in das echte DOM. Das
        geschieht meist mit{" "}
        <span className="text-neon-blue font-bold">
          ReactDOM.createRoot(...).render(...)
        </span>{" "}
        im Einstiegspunkt deiner App.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`// Einstiegspunkt (z.B. main.jsx)
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")).render(<App />);`}
      </pre>
      <p className="font-display text-xs text-text-secondary">
        Jeder State-Change oder Prop-Update löst ein erneutes Rendering der
        betroffenen Komponenten aus – dank Virtual DOM extrem performant!
      </p>
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        JSX Expressions &amp; Dynamik
      </h3>
      <p className="font-display text-text-secondary mb-4">
        In JSX kannst du dynamische Werte, Variablen und sogar Funktionen direkt
        einbetten:
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`const username = "Metalhead";
return <h2>Welcome, {username}!</h2>;`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display">
        <li>
          Du kannst auch Bedingungen und Listen direkt in JSX nutzen (siehe
          weiter unten).
        </li>
        <li>
          JSX ist letztlich syntaktischer Zucker für{" "}
          <span className="text-electric-purple">React.createElement</span>.
        </li>
      </ul>
    </div>
    {/* === Komponentenarten: Function, Class, Pure, Memo === */}
    <h2 className="text-3xl font-metal neon-glow mb-6 mt-12">
      Komponentenarten in React
    </h2>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        Function Components
      </h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-neon-blue font-bold">Function Components</span>{" "}
        sind der moderne Standard in React. Sie sind einfache
        JavaScript-Funktionen, die JSX zurückgeben und Hooks nutzen können.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`function MetalButton({ children }) {
  return <button className="metal-button">{children}</button>;
}`}
      </pre>
      <p className="font-display text-xs text-text-secondary">
        Hooks wie <span className="text-electric-purple">useState</span> und{" "}
        <span className="text-electric-purple">useEffect</span> funktionieren
        nur in Function Components!
      </p>
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        Class Components
      </h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-electric-purple font-bold">Class Components</span>{" "}
        waren lange der Standard, werden aber heute kaum noch verwendet. Sie
        nutzen ES6-Klassen und haben eigene Lifecycle-Methoden.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`class MetalHeadline extends React.Component {
  render() {
    return <h1 className="font-metal neon-glow">{this.props.text}</h1>;
  }
}`}
      </pre>
      <p className="font-display text-xs text-text-secondary">
        Class Components sind für neue Projekte nicht mehr empfohlen – nutze
        Function Components!
      </p>
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        Pure Components
      </h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-toxic-green font-bold">Pure Components</span> sind
        Komponenten, die nur neu gerendert werden, wenn sich ihre Props ändern.
        In Function Components nutzt man dafür{" "}
        <span className="text-neon-blue">React.memo</span>.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`const PureMetal = React.memo(function PureMetal({ riff }) {
  return <span>{riff}</span>;
});`}
      </pre>
      <p className="font-display text-xs text-text-secondary">
        Pure Components helfen, unnötige Renderings zu vermeiden und die
        Performance zu steigern.
      </p>
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">React.memo</h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-neon-blue font-bold">React.memo</span> ist eine
        Higher-Order-Component, die Function Components in Pure Components
        verwandelt. Sie prüft, ob sich die Props geändert haben, und rendert nur
        dann neu.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`const MemoizedButton = React.memo(MetalButton);`}
      </pre>
      <p className="font-display text-xs text-text-secondary">
        Nutze <span className="text-neon-blue">React.memo</span> für
        Performance-Optimierung bei großen Listen oder teuren Komponenten.
      </p>
    </div>
    {/* === Props & PropTypes/TypeScript === */}
    <h2 className="text-3xl font-metal neon-glow mb-6 mt-12">
      Props &amp; PropTypes / TypeScript
    </h2>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        Was sind Props?
      </h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-neon-blue font-bold">Props</span> (Properties)
        sind die Mechanik, mit der Daten und Funktionen von einer Eltern- zu
        einer Kindkomponente weitergegeben werden. Props sind{" "}
        <span className="text-electric-purple font-bold">read-only</span> und
        machen Komponenten wiederverwendbar und flexibel.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`function MetalHeadline({ text, color }) {
  return <h1 style={{ color }}>{text}</h1>;
}

<MetalHeadline text="Bang your Head!" color="#00d4ff" />`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display mb-4">
        <li>Props werden als Objekt an die Komponente übergeben.</li>
        <li>
          Props sind unveränderlich (immutable) innerhalb der Kindkomponente.
        </li>
        <li>
          Mit Props kannst du Komponenten dynamisch und wiederverwendbar machen.
        </li>
      </ul>
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">PropTypes</h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-electric-purple font-bold">PropTypes</span> ist
        ein optionales Typprüfungs-Tool für React-Komponenten. Es hilft, Fehler
        frühzeitig zu erkennen, indem es die Typen der Props zur Laufzeit prüft.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`import PropTypes from "prop-types";

function MetalHeadline({ text }) {
  return <h1>{text}</h1>;
}

MetalHeadline.propTypes = {
  text: PropTypes.string.isRequired,
};`}
      </pre>
      <p className="font-display text-xs text-text-secondary">
        PropTypes ist besonders nützlich in JavaScript-Projekten ohne
        TypeScript.
      </p>
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        TypeScript für Props
      </h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-toxic-green font-bold">TypeScript</span> ist der
        Goldstandard für Typensicherheit in React-Projekten. Mit TypeScript
        kannst du Props und State statisch typisieren und so Fehler schon beim
        Coden verhindern.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`type MetalHeadlineProps = {
  text: string;
  color?: string;
};

const MetalHeadline: React.FC<MetalHeadlineProps> = ({ text, color }) => (
  <h1 style={{ color }}>{text}</h1>
);`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display">
        <li>TypeScript erkennt Fehler schon beim Schreiben des Codes.</li>
        <li>Props, State, Context, Events – alles kann typisiert werden.</li>
        <li>Empfohlen für alle professionellen React-Projekte!</li>
      </ul>
    </div>
    {/* === State & useState === */}
    <h2 className="text-3xl font-metal neon-glow mb-6 mt-12">
      State &amp; useState
    </h2>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        Was ist State?
      </h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-neon-blue font-bold">State</span> ist das
        dynamische Datenmodell einer Komponente. Er bestimmt, wie die UI
        aussieht und sich verhält. Änderungen am State führen zu einem erneuten
        Rendern der Komponente.
      </p>
      <ul className="list-disc ml-6 text-text-secondary font-display mb-4">
        <li>
          State ist <span className="text-electric-purple">lokal</span> für jede
          Komponente.
        </li>
        <li>
          State sollte nie direkt verändert werden, sondern immer über
          Setter-Funktionen.
        </li>
        <li>State ist der Motor für interaktive UIs!</li>
      </ul>
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">useState Hook</h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-toxic-green font-bold">useState</span> ist der
        wichtigste React-Hook. Er ermöglicht es, State in Function Components zu
        verwenden.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`import React, { useState } from "react";

function MetalCounter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display mb-4">
        <li>
          Der <span className="text-neon-blue">useState</span>-Hook gibt ein
          Array mit aktuellem Wert und Setter zurück.
        </li>
        <li>
          Jede Änderung mit{" "}
          <span className="text-electric-purple">setCount</span> triggert ein
          Re-Render.
        </li>
        <li>Du kannst beliebig viele State-Variablen pro Komponente nutzen.</li>
      </ul>
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        Best Practices
      </h3>
      <ul className="list-disc ml-6 text-text-secondary font-display mb-4">
        <li>
          State möglichst nah an der Komponente halten, die ihn benötigt (
          <span className="text-toxic-green">local state</span>).
        </li>
        <li>
          Komplexe State-Logik ggf. mit{" "}
          <span className="text-neon-blue">useReducer</span> auslagern.
        </li>
        <li>
          Nie direkt den State mutieren (z.B. <code>count++</code>), sondern
          immer Setter nutzen!
        </li>
      </ul>
    </div>
    {/* === Lifecycle & useEffect, useLayoutEffect === */}
    <h2 className="text-3xl font-metal neon-glow mb-6 mt-12">
      Lifecycle &amp; useEffect / useLayoutEffect
    </h2>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        Lifecycle in React
      </h3>
      <p className="font-display text-text-secondary mb-4">
        Jede Komponente durchläuft einen{" "}
        <span className="text-neon-blue font-bold">Lebenszyklus</span>: Mounting
        (Einfügen), Updating (Ändern), Unmounting (Entfernen). Früher wurden
        dafür Lifecycle-Methoden in Class Components genutzt – heute übernimmt
        das <span className="text-electric-purple font-bold">useEffect</span> in
        Function Components.
      </p>
      <ul className="list-disc ml-6 text-text-secondary font-display mb-4">
        <li>Mount: Komponente wird ins DOM eingefügt</li>
        <li>Update: Props oder State ändern sich</li>
        <li>Unmount: Komponente wird entfernt</li>
      </ul>
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">useEffect</h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-electric-purple font-bold">useEffect</span> ist
        der wichtigste Side-Effect-Hook. Er ersetzt die meisten
        Lifecycle-Methoden und wird nach jedem Render ausgeführt (abhängig vom
        Dependency-Array).
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`import React, { useEffect } from "react";

function MetalEffect() {
  useEffect(() => {
    // Code beim Mounten
    console.log("Komponente gemountet!");
    return () => {
      // Cleanup beim Unmount
      console.log("Komponente entfernt!");
    };
  }, []); // [] = nur beim Mount/Unmount
  return <div>Bang your Head!</div>;
}`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display mb-4">
        <li>Ohne Dependency-Array: Nach jedem Render</li>
        <li>
          Mit leeren Array <code>[]</code>: Nur beim Mount/Unmount
        </li>
        <li>Mit Abhängigkeiten: Bei Änderung der Abhängigkeiten</li>
      </ul>
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        useLayoutEffect
      </h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-toxic-green font-bold">useLayoutEffect</span>{" "}
        funktioniert wie <span className="text-neon-blue">useEffect</span>, wird
        aber synchron nach allen DOM-Änderungen ausgeführt. Nutze ihn nur, wenn
        du DOM-Messungen oder Layout-Änderungen direkt nach dem Render brauchst.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`import React, { useLayoutEffect, useRef } from "react";

function MetalLayout() {
  const ref = useRef();
  useLayoutEffect(() => {
    ref.current.style.color = "#00d4ff";
  }, []);
  return <h2 ref={ref}>Neon Metal!</h2>;
}`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display">
        <li>
          Nutze <span className="text-neon-blue">useLayoutEffect</span> nur,
          wenn <span className="text-electric-purple">useEffect</span> nicht
          reicht.
        </li>
        <li>Kann zu Performance-Einbußen führen, wenn falsch eingesetzt.</li>
      </ul>
    </div>
    {/* === Context API & useContext === */}
    <h2 className="text-3xl font-metal neon-glow mb-6 mt-12">
      Context API &amp; useContext
    </h2>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        Was ist die Context API?
      </h3>
      <p className="font-display text-text-secondary mb-4">
        Die <span className="text-neon-blue font-bold">Context API</span>{" "}
        ermöglicht es, globale Daten (z.B. Theme, User, Sprache) in der gesamten
        Komponentenhierarchie bereitzustellen, ohne Props durch viele Ebenen zu
        reichen (<span className="text-electric-purple">Prop Drilling</span>).
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`import React, { createContext, useContext } from "react";

// 1. Context erstellen
const MetalContext = createContext("Bang your Head!");

// 2. Provider-Komponente
function MetalProvider({ children }) {
  return (
    <MetalContext.Provider value="Neon Metal!">
      {children}
    </MetalContext.Provider>
  );
}

// 3. useContext Hook in Kindkomponente
function MetalChild() {
  const value = useContext(MetalContext);
  return <h2>{value}</h2>;
}`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display mb-4">
        <li>
          Context ist ideal für globale Settings, User, Theme, Sprache etc.
        </li>
        <li>
          Vermeide Context für häufig ändernde Daten (Performance) – nutze ihn
          für "statische" globale Werte.
        </li>
        <li>
          Mit <span className="text-neon-blue">useContext</span> kannst du
          Context überall konsumieren.
        </li>
      </ul>
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        Best Practices
      </h3>
      <ul className="list-disc ml-6 text-text-secondary font-display mb-4">
        <li>
          Context möglichst modular und spezifisch halten (z.B. ThemeContext,
          UserContext).
        </li>
        <li>
          Provider möglichst weit oben in der Komponentenhierarchie platzieren.
        </li>
        <li>
          Für komplexe globale State-Logik ggf. externe
          State-Management-Lösungen nutzen.
        </li>
      </ul>
    </div>
    {/* === Custom Hooks === */}
    <h2 className="text-3xl font-metal neon-glow mb-6 mt-12">Custom Hooks</h2>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        Was sind Custom Hooks?
      </h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-neon-blue font-bold">Custom Hooks</span> sind
        eigene, wiederverwendbare Funktionen, die React-Hooks nutzen. Sie
        kapseln Logik, die in mehreren Komponenten gebraucht wird – z.B. für
        Formulare, Animationen oder API-Calls.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`// useMetalTheme.js
import { useState, useEffect } from "react";

function useMetalTheme() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return [theme, setTheme];
}

// In einer Komponente:
const [theme, setTheme] = useMetalTheme();`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display mb-4">
        <li>
          Custom Hooks beginnen immer mit{" "}
          <span className="text-electric-purple">use</span> (z.B.{" "}
          <code>useForm</code>, <code>useMetalTheme</code>).
        </li>
        <li>
          Sie können beliebige andere Hooks nutzen (z.B.{" "}
          <span className="text-neon-blue">useState</span>,{" "}
          <span className="text-neon-blue">useEffect</span>).
        </li>
        <li>
          Custom Hooks sind pure JavaScript/TypeScript-Funktionen – keine
          Komponenten!
        </li>
      </ul>
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        Best Practices
      </h3>
      <ul className="list-disc ml-6 text-text-secondary font-display mb-4">
        <li>
          Custom Hooks für wiederkehrende Logik nutzen (z.B. Form Handling, API
          Calls, Animationen).
        </li>
        <li>Hooks modular und testbar halten.</li>
        <li>
          Keine Hooks in normalen Funktionen oder Bedingungen aufrufen – nur auf
          Top-Level!
        </li>
      </ul>
    </div>
    {/* === useReducer, useCallback, useMemo === */}
    <h2 className="text-3xl font-metal neon-glow mb-6 mt-12">
      useReducer, useCallback &amp; useMemo
    </h2>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">useReducer</h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-neon-blue font-bold">useReducer</span> ist ein
        Hook für komplexe State-Logik, ähnlich wie Redux. Er eignet sich für
        Komponenten mit vielen State-Übergängen oder verschachtelter Logik.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function MetalCounter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <button onClick={() => dispatch({ type: "increment" })}>
      Count: {state.count}
    </button>
  );
}`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display mb-4">
        <li>Ideal für komplexe oder mehrfach abhängige State-Logik.</li>
        <li>Ähnlich wie Redux, aber lokal für eine Komponente.</li>
      </ul>
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">useCallback</h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-electric-purple font-bold">useCallback</span> gibt
        eine <span className="text-neon-blue">memoisierte</span>{" "}
        Callback-Funktion zurück. Das ist wichtig, wenn du Funktionen an
        Child-Komponenten weitergibst und unnötige Re-Renders vermeiden willst.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`import React, { useState, useCallback } from "react";

function MetalButton({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

function Parent() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => setCount(count + 1), [count]);
  return <MetalButton onClick={handleClick}>Count: {count}</MetalButton>;
}`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display mb-4">
        <li>
          Verhindert, dass Funktionen bei jedem Render neu erzeugt werden.
        </li>
        <li>
          Hilft bei Performance-Optimierung, besonders bei großen
          Komponentenbäumen.
        </li>
      </ul>
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">useMemo</h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-toxic-green font-bold">useMemo</span> speichert
        das Ergebnis einer Berechnung und gibt es nur dann neu aus, wenn sich
        die Abhängigkeiten ändern. Ideal für teure Berechnungen oder große
        Listen.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`import React, { useState, useMemo } from "react";

function MetalList({ items }) {
  const sorted = useMemo(() => items.slice().sort(), [items]);
  return <ul>{sorted.map((i) => <li key={i}>{i}</li>)}</ul>;
}`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display">
        <li>Verhindert unnötige Neuberechnungen bei jedem Render.</li>
        <li>
          Nutze <span className="text-neon-blue">useMemo</span> für Performance
          bei teuren Operationen.
        </li>
      </ul>
    </div>
    {/* === Event Handling === */}
    <h2 className="text-3xl font-metal neon-glow mb-6 mt-12">Event Handling</h2>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        Events in React
      </h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-neon-blue font-bold">Event Handling</span> in
        React funktioniert ähnlich wie im DOM, aber mit kleinen Unterschieden.
        Events werden als CamelCase geschrieben (z.B. <code>onClick</code> statt{" "}
        <code>onclick</code>) und du übergibst eine Funktion, kein String.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`function MetalButton() {
  function handleClick() {
    alert("Bang your Head!");
  }
  return <button onClick={handleClick}>Click me!</button>;
}`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display mb-4">
        <li>
          Alle Standard-Events wie{" "}
          <span className="text-electric-purple">onClick</span>,{" "}
          <span className="text-electric-purple">onChange</span>,{" "}
          <span className="text-electric-purple">onSubmit</span> usw. sind
          verfügbar.
        </li>
        <li>
          Event-Objekte werden als Argument übergeben (<code>event</code>).
        </li>
        <li>
          Kein <code>return false</code> – nutze{" "}
          <code>event.preventDefault()</code>!
        </li>
      </ul>
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        Event-Objekt &amp; preventDefault
      </h3>
      <p className="font-display text-text-secondary mb-4">
        Das Event-Objekt enthält alle Infos zum Event. Mit{" "}
        <span className="text-neon-blue">event.preventDefault()</span>{" "}
        verhinderst du das Standardverhalten (z.B. bei Formularen).
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`function MetalForm() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Form submitted!");
  }
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display">
        <li>
          Events sind synthetische Events (SyntheticEvent) – sie funktionieren
          in allen Browsern gleich.
        </li>
        <li>
          Du kannst eigene Event-Handler als Props an Kindkomponenten
          weitergeben.
        </li>
      </ul>
    </div>
    {/* === Forms & Controlled Components === */}
    <h2 className="text-3xl font-metal neon-glow mb-6 mt-12">
      Forms &amp; Controlled Components
    </h2>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        Controlled Components
      </h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-neon-blue font-bold">Controlled Components</span>{" "}
        sind Formularelemente, deren Wert von React-State gesteuert wird. Das
        macht Formulare vorhersehbar und einfach zu validieren.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`import React, { useState } from "react";

function MetalForm() {
  const [value, setValue] = useState("");
  function handleChange(e) {
    setValue(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    alert("Submitted: " + value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display mb-4">
        <li>
          Der Wert des Inputs wird immer vom State bestimmt (
          <span className="text-electric-purple">value</span>).
        </li>
        <li>
          Jede Änderung wird mit{" "}
          <span className="text-neon-blue">onChange</span> in den State
          geschrieben.
        </li>
        <li>Formulare sind so einfach zu validieren und zu kontrollieren.</li>
      </ul>
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        Uncontrolled Components
      </h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-electric-purple font-bold">
          Uncontrolled Components
        </span>{" "}
        verwalten ihren Wert selbst im DOM. Sie werden mit{" "}
        <span className="text-neon-blue">defaultValue</span> und{" "}
        <span className="text-neon-blue">ref</span> gesteuert. Nutze sie nur,
        wenn du keine Kontrolle über den Wert brauchst.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`import React, { useRef } from "react";

function MetalUncontrolledForm() {
  const inputRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    alert("Submitted: " + inputRef.current.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input defaultValue="Metal!" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display">
        <li>
          Uncontrolled Components sind selten nötig – Controlled ist Standard!
        </li>
        <li>
          Nutze <span className="text-neon-blue">ref</span> für direkten
          DOM-Zugriff.
        </li>
      </ul>
    </div>
    {/* === Listen & Keys === */}
    <h2 className="text-3xl font-metal neon-glow mb-6 mt-12">
      Listen &amp; Keys
    </h2>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        Listen rendern
      </h3>
      <p className="font-display text-text-secondary mb-4">
        In React kannst du Arrays von Daten einfach mit{" "}
        <span className="text-neon-blue">.map()</span> in JSX-Elemente
        umwandeln. Das ist ideal für dynamische Listen, Tabellen oder Menüs.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`const bands = ["Metallica", "Iron Maiden", "Judas Priest"];
return (
  <ul>
    {bands.map((band) => (
      <li key={band}>{band}</li>
    ))}
  </ul>
);`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display mb-4">
        <li>
          Nutze <span className="text-electric-purple">.map()</span> für
          dynamische Listen.
        </li>
        <li>
          Jedes Element braucht einen eindeutigen{" "}
          <span className="text-neon-blue">key</span>!
        </li>
      </ul>
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">Keys in React</h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-neon-blue font-bold">Keys</span> helfen React,
        Elemente effizient zu aktualisieren. Sie sollten eindeutig und stabil
        sein (z.B. IDs, keine Indizes bei sortierbaren Listen).
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`// Schlecht: Index als Key
{items.map((item, i) => <li key={i}>{item}</li>)}
// Besser: Eindeutige ID als Key
{items.map((item) => <li key={item.id}>{item.name}</li>)}`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display">
        <li>Keys sind nur für React, nicht für das DOM sichtbar.</li>
        <li>Falsche Keys können zu seltsamen UI-Bugs führen!</li>
      </ul>
    </div>
    {/* === Conditional Rendering === */}
    <h2 className="text-3xl font-metal neon-glow mb-6 mt-12">
      Conditional Rendering
    </h2>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        Bedingtes Rendern in React
      </h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-neon-blue font-bold">Conditional Rendering</span>{" "}
        bedeutet, dass du UI-Elemente abhängig von Bedingungen anzeigen oder
        ausblenden kannst. Das funktioniert mit{" "}
        <span className="text-electric-purple">if</span>,{" "}
        <span className="text-electric-purple">? :</span> (Ternary) oder{" "}
        <span className="text-electric-purple">&&</span>.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`function MetalGreeting({ isMetalhead }) {
  if (isMetalhead) {
    return <h2>Welcome, Metalhead! 🤘</h2>;
  }
  return <h2>Welcome, Guest!</h2>;
}

// Ternary Operator
{isMetalhead ? <span>🤘</span> : <span>👋</span>}

// && Operator
{isLoggedIn && <button>Logout</button>}`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display">
        <li>Du kannst beliebige Bedingungen im JSX nutzen.</li>
        <li>Komplexe Bedingungen ggf. in Hilfsfunktionen auslagern.</li>
        <li>
          Kein <span className="text-electric-purple">else</span> im JSX – nutze
          Ternary oder Hilfsfunktionen.
        </li>
      </ul>
    </div>
    {/* === Styling (Tailwind, SCSS, CSS-in-JS) === */}
    <h2 className="text-3xl font-metal neon-glow mb-6 mt-12">
      Styling: Tailwind, SCSS &amp; CSS-in-JS
    </h2>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">Tailwind CSS</h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-neon-blue font-bold">Tailwind CSS</span> ist ein
        Utility-First-Framework, das Styling direkt im JSX über Klassen
        ermöglicht. Perfekt für schnelle, konsistente und responsive Designs.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`<button className="bg-neon-blue text-metal-dark px-4 py-2 rounded shadow-neon hover:bg-electric-purple">
  Metal Button
</button>`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display mb-4">
        <li>Alle Styles als Klassen im JSX</li>
        <li>Custom Theme für Metal-Design möglich</li>
        <li>Extrem flexibel und performant</li>
      </ul>
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">SCSS (Sass)</h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-electric-purple font-bold">SCSS</span> ist eine
        CSS-Präprozessor-Sprache mit Variablen, Mixins und verschachtelten
        Regeln. Ideal für komplexe Animationen und globale Styles.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`// styles/_metal.scss
$neon-blue: #00d4ff;
.metal-glow {
  color: $neon-blue;
  text-shadow: 0 0 8px $neon-blue;
}`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display mb-4">
        <li>Globale Styles und Variablen</li>
        <li>Mixins für wiederverwendbare Effekte</li>
        <li>Perfekt für Animationen und komplexe Designs</li>
      </ul>
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">CSS-in-JS</h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-toxic-green font-bold">CSS-in-JS</span> (z.B.
        styled-components, Emotion) erlaubt es, Styles direkt in JavaScript zu
        definieren. Ideal für dynamische Styles und Theme-Management.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`import styled from "styled-components";

const MetalButton = styled.button\`
  background: #00d4ff;
  color: #0f0f0f;
  border-radius: 0.5rem;
  box-shadow: 0 0 8px #00d4ff;
\`;
`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display">
        <li>Styles sind an Komponenten gebunden</li>
        <li>Theme-Provider für dynamische Themes</li>
        <li>Ideal für große, modulare Projekte</li>
      </ul>
    </div>
    {/* === Error Boundaries === */}
    <h2 className="text-3xl font-metal neon-glow mb-6 mt-12">
      Error Boundaries
    </h2>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        Was sind Error Boundaries?
      </h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-neon-blue font-bold">Error Boundaries</span> sind
        spezielle Komponenten, die JavaScript-Fehler in ihren Kindkomponenten
        abfangen und eine Fallback-UI anzeigen. Sie verhindern, dass ein Fehler
        die gesamte App zum Absturz bringt.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`import React from "react";

class MetalErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // Logging, Monitoring etc.
    console.error(error, info);
  }
  render() {
    if (this.state.hasError) {
      return <h2 className="text-toxic-green">Etwas ist schiefgelaufen 🤘</h2>;
    }
    return this.props.children;
  }
}

// Anwendung:
<MetalErrorBoundary>
  <MetalComponent />
</MetalErrorBoundary>`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display">
        <li>
          Error Boundaries müssen als Class Component implementiert werden.
        </li>
        <li>
          Sie fangen Fehler in Render, Lifecycle und Konstruktoren von
          Child-Komponenten ab.
        </li>
        <li>Hooks können (noch) keine Error Boundaries bauen.</li>
      </ul>
    </div>
    {/* === Code Splitting & Lazy Loading === */}
    <h2 className="text-3xl font-metal neon-glow mb-6 mt-12">
      Code Splitting &amp; Lazy Loading
    </h2>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        Was ist Code Splitting?
      </h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-neon-blue font-bold">Code Splitting</span> teilt
        deine App in kleinere Bundles auf, die nur bei Bedarf geladen werden.
        Das verbessert die Ladezeit und Performance, besonders bei großen Apps.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`// Ohne Code Splitting
import MetalDashboard from "./MetalDashboard";

// Mit Code Splitting (React.lazy)
const MetalDashboard = React.lazy(() => import("./MetalDashboard"));`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display mb-4">
        <li>Nur benötigte Komponenten werden geladen (on demand).</li>
        <li>Reduziert initiale Bundle-Größe und Ladezeit.</li>
      </ul>
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        Lazy Loading mit React.lazy &amp; Suspense
      </h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-electric-purple font-bold">React.lazy</span> und{" "}
        <span className="text-neon-blue">Suspense</span> ermöglichen das
        asynchrone Laden von Komponenten. Während des Ladens kann ein Fallback
        angezeigt werden.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`import React, { Suspense } from "react";
const MetalDashboard = React.lazy(() => import("./MetalDashboard"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MetalDashboard />
    </Suspense>
  );
}`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display">
        <li>Fallback kann alles sein: Spinner, Skeleton, Text etc.</li>
        <li>Suspense funktioniert auch mit Data Fetching (React 18+).</li>
      </ul>
    </div>
    {/* === React Router (SPA Navigation) === */}
    <h2 className="text-3xl font-metal neon-glow mb-6 mt-12">
      React Router (SPA Navigation)
    </h2>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        Was ist React Router?
      </h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-neon-blue font-bold">React Router</span> ist die
        Standard-Lösung für Navigation und Routing in Single Page Applications
        (SPA) mit React. Er ermöglicht Seitenwechsel ohne komplettes Neuladen
        der Seite.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display mb-4">
        <li>Navigation ohne Seiten-Reload (echte SPA Experience)</li>
        <li>
          Unterstützt Nested Routes, Redirects, Params, Loader, Guards u.v.m.
        </li>
        <li>
          Links werden mit <span className="text-electric-purple">Link</span>{" "}
          statt <span className="text-neon-blue">a</span> gebaut.
        </li>
      </ul>
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        Best Practices
      </h3>
      <ul className="list-disc ml-6 text-text-secondary font-display mb-4">
        <li>
          Immer <span className="text-neon-blue">BrowserRouter</span> als
          Root-Element nutzen.
        </li>
        <li>
          Für dynamische Seiten{" "}
          <span className="text-electric-purple">useParams</span> verwenden.
        </li>
        <li>
          Mit <span className="text-neon-blue">useNavigate</span> programmatisch
          navigieren.
        </li>
        <li>
          404-Seiten mit <span className="text-electric-purple">path="*"</span>{" "}
          abfangen.
        </li>
      </ul>
    </div>
    {/* === Portals & Modals === */}
    <h2 className="text-3xl font-metal neon-glow mb-6 mt-12">
      Portals &amp; Modals
    </h2>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        Was sind Portals?
      </h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-neon-blue font-bold">Portals</span> ermöglichen
        es, Komponenten außerhalb der normalen DOM-Hierarchie zu rendern. Das
        ist besonders nützlich für Modals, Tooltips oder Overlays, die über
        allem liegen sollen.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`import React from "react";
import { createPortal } from "react-dom";

function MetalModal({ children }) {
  return createPortal(
    <div className="fixed inset-0 bg-metal-dark bg-opacity-80 flex items-center justify-center z-50">
      <div className="metal-card p-8 neon-glow">{children}</div>
    </div>,
    document.getElementById("modal-root")
  );
}

// In index.html:
// <div id="modal-root"></div>`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display mb-4">
        <li>Portals lösen Z-Index- und Overflow-Probleme bei Modals.</li>
        <li>Modal-Root muss im HTML vorhanden sein.</li>
      </ul>
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">Modal-Logik</h3>
      <p className="font-display text-text-secondary mb-4">
        Modals werden meist mit State gesteuert. Ein Beispiel für ein
        Metal-Modal mit Open/Close-Logik:
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`import React, { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      {open && (
        <MetalModal>
          <h2>Bang your Head!</h2>
          <button onClick={() => setOpen(false)}>Close</button>
        </MetalModal>
      )}
    </>
  );
}`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display">
        <li>
          Modals immer mit Escape/Overlay-Click schließbar machen
          (Barrierefreiheit!)
        </li>
        <li>
          Portals sind auch für Tooltips, Dropdowns, Toasts etc. nützlich.
        </li>
      </ul>
    </div>
    {/* === Refs & useRef, Forwarding Refs === */}
    <h2 className="text-3xl font-metal neon-glow mb-6 mt-12">
      Refs &amp; useRef, Forwarding Refs
    </h2>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        Was sind Refs?
      </h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-neon-blue font-bold">Refs</span> sind Referenzen
        auf DOM-Elemente oder Werte, die zwischen Renderzyklen erhalten bleiben.
        Sie werden mit <span className="text-electric-purple">useRef</span>{" "}
        erzeugt und sind ideal für Fokus, Animationen oder das Auslesen von
        Werten.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`import React, { useRef } from "react";

function MetalInput() {
  const inputRef = useRef();
  function focusInput() {
    inputRef.current.focus();
  }
  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </>
  );
}`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display mb-4">
        <li>
          Refs sind immer <span className="text-neon-blue">.current</span>.
        </li>
        <li>Sie triggern kein Re-Render, wenn sie sich ändern.</li>
      </ul>
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        Forwarding Refs
      </h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-electric-purple font-bold">Forwarding Refs</span>{" "}
        erlaubt es, Refs durch Komponenten hindurch an tieferliegende
        DOM-Elemente weiterzugeben. Das ist wichtig für wiederverwendbare
        UI-Bausteine wie Input-Komponenten.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`import React, { forwardRef } from "react";

const MetalInput = forwardRef((props, ref) => (
  <input ref={ref} {...props} />
));

// Verwendung:
const inputRef = useRef();
<MetalInput ref={inputRef} />`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display">
        <li>Unverzichtbar für Bibliotheken und komplexe UI-Komponenten.</li>
        <li>
          Immer <span className="text-neon-blue">forwardRef</span> nutzen, wenn
          Ref-Weitergabe nötig ist.
        </li>
      </ul>
    </div>
    {/* === Animations (Framer Motion, CSS) === */}
    <h2 className="text-3xl font-metal neon-glow mb-6 mt-12">
      Animationen: Framer Motion &amp; CSS
    </h2>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">Framer Motion</h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-neon-blue font-bold">Framer Motion</span> ist eine
        leistungsstarke Animationsbibliothek für React. Sie ermöglicht komplexe,
        performante Animationen mit einfacher Syntax und vielen Features wie
        Gesten, Drag, Layout-Animationen und mehr.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`import { motion } from "framer-motion";

function MetalBox() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-40 h-40 bg-neon-blue shadow-neon rounded-lg"
    >
      Metal!
    </motion.div>
  );
}`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display mb-4">
        <li>Ideal für komplexe UI-Animationen, Transitions, Gesten.</li>
        <li>Einfach zu integrieren, sehr performant.</li>
        <li>Viele vorgefertigte Animationen und Controls.</li>
      </ul>
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        CSS-Animationen &amp; SCSS
      </h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-electric-purple font-bold">CSS-Animationen</span>{" "}
        und <span className="text-neon-blue">SCSS</span> sind ideal für einfache
        Transitions, Hover-Effekte und Keyframe-Animationen. Sie sind schnell,
        nativ und brauchen keine zusätzliche Bibliothek.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`// SCSS Beispiel
@keyframes neon-glow {
  0%, 100% { text-shadow: 0 0 8px #00d4ff; }
  50% { text-shadow: 0 0 24px #8b5cf6; }
}

.metal-glow {
  animation: neon-glow 1.5s infinite alternate;
}`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display">
        <li>Perfekt für Hover, Fokus, einfache Bewegungen.</li>
        <li>Mit SCSS Mixins und Variablen kombinierbar.</li>
        <li>Keine Abhängigkeiten, volle Kontrolle.</li>
      </ul>
    </div>
    {/* === Testing (Jest, React Testing Library) === */}
    <h2 className="text-3xl font-metal neon-glow mb-6 mt-12">
      Testing: Jest &amp; React Testing Library
    </h2>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">Warum testen?</h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-neon-blue font-bold">Testing</span> stellt sicher,
        dass deine Komponenten wie erwartet funktionieren und schützt vor Bugs
        bei Refactoring oder Erweiterungen. In React sind{" "}
        <span className="text-electric-purple">Jest</span> und{" "}
        <span className="text-toxic-green">React Testing Library</span> die
        Standard-Tools.
      </p>
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        Jest: Test Runner
      </h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-electric-purple font-bold">Jest</span> ist ein
        mächtiger Test-Runner für JavaScript/TypeScript. Er bietet
        Snapshot-Tests, Mocking und eine schnelle Ausführung.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`// MetalButton.test.jsx
import { render, screen } from "@testing-library/react";
import MetalButton from "./MetalButton";

test("zeigt Button-Text an", () => {
  render(<MetalButton>Bang!</MetalButton>);
  expect(screen.getByText("Bang!")).toBeInTheDocument();
);`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display mb-4">
        <li>
          Tests laufen mit <span className="text-neon-blue">npm test</span> oder{" "}
          <span className="text-neon-blue">yarn test</span>.
        </li>
        <li>Snapshot-Tests für UI-Regressionen.</li>
      </ul>
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        React Testing Library
      </h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-toxic-green font-bold">
          React Testing Library
        </span>{" "}
        fokussiert sich auf das Testen aus Nutzersicht. Sie bietet APIs zum
        Rendern, Interagieren und Abfragen von Komponenten wie ein echter User.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`import { render, fireEvent } from "@testing-library/react";
import MetalCounter from "./MetalCounter";

test("erhöht den Counter", () => {
  const { getByText } = render(<MetalCounter />);
  const button = getByText(/count/i);
  fireEvent.click(button);
  expect(button).toHaveTextContent("Count: 1");
});`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display">
        <li>Tests sind robust gegen UI-Änderungen.</li>
        <li>Best Practice: Teste Verhalten, nicht Implementierung!</li>
      </ul>
    </div>
    {/* === Accessibility (a11y) === */}
    <h2 className="text-3xl font-metal neon-glow mb-6 mt-12">
      Accessibility (a11y)
    </h2>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        Warum Accessibility?
      </h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-neon-blue font-bold">Accessibility (a11y)</span>{" "}
        sorgt dafür, dass deine App für alle Menschen nutzbar ist – auch für
        Menschen mit Behinderungen. Barrierefreiheit ist nicht nur Pflicht,
        sondern auch ein Qualitätsmerkmal moderner Webanwendungen.
      </p>
      <ul className="list-disc ml-6 text-text-secondary font-display mb-4">
        <li>
          Screenreader-Unterstützung (z.B. <code>aria-*</code> Attribute)
        </li>
        <li>Gute Tastaturbedienbarkeit (Tab, Enter, Escape)</li>
        <li>Farbkontraste und Schriftgrößen beachten</li>
        <li>
          Semantische HTML-Elemente nutzen (<code>&lt;button&gt;</code>,{" "}
          <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code> ...)
        </li>
      </ul>
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">a11y in React</h3>
      <p className="font-display text-text-secondary mb-4">
        React unterstützt Accessibility von Haus aus. Mit{" "}
        <span className="text-electric-purple">aria-*</span> Attributen,
        semantischem HTML und Fokus-Management kannst du barrierefreie
        Komponenten bauen.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`function MetalButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Bang your Head!"
      className="metal-button"
    >
      🤘
    </button>
  );
}`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display">
        <li>
          Immer <span className="text-neon-blue">aria-label</span> für Icons und
          nicht-textuelle Buttons setzen.
        </li>
        <li>Fokus-Styles nicht entfernen – besser customisieren!</li>
        <li>
          Mit Tools wie <span className="text-electric-purple">axe</span> oder{" "}
          <span className="text-neon-blue">eslint-plugin-jsx-a11y</span> testen.
        </li>
      </ul>
    </div>
    {/* === Best Practices & Patterns (Compound, Render Props, HOC) === */}
    <h2 className="text-3xl font-metal neon-glow mb-6 mt-12">
      Best Practices &amp; Patterns
    </h2>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        Compound Components Pattern
      </h3>
      <p className="font-display text-text-secondary mb-4">
        Das{" "}
        <span className="text-neon-blue font-bold">
          Compound Components Pattern
        </span>{" "}
        ermöglicht es, eng zusammengehörende Komponenten als Einheit zu
        verwenden. Die Kommunikation erfolgt über React Context.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`function MetalTabs({ children }) {
  const [active, setActive] = React.useState(0);
  return (
    <div>
      {React.Children.map(children, (child, i) =>
        React.cloneElement(child, { active, setActive, index: i })
      )}
    </div>
  );
}

function MetalTab({ active, setActive, index, children }) {
  return (
    <button
      className={active === index ? "neon-glow" : ""}
      onClick={() => setActive(index)}
    >
      {children}
    </button>
  );
}`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display mb-4">
        <li>Ideal für Tabs, Accordions, komplexe UI-Bausteine</li>
        <li>Kommunikation über Context oder Props</li>
      </ul>
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        Render Props Pattern
      </h3>
      <p className="font-display text-text-secondary mb-4">
        Das{" "}
        <span className="text-electric-purple font-bold">
          Render Props Pattern
        </span>{" "}
        erlaubt es, Komponenten Logik zu übergeben, die als Funktion (Prop)
        gerendert wird. So kann Logik wiederverwendet und flexibel gestaltet
        werden.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`function MetalMouse({ render }) {
  const [pos, setPos] = React.useState({ x: 0, y: 0 });
  return (
    <div onMouseMove={e => setPos({ x: e.clientX, y: e.clientY })}>
      {render(pos)}
    </div>
  );
}

// Verwendung:
<MetalMouse render={({ x, y }) => <span>{x}, {y}</span>} />`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display mb-4">
        <li>Logik und Darstellung werden entkoppelt</li>
        <li>Flexibel und mächtig, aber heute oft durch Hooks ersetzt</li>
      </ul>
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        Higher-Order Components (HOC)
      </h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-toxic-green font-bold">HOCs</span> sind
        Funktionen, die eine Komponente nehmen und eine neue Komponente mit
        zusätzlicher Funktionalität zurückgeben. Sie werden oft für
        Cross-Cutting-Concerns wie Auth, Logging oder Theming genutzt.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`function withMetalTheme(Component) {
  return function ThemedComponent(props) {
    return <Component {...props} theme="metal" />;
  };
}

// Verwendung:
const MetalButtonWithTheme = withMetalTheme(MetalButton);`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display">
        <li>HOCs sind mächtig, aber können zu "Wrapper Hell" führen</li>
        <li>
          Hooks sind heute oft die bessere Wahl für Logik-Wiederverwendung
        </li>
      </ul>
    </div>
    {/* === Performance Optimierung === */}
    <h2 className="text-3xl font-metal neon-glow mb-6 mt-12">
      Performance Optimierung
    </h2>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        Warum Performance?
      </h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-neon-blue font-bold">Performance</span> ist
        entscheidend für User Experience und SEO. React bietet viele Tools und
        Patterns, um Apps schnell und reaktiv zu halten.
      </p>
      <ul className="list-disc ml-6 text-text-secondary font-display mb-4">
        <li>
          Vermeide unnötige Re-Renders (React.memo, PureComponent, useMemo,
          useCallback)
        </li>
        <li>Nutze Code Splitting & Lazy Loading für große Apps</li>
        <li>
          Große Listen mit{" "}
          <span className="text-electric-purple">react-window</span> oder{" "}
          <span className="text-electric-purple">react-virtualized</span>{" "}
          virtualisieren
        </li>
        <li>Images optimieren (Lazy Loading, WebP, Responsive)</li>
        <li>Immer auf Netzwerk- und Bundle-Größe achten</li>
      </ul>
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        React-Tools &amp; Patterns
      </h3>
      <ul className="list-disc ml-6 text-text-secondary font-display mb-4">
        <li>
          <span className="text-neon-blue">React.memo</span> für Pure Function
          Components
        </li>
        <li>
          <span className="text-electric-purple">useMemo</span> und{" "}
          <span className="text-electric-purple">useCallback</span> für teure
          Berechnungen und Callback-Optimierung
        </li>
        <li>
          <span className="text-neon-blue">Suspense</span> und{" "}
          <span className="text-electric-purple">React.lazy</span> für
          asynchrones Laden
        </li>
        <li>
          Immer <span className="text-toxic-green">Keys</span> bei Listen setzen
        </li>
        <li>
          Mit <span className="text-electric-purple">Profiler</span> und{" "}
          <span className="text-neon-blue">DevTools</span> Engpässe finden
        </li>
      </ul>
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        Beispiel: Virtualisierung großer Listen
      </h3>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`import { FixedSizeList as List } from "react-window";

function MetalList({ items }) {
  return (
    <List height={400} itemCount={items.length} itemSize={35} width={300}>
      {({ index, style }) => <div style={style}>{items[index]}</div>}
    </List>
  );
}`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display">
        <li>Nur sichtbare Listenelemente werden gerendert</li>
        <li>Enorme Performance-Gewinne bei großen Datenmengen</li>
      </ul>
    </div>
    {/* === Server Components & SSR/SSG (Next.js) === */}
    <h2 className="text-3xl font-metal neon-glow mb-6 mt-12">
      Server Components &amp; SSR/SSG (Next.js)
    </h2>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        Was sind Server Components?
      </h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-neon-blue font-bold">Server Components</span> sind
        ein neues React-Feature, das es ermöglicht, Teile der UI komplett auf
        dem Server zu rendern. Sie haben keinen Client-JavaScript-Overhead und
        können direkt auf Server-Ressourcen zugreifen.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`// Beispiel: Server Component (Next.js)
// app/components/MetalServerComponent.jsx
export default function MetalServerComponent() {
  // Server-Only Code (z.B. DB-Query)
  return <div>Server-Side Metal 🤘</div>;
}`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display mb-4">
        <li>Kein JavaScript im Client für Server Components</li>
        <li>Direkter Zugriff auf Datenbanken, Filesystem, etc.</li>
        <li>Mix aus Server- und Client-Komponenten möglich</li>
      </ul>
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        SSR &amp; SSG mit Next.js
      </h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-electric-purple font-bold">SSR</span> (Server Side
        Rendering) und <span className="text-toxic-green font-bold">SSG</span>{" "}
        (Static Site Generation) sind Next.js-Features für schnelle,
        SEO-freundliche React-Apps.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`// SSR Beispiel (Next.js)
export async function getServerSideProps() {
  return { props: { metal: "Bang your Head!" } };
}

// SSG Beispiel (Next.js)
export async function getStaticProps() {
  return { props: { metal: "Static Metal!" } };
}`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display">
        <li>SSR: Seite wird bei jedem Request auf dem Server gerendert</li>
        <li>
          SSG: Seite wird beim Build generiert und als statische Datei
          ausgeliefert
        </li>
        <li>Beides sorgt für schnelle Ladezeiten und Top-SEO</li>
      </ul>
    </div>
    {/* === State Management (Redux, Zustand, Jotai, Context) === */}
    <h2 className="text-3xl font-metal neon-glow mb-6 mt-12">
      State Management: Redux, Zustand, Jotai, Context
    </h2>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        Warum State Management?
      </h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-neon-blue font-bold">State Management</span> wird
        wichtig, wenn viele Komponenten auf gemeinsame Daten zugreifen oder
        diese verändern müssen. Für kleine Apps reicht oft{" "}
        <span className="text-electric-purple">useState</span> und{" "}
        <span className="text-neon-blue">Context</span>, für große Apps gibt es
        spezialisierte Libraries.
      </p>
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">Redux</h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-electric-purple font-bold">Redux</span> ist der
        Klassiker für globales State Management. Es nutzt einen zentralen Store,
        Actions und Reducer. Mit{" "}
        <span className="text-neon-blue">Redux Toolkit</span> ist die API heute
        viel einfacher und TypeScript-freundlich.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`import { configureStore, createSlice } from "@reduxjs/toolkit";

const metalSlice = createSlice({
  name: "metal",
  initialState: { riff: "" },
  reducers: {
    setRiff: (state, action) => { state.riff = action.payload; },
  },
});

const store = configureStore({ reducer: { metal: metalSlice.reducer } });
// In Komponenten: useSelector, useDispatch`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display mb-4">
        <li>Zentraler Store für die ganze App</li>
        <li>Predictable State, DevTools, Middleware</li>
        <li>Empfohlen für große, komplexe Apps</li>
      </ul>
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">Zustand</h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-toxic-green font-bold">Zustand</span> ist ein
        modernes, minimalistisches State-Management für React. Es ist einfach,
        schnell und braucht kaum Boilerplate.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`import { create } from "zustand";

const useMetalStore = create((set) => ({
  riff: "",
  setRiff: (riff) => set({ riff }),
}));

// In Komponenten: const { riff, setRiff } = useMetalStore();`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display mb-4">
        <li>Extrem einfach, keine Actions/Reducer nötig</li>
        <li>Ideal für kleine bis mittlere Apps</li>
        <li>Hooks-basiert, sehr performant</li>
      </ul>
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">Jotai</h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-neon-blue font-bold">Jotai</span> ist ein
        atom-basiertes State-Management für React. Jeder State ist ein Atom, das
        unabhängig genutzt und kombiniert werden kann.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`import { atom, useAtom } from "jotai";

const riffAtom = atom("Metal!");

function MetalComponent() {
  const [riff, setRiff] = useAtom(riffAtom);
  return <input value={riff} onChange={e => setRiff(e.target.value)} />;
}`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display mb-4">
        <li>Atoms sind einzeln oder kombiniert nutzbar</li>
        <li>Sehr flexibel, wenig Boilerplate</li>
        <li>Ideal für mittlere bis große Apps</li>
      </ul>
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">Context API</h3>
      <p className="font-display text-text-secondary mb-4">
        Die <span className="text-neon-blue font-bold">Context API</span> ist
        für kleine bis mittlere Apps geeignet, wenn nur wenige globale States
        benötigt werden. Sie ist einfach, aber bei häufigen Updates oder vielen
        Contexts kann die Performance leiden.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`import React, { createContext, useContext, useState } from "react";

const MetalContext = createContext();

function MetalProvider({ children }) {
  const [riff, setRiff] = useState("");
  return (
    <MetalContext.Provider value={{ riff, setRiff }}>
      {children}
    </MetalContext.Provider>
  );
}

function MetalComponent() {
  const { riff, setRiff } = useContext(MetalContext);
  return <input value={riff} onChange={e => setRiff(e.target.value)} />;
}`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display">
        <li>Einfach, keine Abhängigkeiten</li>
        <li>Ideal für Theme, User, Sprache, kleine globale States</li>
        <li>
          Bei vielen oder häufigen Updates: lieber spezialisierte Libraries
          nutzen
        </li>
      </ul>
    </div>

    {/* === API-Integration: fetch, axios, SWR, React Query === */}
    <h2 className="text-3xl font-metal neon-glow mb-6 mt-12">
      API-Integration: fetch, axios, SWR, React Query
    </h2>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        Warum API-Integration?
      </h3>
      <p className="font-display text-text-secondary mb-4">
        Moderne React-Apps kommunizieren fast immer mit externen APIs – für
        Daten, Authentifizierung, Suche, u.v.m. Es gibt verschiedene Ansätze:{" "}
        <span className="text-neon-blue font-bold">fetch</span> (nativ),{" "}
        <span className="text-electric-purple font-bold">axios</span>{" "}
        (komfortabel), <span className="text-toxic-green font-bold">SWR</span> &{" "}
        <span className="text-neon-blue font-bold">React Query</span> (Stateful
        Data Fetching mit Caching, Revalidation, u.v.m.).
      </p>
    </div>
    {/* --- fetch --- */}
    <div className="mb-8">
      <h3 className="text-xl font-metal text-neon-blue mb-2">
        fetch (Browser-API)
      </h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-neon-blue font-bold">fetch</span> ist die native
        Methode für HTTP-Requests im Browser. Sie ist flexibel, aber etwas
        "low-level" und benötigt oft zusätzliche Fehlerbehandlung.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`/**
 * useMetalFetch - Daten von einer API laden (mit fetch)
 * @param {string} url - API-Endpunkt
 * @returns {Object} - { data, loading, error }
 */
import { useState, useEffect } from "react";
function useMetalFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("API Error");
        return res.json();
      })
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
}
// Verwendung:
// const { data, loading, error } = useMetalFetch("https://api.example.com/metal");
`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display">
        <li>fetch ist nativ, kein Extra-Package nötig</li>
        <li>Fehler- und Ladezustände immer behandeln!</li>
        <li>Ideal für einfache GET-Requests</li>
      </ul>
    </div>
    {/* --- axios --- */}
    <div className="mb-8">
      <h3 className="text-xl font-metal text-electric-purple mb-2">axios</h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-electric-purple font-bold">axios</span> ist eine
        beliebte HTTP-Client-Bibliothek mit einfacher Syntax, automatischer
        JSON-Konvertierung und besserem Error-Handling als fetch.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`/**
 * useMetalAxios - Daten von einer API laden (mit axios)
 * @param {string} url - API-Endpunkt
 * @returns {Object} - { data, loading, error }
 * @example
 * const { data, loading, error } = useMetalAxios("https://api.example.com/metal");
 */
import { useState, useEffect } from "react";
import axios from "axios";
function useMetalAxios(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios.get(url)
      .then((res) => setData(res.data))
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
}
`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display">
        <li>axios ist komfortabler als fetch (z.B. Interceptors, Defaults)</li>
        <li>Automatische JSON-Konvertierung</li>
        <li>Empfohlen für komplexere API-Interaktionen</li>
      </ul>
    </div>
    {/* --- SWR --- */}
    <div className="mb-8">
      <h3 className="text-xl font-metal text-toxic-green mb-2">SWR</h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-toxic-green font-bold">SWR</span>{" "}
        ("stale-while-revalidate") ist ein React-Hook für Data Fetching mit
        Caching, Revalidation und automatischem Refetch. Ideal für moderne UIs
        mit Live-Daten.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`/**
 * useSWR - Data Fetching mit Caching & Revalidation
 * @example
 * const { data, error, isLoading } = useSWR("/api/metal");
 */
import useSWR from "swr";
function fetcher(url) {
  return fetch(url).then((res) => res.json());
}
// In Komponente:
// const { data, error, isLoading } = useSWR("https://api.example.com/metal", fetcher);
`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display">
        <li>Automatisches Caching & Revalidation</li>
        <li>Optimistisch, schnell, einfach</li>
        <li>Ideal für Live-Daten, Listen, Dashboards</li>
      </ul>
    </div>
    {/* --- React Query --- */}
    <div className="mb-8">
      <h3 className="text-xl font-metal text-neon-blue mb-2">React Query</h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-neon-blue font-bold">React Query</span> ist ein
        mächtiges Data-Fetching- und Caching-Framework für React. Es bietet
        Query- und Mutation-Management, automatische Refetches, Background Sync,
        Pagination, u.v.m.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`/**
 * useQuery - Data Fetching mit React Query
 * @example
 * const { data, error, isLoading } = useQuery(["metal"], fetchMetal);
 */
import { useQuery } from "@tanstack/react-query";
function fetchMetal() {
  return fetch("https://api.example.com/metal").then((res) => res.json());
}
// In Komponente:
// const { data, error, isLoading } = useQuery(["metal"], fetchMetal);
`}
      </pre>
      <ul className="list-disc ml-6 text-text-secondary font-display">
        <li>Automatisches Caching, Background Sync, Pagination</li>
        <li>Query- und Mutation-Management</li>
        <li>Empfohlen für komplexe, datengetriebene Apps</li>
      </ul>
    </div>
    {/* --- Best Practices --- */}
    <div className="mb-8">
      <h3 className="text-xl font-metal text-neon-blue mb-2">Best Practices</h3>
      <ul className="list-disc ml-6 text-text-secondary font-display mb-4">
        <li>Immer Lade- und Fehlerzustände anzeigen</li>
        <li>API-Logik in Custom Hooks kapseln</li>
        <li>Für große Apps: SWR oder React Query nutzen</li>
        <li>Keine API-Keys im Frontend speichern!</li>
        <li>Optimistisch updaten für bessere UX</li>
        <li>
          Immer auf Barrierefreiheit achten (z.B. Loading-Spinner mit aria-live)
        </li>
      </ul>
    </div>
    {/* === Community & Ökosystem: DevTools, Extensions, Libraries === */}
    <h2 className="text-3xl font-metal neon-glow mb-6 mt-12">
      Community &amp; Ökosystem: DevTools, Extensions, Libraries
    </h2>
    <div className="mb-8">
      <h3 className="text-2xl font-metal text-neon-blue mb-2">
        React Community
      </h3>
      <p className="font-display text-text-secondary mb-4">
        Die <span className="text-neon-blue font-bold">React Community</span>{" "}
        ist riesig, aktiv und weltweit vernetzt. Es gibt unzählige Ressourcen,
        Foren, Discords, Meetups und Konferenzen. Profitiere von Open Source,
        Tutorials, Boilerplates und dem Austausch mit anderen Devs!
      </p>
      <ul className="list-disc ml-6 text-text-secondary font-display mb-4">
        <li>
          Offizielle Kanäle:{" "}
          <a
            href="https://react.dev/community/support"
            className="text-neon-blue underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Community Support
          </a>
        </li>
        <li>Stack Overflow, GitHub Discussions, Reddit, Discord</li>
        <li>Regelmäßige Events: React Conf, React Summit, lokale Meetups</li>
        <li>Open Source: Tausende Libraries, Starter-Kits, Tools</li>
      </ul>
    </div>
    {/* --- DevTools --- */}
    <div className="mb-8">
      <h3 className="text-xl font-metal text-electric-purple mb-2">
        React DevTools
      </h3>
      <p className="font-display text-text-secondary mb-4">
        <span className="text-electric-purple font-bold">React DevTools</span>{" "}
        ist die offizielle Browser-Erweiterung zum Debuggen von
        React-Komponenten, State, Props und Performance. Unverzichtbar für die
        Entwicklung!
      </p>
      <ul className="list-disc ml-6 text-text-secondary font-display mb-4">
        <li>Komponentenbaum und State live inspizieren</li>
        <li>Hooks, Context, Props und Re-Renders analysieren</li>
        <li>Profiler für Performance-Analysen</li>
        <li>
          <a
            href="https://react.dev/learn/react-developer-tools"
            className="text-neon-blue underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            React DevTools Download
          </a>
        </li>
      </ul>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`// React DevTools installieren (Chrome/Firefox):
// https://react.dev/learn/react-developer-tools
`}
      </pre>
    </div>
    {/* --- Extensions & Editor-Tools --- */}
    <div className="mb-8">
      <h3 className="text-xl font-metal text-toxic-green mb-2">
        Editor Extensions
      </h3>
      <p className="font-display text-text-secondary mb-4">
        Für <span className="text-toxic-green font-bold">VS Code</span> und
        andere Editoren gibt es zahlreiche Extensions, die das React-Development
        beschleunigen und verbessern.
      </p>
      <ul className="list-disc ml-6 text-text-secondary font-display mb-4">
        <li>ES7+ React/Redux/GraphQL Snippets</li>
        <li>Prettier, ESLint, Tailwind CSS IntelliSense</li>
        <li>Auto Import, Bracket Pair Colorizer, GitLens</li>
        <li>TypeScript Hero, React PropTypes Generate</li>
      </ul>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2 text-sm">
        {`// Beispiel: Snippet für Function Component (VS Code)
rfc →
import React from "react";

const MyComponent = () => {
  return <div>Metal!</div>;
};
`}
      </pre>
    </div>
    {/* --- Wichtige Libraries & Frameworks --- */}
    <div className="mb-8">
      <h3 className="text-xl font-metal text-neon-blue mb-2">
        Wichtige Libraries
      </h3>
      <ul className="list-disc ml-6 text-text-secondary font-display mb-4">
        <li>
          <span className="text-neon-blue">react-router</span> – Routing &
          Navigation
        </li>
        <li>
          <span className="text-electric-purple">redux, zustand, jotai</span> –
          State Management
        </li>
        <li>
          <span className="text-toxic-green">react-query, swr</span> – Data
          Fetching & Caching
        </li>
        <li>
          <span className="text-neon-blue">formik, react-hook-form</span> – Form
          Handling
        </li>
        <li>
          <span className="text-electric-purple">framer-motion</span> –
          Animationen
        </li>
        <li>
          <span className="text-toxic-green">styled-components, emotion</span> –
          CSS-in-JS
        </li>
        <li>
          <span className="text-neon-blue">react-testing-library, jest</span> –
          Testing
        </li>
        <li>
          <span className="text-electric-purple">next.js, remix</span> –
          Fullstack/SSR Frameworks
        </li>
      </ul>
    </div>
    {/* --- Best Practices & Community-Tipps --- */}
    <div className="mb-8">
      <h3 className="text-xl font-metal text-neon-blue mb-2">
        Best Practices &amp; Community-Tipps
      </h3>
      <ul className="list-disc ml-6 text-text-secondary font-display mb-4">
        <li>Immer auf dem Laufenden bleiben: React Blog, Twitter/X, GitHub</li>
        <li>Open Source nutzen und beitragen (Pull Requests, Issues, Dokus)</li>
        <li>Libraries regelmäßig updaten (Security & Features)</li>
        <li>DevTools und Linter konsequent einsetzen</li>
        <li>Von der Community lernen: Talks, Streams, Discords, Meetups</li>
        <li>Eigene Snippets, Boilerplates und Tools teilen</li>
      </ul>
    </div>
    {/* === Zurück nach oben Button === */}
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-30 bg-neon-blue text-metal-dark font-metal px-6 py-3 rounded-full shadow-neon hover:bg-electric-purple hover:text-white transition-all text-lg tracking-widest border-2 border-electric-purple animate-pulse"
      aria-label="Zurück nach oben"
    >
      ↑ Top
    </button>
  </section>
);

export default ReactDetail;
