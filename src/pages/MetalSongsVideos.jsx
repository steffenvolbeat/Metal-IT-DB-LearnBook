/**
 * MetalSongsVideos - Metal-IT-Songs & Videos Seite
 * Apokalyptische Multimedia-Seite mit integriertem YouTube-Player, Playlist und Suchfunktion
 * @returns {JSX.Element} Metal-IT-Songs & Videos Seite
 */
import React, { useState } from "react";

// Beispiel-Playlist (kann beliebig erweitert werden)
const playlist = [
  {
    title: "Metallica - Master of Puppets",
    youtubeId: "E0ozmU9cJDg",
  },
  {
    title: "Iron Maiden - The Trooper",
    youtubeId: "2G5rfPISIwo",
  },
  {
    title: "Judas Priest - Painkiller",
    youtubeId: "nM__lPTWThU",
  },
  {
    title: "Sabaton - Bismarck",
    youtubeId: "oVWEb-At8yc",
  },
  {
    title: "Nightwish - Nemo",
    youtubeId: "kIBdpFJyFkc",
  },
  {
    title: "Rammstein - Zeig dich",
    youtubeId: "Lfiwewpr8F8",
  },
  {
    title: "Slipknot - Duality",
    youtubeId: "6fVE8kSM43I",
  },
  {
    title: "System Of A Down - Chop Suey!",
    youtubeId: "CSvFpBOe8eY",
  },
  {
    title: "Powerwolf - Army of the Night",
    youtubeId: "1p85FhTc-OU",
  },
  {
    title: "Sabaton - Primo Victoria",
    youtubeId: "5yHuuBZgdJg",
  },
  {
    title: "Amon Amarth - Twilight of the Thunder God",
    youtubeId: "i5M1WZWtJWw",
  },
  {
    title: "Ghost - Square Hammer",
    youtubeId: "VqoyKzgkqR4",
  },
  {
    title: "Ramstein",
    youtubeId: "oVKKY4czvy8",
  },
  {
    title:"Ramstein - Giftig",
    youtubeId: "MlSvuFTC3k&list",
  },
  {
    title:"INFECTED RAIN - Freaky Carnival",
    youtubeId: "MlSvuFTC3k",
  },
];

const MetalSongsVideos = () => {
  const [current, setCurrent] = useState(0);
  const [search, setSearch] = useState("");
  const filtered = playlist.filter((v) =>
    v.title.toLowerCase().includes(search.toLowerCase())
  );
  const currentVideo = filtered[current] || filtered[0] || playlist[0];

  // Wenn Filter aktiv, setCurrent auf 0 zurücksetzen
  React.useEffect(() => {
    setCurrent(0);
  }, [search]);

  return (
    <section className="metal-card p-8 mt-8 w-full max-w-2xl mx-auto">
      <h2 className="text-3xl font-metal neon-glow mb-4 text-center">
        🎵 Metal-IT-Songs &amp; Videos
      </h2>
      <div className="mb-4 flex flex-col items-center">
        <input
          type="text"
          className="metal-input w-full max-w-md mb-2"
          placeholder="Song oder Band suchen..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="youtube-player-container mb-6">
        <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-neon">
          <iframe
            width="100%"
            height="360"
            src={`https://www.youtube.com/embed/${currentVideo.youtubeId}?autoplay=0&rel=0`}
            title={currentVideo.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-64 md:h-96 bg-black"
          ></iframe>
        </div>
        <div className="text-center mt-2 text-lg font-display text-text-accent">
          {currentVideo.title}
        </div>
      </div>
      <div className="playlist-list flex flex-col gap-2">
        {filtered.length === 0 && (
          <div className="text-center text-text-secondary font-display py-4">
            Keine Songs gefunden.
          </div>
        )}
        {filtered.map((video, idx) => (
          <button
            key={video.youtubeId}
            className={`playlist-item text-left px-4 py-2 rounded-lg font-display transition-all duration-200 ${
              idx === current
                ? "bg-neon-blue text-black font-bold shadow-neon"
                : "bg-metal-light text-text-secondary hover:bg-electric-purple hover:text-white"
            }`}
            onClick={() => setCurrent(idx)}
          >
            {video.title}
          </button>
        ))}
      </div>
    </section>
  );
};

export default MetalSongsVideos;
