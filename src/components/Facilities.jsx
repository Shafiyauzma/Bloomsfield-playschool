import React from 'react';
import { Wind, Video, BookOpen, Puzzle, Palette, HeartHandshake, Smile, Search, Sparkles, ShieldCheck } from 'lucide-react';

const facilities = [
  {
    icon: <Wind size={24} />,
    emoji: '❄️',
    color: '#3A86FF',
    bg: '#EBF3FF',
    border: '#BFDBFE',
    title: '100% AC Classrooms',
    desc: 'Spacious, climate-controlled classrooms with clean filtered air for year-round comfort.'
  },
  {
    icon: <Video size={24} />,
    emoji: '📹',
    color: '#FF5E5B',
    bg: '#FFEAEA',
    border: '#FFCDD2',
    title: '24/7 CCTV Security',
    desc: 'Surveillance cameras covering all learning and play zones for complete peace of mind.'
  },
  {
    icon: <BookOpen size={24} />,
    emoji: '📖',
    color: '#FFAA00',
    bg: '#FFF6DF',
    border: '#FFE0B2',
    title: 'Phonics & Literacy',
    desc: 'Specialized early phonetics system empowering children to speak and read with joy.'
  },
  {
    icon: <Puzzle size={24} />,
    emoji: '🧩',
    color: '#00BA88',
    bg: '#E6F8F3',
    border: '#A7F3D0',
    title: 'Montessori Labs',
    desc: 'Equipped with child-safe wooden Montessori tools, sensory blocks, and logic sequencing kits.'
  },
  {
    icon: <Palette size={24} />,
    emoji: '🎨',
    color: '#8338EC',
    bg: '#F3EBFF',
    border: '#DDD6FE',
    title: 'Creative Art Studio',
    desc: 'Tactile clay modeling, non-toxic finger painting, paper origami, and role-play theater.'
  },
  {
    icon: <HeartHandshake size={24} />,
    emoji: '👩‍🏫',
    color: '#FF5E5B',
    bg: '#FFEAEA',
    border: '#FFCDD2',
    title: 'Caring & Certified Staff',
    desc: 'Passionate early childhood mentors trained in patience, positive care, and child psychology.'
  },
  {
    icon: <Smile size={24} />,
    emoji: '🧸',
    color: '#FFAA00',
    bg: '#FFF6DF',
    border: '#FFE0B2',
    title: 'Exploratory Play Corners',
    desc: 'Designated play stations where children choose their favorite games at their own rhythm.'
  },
  {
    icon: <Search size={24} />,
    emoji: '🔬',
    color: '#3A86FF',
    bg: '#EBF3FF',
    border: '#BFDBFE',
    title: 'Inquiry & Nature Zone',
    desc: 'Interactive nature and science corners encouraging children to explore plants, light & colors.'
  },
  {
    icon: <Sparkles size={24} />,
    emoji: '✨',
    color: '#00BA88',
    bg: '#E6F8F3',
    border: '#A7F3D0',
    title: 'Sanitized & Safe Campus',
    desc: 'Daily sanitized play equipment, rounded child-proof furniture, and strict hygiene standards.'
  }
];

export default function Facilities() {
  return (
    <section className="facilities-section" id="facilities">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="section-badge green">
            <ShieldCheck size={13} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: 4 }} />
            Facilities & Safety
          </div>
          <h2 className="section-title">
            A Secure, Hygienic & <span className="highlight">Stimulating Haven</span>
          </h2>
          <p className="section-desc">
            Designed with children's safety, hygiene, and cognitive wonder at the forefront.<br />
            Every corner at Bloomsfield inspires happiness, security, and curiosity. 🌿
          </p>
        </div>

        {/* 3x3 Cute Cards Grid */}
        <div className="facilities-grid">
          {facilities.map((fac, idx) => (
            <div
              key={idx}
              className="facility-card-cute"
              style={{
                '--fac-color': fac.color,
                '--fac-bg': fac.bg,
                '--fac-border': fac.border
              }}
            >
              <div className="facility-icon-wrap" style={{ background: fac.bg, color: fac.color, border: `1.5px solid ${fac.border}` }}>
                {fac.icon}
              </div>
              <div className="facility-content">
                <div className="facility-title-row">
                  <h4>{fac.title}</h4>
                  <span className="facility-emoji">{fac.emoji}</span>
                </div>
                <p>{fac.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
