import React from 'react';
import { Sparkles, Sun, BookOpen, Apple, Palette, Moon } from 'lucide-react';

export default function DailyRoutine() {
  const steps = [
    {
      time: '08:30 AM',
      icon: '👋',
      title: 'Warm Welcome',
      desc: 'Morning greetings, mood check-ins, circle rhymes & energy warmup.'
    },
    {
      time: '09:30 AM',
      icon: '🔤',
      title: 'Phonics & Montessori',
      desc: 'Letter sounds, vocabulary, tactile sensorial mathematics apparatus.'
    },
    {
      time: '11:00 AM',
      icon: '🍎',
      title: 'Snack & Etiquette',
      desc: 'Healthy snack time, hygienic hand washing & positive social eating.'
    },
    {
      time: '11:45 AM',
      icon: '🎨',
      title: 'Creative Expression',
      desc: 'Art, clay modeling, storytelling theatre, rhythm music & dance.'
    },
    {
      time: '01:00 PM',
      icon: '🌟',
      title: 'Wrap-Up / Daycare',
      desc: 'Reflection circle, cheerful farewell or loving afternoon care.'
    }
  ];

  return (
    <section className="routine-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} style={{ display: 'inline', marginRight: 4 }} />
            A Day at Bloomsfield
          </div>
          <h2 className="section-title">
            A Joyful Daily Flow of <span className="highlight">Learning & Play</span>
          </h2>
          <p className="section-desc">
            Balanced structure providing regular rhythms, sensory enrichment, physical vitality, and quiet reflection.
          </p>
        </div>

        <div className="timeline-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="timeline-step">
              <span className="step-time">{step.time}</span>
              <div className="step-icon">{step.icon}</div>
              <h4 className="step-title">{step.title}</h4>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
