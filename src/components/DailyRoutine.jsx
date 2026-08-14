import React from 'react';
import { Sparkles, Clock } from 'lucide-react';

const steps = [
  {
    num: '01',
    time: '08:30 AM',
    icon: '👋',
    color: '#FF7043',
    bg: '#FFF3E0',
    borderColor: '#FFE0B2',
    title: 'Warm Welcome',
    desc: 'Morning greetings, mood check-ins, circle rhymes & energy warmup.'
  },
  {
    num: '02',
    time: '09:30 AM',
    icon: '🔤',
    color: '#FF4081',
    bg: '#FCE4EC',
    borderColor: '#F8BBD0',
    title: 'Phonics & Montessori',
    desc: 'Letter sounds, vocabulary, tactile sensorial mathematics apparatus.'
  },
  {
    num: '03',
    time: '11:00 AM',
    icon: '🍎',
    color: '#FFAA00',
    bg: '#FFF6DF',
    borderColor: '#FFE0B2',
    title: 'Snack & Etiquette',
    desc: 'Healthy snack time, hygienic hand washing & positive social eating.'
  },
  {
    num: '04',
    time: '11:45 AM',
    icon: '🎨',
    color: '#8338EC',
    bg: '#F3EBFF',
    borderColor: '#DDD6FE',
    title: 'Creative Expression',
    desc: 'Art, clay modeling, storytelling theatre, rhythm music & dance.'
  },
  {
    num: '05',
    time: '01:00 PM',
    icon: '🌟',
    color: '#66BB6A',
    bg: '#E8F5E9',
    borderColor: '#C8E6C9',
    title: 'Wrap-Up / Daycare',
    desc: 'Reflection circle, cheerful farewell or loving afternoon care.'
  }
];

export default function DailyRoutine() {
  return (
    <section className="routine-section" id="routine">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="section-badge yellow">
            <Clock size={13} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: 4 }} />
            A Day at Bloomsfield
          </div>
          <h2 className="section-title">
            A Joyful Daily Flow of <span className="highlight">Learning & Play</span>
          </h2>
          <p className="section-desc">
            Balanced structure providing regular rhythms, sensory enrichment, physical vitality, and quiet reflection.<br />
            Every hour is thoughtfully designed for your child's happiness and growth! ☀️
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="routine-grid-cute">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="routine-card-cute"
              style={{
                '--step-color': step.color,
                '--step-bg': step.bg,
                '--step-border': step.borderColor
              }}
            >
              <div className="routine-top-accent" style={{ background: step.color }} />
              
              <div className="routine-card-header">
                <span className="routine-num-badge">{step.num}</span>
                <span className="routine-time-pill" style={{ background: step.bg, color: step.color, border: `1px solid ${step.borderColor}` }}>
                  <Clock size={11} /> {step.time}
                </span>
              </div>

              <div className="routine-icon-circle" style={{ background: step.bg, border: `2px solid ${step.borderColor}` }}>
                <span className="routine-emoji">{step.icon}</span>
              </div>

              <h3 className="routine-card-title">{step.title}</h3>
              <p className="routine-card-desc">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
