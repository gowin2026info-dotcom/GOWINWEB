import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-brand-col">
          <Link to="/" className="footer-logo">
            <img src="/assets/logo.jpg" alt="Go Win" className="logo-img" />
          </Link>
          <p className="footer-tagline">
            Leading the way in premium, environmentally friendly Polypropylene stationery, folders, and customized packaging solutions. Established in 2026.
          </p>
          <div className="footer-contact-info">
            <div className="info-item">
              <MapPin size={18} />
              <span>Administrative Office: 19, Amartala Lane, Kolkata - 700001</span>
            </div>
            <div className="info-item">
              <MapPin size={18} />
              <span>Head Office: 103, Dharmatala Road, Inside Ajmera Industries Complex, Salkia, Howrah - 711107</span>
            </div>
            <div className="info-item">
              <MapPin size={18} />
              <span>Factory: Vasai, Mumbai, Maharashtra</span>
            </div>
            <div className="info-item">
              <Phone size={18} />
              <span>+91 -33 47475728</span>
            </div>
            <div className="info-item">
              <Mail size={18} />
              <span>info@gowinweb.com</span>
            </div>
          </div>
        </div>

        <div className="footer-links-grid">
          <div className="links-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/what-is-polypropylene">What is PP?</Link></li>
              <li><Link to="/p-p-pvc-files">New Arrivals</Link></li>
              <li><Link to="/job-openings">Career</Link></li>
              <li><Link to="/partner-with-us">Partner With Us</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
              <li><Link to="/site-map">Site Map</Link></li>
            </ul>
          </div>
          <div className="links-col">
            <h4>Products</h4>
            <ul>
              <li><Link to="/clear-holder-clear-sheet-protector">Clear Holders</Link></li>
              <li><Link to="/snap-fastener-document-bag">Snap Fastener Bags</Link></li>
              <li><Link to="/expanding-files">Expanding Files</Link></li>
              <li><Link to="/display-book">Display Books</Link></li>
              <li><Link to="/clip-files">Clip Files</Link></li>
              <li><Link to="/ring-binder">Ring Benders</Link></li>
              <li><Link to="/zipper-bag-document-wallet-id-card">Zipper Bags</Link></li>
            </ul>
          </div>
          <div className="links-col">
            <h4>Custom Solutions</h4>
            <ul>
              <li><Link to="/medical-report-files">Medical Report Files</Link></li>
              <li><Link to="/packaging-boxes">Packaging Boxes</Link></li>
              <li><a href="/PP_Packaging.pdf" download>PP Packaging PDF</a></li>
              <li><a href="/Presentation_2012.pdf" download>Products Gallery Catalog</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {new Date().getFullYear()} Go Win. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/site-map">Sitemap</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-conditions">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
