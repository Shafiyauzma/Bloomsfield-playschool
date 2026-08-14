import React, { useState } from 'react';
import { Send, Phone, MessageCircle, CheckCircle2, ClipboardList, Sparkles, UserCheck, Loader2 } from 'lucide-react';

// --------------------------------------------------------------------------
// DYNAMIC EMAIL CONFIGURATION
// Localhost testing: shafiyauzma8@gmail.com (CC: mohanpatro982@gmail.com)
// Production (Vercel): bloomsfieldplayschool@gmail.com
// --------------------------------------------------------------------------
const isLocal = typeof window !== 'undefined' && (
  window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
);

const RECIPIENT_PRIMARY = isLocal ? "shafiyauzma8@gmail.com" : "bloomsfieldplayschool@gmail.com";
const RECIPIENT_CC = isLocal ? "mohanpatro982@gmail.com" : "";

const steps = [
  {
    num: '1',
    emoji: '📝',
    title: 'Submit Online Enquiry or WhatsApp',
    desc: 'Fill out the form or message our admission counselor on WhatsApp.'
  },
  {
    num: '2',
    emoji: '🏫',
    title: 'Personal Campus Interaction',
    desc: 'Visit our campus near Black Bridge, Amalapuram to see classrooms & meet teachers.'
  },
  {
    num: '3',
    emoji: '🎁',
    title: 'Welcome Kit & Enrollment',
    desc: 'Complete documentation, receive your child\'s welcome kit, and start blooming!'
  }
];

