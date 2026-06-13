import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="not-found-page container text-center py-4 flex-center" style={{ flexDirection: 'column', minHeight: '60vh', gap: '1.5rem' }}>
      <div className="not-found-icon" style={{ animation: 'bounce 2s infinite' }}>
        <HelpCircle size={80} style={{ color: 'var(--secondary)' }} />
      </div>
      
      <h1>404 - Page Not Found</h1>
      <p className="section-desc" style={{ maxWidth: '500px' }}>
        We couldn't find the page you were looking for. The link might be broken, or the page may have been moved.
      </p>

      <div className="flex-center" style={{ gap: '1rem' }}>
        <Link to="/" className="btn btn-primary">
          <Home size={16} /> Return to Home
        </Link>
        <button className="btn btn-outline" onClick={() => window.history.back()}>
          <ArrowLeft size={16} /> Go Back
        </button>
      </div>
    </div>
  );
}
