import React from 'react';
import { Link } from 'react-router-dom';

const lyrics = [
  { time: 0, text: "I'd like to work at your startup." },
  { time: 4, text: "Hello, Hiring Manager." },
  { time: 7, text: "If I was your employee, I'd never take a break." },
  { time: 11, text: "No matter the hours, work me like a slave." },
  { time: 15, text: "I'm severely underpaid, I still won't complain." },
  { time: 19, text: "If I was your employee, I'd never take a break." },
  { time: 23, text: "Tell me what you like, what you really looking for." },
  { time: 27, text: "I could manages all the finances, review all the code." },
  { time: 31, text: "I could do some AI shit you don't even know." },
  { time: 35, text: "You're tryna pitch to YC, I'll get you through the door." },
  { time: 39, text: "Employee, employee, I could be ur employee." },
  { time: 43, text: "I could be your employee summer, fall, and winter." },
  { time: 47, text: "After my paycheck, I'll treat y'all out to dinner." },
  { time: 51, text: "Hope to hear back, let me know if you're interested." },
];

const Content = () => {
  const [musicOn, setMusicOn] = React.useState(true);
  const [currentLine, setCurrentLine] = React.useState(0);
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const lyricsRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const tryPlay = () => {
      audio.play().catch(() => {});
    };
    tryPlay();
    const handler = () => { tryPlay(); document.removeEventListener('click', handler); };
    document.addEventListener('click', handler);

    const syncLyrics = () => {
      const t = audio.currentTime;
      let idx = 0;
      for (let i = lyrics.length - 1; i >= 0; i--) {
        if (t >= lyrics[i].time) { idx = i; break; }
      }
      setCurrentLine(idx);
      requestAnimationFrame(syncLyrics);
    };
    const raf = requestAnimationFrame(syncLyrics);

    return () => {
      document.removeEventListener('click', handler);
      cancelAnimationFrame(raf);
    };
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
          <p>Software Engineer · AI & ML Enthusiast · Data Scientist · Creative Storyteller</p>
          <p className="hero__sub">Stockholm, Sweden 🇸🇪 | Ericsson Intern | MSc Computer Science @ Uppsala University</p>
          <div className="hero__buttons">
            <Link to="/projects" className="btn btn--primary">View Projects</Link>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn btn--outline">Contact Me</button>
          </div>
        </div>
      </section>

      {/* Lyrics */}
      <section className="lyrics-section">
        <div className="lyrics-ide">
          <div className="lyrics-ide__titlebar">
            <div className="lyrics-ide__dots">
              <span style={{ background: '#ff5f56' }} />
              <span style={{ background: '#ffbd2e' }} />
              <span style={{ background: '#27c93f' }} />
            </div>
            <span className="lyrics-ide__filename">hire_me.py</span>
          </div>
          <div className="lyrics-ide__body" ref={lyricsRef}>
            {lyrics.map((l, i) => (
              <div key={i} className={`lyrics-line ${i === currentLine ? 'lyrics-line--active' : i < currentLine ? 'lyrics-line--past' : ''}`}>
                <span className="lyrics-line__num">{i + 1}</span>
                <span className="lyrics-line__text">
                  {i === 0 ? <span className="lyrics-kw">def </span> : null}
                  {i === 0 ? <span className="lyrics-fn">hire_me</span> : null}
                  {i === 0 ? '(): ' : null}
                  {i === 0 ? <span className="lyrics-comment"># 🎵</span> : null}
                  {i !== 0 && <><span className="lyrics-str">"{l.text}"</span>{i === currentLine && <span className="lyrics-cursor">|</span>}</>}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2 className="section__title">✨ About Me</h2>
        <div className="about-grid about-grid--2col">
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
        </div>
        <div className="card card--wide">
          <h3>💻 Technical Skills</h3>
          <div className="skills-grid">
            <div><strong>AI & ML</strong><br />AI Agents (Amazon Q), Keras, OpenCV, Scikit-learn, CNN, NLP, Image Recognition, DL, HMM, Naive Bayes</div>
            <div><strong>Big Data & Cloud</strong><br />Hadoop, Spark, PySpark, SSH, Linux, Git, Swedish Science Cloud, Docker, K8s, CI/CD</div>
            <div><strong>Data Analysis</strong><br />Pandas, Seaborn, Matplotlib, ECharts</div>
            <div><strong>Optimization</strong><br />PSO, GA, Combinatorial Optimization, Constraint Programming, A* Algorithm</div>
            <div><strong>Web & Mobile</strong><br />Vue.js, Kotlin, Android, HTML/CSS, Figma, UI/UX Design</div>
            <div><strong>Testing</strong><br />PyTest, Unit Testing, System Testing</div>
            <div><strong>Programming</strong><br />Python, Java, R, MATLAB, C, Linux</div>
            <div><strong>Presentation</strong><br />Animation creation, technical writing, story articles & essays</div>
          </div>
        </div>
        <div className="about-grid about-grid--2col">
          <div className="card">
            <h3>🌍 Languages & Interests</h3>
            <p>
              English · Swedish · Mandarin · Japanese<br />
              🎿 Skiing · 🎻 Violin · 🥊 Boxing<br />
              Passionate about writing, animation & video editing — making complex concepts engaging and accessible.
            </p>
          </div>
          <div className="card">
            <h3>🏆 Awards & Scholarships</h3>
            <p>
              <strong>Erasmus Scholarship 1st Prize</strong> — EU, Bulgaria (2022)<br />
              <strong>University Scholarship</strong> — Kristianstad University (2023)<br />
              <strong>University Scholarship</strong> — Shanghai Polytechnic University (2023)
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
