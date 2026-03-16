import React from 'react';
import Header from './Header';

const projects = [
  {
    title: 'Log-based Anomaly Detection',
    time: '09/2025 – 12/2025',
    tags: ['Log Parsing', 'LSTM', 'Isolation Forest', 'PCA', 'SHAP'],
    desc: 'Conducted log-based anomaly detection by parsing raw logs, building numerical representations, and comparing classical, deep-learning, and unsupervised models, including correlation/VIF analysis to identify key predictive log patterns.',
  },
  {
    title: 'Digitalization Strategy for Public Transportation Ticketing',
    time: '08/2025 – Present',
    tags: ['Digital Strategy', 'ROI Analysis'],
    desc: "Developed a digitalization roadmap for STM's Montreal Canada ticketing system, shifting from physical smart cards to mobile phone–based tickets. Conducted current-state analysis, defined transformation objectives, and created an implementation plan.",
  },
  {
    title: 'ASL Hand Gesture Recognition Using CNN and OpenCV',
    time: '03/2025 – 06/2025',
    tags: ['CNN', 'Keras', 'OpenCV', 'NCML'],
    desc: 'Built a CNN-based system to recognize ASL gestures. Achieved 93.84% test accuracy with data augmentation and dropout. Deployed real-time webcam inference with OpenCV.',
  },
  {
    title: 'Distributed Testing Framework for Large-Scale Java Projects',
    time: '01/2025 – 05/2025',
    tags: ['CI/CD', 'Docker Swarm', 'RabbitMQ', 'GitHub API'],
    desc: 'Built a horizontally scalable system to automate testing of 1,000+ open-source Java/Maven projects with distributed execution across 1 to 5-node Docker Swarm cluster.',
  },
  {
    title: 'UI Design for Flying Dutchman Pub System',
    time: '01/2025 – 03/2025',
    tags: ['HTML/CSS/JS', 'MVC Architecture'],
    desc: 'Led a team of five in designing and developing an interactive pub management system using the MVC framework with multilingual support.',
  },
  {
    title: 'Prototyping with Figma',
    time: '11/2024 – 12/2024',
    tags: ['Figma', 'UX/UI Design'],
    desc: 'Created interactive prototypes for a biofeedback-based anxiety management app and a healthcare appointment app.',
  },
  {
    title: 'Automated Unit Testing for Online Shopping Cart',
    time: '10/2024 – 12/2024',
    tags: ['Python', 'PyTest', 'Unit Testing'],
    desc: 'Developed automated unit tests for key functions in an online shopping cart application with input domain modeling.',
  },
  {
    title: 'Spacecraft Assembly Optimization Using MiniZinc',
    time: '09/2024 – 10/2024',
    tags: ['MiniZinc', 'COCP'],
    desc: 'Developed two models using different viewpoints to minimize storage and setup cost. Evaluated multiple backends (Chuffed, Gecode).',
  },
  {
    title: 'Delivery Optimization Using A* Algorithm',
    time: '09/2024 – 10/2024',
    tags: ['R', 'A* Algorithm', 'AI'],
    desc: 'Developed an algorithm to dynamically calculate optimal paths for pickups and deliveries based on real-time traffic changes.',
  },
  {
    title: 'Design of Automated Vending Machine with ML on Visual Cameras',
    time: '01/2024 – 06/2024',
    tags: ['Computer Vision', 'OpenMV', 'YOLO'],
    desc: 'Bachelor thesis at Kristianstad University. Built an automated vending machine with real-time object detection using edge computing (OpenMV) and YOLO for product recognition.',
    video: 'https://drive.google.com/file/d/1k0ayrUw8PRNbr_oqK9dcZmChQPb5HM_P/preview',
  },
  {
    title: 'Back Tracking System Based on Visual Camera',
    time: '11/2023 – 06/2024',
    tags: ['SSD', 'OpenCV', 'Android'],
    desc: 'Combined computer vision and ML to develop a camera-based silhouette tracking system for real-time monitoring and security.',
  },
  {
    title: 'Android App Development with Combitech',
    time: '09/2023 – 11/2023',
    tags: ['Kotlin', 'Android Jetpack', 'OkHttp'],
    desc: 'Collaborative project with Combitech company. Designed user interfaces using Kotlin, enhancing user interaction and experience.',
  },
  {
    title: "Netflix Movies' Big Data Analysis",
    time: '06/2023 – 08/2023',
    tags: ['Spark', 'Hadoop', 'Cloud', 'ECharts'],
    desc: 'Large-scale data analysis on Netflix datasets using Spark and Hadoop on cloud VMs. Visualized insights using ECharts and Python.',
  },
];

