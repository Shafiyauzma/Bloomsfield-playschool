import React from 'react';
import { Check, ArrowRight, BookOpen, GraduationCap, Sparkles } from 'lucide-react';

const programs = [
  {
    stage: 'Stage 1',
    emoji: '👶',
    color: '#FF7043',
    bg: '#FFF3E0',
    borderColor: '#FFE0B2',
    name: 'Playgroup',
    age: '1.5 – 2.5 Years',
    desc: 'Gentle transition from home to school through sensory play, motor activities, and musical rhymes.',
    points: [
      'Sensory & motor stimulation',
      'Bodily coordination games',
      'Rhyme, music & motion circles',
      'Loving separation support'
    ]
  },
  {
    stage: 'Stage 2',
    emoji: '🎨',
    color: '#FF4081',
    bg: '#FCE4EC',
    borderColor: '#F8BBD0',
    name: 'Nursery (Pre-KG)',
    age: '2.5 – 3.5 Years',
    desc: 'Fostering expressive speech, foundational Jolly Phonics, color recognition, and social play.',
    points: [
      'Phonics foundation & sound play',
      'Creative arts, painting & clay',
      'Numbers & shape patterns',
      'Social manners & sharing'
    ]
  },
  {
    stage: 'Stage 3',
    emoji: '📚',
    color: '#29B6F6',
    bg: '#E1F5FE',
    borderColor: '#B3E5FC',
    name: 'Junior KG (LKG)',
    age: '3.5 – 4.5 Years',
    desc: 'Cultivating early reading fluency, writing readiness, quantitative numeracy, and inquiry experiments.',
    points: [
      'Blending sounds & sight words',
      'Quantitative counting & math',
      'Environmental studies discovery',
      'Independent problem solving'
    ]
  },
  {
    stage: 'Stage 4',
    emoji: '🎓',
    color: '#66BB6A',
    bg: '#E8F5E9',
    borderColor: '#C8E6C9',
    name: 'Senior KG (UKG)',
    age: '4.5 – 5.5 Years',
    desc: 'Complete primary school readiness with fluent reading, expressive speaking, and critical thinking.',
    points: [
      'Fluent reading & creative writing',
      'Basic addition & subtraction',
      'Stage confidence & speaking',
      'Smooth primary grade transition'
    ]
  }
];

export default function Programs() {
  return (
    <section className="programs-section" id="programs">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="section-badge blue">
            <Sparkles size={13} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: 4 }} />
            Academic Programs
          </div>
          <h2 className="section-title">
            Curated Programs for Every <span className="highlight">Growth Milestone</span>
          </h2>
          <p className="section-desc">
            Tailored learning stages designed to nurture the cognitive, social, and emotional development of children ages 1.5 to 5.5 years. ✨
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="programs-grid">
          {programs.map((prog, idx) => (
            <div
              key={idx}
              className="program-card-cute"
              style={{
                '--prog-color': prog.color,
                '--prog-bg': prog.bg,
                '--prog-border': prog.borderColor
              }}
            >
              <div className="prog-top-bar" style={{ background: prog.color }} />
              
              <div className="prog-content">
                <div className="prog-header">
                  <span className="prog-stage-pill" style={{ background: prog.bg, color: prog.color, border: `1px solid ${prog.borderColor}` }}>
                    {prog.emoji} {prog.stage}
                  </span>
                  <span className="prog-age-tag">Age: {prog.age}</span>
                </div>

                <h3 className="prog-name">{prog.name}</h3>
                <p className="prog-desc">{prog.desc}</p>

                <ul className="prog-list">
                  {prog.points.map((pt, pIdx) => (
                    <li key={pIdx}>
                      <span className="prog-check-icon" style={{ background: prog.bg, color: prog.color }}>
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#admissions"
                className="prog-btn"
                style={{ background: prog.color }}
              >
                <span>Enquire Now</span>
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
