import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronRight, Download, Send, RefreshCw, FileText, CheckCircle2 } from 'lucide-react';
import { products } from '../data/products';

export default function ProductPage() {
  const { productId } = useParams();
  const [formData, setFormData] = useState({ name: '', email: '', qty: '', msg: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Find the product by ID
  const product = products.find((p) => p.id === productId);

  if (!product) {
    // Redirect to NotFound or Home if not found
    return <Navigate to="/404" replace />;
  }

  // Get related products (same category, excluding current product)
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate API Form Submission
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setFormData({ name: '', email: '', qty: '', msg: '' });
    }, 1200);
  };

  return (
    <div className="product-detail-page container py-4">
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <Link to="/">Home</Link>
        <ChevronRight size={14} />
        <span>Products</span>
        <ChevronRight size={14} />
        <span>{product.category}</span>
        <ChevronRight size={14} />
        <span className="current-crumb">{product.title}</span>
      </div>

      <div className="product-layout-grid">
        {/* Left Side: Product Image & Gallery */}
        <div className="product-media-col">
          <div className="product-hero-image-wrapper card">
            <img src={product.image} alt={product.title} className="product-hero-image" />
          </div>
          
          <div className="download-section mt-2 text-center">
            <p className="mb-1 text-sm font-medium">Need comprehensive specifications?</p>
            <div className="flex-center" style={{ gap: '1rem' }}>
              <a href="/PP_Packaging.pdf" download className="btn btn-outline btn-sm">
                <Download size={14} /> PP Packaging PDF
              </a>
              <a href="/Presentation_2012.pdf" download className="btn btn-outline btn-sm">
                <Download size={14} /> Products Gallery
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Product Details & Specifications */}
        <div className="product-info-col">
          <span className="product-category-tag">{product.category}</span>
          <h1 className="product-detail-title">{product.title}</h1>
          
          <p className="product-long-desc">{product.description}</p>

          <h3 className="specs-title mt-2">Technical Specifications</h3>
          <table className="specs-table">
            <thead>
              <tr>
                <th>Specification</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {product.specs.map((spec, idx) => (
                <tr key={idx}>
                  <td><strong>{spec.name}</strong></td>
                  <td>{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {/* Quick Inquiry Form */}
          <div className="card mt-2 product-inquiry-box">
            <h4>Quick B2B Inquiry</h4>
            <p className="text-sm mb-1">Send us an inquiry for wholesale pricing and customization options.</p>
            
            {success ? (
              <div className="alert-success-box text-center py-2">
                <CheckCircle2 size={32} className="success-icon mb-1" />
                <p className="font-semibold">Thank you for your inquiry!</p>
                <p className="text-xs">Our sales team will contact you within 24 hours.</p>
                <button className="btn btn-outline btn-sm mt-1" onClick={() => setSuccess(false)}>
                  <RefreshCw size={12} /> Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
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
                    <label className="form-label">Quantity Required</label>
                    <input 
                      type="number" 
                      name="qty" 
                      placeholder="e.g. 5000" 
                      className="form-control" 
                      value={formData.qty} 
                      onChange={handleInputChange} 
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Customization Notes</label>
                    <input 
                      type="text" 
                      name="msg" 
                      placeholder="e.g. Silk screen logo printing" 
                      className="form-control" 
                      value={formData.msg} 
                      onChange={handleInputChange} 
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary btn-full" disabled={submitting}>
                  {submitting ? 'Sending...' : 'Send Inquiry'} <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="related-products-section mt-4">
          <h2 className="section-title">Related Products</h2>
          <div className="grid-3 mt-2">
            {related.map((prod) => (
              <Link to={`/${prod.id}`} key={prod.id} className="card related-product-card text-center">
                <img src={prod.image} alt={prod.title} className="related-thumb mb-1" />
                <h4>{prod.title}</h4>
                <span className="related-view-link">View Details <ChevronRight size={14} /></span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