const ericssonTimeline = [
  {
    phase: 'Phase 1 — Summer Internship',
    time: '06/2025 – 08/2025',
    title: 'Enterprise-Grade RAG for Complex Technical Standards',
    points: [
      'Designed and deployed an internal document-aware chatbot powered by a locally hosted LLM',
      'Built a PDF parsing and retrieval pipeline using embedding models and vector databases (Chroma DB)',
      'Ensured data privacy through on-premise LLM deployment, integrated into internal systems',
    ],
    tags: ['RAG', 'LLM', 'Chroma DB', 'Embedding Models', 'PDF Parsing'],
  },
  {
    phase: 'Phase 2 — Master Thesis',
    time: '01/2026 – Present',
    title: 'Interactive Query Interface for Telecom Power Systems',
    points: [
      'Designing an interactive query interface for telecommunications power systems',
      'Leveraging open-source LLMs to analyze heterogeneous data sources',
      'Building on RAG expertise from Phase 1 to handle complex technical domain knowledge',
    ],
    tags: ['LLM', 'Telecom', 'Data Analysis', 'Open-Source AI', 'Query Interface'],
  },
];

const ericssonStats = [
  { icon: '🤖', value: '2', label: 'LLM Systems Built' },
  { icon: '📄', value: '1000+', label: 'Documents Processed' },
  { icon: '🔒', value: '100%', label: 'On-Premise & Private' },
  { icon: '⚡', value: '9 mo+', label: 'Continuous R&D' },
];

const gamingBars = [
  { label: 'RPG', pct: 82, color: '#6c5ce7' },
  { label: 'Action', pct: 74, color: '#a29bfe' },
  { label: 'Strategy', pct: 68, color: '#fd79a8' },
  { label: 'Sports', pct: 55, color: '#fdcb6e' },
  { label: 'Simulation', pct: 47, color: '#00cec9' },
];

const gamingMetrics = [
  { icon: '🌍', value: '4+', label: 'Cultural Regions Analyzed' },
  { icon: '🎮', value: '5', label: 'Game Genres Studied' },
  { icon: '📊', value: '10K+', label: 'Player Records Processed' },
  { icon: '🧠', value: '6 mo', label: 'Research Duration' },
];

const gamingTechStack = [
  { name: 'Hadoop', pct: 90 },
  { name: 'Spark', pct: 85 },
  { name: 'Keras', pct: 75 },
  { name: 'Sklearn', pct: 80 },
  { name: 'Python', pct: 95 },
];

