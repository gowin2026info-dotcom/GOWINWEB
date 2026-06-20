import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate contact form submission
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="contact-page container py-4">
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <Link to="/">Home</Link>
        <ChevronRight size={14} />
        <span>Contact Us</span>
      </div>

      <div className="text-center mb-2">
        <h1 className="section-title center">Contact Us</h1>
        <p className="section-desc mt-1">Get in touch with Go Win sales, support, and corporate offices.</p>
      </div>

      <div className="grid-2 mt-2">
        {/* Info Column */}
        <div className="contact-info-col">
          <div className="card">
            <h3>Corporate Office</h3>
            <p className="mt-1">Feel free to visit us or contact us directly using the information below.</p>
            
            <div className="contact-details-list mt-2">
              <div className="contact-detail-item">
                <MapPin size={24} style={{ color: 'var(--secondary)' }} />
                <div>
                  <h4>Administrative Office</h4>
                  <p>19, Amartala Lane, Kolkata - 700001</p>
                </div>
              </div>

              <div className="contact-detail-item mt-1">
                <MapPin size={24} style={{ color: 'var(--secondary)' }} />
                <div>
                  <h4>Head Office</h4>
                  <p>103, Dharmatala Road, Inside Ajmera Industries Complex, Salkia, Howrah - 711107</p>
                </div>
              </div>

              <div className="contact-detail-item mt-1">
                <MapPin size={24} style={{ color: 'var(--secondary)' }} />
                <div>
                  <h4>Service &amp; Delivery Coverage</h4>
                  <p>Daily B2B distribution and door-to-door bulk shipping serving Kolkata, Howrah, Hooghly district, and all major commercial states across India.</p>
                </div>
              </div>

              <div className="contact-detail-item mt-1">
                <MapPin size={24} style={{ color: 'var(--secondary)' }} />
                <div>
                  <h4>Factory</h4>
                  <p>Vasai, Mumbai, Maharashtra</p>
                </div>
              </div>

              <div className="contact-detail-item mt-1">
                <Phone size={24} style={{ color: 'var(--secondary)' }} />
                <div>
                  <h4>Phone Number</h4>
                  <p>+91 -33 47475728</p>
                </div>
              </div>

              <div className="contact-detail-item mt-1">
                <Mail size={24} style={{ color: 'var(--secondary)' }} />
                <div>
                  <h4>Email Addresses</h4>
                  <p>info@gowinweb.com</p>
                  <p>sales@gowinweb.com (For custom pricing inquiries)</p>
                </div>
              </div>
            </div>
          </div>


        </div>

        {/* Contact Form Column */}
        <div className="card contact-form-card">
          <h3>Send a Message</h3>
          <p className="text-sm mb-2">Have a question about our stationery catalog or ordering process? Send us a message, and we will get back to you shortly.</p>
          
          {success ? (
            <div className="alert-success-box text-center py-4">
              <CheckCircle2 size={48} className="success-icon mb-1" style={{ color: 'var(--secondary)' }} />
              <h3>Message Sent Successfully!</h3>
              <p className="mt-1 text-sm">Thank you for contacting Go Win. A representative from our correspondence desk will reply to your email shortly.</p>
              <button className="btn btn-primary mt-2" onClick={() => setSuccess(false)}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name *</label>
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
                <label className="form-label">Subject *</label>
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="e.g. Bulk Sheet Protector Pricing" 
                  className="form-control" 
                  required 
                  value={formData.subject} 
                  onChange={handleInputChange} 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Your Message *</label>
                <textarea 
                  name="message" 
                  placeholder="Write your message here..." 
                  className="form-control" 
                  required 
                  value={formData.message} 
                  onChange={handleInputChange} 
                />
              </div>

              <button type="submit" className="btn btn-primary btn-full mt-1" disabled={submitting}>
                {submitting ? 'Sending Message...' : 'Send Message'} <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
