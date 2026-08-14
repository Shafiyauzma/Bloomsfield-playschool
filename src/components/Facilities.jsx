import React from 'react';
import { Wind, Video, BookOpen, Puzzle, Palette, HeartHandshake, Smile, Search, Sparkles } from 'lucide-react';

export default function Facilities() {
  const facilities = [
    {
      icon: <Wind size={28} />,
      color: '#3A86FF',
      bg: '#EBF3FF',
      title: '100% AC Classrooms',
      desc: 'Spacious, climate-controlled, well-ventilated classrooms with clean filtered air for year-round comfort.'
    },
    {
      icon: <Video size={28} />,
      color: '#FF5E5B',
      bg: '#FFEAEA',
      title: '24/7 CCTV Monitoring',
      desc: 'Comprehensive camera surveillance covering all learning and play zones for uncompromising safety and peace of mind.'
    },
    {
      icon: <BookOpen size={28} />,
      color: '#FFAA00',
      bg: '#FFF6DF',
      title: 'Phonics Program',
      desc: 'Specialized early literacy and phonetics system that empowers children to read and articulate words with confidence.'
    },
    {
      icon: <Puzzle size={28} />,
      color: '#00BA88',
      bg: '#E6F8F3',
      title: 'Montessori Activity Labs',
      desc: 'Equipped with child-safe wooden Montessori tools, sensory blocks, tactile puzzles, and logical sequencing kits.'
    },
    {
      icon: <Palette size={28} />,
      color: '#8338EC',
      bg: '#F3EBFF',
      title: 'Hands-on Creative Arts',
      desc: 'Tactile clay modeling, non-toxic finger painting, paper origami, and theatrical role-play to kindle limitless imagination.'
    },
    {
      icon: <HeartHandshake size={28} />,
      color: '#FF5E5B',
      bg: '#FFEAEA',
      title: 'Experienced & Caring Staff',
      desc: 'Passionate, certified early childhood mentors trained in positive reinforcement, emotional patience, and child psychology.'
    },
    {
      icon: <Smile size={28} />,
      color: '#FFAA00',
      bg: '#FFF6DF',
      title: 'Free & Exploratory Learning',
      desc: 'Designated play corners where children can pick their favorite educational games and learn at their own joyful rhythm.'
    },
    {
      icon: <Search size={28} />,
      color: '#3A86FF',
      bg: '#EBF3FF',
      title: 'Inquiry Learning Zone',
      desc: 'Interactive nature, science, and curiosity corners that encourage children to explore questions, shadows, plants, and colors.'
    },
    {
      icon: <Sparkles size={28} />,
      color: '#00BA88',
      bg: '#E6F8F3',
      title: 'Safe & Hygienic Environment',
      desc: 'Daily sanitized play equipment, rounded child-safe furniture, clean washrooms, and strict health & safety protocols.'
    }
  ];

  return (
    <section className="facilities-section" id="facilities">
      <div className="container">
        <div className="section-header">
          <div className="section-badge green">Facilities & Safety</div>
          <h2 className="section-title">
            A Secure, Hygienic & <span className="highlight">Stimulating Haven</span>
          </h2>
          <p className="section-desc">
            Designed with children's safety, hygiene, and cognitive wonder at the forefront. Every corner inspires happiness and curiosity.
          </p>
        </div>

        <div className="facilities-grid">
          {facilities.map((fac, idx) => (
            <div key={idx} className="facility-card">
              <div className="facility-icon-wrap" style={{ color: fac.color, background: fac.bg }}>
                {fac.icon}
              </div>
              <div className="facility-content">
                <h4>{fac.title}</h4>
                <p>{fac.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
