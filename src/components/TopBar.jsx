import React, { useState } from 'react';
import { Phone, MapPin, Sparkles, X } from 'lucide-react';

export default function TopBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="top-bar">
      <div className="container top-bar-content">
        <div className="top-bar-left">
          <span className="top-bar-badge">
            <Sparkles size={13} style={{ display: 'inline', marginRight: 4 }} />
            ADMISSIONS OPEN 2026-27
          </span>
          <span>🌸 Welcome to Bloomsfield Playschool! Age Group: 1.5 – 5 Years</span>
        </div>
        <div className="top-bar-right">
          <span>
            <MapPin size={14} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: 3 }} />
            Near Black Bridge, Beside Petrol Bunk, Amalapuram
          </span>
          <a href="tel:8897334744" className="top-bar-link">
            <Phone size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 3 }} />
            Call: 8897334744
          </a>
        </div>
      </div>

      {/* Close button — absolutely pinned to top-right of the bar */}
      <button
        className="top-bar-close"
        onClick={() => setVisible(false)}
        aria-label="Dismiss announcement banner"
        title="Dismiss banner"
      >
        <X size={14} />
      </button>
    </div>
  );
}

