import React from 'react';
import { Instagram, Phone, MessageCircle, Mail, MapPin, Home, BookOpen, Star, Image, Send, HelpCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">

          {/* Col 1: Brand & About */}
          <div className="footer-brand footer-col">
            <div className="footer-logo-row">
              <img src="/playschool1.jpeg" alt="Bloomsfield Playschool Logo" className="footer-logo-img" />
              <div>
                <div className="brand-name">Bloomsfield <span>Playschool</span></div>
                <div className="brand-tagline" style={{ color: '#94A3B8', fontSize: '0.8rem' }}>Where Little Minds Bloom ❤️</div>
              </div>
            </div>
            <p className="footer-about">
              A premium Montessori-inspired early childhood preschool in Amalapuram dedicated to playful discovery, phonics mastery, emotional well-being, and academic readiness.
            </p>
            <div className="footer-socials">
              <a href="https://www.instagram.com/bloomsfieldplayschool?igsh=MTdkaGlwcmdmOWFxOA%3D%3D" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://wa.me/918897334744" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="WhatsApp">
                <MessageCircle size={18} />
              </a>
              <a href="tel:8897334744" className="social-btn" aria-label="Call">
                <Phone size={18} />
              </a>
              <a href="mailto:bloomsfieldplayschool@gmail.com" className="social-btn" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#hero"><Home size={14} /> Home</a></li>
              <li><a href="#about"><Star size={14} /> About Philosophy</a></li>
              <li><a href="#programs"><BookOpen size={14} /> Academic Programs</a></li>
              <li><a href="#facilities">🌿 Facilities & Safety</a></li>
              <li><a href="#opening">🎉 Grand Opening 2026</a></li>
              <li><a href="#gallery"><Image size={14} /> Campus Photo Gallery</a></li>
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div className="footer-col">
            <h4>Our Programs</h4>
            <ul className="footer-links">
              <li><a href="#programs">👶 Playgroup (1.5 – 2.5 Yrs)</a></li>
              <li><a href="#programs">🎨 Nursery / Pre-KG</a></li>
              <li><a href="#programs">📚 Junior KG (LKG)</a></li>
              <li><a href="#programs">🎓 Senior KG (UKG)</a></li>
              <li><a href="#programs">🧸 Daycare & Extended Care</a></li>
              <li><a href="#calculator">🔢 Age Eligibility Calculator</a></li>
            </ul>
          </div>

          {/* Col 4: Contact Summary */}
          <div className="footer-col">
            <h4>Get in Touch</h4>
            <ul className="footer-contact-info">
              <li>
                <span className="icon"><MapPin size={16} /></span>
                <span>Near Black Bridge, Beside Petrol Bunk, Amalapuram – 533201, Andhra Pradesh</span>
              </li>
              <li>
                <span className="icon"><Phone size={16} /></span>
                <span><a href="tel:8897334744" style={{ color: '#FFFFFF', fontWeight: 700 }}>8897334744</a></span>
              </li>
              <li>
                <span className="icon"><MessageCircle size={16} /></span>
                <span>
                  <a href="https://wa.me/918897334744" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', fontWeight: 700 }}>
                    WhatsApp Support
                  </a>
                </span>
              </li>
              <li>
                <span className="icon"><Mail size={16} /></span>
                <span>
                  <a href="mailto:bloomsfieldplayschool@gmail.com" style={{ color: '#94A3B8' }}>
                    bloomsfieldplayschool@gmail.com
                  </a>
                </span>
              </li>
              <li>
                <span className="icon"><Instagram size={16} /></span>
                <span>
                  <a
                    href="https://www.instagram.com/bloomsfieldplayschool?igsh=MTdkaGlwcmdmOWFxOA%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#FFD166' }}
                  >
                    @bloomsfieldplayschool
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © 2026 <strong style={{ color: '#FFFFFF' }}>Bloomsfield Playschool</strong>. All Rights Reserved. Where Little Minds Bloom ❤️
          </div>
          <div style={{ color: '#64748B', fontSize: '0.85rem' }}>
            Near Black Bridge, Amalapuram – 533201 | Admissions Open 2026-27
          </div>
        </div>
      </div>
    </footer>
  );
}
