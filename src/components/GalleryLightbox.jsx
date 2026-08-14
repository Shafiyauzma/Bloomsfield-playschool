import React, { useState } from 'react';
import { ZoomIn, X, Image as ImageIcon, Sparkles } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    src: '/playschool2.jpeg',
    title: 'Admissions Open 2026-27 (Age 1.5 - 5 Years)',
    category: 'announcements',
    tag: 'Official Banner',
    emoji: '📢',
    isWide: true
  },
  {
    id: 2,
    src: '/classroom.jpg',
    title: 'Sunlit Montessori Learning Space',
    category: 'campus',
    tag: 'Montessori Classroom',
    emoji: '🏫',
    isWide: false
  },
  {
    id: 3,
    src: '/playschool.jpeg',
    title: 'Grand Opening Invitation (Sunday, 05-07-2026)',
    category: 'announcements',
    tag: 'Grand Opening',
    emoji: '🎉',
    isWide: false
  },
  {
    id: 4,
    src: '/art_activity.jpg',
    title: 'Tactile Painting & Sensory Clay Play',
    category: 'activities',
    tag: 'Creative Arts',
    emoji: '🎨',
    isWide: false
  },
  {
    id: 5,
    src: '/playschool1.jpeg',
    title: 'Bloomsfield Flower Mascot Emblem',
    category: 'announcements',
    tag: 'Brand Emblem',
    emoji: '🌸',
    isWide: false
  }
];

const filterTabs = [
  { key: 'all', label: 'All Photos', emoji: '✨' },
  { key: 'campus', label: 'Classrooms & Campus', emoji: '🏫' },
  { key: 'activities', label: 'Activities & Arts', emoji: '🎨' },
  { key: 'announcements', label: 'Announcements', emoji: '📢' },
];

export default function GalleryLightbox({ activeLightbox, onCloseLightbox, onOpenLightbox }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="section-badge purple">
            <ImageIcon size={13} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: 4 }} />
            Campus Life & Gallery
          </div>
          <h2 className="section-title">
            Moments of Joy, Wonder & <span className="highlight">Discovery</span>
          </h2>
          <p className="section-desc">
            Take a visual tour through our sunlit Montessori learning spaces, creative arts, and celebrations.<br />
            Click any image to view in full resolution! 📸
          </p>
        </div>

        {/* Filter Pills */}
        <div className="gallery-filters-cute">
          {filterTabs.map(tab => (
            <button
              key={tab.key}
              type="button"
              className={`gallery-filter-pill ${activeFilter === tab.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(tab.key)}
            >
              <span>{tab.emoji}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid-cute">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className={`gallery-card-cute ${item.isWide ? 'wide' : ''}`}
              onClick={() => onOpenLightbox(item.src, item.title)}
              title={`Click to view: ${item.title}`}
              role="button"
              tabIndex={0}
            >
              <img src={item.src} alt={item.title} loading="lazy" />
              
              <div className="gallery-badge-tag">
                <span>{item.emoji}</span> {item.tag}
              </div>

              <div className="gallery-overlay-cute">
                <div className="gallery-zoom-icon">
                  <ZoomIn size={16} /> Zoom Photo
                </div>
                <h4 className="gallery-caption-cute">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div className="lightbox-modal active" onClick={onCloseLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={onCloseLightbox} aria-label="Close Lightbox">
              <X size={26} />
            </button>
            <img src={activeLightbox.src} alt={activeLightbox.title} className="lightbox-img" />
            <div className="lightbox-desc">{activeLightbox.title}</div>
          </div>
        </div>
      )}
    </section>
  );
}
