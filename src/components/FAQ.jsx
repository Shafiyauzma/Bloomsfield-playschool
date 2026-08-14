import React, { useState } from 'react';
import { HelpCircle, Plus } from 'lucide-react';

const faqs = [
  {
    question: 'What is the age eligibility for Bloomsfield Playschool?',
    answer: 'We welcome children aged 1.5 to 5.5 years across Playgroup, Nursery (Pre-KG), Junior KG (LKG), Senior KG (UKG), as well as afternoon Daycare facilities.'
  },
  {
    question: 'Are classrooms fully air-conditioned and CCTV monitored?',
    answer: 'Yes! 100% of our activity rooms and learning spaces are air-conditioned, well-ventilated, and equipped with 24/7 CCTV surveillance to guarantee utmost comfort and complete safety.'
  },
  {
    question: 'What makes your Phonics & Montessori program unique?',
    answer: 'Our curriculum blends tactile, hands-on Montessori sensorial kits with the internationally acclaimed Jolly Phonics methodology. Children learn through sight, touch, and sound rather than rote memorization, leading to superior pronunciation, vocabulary, and reading confidence.'
  },
  {
    question: 'Where is the school located and how do I visit?',
    answer: 'We are conveniently located Near Black Bridge, Beside Petrol Bunk, Amalapuram - 533201. You are welcome to walk in or schedule a personalized campus tour by calling 8897334744 or messaging us on WhatsApp.'
  },
  {
    question: 'What are the school timings?',
    answer: 'Our academic sessions run Monday through Saturday from 8:30 AM to 1:00 PM for preschool programs. Extended daycare hours and hobby activities are available until 5:30 PM.'
  },
  {
    question: 'Is there a free trial class or campus visit before enrollment?',
    answer: 'Absolutely! We warmly welcome parents and children for a complimentary campus tour and interaction session. Simply call us or send a WhatsApp message and our team will schedule a convenient visit time.'
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
        <div className="section-header">
          <div className="section-badge blue">
            <HelpCircle size={15} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: 4 }} />
            Got Questions?
          </div>
          <h2 className="section-title">
            Frequently Asked <span className="highlight">Questions</span>
          </h2>
          <p className="section-desc">
            Clear, honest answers to help you make the best decision for your child's early education.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`faq-item ${openIdx === idx ? 'active' : ''}`}>
              <button className="faq-question" onClick={() => toggle(idx)}>
                <span>{faq.question}</span>
                <span
                  className="faq-icon"
                  style={{ transform: openIdx === idx ? 'rotate(45deg)' : 'rotate(0deg)', transition: '0.2s' }}
                >
                  <Plus size={22} />
                </span>
              </button>
              <div
                className="faq-answer"
                style={{
                  maxHeight: openIdx === idx ? '400px' : '0',
                  paddingBottom: openIdx === idx ? '1.5rem' : '0'
                }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
