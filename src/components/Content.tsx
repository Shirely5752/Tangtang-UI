import React from 'react';
import { Link } from 'react-router-dom';

const Content = () => {
  const [musicOn, setMusicOn] = React.useState(true);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  React.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const tryPlay = () => {
      audio.play().catch(() => {});
    };
    tryPlay();
    const handler = () => { tryPlay(); document.removeEventListener('click', handler); };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (musicOn) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setMusicOn(!musicOn);
    }
  };

  return (
    <main>
      <audio ref={audioRef} loop src={process.env.PUBLIC_URL + '/bgm.mp3'} />
      <button className="music-toggle" onClick={toggleMusic} aria-label="Toggle music">
        {musicOn ? '🔊' : '🔇'}
      </button>
      {/* Hero */}
      <section className="hero">
        <div className="hero__text">
          <h1>Hi, I'm <span className="highlight">Tingting Lyu</span> 👋</h1>
          <p>Software Developer · AI & ML Enthusiast · Data Analyst · Creative Storyteller</p>
          <p className="hero__sub">Stockholm, Sweden 🇸🇪 | Ericsson Thesis Student | MSc Computer Science @ Uppsala University</p>
          <div className="hero__buttons">
            <Link to="/projects" className="btn btn--primary">View Projects</Link>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn btn--outline">Contact Me</button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2 className="section__title">✨ About Me</h2>
        <div className="about-grid">
          <div className="card">
            <h3>🎓 Education</h3>
            <p>
              <strong>MSc Computer Science</strong> — Uppsala University (2024–present)<br />
              <strong>Exchange</strong> — Montreal Polytechnic University (2025)<br />
              <strong>BSc Software Development</strong> — Kristianstad University (2021–2024)<br />
              <strong>BEng Computer Science</strong> — Shanghai Polytechnic University (2020–2024)<br />
              <strong>Exchange</strong> — Ruse University, Bulgaria (2022)
            </p>
          </div>
          <div className="card">
            <h3>💼 Experience</h3>
            <p>
              <strong>Thesis Student @ Ericsson</strong> (2026–present) — Designing interactive query interfaces for telecom power systems using open-source LLMs.<br />
              <strong>RAG Engineer @ Ericsson</strong> (2025) — Built an enterprise document-aware chatbot with on-premise LLM, PDF parsing & vector DB.<br />
              <strong>Game UX Analyst Intern @ Ruse University</strong> (2022) — Analyzed gaming preferences using Hadoop, Spark & ML.
            </p>
          </div>
          <div className="card">
            <h3>💻 Technical Skills</h3>
            <p>
              <strong>AI & ML:</strong> Keras, OpenCV, Scikit-learn, CNN, NLP, Image Recognition<br />
              <strong>Big Data & Cloud:</strong> Hadoop, Spark, PySpark, Docker, K8s, CI/CD<br />
              <strong>Web & Mobile:</strong> Vue.js, Kotlin, Android, HTML/CSS, Figma<br />
              <strong>Languages:</strong> Python, Java, R, MATLAB, C, Linux<br />
              <strong>Optimization:</strong> PSO, GA, Constraint Programming, A* Algorithm
            </p>
          </div>
          <div className="card">
            <h3>🌍 Languages & Interests</h3>
            <p>
              English · Swedish · Mandarin · Japanese<br />
              🎿 Skiing · 🎻 Violin · 🥊 Boxing<br />
              Passionate about writing, animation & video editing — making complex concepts engaging and accessible.
            </p>
          </div>
        </div>
      </section>

      {/* Video */}
      <section id="video" className="section section--alt">
        <h2 className="section__title">🎬 Introduction Video</h2>
        <div className="video-wrapper">
          <iframe
            src="https://drive.google.com/file/d/14lvH7QhxZFLFF4jFFUsJCtg04wXKJfYZ/preview"
            width="800"
            height="450"
            allow="autoplay"
            title="Introduction Video"
          />
        </div>
      </section>

      {/* Teamwork */}
      <section id="teamwork" className="section">
        <h2 className="section__title">🤝 My Teamwork Viewpoint</h2>
        <div className="video-wrapper">
          <iframe
            src="https://drive.google.com/file/d/1IIhQyYNM4lWzAkRvYN18qmxc08gHzDwr/preview"
            width="800"
            height="450"
            allow="autoplay"
            title="Teamwork Viewpoint Video"
          />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2 className="section__title">📬 Contact Me</h2>
        <p className="contact__intro">
          Interested in my profile? Feel free to reach out! I'd love to connect. 😊
        </p>
        <div className="contact-grid">
          <a href="mailto:allfdcm6@gmail.com" className="card card--contact">
            <span>📧</span> allfdcm6@gmail.com
          </a>
          <a href="tel:+46729623388" className="card card--contact">
            <span>📞</span> +46 729 623 388
          </a>
          <a href="https://www.linkedin.com/in/tingtinglyu-2b61932ab/" target="_blank" rel="noreferrer" className="card card--contact">
            <span>💼</span> LinkedIn
          </a>
          <a href="https://github.com/Shirely5752" target="_blank" rel="noreferrer" className="card card--contact">
            <span>🐙</span> GitHub
          </a>
          <a href="https://discord.com/channels/@me" target="_blank" rel="noreferrer" className="card card--contact">
            <span>💬</span> Discord
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Tingting Lyu · Built with React 💜</p>
      </footer>
    </main>
  );
};

export default Content;
