import React, { useState } from 'react';
import { Send, Phone, MessageCircle, CheckCircle2, ClipboardList } from 'lucide-react';

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
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('#');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.parentName.trim() || !formData.phone.trim()) {
      alert('Please provide your parent name and phone number to proceed.');
      return;
    }

    let waMsg = `*New Admission Enquiry - Bloomsfield Playschool*%0A%0A`;
    waMsg += `👤 *Parent Name:* ${encodeURIComponent(formData.parentName)}%0A`;
    waMsg += `📞 *Phone:* ${encodeURIComponent(formData.phone)}%0A`;
    if (formData.childName) waMsg += `👶 *Child Name:* ${encodeURIComponent(formData.childName)}%0A`;
    if (formData.childAge) waMsg += `🎂 *Child Age/DOB:* ${encodeURIComponent(formData.childAge)}%0A`;
    if (formData.program) waMsg += `🎓 *Program:* ${encodeURIComponent(formData.program)}%0A`;
    if (formData.visitDate) waMsg += `📅 *Preferred Visit Date:* ${encodeURIComponent(formData.visitDate)}%0A`;
    if (formData.notes) waMsg += `📝 *Notes:* ${encodeURIComponent(formData.notes)}%0A`;

    const url = `https://wa.me/918897334744?text=${waMsg}`;
    setWhatsappUrl(url);
    setSubmitted(true);

    // Open WhatsApp in new tab
    window.open(url, '_blank');
    setFormData({
      parentName: '', phone: '', childName: '', childAge: '',
      program: 'Nursery / Pre-KG (2.5 - 3.5 Yrs)', visitDate: '', notes: ''
    });
  };

  const steps = [
    {
      num: 1,
      title: 'Submit Online Enquiry or WhatsApp',
      desc: 'Fill out the simple form or message our admission counselor on WhatsApp at 8897334744.'
    },
    {
      num: 2,
      title: 'Personal Campus Tour & Interaction',
      desc: 'Visit our campus near Black Bridge, Amalapuram to experience the AC classrooms and meet our teachers.'
    },
    {
      num: 3,
      title: 'Welcome Kit & Enrollment',
      desc: 'Complete simple documentation, receive the child\'s Bloomsfield welcome kit, and start the blooming journey!'
    }
  ];

  return (
    <section className="admissions-section" id="admissions">
      <div className="container admission-container">
        {/* Left: Guidance */}
        <div className="admission-info">
          <div className="section-badge">Admissions 2026-27</div>
          <h3>Simple & Friendly Admission Journey</h3>
          <p className="section-desc">
            We make joining the Bloomsfield family smooth and welcoming for parents and little learners.
          </p>

          <div className="admission-steps-list">
            {steps.map((step) => (
              <div key={step.num} className="adm-step-item">
                <div className="adm-step-num">{step.num}</div>
                <div className="adm-step-text">
                  <strong>{step.title}</strong>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="admission-contact-box">
            <strong>Have Questions Right Now?</strong>
            <span>Speak directly with our Admissions Director:</span>
            <div className="adm-quick-actions">
              <a href="tel:8897334744" className="btn btn-primary btn-sm">
                <Phone size={16} />
                <span>Call: 8897334744</span>
              </a>
              <a
                href="https://wa.me/918897334744"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-sm"
              >
                <MessageCircle size={16} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Application Form */}
        <div className="adm-form-card">
          <h4>
            <ClipboardList size={26} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 8, color: 'var(--primary-color)' }} />
            Enquire for Admission
          </h4>
          <p>Fill in the details below. You will receive an instant summary and can connect immediately via WhatsApp.</p>

          {/* Success feedback */}
          {submitted && (
            <div className="form-success-alert">
              <CheckCircle2 size={28} color="#00BA88" style={{ margin: '0 auto 0.5rem' }} />
              <h5>🎉 Thank You for Your Enquiry!</h5>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-dark)', marginBottom: '1rem' }}>
                Your admission request has been drafted. A counselor from Bloomsfield Playschool will call you shortly.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-sm"
              >
                <MessageCircle size={16} />
                <span>Send Details to School WhatsApp</span>
              </a>
            </div>
          )}

          <form onSubmit={handleSubmit}>
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
                <label htmlFor="childAge">Child's Age or Date of Birth</label>
                <input
                  type="text"
                  id="childAge"
                  name="childAge"
                  className="form-control"
                  placeholder="e.g. 2.5 Years or 15-08-2023"
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

            <div className="form-group">
              <label htmlFor="notes">Any Specific Query or Note</label>
              <textarea
                id="notes"
                name="notes"
                className="form-control"
                placeholder="Tell us about your child or any special queries..."
                value={formData.notes}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
              <Send size={18} />
              <span>Submit Admission Enquiry</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
