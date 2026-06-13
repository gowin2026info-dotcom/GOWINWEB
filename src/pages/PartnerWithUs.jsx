import React, { useState } from 'react';
import { Handshake, ShieldAlert, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PartnerWithUs() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    cityState: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate server side validation and submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        cityState: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="partner-page container py-4">
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <Link to="/">Home</Link>
        <ChevronRight size={14} />
        <span>Partner With Us</span>
      </div>

      <div className="text-center mb-2">
        <h1 className="section-title center">B2B Partnership Programme</h1>
        <p className="section-desc mt-1">Become a Go Win distributor or retail partner and grow your office supplies business.</p>
      </div>

      <div className="grid-2 mt-2">
        {/* Info Column */}
        <div className="partner-info">
          <h2>Why Partner with Go Win?</h2>
          <p className="mt-1">
            Go Win is a trusted manufacturing name in the office supplies industry. We work closely with wholesalers, school suppliers, stationery brands, and corporate procurement agents across India and globally.
          </p>
          
          <div className="partner-benefits-list mt-2">
            <div className="benefit-item flex-center" style={{ gap: '1rem', justifyContent: 'flex-start', marginBottom: '1.25rem' }}>
              <div className="benefit-icon-badge flex-center"><Handshake size={24} /></div>
              <div>
                <h4>Wholesale Pricing & Margins</h4>
                <p className="text-sm">Access high-volume trade discounts and healthy distribution margins.</p>
              </div>
            </div>

            <div className="benefit-item flex-center" style={{ gap: '1rem', justifyContent: 'flex-start', marginBottom: '1.25rem' }}>
              <div className="benefit-icon-badge flex-center"><ShieldAlert size={24} /></div>
              <div>
                <h4>Custom Manufacturing</h4>
                <p className="text-sm">Leverage our extrusion and welding plants to create branded customized stationery ranges.</p>
              </div>
            </div>

            <div className="benefit-item flex-center" style={{ gap: '1rem', justifyContent: 'flex-start' }}>
              <div className="benefit-icon-badge flex-center"><CheckCircle2 size={24} /></div>
              <div>
                <h4>Reliable Logistics & Delivery</h4>
                <p className="text-sm">Count on our automated sorting and packaging centers for steady, on-time shipping schedules.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="card partner-form-card">
          <h3>Partnership Inquiry Form</h3>
          <p className="text-sm mb-2">Please submit this form, and our wholesale partnerships manager will contact you with product catalogs and price lists.</p>

          {submitted ? (
            <div className="alert-success-box text-center py-4">
              <CheckCircle2 size={48} className="success-icon mb-1" style={{ color: 'var(--secondary)' }} />
              <h3>Inquiry Submitted Successfully</h3>
              <p className="mt-1 text-sm">Thank you for your interest in partnering with Go Win. Our business development team will review your application and respond via email/phone within 2 business days.</p>
              <button className="btn btn-primary mt-2" onClick={() => setSubmitted(false)}>
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Contact Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  className="form-control" 
                  required 
                  value={formData.name} 
                  onChange={handleInputChange} 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Company / Firm Name *</label>
                <input 
                  type="text" 
                  name="company" 
                  className="form-control" 
                  required 
                  value={formData.company} 
                  onChange={handleInputChange} 
                />
              </div>

              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input 
                    type="email" 
                    name="email" 
                    className="form-control" 
                    required 
                    value={formData.email} 
                    onChange={handleInputChange} 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    className="form-control" 
                    required 
                    value={formData.phone} 
                    onChange={handleInputChange} 
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">City, State & Country *</label>
                <input 
                  type="text" 
                  name="cityState" 
                  placeholder="e.g. Mumbai, Maharashtra" 
                  className="form-control" 
                  required 
                  value={formData.cityState} 
                  onChange={handleInputChange} 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message / Partnership Details *</label>
                <textarea 
                  name="message" 
                  placeholder="Tell us about your distribution network, retail setup, or product requirements..." 
                  className="form-control" 
                  required 
                  value={formData.message} 
                  onChange={handleInputChange} 
                />
              </div>

              <button type="submit" className="btn btn-primary btn-full mt-1" disabled={submitting}>
                {submitting ? 'Submitting Application...' : 'Submit Partnership Application'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
