import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, ChevronRight, Sparkles } from 'lucide-react';
import Lightbox from '../components/Lightbox';

export default function NewArrivals() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const newItems = [
    { src: '/assets/new/new1.webp', alt: 'Eco Pastel Ring Binder', title: 'Eco Pastel Ring Binder', desc: 'Sustainable ring binders in soft pastel colors, made from 100% recyclable, bio-based PP board.' },
    { src: '/assets/new/new2.webp', alt: 'Expanding File with Handle', title: 'Expanding File with Handle', desc: 'Heavy-duty 13-pocket expanding file folder with an ergonomic fold-flat carry handle and snap-buckle lock.' },
    { src: '/assets/new/new3.webp', alt: 'Fabric Border Sheet Protectors', title: 'Fabric Border Sheet Protectors', desc: 'Super clear sheet protectors featuring reinforced fabric borders for durability in heavy-duty binders.' },
    { src: '/assets/new/new4.webp', alt: 'Premium Desk Organizer File', title: 'Premium Desk Organizer File', desc: 'Collapsible expanding desk organizer file containing pre-printed index tabs for simple invoice management.' }
  ];

  return (
    <div className="new-arrivals-page container py-4">
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <Link to="/">Home</Link>
        <ChevronRight size={14} />
        <span>New Arrival</span>
      </div>

      <div className="text-center mb-2">
        <span className="flex-center" style={{ gap: '0.25rem', color: 'var(--accent)', fontWeight: '600', textTransform: 'uppercase', fontSize: '0.9rem' }}>
          <Sparkles size={16} /> Latest Collections
        </span>
        <h1 className="section-title center">P.P & PVC Files (New Arrival)</h1>
        <p className="section-desc mt-1">Check out our latest product designs incorporating eco-friendly raw materials and high fatigue durability.</p>
      </div>

      <div className="grid-2 mt-2">
        {newItems.map((item, idx) => (
          <div className="card new-item-card flex-center" key={idx} style={{ gap: '1.5rem', flexWrap: 'wrap', cursor: 'pointer' }} onClick={() => setLightboxIndex(idx)}>
            <div className="new-item-img-wrap" style={{ flex: '1 1 200px', height: '200px', overflow: 'hidden', borderRadius: 'var(--border-radius-sm)', position: 'relative' }}>
              <img src={item.src} alt={item.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="product-card-hover-overlay">
                <Eye size={24} />
              </div>
            </div>
            <div className="new-item-text" style={{ flex: '2 1 300px' }}>
              <span className="tag-new">New Arrival</span>
              <h3 className="mt-1" style={{ fontSize: '1.25rem' }}>{item.title}</h3>
              <p className="text-sm mt-1">{item.desc}</p>
              <div className="mt-2">
                <Link to="/clear-holder-clear-sheet-protector" className="btn btn-outline btn-sm" onClick={(e) => e.stopPropagation()}>
                  View Product Family
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox 
        images={newItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={() => setLightboxIndex((prev) => (prev === 0 ? newItems.length - 1 : prev - 1))}
        onNext={() => setLightboxIndex((prev) => (prev === newItems.length - 1 ? 0 : prev + 1))}
      />
    </div>
  );
}
