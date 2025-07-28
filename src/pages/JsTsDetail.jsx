/**
 * JsTsDetail - Detailseite für JavaScript & TypeScript
 * Lerninhalte, Beispiele und Aufgaben im Metal-Style
 * @returns {JSX.Element} JS/TS Detailseite
 */
import React from "react";

const JsTsDetail = () => (
  <section className="metal-card p-8 mt-8 w-full max-w-2xl mx-auto">
    <h2 className="text-3xl font-metal neon-glow mb-4">
      JavaScript &amp; TypeScript
    </h2>
    <p className="font-display text-text-secondary mb-6">
      Moderne JavaScript- und TypeScript-Entwicklung – von Basics bis Advanced,
      im Metal-Style!
    </p>
    <div className="mb-6">
      <h3 className="font-metal text-neon-blue text-xl mb-2">
        Beispiel: Arrow Function
      </h3>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2">
        {`const greet = (name) => {
  return \`Hello, \${name}!\`;
};`}
      </pre>
      <p className="font-display text-text-secondary text-sm">
        Nutze moderne Syntax für mehr Lesbarkeit und Power!
      </p>
    </div>
    <div className="mb-6">
      <h3 className="font-metal text-neon-blue text-xl mb-2">Aufgabe</h3>
      <p className="font-display mb-2">
        Schreibe eine Funktion, die prüft, ob eine Zahl gerade ist.
      </p>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2">
        {`function isEven(num) {
  return num % 2 === 0;
}`}
      </pre>
    </div>
    <div className="mb-6">
      <h3 className="font-metal text-neon-blue text-xl mb-2">
        TypeScript: Typen
      </h3>
      <pre className="bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto mb-2">
        {`type User = {
  name: string;
  age: number;
};`}
      </pre>
      <p className="font-display text-xs text-text-secondary">
        TypeScript sorgt für mehr Sicherheit im Code!
      </p>
    </div>
  </section>
);

export default JsTsDetail;
