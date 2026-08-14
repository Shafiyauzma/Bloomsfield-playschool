/**
 * Bloomsfield Playschool - Interactive Scripts & Utilities
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initHeaderScroll();
  initCountdownTimer();
  initAgeCalculator();
  initGalleryFilterAndLightbox();
  initFaqAccordion();
  initAdmissionForm();
  initScrollTop();
  initSmoothScroll();
});

/* --------------------------------------------------------------------------
   1. Mobile Menu Drawer
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !mobileMenu) return;

  toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    const isOpen = mobileMenu.classList.contains('active');
    toggleBtn.innerHTML = isOpen ? '✕' : '☰';
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      toggleBtn.innerHTML = '☰';
      document.body.style.overflow = '';
    });
  });
}

/* --------------------------------------------------------------------------
   2. Sticky Header Scroll Effect
   -------------------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* --------------------------------------------------------------------------
   3. Grand Opening Countdown Timer (Target: 05-07-2026 10:05:00)
   -------------------------------------------------------------------------- */
function initCountdownTimer() {
  const daysEl = document.getElementById('cdDays');
  const hoursEl = document.getElementById('cdHours');
  const minsEl = document.getElementById('cdMins');
  const secsEl = document.getElementById('cdSecs');

  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  // Opening date: July 5, 2026, 10:05 AM IST
  const targetDate = new Date('2026-07-05T10:05:00+05:30').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      daysEl.innerText = '00';
      hoursEl.innerText = '00';
      minsEl.innerText = '00';
      secsEl.innerText = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.innerText = String(days).padStart(2, '0');
    hoursEl.innerText = String(hours).padStart(2, '0');
    minsEl.innerText = String(minutes).padStart(2, '0');
    secsEl.innerText = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

/* --------------------------------------------------------------------------
   4. Child Age Eligibility Calculator
   -------------------------------------------------------------------------- */
function initAgeCalculator() {
  const ageSelect = document.getElementById('calcAgeSelect');
  const programNameEl = document.getElementById('calcProgramName');
  const programInfoEl = document.getElementById('calcProgramInfo');

  if (!ageSelect || !programNameEl || !programInfoEl) return;

  const programData = {
    '1.5-2.5': {
      name: 'Playgroup (Toddlers)',
      info: 'Focus: Sensory exploration, tactile play, vocabulary readiness, socialization & fine motor games.',
      color: '#FFAA00'
    },
    '2.5-3.5': {
      name: 'Nursery / Pre-KG',
      info: 'Focus: Jolly phonics, letter recognition, creative arts, structured curiosity & circle storytelling.',
      color: '#FF5E5B'
    },
    '3.5-4.5': {
      name: 'Junior KG (LKG)',
      info: 'Focus: Early reading, math readiness, Montessori sensorial apparatus, inquiry & collaborative activities.',
      color: '#3A86FF'
    },
    '4.5-5.5': {
      name: 'Senior KG (UKG)',
      info: 'Focus: Advanced phonics, reading sentences, foundational numeracy, stage confidence & primary school readiness.',
      color: '#00BA88'
    },
    'daycare': {
      name: 'Daycare & Activity Club',
      info: 'Focus: Loving afternoon care, healthy snacks, supervised nap time, storytelling & creative hobby clubs.',
      color: '#8338EC'
    }
  };

  function recalculate() {
    const val = ageSelect.value;
    const data = programData[val] || programData['1.5-2.5'];

    programNameEl.innerText = data.name;
    programNameEl.style.color = data.color;
    programInfoEl.innerText = data.info;
  }

  ageSelect.addEventListener('change', recalculate);
  recalculate();
}

/* --------------------------------------------------------------------------
   5. Interactive Gallery Filter & Lightbox Viewer
   -------------------------------------------------------------------------- */
function initGalleryFilterAndLightbox() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxClose = document.getElementById('lightboxClose');

  if (!filterBtns.length || !galleryItems.length) return;

  // Filter functionality
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || filter === category) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Lightbox functionality
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const caption = item.querySelector('.gallery-caption')?.innerText || 'Bloomsfield Playschool';

      if (img && lightbox && lightboxImg) {
        lightboxImg.src = img.src;
        lightboxImg.alt = caption;
        if (lightboxDesc) lightboxDesc.innerText = caption;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Also support clicking on the hero banner flyer
  const openingFlyer = document.getElementById('openingFlyerFrame');
  if (openingFlyer) {
    openingFlyer.addEventListener('click', () => {
      const img = openingFlyer.querySelector('img');
      if (img && lightbox && lightboxImg) {
        lightboxImg.src = img.src;
        lightboxImg.alt = 'Grand Opening Invitation';
        if (lightboxDesc) lightboxDesc.innerText = 'Grand Opening Invitation - Bloomsfield Playschool';
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  }

  // Close lightbox
  if (lightboxClose && lightbox) {
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  function closeLightbox() {
    if (lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
}

/* --------------------------------------------------------------------------
   6. FAQ Accordion
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other items
      faqItems.forEach(i => i.classList.remove('active'));

      // Toggle clicked item
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   7. Admissions Form & Instant WhatsApp Connect
   -------------------------------------------------------------------------- */
function initAdmissionForm() {
  const form = document.getElementById('admissionForm');
  const successBox = document.getElementById('formSuccessAlert');
  const whatsappBtn = document.getElementById('sendViaWhatsAppBtn');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const parentName = document.getElementById('admParentName')?.value.trim() || '';
    const phone = document.getElementById('admPhone')?.value.trim() || '';
    const childName = document.getElementById('admChildName')?.value.trim() || '';
    const childAge = document.getElementById('admChildAge')?.value || '';
    const program = document.getElementById('admProgram')?.value || '';
    const visitDate = document.getElementById('admVisitDate')?.value || '';
    const notes = document.getElementById('admNotes')?.value.trim() || '';

    if (!parentName || !phone) {
      alert('Please provide your parent name and phone number to proceed.');
      return;
    }

    // Compose formatted WhatsApp message
    let waMsg = `*New Admission Enquiry - Bloomsfield Playschool*%0A%0A`;
    waMsg += `👤 *Parent Name:* ${encodeURIComponent(parentName)}%0A`;
    waMsg += `📞 *Phone:* ${encodeURIComponent(phone)}%0A`;
    if (childName) waMsg += `👶 *Child Name:* ${encodeURIComponent(childName)}%0A`;
    if (childAge) waMsg += `🎂 *Child Age/DOB:* ${encodeURIComponent(childAge)}%0A`;
    if (program) waMsg += `🎓 *Program:* ${encodeURIComponent(program)}%0A`;
    if (visitDate) waMsg += `📅 *Preferred Visit Date:* ${encodeURIComponent(visitDate)}%0A`;
    if (notes) waMsg += `📝 *Notes:* ${encodeURIComponent(notes)}%0A`;

    // Show success feedback
    if (successBox) {
      successBox.classList.add('active');
      successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Set WhatsApp link
    const waUrl = `https://wa.me/918897334744?text=${waMsg}`;
    if (whatsappBtn) {
      whatsappBtn.href = waUrl;
    }

    // Open WhatsApp in new tab automatically
    window.open(waUrl, '_blank');
    form.reset();
  });
}

/* --------------------------------------------------------------------------
   8. Scroll-to-Top Button
   -------------------------------------------------------------------------- */
function initScrollTop() {
  const scrollBtn = document.getElementById('scrollTopBtn');
  if (!scrollBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* --------------------------------------------------------------------------
   9. Smooth Scroll for in-page anchors
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
