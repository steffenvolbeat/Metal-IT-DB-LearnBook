/**
 * HtmlCssDetail - Detailseite für HTML & CSS
 * Lerninhalte, Beispiele und Aufgaben im Metal-Style
 * @returns {JSX.Element} HTML & CSS Detailseite
 */
import React from "react";

const HtmlCssDetail = () => (
  <section className="metal-card p-8 mt-8 w-full max-w-2xl mx-auto">
    <h2 className="text-3xl font-metal neon-glow mb-4">HTML &amp; CSS</h2>
    <p className="font-display text-text-secondary mb-6">
      Lerne die Grundlagen und fortgeschrittene Techniken von HTML5 und CSS3 –
      mit apokalyptischem Metal-Design!
    </p>
    <div className="mb-6">
      <h3 className="font-metal text-neon-blue text-xl mb-2">
        Beispiel: Semantisches HTML
      </h3>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2">
        {`<main>
  <section>
    <h1>Metal-IT-LearnBook</h1>
    <p>Dein Einstieg in HTML5 & CSS3!</p>
  </section>
</main>`}
      </pre>
      <p className="font-display text-text-secondary text-sm">
        Verwende immer semantische Tags für bessere Struktur und Accessibility.
      </p>
    </div>
    <div className="mb-6">
      <h3 className="font-metal text-neon-blue text-xl mb-2">Aufgabe</h3>
      <p className="font-display mb-2">Erstelle eine eigene HTML5-Seite mit:</p>
      <ul className="list-disc list-inside text-text-secondary mb-2">
        <li>Header, Main, Footer</li>
        <li>Mindestens einer Section mit Überschrift</li>
        <li>Mindestens einem Link und einem Bild</li>
      </ul>
      <p className="font-display text-xs text-text-secondary">
        Tipp: Nutze <span className="text-neon-blue">className</span> für
        Metal-Design!
      </p>
    </div>
    <div className="mb-6">
      <h3 className="font-metal text-neon-blue text-xl mb-2">
        CSS: Metal-Button
      </h3>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2">
        {`.metal-button {
  background: linear-gradient(90deg, #00d4ff, #8b5cf6);
  color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0 16px #00d4ff55;
  font-family: 'Orbitron', monospace;
  padding: 0.8rem 2rem;
  transition: background 0.2s, box-shadow 0.2s;
}`}
      </pre>
      <p className="font-display text-xs text-text-secondary">
        Experimentiere mit Tailwind- und SCSS-Styles für eigene
        Metal-Komponenten!
      </p>
    </div>
  </section>
);

export default HtmlCssDetail;
