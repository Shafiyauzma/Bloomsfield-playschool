import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      stage: 'Stage 1',
      tagColor: 'orange',
      name: 'Playgroup',
      age: '👶 Age: 1.5 – 2.5 Years',
      desc: 'Gentle transition from home to school. Immersive sensory stimulation, tactile motor play, and joyful musical rhymes.',
      points: [
        'Sensory & tactile motor activities',
        'Motor skills & bodily coordination',
        'Rhyme, music & motion circles',
        'Loving separation & routine support'
      ],
      btnClass: 'btn-secondary'
    },
    {
      stage: 'Stage 2',
      tagColor: 'pink',
      name: 'Nursery (Pre-KG)',
      age: '🎨 Age: 2.5 – 3.5 Years',
      desc: 'Fostering expressive speech, foundational phonics, color/shape recognition, and social collaboration.',
      points: [
        'Phonics foundation & vocabulary',
        'Creative arts, painting & clay play',
        'Numbers & pattern recognition',
        'Social manners & conversational play'
      ],
      btnClass: 'btn-primary'
    },
    {
      stage: 'Stage 3',
      tagColor: 'blue',
      name: 'Junior KG (LKG)',
      age: '📚 Age: 3.5 – 4.5 Years',
      desc: 'Cultivating early reading fluency, writing readiness, pre-math logic, and inquiry-driven science experiments.',
      points: [
        'Blending sounds & sight words',
        'Quantitative numeracy & counting',
        'Environmental studies & discovery',
        'Independent problem solving'
      ],
      btnClass: 'btn-outline'
    },
    {
      stage: 'Stage 4',
      tagColor: 'green',
      name: 'Senior KG (UKG)',
      age: '🎓 Age: 4.5 – 5.5 Years',
      desc: 'Comprehensive readiness for primary school. Expressive speaking, advanced phonics, addition basics, and critical thinking.',
      points: [
        'Fluent reading & creative writing',
        'Basic addition, subtraction & time',
        'Stage confidence & public speaking',
        'Smooth primary grade transition'
      ],
      btnClass: 'btn-primary'
    }
  ];

  return (
    <section className="programs-section" id="programs">
      <div className="container">
        <div className="section-header">
          <div className="section-badge blue">Academic Offerings</div>
          <h2 className="section-title">
            Curated Programs for Every <span className="highlight">Growth Milestone</span>
          </h2>
          <p className="section-desc">
            Tailored learning stages designed to meet the cognitive, emotional, social, and physical needs of children aged 1.5 to 5 years.
          </p>
        </div>

        <div className="programs-grid">
          {programs.map((prog, idx) => (
            <div key={idx} className="program-card">
              <div>
                <span className={`program-tag ${prog.tagColor}`}>{prog.stage}</span>
                <h3 className="program-name">{prog.name}</h3>
                <div className="program-age">{prog.age}</div>
                <p className="program-desc">{prog.desc}</p>
                
                <ul className="program-highlights">
                  {prog.points.map((pt, pIdx) => (
                    <li key={pIdx}>
                      <span className="check"><Check size={16} /></span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a href="#admissions" className={`btn ${prog.btnClass} btn-sm`} style={{ width: '100%' }}>
                <span>Enquire {prog.name}</span>
                <ArrowRight size={15} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
