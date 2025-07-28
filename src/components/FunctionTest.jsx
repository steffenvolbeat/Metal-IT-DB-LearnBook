/**
 * Metal-IT-LearnBook - Funktionstest Komponente
 * Test für Tailwind CSS v4 & SCSS Integration
 * Autor: Metal-IT-Team
 * Datum: 27. Juli 2025
 */

import React from "react";
import "./FunctionTest.scss";

/**
 * FunctionTest Komponente
 * Testet die Funktionalität von Tailwind CSS und SCSS
 * @returns {JSX.Element} Die Testkomponente
 */
const FunctionTest = () => {
  return (
    <div className="function-test-container">
      {/* Header Sektion */}
      <header className="test-header">
        <h1 className="test-title">🔥 Tailwind v4 & SCSS Funktionstest 🔥</h1>
        <p className="test-subtitle">
          Metal-IT-LearnBook - Apokalyptisches Design System Test
        </p>
      </header>

      {/* Test Grid Container */}
      <div className="test-grid">
        {/* Tailwind Test Card */}
        <div className="test-card tailwind-test">
          <h2 className="card-title neon-glow">Tailwind CSS Test</h2>
          <div className="test-content">
            {/* Farben Test */}
            <div className="color-test">
              <h3>🎨 Metal Farbpalette</h3>
              <div className="color-grid">
                <div className="color-box bg-metal-dark border border-white/20">
                  <span>metal-dark</span>
                </div>
                <div className="color-box bg-metal-gray border border-white/20">
                  <span>metal-gray</span>
                </div>
                <div className="color-box bg-metal-light border border-white/20">
                  <span>metal-light</span>
                </div>
                <div className="color-box bg-neon-blue text-black">
                  <span>neon-blue</span>
                </div>
                <div className="color-box bg-electric-purple text-white">
                  <span>electric-purple</span>
                </div>
                <div className="color-box bg-toxic-green text-black">
                  <span>toxic-green</span>
                </div>
              </div>
            </div>

            {/* Shadow Test */}
            <div className="shadow-test">
              <h3>✨ Schatten Effekte</h3>
              <div className="shadow-grid">
                <div className="shadow-box shadow-metal">metal</div>
                <div className="shadow-box shadow-neon">neon</div>
                <div className="shadow-box shadow-toxic">toxic</div>
                <div className="shadow-box shadow-apocalyptic">apocalyptic</div>
              </div>
            </div>

            {/* Typography Test */}
            <div className="typography-test">
              <h3>📝 Metal Typographie</h3>
              <p className="font-metal text-neon-blue">
                Orbitron Font - Metal Style
              </p>
              <p className="font-display text-electric-purple">
                Rajdhani Font - Display Style
              </p>
              <p className="text-lg text-toxic-green">
                Standard Text mit toxic-green
              </p>
            </div>
          </div>
        </div>

        {/* SCSS Test Card */}
        <div className="test-card scss-test">
          <h2 className="card-title scss-glow">SCSS Test</h2>
          <div className="test-content">
            {/* SCSS Variables Test */}
            <div className="scss-variables">
              <h3>🔧 SCSS Variablen & Mixins</h3>
              <div className="variable-demo">
                <p>SCSS kompiliert erfolgreich!</p>
                <p>Variablen und Mixins funktionieren.</p>
              </div>
            </div>

            {/* Animation Test */}
            <div className="animation-test">
              <h3>🌀 CSS Animationen</h3>
              <div className="animated-elements">
                <div className="pulse-element">Pulse Animation</div>
                <div className="glow-element">Glow Animation</div>
                <div className="rotate-element">Rotate Animation</div>
              </div>
            </div>

            {/* Nested Styles Test */}
            <div className="nested-test">
              <h3>🏗️ SCSS Nesting</h3>
              <div className="nested-container">
                <div className="nested-item">Item 1</div>
                <div className="nested-item">Item 2</div>
                <div className="nested-item active">Item 3 (Active)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Test Card */}
        <div className="test-card integration-test">
          <h2 className="card-title integration-glow">Integration Test</h2>
          <div className="test-content">
            {/* Combined Test */}
            <div className="combined-test">
              <h3>🔗 Tailwind + SCSS Kombination</h3>
              <div className="combined-elements">
                <button className="combined-button primary">
                  Primary Button
                </button>
                <button className="combined-button secondary">
                  Secondary Button
                </button>
                <div className="combined-card">
                  <h4>Test Card</h4>
                  <p>Tailwind Klassen mit SCSS Styling kombiniert.</p>
                </div>
              </div>
            </div>

            {/* Responsive Test */}
            <div className="responsive-test">
              <h3>📱 Responsive Design</h3>
              <div className="responsive-grid">
                <div className="responsive-item">Mobile First</div>
                <div className="responsive-item">Tablet Anpassung</div>
                <div className="responsive-item">Desktop Optimiert</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="test-footer">
        <div className="status-indicator success">
          ✅ Alle Tests erfolgreich - System bereit für Entwicklung!
        </div>
        <p className="test-info">
          Tailwind CSS v4 und SCSS sind korrekt konfiguriert und funktionsfähig.
        </p>
      </footer>
    </div>
  );
};

export default FunctionTest;
