/**
 * Profile - User-Profilseite mit Login/Logout
 * Metal-Style Userverwaltung für das LearnBook
 * @returns {JSX.Element} Profilseite
 */

import React, { useState } from "react";
import MetalDivider from "../components/MetalDivider";

const dummyUser = {
  username: "metalhead",
  email: "metal@it-learnbook.com",
  avatar:
    "https://ui-avatars.com/api/?name=Metal+Head&background=0f0f0f&color=00d4ff&font-size=0.45&bold=true",
};

/**
 * Profile - Metal-Style User-Profilseite mit Neon-Glow, Animationen & Accessibility
 * Zeigt Userdaten, Avatar mit Glow, animierten Divider und Metal-Branding
 * @returns {JSX.Element} Metal User Profile Page
 */
const Profile = () => {
  const [user] = useState(dummyUser);
  const [loggedIn, setLoggedIn] = useState(true);

  // Logout-Handler
  const handleLogout = () => setLoggedIn(false);

  // Login-View (ausgeloggt)
  if (!loggedIn) {
    return (
      <section
        className="metal-card p-8 mt-16 w-full max-w-md mx-auto text-center animate-fade-in"
        aria-labelledby="profile-header"
      >
        {/* Animierter Header mit Neon-Glow */}
        <h2
          id="profile-header"
          className="text-4xl font-metal neon-glow mb-4 animate-glow"
        >
          👤 Metal Profil
        </h2>
        <MetalDivider />
        <p className="font-display text-text-secondary mb-4 text-lg">
          Du bist{" "}
          <span className="text-electric-purple font-bold">ausgeloggt</span>.
          <br />
          Logge dich ein, um dein apokalyptisches Profil zu sehen!
        </p>
        <button
          className="metal-button bg-neon-blue text-black font-metal px-8 py-3 rounded-lg mt-6 shadow-neon hover:bg-electric-purple hover:text-white transition-all focus:outline-none focus:ring-4 focus:ring-neon-blue"
          onClick={() => setLoggedIn(true)}
          aria-label="Erneut einloggen (Demo)"
        >
          <span className="drop-shadow">Erneut einloggen (Demo)</span>
        </button>
      </section>
    );
  }

  // Profil-View (eingeloggt)
  return (
    <section
      className="metal-card p-8 mt-16 w-full max-w-md mx-auto text-center animate-fade-in"
      aria-labelledby="profile-header"
    >
      {/* Animierter Header mit Neon-Glow und Metal-Branding */}
      <h2
        id="profile-header"
        className="text-4xl font-metal neon-glow mb-4 animate-glow"
      >
        👤 Metal Profil
      </h2>
      <MetalDivider />
      {/* Avatar mit Neon-Glow und Shadow */}
      <div className="flex flex-col items-center mb-4">
        <div className="relative group">
          <img
            src={user.avatar}
            alt="Avatar"
            className="mx-auto rounded-full border-4 border-neon-blue shadow-neon w-32 h-32 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-electric"
            width={120}
            height={120}
            draggable="false"
          />
          {/* Neon-Glow Effekt um Avatar */}
          <span className="absolute inset-0 rounded-full pointer-events-none animate-avatar-glow" />
        </div>
      </div>
      {/* Username und Email mit Metal-Typografie */}
      <div className="font-display text-2xl mb-2 text-neon-blue tracking-wide">
        {user.username}
      </div>
      <div className="font-display text-text-secondary mb-6 text-lg">
        {user.email}
      </div>
      {/* Logout-Button mit Neon-Glow und Animation */}
      <button
        className="metal-button bg-electric-purple text-white font-metal px-8 py-3 rounded-lg shadow-toxic hover:bg-neon-blue hover:text-black transition-all focus:outline-none focus:ring-4 focus:ring-electric-purple animate-pulse"
        onClick={handleLogout}
        aria-label="Logout"
      >
        <span className="drop-shadow">Logout</span>
      </button>
    </section>
  );
};

export default Profile;
