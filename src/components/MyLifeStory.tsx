import React from 'react';
import Header from './Header';

const chapters = [
  {
    icon: '🔥',
    title: 'The Fire',
    color: '#e74c3c',
    text: 'During my exchange in Bulgaria, a fire broke out in my hotel room in the middle of the night. Thick smoke filled the corridors. I was trapped — unable to see, barely able to breathe. It was the most terrifying moment of my life.',
    video: 'https://drive.google.com/file/d/1DSRD2k5z2g7WLBvkpoPjryY8UBzgc3j0/preview',
  },
  {
    icon: '🚒',
    title: 'Rescue & Survival',
    color: '#e67e22',
    text: "Firefighters found me and carried me to safety. I couldn't stop shaking. In the ambulance, I kept questioning whether I had truly made it out. One person died, another fell into a deep coma. I couldn't stop imagining — what if I hadn't been found?",
    video: 'https://drive.google.com/file/d/1PeC76Ajwt4tg07aVrBO4QbdGpUxHSMJK/preview',
  },
  {
    icon: '🤝',
    title: 'Kindness of Strangers',
    color: '#6c5ce7',
    text: "The Chinese Embassy, international education office, local Chinese community — everyone came together. We had lost everything: clothes, shoes, passports, gifts we'd prepared for friends. Yet from that zero point, strangers gave us everything we needed to rebuild. Their selfless support carried us through the darkest days.",
    video: 'https://drive.google.com/file/d/1h6YBGilb6ufaobv37tGYcFLgBzxJV4xM/preview',
  },
  {
    icon: '🏥',
    title: 'Recovery',
    color: '#00b894',
    text: 'Burns on my right wrist and fingers. But the psychological wounds ran deeper. For weeks I was trapped in loops of "what if" — unable to sleep, unable to focus, replaying the smoke and the sirens. I thought I would need professional help to escape those thoughts.',
    video: 'https://drive.google.com/file/d/1xJcaeesO9l4oiXHnjtsWEEeEeYRKWr6S/preview',
  },
  {
    icon: '🌅',
    title: 'Finding Peace',
    color: '#fdcb6e',
    text: "But humans are stronger than they think. The moment I landed in Hong Kong on my way home, an unexpected calm washed over me. The harbor, the city lights, the normalcy of life — it all reminded me that the world keeps turning. Sometimes healing doesn't come from therapy. It comes from simply moving forward.",
    video: 'https://drive.google.com/file/d/1CdyCfybP5oPAmZ-0GaPWg-r1hB-lpdbY/preview',
  },
  {
    icon: '🚀',
    title: 'Moving Forward',
    color: '#0984e3',
    text: "The burns on my wrist have healed. My fingers still ache sometimes — a quiet reminder. But I came back stronger. I continued my studies, earned my bachelor's degree, started my master's at Uppsala, and landed a thesis position at Ericsson. That fire took everything I owned, but it couldn't take my determination.",
  },
];

const lessons = [
  { icon: '🔌', text: 'Always check electrical outlets and appliances before sleeping' },
  { icon: '🚪', text: 'Never re-enter a burning building — not for passports, not for anything' },
  { icon: '🏛️', text: 'Trust your embassy — they will help replace documents and provide support' },
  { icon: '❤️', text: 'Your life is the only thing that truly cannot be replaced' },
];

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
        <h2 className="section__title">🔥 The Bulgaria Fire Incident</h2>
        <p style={{ textAlign: 'center', color: '#4a5568', maxWidth: 700, margin: '0 auto 3rem', fontSize: '1.05rem' }}>
          In 2022, during my exchange program at Ruse University in Bulgaria, a hotel fire changed my life forever.
          This is that story.
        </p>
        <div className="story-timeline">
          {chapters.map((ch, i) => (
            <div key={i} className="story-chapter">
              <div className="story-chapter__marker" style={{ background: ch.color }}>
                <span>{ch.icon}</span>
              </div>
              <div className="story-chapter__card">
                <h3 style={{ color: ch.color }}>{ch.title}</h3>
                {ch.video && (
                  <div className="video-wrapper" style={{ margin: '1rem 0' }}>
                    <iframe src={ch.video} width="100%" height="300" allow="autoplay" title={ch.title} />
                  </div>
                )}
                <p>{ch.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--alt">
        <h2 className="section__title">💡 What I Learned</h2>
        <div className="about-grid" style={{ maxWidth: 800, margin: '0 auto' }}>
          {lessons.map((l, i) => (
            <div key={i} className="card" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
              <span style={{ fontSize: '1.8rem', flexShrink: 0 }}>{l.icon}</span>
              <p style={{ margin: 0 }}>{l.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="card" style={{ maxWidth: 750, margin: '0 auto', textAlign: 'center', padding: '2.5rem' }}>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>🙏 A Message of Gratitude</h3>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
            To the firefighters who saved my life. To the Chinese Embassy in Bulgaria.
            To the international education office. To every teacher, classmate, and stranger
            who helped us when we had nothing — not even shoes on our feet.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.9, marginTop: '1rem' }}>
            I'm sorry I never got to thank you properly in person.
            But I carry your kindness with me every single day.
          </p>
          <p style={{ marginTop: '1.5rem', fontWeight: 700, color: '#6c5ce7', fontSize: '1.1rem' }}>
            We will meet again. 🤝
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
