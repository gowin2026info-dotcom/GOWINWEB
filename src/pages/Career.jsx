import React, { useState } from 'react';
import { Briefcase, MapPin, Building, Calendar, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Career() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', job: '', msg: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');

  const jobs = [
    {
      id: 'b2b-sales-manager',
      title: 'B2B Sales Manager (Corporate Stationery)',
      dept: 'Sales & Business Development',
      loc: 'New Delhi, India',
      type: 'Full-Time',
      desc: 'We are seeking an experienced B2B Sales Manager to manage client accounts, corporate stationery tie-ups, and coordinate wholesale distribution networks. Minimum 3 years experience in office supplies sales.'
    },
    {
      id: 'qc-engineer',
      title: 'Quality Control Engineer (Plastic Processing)',
      dept: 'Quality Assurance',
      loc: 'Manufacturing Plant, Delhi NCR',
      type: 'Full-Time',
      desc: 'Responsible for monitoring raw material inputs, maintaining compliance with tensile strength benchmarks, and supervising regular thermal tolerance tests on PP sheets. Degree in Plastic Engineering or Chemical Science required.'
    },
    {
      id: 'graphic-designer',
      title: 'Graphic & Product Packaging Designer',
      dept: 'Creative & Custom Solutions',
      loc: 'New Delhi (Hybrid)',
      type: 'Full-Time / Contract',
      desc: 'Collaborate with B2B packaging clients to produce custom silk-screen mockups, layout files, and customized product packaging structures. Expert command of Adobe Illustrator and AutoCAD required.'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleApplyClick = (jobTitle) => {
    setSelectedJob(jobTitle);
    setFormData({ ...formData, job: jobTitle });
    const element = document.getElementById('apply-form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate application submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', job: '', msg: '' });
    }, 1500);
  };

  return (
    <div className="career-page container py-4">
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <Link to="/">Home</Link>
        <ChevronRight size={14} />
        <span>Career</span>
      </div>

      <div className="text-center mb-2">
        <h1 className="section-title center">Careers at Go Win</h1>
        <p className="section-desc mt-1">Join our professional manufacturing team. Grow your skills in high-speed polymers, custom printing, and corporate supplies.</p>
      </div>

      {/* Corporate values info */}
      <div className="card text-center mb-2" style={{ backgroundColor: 'var(--primary-dark)', color: 'var(--text-white)' }}>
        <h3 style={{ color: 'var(--text-white)' }}>Work Culture at Go Win</h3>
        <p className="mt-1" style={{ maxWidth: '800px', margin: '0.5rem auto 0', fontSize: '0.95rem', opacity: 0.9 }}>
          We advocate honesty, simplicity, and transparency. As a company established in 2026, we blend years of solid market reputation with a supportive work environment that values skill upgrading, environmental responsibility, and quality production.
        </p>
      </div>

      {/* Job Openings List */}
      <div className="jobs-list-section mt-2">
        <h2>Active Job Openings</h2>
        <div className="jobs-grid mt-2" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {jobs.map((job) => (
            <div className="card job-card" key={job.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
              <div style={{ flex: '1 1 500px' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{job.title}</h3>
                <div className="job-meta flex-center" style={{ gap: '1.5rem', justifyContent: 'flex-start', fontSize: '0.85rem', color: 'var(--text-light)', marginBottom: '0.75rem' }}>
                  <span className="flex-center" style={{ gap: '0.25rem' }}><Building size={14} /> {job.dept}</span>
                  <span className="flex-center" style={{ gap: '0.25rem' }}><MapPin size={14} /> {job.loc}</span>
                  <span className="flex-center" style={{ gap: '0.25rem' }}><Calendar size={14} /> {job.type}</span>
                </div>
                <p className="text-sm">{job.desc}</p>
              </div>
              <div>
                <button className="btn btn-secondary" onClick={() => handleApplyClick(job.title)}>
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Apply Form Section */}
      <div id="apply-form-section" className="card mt-4 apply-form-card" style={{ maxWidth: '700px', margin: '3rem auto 0' }}>
        <h2 className="text-center">Application Form</h2>
        <p className="text-center text-sm mb-2">Please upload your details and CV, and our HR department will get back to you.</p>

        {submitted ? (
          <div className="alert-success-box text-center py-4">
            <CheckCircle2 size={48} className="success-icon mb-1" style={{ color: 'var(--secondary)' }} />
            <h3>Application Received</h3>
            <p className="mt-1 text-sm">Thank you for applying to Go Win. Our human resources coordinator will evaluate your qualifications and contact you if your profile matches our requirements.</p>
            <button className="btn btn-primary mt-2" onClick={() => setSubmitted(false)}>
              Apply for another opening
            </button>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label className="form-label">Position Applied For *</label>
              <input 
                type="text" 
                name="job" 
                placeholder="e.g. B2B Sales Manager" 
                className="form-control" 
                required 
                value={formData.job} 
                onChange={handleInputChange} 
              />
            </div>

            <div className="grid-2">
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
            </div>

            <div className="grid-2">
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
              <div className="form-group">
                <label className="form-label">Attach Resume / CV *</label>
                <input 
                  type="file" 
                  className="form-control" 
                  required 
                  accept=".pdf,.doc,.docx"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Cover Letter / Personal Statement</label>
              <textarea 
                name="msg" 
                placeholder="Tell us briefly why you want to join the Go Win manufacturing team..." 
                className="form-control" 
                value={formData.msg} 
                onChange={handleInputChange} 
              />
            </div>

            <button type="submit" className="btn btn-primary btn-full mt-1" disabled={submitting}>
              {submitting ? 'Submitting Application...' : 'Submit Job Application'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
