/**
 * LearnDashboard - Übersicht über alle Lernbereiche
 * Metal-Style Dashboard mit Fortschritt, Badges und Quicklinks
 * @returns {JSX.Element} Dashboard Seite
 */
import React from "react";

const dashboardLinks = [
  { label: "Programmierung", hash: "#programmierung", icon: "💻" },
  { label: "HTML & CSS", hash: "#html-css", icon: "🎨" },
  { label: "JavaScript & TypeScript", hash: "#js-ts", icon: "⚡" },
  { label: "React", hash: "#react", icon: "⚛️" },
  { label: "Python", hash: "#python", icon: "🐍" },
  { label: "Backend", hash: "#backend", icon: "🖥️" },
  { label: "SQL-Datenbank", hash: "#sql-database", icon: "🗄️" },
  { label: "Englisch-Nachschlagewerk", hash: "#englisch", icon: "📚" },
  { label: "Englisch-LCCI", hash: "#englisch-lcci", icon: "🎓" },
  { label: "Portfolio", hash: "#portfolio", icon: "🗂️" },
  { label: "Projects", hash: "#projects", icon: "🚀" },
  { label: "Metal-IT-Songs & Videos", hash: "#metal-songs", icon: "🎵" },
];

const LearnDashboard = () => {
  return (
    <section className="metal-card p-8 mt-8 w-full max-w-3xl mx-auto">
      <h2 className="text-4xl font-metal neon-glow mb-8 text-center">
        ⚡ Learn-Dashboard
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {dashboardLinks.map((link) => (
          <a
            key={link.hash}
            href={link.hash}
            className="dashboard-link flex items-center gap-4 p-6 rounded-xl bg-metal-light hover:bg-electric-purple hover:text-white shadow-metal neon-glow transition-all duration-200 font-display text-xl"
          >
            <span className="text-3xl">{link.icon}</span>
            <span>{link.label}</span>
          </a>
        ))}
      </div>
      <div className="flex flex-col items-center mt-8">
        <div className="font-metal text-neon-blue text-2xl mb-2">
          Dein Fortschritt
        </div>
        <div className="w-full bg-metal-gray rounded-full h-6 mb-4 shadow-inner-metal">
          <div
            className="bg-neon-blue h-6 rounded-full"
            style={{ width: "42%" }}
          ></div>
        </div>
        <div className="flex gap-4 flex-wrap justify-center">
          <span className="badge bg-neon-blue text-black px-4 py-2 rounded-full font-metal shadow-neon">
            JS Warrior
          </span>
          <span className="badge bg-toxic-green text-black px-4 py-2 rounded-full font-metal shadow-neon">
            Python Pro
          </span>
          <span className="badge bg-electric-purple text-white px-4 py-2 rounded-full font-metal shadow-neon">
            Backend Master
          </span>
        </div>
      </div>
    </section>
  );
};

export default LearnDashboard;
