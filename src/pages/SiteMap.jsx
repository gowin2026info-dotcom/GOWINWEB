import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Globe, FileText, Download, Phone } from 'lucide-react';
import { products } from '../data/products';

export default function SiteMap() {
  return (
    <div className="sitemap-page container py-4">
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <Link to="/">Home</Link>
        <ChevronRight size={14} />
        <span>Site Map</span>
      </div>

      <div className="text-center mb-2">
        <h1 className="section-title center">Site Map</h1>
        <p className="section-desc mt-1">Full HTML sitemap to easily navigate all sections and product pages of the Go Win website.</p>
      </div>

      <div className="grid-3 mt-2 sitemap-grid">
        {/* Main Pages */}
        <div className="card">
          <h3 className="flex-center" style={{ gap: '0.5rem', justifyContent: 'flex-start', color: 'var(--primary)' }}>
            <Globe size={20} /> Corporate Sections
          </h3>
          <ul className="sitemap-list mt-1">
            <li><Link to="/">Home Page</Link></li>
            <li><Link to="/about-us">About Us Page</Link></li>
            <li><Link to="/what-is-polypropylene">What is Polypropylene?</Link></li>
            <li><Link to="/p-p-pvc-files">New Arrivals (New PP/PVC Files)</Link></li>
            <li><Link to="/job-openings">Career / Job Openings</Link></li>
            <li><Link to="/partner-with-us">Partner With Us (B2B Registration)</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/site-map">Site Map (This Page)</Link></li>
          </ul>
        </div>

        {/* Product Catalogue */}
        <div className="card">
          <h3 className="flex-center" style={{ gap: '0.5rem', justifyContent: 'flex-start', color: 'var(--primary)' }}>
            <FileText size={20} /> Product Catalog
          </h3>
          <ul className="sitemap-list mt-1">
            {products.map((prod) => (
              <li key={prod.id}>
                <Link to={`/${prod.id}`}>{prod.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Downloads & Direct Links */}
        <div className="card">
          <h3 className="flex-center" style={{ gap: '0.5rem', justifyContent: 'flex-start', color: 'var(--primary)' }}>
            <Download size={20} /> Assets & Downloads
          </h3>
          <ul className="sitemap-list mt-1">
            <li>
              <a href="/Presentation_2012.pdf" download>
                Products Gallery Catalog (Presentation_2012.pdf)
              </a>
            </li>
            <li>
              <a href="/PP_Packaging.pdf" download>
                PP Packaging PDF (PP_Packaging.pdf)
              </a>
            </li>
          </ul>
          
          <h3 className="flex-center mt-2" style={{ gap: '0.5rem', justifyContent: 'flex-start', color: 'var(--primary)' }}>
            <Phone size={20} /> Contact Details
          </h3>
          <p className="text-sm mt-1">
            Go Win Office Supplies<br />
            19, Amartala Lane, Kolkata - 700001<br />
            103, Dharmatala Road, Salkia, Howrah - 711107<br />
            Phone: +91 -33 47475728
          </p>
        </div>
      </div>
    </div>
  );
}
