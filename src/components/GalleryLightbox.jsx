import React, { useState } from 'react';
import { ZoomIn, X, Image as ImageIcon } from 'lucide-react';

export default function GalleryLightbox({ activeLightbox, onCloseLightbox, onOpenLightbox }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      src: '/playschool2.jpeg',
      title: 'Admissions Open 2026-27 (Age 1.5 - 5 Years)',
      category: 'announcements',
      tag: 'Official Announcement',
      isWide: true
    },
    {
      id: 2,
      src: '/classroom.jpg',
      title: 'Sunlit Montessori Learning Space',
      category: 'campus',
      tag: 'Classrooms',
      isWide: false
    },
    {
      id: 3,
      src: '/playschool.jpeg',
      title: 'Grand Opening Invitation (Sunday, 05-07-2026)',
      category: 'announcements',
      tag: 'Grand Opening',
      isWide: false
    },
    {
      id: 4,
      src: '/art_activity.jpg',
      title: 'Tactile Painting & Sensory Clay Play',
      category: 'activities',
      tag: 'Activities',
      isWide: false
    },
    {
      id: 5,
      src: '/playschool1.jpeg',
      title: 'Bloomsfield Flower Mascot Emblem',
      category: 'announcements',
      tag: 'Brand Mascot',
      isWide: false
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div className="section-header">
          <div className="section-badge purple">
            <ImageIcon size={15} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: 4 }} />
            Campus Life & Gallery
          </div>
          <h2 className="section-title">
            Moments of Joy, Wonder & <span className="highlight">Discovery</span>
          </h2>
          <p className="section-desc">
            Take a visual tour through our lively learning spaces, happy celebrations, creative projects, and official announcements.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="gallery-filters">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Photos
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'campus' ? 'active' : ''}`}
            onClick={() => setActiveFilter('campus')}
          >
            Classrooms & Campus
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'activities' ? 'active' : ''}`}
            onClick={() => setActiveFilter('activities')}
          >
            Learning & Activities
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'announcements' ? 'active' : ''}`}
            onClick={() => setActiveFilter('announcements')}
          >
            Admissions & Events
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className={`gallery-item ${item.isWide ? 'wide' : ''}`}
              onClick={() => onOpenLightbox(item.src, item.title)}
              title={`Click to view: ${item.title}`}
            >
              <img src={item.src} alt={item.title} />
              <div className="gallery-overlay">
                <span className="gallery-tag">{item.tag}</span>
                <h4 className="gallery-caption">{item.title}</h4>
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
              <X size={32} />
            </button>
            <img src={activeLightbox.src} alt={activeLightbox.title} className="lightbox-img" />
            <div className="lightbox-desc">{activeLightbox.title}</div>
          </div>
        </div>
      )}
    </section>
  );
}
