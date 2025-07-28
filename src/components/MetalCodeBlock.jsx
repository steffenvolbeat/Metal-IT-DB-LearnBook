/**
 * MetalCodeBlock - Codeblock mit Copy-Button und Neon-Glow
 * Stellt einen Codeblock mit Copy-to-Clipboard-Funktion und Metal-Design dar
 * @param {string} code - Der darzustellende Code
 * @param {string} [language] - Sprache für Syntax-Highlighting (optional)
 * @returns {JSX.Element} - Interaktiver Codeblock
 */
import React, { useState } from "react";

const MetalCodeBlock = ({ code, language = "" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="relative group my-4">
      <pre
        className={`bg-metal-light p-4 rounded-lg text-text-primary overflow-x-auto text-sm font-mono shadow-neon transition-all duration-300 border-2 border-neon-blue hover:border-electric-purple`}
      >
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className={`absolute top-2 right-2 px-3 py-1 rounded font-metal text-xs shadow-neon border border-neon-blue bg-metal-dark text-neon-blue hover:bg-electric-purple hover:text-white transition-all ${
          copied ? "bg-toxic-green text-metal-dark" : ""
        }`}
        aria-label="Copy Code"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

export default MetalCodeBlock;
