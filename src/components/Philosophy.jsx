import React from 'react';
import { Sprout, Dices, BookOpen, Lightbulb } from 'lucide-react';

export default function Philosophy() {
  const pillars = [
    {
      icon: <Sprout size={36} color="#FFAA00" />,
      colorClass: 'yellow',
      title: 'Montessori Inspired',
      desc: 'Self-directed activity and hands-on learning with specialized Montessori sensorial apparatus to build independence and confidence.'
    },
    {
      icon: <Dices size={36} color="#3A86FF" />,
      colorClass: 'blue',
      title: 'Play-Based Learning',
      desc: 'Play is the highest form of research! We weave mathematics, science, and life skills into imaginative and collaborative play games.'
    },
    {
      icon: <BookOpen size={36} color="#00BA88" />,
      colorClass: 'green',
      title: 'Phonics & Early Skills',
      desc: 'Structured Jolly Phonics program empowering children to sound out words, speak fluently, and develop a lifelong love for reading.'
    },
    {
      icon: <Lightbulb size={36} color="#8338EC" />,
      colorClass: 'purple',
      title: 'Inquiry Learning',
      desc: 'Encouraging curious questions, tactile discovery, observation, and experimentation so every child becomes an active thinker.'
    }
  ];

  return (
    <section className="pillars-section" id="about">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Our Educational Philosophy</div>
          <h2 className="section-title">
            Nurturing Bright Minds with <span className="highlight">Care & Purpose</span>
          </h2>
          <p className="section-desc">
            At Bloomsfield Playschool, every child is recognized as an eager explorer. Our curriculum harmoniously blends world-class Montessori methods with joyful play-based learning.
          </p>
        </div>

        <div className="pillars-grid">
          {pillars.map((pillar, idx) => (
            <div key={idx} className={`pillar-card ${pillar.colorClass}`}>
              <div className="pillar-icon">
                {pillar.icon}
              </div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
