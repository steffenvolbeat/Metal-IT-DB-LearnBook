/**
 * MainPage - Hauptseite des Metal-IT-LearnBook
 * Apokalyptische Startseite mit Login, Sidebar und Dashboard
 * @returns {JSX.Element} Hauptseiten-Komponente
 */
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import BurgerMenu from "./BurgerMenu";
import LoginForm from "./LoginForm";
import HtmlCss from "../pages/HtmlCss";
import HtmlCssDetail from "../pages/HtmlCssDetail";
import JsTs from "../pages/JsTs";
import JsTsDetail from "../pages/JsTsDetail";
import ReactPage from "../pages/ReactPage";
import ReactDetail from "../pages/ReactDetail";
import Python from "../pages/Python";
import PythonDetail from "../pages/PythonDetail";
import MetalSongsVideos from "../pages/MetalSongsVideos";
import EnglishReference from "../pages/EnglishReference";
import Profile from "../pages/Profile";
import LearnDashboard from "../pages/LearnDashboard";
import "./MainPage.scss";

const MainPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Sidebar Drawer-Logik
  const handleBurgerClick = () => setSidebarOpen((open) => !open);
  const handleCloseSidebar = () => setSidebarOpen(false);

  // Routing-Logik für Content
  const [route, setRoute] = useState(window.location.hash);
  React.useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  let content = null;
  // Spezialfall: ReactDetail und Sprungmarken
  if (route.startsWith("#react-detail") || [
    "#grundlagen",
    "#fortgeschritten",
    "#state-management",
    "#api-daten",
    "#migration",
    "#community",
    "#praxis"
  ].includes(route)) {
    content = <ReactDetail />;
    // Smooth scroll zu Sprungmarke, falls vorhanden
    React.useEffect(() => {
      if (route && route !== "#react-detail") {
        const el = document.getElementById(route.replace("#", ""));
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, [route]);
  } else {
    switch (route) {
      case "#html-css":
        content = <HtmlCss />;
        break;
      case "#html-css-detail":
        content = <HtmlCssDetail />;
        break;
      case "#js-ts":
        content = <JsTs />;
        break;
      case "#js-ts-detail":
        content = <JsTsDetail />;
        break;
      case "#react":
        content = <ReactPage />;
        break;
      case "#python":
        content = <Python />;
        break;
      case "#python-detail":
        content = <PythonDetail />;
        break;
      case "#metal-songs":
        content = <MetalSongsVideos />;
        break;
      case "#englisch":
        content = <EnglishReference />;
        break;
      case "#profil":
        content = <Profile />;
        break;
      case "#dashboard":
        content = <LearnDashboard />;
        break;
      default:
        content = (
          <>
            <h1 className="text-5xl md:text-7xl font-metal neon-glow mb-6 text-center">
              Metal-IT-LearnBook
            </h1>
            <p className="text-xl md:text-2xl font-display text-text-secondary mb-10 text-center max-w-2xl">
              Die apokalyptische Lernplattform für IT-Technologien – Metal, Neon,
              Wissen und Power!
            </p>
            {/* Login-Formular */}
            <LoginForm />
          </>
        );
    }
  }

  return (
    <div className="mainpage-bg min-h-screen w-full relative">
      {/* BurgerMenu für mobile Ansicht */}
      <BurgerMenu open={sidebarOpen} onClick={handleBurgerClick} />
      {/* Sidebar als Drawer */}
      <Sidebar open={sidebarOpen} onClose={handleCloseSidebar} />
      {/* Overlay für mobile Sidebar */}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={handleCloseSidebar} />
      )}
      {/* Hauptinhalt */}
      <main className="main-content flex flex-col items-center justify-center p-6 w-full min-h-screen">
        {content}
      </main>
    </div>
  );
};

export default MainPage;