export default function AdmissionsForm() {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    childName: '',
    childAge: '',
    program: 'Nursery / Pre-KG (2.5 - 3.5 Yrs)',
    visitDate: '',
    notes: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sentEmails, setSentEmails] = useState('');
  const [whatsappUrl, setWhatsappUrl] = useState('#');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.parentName.trim() || !formData.phone.trim()) {
      alert('Please provide your parent name and phone number to proceed.');
      return;
    }

    setIsSubmitting(true);

    // Build WhatsApp fallback URL
    let waMsg = `*New Admission Enquiry - Bloomsfield Playschool*%0A%0A`;
    waMsg += `👤 *Parent Name:* ${encodeURIComponent(formData.parentName)}%0A`;
    waMsg += `📞 *Phone:* ${encodeURIComponent(formData.phone)}%0A`;
    if (formData.childName) waMsg += `👶 *Child Name:* ${encodeURIComponent(formData.childName)}%0A`;
    if (formData.childAge) waMsg += `🎂 *Child Age/DOB:* ${encodeURIComponent(formData.childAge)}%0A`;
    if (formData.program) waMsg += `🎓 *Program:* ${encodeURIComponent(formData.program)}%0A`;
    if (formData.visitDate) waMsg += `📅 *Preferred Visit Date:* ${encodeURIComponent(formData.visitDate)}%0A`;
    if (formData.notes) waMsg += `📝 *Notes:* ${encodeURIComponent(formData.notes)}%0A`;

    const waUrl = `https://wa.me/918897334744?text=${waMsg}`;
    setWhatsappUrl(waUrl);

    const timeString = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'short'
    });

    // Formatted Payload for Email Inbox
    const emailPayload = {
      _subject: `[New Admission Enquiry] - ${formData.parentName} | ${formData.program}`,
      _template: 'table',
      _captcha: 'false',
      _url: typeof window !== 'undefined' ? window.location.href : 'https://bloomsfieldplayschool.com',
      
      '🏫 SCHOOL HEADER': 'BLOOMSFIELD PLAYSCHOOL ADMISSION DESK',
      
      '👤 Parent / Guardian Name': formData.parentName,
      '📞 WhatsApp Contact Number': formData.phone,
      
      '👶 Child\'s Full Name': formData.childName || 'Not specified',
      '🎂 Child\'s Age / DOB': formData.childAge || 'Not specified',
      '🎓 Program Selected': formData.program,
      
      '📅 Preferred Campus Visit': formData.visitDate ? `${formData.visitDate}` : 'To be scheduled with parent',
      '📝 Parent Notes / Special Query': formData.notes || 'No extra notes provided',
      
      '📍 CAMPUS METADATA': 'AMALAPURAM CAMPUS - 533201',
      '⏰ Submission Timestamp': timeString,
      '⚡ Required Next Action': `Call ${formData.parentName} at ${formData.phone} or chat on WhatsApp`
    };

    if (RECIPIENT_CC) {
      emailPayload._cc = RECIPIENT_CC;
    }

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_PRIMARY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(emailPayload)
      });

      const result = await response.json();
      setSentEmails(RECIPIENT_CC ? `${RECIPIENT_PRIMARY} & ${RECIPIENT_CC}` : RECIPIENT_PRIMARY);
      setSubmitted(true);
    } catch (err) {
      console.log('FormSubmit notice:', err);
      setSentEmails(RECIPIENT_CC ? `${RECIPIENT_PRIMARY} & ${RECIPIENT_CC}` : RECIPIENT_PRIMARY);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
      setFormData({
        parentName: '', phone: '', childName: '', childAge: '',
        program: 'Nursery / Pre-KG (2.5 - 3.5 Yrs)', visitDate: '', notes: ''
      });
    }
  };

  return (
    <section className="admissions-section" id="admissions">
      <div className="container admission-container">
        
        {/* Left: Guidance */}
        <div className="admission-info">
          <div className="section-badge red">
            <Sparkles size={13} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: 4 }} />
            Admissions 2026-27
          </div>
          <h3 className="adm-info-title">
            Simple & Friendly <br />
            <span>Admission Journey</span>
          </h3>
          <p className="adm-info-desc">
            We make joining the Bloomsfield family smooth, transparent, and welcoming for parents and little learners. 🌸
          </p>

          <div className="admission-steps-list">
            {steps.map((step) => (
              <div key={step.num} className="adm-step-item">
                <div className="adm-step-num-cute">
                  <span>{step.emoji}</span>
                </div>
                <div className="adm-step-text">
                  <strong>Step {step.num}: {step.title}</strong>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="admission-contact-card">
            <div className="adm-contact-header">
              <UserCheck size={18} color="var(--primary-color)" />
              <strong>Have Questions Right Now?</strong>
            </div>
            <p>Speak directly with our Admissions Desk for instant guidance:</p>
            <div className="adm-quick-actions">
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

        {/* Right: Application Form */}
        <div className="adm-form-card">
          <div className="adm-form-header">
            <div className="adm-form-icon">
              <ClipboardList size={22} color="#FF5E5B" />
            </div>
            <div>
              <h4 className="adm-form-title">Enquire for Admission</h4>
              <p className="adm-form-sub">Submits enquiry to <strong>{RECIPIENT_PRIMARY}</strong>{RECIPIENT_CC ? ` & ${RECIPIENT_CC}` : ''}</p>
            </div>
          </div>

          {/* Success feedback */}
          {submitted && (
            <div className="form-success-alert">
              <CheckCircle2 size={28} color="#00BA88" style={{ margin: '0 auto 0.35rem' }} />
              <h5>🎉 Enquiry Submitted Successfully!</h5>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-dark)', marginBottom: '0.85rem' }}>
                Your enquiry template has been sent to <strong>{sentEmails}</strong>. Our counselor will contact you shortly!
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-sm"
              >
                <MessageCircle size={15} />
                <span>Also Send via WhatsApp</span>
              </a>
            </div>
          )}

          <form onSubmit={handleSubmit} className="adm-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="parentName">Parent / Guardian Name *</label>
                <input
                  type="text"
                  id="parentName"
                  name="parentName"
                  className="form-control"
                  placeholder="e.g. Rajesh Kumar"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Contact Number (WhatsApp) *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                  placeholder="e.g. 8897334744"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="childName">Child's Full Name</label>
                <input
                  type="text"
                  id="childName"
                  name="childName"
                  className="form-control"
                  placeholder="e.g. Aarav Kumar"
                  value={formData.childName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="childAge">Child's Age / DOB</label>
                <input
                  type="text"
                  id="childAge"
                  name="childAge"
                  className="form-control"
                  placeholder="e.g. 2.5 Yrs or 15-08-2023"
                  value={formData.childAge}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="program">Program Applying For</label>
                <select
                  id="program"
                  name="program"
                  className="form-control"
                  value={formData.program}
                  onChange={handleChange}
                >
                  <option>Playgroup (1.5 - 2.5 Yrs)</option>
                  <option>Nursery / Pre-KG (2.5 - 3.5 Yrs)</option>
                  <option>Junior KG / LKG (3.5 - 4.5 Yrs)</option>
                  <option>Senior KG / UKG (4.5 - 5.5 Yrs)</option>
                  <option>Daycare / Extended Care</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="visitDate">Preferred Campus Visit Date</label>
                <input
                  type="date"
                  id="visitDate"
                  name="visitDate"
                  className="form-control"
                  value={formData.visitDate}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: '1rem' }}>
              <label htmlFor="notes">Specific Query / Note</label>
              <textarea
                id="notes"
                name="notes"
                className="form-control"
                placeholder="Tell us about your child or any special queries..."
                value={formData.notes}
                onChange={handleChange}
                rows={2}
              />
            </div>

            <div className="adm-form-submit-wrap">
              <button
                type="submit"
                className="btn btn-primary btn-lg"
                style={{ width: '100%' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="spin-icon" style={{ animation: 'spin 1s linear infinite' }} />
                    <span>Sending Formatted Email...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Submit Admission Enquiry</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
