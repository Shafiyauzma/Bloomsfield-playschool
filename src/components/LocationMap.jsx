import React from 'react';
import { Phone, MapPin, Mail, Instagram, ExternalLink, Navigation, Sparkles } from 'lucide-react';

const contactCards = [
  {
    emoji: '📞',
    color: '#FF7043',
    bg: '#FFF3E0',
    border: '#FFE0B2',
    title: 'Call Desk',
    content: (
      <>
        <a href="tel:8897334744" style={{ fontWeight: 800, fontSize: '1.05rem' }}>+91 8897334744</a>
        <br />
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Mon – Sat: 8:30 AM – 5:30 PM</span>
      </>
    )
  },
  {
    emoji: '📍',
    color: '#FF4081',
    bg: '#FCE4EC',
    border: '#F8BBD0',
    title: 'School Campus',
    content: (
      <>
        Near Black Bridge, Beside Petrol Bunk,<br />
        <strong>Amalapuram – 533201</strong>, A.P.
      </>
    )
  },
  {
    emoji: '✉️',
    color: '#3A86FF',
    bg: '#EBF3FF',
    border: '#BFDBFE',
    title: 'Email Us',
    content: (
      <>
        <a href="mailto:bloomsfieldplayschool@gmail.com" style={{ fontWeight: 700, fontSize: '0.9rem' }}>
          bloomsfieldplayschool@gmail.com
        </a>
        <br />
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Quick response guaranteed</span>
      </>
    )
  },
  {
    emoji: '📸',
    color: '#8338EC',
    bg: '#F3EBFF',
    border: '#DDD6FE',
    title: 'Instagram',
    content: (
      <a
        href="https://www.instagram.com/bloomsfieldplayschool?igsh=MTdkaGlwcmdmOWFxOA%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
      >
        @bloomsfieldplayschool <ExternalLink size={13} />
      </a>
    )
  }
];

export default function LocationMap() {
  return (
    <section className="location-section" id="contact">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="section-badge red">
            <Sparkles size={13} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: 4 }} />
            Visit Our Campus
          </div>
          <h2 className="section-title">
            Conveniently Located in <span className="highlight">Amalapuram</span>
          </h2>
          <p className="section-desc">
            Easily accessible for parents across Amalapuram and surrounding regions.<br />
            Walk-ins and campus visits are warmly welcomed! 📍
          </p>
        </div>

        {/* 4 Contact Cards */}
        <div className="contact-cards-grid-cute">
          {contactCards.map((card, idx) => (
            <div
              key={idx}
              className="contact-card-cute"
              style={{
                '--card-color': card.color,
                '--card-bg': card.bg,
                '--card-border': card.border
              }}
            >
              <div className="contact-card-top-bar" style={{ background: card.color }} />
              <div className="contact-icon-circle" style={{ background: card.bg, border: `1.5px solid ${card.border}` }}>
                <span className="contact-emoji">{card.emoji}</span>
              </div>
              <h4 className="contact-card-title">{card.title}</h4>
              <div className="contact-card-text">{card.content}</div>
            </div>
          ))}
        </div>

        {/* Interactive Map Box */}
        <div className="map-wrapper-cute">
          <div className="map-header-bar-cute">
            <div className="map-location-tag-cute">
              <MapPin size={18} color="var(--primary-color)" />
              <span>Bloomsfield Playschool Campus Map — Amalapuram, 533201</span>
            </div>
            <a
              href="https://maps.google.com/?q=Black+Bridge+Amalapuram+Andhra+Pradesh+533201"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <Navigation size={14} />
              <span>Get Directions</span>
            </a>
          </div>

          <iframe
            className="map-iframe-cute"
            src="https://maps.google.com/maps?q=Amalapuram%20Black%20Bridge%20Andhra%20Pradesh%20533201&t=&z=16&ie=UTF8&iwloc=&output=embed"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bloomsfield Playschool Location Map in Amalapuram"
          />
        </div>

      </div>
    </section>
  );
}
