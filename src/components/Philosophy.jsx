import React from 'react';
import { Sprout, Dices, BookOpen, Lightbulb, Heart, Star } from 'lucide-react';

const pillars = [
  {
    emoji: '🌱',
    icon: <Sprout size={28} />,
    color: '#FFAA00',
    bg: '#FFF8E7',
    border: '#FFE0A0',
    title: 'Montessori Inspired',
    desc: 'Self-directed, hands-on learning with specialized Montessori sensorial apparatus — building independence and true confidence from within.'
  },
  {
    emoji: '🎲',
    icon: <Dices size={28} />,
    color: '#3A86FF',
    bg: '#EFF6FF',
    border: '#BFDBFE',
    title: 'Play-Based Learning',
    desc: 'Play is the highest form of research! We weave maths, science and life skills into imaginative, joyful collaborative play every day.'
  },
  {
    emoji: '📖',
    icon: <BookOpen size={28} />,
    color: '#00BA88',
    bg: '#ECFDF5',
    border: '#A7F3D0',
    title: 'Phonics & Early Literacy',
    desc: 'Structured Jolly Phonics empowers children to sound out words, speak fluently, and discover a lifelong love for reading.'
  },
  {
    emoji: '💡',
    icon: <Lightbulb size={28} />,
    color: '#8338EC',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    title: 'Inquiry & Curiosity',
    desc: 'We encourage curious questions, tactile discovery, and experimentation — so every child grows into an active, confident thinker.'
  }
];

const stats = [
  { value: '1.5–5', label: 'Years Age Group', emoji: '👶' },
  { value: '100%', label: 'AC Classrooms',   emoji: '❄️' },
  { value: '24/7',  label: 'CCTV Security',  emoji: '🔒' },
  { value: '❤️',   label: 'With Love & Care', emoji: '' },
];

export default function Philosophy() {
  return (
    <section className="about-section" id="about">

      {/* Soft background blobs */}
      <div className="about-blob b1" />
      <div className="about-blob b2" />

      <div className="container">

        {/* ── Header ── */}
        <div className="section-header">
          <div className="section-badge">
            <Heart size={13} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: 4 }} fill="currentColor" />
            Our Educational Philosophy
          </div>
          <h2 className="section-title">
            Nurturing Bright Minds with <span className="highlight">Care & Purpose</span>
          </h2>
          <p className="section-desc">
            At Bloomsfield Playschool, every child is an eager explorer.<br />
            Our curriculum blends world-class Montessori methods with joyful play-based learning to help every little mind truly bloom. 🌸
          </p>
        </div>

        {/* ── Pillar Cards ── */}
        <div className="about-grid">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="about-card"
              style={{ '--card-color': p.color, '--card-bg': p.bg, '--card-border': p.border }}
            >
              <div className="about-card-top">
                <div className="about-icon-wrap" style={{ background: p.bg, border: `2px solid ${p.border}`, color: p.color }}>
                  {p.icon}
                </div>
                <span className="about-emoji">{p.emoji}</span>
              </div>
              <h3 className="about-card-title">{p.title}</h3>
              <p className="about-card-desc">{p.desc}</p>
              <div className="about-card-line" style={{ background: p.color }} />
            </div>
          ))}
        </div>

        {/* ── Stats Strip ── */}
        <div className="about-stats">
          {stats.map((s, i) => (
            <div key={i} className="about-stat">
              <span className="stat-emoji">{s.emoji || s.value}</span>
              <div className="stat-text">
                {s.emoji && <strong>{s.value}</strong>}
                <span>{s.label}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
