/**
 * ReactBook3D - Realistisches 3D React Buch
 * Echte 3D-Perspektive mit Inhaltsverzeichnis, Seiten und Benutzer-Eingaben
 * Metal-Design mit React-blau/cyan Farbschema, umblättern, eigene Notizen
 * @returns {JSX.Element} Realistisches 3D React Buch
 */
import React, { useState, useEffect, useRef } from "react";
import "./ReactBook3D.scss";

/**
 * React 3D Buch mit echter Buchfunktionalität
 */
const ReactBook3D = () => {
  // === State für echtes Buch-Verhalten ===
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [userNotes, setUserNotes] = useState({});
  const [bookmarks, setBookmarks] = useState(new Set());
  const [showTableOfContents, setShowTableOfContents] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  const [userEntries, setUserEntries] = useState({});
  const [editingEntry, setEditingEntry] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);
  const [entryToDelete, setEntryToDelete] = useState(null);
  const [showAddModal, setShowAddModal] = useState(null);
  const [newEntryData, setNewEntryData] = useState({
    title: "",
    content: "",
    type: "code",
  });
  const [dynamicPages, setDynamicPages] = useState([]);
  const bookRef = useRef(null);

  /**
   * Vollständige React Buch-Struktur mit Inhaltsverzeichnis
   */
  const bookStructure = [
    // Cover
    {
      id: "cover",
      type: "cover",
      title: "React Mastery",
      subtitle: "Das vollständige React Handbuch",
      author: "Metal-IT Academy",
      version: "2025 Edition",
      pageNumber: null,
      allowNotes: false,
    },

    // Inhaltsverzeichnis
    {
      id: "table-of-contents",
      type: "table-of-contents",
      title: "📚 Inhaltsverzeichnis",
      chapters: [
        { title: "1. React Grundlagen", page: 3, icon: "⚛️" },
        { title: "2. Komponenten & JSX", page: 8, icon: "🧩" },
        { title: "3. Hooks & State", page: 15, icon: "🪝" },
        { title: "4. Context & Zustand", page: 22, icon: "🔄" },
        { title: "5. Performance", page: 28, icon: "⚡" },
        { title: "6. Routing & Navigation", page: 35, icon: "🛣️" },
        { title: "7. Deine Notizen", page: 42, icon: "📝" },
      ],
      pageNumber: 1,
      allowNotes: false,
    },

    // React Grundlagen
    {
      id: "react-basics",
      type: "content",
      title: "1. React Grundlagen",
      content: {
        sections: [
          {
            title: "React Setup & Virtual DOM",
            code: `// React App erstellen
import React from 'react';
import ReactDOM from 'react-dom/client';

// Virtual DOM Konzept
const App = () => {
  return (
    <div className="app">
      <h1>Welcome to React Metal-IT</h1>
      <p>Virtual DOM macht Updates effizient</p>
    </div>
  );
};

// Root Element rendern
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// JSX vs. JavaScript
const withJSX = <h1>Hello Metal-IT</h1>;
const withoutJSX = React.createElement('h1', null, 'Hello Metal-IT');`,
            explanation:
              "React nutzt das Virtual DOM für effiziente Updates und JSX für deklarative UI-Beschreibungen.",
          },
          {
            title: "Komponenten-Grundlagen",
            code: `// Funktionale Komponente
const MetalButton = ({ children, onClick, variant = 'primary' }) => {
  const buttonClass = \`metal-btn \${variant}\`;
  
  return (
    <button className={buttonClass} onClick={onClick}>
      ⚡ {children}
    </button>
  );
};

// Komponente verwenden
const App = () => {
  const handleClick = () => {
    console.log('Metal Button clicked!');
  };

  return (
    <div>
      <MetalButton onClick={handleClick}>
        Click Me
      </MetalButton>
      <MetalButton variant="secondary">
        Secondary Action
      </MetalButton>
    </div>
  );
};

// Props Destructuring
const UserCard = ({ user: { name, email, role } }) => (
  <div className="user-card">
    <h3>{name}</h3>
    <p>{email}</p>
    <span className="role">{role}</span>
  </div>
);`,
            explanation:
              "Komponenten sind die Bausteine von React - wiederverwendbar und konfigurierbar über Props.",
          },
        ],
      },
      pageNumber: 3,
      allowNotes: true,
    },

    // Komponenten & JSX
    {
      id: "components-jsx",
      type: "content",
      title: "2. Komponenten & JSX",
      content: {
        sections: [
          {
            title: "JSX Best Practices",
            code: `// Conditional Rendering
const MetalLoader = ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <div className="metal-loader">
        <div className="spinner">⚡</div>
        <p>Loading Metal Data...</p>
      </div>
    );
  }

  return children;
};

// Lists & Keys
const MetalSongList = ({ songs }) => (
  <ul className="song-list">
    {songs.map(song => (
      <li key={song.id} className="song-item">
        <span className="song-title">{song.title}</span>
        <span className="song-artist">{song.artist}</span>
        <span className="song-duration">{song.duration}</span>
      </li>
    ))}
  </ul>
);

// Event Handling
const MetalForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log('Form Data:', data);
  };

  return (
    <form onSubmit={handleSubmit} className="metal-form">
      <input name="bandName" placeholder="Band Name" required />
      <input name="genre" placeholder="Metal Genre" required />
      <button type="submit">🤘 Submit</button>
    </form>
  );
};`,
            explanation:
              "JSX ermöglicht HTML-ähnliche Syntax in JavaScript mit mächtigen Features.",
          },
          {
            title: "Komponenten-Composition",
            code: `// Higher-Order Component Pattern
const withMetalTheme = (WrappedComponent) => {
  return (props) => (
    <div className="metal-theme">
      <WrappedComponent {...props} />
    </div>
  );
};

// Render Props Pattern
const MetalDataFetcher = ({ children, url }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return children({ data, loading });
};

// Usage
const App = () => (
  <MetalDataFetcher url="/api/metal-bands">
    {({ data, loading }) => (
      loading ? <div>Loading...</div> : <BandsList bands={data} />
    )}
  </MetalDataFetcher>
);

// Compound Components
const MetalTabs = ({ children, defaultTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  
  return (
    <div className="metal-tabs">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, { 
          isActive: index === activeTab,
          onSelect: () => setActiveTab(index)
        })
      )}
    </div>
  );
};`,
            explanation:
              "Composition Patterns ermöglichen flexible und wiederverwendbare Komponenten-Architekturen.",
          },
        ],
      },
      pageNumber: 8,
      allowNotes: true,
    },

    // Hooks & State
    {
      id: "hooks-state",
      type: "content",
      title: "3. Hooks & State",
      content: {
        sections: [
          {
            title: "useState & useEffect",
            code: `// useState für lokalen State
const MetalCounter = () => {
  const [count, setCount] = useState(0);
  const [isRocking, setIsRocking] = useState(false);

  const increment = () => {
    setCount(prev => prev + 1);
    setIsRocking(true);
    setTimeout(() => setIsRocking(false), 300);
  };

  return (
    <div className={\`counter \${isRocking ? 'rocking' : ''}\`}>
      <h2>Metal Counter: {count}</h2>
      <button onClick={increment}>🤘 Rock It!</button>
    </div>
  );
};

// useEffect für Side Effects
const MetalBandInfo = ({ bandId }) => {
  const [band, setBand] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBand = async () => {
      try {
        setLoading(true);
        const response = await fetch(\`/api/bands/\${bandId}\`);
        if (!response.ok) throw new Error('Band not found');
        const bandData = await response.json();
        setBand(bandData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (bandId) fetchBand();
  }, [bandId]); // Dependency array

  if (loading) return <div>Loading band info...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!band) return <div>No band selected</div>;

  return (
    <div className="band-info">
      <h3>{band.name}</h3>
      <p>Genre: {band.genre}</p>
      <p>Formed: {band.formed}</p>
    </div>
  );
};`,
            explanation:
              "useState und useEffect sind die wichtigsten Hooks für State-Management und Side Effects.",
          },
          {
            title: "Custom Hooks",
            code: `// Custom Hook für API Calls
const useMetalApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(url);
        if (!response.ok) throw new Error('API Error');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  const refetch = () => {
    setData(null);
    setError(null);
    setLoading(true);
  };

  return { data, loading, error, refetch };
};

// Custom Hook für Local Storage
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(\`Error saving to localStorage: \${error}\`);
    }
  };

  return [storedValue, setValue];
};

// Usage
const MetalPreferences = () => {
  const [preferences, setPreferences] = useLocalStorage('metalPrefs', {
    volume: 11,
    genre: 'Death Metal'
  });

  return (
    <div>
      <h3>Metal Preferences</h3>
      <p>Volume: {preferences.volume}</p>
      <p>Genre: {preferences.genre}</p>
    </div>
  );
};`,
            explanation:
              "Custom Hooks ermöglichen die Wiederverwendung von Stateful Logic zwischen Komponenten.",
          },
        ],
      },
      pageNumber: 15,
      allowNotes: true,
    },

    // Context & Zustand
    {
      id: "context-state",
      type: "content",
      title: "4. Context & Zustand",
      content: {
        sections: [
          {
            title: "React Context API",
            code: `// Context erstellen
const MetalThemeContext = createContext();

// Context Provider
const MetalThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [volume, setVolume] = useState(8);

  const value = {
    theme,
    setTheme,
    volume,
    setVolume,
    toggleTheme: () => setTheme(prev => prev === 'dark' ? 'light' : 'dark'),
    crankUp: () => setVolume(prev => Math.min(prev + 1, 11))
  };

  return (
    <MetalThemeContext.Provider value={value}>
      <div className={\`app-theme-\${theme}\`}>
        {children}
      </div>
    </MetalThemeContext.Provider>
  );
};

// Custom Hook für Context
const useMetalTheme = () => {
  const context = useContext(MetalThemeContext);
  if (!context) {
    throw new Error('useMetalTheme must be used within MetalThemeProvider');
  }
  return context;
};

// Context Consumer
const VolumeControl = () => {
  const { volume, crankUp, setVolume } = useMetalTheme();

  return (
    <div className="volume-control">
      <h3>Volume: {volume}</h3>
      <button onClick={crankUp}>🔊 Crank Up!</button>
      <input 
        type="range" 
        min="0" 
        max="11" 
        value={volume}
        onChange={(e) => setVolume(Number(e.target.value))}
      />
    </div>
  );
};`,
            explanation:
              "Context API ermöglicht das Teilen von State zwischen Komponenten ohne Prop Drilling.",
          },
        ],
      },
      pageNumber: 22,
      allowNotes: true,
    },

    // Performance
    {
      id: "performance",
      type: "content",
      title: "5. Performance Optimierung",
      content: {
        sections: [
          {
            title: "React.memo & useCallback",
            code: `// React.memo für Komponenten-Memoization
const ExpensiveMetalComponent = React.memo(({ band, albums }) => {
  console.log('Rendering ExpensiveMetalComponent');
  
  return (
    <div className="band-details">
      <h3>{band.name}</h3>
      <ul>
        {albums.map(album => (
          <li key={album.id}>{album.title} ({album.year})</li>
        ))}
      </ul>
    </div>
  );
});

// useCallback für Funktions-Memoization
const MetalBandManager = () => {
  const [bands, setBands] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Ohne useCallback würde diese Funktion bei jedem Render neu erstellt
  const addBand = useCallback((newBand) => {
    setBands(prev => [...prev, { ...newBand, id: Date.now() }]);
  }, []);

  const removeBand = useCallback((bandId) => {
    setBands(prev => prev.filter(band => band.id !== bandId));
  }, []);

  const filteredBands = useMemo(() => {
    return bands.filter(band => 
      band.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [bands, searchTerm]);

  return (
    <div>
      <input 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search bands..."
      />
      <BandList 
        bands={filteredBands}
        onAddBand={addBand}
        onRemoveBand={removeBand}
      />
    </div>
  );
};

// useMemo für teure Berechnungen
const MetalStats = ({ concerts }) => {
  const statistics = useMemo(() => {
    const totalAttendees = concerts.reduce((sum, concert) => sum + concert.attendees, 0);
    const averageRating = concerts.reduce((sum, concert) => sum + concert.rating, 0) / concerts.length;
    const topGenres = concerts
      .reduce((acc, concert) => {
        acc[concert.genre] = (acc[concert.genre] || 0) + 1;
        return acc;
      }, {});

    return { totalAttendees, averageRating, topGenres };
  }, [concerts]);

  return (
    <div className="metal-stats">
      <h3>Concert Statistics</h3>
      <p>Total Attendees: {statistics.totalAttendees}</p>
      <p>Average Rating: {statistics.averageRating.toFixed(1)}</p>
    </div>
  );
};`,
            explanation:
              "Performance-Optimierung durch Memoization verhindert unnötige Re-Renders und Berechnungen.",
          },
        ],
      },
      pageNumber: 28,
      allowNotes: true,
    },

    // Routing & Navigation
    {
      id: "routing",
      type: "content",
      title: "6. Routing & Navigation",
      content: {
        sections: [
          {
            title: "React Router Setup",
            code: `// App.js mit Router Setup
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <div className="metal-app">
      <MetalNavigation />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bands" element={<BandsPage />} />
          <Route path="/bands/:id" element={<BandDetailPage />} />
          <Route path="/concerts" element={<ConcertsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>
);

// Navigation Komponente
const MetalNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="metal-nav">
      <Link to="/" className="logo">🤘 Metal-IT</Link>
      <ul className="nav-links">
        <li>
          <Link 
            to="/bands" 
            className={location.pathname.startsWith('/bands') ? 'active' : ''}
          >
            Bands
          </Link>
        </li>
        <li>
          <Link 
            to="/concerts"
            className={location.pathname === '/concerts' ? 'active' : ''}
          >
            Concerts
          </Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
      <button onClick={() => navigate(-1)}>← Back</button>
    </nav>
  );
};

// Band Detail mit URL Parameter
const BandDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [band, setBand] = useState(null);

  useEffect(() => {
    const fetchBand = async () => {
      try {
        const response = await fetch(\`/api/bands/\${id}\`);
        const bandData = await response.json();
        setBand(bandData);
      } catch (error) {
        navigate('/bands', { replace: true });
      }
    };

    fetchBand();
  }, [id, navigate]);

  if (!band) return <div>Loading...</div>;

  return (
    <div className="band-detail">
      <h1>{band.name}</h1>
      <p>Genre: {band.genre}</p>
      <p>Formed: {band.formed}</p>
      <Link to="/bands">← Back to Bands</Link>
    </div>
  );
};`,
            explanation:
              "React Router ermöglicht client-side Routing für Single Page Applications.",
          },
        ],
      },
      pageNumber: 35,
      allowNotes: true,
    },

    // Benutzer Notizen
    {
      id: "user-notes",
      type: "user-notes",
      title: "7. Deine React Notizen & Projekte",
      pageNumber: 42,
      allowNotes: true,
      isUserSection: true,
    },
  ];

  /**
   * Buch öffnen/schließen mit 3D-Rotation
   */
  const toggleBook = () => {
    if (!isFlipping) {
      setIsOpen((prev) => {
        const newState = !prev;
        if (newState && currentPage === 0) {
          // Beim Öffnen automatisch zum Inhaltsverzeichnis
          setTimeout(() => setCurrentPage(1), 800);
        }
        console.log(`📖 React Buch ${newState ? "geöffnet" : "geschlossen"}`);
        return newState;
      });
    }
  };

  /**
   * Seite umblättern mit realistischer Animation
   */
  const flipPage = (direction) => {
    if (isFlipping) return;

    const totalPages = bookStructure.length + dynamicPages.length;
    setIsFlipping(true);

    if (direction === "next" && currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === "prev" && currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }

    // Realistische Blätter-Animation
    setTimeout(() => setIsFlipping(false), 1200);
    console.log(
      `📄 Seite ${direction}: ${currentPage + 1} (Total: ${totalPages})`
    );
  };

  /**
   * Springe zu bestimmter Seite (erweitert für dynamische Seiten)
   */
  const jumpToPage = (pageIndex) => {
    const totalPages = bookStructure.length + dynamicPages.length;

    if (!isFlipping && pageIndex >= 0 && pageIndex < totalPages) {
      setIsFlipping(true);
      setCurrentPage(pageIndex);
      setTimeout(() => setIsFlipping(false), 800);
      console.log(
        `🔖 Sprung zu Seite: ${pageIndex + 1} (${
          pageIndex < bookStructure.length ? "Statisch" : "Dynamisch"
        })`
      );
    }
  };

  /**
   * Zu dynamischer Benutzer-Seite navigieren
   */
  const navigateToUserPage = (pageId) => {
    const dynamicPageIndex = dynamicPages.findIndex(
      (page) => page.id === pageId
    );
    if (dynamicPageIndex !== -1) {
      const pageIndex = bookStructure.length + dynamicPageIndex;
      jumpToPage(pageIndex);
    }
  };

  /**
   * Dynamische Seite aktualisieren
   */
  const updateDynamicPage = (pageId, updates) => {
    setDynamicPages((prev) =>
      prev.map((page) =>
        page.id === pageId
          ? { ...page, ...updates, updatedAt: new Date().toISOString() }
          : page
      )
    );
  };

  /**
   * Sektion zu dynamischer Seite hinzufügen
   */
  const addSectionToDynamicPage = (pageId, sectionData) => {
    setDynamicPages((prev) =>
      prev.map((page) => {
        if (page.id === pageId) {
          const newSection = {
            id: `section_${Date.now()}`,
            title: sectionData.title || "Neue Sektion",
            content: sectionData.content || "",
            type: sectionData.type || "text",
            createdAt: new Date().toISOString(),
          };

          return {
            ...page,
            sections: [...page.sections, newSection],
            updatedAt: new Date().toISOString(),
          };
        }
        return page;
      })
    );
  };

  /**
   * Lesezeichen setzen/entfernen
   */
  const toggleBookmark = (pageId) => {
    setBookmarks((prev) => {
      const newBookmarks = new Set(prev);
      if (newBookmarks.has(pageId)) {
        newBookmarks.delete(pageId);
      } else {
        newBookmarks.add(pageId);
      }
      return newBookmarks;
    });
  };

  /**
   * Benutzer-Notiz bearbeiten
   */
  const handleNoteEdit = (pageId, noteText) => {
    setUserNotes((prev) => ({
      ...prev,
      [pageId]: noteText,
    }));
    console.log(`📝 React Notiz gespeichert für Seite: ${pageId}`);
  };

  /**
   * Notiz-Editor öffnen/schließen
   */
  const toggleNoteEditor = (pageId) => {
    setEditingNote(editingNote === pageId ? null : pageId);
  };

  /**
   * === DYNAMISCHE BENUTZER-EINTRÄGE SYSTEM ===
   */

  /**
   * Neuen Benutzer-Eintrag hinzufügen
   */
  const addUserEntry = (pageId, entryData) => {
    const entryId = `entry_${Date.now()}_${Math.random()
      .toString(36)
      .substr(2, 9)}`;

    // Wenn es ein Inhaltsverzeichnis-Eintrag ist, erstelle eine neue dynamische Seite
    if (pageId === "table-of-contents") {
      const newPageId = `user_page_${entryId}`;
      const newPageNumber = bookStructure.length + dynamicPages.length + 1;

      const newDynamicPage = {
        id: newPageId,
        type: "user-content",
        title: entryData.title,
        content: entryData.content,
        pageNumber: newPageNumber,
        allowNotes: true,
        createdAt: new Date().toISOString(),
        originalEntryId: entryId,
        sections: [
          {
            title: "Hauptinhalt",
            content: entryData.content,
            type: entryData.type,
          },
        ],
      };

      setDynamicPages((prev) => [...prev, newDynamicPage]);

      // Füge den Eintrag ins Inhaltsverzeichnis ein
      setUserEntries((prev) => ({
        ...prev,
        [pageId]: {
          ...prev[pageId],
          [entryId]: {
            id: entryId,
            title: entryData.title,
            content: entryData.content,
            type: entryData.type,
            pageNumber: newPageNumber,
            linkedPageId: newPageId,
            isClickable: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
        },
      }));

      console.log(
        `➕ Neue dynamische Seite erstellt: ${newPageId} mit Eintrag ${entryId}`
      );
    } else {
      // Normaler Eintrag für andere Seiten
      setUserEntries((prev) => ({
        ...prev,
        [pageId]: {
          ...prev[pageId],
          [entryId]: {
            id: entryId,
            title: entryData.title || "Neuer Eintrag",
            content: entryData.content || "",
            type: entryData.type || "text",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
        },
      }));
      console.log(
        `➕ Neuer Eintrag hinzugefügt: ${entryId} auf Seite ${pageId}`
      );
    }
  };

  /**
   * Benutzer-Eintrag bearbeiten
   */
  const updateUserEntry = (pageId, entryId, entryData) => {
    setUserEntries((prev) => ({
      ...prev,
      [pageId]: {
        ...prev[pageId],
        [entryId]: {
          ...prev[pageId][entryId],
          ...entryData,
          updatedAt: new Date().toISOString(),
        },
      },
    }));
    console.log(`✏️ Eintrag aktualisiert: ${entryId}`);
  };

  /**
   * Einzelnen Benutzer-Eintrag löschen
   */
  const deleteUserEntry = (pageId, entryId) => {
    setUserEntries((prev) => {
      const pageCopy = { ...prev[pageId] };
      delete pageCopy[entryId];
      return {
        ...prev,
        [pageId]: pageCopy,
      };
    });
    console.log(`🗑️ Eintrag gelöscht: ${entryId}`);
    setShowDeleteConfirm(null);
    setEntryToDelete(null);
  };

  /**
   * Alle Einträge einer Seite löschen
   */
  const deleteAllPageEntries = (pageId) => {
    setUserEntries((prev) => ({
      ...prev,
      [pageId]: {},
    }));
    console.log(`🗑️ Alle Einträge von Seite ${pageId} gelöscht`);
  };

  /**
   * Komplett-Reset: Alle Benutzer-Einträge löschen
   */
  const resetAllUserEntries = () => {
    setUserEntries({});
    setUserNotes({});
    setDynamicPages([]);
    console.log(
      "🔄 Alle Benutzer-Einträge und dynamische Seiten zurückgesetzt"
    );
  };

  /**
   * Eintrag-Editor öffnen/schließen
   */
  const toggleEntryEditor = (entryId) => {
    setEditingEntry(editingEntry === entryId ? null : entryId);
  };

  /**
   * Lösch-Bestätigung anzeigen
   */
  const confirmDelete = (pageId, entryId) => {
    setEntryToDelete({ pageId, entryId });
    setShowDeleteConfirm(entryId);
  };

  /**
   * Anzahl der Benutzer-Einträge pro Seite zählen
   */
  const getUserEntryCount = (pageId) => {
    return userEntries[pageId] ? Object.keys(userEntries[pageId]).length : 0;
  };

  /**
   * Gesamtanzahl aller Benutzer-Einträge
   */
  const getTotalUserEntries = () => {
    return Object.values(userEntries).reduce((total, pageEntries) => {
      return total + Object.keys(pageEntries).length;
    }, 0);
  };

  /**
   * Code-Templates für schnelle Eingabe
   */
  const codeTemplates = {
    react: {
      component: `// React Functional Component
import React, { useState } from 'react';

const MyComponent = () => {
  const [state, setState] = useState('');

  return (
    <div>
      <h1>Mein Component</h1>
      <p>{state}</p>
    </div>
  );
};

export default MyComponent;`,
      hook: `// Custom React Hook
import { useState, useEffect } from 'react';

const useMyHook = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    // Hook Logic hier
  }, [value]);

  return [value, setValue];
};

export default useMyHook;`,
      context: `// React Context
import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [data, setData] = useState({});

  return (
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);`,
    },
    javascript: `// JavaScript Beispiel
function myFunction(param) {
  // Dein Code hier
  return param;
}

// Verwendung
const result = myFunction('test');
console.log(result);`,
    css: `/* CSS Styling */
.my-class {
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #000, #333);
  border-radius: 10px;
  padding: 1rem;
}`,
    html: `<!-- HTML Struktur -->
<div class="container">
  <header>
    <h1>Meine Seite</h1>
  </header>
  <main>
    <p>Inhalt hier</p>
  </main>
  <footer>
    <p>&copy; 2025</p>
  </footer>
</div>`,
  };

  /**
   * Add-Modal öffnen mit Templates
   */
  const openAddModal = (pageId) => {
    setShowAddModal(pageId);
    setNewEntryData({ title: "", content: "", type: "code" });
  };

  /**
   * Template auswählen
   */
  const selectTemplate = (templateKey, subKey = null) => {
    let content = "";
    let title = "";

    if (subKey && codeTemplates[templateKey][subKey]) {
      content = codeTemplates[templateKey][subKey];
      title = `${templateKey.charAt(0).toUpperCase() + templateKey.slice(1)} ${
        subKey.charAt(0).toUpperCase() + subKey.slice(1)
      }`;
    } else if (codeTemplates[templateKey]) {
      content = codeTemplates[templateKey];
      title =
        templateKey.charAt(0).toUpperCase() +
        templateKey.slice(1) +
        " Beispiel";
    }

    setNewEntryData({
      ...newEntryData,
      title,
      content,
      type: "code",
    });
  };

  /**
   * Neuen Eintrag aus Modal hinzufügen
   */
  const addEntryFromModal = () => {
    if (newEntryData.title && newEntryData.content) {
      addUserEntry(showAddModal, newEntryData);
      setShowAddModal(null);
      setNewEntryData({ title: "", content: "", type: "code" });
    }
  };

  /**
   * Navigation mit Keyboard
   */
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isOpen) return;

      switch (e.key) {
        case "ArrowLeft":
        case "PageUp":
          flipPage("prev");
          break;
        case "ArrowRight":
        case "PageDown":
          flipPage("next");
          break;
        case "Home":
          jumpToPage(1); // Inhaltsverzeichnis
          break;
        case "End":
          jumpToPage(bookStructure.length - 1);
          break;
        case "Escape":
          setIsOpen(false);
          break;
        case "t":
        case "T":
          setShowTableOfContents(true);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isOpen, currentPage]);

  // Aktuelle Seite bestimmen (statisch oder dynamisch)
  const currentPageData =
    currentPage < bookStructure.length
      ? bookStructure[currentPage]
      : dynamicPages[currentPage - bookStructure.length];
  const nextPageData =
    currentPage + 1 < bookStructure.length
      ? bookStructure[currentPage + 1]
      : null;

  return (
    <div className="realistic-react-book-container">
      {/* 3D Buch mit echter Perspektive */}
      <div
        ref={bookRef}
        className={`realistic-react-book ${isOpen ? "open" : "closed"} ${
          isFlipping ? "flipping" : ""
        }`}
        onClick={!isOpen ? toggleBook : undefined}
      >
        {/* Buch-Cover */}
        <div className="book-cover-3d">
          <div className="cover-front">
            <div className="cover-design">
              <div className="metal-pattern"></div>
              <div className="cover-content">
                <div className="cover-logo">⚛️</div>
                <h3 className="cover-title">React Mastery</h3>
                <p className="cover-subtitle">
                  Das vollständige React Handbuch
                </p>
                <p className="cover-author">Metal-IT Academy</p>
                <div className="cover-badges">
                  <span className="react-badge">React</span>
                  <span className="jsx-badge">JSX</span>
                </div>
              </div>
            </div>
          </div>

          <div className="book-spine">
            <span className="spine-text">React Mastery</span>
          </div>

          <div className="cover-back">
            <div className="back-content">
              <p>
                Moderne React-Entwicklung mit Hooks, Context und Performance
              </p>
            </div>
          </div>
        </div>

        {/* Buch-Seiten */}
        {isOpen && (
          <div className="book-pages-3d">
            {/* Linke Seite */}
            <div className="page left-page">
              {currentPage > 0 && (
                <div className="page-content">
                  {bookStructure[currentPage - 1] &&
                    renderPageContent(bookStructure[currentPage - 1])}
                </div>
              )}
            </div>

            {/* Rechte Seite */}
            <div className="page right-page">
              <div className="page-content">
                {renderPageContent(currentPageData)}
              </div>
            </div>

            {/* Seiten-Trennlinie */}
            <div className="page-separator"></div>
          </div>
        )}

        {/* Buch-Schatten */}
        <div className="book-shadow"></div>
      </div>

      {/* Buch-Steuerung */}
      {isOpen && (
        <>
          {/* Seiten-Navigation */}
          <div className="book-navigation">
            <button
              className="nav-btn prev-btn"
              onClick={() => flipPage("prev")}
              disabled={currentPage === 0 || isFlipping}
            >
              ◀ Zurück
            </button>

            <div className="page-info">
              <span className="page-counter">
                Seite {currentPageData.pageNumber || currentPage + 1}
              </span>
              {bookmarks.has(currentPageData.id) && (
                <span className="bookmark-indicator">🔖</span>
              )}
            </div>

            <button
              className="nav-btn next-btn"
              onClick={() => flipPage("next")}
              disabled={currentPage >= bookStructure.length - 1 || isFlipping}
            >
              Weiter ▶
            </button>
          </div>

          {/* Buch-Aktionen */}
          <div className="book-actions">
            <button
              className="action-btn toc-btn"
              onClick={() => jumpToPage(1)}
            >
              📚 Inhaltsverzeichnis
            </button>

            {currentPageData.allowNotes && (
              <button
                className="action-btn note-btn"
                onClick={() => toggleNoteEditor(currentPageData.id)}
              >
                📝 Notiz hinzufügen
              </button>
            )}

            <button
              className="action-btn bookmark-btn"
              onClick={() => toggleBookmark(currentPageData.id)}
            >
              {bookmarks.has(currentPageData.id)
                ? "🔖 Lesezeichen entfernen"
                : "🔖 Lesezeichen setzen"}
            </button>

            <button
              className="action-btn close-btn"
              onClick={() => setIsOpen(false)}
            >
              ✕ Buch schließen
            </button>
          </div>
        </>
      )}

      {/* Notiz-Editor */}
      {editingNote && (
        <div className="note-editor-overlay">
          <div className="note-editor">
            <h4>📝 Notiz für: {currentPageData.title}</h4>
            <textarea
              value={userNotes[editingNote] || ""}
              onChange={(e) => handleNoteEdit(editingNote, e.target.value)}
              placeholder="Deine React-Notizen, Komponenten-Ideen und Projektkonzepte..."
              rows={8}
            />
            <div className="editor-actions">
              <button className="save-btn" onClick={() => setEditingNote(null)}>
                💾 Speichern
              </button>
              <button
                className="cancel-btn"
                onClick={() => setEditingNote(null)}
              >
                ❌ Abbrechen
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Keyboard Help */}
      {isOpen && (
        <div className="keyboard-help">
          <div className="help-items">
            <span>← → Blättern</span>
            <span>Home Inhalt</span>
            <span>T Inhaltsverzeichnis</span>
            <span>ESC Schließen</span>
          </div>
        </div>
      )}

      {/* === LÖSCH-BESTÄTIGUNGS-MODAL === */}
      {showDeleteConfirm && entryToDelete && (
        <div className="delete-confirm-modal">
          <div
            className="modal-overlay"
            onClick={() => setShowDeleteConfirm(null)}
          />
          <div className="modal-content">
            <div className="modal-header">
              <h3>🗑️ Eintrag löschen</h3>
            </div>
            <div className="modal-body">
              <p>Möchtest du diesen Eintrag wirklich löschen?</p>
              <p className="warning-text">
                ⚠️ Diese Aktion kann nicht rückgängig gemacht werden!
              </p>
            </div>
            <div className="modal-actions">
              <button
                className="confirm-delete-btn"
                onClick={() =>
                  deleteUserEntry(entryToDelete.pageId, entryToDelete.entryId)
                }
              >
                🗑️ Ja, löschen
              </button>
              <button
                className="cancel-delete-btn"
                onClick={() => setShowDeleteConfirm(null)}
              >
                ❌ Abbrechen
              </button>
            </div>
          </div>
        </div>
      )}

      {/* === NEUEN EINTRAG HINZUFÜGEN MODAL === */}
      {showAddModal && (
        <div className="add-entry-modal">
          <div
            className="modal-overlay"
            onClick={() => setShowAddModal(null)}
          />
          <div className="modal-content large-modal">
            <div className="modal-header">
              <h3>➕ Neuen Eintrag hinzufügen</h3>
              <button
                className="modal-close"
                onClick={() => setShowAddModal(null)}
              >
                ❌
              </button>
            </div>

            <div className="modal-body">
              {/* Code Templates Sektion */}
              <div className="templates-section">
                <h4>🚀 Schnell-Templates</h4>
                <div className="template-buttons">
                  <div className="template-group">
                    <h5>⚛️ React</h5>
                    <button
                      onClick={() => selectTemplate("react", "component")}
                    >
                      📦 Component
                    </button>
                    <button onClick={() => selectTemplate("react", "hook")}>
                      🪝 Hook
                    </button>
                    <button onClick={() => selectTemplate("react", "context")}>
                      🔄 Context
                    </button>
                  </div>
                  <div className="template-group">
                    <h5>💻 Basis</h5>
                    <button onClick={() => selectTemplate("javascript")}>
                      JS
                    </button>
                    <button onClick={() => selectTemplate("css")}>CSS</button>
                    <button onClick={() => selectTemplate("html")}>HTML</button>
                  </div>
                  <div className="template-group">
                    <h5>📝 Leer</h5>
                    <button
                      onClick={() =>
                        setNewEntryData({
                          ...newEntryData,
                          type: "text",
                          content: "",
                          title: "Neue Notiz",
                        })
                      }
                    >
                      Notiz
                    </button>
                    <button
                      onClick={() =>
                        setNewEntryData({
                          ...newEntryData,
                          type: "code",
                          content: "// Dein Code hier...",
                          title: "Neuer Code",
                        })
                      }
                    >
                      Code
                    </button>
                  </div>
                </div>
              </div>

              {/* Eintrag Editor */}
              <div className="entry-form">
                <div className="form-row">
                  <input
                    type="text"
                    placeholder="📝 Titel eingeben..."
                    value={newEntryData.title}
                    onChange={(e) =>
                      setNewEntryData({
                        ...newEntryData,
                        title: e.target.value,
                      })
                    }
                    className="title-input"
                  />
                  <select
                    value={newEntryData.type}
                    onChange={(e) =>
                      setNewEntryData({ ...newEntryData, type: e.target.value })
                    }
                    className="type-select"
                  >
                    <option value="code">💻 Code</option>
                    <option value="text">📝 Text/Notiz</option>
                    <option value="note">📋 Wichtige Notiz</option>
                  </select>
                </div>

                <div className="content-editor">
                  <textarea
                    placeholder={
                      newEntryData.type === "code"
                        ? "// Dein Code hier..."
                        : "Deine Notizen hier..."
                    }
                    value={newEntryData.content}
                    onChange={(e) =>
                      setNewEntryData({
                        ...newEntryData,
                        content: e.target.value,
                      })
                    }
                    className="content-textarea"
                    rows="12"
                  />
                </div>

                {/* Live Preview für Code */}
                {newEntryData.type === "code" && newEntryData.content && (
                  <div className="code-preview">
                    <h5>👀 Vorschau:</h5>
                    <pre className="preview-code-block">
                      <code>{newEntryData.content}</code>
                    </pre>
                  </div>
                )}
              </div>
            </div>

            <div className="modal-actions">
              <button
                className="add-btn"
                onClick={addEntryFromModal}
                disabled={!newEntryData.title || !newEntryData.content}
              >
                ➕ Eintrag hinzufügen
              </button>
              <button
                className="cancel-btn"
                onClick={() => setShowAddModal(null)}
              >
                ❌ Abbrechen
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  /**
   * Rendert den Inhalt einer Buchseite
   */
  function renderPageContent(pageData) {
    if (!pageData) return null;

    switch (pageData.type) {
      case "cover":
        return (
          <div className="cover-page">
            <div className="cover-page-content">
              <h1>{pageData.title}</h1>
              <h2>{pageData.subtitle}</h2>
              <p className="author">{pageData.author}</p>
              <p className="version">{pageData.version}</p>
            </div>
          </div>
        );

      case "table-of-contents":
        return (
          <div className="toc-page">
            <h2>{pageData.title}</h2>

            {/* Benutzer-Einträge Statistik */}
            <div className="user-entries-stats">
              <div className="stats-item">
                📝 Deine Einträge: <strong>{getTotalUserEntries()}</strong>
              </div>
              <div className="stats-item">
                📋 Notizen: <strong>{Object.keys(userNotes).length}</strong>
              </div>
              <button
                className="reset-all-btn"
                onClick={() => {
                  if (window.confirm("🔄 Alle Einträge und Notizen löschen?")) {
                    resetAllUserEntries();
                  }
                }}
              >
                🔄 Alles zurücksetzen
              </button>
            </div>

            {/* Hauptkapitel */}
            <div className="toc-entries">
              {pageData.chapters.map((chapter, index) => {
                const chapterPageId = bookStructure.find(
                  (page) => page.title === chapter.title
                )?.id;
                const entryCount = getUserEntryCount(chapterPageId);

                return (
                  <div
                    key={index}
                    className="toc-entry"
                    onClick={() => jumpToPage(chapter.page)}
                  >
                    <span className="chapter-icon">{chapter.icon}</span>
                    <span className="chapter-title">{chapter.title}</span>
                    {entryCount > 0 && (
                      <span className="entry-count">+{entryCount}</span>
                    )}
                    <div className="toc-dots"></div>
                    <span className="chapter-page">{chapter.page}</span>
                  </div>
                );
              })}
            </div>

            {/* Dynamische Benutzer-Einträge hinzufügen */}
            <div className="add-user-entry-section">
              <h3>🆕 Neuen Eintrag hinzufügen</h3>
              <button
                className="add-entry-btn"
                onClick={() => openAddModal("table-of-contents")}
              >
                ➕ Eintrag hinzufügen
              </button>
            </div>

            {/* Benutzer-Einträge anzeigen */}
            {userEntries["table-of-contents"] &&
              Object.keys(userEntries["table-of-contents"]).length > 0 && (
                <div className="user-entries-section">
                  <h3>📚 Deine eigenen Kapitel</h3>
                  {Object.values(userEntries["table-of-contents"]).map(
                    (entry) => (
                      <div key={entry.id} className="user-toc-entry">
                        {/* Klickbarer Inhaltsverzeichnis-Eintrag */}
                        <div
                          className="toc-entry clickable-entry"
                          onClick={() => navigateToUserPage(entry.linkedPageId)}
                        >
                          <span className="chapter-icon">📄</span>
                          <span className="chapter-title">{entry.title}</span>
                          <div className="toc-dots"></div>
                          <span className="chapter-page">
                            {entry.pageNumber}
                          </span>
                        </div>

                        {/* Aktionen für den Eintrag */}
                        <div className="entry-actions-bar">
                          <button
                            className="edit-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleEntryEditor(entry.id);
                            }}
                            title="Titel bearbeiten"
                          >
                            ✏️ Titel
                          </button>
                          <button
                            className="page-edit-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              navigateToUserPage(entry.linkedPageId);
                            }}
                            title="Seite bearbeiten"
                          >
                            📝 Seite öffnen
                          </button>
                          <button
                            className="delete-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              confirmDelete("table-of-contents", entry.id);
                            }}
                            title="Kapitel löschen"
                          >
                            🗑️
                          </button>
                        </div>

                        {editingEntry === entry.id && (
                          <div className="quick-edit-form">
                            <input
                              type="text"
                              value={entry.title}
                              onChange={(e) => {
                                updateUserEntry("table-of-contents", entry.id, {
                                  title: e.target.value,
                                });
                                // Aktualisiere auch die verlinkte Seite
                                updateDynamicPage(entry.linkedPageId, {
                                  title: e.target.value,
                                });
                              }}
                              placeholder="Kapitel-Titel..."
                              className="title-quick-edit"
                            />
                            <div className="quick-edit-actions">
                              <button onClick={() => setEditingEntry(null)}>
                                💾 Speichern
                              </button>
                              <button onClick={() => setEditingEntry(null)}>
                                ❌ Abbrechen
                              </button>
                            </div>
                          </div>
                        )}

                        {/* Kurze Vorschau des Seiteninhalts */}
                        <div className="entry-preview-short">
                          <p>
                            {entry.content.length > 100
                              ? entry.content.substring(0, 100) + "..."
                              : entry.content}
                          </p>
                          <small>
                            Erstellt:{" "}
                            {new Date(entry.createdAt).toLocaleDateString(
                              "de-DE"
                            )}
                          </small>
                        </div>
                      </div>
                    )
                  )}
                </div>
              )}
          </div>
        );

      case "content":
        return (
          <div className="content-page">
            <h2>{pageData.title}</h2>

            {/* Original Content */}
            {pageData.content.sections.map((section, index) => (
              <div key={index} className="content-section">
                <h3>{section.title}</h3>
                <pre className="code-block">
                  <code>{section.code}</code>
                </pre>
                <p className="explanation">{section.explanation}</p>
              </div>
            ))}

            {/* Benutzer-Einträge Sektion */}
            <div className="user-content-section">
              <div className="user-section-header">
                <h3>🆕 Deine Einträge ({getUserEntryCount(pageData.id)})</h3>
                <div className="section-actions">
                  <button
                    className="add-entry-btn"
                    onClick={() => openAddModal(pageData.id)}
                  >
                    ➕ Eintrag
                  </button>
                  {getUserEntryCount(pageData.id) > 0 && (
                    <button
                      className="delete-all-btn"
                      onClick={() => {
                        if (
                          window.confirm(
                            `🗑️ Alle ${getUserEntryCount(
                              pageData.id
                            )} Einträge löschen?`
                          )
                        ) {
                          deleteAllPageEntries(pageData.id);
                        }
                      }}
                    >
                      🗑️ Alle löschen
                    </button>
                  )}
                </div>
              </div>

              {/* Benutzer-Einträge anzeigen */}
              {userEntries[pageData.id] &&
                Object.keys(userEntries[pageData.id]).length > 0 && (
                  <div className="user-entries-list">
                    {Object.values(userEntries[pageData.id]).map((entry) => (
                      <div key={entry.id} className="user-entry-item">
                        <div className="entry-header">
                          <span className="entry-title">
                            {entry.type === "code" ? "💻" : "📝"} {entry.title}
                          </span>
                          <div className="entry-meta">
                            <span className="entry-date">
                              {new Date(entry.updatedAt).toLocaleDateString(
                                "de-DE"
                              )}
                            </span>
                            <div className="entry-actions">
                              <button
                                className="edit-btn"
                                onClick={() => toggleEntryEditor(entry.id)}
                                title="Bearbeiten"
                              >
                                ✏️
                              </button>
                              <button
                                className="delete-btn"
                                onClick={() =>
                                  confirmDelete(pageData.id, entry.id)
                                }
                                title="Löschen"
                              >
                                🗑️
                              </button>
                            </div>
                          </div>
                        </div>

                        {editingEntry === entry.id ? (
                          <div className="entry-editor">
                            <input
                              type="text"
                              value={entry.title}
                              onChange={(e) =>
                                updateUserEntry(pageData.id, entry.id, {
                                  title: e.target.value,
                                })
                              }
                              placeholder="Titel..."
                              className="entry-title-input"
                            />
                            <select
                              value={entry.type}
                              onChange={(e) =>
                                updateUserEntry(pageData.id, entry.id, {
                                  type: e.target.value,
                                })
                              }
                              className="entry-type-select"
                            >
                              <option value="text">📝 Text/Notiz</option>
                              <option value="code">💻 Code</option>
                              <option value="note">📋 Wichtige Notiz</option>
                            </select>
                            <textarea
                              value={entry.content}
                              onChange={(e) =>
                                updateUserEntry(pageData.id, entry.id, {
                                  content: e.target.value,
                                })
                              }
                              placeholder={
                                entry.type === "code"
                                  ? "// Dein Code hier..."
                                  : "Deine Notizen hier..."
                              }
                              className="entry-content-textarea"
                              rows="6"
                            />
                            <div className="editor-buttons">
                              <button
                                className="save-btn"
                                onClick={() => setEditingEntry(null)}
                              >
                                💾 Speichern
                              </button>
                              <button
                                className="cancel-btn"
                                onClick={() => setEditingEntry(null)}
                              >
                                ❌ Abbrechen
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="entry-preview">
                            {entry.type === "code" ? (
                              <pre className="user-code-block">
                                <code>{entry.content}</code>
                              </pre>
                            ) : (
                              <div className="user-text-content">
                                {entry.content.split("\n").map((line, idx) => (
                                  <p key={idx}>{line}</p>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

              {/* Leer-Zustand wenn keine Einträge */}
              {(!userEntries[pageData.id] ||
                Object.keys(userEntries[pageData.id]).length === 0) && (
                <div className="empty-entries-state">
                  <p>
                    🆕 Füge deine eigenen Code-Snippets, Notizen oder Beispiele
                    hinzu!
                  </p>
                </div>
              )}
            </div>

            {/* Original Benutzer-Notizen */}
            {userNotes[pageData.id] && (
              <div className="user-notes">
                <h4>📝 Deine Notizen:</h4>
                <div className="note-content">{userNotes[pageData.id]}</div>
              </div>
            )}

            {/* Seitennummer */}
            <div className="page-number">{pageData.pageNumber}</div>
          </div>
        );

      case "user-notes":
        return (
          <div className="user-notes-page">
            <h2>{pageData.title}</h2>
            <div className="notes-container">
              {userNotes[pageData.id] ? (
                <div className="existing-notes">
                  <div className="note-content">{userNotes[pageData.id]}</div>
                  <button
                    className="edit-note-btn"
                    onClick={() => toggleNoteEditor(pageData.id)}
                  >
                    ✏️ Bearbeiten
                  </button>
                </div>
              ) : (
                <div className="empty-notes">
                  <p>
                    Hier kannst du deine eigenen React-Notizen,
                    Komponenten-Ideen und Projektkonzepte sammeln.
                  </p>
                  <button
                    className="add-note-btn"
                    onClick={() => toggleNoteEditor(pageData.id)}
                  >
                    📝 Erste React-Notiz hinzufügen
                  </button>
                </div>
              )}
            </div>
            <div className="page-number">{pageData.pageNumber}</div>
          </div>
        );

      case "user-content":
        return (
          <div className="user-content-page">
            <div className="page-header">
              <h2>{pageData.title}</h2>
              <div className="page-meta">
                <span className="creation-date">
                  📅 Erstellt:{" "}
                  {new Date(pageData.createdAt).toLocaleDateString("de-DE")}
                </span>
                <span className="page-type">👤 Benutzer-Seite</span>
              </div>
            </div>

            {/* Haupt-Sektionen der Benutzer-Seite */}
            {pageData.sections &&
              pageData.sections.map((section, index) => (
                <div key={section.id || index} className="user-section">
                  <div className="section-header">
                    <h3>{section.title}</h3>
                    <div className="section-actions">
                      <button
                        className="edit-section-btn"
                        onClick={() => setEditingEntry(section.id)}
                        title="Sektion bearbeiten"
                      >
                        ✏️
                      </button>
                      <button
                        className="delete-section-btn"
                        onClick={() => {
                          const updatedSections = pageData.sections.filter(
                            (s) => s.id !== section.id
                          );
                          updateDynamicPage(pageData.id, {
                            sections: updatedSections,
                          });
                        }}
                        title="Sektion löschen"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>

                  {editingEntry === section.id ? (
                    <div className="section-editor">
                      <input
                        type="text"
                        value={section.title}
                        onChange={(e) => {
                          const updatedSections = pageData.sections.map((s) =>
                            s.id === section.id
                              ? { ...s, title: e.target.value }
                              : s
                          );
                          updateDynamicPage(pageData.id, {
                            sections: updatedSections,
                          });
                        }}
                        placeholder="Sektions-Titel..."
                        className="section-title-input"
                      />
                      <select
                        value={section.type}
                        onChange={(e) => {
                          const updatedSections = pageData.sections.map((s) =>
                            s.id === section.id
                              ? { ...s, type: e.target.value }
                              : s
                          );
                          updateDynamicPage(pageData.id, {
                            sections: updatedSections,
                          });
                        }}
                        className="section-type-select"
                      >
                        <option value="text">📝 Text</option>
                        <option value="code">💻 Code</option>
                        <option value="note">📋 Notiz</option>
                      </select>
                      <textarea
                        value={section.content}
                        onChange={(e) => {
                          const updatedSections = pageData.sections.map((s) =>
                            s.id === section.id
                              ? { ...s, content: e.target.value }
                              : s
                          );
                          updateDynamicPage(pageData.id, {
                            sections: updatedSections,
                          });
                        }}
                        placeholder={
                          section.type === "code"
                            ? "// Dein Code hier..."
                            : "Dein Inhalt hier..."
                        }
                        className="section-content-textarea"
                        rows="8"
                      />
                      <div className="editor-buttons">
                        <button
                          className="save-btn"
                          onClick={() => setEditingEntry(null)}
                        >
                          💾 Speichern
                        </button>
                        <button
                          className="cancel-btn"
                          onClick={() => setEditingEntry(null)}
                        >
                          ❌ Abbrechen
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="section-content">
                      {section.type === "code" ? (
                        <pre className="user-code-block">
                          <code>{section.content}</code>
                        </pre>
                      ) : (
                        <div className="user-text-content">
                          {section.content.split("\n").map((line, idx) => (
                            <p key={idx}>{line}</p>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}

            {/* Neue Sektion hinzufügen */}
            <div className="add-section-area">
              <button
                className="add-section-btn"
                onClick={() => {
                  const sectionTitle = prompt("📝 Titel für neue Sektion:");
                  if (sectionTitle) {
                    addSectionToDynamicPage(pageData.id, {
                      title: sectionTitle,
                      content: "// Neuer Inhalt...",
                      type: "text",
                    });
                  }
                }}
              >
                ➕ Neue Sektion hinzufügen
              </button>
            </div>

            {/* Zurück zum Inhaltsverzeichnis */}
            <div className="navigation-footer">
              <button className="back-to-toc-btn" onClick={() => jumpToPage(1)}>
                📚 Zurück zum Inhaltsverzeichnis
              </button>
            </div>

            {/* Seitennummer */}
            <div className="page-number">{pageData.pageNumber}</div>
          </div>
        );

      default:
        return <div>Unbekannter Seitentyp: {pageData?.type}</div>;
    }
  }
};

export default ReactBook3D;
