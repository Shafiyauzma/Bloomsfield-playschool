import React from 'react';
import { Instagram, ExternalLink, Heart, MessageSquare } from 'lucide-react';

export default function InstagramFeed() {
  const instaUrl = "https://www.instagram.com/bloomsfieldplayschool?igsh=MTdkaGlwcmdmOWFxOA%3D%3D";

  return (
    <section className="instagram-section" id="instagram">
      <div className="container">
        <div className="instagram-card-banner">
          
          <div className="insta-banner-left">
            <div className="insta-badge">
              <Instagram size={16} />
              <span>Official Instagram Community</span>
            </div>
            
            <h2 className="insta-title">Connect with Us on Instagram!</h2>
            
            <a 
              href={instaUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="insta-handle"
            >
              @bloomsfieldplayschool <ExternalLink size={18} style={{ display: 'inline', verticalAlign: 'middle' }} />
            </a>
            
            <p className="insta-desc">
              Catch daily glimpses of joyful classroom smiles, exciting hands-on phonics activities, festival celebrations, and early learning tips right on our official Instagram page! 🌸
            </p>
            
            <a 
              href={instaUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary btn-lg insta-follow-btn"
            >
              <Instagram size={20} />
              <span>Follow @bloomsfieldplayschool</span>
            </a>
          </div>

          {/* Mini Cards Preview */}
          <div className="insta-posts-preview">
            <a 
              href={instaUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="insta-mini-card"
            >
              <img src="/playschool2.jpeg" alt="Bloomsfield Playschool Classroom" className="insta-mini-img" />
              <p className="insta-mini-caption">
                🎉 Admissions Open 2026-27! Experience the best Montessori-inspired play school in Amalapuram. #BloomsfieldPlayschool
              </p>
              <div className="insta-card-stats">
                <span><Heart size={13} fill="#FF5E5B" color="#FF5E5B" /> 128 Likes</span>
                <span><MessageSquare size={13} /> 24 Comments</span>
              </div>
            </a>

            <a 
              href={instaUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="insta-mini-card"
            >
              <img src="/art_activity.jpg" alt="Art Activity at Bloomsfield" className="insta-mini-img" />
              <p className="insta-mini-caption">
                🎨 Little hands, big imagination! Exploring sensory finger art &amp; clay today at Bloomsfield. ❤️ #LearningThroughPlay
              </p>
              <div className="insta-card-stats">
                <span><Heart size={13} fill="#FF5E5B" color="#FF5E5B" /> 154 Likes</span>
                <span><MessageSquare size={13} /> 31 Comments</span>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
