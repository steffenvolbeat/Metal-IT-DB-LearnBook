/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Apokalyptisches Metal Design - ohne Rot
      colors: {
        // Basis Metall-Farbtöne
        "metal-dark": "#0f0f0f",
        "metal-gray": "#1a1a1a",
        "metal-light": "#2a2a2a",
        "metal-silver": "#4a4a4a",

        // Akzentfarben für Metal-Theme
        "neon-blue": "#00d4ff",
        "electric-purple": "#8b5cf6",
        "toxic-green": "#10b981",
        "amber-glow": "#f59e0b",

        // Text und UI
        "text-primary": "#ffffff",
        "text-secondary": "#a1a1aa",
        "text-accent": "#00d4ff",
      },

      // Apokalyptische Schatten
      boxShadow: {
        metal: "0 4px 20px rgba(0, 0, 0, 0.8)",
        neon: "0 0 20px rgba(0, 212, 255, 0.5)",
        toxic: "0 0 15px rgba(16, 185, 129, 0.4)",
        "inner-metal": "inset 0 2px 4px rgba(0, 0, 0, 0.6)",
        apocalyptic:
          "0 8px 32px rgba(0, 0, 0, 0.9), inset 0 1px 2px rgba(255, 255, 255, 0.1)",
      },

      // Metal-typische Fonts
      fontFamily: {
        metal: ["Orbitron", "monospace"],
        display: ["Rajdhani", "sans-serif"],
      },

      // Spezielle Hintergrund-Patterns
      backgroundImage: {
        "metal-gradient":
          "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #2a2a2a 100%)",
        "neon-gradient": "linear-gradient(90deg, #00d4ff 0%, #8b5cf6 100%)",
        "apocalyptic-pattern":
          "radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 50%)",
      },
    },
  },
  plugins: [],
};
