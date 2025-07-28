/**
 * JsTs - Lernseite für JavaScript & TypeScript
 * Einführung und Lerninhalte zu JS & TS im Metal-IT-LearnBook
 * @returns {JSX.Element} JS & TS Lernseite
 */
import React from "react";

const JsTs = () => (
  <section className="metal-card p-8 mt-8">
    <h2 className="text-3xl font-metal neon-glow mb-4">
      JavaScript &amp; TypeScript
    </h2>
    <p className="font-display text-text-secondary mb-2">
      Moderne JavaScript- und TypeScript-Entwicklung – von Basics bis Advanced,
      im Metal-Style!
    </p>
    <a
      href="#js-ts-detail"
      className="block mt-4 text-neon-blue underline hover:text-electric-purple transition-all"
    >
      JS/TS Deep Dive &rarr;
    </a>
    {/* Weitere Inhalte folgen */}
  </section>
);

export default JsTs;
