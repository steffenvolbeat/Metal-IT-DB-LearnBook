/**
 * PythonDetail - Detailseite für Python
 * Lerninhalte, Beispiele und Aufgaben im Metal-Style
 * @returns {JSX.Element} Python Detailseite
 */
import React from "react";

const PythonDetail = () => (
  <section className="metal-card p-8 mt-8 w-full max-w-2xl mx-auto">
    <h2 className="text-3xl font-metal neon-glow mb-4">Python</h2>
    <p className="font-display text-text-secondary mb-6">
      Python-Programmierung von den Basics bis zu Projekten – alles im
      Metal-Design!
    </p>
    <div className="mb-6">
      <h3 className="font-metal text-neon-blue text-xl mb-2">
        Beispiel: Funktion
      </h3>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2">
        {`def greet(name):
    return f"Hello, {name}!"`}
      </pre>
      <p className="font-display text-text-secondary text-sm">
        Funktionen sind das Herz von Python!
      </p>
    </div>
    <div className="mb-6">
      <h3 className="font-metal text-neon-blue text-xl mb-2">Aufgabe</h3>
      <p className="font-display mb-2">
        Schreibe eine Funktion, die prüft, ob eine Zahl gerade ist.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2">
        {`def is_even(num):
    return num % 2 == 0`}
      </pre>
    </div>
    <div className="mb-6">
      <h3 className="font-metal text-neon-blue text-xl mb-2">
        Listen &amp; Comprehensions
      </h3>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2">
        {`squares = [x**2 for x in range(10)]`}
      </pre>
      <p className="font-display text-xs text-text-secondary">
        Nutze List Comprehensions für kompakten Python-Code!
      </p>
    </div>
  </section>
);

export default PythonDetail;
