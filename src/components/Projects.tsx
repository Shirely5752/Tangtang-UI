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
    desc: "Developed a digitalization roadmap for STM's Montreal Canada ticketing system, shifting from physical smart cards to mobile phone–based tickets. Conducted current-state analysis, defined transformation objectives, and created an implementation plan covering system integration, budgeting, ROI estimation, and risk assessment.",
  },
  {
    title: 'ASL Hand Gesture Recognition Using CNN and OpenCV',
    time: '03/2025 – 06/2025',
    tags: ['CNN', 'Keras', 'OpenCV', 'NCML'],
    desc: 'Built a CNN-based system to recognize American Sign Language (ASL) gestures using the Sign Language MNIST dataset. Achieved 93.84% test accuracy with data augmentation and dropout. Deployed real-time webcam inference with OpenCV and background filtering.',
  },
  {
    title: 'Distributed Testing Framework for Large-Scale Java Projects',
    time: '01/2025 – 05/2025',
    tags: ['CI/CD', 'Docker Swarm', 'RabbitMQ', 'GitHub API'],
    desc: 'Built a horizontally scalable system to automate testing of 1,000+ open-source Java/Maven projects. Implemented GitHub data crawler, task queuing via RabbitMQ, and distributed test execution using containerized workers across 1 to 5-node Docker Swarm cluster.',
  },
  {
    title: 'UI Design for Flying Dutchman Pub System',
    time: '01/2025 – 03/2025',
    tags: ['HTML/CSS/JS', 'MVC Architecture'],
    desc: 'Led a team of five in designing and developing an interactive pub management system using the MVC framework. Crafted responsive role interfaces with multilingual support.',
  },
  {
    title: 'Prototyping with Figma',
    time: '11/2024 – 12/2024',
    tags: ['Figma', 'UX/UI Design'],
    desc: 'Created interactive prototypes for a biofeedback-based anxiety management app and a healthcare appointment app. Documented design rationale and shared prototypes for evaluation.',
  },
  {
    title: 'Automated Unit Testing for Online Shopping Cart',
    time: '10/2024 – 12/2024',
    tags: ['Python', 'PyTest', 'Unit Testing'],
    desc: 'Developed automated unit tests for key functions in an online shopping cart application. Focused on input domain modeling and testing functions such as login, checkout, and product display.',
  },
  {
    title: 'Spacecraft Assembly Optimization Using MiniZinc',
    time: '09/2024 – 10/2024',
    tags: ['MiniZinc', 'COCP'],
    desc: 'Developed two models using different viewpoints to minimize storage and setup cost. Evaluated multiple backends (Chuffed, Gecode) and provided real-world recommendations.',
  },
  {
    title: 'Delivery Optimization Using A* Algorithm',
    time: '09/2024 – 10/2024',
    tags: ['R', 'A* Algorithm', 'AI'],
    desc: 'Developed an algorithm to dynamically calculate optimal paths for pickups and deliveries based on real-time traffic changes and road conditions.',
  },
  {
    title: 'Automated Vending Machine with ML on Visual Cameras',
    time: '01/2024 – 06/2024',
    tags: ['Computer Vision', 'OpenMV', 'YOLO'],
    desc: 'Built an automated vending machine with real-time object detection using edge computing (OpenMV). Integrated ML models (YOLO) for product recognition and user interaction via visual cameras.',
  },
  {
    title: 'Back Tracking System Based on Visual Camera',
    time: '11/2023 – 06/2024',
    tags: ['SSD', 'OpenCV', 'Android'],
    desc: 'Combined computer vision and machine learning to develop a camera-based silhouette tracking system for real-time monitoring and security in small to medium-sized enterprises.',
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
    desc: 'Conducted large-scale data analysis on Netflix movie datasets using Apache Spark and Hadoop. Deployed a Spark cluster on cloud VMs via SSH for distributed processing. Visualized insights using ECharts and Python.',
  },
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

      {/* Featured: Bachelor Thesis */}
      <section className="section">
        <h2 className="section__title">⭐ Featured — Bachelor Thesis</h2>
        <div className="video-wrapper">
          <iframe
            src="https://drive.google.com/file/d/1k0ayrUw8PRNbr_oqK9dcZmChQPb5HM_P/preview"
            width="800"
            height="450"
            allow="autoplay"
            title="Bachelor Thesis - Kristianstad University"
          />
        </div>
        <div className="card" style={{ maxWidth: 800, margin: '1.5rem auto 0' }}>
          <h3>Design of Automated Vending Machine with Deployed ML Models on Visual Cameras</h3>
          <p style={{ marginBottom: '0.5rem', fontSize: '0.9rem', color: '#6c5ce7' }}>
            01/2024 – 06/2024 | Kristianstad University
          </p>
          <p>
            Built an automated vending machine with real-time object detection using edge computing (OpenMV).
            Integrated ML models (YOLO) for product recognition and user interaction via visual cameras.
          </p>
          <div className="tags" style={{ marginTop: '0.8rem' }}>
            {['Computer Vision', 'OpenMV', 'YOLO', 'Image Recognition'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="section section--alt">
        <h2 className="section__title">📂 All Projects</h2>
        <div className="about-grid">
          {projects.map((p, i) => (
            <div key={i} className="card card--project">
              <h3>{p.title}</h3>
              <p style={{ fontSize: '0.85rem', color: '#6c5ce7', marginBottom: '0.5rem' }}>{p.time}</p>
              <p>{p.desc}</p>
              <div className="tags" style={{ marginTop: '0.8rem' }}>
                {p.tags.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
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
