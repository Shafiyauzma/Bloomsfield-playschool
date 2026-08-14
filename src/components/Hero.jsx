import React from 'react';
import { Sparkles, Heart, GraduationCap, Calendar, Instagram, Wind, Video, BookOpen, Smile } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="container hero-grid">
        {/* Left Column: Headline & Action Buttons */}
        <div className="hero-content">
          <div className="hero-badge-pill">
            <Sparkles size={16} className="sparkle" />
            <span>Admissions Open for Academic Year 2026-27</span>
          </div>

          <h1 className="hero-headline">
            Where Little Minds <span className="bloom-word">Bloom</span> with Joy & Wonder <Heart size={38} className="heart" fill="#FF5E5B" />
          </h1>

          <p className="hero-lead">
            Welcome to <strong>Bloomsfield Playschool</strong> in Amalapuram — a vibrant, Montessori-inspired, and play-based early learning paradise where children (ages 1.5 to 5) discover curiosity, lifelong confidence, and happiness.
          </p>

          <div className="hero-ctas">
            <a href="#admissions" className="btn btn-primary btn-lg">
              <GraduationCap size={20} />
              <span>Enrol Your Child Today</span>
            </a>
            <a 
              href="https://wa.me/918897334744?text=Hello%20Bloomsfield%20Playschool!%20I%20would%20like%20to%20book%20a%20campus%20visit." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp btn-lg"
            >
              <Calendar size={20} />
              <span>Book Campus Visit</span>
            </a>
            <a 
              href="https://www.instagram.com/bloomsfieldplayschool?igsh=MTdkaGlwcmdmOWFxOA%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-instagram btn-lg"
            >
              <Instagram size={20} />
              <span>Instagram</span>
            </a>
          </div>

          <div className="hero-quick-features">
            <div className="hero-feature-item">
              <div className="hero-feature-icon" style={{ color: '#3A86FF' }}>
                <Wind size={18} />
              </div>
              <span>AC Classrooms</span>
            </div>
            <div className="hero-feature-item">
              <div className="hero-feature-icon" style={{ color: '#FF5E5B' }}>
                <Video size={18} />
              </div>
              <span>CCTV Secured</span>
            </div>
            <div className="hero-feature-item">
              <div className="hero-feature-icon" style={{ color: '#FFAA00' }}>
                <BookOpen size={18} />
              </div>
              <span>Phonics Program</span>
            </div>
            <div className="hero-feature-item">
              <div className="hero-feature-icon" style={{ color: '#00BA88' }}>
                <Smile size={18} />
              </div>
              <span>Caring Teachers</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Banner Stack */}
        <div className="hero-showcase">
          <div className="hero-floating-pill top-left">
            <span className="pill-icon">👶</span>
            <div className="pill-text">
              <strong>Age 1.5 - 5 Yrs</strong>
              <span>Playgroup to UKG</span>
            </div>
          </div>

          <div className="hero-card-stack">
            <img 
              src="/playschool2.jpeg" 
              alt="Bloomsfield Playschool Admissions 2026-27 Banner" 
              className="hero-card-img" 
            />
          </div>

          <div className="hero-floating-pill bottom-right">
            <span className="pill-icon">🌟</span>
            <div className="pill-text">
              <strong>Learning Through Play</strong>
              <span>Growing Every Day!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
