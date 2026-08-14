import React from 'react';
import { Calendar, Clock, MapPin, ZoomIn } from 'lucide-react';

export default function GrandOpening({ onOpenFlyer }) {
  return (
    <section className="opening-section" id="opening">

      {/* Decorative floating shapes */}
      <span className="opening-shape s1">🌸</span>
      <span className="opening-shape s2">⭐</span>
      <span className="opening-shape s3">🎈</span>
      <span className="opening-shape s4">🦋</span>

      <div className="container opening-inner">

        {/* ── Left: Details ─────────────────────────── */}
        <div className="opening-details">

          <div className="opening-badge">
            <span>🎉</span> Official Inauguration
          </div>

          <h2 className="opening-title">
            You Are Cordially Invited to Our<br />
            <span>Grand Opening!</span>
          </h2>

          <p className="opening-desc">
            We are excited to invite you to the opening of our brand new learning space. Your presence will make this occasion truly special!
          </p>

          {/* Date & Time pills */}
          <div className="opening-pills">
            <div className="opening-pill">
              <Calendar size={18} />
              <div>
                <span className="pill-label">Date</span>
                <strong>Sunday, 05 July 2026</strong>
              </div>
            </div>
            <div className="opening-pill">
              <Clock size={18} />
              <div>
                <span className="pill-label">Auspicious Time</span>
                <strong>10:05 AM</strong>
              </div>
            </div>
            <div className="opening-pill">
              <MapPin size={18} />
              <div>
                <span className="pill-label">Venue</span>
                <strong>Near Black Bridge, Amalapuram</strong>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right: Flyer ───────────────────────────── */}
        <div className="opening-flyer-wrap">
          <div
            className="opening-flyer-frame"
            onClick={() => onOpenFlyer('/playschool.jpeg', 'Bloomsfield Playschool — Grand Opening Invitation')}
            title="Click to view full invitation"
            role="button"
            tabIndex={0}
          >
            <img src="/playschool.jpeg" alt="Bloomsfield Grand Opening Invitation" />
            <div className="flyer-zoom-badge">
              <ZoomIn size={16} /> View Full Invite
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
