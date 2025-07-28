/**
 * LoginForm - Metal-Style Login für das LearnBook
 * Authentifizierungsformular mit Neon-Glow und Metal-Theme
 * @returns {JSX.Element} Login-Formular
 */
import React, { useState } from "react";
import "./LoginForm.scss";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Dummy-Login-Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Bitte Benutzername und Passwort eingeben!");
      return;
    }
    setError("");
    // Hier könnte die Authentifizierung angebunden werden
    alert("Login erfolgreich! (Demo)");
  };

  return (
    <form className="metal-login-form" onSubmit={handleSubmit}>
      <div className="login-title">Login</div>
      <div className="form-group">
        <label htmlFor="username">Benutzername</label>
        <input
          id="username"
          className="metal-input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Passwort</label>
        <input
          id="password"
          className="metal-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
      </div>
      {error && <div className="error-message">{error}</div>}
      <button type="submit" className="submit-button">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
