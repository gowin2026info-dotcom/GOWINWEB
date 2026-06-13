import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Download, ChevronRight } from 'lucide-react';
import { products } from '../data/products';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Group products by category
  const categories = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-top-bar">
        <div className="container top-bar-content">
          <span className="welcome-text">Premium Polypropylene Office Stationery & Packaging</span>
          <div className="top-bar-links">
            <a href="/Presentation_2012.pdf" download className="top-download-link">
              <Download size={14} />
              <span>Products Gallery PDF</span>
            </a>
            <a href="/PP_Packaging.pdf" download className="top-download-link">
              <Download size={14} />
              <span>PP Packaging PDF</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="header-main-nav">
        <div className="container nav-container">
          <Link to="/" className="site-logo">
            <img src="/assets/logo.jpg" alt="Go Win" className="logo-img" />
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-menu">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
            <Link to="/about-us" className={`nav-link ${location.pathname === '/about-us' ? 'active' : ''}`}>About Us</Link>
            
            {/* Products Mega Dropdown */}
            <div className="nav-item-dropdown">
              <span className={`nav-link dropdown-trigger ${location.pathname.startsWith('/clear-holder') || location.pathname.startsWith('/snap') || location.pathname.startsWith('/expanding') || location.pathname.startsWith('/display') || location.pathname.startsWith('/clip') || location.pathname.startsWith('/report') || location.pathname.startsWith('/ring') || location.pathname.startsWith('/business-card') || location.pathname.startsWith('/zipper') || location.pathname.startsWith('/clamp') || location.pathname.startsWith('/medical') || location.pathname.startsWith('/packaging') ? 'active' : ''}`}>
                Products <ChevronDown size={16} />
              </span>
              <div className="mega-menu">
                <div className="mega-menu-grid">
                  <div className="mega-menu-col info-col">
                    <h3>Go Win Solutions</h3>
                    <p>Discover our eco-friendly, ultra-durable PP products designed for office, school, and retail requirements.</p>
                    <Link to="/what-is-polypropylene" className="info-link">
                      What is Polypropylene? <ChevronRight size={14} />
                    </Link>
                    <div className="download-box">
                      <a href="/PP_Packaging.pdf" download className="btn btn-secondary btn-sm">
                        <Download size={16} /> PP Packaging PDF
                      </a>
                    </div>
                  </div>
                  {Object.keys(categories).map((catName) => (
                    <div className="mega-menu-col" key={catName}>
                      <h4>{catName}</h4>
                      <ul className="mega-menu-list">
                        {categories[catName].map((prod) => (
                          <li key={prod.id}>
                            <Link to={`/${prod.id}`} className="mega-menu-item-link">
                              {prod.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/p-p-pvc-files" className={`nav-link ${location.pathname === '/p-p-pvc-files' ? 'active' : ''}`}>New Arrival</Link>
            <Link to="/job-openings" className={`nav-link ${location.pathname === '/job-openings' ? 'active' : ''}`}>Career</Link>
            <Link to="/partner-with-us" className={`nav-link ${location.pathname === '/partner-with-us' ? 'active' : ''}`}>Partner With Us</Link>
            <Link to="/contact-us" className={`nav-link ${location.pathname === '/contact-us' ? 'active' : ''}`}>Contact Us</Link>
          </nav>

          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Slide-in Drawer */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <button className="mobile-drawer-close" onClick={() => setIsOpen(false)} aria-label="Close menu">
          <X size={24} />
        </button>
        <div className="mobile-drawer-content">
          <Link to="/" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about-us" className="mobile-nav-link" onClick={() => setIsOpen(false)}>About Us</Link>
          
          <div className="mobile-accordion">
            <button className="mobile-accordion-trigger" onClick={() => setActiveAccordion(!activeAccordion)}>
              Products <ChevronDown size={18} className={activeAccordion ? 'rotate' : ''} />
            </button>
            <div className={`mobile-accordion-body ${activeAccordion ? 'open' : ''}`}>
              <Link to="/what-is-polypropylene" className="mobile-sub-link" onClick={() => setIsOpen(false)}>What is Polypropylene?</Link>
              {products.map((prod) => (
                <Link key={prod.id} to={`/${prod.id}`} className="mobile-sub-link" onClick={() => setIsOpen(false)}>
                  {prod.title}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/p-p-pvc-files" className="mobile-nav-link" onClick={() => setIsOpen(false)}>New Arrival</Link>
          <Link to="/job-openings" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Career</Link>
          <Link to="/partner-with-us" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Partner With Us</Link>
          <Link to="/contact-us" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Contact Us</Link>
          
          <div className="mobile-downloads">
            <p>Downloads</p>
            <a href="/Presentation_2012.pdf" download className="btn btn-outline btn-full">
              <Download size={16} /> Products Gallery PDF
            </a>
            <a href="/PP_Packaging.pdf" download className="btn btn-primary btn-full mt-1">
              <Download size={16} /> PP Packaging PDF
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
