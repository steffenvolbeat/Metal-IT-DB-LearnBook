/**
 * Python - Lernseite für Python
 * Einführung und Lerninhalte zu Python im Metal-IT-LearnBook
 * @returns {JSX.Element} Python Lernseite
 */
import React from "react";

const Python = () => (
  <section className="metal-card p-8 mt-8">
    <h2 className="text-3xl font-metal neon-glow mb-4">Python</h2>
    <p className="font-display text-text-secondary mb-2">
      Python-Programmierung von den Basics bis zu Projekten – alles im
      Metal-Design!
    </p>
    <a
      href="#python-detail"
      className="block mt-4 text-neon-blue underline hover:text-electric-purple transition-all"
    >
      Python Deep Dive &rarr;
    </a>
    {/* Weitere Inhalte folgen */}
  </section>
);

export default Python;