const Projects = () => {
  return (
    <div>
      <Header />
      <section className="hero" style={{ minHeight: '40vh' }}>
        <div className="hero__text">
          <h1>My Projects 🚀</h1>
          <p>A showcase of my work and achievements</p>
        </div>
      </section>

      {/* Featured 1: Ericsson LLM Journey */}
      <section className="section">
        <h2 className="section__title">⭐ Featured — LLM Research Journey @ Ericsson</h2>
        <div className="stats-grid">
          {ericssonStats.map((s, i) => (
            <div key={i} className="stat-card">
              <span className="stat-card__icon">{s.icon}</span>
              <span className="stat-card__value">{s.value}</span>
              <span className="stat-card__label">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="timeline">
          {ericssonTimeline.map((t, i) => (
            <div key={i} className="timeline__item">
              <div className="timeline__dot" />
              <div className="timeline__content">
                <span className="timeline__phase">{t.phase}</span>
                <span className="timeline__time">{t.time}</span>
                <h3>{t.title}</h3>
                <ul>
                  {t.points.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
                <div className="tags">
                  {t.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured 2: Gaming UX Analytics */}
      <section className="section section--alt">
        <h2 className="section__title">🎮 Featured — Game User Experience Analytics @ Ruse University</h2>
        <p style={{ textAlign: 'center', color: '#4a5568', marginBottom: '2rem', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
          Spearheaded comprehensive analysis of gaming preferences across diverse cultural demographics,
          utilizing big data technologies and machine learning to identify trends in game popularity and user engagement.
        </p>

        {/* Metrics */}
        <div className="stats-grid">
          {gamingMetrics.map((s, i) => (
            <div key={i} className="stat-card stat-card--gaming">
              <span className="stat-card__icon">{s.icon}</span>
              <span className="stat-card__value">{s.value}</span>
              <span className="stat-card__label">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="dashboard-grid">
          {/* Genre Popularity Chart */}
          <div className="card dashboard-card">
            <h3>📈 Genre Popularity by Engagement</h3>
            <div className="bar-chart">
              {gamingBars.map((b, i) => (
                <div key={i} className="bar-chart__row">
                  <span className="bar-chart__label">{b.label}</span>
                  <div className="bar-chart__track">
                    <div
                      className="bar-chart__fill"
                      style={{ background: b.color, animationDelay: `${i * 0.15}s`, ['--w' as any]: `${b.pct}%` }}
                    />
                  </div>
                  <span className="bar-chart__pct">{b.pct}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Proficiency */}
          <div className="card dashboard-card">
            <h3>🛠️ Tech Stack Used</h3>
            <div className="tech-rings">
              {gamingTechStack.map((t, i) => (
                <div key={i} className="ring-item">
                  <div className="ring">
                    <svg viewBox="0 0 36 36">
                      <path
                        className="ring__bg"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="ring__fill"
                        strokeDasharray={`${t.pct}, 100`}
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        style={{ ['--ring-pct' as any]: t.pct, animationDelay: `${i * 0.2}s` }}
                      />
                    </svg>
                    <span className="ring__text">{t.pct}%</span>
                  </div>
                  <span className="ring-item__label">{t.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Findings */}
          <div className="card dashboard-card dashboard-card--wide">
            <h3>🔍 Key Findings</h3>
            <div className="findings-grid">
              <div className="finding">
                <span className="finding__icon">🌏</span>
                <p><strong>Asia</strong> showed highest engagement in RPG and Strategy genres</p>
              </div>
              <div className="finding">
                <span className="finding__icon">🇪🇺</span>
                <p><strong>Europe</strong> preferred Action and Simulation games with longer sessions</p>
              </div>
              <div className="finding">
                <span className="finding__icon">🇺🇸</span>
                <p><strong>USA</strong> dominated Sports genre with highest in-game purchase rates</p>
              </div>
              <div className="finding">
                <span className="finding__icon">📱</span>
                <p>Players aged <strong>18–25</strong> had 2x higher session frequency than other groups</p>
              </div>
            </div>
            <div className="tags" style={{ marginTop: '1rem' }}>
              {['Hadoop', 'Spark', 'Keras', 'Sklearn', 'Big Data', 'ML', 'Cross-Cultural Analysis'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="section">
        <h2 className="section__title">📂 All Projects</h2>
        <div className="about-grid">
          {projects.map((p, i) => (
            <div key={i} className="card card--project">
              <h3>{p.title}</h3>
              <p style={{ fontSize: '0.85rem', color: '#6c5ce7', marginBottom: '0.5rem' }}>{p.time}</p>
              <p>{p.desc}</p>
              {p.video && (
                <div className="video-wrapper" style={{ marginTop: '1rem' }}>
                  <iframe src={p.video} width="100%" height="280" allow="autoplay" title={p.title} />
                </div>
              )}
              <div className="tags" style={{ marginTop: '0.8rem' }}>
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Tingting Lyu · Built with React 💜</p>
      </footer>
    </div>
  );
};

export default Projects;
