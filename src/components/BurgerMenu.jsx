/**
 * BurgerMenu - Burger-Icon für das Öffnen/Schließen der Sidebar
 * Apokalyptisches Metal-Design, animiert
 * @param {Object} props
 * @param {boolean} open - Sidebar geöffnet?
 * @param {function} onClick - Klick-Handler
 * @returns {JSX.Element} Burger-Button
 */
import React from "react";
import "./BurgerMenu.scss";

const BurgerMenu = ({ open, onClick }) => (
  <button
    className={`burger-menu${open ? " open" : ""}`}
    aria-label={open ? "Menü schließen" : "Menü öffnen"}
    aria-expanded={open}
    onClick={onClick}
    type="button"
  >
    <span className="bar" />
    <span className="bar" />
    <span className="bar" />
  </button>
);

export default BurgerMenu;
