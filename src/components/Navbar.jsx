import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Instagram, Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileOpen(!isMobileOpen);
    document.body.style.overflow = !isMobileOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMobileOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#hero" className="brand-logo" onClick={closeMenu}>
          <img src="/playschool1.jpeg" alt="Bloomsfield Playschool Happy Flower Logo" />
          <div className="brand-text">
            <span className="brand-name">Bloomsfield <span>Playschool</span></span>
            <span className="brand-tagline">Where Little Minds Bloom ❤️</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#programs" className="nav-link">Programs</a>
          <a href="#facilities" className="nav-link">Facilities</a>
          <a href="#opening" className="nav-link">Grand Opening</a>
          <a href="#gallery" className="nav-link">Gallery</a>
          <a href="#admissions" className="nav-link">Admissions</a>
          <a href="#contact" className="nav-link">Contact & Map</a>
        </nav>

        {/* Desktop Nav CTA Actions */}
        <div className="nav-actions">
          <a 
            href="https://wa.me/918897334744?text=Hello%20Bloomsfield%20Playschool!%20I%20would%20like%20to%20enquire%20about%20admissions."
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-whatsapp btn-sm"
          >
            <MessageCircle size={16} />
            <span>WhatsApp</span>
          </a>
          <a href="#admissions" className="btn btn-primary btn-sm">
            <span>Apply Now</span>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="mobile-toggle" 
          onClick={toggleMenu} 
          aria-label="Toggle navigation menu"
        >
          {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-menu ${isMobileOpen ? 'active' : ''}`}>
        <a href="#about" className="mobile-nav-link" onClick={closeMenu}>About Bloomsfield</a>
        <a href="#programs" className="mobile-nav-link" onClick={closeMenu}>Academic Programs</a>
        <a href="#calculator" className="mobile-nav-link" onClick={closeMenu}>Age Eligibility Calculator</a>
        <a href="#facilities" className="mobile-nav-link" onClick={closeMenu}>Facilities & Safety</a>
        <a href="#opening" className="mobile-nav-link" onClick={closeMenu}>Grand Opening 2026</a>
        <a href="#gallery" className="mobile-nav-link" onClick={closeMenu}>Campus Photo Gallery</a>
        <a href="#instagram" className="mobile-nav-link" onClick={closeMenu}>Instagram Feed (@bloomsfieldplayschool)</a>
        <a href="#admissions" className="mobile-nav-link" onClick={closeMenu}>Admissions 2026-27</a>
        <a href="#faq" className="mobile-nav-link" onClick={closeMenu}>Parent FAQs</a>
        <a href="#contact" className="mobile-nav-link" onClick={closeMenu}>Location Map & Address</a>
        
        <div className="mobile-nav-actions">
          <a href="tel:8897334744" className="btn btn-primary btn-lg" onClick={closeMenu}>
            <Phone size={18} />
            <span>Call: 8897334744</span>
          </a>
          <a 
            href="https://wa.me/918897334744?text=Hello%20Bloomsfield%20Playschool!%20I%20would%20like%20to%20enquire%20about%20admissions."
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-whatsapp btn-lg"
          >
            <MessageCircle size={18} />
            <span>Chat on WhatsApp</span>
          </a>
          <a 
            href="https://www.instagram.com/bloomsfieldplayschool?igsh=MTdkaGlwcmdmOWFxOA%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-instagram btn-lg"
          >
            <Instagram size={18} />
            <span>Follow @bloomsfieldplayschool</span>
          </a>
        </div>
      </div>
    </header>
  );
}
