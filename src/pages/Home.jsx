import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, Eye, ArrowRight, ShieldCheck, Recycle, Award } from 'lucide-react';
import Lightbox from '../components/Lightbox';

export default function Home() {
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Gallery images (from original layout)
  const galleryImages = [
    { src: '/assets/gallery/gallery1.webp', alt: 'PP Manufacturing facility', caption: 'High-speed automated sheet extrusion line' },
    { src: '/assets/gallery/gallery2.webp', alt: 'Premium folders', caption: 'High-frequency welding of report files' },
    { src: '/assets/gallery/gallery3.webp', alt: 'Custom packaging boxes', caption: 'Precision die-cutting of customized packaging' },
    { src: '/assets/gallery/gallery4.webp', alt: 'Clear sheet protectors production', caption: 'Clean room production of high-clarity protectors' },
    { src: '/assets/gallery/gallery5.webp', alt: 'Ring binder assembly', caption: 'Automatic rivet mounting on premium ring binders' },
    { src: '/assets/gallery/gallery6.webp', alt: 'Warehousing and dispatch', caption: 'Efficient inventory management and shipping dock' }
  ];

  // New Products images
  const newProducts = [
    { src: '/assets/new/new1.webp', alt: 'Eco Pastel Ring Binder', caption: 'Pastel Series Eco-Friendly Ring Binder' },
    { src: '/assets/new/new2.webp', alt: 'Expanding File with Handle', caption: 'Heavy-Duty 13-Pocket Expanding Case' },
    { src: '/assets/new/new3.webp', alt: 'Fabric Border Sheet Protectors', caption: 'Reinforced Fabric Border Sheet Protectors' },
    { src: '/assets/new/new4.webp', alt: 'Premium Desk Organizer File', caption: 'Multifunctional Expanding Desk Organizer' }
  ];

  // Customised Products images
  const customizedProducts = [
    { src: '/assets/custom/custom1.webp', alt: 'Medical Report Files', caption: 'Custom Printed Medical Report Files' },
    { src: '/assets/custom/custom2.webp', alt: 'Retail Packaging Box', caption: 'Frosted PP Retail Packaging Box with Handles' },
    { src: '/assets/custom/custom3.webp', alt: 'Corporate Event Portfolio', caption: 'Corporate Debossed Presentation Folders' },
    { src: '/assets/custom/custom4.webp', alt: 'Custom Silk Screen Printed Envelopes', caption: 'Multi-color Screen Printed B2B Document Envelopes' }
  ];

  const openLightbox = (imagesList, index) => {
    setLightboxImages(imagesList);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = () => {
    setLightboxIndex((prevIndex) => (prevIndex === 0 ? lightboxImages.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setLightboxIndex((prevIndex) => (prevIndex === lightboxImages.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="home-page">
      {/* Hero Banner Section */}
      <section className="hero-section">
        <div className="hero-bg-overlay"></div>
        <div className="container hero-content text-center">
          <span className="hero-subtitle">ESTABLISHED IN 2026</span>
          <h1>Welcome to Go Win</h1>
          <p className="hero-tagline">
            Professional Manufacturer of Polypropylene (PP) Office Stationery, Files, Folders, & Customised Packaging Solutions.
          </p>
          <div className="hero-ctas">
            <Link to="/clear-holder-clear-sheet-protector" className="btn btn-secondary btn-lg">
              Explore Products <ArrowRight size={16} />
            </Link>
            <a href="/Presentation_2012.pdf" download className="btn btn-outline-white btn-lg">
              <Download size={16} /> Products Gallery
            </a>
          </div>
        </div>
      </section>

      {/* Trust & Quality Highlights */}
      <section className="highlights-section py-3">
        <div className="container grid-3">
          <div className="highlight-card text-center">
            <div className="highlight-icon"><ShieldCheck size={36} /></div>
            <h3>Premium Quality</h3>
            <p>Every product follows our guiding principle: "Today's Quality is Tomorrow's Market."</p>
          </div>
          <div className="highlight-card text-center">
            <div className="highlight-icon"><Recycle size={36} /></div>
            <h3>100% Recyclable</h3>
            <p>Made from non-toxic Polypropylene, advocating zero waste and environmental protection.</p>
          </div>
          <div className="highlight-card text-center">
            <div className="highlight-icon"><Award size={36} /></div>
            <h3>State-of-the-Art Production</h3>
            <p>Manufacturing excellence and reliability in stationery and packaging since 2026.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-intro-section py-4">
        <div className="container grid-2">
          <div className="about-image-wrapper">
            <img src="/assets/pic-1.webp" alt="Go Win Office Stationery Showcase" className="about-intro-img" />
          </div>
          <div className="about-intro-text">
            <h2 className="section-title">Environmental Protection Commitment</h2>
            <p className="mt-2">
              At Go Win, we are deeply committed to safeguarding the environment. Polypropylene (PP) is an eco-friendly material that is 100% recyclable, producing no toxic emissions during manufacturing or disposal.
            </p>
            <p className="mt-1">
              By selecting our PP stationery and packaging, you choose durability, reuse, and zero toxic off-gassing. We employ state-of-the-art closed-loop recycling systems in our production facility to minimize material waste and energy usage.
            </p>
            <div className="mt-2">
              <Link to="/about-us" className="btn btn-primary">
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Gallery Section (Heading: 'About Us' as per original design requirement) */}
      <section className="gallery-section py-4 bg-light">
        <div className="container text-center">
          <h2 className="section-title center">About Us</h2>
          <p className="section-desc">Take a virtual tour of our premium manufacturing plant and product lines.</p>
          
          <div className="horizontal-scroll-gallery">
            {galleryImages.map((img, idx) => (
              <div 
                className="gallery-item-card" 
                key={idx}
                onClick={() => openLightbox(galleryImages, idx)}
              >
                <img src={img.src} alt={img.alt} className="gallery-thumbnail" />
                <div className="gallery-item-overlay">
                  <Eye size={24} />
                  <span>View Fullsize</span>
                </div>
                <div className="gallery-title">{img.caption}</div>
              </div>
            ))}
          </div>

          <div className="mt-2">
            <a href="/Presentation_2012.pdf" download className="btn btn-outline">
              <Download size={16} /> Download Products Gallery PDF
            </a>
          </div>
        </div>
      </section>

      {/* New Products Section */}
      <section className="new-products-section py-4">
        <div className="container">
          <div className="section-header-row">
            <h2 className="section-title">New Arrivals</h2>
            <Link to="/p-p-pvc-files" className="btn btn-outline btn-sm">
              View All New Arrivals
            </Link>
          </div>
          <p className="section-desc mb-2">Explore the latest additions to our file and folder portfolio.</p>

          <div className="grid-4">
            {newProducts.map((img, idx) => (
              <div 
                className="product-grid-card" 
                key={idx}
                onClick={() => openLightbox(newProducts, idx)}
              >
                <div className="product-image-container">
                  <img src={img.src} alt={img.alt} className="product-grid-img" />
                  <div className="product-card-hover-overlay">
                    <Eye size={20} />
                  </div>
                </div>
                <div className="product-grid-info">
                  <h4>{img.caption}</h4>
                  <span className="tag-new">New</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customised Products Section */}
      <section className="customised-products-section py-4 bg-light">
        <div className="container">
          <div className="section-header-row">
            <h2 className="section-title">Customised Solutions</h2>
            <a href="/PP_Packaging.pdf" download className="btn btn-outline btn-sm">
              <Download size={14} /> Download PP Packaging PDF
            </a>
          </div>
          <p className="section-desc mb-2">Medical report files and other customized PP office solutions built to your brand's specifications.</p>

          <div className="grid-4">
            {customizedProducts.map((img, idx) => (
              <div 
                className="product-grid-card" 
                key={idx}
                onClick={() => openLightbox(customizedProducts, idx)}
              >
                <div className="product-image-container">
                  <img src={img.src} alt={img.alt} className="product-grid-img" />
                  <div className="product-card-hover-overlay">
                    <Eye size={20} />
                  </div>
                </div>
                <div className="product-grid-info">
                  <h4>{img.caption}</h4>
                  <span className="tag-custom">Custom</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Overlay */}
      <Lightbox 
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onClose={closeLightbox}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}
