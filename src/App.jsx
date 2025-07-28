/**
 * Metal-IT-LearnBook - Haupt-App Komponente
 * Apokalyptisches Lernbuch für IT-Technologien
 * Autor: Metal-IT-Team
 * Datum: 27. Juli 2025
 */

import React from "react";
import MainPage from "./components/MainPage";
import FunctionTest from "./components/FunctionTest";
import "./App.css";

/**
 * App Komponente - Einstiegspunkt der Anwendung
 * Zeigt die Hauptseite (MainPage) an. FunktionTest nur für Entwicklung.
 * @returns {JSX.Element} Die Haupt-App-Komponente
 */
function App() {
  // FunktionTest nur für Entwicklung anzeigen (hier auskommentieren, wenn nicht benötigt)
  // return <FunctionTest />;
  return <MainPage />;
}

export default App;
