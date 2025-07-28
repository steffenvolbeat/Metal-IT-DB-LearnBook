/**
 * ReactPage - Lernseite für React
 * Einführung und Lerninhalte zu React im Metal-IT-LearnBook
 * @returns {JSX.Element} React Lernseite
 */
import React from "react";

const ReactPage = () => (
  <section className="metal-card p-8 mt-8">
    <h2 className="text-3xl font-metal neon-glow mb-4">React</h2>
    <p className="font-display text-text-secondary mb-2">
      Alles rund um komponentenbasierte Entwicklung mit React – Metal, Hooks
      &amp; Power!
    </p>
    <a
      href="#react-detail"
      className="block mt-4 text-neon-blue underline hover:text-electric-purple transition-all"
    >
      React Deep Dive &rarr;
    </a>
    {/* Weitere Inhalte folgen */}
  </section>
);

export default ReactPage;
