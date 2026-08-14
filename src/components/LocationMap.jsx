import React from 'react';
import { Phone, MapPin, Mail, Instagram, ExternalLink, Navigation } from 'lucide-react';

export default function LocationMap() {
  const contactCards = [
    {
      className: 'phone',
      icon: <Phone size={26} />,
      title: 'Call Us',
      content: <><a href="tel:8897334744">+91 8897334744</a><br /><span style={{ fontSize: '0.82rem', color: 'var(--text-light)' }}>Mon – Sat, 8:30 AM – 5:30 PM</span></>
    },
    {
      className: 'location',
      icon: <MapPin size={26} />,
      title: 'School Address',
      content: <>Near Black Bridge, Beside Petrol Bunk,<br /><strong>Amalapuram – 533201</strong>, A.P.</>
    },
    {
      className: 'email',
      icon: <Mail size={26} />,
      title: 'Email Us',
      content: <><a href="mailto:bloomsfieldplayschool@gmail.com">bloomsfieldplayschool@gmail.com</a><br /><span style={{ fontSize: '0.82rem', color: 'var(--text-light)' }}>Quick response guaranteed</span></>
    },
    {
      className: 'time',
      icon: <Instagram size={26} />,
      title: 'Instagram',
      content: (
        <a
          href="https://www.instagram.com/bloomsfieldplayschool?igsh=MTdkaGlwcmdmOWFxOA%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          @bloomsfieldplayschool <ExternalLink size={12} style={{ display: 'inline', verticalAlign: 'middle' }} />
        </a>
      )
    }
  ];

  return (
    <section className="location-section" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Navigation size={14} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: 4 }} />
            Visit Our Campus
          </div>
          <h2 className="section-title">
            Conveniently Located in <span className="highlight">Amalapuram</span>
          </h2>
          <p className="section-desc">
            Easily accessible for parents across Amalapuram and surrounding regions. Come experience our joyful campus in person!
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="contact-cards-grid">
          {contactCards.map((card, idx) => (
            <div key={idx} className={`contact-card ${card.className}`}>
              <div className="contact-card-icon">{card.icon}</div>
              <h4>{card.title}</h4>
              <p>{card.content}</p>
            </div>
          ))}
        </div>

        {/* Interactive Map Box */}
        <div className="map-wrapper">
          <div className="map-header-bar">
            <div className="map-location-tag">
              <MapPin size={20} color="var(--primary-color)" />
              <span>Bloomsfield Playschool Campus Map — Amalapuram, 533201</span>
            </div>
            <a
              href="https://maps.google.com/?q=Black+Bridge+Amalapuram+Andhra+Pradesh+533201"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <Navigation size={15} />
              <span>Get Directions</span>
            </a>
          </div>
          <iframe
            className="map-iframe"
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
