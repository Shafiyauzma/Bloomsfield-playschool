import React, { useState } from 'react';
import { Calculator, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AgeCalculator() {
  const [selectedKey, setSelectedKey] = useState('2.5-3.5');

  const programData = {
    '1.5-2.5': {
      name: 'Playgroup (Toddlers)',
      info: 'Focus: Sensory exploration, tactile play, vocabulary readiness, socialization & fine motor games.',
      color: '#FFAA00',
      badge: 'Age 1.5 – 2.5 Years'
    },
    '2.5-3.5': {
      name: 'Nursery / Pre-KG',
      info: 'Focus: Jolly phonics, letter recognition, creative arts, structured curiosity & circle storytelling.',
      color: '#FF5E5B',
      badge: 'Age 2.5 – 3.5 Years'
    },
    '3.5-4.5': {
      name: 'Junior KG (LKG)',
      info: 'Focus: Early reading, math readiness, Montessori sensorial apparatus, inquiry & collaborative activities.',
      color: '#3A86FF',
      badge: 'Age 3.5 – 4.5 Years'
    },
    '4.5-5.5': {
      name: 'Senior KG (UKG)',
      info: 'Focus: Advanced phonics, reading sentences, foundational numeracy, stage confidence & primary school readiness.',
      color: '#00BA88',
      badge: 'Age 4.5 – 5.5 Years'
    },
    'daycare': {
      name: 'Daycare & Activity Club',
      info: 'Focus: Loving afternoon care, healthy snacks, supervised nap time, storytelling & creative hobby clubs.',
      color: '#8338EC',
      badge: 'Age 1.5 – 6 Years'
    }
  };

  const currentProgram = programData[selectedKey] || programData['2.5-3.5'];

  return (
    <div className="container" id="calculator" style={{ paddingBottom: '4rem' }}>
      <div className="calculator-box">
        <div className="calc-header">
          <div className="section-badge green">
            <Calculator size={15} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: 4 }} />
            Smart Program Finder
          </div>
          <h3>Child Age Eligibility Calculator</h3>
          <p style={{ color: 'var(--text-muted)' }}>
            Select your child's age group to instantly discover their ideal learning program at Bloomsfield!
          </p>
        </div>

        <div className="calc-form">
          <div className="calc-input-group">
            <label htmlFor="calcAgeSelect">🎂 Child's Current Age / Stage:</label>
            <select 
              id="calcAgeSelect" 
              className="calc-select" 
              value={selectedKey} 
              onChange={(e) => setSelectedKey(e.target.value)}
            >
              <option value="1.5-2.5">1.5 – 2.5 Years (Toddler)</option>
              <option value="2.5-3.5">2.5 – 3.5 Years (Pre-KG / Nursery)</option>
              <option value="3.5-4.5">3.5 – 4.5 Years (LKG / Junior KG)</option>
              <option value="4.5-5.5">4.5 – 5.5 Years (UKG / Senior KG)</option>
              <option value="daycare">1.5 – 6 Years (Extended Daycare & Activity Club)</option>
            </select>
          </div>

          <div className="calc-result-box" style={{ borderLeftColor: currentProgram.color }}>
            <div className="calc-result-title">
              <Sparkles size={14} style={{ display: 'inline', marginRight: 4 }} />
              Recommended Program:
            </div>
            <div className="calc-recommended-name" style={{ color: currentProgram.color }}>
              {currentProgram.name}
            </div>
            <div className="calc-recommended-info">
              {currentProgram.info}
            </div>
            <div style={{ marginTop: '0.75rem' }}>
              <a href="#admissions" className="btn btn-primary btn-sm">
                <span>Enrol for {currentProgram.name}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
