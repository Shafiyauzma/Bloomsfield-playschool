import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle, Phone } from 'lucide-react';

const faqs = [
  {
    id: 0,
    emoji: '👶',
    color: '#FF7043',
    bg: '#FFF3E0',
    borderColor: '#FFE0B2',
    question: 'What is the age eligibility for Bloomsfield Playschool?',
    answer: 'We welcome children aged 1.5 to 5.5 years across Playgroup, Nursery (Pre-KG), Junior KG (LKG), Senior KG (UKG), and afternoon Daycare.'
  },
  {
    id: 1,
    emoji: '❄️',
    color: '#3A86FF',
    bg: '#EBF3FF',
    borderColor: '#BFDBFE',
    question: 'Are classrooms fully AC and CCTV monitored?',
    answer: 'Yes! 100% of our activity rooms and learning spaces are air-conditioned, well-ventilated, and equipped with 24/7 CCTV surveillance.'
  },
  {
    id: 2,
    emoji: '📖',
    color: '#FFAA00',
    bg: '#FFF6DF',
    borderColor: '#FFE0B2',
    question: 'What makes your Phonics & Montessori program unique?',
    answer: 'We blend tactile Montessori kits with international Jolly Phonics methodology. Children learn through touch, sound, and sight rather than rote learning.'
  },
  {
    id: 3,
    emoji: '📍',
    color: '#FF4081',
    bg: '#FCE4EC',
    borderColor: '#F8BBD0',
    question: 'Where is the school located and how do I visit?',
    answer: 'We are located Near Black Bridge, Beside Petrol Bunk, Amalapuram - 533201. Walk-ins and scheduled campus tours are warmly welcomed!'
  },
  {
    id: 4,
    emoji: '⏰',
    color: '#8338EC',
    bg: '#F3EBFF',
    borderColor: '#DDD6FE',
    question: 'What are the school & daycare timings?',
    answer: 'Preschool sessions run Monday to Saturday from 8:30 AM to 1:00 PM. Extended daycare hours and hobby clubs are available until 5:30 PM.'
  },
  {
    id: 5,
    emoji: '🎁',
    color: '#66BB6A',
    bg: '#E8F5E9',
    borderColor: '#C8E6C9',
    question: 'Is there a free trial class or campus tour?',
    answer: 'Absolutely! Parents and children are invited for a complimentary campus tour. Simply call 8897334744 or message us on WhatsApp.'
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="section-badge blue">
            <HelpCircle size={13} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: 4 }} />
            Got Questions?
          </div>
          <h2 className="section-title">
            Frequently Asked <span className="highlight">Questions</span>
          </h2>
          <p className="section-desc">
            Clear, honest answers to help you make the best decision for your child's early education.<br />
            Click any question to view the detailed answer! ✨
          </p>
        </div>

        {/* 2-Column Responsive FAQ Grid */}
        <div className="faq-grid-cute">
          {faqs.map((faq) => {
            const isOpen = openIdx === faq.id;
            return (
              <div
                key={faq.id}
                className={`faq-card-cute ${isOpen ? 'active' : ''}`}
                style={{
                  '--faq-color': faq.color,
                  '--faq-bg': faq.bg,
                  '--faq-border': faq.borderColor
                }}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                >
                  <div className="faq-q-left">
                    <span className="faq-emoji-badge" style={{ background: faq.bg, color: faq.color, border: `1px solid ${faq.borderColor}` }}>
                      {faq.emoji}
                    </span>
                    <span className="faq-q-text">{faq.question}</span>
                  </div>
                  <span className={`faq-arrow-icon ${isOpen ? 'open' : ''}`}>
                    <ChevronDown size={18} />
                  </span>
                </button>

                {isOpen && (
                  <div className="faq-answer-cute">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Cute Bottom Callout */}
        <div className="faq-bottom-banner">
          <div className="faq-banner-text">
            <strong>Still Have a Question?</strong>
            <span>Our admissions team is here to assist you anytime!</span>
          </div>
          <div className="faq-banner-actions">
            <a href="tel:8897334744" className="btn btn-primary btn-sm">
              <Phone size={15} />
              <span>Call: 8897334744</span>
            </a>
            <a
              href="https://wa.me/918897334744"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm"
            >
              <MessageCircle size={15} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
