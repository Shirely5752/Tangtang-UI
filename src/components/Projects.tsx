import React from 'react';
import Header from './Header';

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

      <section className="section">
        <h2 className="section__title">🎓 Bachelor Thesis — Kristianstad University</h2>
        <div className="video-wrapper">
          <iframe
            src="https://drive.google.com/file/d/1k0ayrUw8PRNbr_oqK9dcZmChQPb5HM_P/preview"
            width="800"
            height="450"
            allow="autoplay"
            title="Bachelor Thesis - Kristianstad University"
          />
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Tingting Lyu · Built with React 💜</p>
      </footer>
    </div>
  );
};

export default Projects;
