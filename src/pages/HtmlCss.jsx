/**
 * HtmlCss - Lernseite für HTML & CSS
 * Einführung und Lerninhalte zu HTML & CSS im Metal-IT-LearnBook
 * @returns {JSX.Element} HTML & CSS Lernseite
 */
import React from "react";

const HtmlCss = () => (
  <section className="metal-card p-8 mt-8">
    <h2 className="text-3xl font-metal neon-glow mb-4">HTML &amp; CSS</h2>
    <p className="font-display text-text-secondary mb-2">
      Lerne die Grundlagen und fortgeschrittene Techniken von HTML5 und CSS3 –
      mit apokalyptischem Metal-Design!
    </p>
    <a
      href="#html-css-detail"
      className="metal-button bg-neon-blue text-black font-metal px-6 py-2 rounded-lg mt-6 block text-center w-full max-w-xs mx-auto shadow-neon hover:bg-electric-purple hover:text-white transition-all"
    >
      Zu den HTML &amp; CSS Details
    </a>
    {/* Weitere Inhalte folgen */}
  </section>
);

export default HtmlCss;
