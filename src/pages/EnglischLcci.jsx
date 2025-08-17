/**
 * EnglischLcci - Englisch-LCCI Lernseite mit 3D Buch
 * LCCI Levels A1-C2 mit Cambridge English System
 * Layout 1:1 aus JavaScript & TypeScript übernommen
 * Autor: Metal-IT-Team
 */
import React, { useState } from "react";
import EnglischLcciBook3D from "../components/EnglischLcciBook3D";
import "./EnglischLcci.scss";

/**
 * Englisch-LCCI Cambridge Levels Hauptseite
 */
const EnglischLcci = () => {
  const [activeLevel, setActiveLevel] = useState("a1");

  return (
    <div className="englisch-lcci-page">
      {/* Header mit Cambridge Gradient Background */}
      <div className="englisch-lcci-header">
        <div className="header-content">
          <h1 className="page-title">
            <span className="title-icon">🎓</span>
            Englisch-LCCI Cambridge
            <span className="title-decoration">⚡</span>
          </h1>
          <p className="page-subtitle">
            Comprehensive English Learning - LCCI Levels A1 bis C2 (Common
            European Framework of Reference)
          </p>
        </div>
      </div>

      {/* Level Toggle System */}
      <div className="level-toggle-container">
        <div className="level-toggle">
          <button
            className={`toggle-btn level-a1 ${
              activeLevel === "a1" ? "active" : ""
            }`}
            onClick={() => setActiveLevel("a1")}
          >
            <span className="btn-icon">🌱</span>
            <span className="btn-text">A1</span>
            <span className="btn-version">Beginner</span>
          </button>

          <button
            className={`toggle-btn level-a2 ${
              activeLevel === "a2" ? "active" : ""
            }`}
            onClick={() => setActiveLevel("a2")}
          >
            <span className="btn-icon">🌿</span>
            <span className="btn-text">A2</span>
            <span className="btn-version">Elementary</span>
          </button>

          <button
            className={`toggle-btn level-b1 ${
              activeLevel === "b1" ? "active" : ""
            }`}
            onClick={() => setActiveLevel("b1")}
          >
            <span className="btn-icon">🌳</span>
            <span className="btn-text">B1</span>
            <span className="btn-version">Intermediate</span>
          </button>

          <button
            className={`toggle-btn level-b2 ${
              activeLevel === "b2" ? "active" : ""
            }`}
            onClick={() => setActiveLevel("b2")}
          >
            <span className="btn-icon">🎯</span>
            <span className="btn-text">B2</span>
            <span className="btn-version">Upper-Int.</span>
          </button>

          <button
            className={`toggle-btn level-c1 ${
              activeLevel === "c1" ? "active" : ""
            }`}
            onClick={() => setActiveLevel("c1")}
          >
            <span className="btn-icon">🔥</span>
            <span className="btn-text">C1</span>
            <span className="btn-version">Advanced</span>
          </button>

          <button
            className={`toggle-btn level-c2 ${
              activeLevel === "c2" ? "active" : ""
            }`}
            onClick={() => setActiveLevel("c2")}
          >
            <span className="btn-icon">👑</span>
            <span className="btn-text">C2</span>
            <span className="btn-version">Mastery</span>
          </button>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="englisch-lcci-content">
        {/* Central Book Section */}
        <div className="book-section">
          <div className="book-container">
            <EnglischLcciBook3D currentLevel={activeLevel.toUpperCase()} />
          </div>
        </div>

        {/* QuickStart Section (hidden for central focus) */}
        <div className="quickstart-section">
          <div className="section-header">
            <h2 className="section-title">
              <span className="section-icon">🚀</span>
              QuickStart Guide
            </h2>
            <p className="section-subtitle">
              Essential LCCI Learning Resources
            </p>
          </div>

          <div className="quickstart-content">
            {activeLevel === "a1" && (
              <div className="level-info">
                <div className="code-example">
                  <div className="code-header">
                    <span className="language-tag">A1 - Beginner</span>
                    <span className="description">
                      Basic Vocabulary & Grammar
                    </span>
                  </div>
                  <div className="code-content">
                    <div className="example-section">
                      <h4>Essential Phrases:</h4>
                      <ul>
                        <li>Hello, my name is...</li>
                        <li>How are you?</li>
                        <li>Where are you from?</li>
                        <li>Nice to meet you</li>
                        <li>Thank you very much</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeLevel === "a2" && (
              <div className="level-info">
                <div className="code-example">
                  <div className="code-header">
                    <span className="language-tag">A2 - Elementary</span>
                    <span className="description">Basic Conversations</span>
                  </div>
                  <div className="code-content">
                    <div className="example-section">
                      <h4>Conversation Skills:</h4>
                      <ul>
                        <li>Talking about family and friends</li>
                        <li>Describing places and routines</li>
                        <li>Simple past tense</li>
                        <li>Making plans for the future</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeLevel === "b1" && (
              <div className="level-info">
                <div className="code-example">
                  <div className="code-header">
                    <span className="language-tag">B1 - Intermediate</span>
                    <span className="description">Independent User</span>
                  </div>
                  <div className="code-content">
                    <div className="example-section">
                      <h4>Skills Development:</h4>
                      <ul>
                        <li>Express opinions and preferences</li>
                        <li>Handle work/travel situations</li>
                        <li>Complex grammar structures</li>
                        <li>Write coherent texts</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeLevel === "b2" && (
              <div className="level-info">
                <div className="code-example">
                  <div className="code-header">
                    <span className="language-tag">
                      B2 - Upper-Intermediate
                    </span>
                    <span className="description">
                      Professional Communication
                    </span>
                  </div>
                  <div className="code-content">
                    <div className="example-section">
                      <h4>Advanced Skills:</h4>
                      <ul>
                        <li>Business communication</li>
                        <li>Abstract discussions</li>
                        <li>Technical explanations</li>
                        <li>Fluent interactions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeLevel === "c1" && (
              <div className="level-info">
                <div className="code-example">
                  <div className="code-header">
                    <span className="language-tag">C1 - Advanced</span>
                    <span className="description">
                      Effective Operational Proficiency
                    </span>
                  </div>
                  <div className="code-content">
                    <div className="example-section">
                      <h4>Proficient User:</h4>
                      <ul>
                        <li>Express ideas spontaneously</li>
                        <li>Academic and professional contexts</li>
                        <li>Complex text comprehension</li>
                        <li>Sophisticated language use</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeLevel === "c2" && (
              <div className="level-info">
                <div className="code-example">
                  <div className="code-header">
                    <span className="language-tag">C2 - Mastery</span>
                    <span className="description">Near-Native Proficiency</span>
                  </div>
                  <div className="code-content">
                    <div className="example-section">
                      <h4>Master Level:</h4>
                      <ul>
                        <li>Native-like fluency</li>
                        <li>Nuanced expressions</li>
                        <li>Complex academic writing</li>
                        <li>Professional interpretation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Learning Topics Grid */}
      <div className="learning-topics">
        <h2 className="topics-title">
          <span className="topics-icon">📚</span>
          LCCI Learning Areas
        </h2>

        <div className="topics-grid">
          <div className="topic-card vocabulary-card">
            <div className="card-header">
              <span className="card-icon">📝</span>
              <h3>Vocabulary Building</h3>
            </div>
            <div className="card-content">
              <p>Essential words and phrases for each LCCI level</p>
              <div className="progress-bar">
                <div className="progress-fill vocabulary-progress"></div>
              </div>
              <span className="progress-text">85% Complete</span>
            </div>
          </div>

          <div className="topic-card grammar-card">
            <div className="card-header">
              <span className="card-icon">📐</span>
              <h3>Grammar & Structure</h3>
            </div>
            <div className="card-content">
              <p>Comprehensive grammar patterns and rules</p>
              <div className="progress-bar">
                <div className="progress-fill grammar-progress"></div>
              </div>
              <span className="progress-text">72% Complete</span>
            </div>
          </div>

          <div className="topic-card speaking-card">
            <div className="card-header">
              <span className="card-icon">🗣️</span>
              <h3>Speaking & Pronunciation</h3>
            </div>
            <div className="card-content">
              <p>Fluency development and accent training</p>
              <div className="progress-bar">
                <div className="progress-fill speaking-progress"></div>
              </div>
              <span className="progress-text">68% Complete</span>
            </div>
          </div>

          <div className="topic-card writing-card">
            <div className="card-header">
              <span className="card-icon">✍️</span>
              <h3>Writing Skills</h3>
            </div>
            <div className="card-content">
              <p>Formal and informal writing techniques</p>
              <div className="progress-bar">
                <div className="progress-fill writing-progress"></div>
              </div>
              <span className="progress-text">79% Complete</span>
            </div>
          </div>

          <div className="topic-card listening-card">
            <div className="card-header">
              <span className="card-icon">👂</span>
              <h3>Listening Comprehension</h3>
            </div>
            <div className="card-content">
              <p>Audio understanding and interpretation</p>
              <div className="progress-bar">
                <div className="progress-fill listening-progress"></div>
              </div>
              <span className="progress-text">81% Complete</span>
            </div>
          </div>

          <div className="topic-card certification-card">
            <div className="card-header">
              <span className="card-icon">🏆</span>
              <h3>LCCI Certification</h3>
            </div>
            <div className="card-content">
              <p>Exam preparation and certification guides</p>
              <div className="progress-bar">
                <div className="progress-fill certification-progress"></div>
              </div>
              <span className="progress-text">91% Complete</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Dashboard */}
      <div className="progress-dashboard">
        <h2 className="dashboard-title">
          <span className="dashboard-icon">📊</span>
          Your LCCI Progress
        </h2>

        <div className="dashboard-content">
          <div className="level-progress">
            <div className="level-item">
              <span className="level-name">A1 - Beginner</span>
              <div className="level-bar">
                <div className="level-fill" style={{ width: "100%" }}></div>
              </div>
              <span className="level-status">✅ Complete</span>
            </div>

            <div className="level-item">
              <span className="level-name">A2 - Elementary</span>
              <div className="level-bar">
                <div className="level-fill" style={{ width: "85%" }}></div>
              </div>
              <span className="level-status">🔄 In Progress</span>
            </div>

            <div className="level-item">
              <span className="level-name">B1 - Intermediate</span>
              <div className="level-bar">
                <div className="level-fill" style={{ width: "60%" }}></div>
              </div>
              <span className="level-status">📚 Learning</span>
            </div>

            <div className="level-item">
              <span className="level-name">B2 - Upper-Intermediate</span>
              <div className="level-bar">
                <div className="level-fill" style={{ width: "25%" }}></div>
              </div>
              <span className="level-status">🎯 Started</span>
            </div>

            <div className="level-item">
              <span className="level-name">C1 - Advanced</span>
              <div className="level-bar">
                <div className="level-fill" style={{ width: "0%" }}></div>
              </div>
              <span className="level-status">🔒 Locked</span>
            </div>

            <div className="level-item">
              <span className="level-name">C2 - Mastery</span>
              <div className="level-bar">
                <div className="level-fill" style={{ width: "0%" }}></div>
              </div>
              <span className="level-status">🔒 Locked</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="englisch-lcci-navigation">
        <a href="#englisch" className="nav-link back-link">
          ← Zurück zu Englisch-Nachschlagewerk
        </a>
        <a href="#dashboard" className="nav-link dashboard-link">
          Dashboard
        </a>
      </div>
    </div>
  );
};

export default EnglischLcci;
