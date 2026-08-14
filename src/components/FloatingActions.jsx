import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp, Phone } from 'lucide-react';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="floating-actions">
        {/* WhatsApp */}
        <a
          href="https://wa.me/918897334744?text=Hello%20Bloomsfield%20Playschool!%20I%20would%20like%20to%20enquire%20about%20admissions."
          target="_blank"
          rel="noopener noreferrer"
          className="float-btn whatsapp"
          title="Chat on WhatsApp"
          aria-label="Chat on WhatsApp"
        >
          <div className="whatsapp-pulse" />
          <MessageCircle size={26} />
        </a>

        {/* Scroll To Top */}
        {showScrollTop && (
          <button
            className="float-btn scroll-top"
            onClick={scrollToTop}
            title="Scroll to Top"
            aria-label="Scroll to top"
          >
            <ArrowUp size={22} />
          </button>
        )}
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="mobile-bottom-bar">
        <div className="mobile-bottom-grid">
          <a href="tel:8897334744" className="btn btn-primary btn-sm">
            <Phone size={16} />
            <span>Call Now</span>
          </a>
          <a
            href="https://wa.me/918897334744?text=Hello%20Bloomsfield%20Playschool!%20I%20would%20like%20to%20enquire%20about%20admissions."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm"
          >
            <MessageCircle size={16} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
