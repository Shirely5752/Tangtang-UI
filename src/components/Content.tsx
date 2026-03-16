import React from 'react';

const Content = () => {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero__text">
          <h1>Hi, I'm <span className="highlight">Tingting Lyu</span> 👋</h1>
          <p>Software Developer · Data Enthusiast · Creative Storyteller</p>
          <p className="hero__sub">Based in Sweden 🇸🇪 | Passionate about combining technology with creativity</p>
          <div className="hero__buttons">
            <a href="#projects" className="btn btn--primary">View Projects</a>
            <a href="#contact" className="btn btn--outline">Contact Me</a>
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
              Currently pursuing a Master's in Computer Science at <strong>Uppsala University</strong>, Sweden.
              Bachelor's in Software Development from Kristianstad University, and an engineering degree from
              Shanghai Polytechnic University. Exchange experience at Ruse University, Bulgaria.
            </p>
          </div>
          <div className="card">
            <h3>💻 Technical Skills</h3>
            <p>
              Proficient in Python, R, Kotlin, HTML, CSS, and TypeScript. Experienced in machine learning,
              data analysis, combinatorial optimization, image analysis, and full-stack software development.
            </p>
          </div>
          <div className="card">
            <h3>🎨 Hobbies</h3>
            <p>
              Passionate about writing, animation, and video editing — making complex concepts engaging
              and accessible through creative storytelling.
            </p>
          </div>
          <div className="card">
            <h3>🌍 Languages</h3>
            <p>Fluent in English and Mandarin, enabling effective communication across diverse cultural contexts.</p>
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

      {/* Projects */}
      <section id="projects" className="section">
        <h2 className="section__title">🚀 Projects</h2>
        <div className="about-grid">
          <div className="card card--project">
            <h3>🎞️ Project Animation Showcase</h3>
            <p>An animated overview of various projects I've worked on, from data analysis to software development.</p>
            <a href="#video" className="card__link">Watch the Animation →</a>
          </div>
          <div className="card card--project">
            <h3>📊 Data Analysis</h3>
            <p>Big data analysis projects using Python and R, exploring patterns and insights from complex datasets.</p>
          </div>
          <div className="card card--project">
            <h3>🧩 Combinatorial Optimization</h3>
            <p>Research and implementation of optimization algorithms for real-world problem solving.</p>
          </div>
        </div>
      </section>

      {/* Teamwork */}
      <section id="teamwork" className="section section--alt">
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
          <a href="https://github.com/Shirely5752" target="_blank" rel="noreferrer" className="card card--contact">
            <span>🐙</span> GitHub: tangtang
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
