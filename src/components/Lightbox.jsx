import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (currentIndex === null || currentIndex === undefined || currentIndex < 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close lightbox">
        <X size={32} />
      </button>
      
      <button 
        className="lightbox-nav lightbox-prev" 
        onClick={(e) => { e.stopPropagation(); onPrev(); }} 
        aria-label="Previous image"
      >
        <ChevronLeft size={36} />
      </button>

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={currentImage.src} alt={currentImage.alt || 'Gallery Image'} className="lightbox-image" />
        {currentImage.caption && (
          <div className="lightbox-caption">
            <p>{currentImage.caption}</p>
          </div>
        )}
      </div>

      <button 
        className="lightbox-nav lightbox-next" 
        onClick={(e) => { e.stopPropagation(); onNext(); }} 
        aria-label="Next image"
      >
        <ChevronRight size={36} />
      </button>
    </div>
  );
}
