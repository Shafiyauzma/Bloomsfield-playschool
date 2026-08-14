import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GrandOpening from './components/GrandOpening';
import Philosophy from './components/Philosophy';
import Programs from './components/Programs';
import AgeCalculator from './components/AgeCalculator';
import Facilities from './components/Facilities';
import GalleryLightbox from './components/GalleryLightbox';
import InstagramFeed from './components/InstagramFeed';
import DailyRoutine from './components/DailyRoutine';

import AdmissionsForm from './components/AdmissionsForm';
import FAQ from './components/FAQ';
import LocationMap from './components/LocationMap';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import './styles/components.css';

export default function App() {
  // Shared lightbox state across GrandOpening + Gallery
  const [lightbox, setLightbox] = useState(null); // { src, title }

  const openLightbox = (src, title) => setLightbox({ src, title });
  const closeLightbox = () => setLightbox(null);

  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <GrandOpening onOpenFlyer={openLightbox} />
        <Philosophy />
        <Programs />
        {/* Age Calculator embedded inline below Programs */}
        <section style={{ background: 'var(--bg-alt)', paddingTop: 0 }}>
          <AgeCalculator />
        </section>
        <Facilities />
        <GalleryLightbox
          activeLightbox={lightbox}
          onOpenLightbox={openLightbox}
          onCloseLightbox={closeLightbox}
        />
        <InstagramFeed />
        <DailyRoutine />

        <AdmissionsForm />
        <FAQ />
        <LocationMap />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
