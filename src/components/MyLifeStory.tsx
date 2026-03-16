import React from 'react';
import Header from './Header';

const MyLifeStory = () => {
  return (
    <div>
      <Header />
      <section className="hero hero--story">
        <div className="hero__text">
          <h1>My Grand & Eventful Life 🌟</h1>
          <p>The stories that shaped who I am today</p>
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">🔥 My Fire Incident</h2>
        <div className="card" style={{ maxWidth: 720, margin: '0 auto' }}>
          <h3>Face of an Unexpected Disaster</h3>
          <p>
            Life sometimes throws unexpected challenges our way. This experience taught me resilience,
            the importance of community, and how to find strength in the most difficult moments.
            It fundamentally changed my perspective on what truly matters in life.
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Tingting Lyu · Built with React 💜</p>
      </footer>
    </div>
  );
};

export default MyLifeStory;
