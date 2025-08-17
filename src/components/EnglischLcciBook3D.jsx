/**
 * EnglischLcciBook3D.jsx - Englisch-LCCI 3D Book Komponente
 * Interaktives 3D-Buch für Cambridge LCCI Levels A1-C2
 * Layout 1:1 aus JavaScript & TypeScript übernommen
 * Vollständige CRUD-Operationen für Benutzereinträge
 * Autor: Metal-IT-Team
 */

import React, { useState, useEffect } from "react";
import "./EnglischLcciBook3D.scss";

const EnglischLcciBook3D = ({ currentLevel = "A1" }) => {
  // === State Management ===
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [userEntries, setUserEntries] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showChapterModal, setShowChapterModal] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [newEntry, setNewEntry] = useState({
    title: "",
    content: "",
    category: "vocabulary",
    level: currentLevel,
  });
  const [newChapter, setNewChapter] = useState("");
  const [editingEntry, setEditingEntry] = useState(null);
  const [editingChapter, setEditingChapter] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [customChapters, setCustomChapters] = useState([]);

  // === LCCI Level Structure ===
  const lcciLevels = {
    A1: {
      name: "Beginner",
      icon: "🌱",
      color: "#22c55e",
      description: "Basic English fundamentals",
      chapters: [
        "Basic Greetings & Introductions",
        "Numbers & Time",
        "Family & Personal Info",
        "Daily Routines",
        "Food & Drinks",
        "Colors & Descriptions",
        "Simple Present Tense",
        "Basic Vocabulary 100 Words",
      ],
    },
    A2: {
      name: "Elementary",
      icon: "🌿",
      color: "#3b82f6",
      description: "Elementary communication skills",
      chapters: [
        "Past & Future Tenses",
        "Shopping & Money",
        "Travel & Transportation",
        "Health & Body",
        "Weather & Seasons",
        "Hobbies & Free Time",
        "Comparative & Superlative",
        "Elementary Vocabulary 500 Words",
      ],
    },
    B1: {
      name: "Intermediate",
      icon: "🌳",
      color: "#f59e0b",
      description: "Intermediate fluency development",
      chapters: [
        "Present Perfect & Continuous",
        "Work & Career",
        "Education & Learning",
        "Technology & Media",
        "Environment & Nature",
        "Culture & Traditions",
        "Modal Verbs",
        "Intermediate Vocabulary 1000 Words",
      ],
    },
    B2: {
      name: "Upper-Intermediate",
      icon: "🎯",
      color: "#ef4444",
      description: "Upper-intermediate proficiency",
      chapters: [
        "Passive Voice & Complex Grammar",
        "Business English",
        "Academic Writing",
        "News & Current Events",
        "Social Issues",
        "Art & Literature",
        "Conditional Sentences",
        "Advanced Vocabulary 1500 Words",
      ],
    },
    C1: {
      name: "Advanced",
      icon: "🔥",
      color: "#8b5cf6",
      description: "Advanced language mastery",
      chapters: [
        "Advanced Grammar Structures",
        "Professional Communication",
        "Research & Analysis",
        "Philosophy & Ethics",
        "Scientific English",
        "Legal & Political Language",
        "Discourse Markers",
        "Sophisticated Vocabulary 2000 Words",
      ],
    },
    C2: {
      name: "Mastery",
      icon: "👑",
      color: "#ffd700",
      description: "Native-level proficiency",
      chapters: [
        "Nuanced Grammar Mastery",
        "Expert Communication",
        "Academic Excellence",
        "Cultural Sensitivity",
        "Idiomatic Expressions",
        "Advanced Literature",
        "Rhetorical Techniques",
        "Master Vocabulary 3000+ Words",
      ],
    },
  };

  // === Categories for Entries ===
  const entryCategories = {
    vocabulary: { name: "Vocabulary", icon: "📚", color: "#ffd700" },
    grammar: { name: "Grammar", icon: "🔧", color: "#3b82f6" },
    speaking: { name: "Speaking", icon: "🗣️", color: "#22c55e" },
    writing: { name: "Writing", icon: "✍️", color: "#8b5cf6" },
    listening: { name: "Listening", icon: "👂", color: "#f59e0b" },
    certification: { name: "LCCI Prep", icon: "🎓", color: "#ef4444" },
  };

  // === LocalStorage Management ===
  useEffect(() => {
    const stored = localStorage.getItem("englischLcciEntries");
    const storedChapters = localStorage.getItem("englischLcciCustomChapters");

    if (stored) {
      try {
        setUserEntries(JSON.parse(stored));
      } catch (error) {
        console.warn("Error parsing stored entries:", error);
        setUserEntries([]);
      }
    } else {
      // Add demo entries if no data exists
      const demoEntries = createDemoEntries();
      setUserEntries(demoEntries);
      saveToLocalStorage(demoEntries);
    }

    if (storedChapters) {
      try {
        setCustomChapters(JSON.parse(storedChapters));
      } catch (error) {
        console.warn("Error parsing stored chapters:", error);
        setCustomChapters([]);
      }
    }
  }, []);

  // === Reset book state when level changes ===
  useEffect(() => {
    setIsBookOpen(false);
    setCurrentPage(0);
    setSelectedChapter(null);
    setShowModal(false);
    setShowChapterModal(false);
    setShowResetModal(false);
  }, [currentLevel]);

  // === Create Demo Entries ===
  const createDemoEntries = () => {
    const demoEntries = [];

    // A1 Level Demo Entries
    demoEntries.push({
      id: 1001,
      title: "Basic Greetings - Grundlegende Begrüßungen",
      content:
        "🇬🇧 Hello → 🇩🇪 Hallo\\n🇬🇧 Good morning → 🇩🇪 Guten Morgen\\n🇬🇧 Good afternoon → 🇩🇪 Guten Tag\\n🇬🇧 Good evening → 🇩🇪 Guten Abend\\n🇬🇧 How are you? → 🇩🇪 Wie geht es dir?\\n🇬🇧 Nice to meet you → 🇩🇪 Schön dich kennenzulernen\\n🇬🇧 See you later → 🇩🇪 Bis später\\n🇬🇧 Goodbye → 🇩🇪 Auf Wiedersehen",
      category: "vocabulary",
      level: "A1",
      chapter: "Basic Greetings & Introductions",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    demoEntries.push({
      id: 1002,
      title: "Numbers & Time - Zahlen & Zeit",
      content:
        "📊 Numbers (Zahlen):\\n🇬🇧 one → 🇩🇪 eins\\n🇬🇧 two → 🇩🇪 zwei\\n🇬🇧 three → 🇩🇪 drei\\n🇬🇧 ten → 🇩🇪 zehn\\n🇬🇧 twenty → 🇩🇪 zwanzig\\n\\n🕐 Time (Zeit):\\n🇬🇧 What time is it? → 🇩🇪 Wie spät ist es?\\n🇬🇧 It's 3 o'clock → 🇩🇪 Es ist 3 Uhr\\n🇬🇧 half past two → 🇩🇪 halb drei",
      category: "vocabulary",
      level: "A1",
      chapter: "Numbers & Time",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    demoEntries.push({
      id: 1003,
      title: "Family Members - Familienmitglieder",
      content:
        "👨‍👩‍👧‍👦 Family (Familie):\\n🇬🇧 mother → 🇩🇪 Mutter\\n🇬🇧 father → 🇩🇪 Vater\\n🇬🇧 sister → 🇩🇪 Schwester\\n🇬🇧 brother → 🇩🇪 Bruder\\n🇬🇧 grandmother → 🇩🇪 Großmutter\\n🇬🇧 grandfather → 🇩🇪 Großvater\\n🇬🇧 parents → 🇩🇪 Eltern\\n🇬🇧 children → 🇩🇪 Kinder",
      category: "vocabulary",
      level: "A1",
      chapter: "Family & Personal Info",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    // A2 Level Demo Entries
    demoEntries.push({
      id: 2001,
      title: "Past Tense - Vergangenheitsform",
      content:
        "📚 Regular Verbs (Regelmäßige Verben):\\n🇬🇧 walk → walked → 🇩🇪 gehen → ging\\n🇬🇧 play → played → 🇩🇪 spielen → spielte\\n🇬🇧 work → worked → 🇩🇪 arbeiten → arbeitete\\n🇬🇧 listen → listened → 🇩🇪 zuhören → hörte zu\\n\\n🔄 Irregular Verbs (Unregelmäßige Verben):\\n🇬🇧 go → went → 🇩🇪 gehen → ging\\n🇬🇧 eat → ate → 🇩🇪 essen → aß\\n🇬🇧 see → saw → 🇩🇪 sehen → sah",
      category: "grammar",
      level: "A2",
      chapter: "Past & Future Tenses",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    demoEntries.push({
      id: 2002,
      title: "Shopping Phrases - Einkaufsausdrücke",
      content:
        "🛒 At the Shop (Im Geschäft):\\n🇬🇧 How much does it cost? → 🇩🇪 Wie viel kostet es?\\n🇬🇧 Can I pay by card? → 🇩🇪 Kann ich mit Karte zahlen?\\n🇬🇧 Do you have this in size M? → 🇩🇪 Haben Sie das in Größe M?\\n🇬🇧 Where is the fitting room? → 🇩🇪 Wo ist die Umkleidekabine?\\n🇬🇧 I would like to return this → 🇩🇪 Ich möchte das zurückgeben\\n🇬🇧 Do you have a receipt? → 🇩🇪 Haben Sie einen Beleg?",
      category: "speaking",
      level: "A2",
      chapter: "Shopping & Money",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    // B1 Level Demo Entries
    demoEntries.push({
      id: 3001,
      title: "Present Perfect - Perfekt",
      content:
        "✅ Present Perfect Usage (Verwendung des Present Perfect):\\n\\n🔸 Experience (Erfahrung):\\n🇬🇧 I have been to London → 🇩🇪 Ich war schon in London\\n🇬🇧 Have you ever eaten sushi? → 🇩🇪 Hast du schon mal Sushi gegessen?\\n\\n🔸 Recent Actions (Kürzliche Handlungen):\\n🇬🇧 She has just finished her work → 🇩🇪 Sie hat gerade ihre Arbeit beendet\\n🇬🇧 We have already seen this movie → 🇩🇪 Wir haben diesen Film schon gesehen\\n\\n🔸 Duration (Dauer):\\n🇬🇧 I have lived here for 5 years → 🇩🇪 Ich wohne seit 5 Jahren hier",
      category: "grammar",
      level: "B1",
      chapter: "Present Perfect & Continuous",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    demoEntries.push({
      id: 3002,
      title: "Work & Career Vocabulary - Arbeit & Beruf",
      content:
        "💼 Professions (Berufe):\\n🇬🇧 engineer → 🇩🇪 Ingenieur/in\\n🇬🇧 teacher → 🇩🇪 Lehrer/in\\n🇬🇧 manager → 🇩🇪 Manager/in\\n🇬🇧 accountant → 🇩🇪 Buchhalter/in\\n\\n🏢 Workplace (Arbeitsplatz):\\n🇬🇧 office → 🇩🇪 Büro\\n🇬🇧 meeting → 🇩🇪 Besprechung\\n🇬🇧 deadline → 🇩🇪 Frist/Termin\\n🇬🇧 colleague → 🇩🇪 Kollege/in\\n🇬🇧 promotion → 🇩🇪 Beförderung\\n🇬🇧 salary → 🇩🇪 Gehalt",
      category: "vocabulary",
      level: "B1",
      chapter: "Work & Career",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    // B2 Level Demo Entries
    demoEntries.push({
      id: 4001,
      title: "Business Email Structure - Geschäfts-E-Mail Aufbau",
      content:
        "📧 Formal Email Structure (Formeller E-Mail Aufbau):\\n\\n🔸 Opening (Eröffnung):\\n🇬🇧 Dear Sir/Madam → 🇩🇪 Sehr geehrte Damen und Herren\\n🇬🇧 Dear Mr./Ms. Smith → 🇩🇪 Sehr geehrter Herr/Frau Schmidt\\n\\n🔸 Purpose (Zweck):\\n🇬🇧 I am writing to inquire about... → 🇩🇪 Ich schreibe, um nach ... zu fragen\\n🇬🇧 I would like to inform you that... → 🇩🇪 Ich möchte Sie darüber informieren, dass...\\n\\n🔸 Closing (Schluss):\\n🇬🇧 Thank you for your consideration → 🇩🇪 Vielen Dank für Ihre Berücksichtigung\\n🇬🇧 I look forward to hearing from you → 🇩🇪 Ich freue mich auf Ihre Antwort\\n🇬🇧 Yours sincerely → 🇩🇪 Mit freundlichen Grüßen",
      category: "writing",
      level: "B2",
      chapter: "Business English",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    demoEntries.push({
      id: 4002,
      title: "Academic Writing Phrases - Wissenschaftliche Schreibausdrücke",
      content:
        "📝 Academic Expressions (Wissenschaftliche Ausdrücke):\\n\\n🔸 Introducing Ideas (Ideen einführen):\\n🇬🇧 According to recent research... → 🇩🇪 Laut aktueller Forschung...\\n🇬🇧 It is widely accepted that... → 🇩🇪 Es ist allgemein anerkannt, dass...\\n\\n🔸 Analyzing (Analysieren):\\n🇬🇧 The data suggests that... → 🇩🇪 Die Daten deuten darauf hin, dass...\\n🇬🇧 This indicates a clear trend... → 🇩🇪 Dies zeigt einen klaren Trend...\\n\\n🔸 Concluding (Schlussfolgern):\\n🇬🇧 In conclusion... → 🇩🇪 Zusammenfassend...\\n🇬🇧 The evidence clearly shows... → 🇩🇪 Die Beweise zeigen eindeutig...",
      category: "writing",
      level: "B2",
      chapter: "Academic Writing",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    // C1 Level Demo Entries
    demoEntries.push({
      id: 5001,
      title: "Advanced Discourse Markers - Fortgeschrittene Diskursmarker",
      content:
        "🔗 Sophisticated Connectors (Ausgeklügelte Verbindungswörter):\\n\\n🔸 Addition (Ergänzung):\\n🇬🇧 Furthermore → 🇩🇪 außerdem/weiterhin\\n🇬🇧 Moreover → 🇩🇪 darüber hinaus\\n🇬🇧 In addition to this → 🇩🇪 zusätzlich dazu\\n\\n🔸 Contrast (Kontrast):\\n🇬🇧 Nevertheless → 🇩🇪 trotzdem/dennoch\\n🇬🇧 Nonetheless → 🇩🇪 nichtsdestotrotz\\n🇬🇧 Conversely → 🇩🇪 umgekehrt\\n\\n🔸 Consequence (Folge):\\n🇬🇧 Consequently → 🇩🇪 folglich\\n🇬🇧 Hence → 🇩🇪 daher\\n🇬🇧 Accordingly → 🇩🇪 dementsprechend",
      category: "vocabulary",
      level: "C1",
      chapter: "Discourse Markers",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    demoEntries.push({
      id: 5002,
      title: "Professional Communication - Professionelle Kommunikation",
      content:
        "💼 Advanced Business Language (Fortgeschrittene Geschäftssprache):\\n\\n🔸 Negotiations (Verhandlungen):\\n🇬🇧 We need to reach a compromise → 🇩🇪 Wir müssen einen Kompromiss finden\\n🇬🇧 That's a non-negotiable point → 🇩🇪 Das ist ein nicht verhandelbarer Punkt\\n\\n🔸 Presentations (Präsentationen):\\n🇬🇧 Let me elaborate on this point → 🇩🇪 Lassen Sie mich diesen Punkt näher erläutern\\n🇬🇧 This brings us to our next consideration → 🇩🇪 Das führt uns zu unserer nächsten Überlegung\\n\\n🔸 Decision Making (Entscheidungsfindung):\\n🇬🇧 We need to weigh the pros and cons → 🇩🇪 Wir müssen die Vor- und Nachteile abwägen\\n🇬🇧 The implications are far-reaching → 🇩🇪 Die Auswirkungen sind weitreichend",
      category: "speaking",
      level: "C1",
      chapter: "Professional Communication",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    // C2 Level Demo Entries
    demoEntries.push({
      id: 6001,
      title: "Rhetorical Techniques - Rhetorische Stilmittel",
      content:
        "🎭 Advanced Rhetorical Devices (Fortgeschrittene Stilmittel):\\n\\n🔸 Figurative Language (Bildliche Sprache):\\n🇬🇧 Metaphor → 🇩🇪 Metapher (versteckter Vergleich)\\n   Example: 'Time is money' → 'Zeit ist Geld'\\n🇬🇧 Simile → 🇩🇪 Vergleich (mit 'wie/als')\\n   Example: 'As brave as a lion' → 'Mutig wie ein Löwe'\\n\\n🔸 Sound Devices (Klangfiguren):\\n🇬🇧 Alliteration → 🇩🇪 Stabreim\\n   Example: 'Peter Piper picked...' → 'In einem tiefen, dunklen Tal...'\\n🇬🇧 Assonance → 🇩🇪 Assonanz (Vokalwiederholung)\\n\\n🔸 Emphasis (Betonung):\\n🇬🇧 Hyperbole → 🇩🇪 Hyperbel (Übertreibung)\\n🇬🇧 Paradox → 🇩🇪 Paradoxon (scheinbarer Widerspruch)",
      category: "writing",
      level: "C2",
      chapter: "Rhetorical Techniques",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    demoEntries.push({
      id: 6002,
      title: "Nuanced Grammar Mastery - Nuancierte Grammatikbeherrschung",
      content:
        "🎯 Subtle Grammar Distinctions (Subtile grammatikalische Unterscheidungen):\\n\\n🔸 Subjunctive Mood (Konjunktiv):\\n🇬🇧 If I were you... → 🇩🇪 Wenn ich du wäre... (irrealer Konjunktiv)\\n🇬🇧 I suggest that he be informed → 🇩🇪 Ich schlage vor, dass er informiert wird\\n\\n🔸 Cleft Sentences (Spaltsätze):\\n🇬🇧 It was John who called → 🇩🇪 Es war John, der angerufen hat\\n🇬🇧 What I need is time → 🇩🇪 Was ich brauche, ist Zeit\\n\\n🔸 Inversion (Inversion):\\n🇬🇧 Never have I seen such beauty → 🇩🇪 Niemals habe ich solche Schönheit gesehen\\n🇬🇧 Only then did I understand → 🇩🇪 Erst dann verstand ich",
      category: "grammar",
      level: "C2",
      chapter: "Nuanced Grammar Mastery",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    // === Additional Demo Entries for All Levels ===

    // More A1 Level Entries
    demoEntries.push({
      id: 1004,
      title: "Daily Routines - Tägliche Routinen",
      content:
        "⏰ Daily Activities (Tägliche Aktivitäten):\\n🇬🇧 I wake up → 🇩🇪 Ich wache auf\\n🇬🇧 I have breakfast → 🇩🇪 Ich frühstücke\\n🇬🇧 I go to work → 🇩🇪 Ich gehe zur Arbeit\\n🇬🇧 I have lunch → 🇩🇪 Ich esse zu Mittag\\n🇬🇧 I come home → 🇩🇪 Ich komme nach Hause\\n🇬🇧 I watch TV → 🇩🇪 Ich schaue fern\\n🇬🇧 I go to sleep → 🇩🇪 Ich gehe schlafen",
      category: "vocabulary",
      level: "A1",
      chapter: "Daily Routines",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    demoEntries.push({
      id: 1005,
      title: "Simple Present Grammar - Präsens Grammatik",
      content:
        "📝 Simple Present Rules (Präsens Regeln):\\n\\n🔸 Positive Form (Positiv):\\n🇬🇧 I work → 🇩🇪 Ich arbeite\\n🇬🇧 He/She works → 🇩🇪 Er/Sie arbeitet\\n\\n🔸 Negative Form (Negativ):\\n🇬🇧 I don't work → 🇩🇪 Ich arbeite nicht\\n🇬🇧 He/She doesn't work → 🇩🇪 Er/Sie arbeitet nicht\\n\\n🔸 Question Form (Frage):\\n🇬🇧 Do you work? → 🇩🇪 Arbeitest du?\\n🇬🇧 Does he/she work? → 🇩🇪 Arbeitet er/sie?",
      category: "grammar",
      level: "A1",
      chapter: "Simple Present Tense",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    // More A2 Level Entries
    demoEntries.push({
      id: 2003,
      title: "Travel Vocabulary - Reisevokabular",
      content:
        "✈️ Transportation (Verkehrsmittel):\\n🇬🇧 plane → 🇩🇪 Flugzeug\\n🇬🇧 train → 🇩🇪 Zug\\n🇬🇧 bus → 🇩🇪 Bus\\n🇬🇧 car → 🇩🇪 Auto\\n🇬🇧 bicycle → 🇩🇪 Fahrrad\\n\\n🏨 Travel Places (Reiseorte):\\n🇬🇧 airport → 🇩🇪 Flughafen\\n🇬🇧 hotel → 🇩🇪 Hotel\\n🇬🇧 station → 🇩🇪 Bahnhof\\n🇬🇧 passport → 🇩🇪 Reisepass\\n🇬🇧 ticket → 🇩🇪 Ticket",
      category: "vocabulary",
      level: "A2",
      chapter: "Travel & Transportation",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    demoEntries.push({
      id: 2004,
      title: "Comparative Forms - Vergleichsformen",
      content:
        "📊 Comparative & Superlative (Komparativ & Superlativ):\\n\\n🔸 Regular Forms (Regelmäßig):\\n🇬🇧 big → bigger → biggest → 🇩🇪 groß → größer → am größten\\n🇬🇧 small → smaller → smallest → 🇩🇪 klein → kleiner → am kleinsten\\n\\n🔸 Irregular Forms (Unregelmäßig):\\n🇬🇧 good → better → best → 🇩🇪 gut → besser → am besten\\n🇬🇧 bad → worse → worst → 🇩🇪 schlecht → schlechter → am schlechtesten\\n\\n🔸 With 'more/most' (Mit 'more/most'):\\n🇬🇧 beautiful → more beautiful → most beautiful → 🇩🇪 schön → schöner → am schönsten",
      category: "grammar",
      level: "A2",
      chapter: "Comparative & Superlative",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    // More B1 Level Entries
    demoEntries.push({
      id: 3003,
      title: "Technology Terms - Technologie Begriffe",
      content:
        "💻 Digital Devices (Digitale Geräte):\\n🇬🇧 computer → 🇩🇪 Computer\\n🇬🇧 smartphone → 🇩🇪 Smartphone\\n🇬🇧 tablet → 🇩🇪 Tablet\\n🇬🇧 laptop → 🇩🇪 Laptop\\n\\n🌐 Internet Terms (Internet Begriffe):\\n🇬🇧 website → 🇩🇪 Webseite\\n🇬🇧 email → 🇩🇪 E-Mail\\n🇬🇧 password → 🇩🇪 Passwort\\n🇬🇧 download → 🇩🇪 herunterladen\\n🇬🇧 upload → 🇩🇪 hochladen\\n🇬🇧 wifi → 🇩🇪 WLAN",
      category: "vocabulary",
      level: "B1",
      chapter: "Technology & Media",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    demoEntries.push({
      id: 3004,
      title: "Modal Verbs Usage - Modalverben Verwendung",
      content:
        "🔧 Modal Verbs (Modalverben):\\n\\n🔸 Can/Could (Können):\\n🇬🇧 I can swim → 🇩🇪 Ich kann schwimmen\\n🇬🇧 Could you help me? → 🇩🇪 Könntest du mir helfen?\\n\\n🔸 Must/Have to (Müssen):\\n🇬🇧 I must go → 🇩🇪 Ich muss gehen\\n🇬🇧 You have to study → 🇩🇪 Du musst lernen\\n\\n🔸 Should/Would (Sollten):\\n🇬🇧 You should rest → 🇩🇪 Du solltest dich ausruhen\\n🇬🇧 I would like coffee → 🇩🇪 Ich hätte gern Kaffee",
      category: "grammar",
      level: "B1",
      chapter: "Modal Verbs",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    // More B2 Level Entries
    demoEntries.push({
      id: 4003,
      title: "News & Current Events - Nachrichten & Aktuelle Ereignisse",
      content:
        "📰 News Vocabulary (Nachrichten-Vokabular):\\n🇬🇧 headline → 🇩🇪 Schlagzeile\\n🇬🇧 journalist → 🇩🇪 Journalist/in\\n🇬🇧 interview → 🇩🇪 Interview\\n🇬🇧 report → 🇩🇪 Bericht\\n🇬🇧 politics → 🇩🇪 Politik\\n🇬🇧 economy → 🇩🇪 Wirtschaft\\n🇬🇧 environment → 🇩🇪 Umwelt\\n🇬🇧 crisis → 🇩🇪 Krise\\n🇬🇧 solution → 🇩🇪 Lösung\\n🇬🇧 debate → 🇩🇪 Debatte",
      category: "vocabulary",
      level: "B2",
      chapter: "News & Current Events",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    demoEntries.push({
      id: 4004,
      title: "Passive Voice Structures - Passivstrukturen",
      content:
        "🔄 Passive Voice Formation (Passiv-Bildung):\\n\\n🔸 Present Simple Passive (Präsens Passiv):\\n🇬🇧 The book is read → 🇩🇪 Das Buch wird gelesen\\n🇬🇧 Letters are written → 🇩🇪 Briefe werden geschrieben\\n\\n🔸 Past Simple Passive (Präteritum Passiv):\\n🇬🇧 The house was built → 🇩🇪 Das Haus wurde gebaut\\n🇬🇧 The problem was solved → 🇩🇪 Das Problem wurde gelöst\\n\\n🔸 Present Perfect Passive (Perfekt Passiv):\\n🇬🇧 The work has been finished → 🇩🇪 Die Arbeit ist beendet worden\\n🇬🇧 The decision has been made → 🇩🇪 Die Entscheidung ist getroffen worden",
      category: "grammar",
      level: "B2",
      chapter: "Passive Voice & Complex Grammar",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    // More C1 Level Entries
    demoEntries.push({
      id: 5003,
      title: "Scientific English - Wissenschaftliches Englisch",
      content:
        "🔬 Scientific Method (Wissenschaftliche Methode):\\n🇬🇧 hypothesis → 🇩🇪 Hypothese\\n🇬🇧 experiment → 🇩🇪 Experiment\\n🇬🇧 analysis → 🇩🇪 Analyse\\n🇬🇧 conclusion → 🇩🇪 Schlussfolgerung\\n🇬🇧 evidence → 🇩🇪 Beweis\\n\\n⚗️ Research Terms (Forschungsbegriffe):\\n🇬🇧 methodology → 🇩🇪 Methodik\\n🇬🇧 correlation → 🇩🇪 Korrelation\\n🇬🇧 variable → 🇩🇪 Variable\\n🇬🇧 significant → 🇩🇪 signifikant\\n🇬🇧 peer review → 🇩🇪 Begutachtung durch Fachkollegen",
      category: "vocabulary",
      level: "C1",
      chapter: "Scientific English",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    demoEntries.push({
      id: 5004,
      title: "Complex Grammar Structures - Komplexe Grammatikstrukturen",
      content:
        "🏗️ Advanced Grammar (Fortgeschrittene Grammatik):\\n\\n🔸 Conditional Sentences Type 3 (Konditionalsätze Typ 3):\\n🇬🇧 If I had studied harder, I would have passed → 🇩🇪 Wenn ich härter gelernt hätte, hätte ich bestanden\\n\\n🔸 Mixed Conditionals (Gemischte Konditionale):\\n🇬🇧 If I were taller, I would have become a basketball player → 🇩🇪 Wenn ich größer wäre, wäre ich Basketballspieler geworden\\n\\n🔸 Reported Speech Complex (Indirekte Rede komplex):\\n🇬🇧 He said he had been working → 🇩🇪 Er sagte, er hätte gearbeitet\\n🇬🇧 She told me she would have finished → 🇩🇪 Sie sagte mir, sie hätte fertig gemacht",
      category: "grammar",
      level: "C1",
      chapter: "Advanced Grammar Structures",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    // More C2 Level Entries
    demoEntries.push({
      id: 6003,
      title: "Idiomatic Expressions - Idiomatische Ausdrücke",
      content:
        "🎭 Native-like Idioms (Muttersprachliche Redewendungen):\\n\\n🔸 Time Idioms (Zeit-Redewendungen):\\n🇬🇧 Time flies → 🇩🇪 Die Zeit vergeht wie im Flug\\n🇬🇧 Better late than never → 🇩🇪 Besser spät als nie\\n🇬🇧 Time is of the essence → 🇩🇪 Zeit ist von entscheidender Bedeutung\\n\\n🔸 Business Idioms (Geschäfts-Redewendungen):\\n🇬🇧 Think outside the box → 🇩🇪 Um die Ecke denken\\n🇬🇧 Cut to the chase → 🇩🇪 Zur Sache kommen\\n🇬🇧 On the same wavelength → 🇩🇪 Auf der gleichen Wellenlänge\\n\\n🔸 Cultural Idioms (Kulturelle Redewendungen):\\n🇬🇧 Break the ice → 🇩🇪 Das Eis brechen\\n🇬🇧 Spill the beans → 🇩🇪 Die Bohnen verschütten (Geheimnis verraten)",
      category: "vocabulary",
      level: "C2",
      chapter: "Idiomatic Expressions",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    demoEntries.push({
      id: 6004,
      title: "Expert Communication Skills - Experten-Kommunikationsfähigkeiten",
      content:
        "🎯 Masterful Communication (Meisterhafte Kommunikation):\\n\\n🔸 Diplomatic Language (Diplomatische Sprache):\\n🇬🇧 I would venture to suggest → 🇩🇪 Ich würde vorsichtig vorschlagen\\n🇬🇧 It might be worth considering → 🇩🇪 Es könnte sich lohnen zu überlegen\\n🇬🇧 One might argue that → 🇩🇪 Man könnte argumentieren, dass\\n\\n🔸 Academic Precision (Akademische Präzision):\\n🇬🇧 The evidence overwhelmingly suggests → 🇩🇪 Die Beweise sprechen eindeutig dafür\\n🇬🇧 It is incumbent upon us to → 🇩🇪 Es obliegt uns zu\\n🇬🇧 The ramifications are multifaceted → 🇩🇪 Die Auswirkungen sind vielschichtig\\n\\n🔸 Persuasive Techniques (Überzeugungstechniken):\\n🇬🇧 Allow me to propose → 🇩🇪 Gestatten Sie mir vorzuschlagen\\n🇬🇧 I would submit that → 🇩🇪 Ich würde behaupten, dass",
      category: "speaking",
      level: "C2",
      chapter: "Expert Communication",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    return demoEntries;
  };

  const saveToLocalStorage = (entries) => {
    try {
      localStorage.setItem("englischLcciEntries", JSON.stringify(entries));
    } catch (error) {
      console.warn("Error saving entries:", error);
    }
  };

  const saveChaptersToLocalStorage = (chapters) => {
    try {
      localStorage.setItem(
        "englischLcciCustomChapters",
        JSON.stringify(chapters)
      );
    } catch (error) {
      console.warn("Error saving chapters:", error);
    }
  };

  // === Entry Management Functions ===
  const handleAddEntry = () => {
    if (newEntry.title.trim() && newEntry.content.trim()) {
      const entry = {
        id: Date.now(),
        ...newEntry,
        level: currentLevel,
        chapter: selectedChapter || lcciLevels[currentLevel].chapters[0],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const updatedEntries = [...userEntries, entry];
      setUserEntries(updatedEntries);
      saveToLocalStorage(updatedEntries);

      // Reset form
      setNewEntry({
        title: "",
        content: "",
        category: "vocabulary",
        level: currentLevel,
      });
      setShowModal(false);
      setSelectedChapter(null);
    }
  };

  const handleEditEntry = (entry) => {
    setEditingEntry(entry);
    setNewEntry({
      title: entry.title,
      content: entry.content,
      category: entry.category,
      level: entry.level,
    });
    setSelectedChapter(entry.chapter);
    setShowModal(true);
  };

  const handleUpdateEntry = () => {
    if (editingEntry && newEntry.title.trim() && newEntry.content.trim()) {
      const updatedEntries = userEntries.map((entry) =>
        entry.id === editingEntry.id
          ? {
              ...entry,
              ...newEntry,
              chapter: selectedChapter || entry.chapter,
              updatedAt: new Date().toISOString(),
            }
          : entry
      );

      setUserEntries(updatedEntries);
      saveToLocalStorage(updatedEntries);

      // Reset states
      setEditingEntry(null);
      setNewEntry({
        title: "",
        content: "",
        category: "vocabulary",
        level: currentLevel,
      });
      setShowModal(false);
      setSelectedChapter(null);
    }
  };

  const handleDeleteEntry = (entryId) => {
    if (window.confirm("Are you sure you want to delete this entry?")) {
      const updatedEntries = userEntries.filter(
        (entry) => entry.id !== entryId
      );
      setUserEntries(updatedEntries);
      saveToLocalStorage(updatedEntries);
    }
  };

  const handleResetAll = () => {
    setShowResetModal(true);
  };

  const confirmResetAll = () => {
    const updatedEntries = userEntries.filter(
      (entry) => entry.level !== currentLevel
    );
    const updatedChapters = customChapters.filter(
      (chapter) => chapter.level !== currentLevel
    );

    setUserEntries(updatedEntries);
    setCustomChapters(updatedChapters);
    saveToLocalStorage(updatedEntries);
    saveChaptersToLocalStorage(updatedChapters);
    setShowResetModal(false);
  };

  // === Chapter Management Functions ===
  const handleAddChapter = () => {
    if (newChapter.trim()) {
      const chapter = {
        id: Date.now(),
        title: newChapter.trim(),
        level: currentLevel,
        createdAt: new Date().toISOString(),
        isCustom: true,
      };

      const updatedChapters = [...customChapters, chapter];
      setCustomChapters(updatedChapters);
      saveChaptersToLocalStorage(updatedChapters);

      setNewChapter("");
      setShowChapterModal(false);
    }
  };

  const handleEditChapter = (chapter) => {
    setEditingChapter(chapter);
    setNewChapter(chapter.title);
    setShowChapterModal(true);
  };

  const handleUpdateChapter = () => {
    if (editingChapter && newChapter.trim()) {
      const updatedChapters = customChapters.map((chapter) =>
        chapter.id === editingChapter.id
          ? {
              ...chapter,
              title: newChapter.trim(),
              updatedAt: new Date().toISOString(),
            }
          : chapter
      );

      setCustomChapters(updatedChapters);
      saveChaptersToLocalStorage(updatedChapters);

      setEditingChapter(null);
      setNewChapter("");
      setShowChapterModal(false);
    }
  };

  const handleDeleteChapter = (chapterId) => {
    if (
      window.confirm(
        "Are you sure you want to delete this chapter? All related entries will remain but be moved to 'Other'."
      )
    ) {
      const updatedChapters = customChapters.filter(
        (chapter) => chapter.id !== chapterId
      );
      setCustomChapters(updatedChapters);
      saveChaptersToLocalStorage(updatedChapters);
    }
  };

  const getAllChaptersForLevel = () => {
    const baseChapters = lcciLevels[currentLevel].chapters;
    const levelCustomChapters = customChapters
      .filter((chapter) => chapter.level === currentLevel)
      .map((chapter) => chapter.title);

    return [...baseChapters, ...levelCustomChapters];
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingEntry(null);
    setNewEntry({
      title: "",
      content: "",
      category: "vocabulary",
      level: currentLevel,
    });
    setSelectedChapter(null);
  };

  const closeChapterModal = () => {
    setShowChapterModal(false);
    setEditingChapter(null);
    setNewChapter("");
  };

  const closeResetModal = () => {
    setShowResetModal(false);
  };

  // === Get entries for current level ===
  const getCurrentLevelEntries = () => {
    return userEntries.filter((entry) => entry.level === currentLevel);
  };

  const getEntriesForChapter = (chapter) => {
    return userEntries.filter(
      (entry) => entry.level === currentLevel && entry.chapter === chapter
    );
  };

  // === Handle Chapter Click ===
  const handleChapterClick = (chapter) => {
    setSelectedChapter(chapter);
    setCurrentPage(1); // Switch to entries page
  };

  // === Handle Book Navigation ===
  const handleBookClick = () => {
    if (!isBookOpen) {
      setIsBookOpen(true);
      setCurrentPage(0); // Table of contents
    }
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentLevelData = lcciLevels[currentLevel];
  const currentLevelEntries = getCurrentLevelEntries();

  return (
    <div className="englisch-lcci-book-container">
      {/* === 3D Book ===*/}
      <div
        className={`book3d-englisch-lcci ${isBookOpen ? "book-open" : ""}`}
        onClick={!isBookOpen ? handleBookClick : undefined}
      >
        {/* === Book Cover ===*/}
        <div
          className="book-cover"
          style={{ "--level-color": currentLevelData.color }}
        >
          <div className="cover-content">
            <div
              className="cover-icon"
              style={{ color: currentLevelData.color }}
            >
              {currentLevelData.icon}
            </div>
            <div className="cover-title">
              <h2>Englisch-LCCI</h2>
              <h3>Level {currentLevel}</h3>
              <div
                className="level-badge"
                style={{ backgroundColor: currentLevelData.color }}
              >
                {currentLevelData.name}
              </div>
            </div>
            <div className="cover-description">
              {currentLevelData.description}
            </div>
            <div className="cover-stats">
              <div className="stat-item">
                <span className="stat-number">
                  {currentLevelEntries.length}
                </span>
                <span className="stat-label">Entries</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {getAllChaptersForLevel().length}
                </span>
                <span className="stat-label">Chapters</span>
              </div>
            </div>
          </div>
          {!isBookOpen && (
            <div className="click-hint">
              <span>📖 Click to open LCCI Level {currentLevel}</span>
            </div>
          )}
        </div>

        {/* === Book Pages ===*/}
        <div className="book-pages">
          {isBookOpen && (
            <>
              {/* === Page 0: Table of Contents ===*/}
              {currentPage === 0 && (
                <div className="page-content table-of-contents">
                  <div className="page-header">
                    <h2>
                      <span className="header-icon">📋</span>
                      LCCI Level {currentLevel} - Contents
                    </h2>
                    <div className="level-info">
                      <span
                        className="level-icon"
                        style={{ color: currentLevelData.color }}
                      >
                        {currentLevelData.icon}
                      </span>
                      <span className="level-name">
                        {currentLevelData.name}
                      </span>
                      <span className="level-desc">
                        {currentLevelData.description}
                      </span>
                    </div>
                  </div>

                  <div className="toc-content">
                    <div className="toc-list">
                      {/* Standard Chapters */}
                      {currentLevelData.chapters.map((chapter, index) => {
                        const chapterEntries = getEntriesForChapter(chapter);
                        return (
                          <div
                            key={`standard-${index}`}
                            className="toc-item"
                            onClick={() => handleChapterClick(chapter)}
                          >
                            <div className="toc-number">
                              {String(index + 1).padStart(2, "0")}
                            </div>
                            <div className="toc-title">{chapter}</div>
                            <div className="toc-entries">
                              <span className="entry-count">
                                {chapterEntries.length}
                              </span>
                              <span className="entry-label">entries</span>
                            </div>
                          </div>
                        );
                      })}

                      {/* Custom Chapters */}
                      {customChapters
                        .filter((chapter) => chapter.level === currentLevel)
                        .map((chapter, index) => {
                          const chapterEntries = getEntriesForChapter(
                            chapter.title
                          );
                          const chapterNumber =
                            currentLevelData.chapters.length + index + 1;
                          return (
                            <div
                              key={`custom-${chapter.id}`}
                              className="toc-item custom-chapter"
                              onClick={() => handleChapterClick(chapter.title)}
                            >
                              <div className="toc-number custom">
                                {String(chapterNumber).padStart(2, "0")}
                              </div>
                              <div className="toc-title">
                                {chapter.title}
                                <span className="custom-badge">✨ Custom</span>
                              </div>
                              <div className="toc-entries">
                                <span className="entry-count">
                                  {chapterEntries.length}
                                </span>
                                <span className="entry-label">entries</span>
                              </div>
                              <div className="chapter-actions">
                                <button
                                  className="btn-edit-chapter"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleEditChapter(chapter);
                                  }}
                                  title="Edit Chapter"
                                >
                                  ✏️
                                </button>
                                <button
                                  className="btn-delete-chapter"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleDeleteChapter(chapter.id);
                                  }}
                                  title="Delete Chapter"
                                >
                                  🗑️
                                </button>
                              </div>
                            </div>
                          );
                        })}
                    </div>

                    <div className="toc-footer">
                      <div className="action-buttons">
                        <button
                          className="btn-add-entry"
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowModal(true);
                          }}
                        >
                          <span className="btn-icon">➕</span>
                          Add New Entry
                        </button>

                        <button
                          className="btn-add-chapter"
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowChapterModal(true);
                          }}
                        >
                          <span className="btn-icon">📚</span>
                          Add Chapter
                        </button>

                        <button
                          className="btn-view-all"
                          onClick={() => {
                            setSelectedChapter("all");
                            goToPage(1);
                          }}
                        >
                          <span className="btn-icon">📚</span>
                          View All ({currentLevelEntries.length})
                        </button>

                        <button
                          className={`btn-reset ${
                            currentLevelEntries.length === 0 ? "disabled" : ""
                          }`}
                          onClick={handleResetAll}
                          disabled={currentLevelEntries.length === 0}
                          title={
                            currentLevelEntries.length === 0
                              ? "No entries to reset"
                              : "Reset all entries for this level"
                          }
                        >
                          <span className="btn-icon">🔄</span>
                          Reset All{" "}
                          {currentLevelEntries.length > 0
                            ? `(${currentLevelEntries.length})`
                            : ""}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* === Page 1: Chapter Entries ===*/}
              {currentPage === 1 && (
                <div className="page-content entries-page">
                  <div className="page-header">
                    <button className="back-btn" onClick={() => goToPage(0)}>
                      <span>←</span> Back to Contents
                    </button>
                    <div className="header-content">
                      <h2>
                        <span className="header-icon">📖</span>
                        {selectedChapter === "all"
                          ? `All Level ${currentLevel} Entries`
                          : selectedChapter}
                      </h2>
                      {(() => {
                        const entriesToShow =
                          selectedChapter === "all"
                            ? currentLevelEntries
                            : getEntriesForChapter(selectedChapter);

                        if (entriesToShow.length > 0) {
                          return (
                            <div className="header-actions">
                              <button
                                className="btn-add-entry-header"
                                onClick={() => setShowModal(true)}
                                title="Add new entry"
                              >
                                <span className="btn-icon">➕</span>
                                Add Entry
                              </button>
                              {selectedChapter === "all" && (
                                <button
                                  className="btn-reset-header"
                                  onClick={handleResetAll}
                                  title="Reset all entries for this level"
                                >
                                  <span className="btn-icon">🔄</span>
                                  Reset All ({entriesToShow.length})
                                </button>
                              )}
                            </div>
                          );
                        }
                        return null;
                      })()}
                    </div>
                  </div>

                  <div className="entries-content">
                    {(() => {
                      const entriesToShow =
                        selectedChapter === "all"
                          ? currentLevelEntries
                          : getEntriesForChapter(selectedChapter);

                      if (entriesToShow.length === 0) {
                        return (
                          <div className="no-entries">
                            <div className="no-entries-icon">📝</div>
                            <h3>No entries yet</h3>
                            <p>
                              Start adding your {currentLevel} level content!
                            </p>
                            <button
                              className="btn-add-first"
                              onClick={() => setShowModal(true)}
                            >
                              <span className="btn-icon">✨</span>
                              Add First Entry
                            </button>
                          </div>
                        );
                      }

                      return (
                        <div className="entries-grid">
                          {entriesToShow.map((entry) => (
                            <div key={entry.id} className="entry-card">
                              <div className="entry-header">
                                <div
                                  className="entry-category"
                                  style={{
                                    color:
                                      entryCategories[entry.category].color,
                                  }}
                                >
                                  <span className="category-icon">
                                    {entryCategories[entry.category].icon}
                                  </span>
                                  {entryCategories[entry.category].name}
                                </div>
                                <div className="entry-actions">
                                  <button
                                    className="btn-edit"
                                    onClick={() => handleEditEntry(entry)}
                                    title="Edit entry"
                                  >
                                    ✏️
                                  </button>
                                  <button
                                    className="btn-delete"
                                    onClick={() => handleDeleteEntry(entry.id)}
                                    title="Delete entry"
                                  >
                                    🗑️
                                  </button>
                                </div>
                              </div>

                              <div className="entry-body">
                                <h4 className="entry-title">{entry.title}</h4>
                                <div className="entry-content">
                                  {entry.content
                                    .split("\\n")
                                    .map((line, index) => (
                                      <p key={index}>{line}</p>
                                    ))}
                                </div>
                                <div className="entry-meta">
                                  <span className="entry-chapter">
                                    Chapter: {entry.chapter}
                                  </span>
                                  <span className="entry-date">
                                    {new Date(
                                      entry.createdAt
                                    ).toLocaleDateString()}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      );
                    })()}

                    <div className="entries-footer">
                      <button
                        className="btn-add-entry"
                        onClick={() => setShowModal(true)}
                      >
                        <span className="btn-icon">➕</span>
                        Add New Entry
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* === Book Spine ===*/}
        <div
          className="book-spine"
          style={{ backgroundColor: currentLevelData.color }}
        >
          <div className="spine-text">
            <span className="spine-title">Englisch-LCCI</span>
            <span className="spine-level">Level {currentLevel}</span>
          </div>
        </div>
      </div>

      {/* === Entry Modal ===*/}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>
                <span className="modal-icon">{editingEntry ? "✏️" : "➕"}</span>
                {editingEntry ? "Edit Entry" : "Add New Entry"}
              </h3>
              <button className="btn-close" onClick={closeModal}>
                ✕
              </button>
            </div>

            <div className="modal-body">
              <div className="form-row">
                <div className="form-group">
                  <label>Chapter</label>
                  <select
                    value={selectedChapter || ""}
                    onChange={(e) => setSelectedChapter(e.target.value)}
                    className="form-select"
                  >
                    <option value="">Select Chapter</option>
                    {/* Standard Chapters */}
                    <optgroup label="📖 Standard Chapters">
                      {currentLevelData.chapters.map((chapter, index) => (
                        <option key={`standard-${index}`} value={chapter}>
                          {String(index + 1).padStart(2, "0")}. {chapter}
                        </option>
                      ))}
                    </optgroup>
                    {/* Custom Chapters */}
                    {customChapters.filter(
                      (chapter) => chapter.level === currentLevel
                    ).length > 0 && (
                      <optgroup label="✨ Custom Chapters">
                        {customChapters
                          .filter((chapter) => chapter.level === currentLevel)
                          .map((chapter, index) => {
                            const chapterNumber =
                              currentLevelData.chapters.length + index + 1;
                            return (
                              <option
                                key={`custom-${chapter.id}`}
                                value={chapter.title}
                              >
                                {String(chapterNumber).padStart(2, "0")}.{" "}
                                {chapter.title}
                              </option>
                            );
                          })}
                      </optgroup>
                    )}
                  </select>
                </div>

                <div className="form-group">
                  <label>Category</label>
                  <select
                    value={newEntry.category}
                    onChange={(e) =>
                      setNewEntry({ ...newEntry, category: e.target.value })
                    }
                    className="form-select"
                  >
                    {Object.entries(entryCategories).map(([key, cat]) => (
                      <option key={key} value={key}>
                        {cat.icon} {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  value={newEntry.title}
                  onChange={(e) =>
                    setNewEntry({ ...newEntry, title: e.target.value })
                  }
                  placeholder="Enter entry title..."
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label>Content</label>
                <textarea
                  value={newEntry.content}
                  onChange={(e) =>
                    setNewEntry({ ...newEntry, content: e.target.value })
                  }
                  placeholder="Enter your LCCI content here...&#10;&#10;Examples:&#10;• Vocabulary words&#10;• Grammar rules&#10;• Practice exercises&#10;• Notes and tips"
                  className="form-textarea"
                  rows={8}
                />
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn-cancel" onClick={closeModal}>
                Cancel
              </button>
              <button
                className="btn-save"
                onClick={editingEntry ? handleUpdateEntry : handleAddEntry}
                disabled={
                  !newEntry.title.trim() ||
                  !newEntry.content.trim() ||
                  !selectedChapter
                }
              >
                <span className="btn-icon">{editingEntry ? "💾" : "✨"}</span>
                {editingEntry ? "Update Entry" : "Add Entry"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* === Chapter Modal ===*/}
      {showChapterModal && (
        <div className="modal-overlay" onClick={closeChapterModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>
                <span className="modal-icon">
                  {editingChapter ? "✏️" : "📚"}
                </span>
                {editingChapter ? "Edit Chapter" : "Add New Chapter"}
              </h3>
              <button className="btn-close" onClick={closeChapterModal}>
                ✕
              </button>
            </div>

            <div className="modal-body">
              <div className="form-group">
                <label>Chapter Title</label>
                <input
                  type="text"
                  value={newChapter}
                  onChange={(e) => setNewChapter(e.target.value)}
                  placeholder="Enter chapter title..."
                  className="form-input"
                  autoFocus
                />
                <small className="form-hint">
                  Create custom chapters for Level {currentLevel} content
                  organization
                </small>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn-cancel" onClick={closeChapterModal}>
                Cancel
              </button>
              <button
                className="btn-save"
                onClick={
                  editingChapter ? handleUpdateChapter : handleAddChapter
                }
                disabled={!newChapter.trim()}
              >
                <span className="btn-icon">{editingChapter ? "💾" : "✨"}</span>
                {editingChapter ? "Update Chapter" : "Create Chapter"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* === Reset Confirmation Modal ===*/}
      {showResetModal && (
        <div className="modal-overlay" onClick={closeResetModal}>
          <div
            className="modal-content reset-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3>
                <span className="modal-icon">⚠️</span>
                Confirm Reset All
              </h3>
              <button className="btn-close" onClick={closeResetModal}>
                ✕
              </button>
            </div>

            <div className="modal-body">
              <div className="reset-warning">
                <div className="warning-content">
                  <p>
                    <strong>⚠️ This action cannot be undone!</strong>
                  </p>
                  <p>You are about to permanently delete:</p>
                  <ul>
                    <li>
                      ✗ All {currentLevelEntries.length} entries for Level{" "}
                      {currentLevel}
                    </li>
                    <li>✗ All custom chapters for Level {currentLevel}</li>
                    <li>✗ All related content and progress</li>
                  </ul>
                  <p>Are you absolutely sure you want to continue?</p>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn-cancel" onClick={closeResetModal}>
                Cancel
              </button>
              <button className="btn-danger" onClick={confirmResetAll}>
                <span className="btn-icon">🔄</span>
                Yes, Reset Everything
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnglischLcciBook3D;
