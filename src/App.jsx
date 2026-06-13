import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import WhatIsPolypropylene from './pages/WhatIsPolypropylene';
import ProductPage from './pages/ProductPage';
import NewArrivals from './pages/NewArrivals';
import Career from './pages/Career';
import PartnerWithUs from './pages/PartnerWithUs';
import ContactUs from './pages/ContactUs';
import SiteMap from './pages/SiteMap';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';

import { products } from './data/products';

// Helper component to restore scroll position and update SEO tags on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Dynamic SEO mapping
    let title = "Go Win | Premium Polypropylene Stationery & Packaging";
    let desc = "Go Win manufactures top quality, 100% recyclable PP office folders, ring binders, files, and customized packaging solutions since 2026.";

    if (pathname === "/about-us") {
      title = "About Go Win | Our History & Philosophy";
      desc = "Learn about Go Win's company history, our quality motto 'Today's Quality is Tomorrow's Market', and our environmental protection values.";
    } else if (pathname === "/what-is-polypropylene") {
      title = "What is Polypropylene? | Eco-Friendly Stationery";
      desc = "Learn about the chemistry and ecological advantages of Polypropylene (PP) over PVC files and folders.";
    } else if (pathname === "/p-p-pvc-files") {
      title = "New Arrivals | Go Win Stationery";
      desc = "Discover the latest designs, eco pastel ring binders, and expanding document bags from Go Win.";
    } else if (pathname === "/job-openings") {
      title = "Careers at Go Win | Job Openings";
      desc = "Join our team in sales, quality control, or creative packaging design. Apply today!";
    } else if (pathname === "/partner-with-us") {
      title = "Partner With Us | B2B Wholesale & Distribution";
      desc = "Apply to become an authorized distributor of Go Win products or collaborate on custom corporate supplies.";
    } else if (pathname === "/contact-us") {
      title = "Contact Go Win | Sales & Offices";
      desc = "Get in touch with our Delhi corporate office, wholesale sales desk, or request custom manufacturing quotes.";
    } else if (pathname === "/site-map") {
      title = "Site Map | Go Win";
      desc = "Navigate all pages, custom files, folders, and resources on the Go Win B2B website.";
    } else if (pathname === "/privacy-policy") {
      title = "Privacy Policy | Go Win";
      desc = "Read Go Win's Privacy Policy regarding data protection, B2B forms, and cookie usage under Hanuman Agencies.";
    } else if (pathname === "/terms-conditions") {
      title = "Terms & Conditions | Go Win";
      desc = "Review Go Win's Terms & Conditions covering intellectual property, B2B catalogue pricing, and governing laws under Hanuman Agencies.";
    } else {
      // Check for dynamic product route
      const prodId = pathname.substring(1);
      const prod = products.find(p => p.id === prodId);
      if (prod) {
        title = `${prod.title} | Go Win Product Catalog`;
        desc = prod.description;
      }
    }

    document.title = title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', desc);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/what-is-polypropylene" element={<WhatIsPolypropylene />} />
          <Route path="/p-p-pvc-files" element={<NewArrivals />} />
          <Route path="/job-openings" element={<Career />} />
          <Route path="/partner-with-us" element={<PartnerWithUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/site-map" element={<SiteMap />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          
          {/* Dynamic route matching for all 17 product pages */}
          <Route path="/:productId" element={<ProductPage />} />
          
          {/* 404 Route handling */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
