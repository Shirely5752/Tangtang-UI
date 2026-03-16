import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">🍬 Tingting Lyu</Link>
        <button className="navbar__toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? '✕' : '☰'}
        </button>
        <nav className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {isHome ? (
            <>
              <button onClick={() => scrollTo('about')}>About</button>
              <button onClick={() => scrollTo('video')}>Video</button>
              <Link to="/projects">Projects</Link>
              <button onClick={() => scrollTo('teamwork')}>Teamwork</button>
              <button onClick={() => scrollTo('contact')}>Contact</button>
            </>
          ) : (
            <Link to="/">← Home</Link>
          )}
          <Link to="/mylife" className="navbar__cta">My Life Story</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
