import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, PartyPopper, ZoomIn } from 'lucide-react';

export default function GrandOpening({ onOpenFlyer }) {
  // Target: July 5, 2026, 10:05 AM IST
  const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', mins: '00', secs: '00' });

  useEffect(() => {
    const targetDate = new Date('2026-07-05T10:05:00+05:30').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft({ days: '00', hours: '00', mins: '00', secs: '00' });
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        mins: String(mins).padStart(2, '0'),
        secs: String(secs).padStart(2, '0'),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="opening-section" id="opening">
      <div className="container">
        <div className="opening-card">
          {/* Left Details */}
          <div className="opening-details">
            <div className="section-badge purple">Official Inauguration</div>
            <h3>You Are Cordially Invited to Our Grand Opening!</h3>
            <p className="opening-subtitle">We are excited to invite you to the opening of our brand new learning space.</p>
            
            <div className="opening-meta-grid">
              <div className="opening-meta-box highlight">
                <div className="opening-meta-label">
                  <Calendar size={14} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: 4 }} />
                  Date
                </div>
                <div className="opening-meta-val">Sunday, 05-07-2026</div>
              </div>
              <div className="opening-meta-box highlight">
                <div className="opening-meta-label">
                  <Clock size={14} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: 4 }} />
                  Auspicious Time
                </div>
                <div className="opening-meta-val">10:05 AM</div>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="countdown-container">
              <div className="countdown-title">⏳ Countdown to Celebration:</div>
              <div className="countdown-boxes">
                <div className="countdown-box">
                  <span className="countdown-number">{timeLeft.days}</span>
                  <span className="countdown-label">Days</span>
                </div>
                <div className="countdown-box">
                  <span className="countdown-number">{timeLeft.hours}</span>
                  <span className="countdown-label">Hours</span>
                </div>
                <div className="countdown-box">
                  <span className="countdown-number">{timeLeft.mins}</span>
                  <span className="countdown-label">Mins</span>
                </div>
                <div className="countdown-box">
                  <span className="countdown-number">{timeLeft.secs}</span>
                  <span className="countdown-label">Secs</span>
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              <MapPin size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4, color: 'var(--primary-color)' }} />
              <strong>Venue:</strong> Near Black Bridge, Beside Petrol Bunk, Amalapuram - 533201<br />
              Your presence will make this occasion even more special. We look forward to celebrating with you!
            </p>

            <a 
              href="https://wa.me/918897334744?text=Hello%20Bloomsfield%20Playschool!%20I%20would%20love%20to%20RSVP%20for%20the%20Grand%20Opening%20on%2005-07-2026." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary btn-lg"
            >
              <PartyPopper size={20} />
              <span>RSVP / Confirm Attendance</span>
            </a>
          </div>

          {/* Right Invitation Flyer */}
          <div className="opening-media">
            <div 
              className="opening-flyer-frame" 
              onClick={() => onOpenFlyer('/playschool.jpeg', 'Bloomsfield Playschool - Grand Opening Invitation Card')}
              title="Click to view full invitation flyer"
            >
              <img src="/playschool.jpeg" alt="Bloomsfield Playschool Grand Opening Invitation" />
            </div>
            <div className="flyer-caption">
              <ZoomIn size={15} />
              <span>Click image to enlarge official invitation flyer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
