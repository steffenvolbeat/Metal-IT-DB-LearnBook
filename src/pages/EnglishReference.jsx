/**
 * EnglishReference - Englisch-Nachschlagewerk für IT
 * IT-spezifisches Vokabular mit Suchfunktion im Metal-Design
 * @returns {JSX.Element} Englisch-Nachschlagewerk Seite
 */
import React, { useState } from "react";

// Beispiel-Vokabelliste (beliebig erweiterbar)
const vocabulary = [
  { en: "array", de: "Feld, Array" },
  { en: "bug", de: "Fehler, Bug" },
  { en: "commit", de: "Commit, Übertragung" },
  { en: "database", de: "Datenbank" },
  { en: "deployment", de: "Bereitstellung" },
  { en: "framework", de: "Framework, Rahmenwerk" },
  { en: "function", de: "Funktion" },
  { en: "issue", de: "Problem, Ticket" },
  { en: "merge", de: "Zusammenführen" },
  { en: "pull request", de: "Pull Request, Anfrage zum Einfügen von Code" },
  { en: "repository", de: "Repository, Code-Archiv" },
  { en: "runtime", de: "Laufzeitumgebung" },
  { en: "statement", de: "Anweisung, Statement" },
  { en: "string", de: "Zeichenkette, String" },
  { en: "variable", de: "Variable" },
  { en: "loop", de: "Schleife" },
  { en: "object", de: "Objekt" },
  { en: "property", de: "Eigenschaft" },
  { en: "query", de: "Abfrage" },
  { en: "source code", de: "Quellcode" },
  { en: "stack", de: "Stapel, Stack" },
  { en: "thread", de: "Thread, Ausführungsstrang" },
  { en: "type", de: "Typ" },
  { en: "user interface", de: "Benutzeroberfläche" },
  { en: "workflow", de: "Arbeitsablauf" },
];

const EnglishReference = () => {
  const [search, setSearch] = useState("");
  const filtered = vocabulary.filter(
    (v) =>
      v.en.toLowerCase().includes(search.toLowerCase()) ||
      v.de.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="metal-card p-8 mt-8 w-full max-w-2xl mx-auto">
      <h2 className="text-3xl font-metal neon-glow mb-4 text-center">
        📚 Englisch-Nachschlagewerk
      </h2>
      <div className="mb-4 flex flex-col items-center">
        <input
          type="text"
          className="metal-input w-full max-w-md mb-2"
          placeholder="Begriff suchen (EN/DE)..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="vocab-list divide-y divide-metal-silver">
        {filtered.length === 0 && (
          <div className="text-center text-text-secondary font-display py-4">
            Kein Eintrag gefunden.
          </div>
        )}
        {filtered.map((v, idx) => (
          <div
            key={v.en + v.de}
            className="flex justify-between items-center py-2 px-2"
          >
            <span className="font-metal text-neon-blue text-lg">{v.en}</span>
            <span className="font-display text-text-secondary text-base">
              {v.de}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EnglishReference;
