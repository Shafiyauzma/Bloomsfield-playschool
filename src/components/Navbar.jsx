import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Instagram, Phone, Sparkles, Home, Star, BookOpen, Calculator, Shield, Image, HelpCircle, MapPin, Calendar } from 'lucide-react';

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
          <a href="#gallery" className="nav-link">Gallery</a>
          <a href="#admissions" className="nav-link">Admissions</a>
          <a href="#contact" className="nav-link">Contact</a>
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

      {/* Mobile Overlay & Drawer */}
      {isMobileOpen && <div className="mobile-backdrop" onClick={closeMenu} />}
      <div className={`mobile-menu ${isMobileOpen ? 'active' : ''}`}>
        
        {/* Cute Drawer Header */}
        <div className="mobile-drawer-header">
          <div className="mobile-drawer-brand">
            <img src="/playschool1.jpeg" alt="Logo" className="mobile-logo-img" />
            <div>
              <strong className="mobile-brand-title">Bloomsfield Playschool</strong>
              <p className="mobile-brand-sub">Admissions Open 2026-27 🌸</p>
            </div>
          </div>
          <button className="mobile-drawer-close" onClick={closeMenu} aria-label="Close menu">
            <X size={22} />
          </button>
        </div>

        {/* Reordered Mobile Nav Items - Grand Opening BEFORE About */}
        <div className="mobile-nav-list">
          <a href="#opening" className="mobile-nav-item highlight-item" onClick={closeMenu}>
            <span className="mob-icon-badge yellow">🎉</span>
            <div className="mob-item-text">
              <strong>Grand Opening 2026</strong>
              <span>Campus Unveiling &amp; Admissions</span>
            </div>
          </a>

          <a href="#about" className="mobile-nav-item" onClick={closeMenu}>
            <span className="mob-icon-badge red">🌸</span>
            <div className="mob-item-text">
              <strong>About Bloomsfield</strong>
              <span>Montessori &amp; Play Philosophy</span>
            </div>
          </a>

          <a href="#programs" className="mobile-nav-item" onClick={closeMenu}>
            <span className="mob-icon-badge blue">🎓</span>
            <div className="mob-item-text">
              <strong>Academic Programs</strong>
              <span>Playgroup, Nursery, LKG, UKG</span>
            </div>
          </a>

          <a href="#calculator" className="mobile-nav-item" onClick={closeMenu}>
            <span className="mob-icon-badge purple">🔢</span>
            <div className="mob-item-text">
              <strong>Age Eligibility Calculator</strong>
              <span>Discover ideal program for child</span>
            </div>
          </a>

          <a href="#facilities" className="mobile-nav-item" onClick={closeMenu}>
            <span className="mob-icon-badge green">🌿</span>
            <div className="mob-item-text">
              <strong>Facilities &amp; Safety</strong>
              <span>100% AC &amp; 24/7 CCTV Campus</span>
            </div>
          </a>

          <a href="#gallery" className="mobile-nav-item" onClick={closeMenu}>
            <span className="mob-icon-badge coral">📸</span>
            <div className="mob-item-text">
              <strong>Campus Photo Gallery</strong>
              <span>Classrooms &amp; Activity photos</span>
            </div>
          </a>

          <a href="#admissions" className="mobile-nav-item" onClick={closeMenu}>
            <span className="mob-icon-badge red">📝</span>
            <div className="mob-item-text">
              <strong>Admissions 2026-27</strong>
              <span>Enquire &amp; Book Campus Visit</span>
            </div>
          </a>

          <a href="#faq" className="mobile-nav-item" onClick={closeMenu}>
            <span className="mob-icon-badge blue">❓</span>
            <div className="mob-item-text">
              <strong>Parent FAQs</strong>
              <span>Answers to common queries</span>
            </div>
          </a>

          <a href="#contact" className="mobile-nav-item" onClick={closeMenu}>
            <span className="mob-icon-badge purple">📍</span>
            <div className="mob-item-text">
              <strong>Contact &amp; Campus Map</strong>
              <span>Black Bridge, Amalapuram</span>
            </div>
          </a>
        </div>

        {/* Mobile Quick Action Buttons */}
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
