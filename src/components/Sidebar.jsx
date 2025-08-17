/**
 * Sidebar - Navigation für das Metal-IT-LearnBook
 * Apokalyptische Sidebar mit Metal-Theme und Neon-Glow
 * @param {Object} props
 * @param {boolean} open - Sidebar sichtbar?
 * @param {function} onClose - Schließt Sidebar (bei Overlay-Klick)
 * @returns {JSX.Element} Sidebar-Komponente
 */
import React, { useState } from "react";
import "./Sidebar.scss";

const Sidebar = ({ open, onClose }) => {
  const [showDashboard, setShowDashboard] = useState(false);
  const [showProgramming, setShowProgramming] = useState(false);

  const handleDashboardClick = (e) => {
    e.preventDefault();
    window.location.hash = "#dashboard";
    setShowDashboard((v) => !v);
    if (!showDashboard) setShowProgramming(false);
  };
  const handleProgrammingClick = (e) => {
    e.preventDefault();
    setShowProgramming((v) => !v);
  };

  return (
    <aside
      className={`metal-sidebar${open ? " open" : ""}`}
      tabIndex={open ? 0 : -1}
      aria-hidden={!open}
      onClick={(e) => e.stopPropagation()}
    >
      <nav className="flex flex-col gap-2 p-6">
        <a
          href="#dashboard"
          className={`metal-nav-link${showDashboard ? " active" : ""}`}
          onClick={handleDashboardClick}
        >
          Learn-Dashboard
        </a>
        {showDashboard && (
          <div className="ml-2 flex flex-col gap-1">
            <a
              href="#programmierung"
              className={`metal-nav-link${showProgramming ? " active" : ""}`}
              onClick={handleProgrammingClick}
            >
              Programmierung
            </a>
            {showProgramming && (
              <div className="ml-4 flex flex-col gap-1">
                <a href="#html-css" className="metal-nav-link">
                  HTML &amp; CSS
                </a>
                <a href="#js-ts" className="metal-nav-link">
                  JavaScript &amp; TypeScript
                </a>
                <a href="#react" className="metal-nav-link">
                  React
                </a>
                <a href="#python" className="metal-nav-link">
                  Python
                </a>
                <a href="#backend" className="metal-nav-link">
                  Backend
                </a>
              </div>
            )}
          </div>
        )}
        <a href="#englisch" className="metal-nav-link">
          Englisch-Nachschlagewerk
        </a>
        <a href="#englisch-lcci" className="metal-nav-link">
          Englisch-LCCI
        </a>
        <a href="#portfolio" className="metal-nav-link">
          Portfolio
        </a>
        <a href="#projects" className="metal-nav-link">
          Projects
        </a>
        <a href="#metal-songs" className="metal-nav-link">
          Metal-IT-Songs &amp; Videos
        </a>
        <a href="#profil" className="metal-nav-link">
          Profil
        </a>
      </nav>
      {/* Schließen-Button für mobile Ansicht */}
      <button
        className="sidebar-close-btn"
        aria-label="Menü schließen"
        onClick={onClose}
        tabIndex={open ? 0 : -1}
      >
        ×
      </button>
    </aside>
  );
};

export default Sidebar;
