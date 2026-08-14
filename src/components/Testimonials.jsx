import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      stars: 5,
      text: '"Bloomsfield Playschool has created the warmest environment in Amalapuram. The AC classrooms and CCTV give us complete safety confidence, and my daughter loves her phonics games!"',
      initials: 'SP',
      avatarColor: '#FFAA00',
      name: 'Suresh & Priya K.',
      role: 'Parents of Ananya (Nursery)'
    },
    {
      stars: 5,
      text: '"The Montessori-inspired methods and caring teachers have done wonders for my son\'s speech clarity and social confidence. Best playschool decision we made for our family!"',
      initials: 'RV',
      avatarColor: '#3A86FF',
      name: 'Rajesh Varma',
      role: 'Parent of Vivaan (Junior KG)'
    },
    {
      stars: 5,
      text: '"From the hygienic surroundings to the creative art activities, Bloomsfield truly lives up to its motto: Where Little Minds Bloom ❤️. Highly recommended to all Amalapuram parents!"',
      initials: 'LK',
      avatarColor: '#00BA88',
      name: 'Lakshmi Kumari',
      role: 'Parent of Rithvik (Playgroup)'
    }
  ];

  return (
    <div className="container">
      <div className="testimonials-grid">
        {testimonials.map((t, idx) => (
          <div key={idx} className="testimonial-card">
            <div>
              <div className="test-stars">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={18} fill="#FFB703" color="#FFB703" style={{ display: 'inline' }} />
                ))}
              </div>
              <p className="test-text">{t.text}</p>
            </div>
            <div className="test-author">
              <div
                className="test-avatar"
                style={{ background: t.avatarColor }}
              >
                {t.initials}
              </div>
              <div className="test-author-info">
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
