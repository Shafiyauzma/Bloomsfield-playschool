import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

const ageGroups = [
  { key: '1.5-2.5', label: '1.5 – 2.5 Yrs', emoji: '👶', name: 'Playgroup (Toddlers)' },
  { key: '2.5-3.5', label: '2.5 – 3.5 Yrs', emoji: '🎨', name: 'Nursery (Pre-KG)' },
  { key: '3.5-4.5', label: '3.5 – 4.5 Yrs', emoji: '📚', name: 'Junior KG (LKG)' },
  { key: '4.5-5.5', label: '4.5 – 5.5 Yrs', emoji: '🎓', name: 'Senior KG (UKG)' },
  { key: 'daycare', label: '1.5 – 6 Yrs',    emoji: '🧸', name: 'Extended Daycare' },
];

const programDetails = {
  '1.5-2.5': {
    name: 'Playgroup (Toddlers)',
    badge: 'Age 1.5 – 2.5 Years',
    color: '#FF7043',
    bg: '#FFF3E0',
    borderColor: '#FFE0B2',
    emoji: '👶',
    focus: 'Sensory exploration, tactile motor play, vocabulary readiness, socialization & fine motor games.',
    highlights: ['Tactile sensory play', 'Motor skill development', 'Separation & routine care']
  },
  '2.5-3.5': {
    name: 'Nursery (Pre-KG)',
    badge: 'Age 2.5 – 3.5 Years',
    color: '#FF4081',
    bg: '#FCE4EC',
    borderColor: '#F8BBD0',
    emoji: '🎨',
    focus: 'Jolly phonics, sound-letter recognition, creative arts, structured curiosity & circle storytelling.',
    highlights: ['Phonics & sound introduction', 'Creative painting & clay', 'Social collaboration']
  },
  '3.5-4.5': {
    name: 'Junior KG (LKG)',
    badge: 'Age 3.5 – 4.5 Years',
    color: '#29B6F6',
    bg: '#E1F5FE',
    borderColor: '#B3E5FC',
    emoji: '📚',
    focus: 'Early reading fluency, math readiness, Montessori sensorial apparatus, inquiry & teamwork.',
    highlights: ['Sound blending & sight words', 'Quantitative counting & math', 'Problem solving skills']
  },
  '4.5-5.5': {
    name: 'Senior KG (UKG)',
    badge: 'Age 4.5 – 5.5 Years',
    color: '#66BB6A',
    bg: '#E8F5E9',
    borderColor: '#C8E6C9',
    emoji: '🎓',
    focus: 'Advanced phonics, sentence reading, foundational math, stage confidence & primary school readiness.',
    highlights: ['Fluent reading & writing', 'Basic addition & subtraction', 'Primary grade transition']
  },
  'daycare': {
    name: 'Extended Daycare & Activity Club',
    badge: 'Age 1.5 – 6 Years',
    color: '#AB47BC',
    bg: '#F3E5F5',
    borderColor: '#E1BEE7',
    emoji: '🧸',
    focus: 'Loving afternoon care, healthy snacks, supervised nap time, storytelling & creative hobby clubs.',
    highlights: ['Safe supervised rest', 'Nutritious snack routine', 'Creative hobby activities']
  }
};

export default function AgeCalculator() {
  const [selectedKey, setSelectedKey] = useState('2.5-3.5');
  const prog = programDetails[selectedKey];

  return (
    <div className="container" id="calculator" style={{ paddingBottom: '2.5rem' }}>
      <div className="calc-card-cute">
        
        {/* Header */}
        <div className="calc-header-cute">
          <div className="section-badge green">
            <Sparkles size={13} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: 4 }} />
            Smart Program Finder
          </div>
          <h3 className="calc-title-cute">Child Age Eligibility Calculator</h3>
          <p className="calc-desc-cute">
            Select your child's age group to instantly discover their ideal learning program at Bloomsfield! 🎈
          </p>
        </div>

        {/* Interactive Selector Pills */}
        <div className="calc-pills-row">
          {ageGroups.map((g) => (
            <button
              key={g.key}
              type="button"
              className={`calc-age-pill ${selectedKey === g.key ? 'active' : ''}`}
              onClick={() => setSelectedKey(g.key)}
            >
              <span className="pill-emoji">{g.emoji}</span>
              <span>{g.label}</span>
            </button>
          ))}
        </div>

        {/* Recommended Result Box */}
        <div
          className="calc-result-cute"
          style={{
            '--result-color': prog.color,
            '--result-bg': prog.bg,
            '--result-border': prog.borderColor
          }}
        >
          <div className="calc-result-header">
            <div className="calc-result-badge">
              <Sparkles size={13} /> Recommended Program
            </div>
            <span className="calc-result-age">{prog.badge}</span>
          </div>

          <div className="calc-result-main">
            <div className="calc-result-title-row">
              <span className="calc-result-emoji">{prog.emoji}</span>
              <h4 className="calc-result-name">{prog.name}</h4>
            </div>

            <p className="calc-result-focus">
              <strong>Focus:</strong> {prog.focus}
            </p>

            <div className="calc-highlights-pills">
              {prog.highlights.map((h, i) => (
                <span key={i} className="calc-hl-pill">
                  <CheckCircle2 size={12} color={prog.color} />
                  {h}
                </span>
              ))}
            </div>

            <a
              href="#admissions"
              className="calc-enrol-btn"
              style={{ background: prog.color }}
            >
              <span>Enrol for {prog.name}</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
