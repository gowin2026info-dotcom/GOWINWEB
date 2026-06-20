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
    let title = "Go Win | Best Stationery Manufacturer in Kolkata, Howrah & Hooghly";
    let desc = "Go Win manufactures top quality, 100% recyclable PP office folders, ring binders, files, and customized packaging solutions in Kolkata, Howrah, Hooghly, and across India.";
    let keywords = "stationery manufacturer kolkata, stationery supplier howrah, office files hooghly, polypropylene files, PP folder manufacturer, office stationery supplier, customized packaging boxes, medical report files, ring binders India, eco-friendly office supplies, Hanuman Agencies, Go Win";
    let schema = null;

    // Define base schemas
    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Go Win",
      "alternateName": "Hanuman Agencies",
      "url": "https://gowinweb.com",
      "logo": "https://gowinweb.com/assets/logo.jpg",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-33-47475728",
        "contactType": "sales",
        "email": "sales@gowinweb.com",
        "areaServed": ["Kolkata", "Howrah", "Hooghly", "West Bengal", "India"],
        "availableLanguage": "en"
      }
    };

    if (pathname === "/") {
      title = "Go Win | Best Stationery Manufacturer in Kolkata, Howrah, Hooghly & India";
      desc = "Leading B2B manufacturer of 100% recyclable Polypropylene (PP) office folders, ring binders, display books, medical report files, and custom packaging. Servicing Kolkata, Howrah, Hooghly, and pan-India.";
      keywords = "stationery in kolkata, office stationery supplier howrah, stationery wholesale hooghly, PP office folders, polypropylene file manufacturer, custom packaging box supplier, ring binder wholesale, medical report files, eco-friendly office supplies, Go Win, Hanuman Agencies";
      schema = [
        orgSchema,
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Go Win",
          "url": "https://gowinweb.com/",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://gowinweb.com/{search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }
      ];
    } else if (pathname === "/about-us") {
      title = "About Go Win | Top PP Stationery Supplier in Kolkata, Howrah & Hooghly";
      desc = "Learn about Go Win's history, our quality standard 'Today's Quality is Tomorrow's Market', and our eco-friendly PP manufacturing. Proudly serving West Bengal and India.";
      keywords = "about Go Win, Hanuman Agencies history, stationery manufacturer kolkata, stationery supplier howrah, PP sheet extrusion manufacturer, quality control stationery";
      schema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "mainEntity": orgSchema
      };
    } else if (pathname === "/what-is-polypropylene") {
      title = "What is Polypropylene? | Eco-Friendly Advantages vs PVC Files & Folders";
      desc = "Discover why Polypropylene (PP) is the superior, non-toxic, and 100% recyclable material choice for office stationery and packaging over Polyvinyl Chloride (PVC).";
      keywords = "what is polypropylene, PP vs PVC folders, non-toxic plastic stationery, recyclable binder material, acid-free copy-safe folders";
    } else if (pathname === "/p-p-pvc-files") {
      title = "New Arrivals & Latest Stationery Collections | Go Win Kolkata";
      desc = "Explore our latest B2B catalog releases, featuring heavy-duty expanding case organizers, eco pastel ring binders, and fabric border sheet protectors.";
      keywords = "new stationery arrivals, pastel ring binder, expanding file with handle, sheet protector, B2B folder collection";
    } else if (pathname === "/job-openings") {
      title = "Careers at Go Win | B2B Operations & Design Job Openings";
      desc = "Build your career with Go Win. We are looking for talented professionals in sales development, quality assurance, and creative packaging design.";
      keywords = "careers Go Win, packaging design jobs, quality control hiring, corporate sales careers Delhi Kolkata";
    } else if (pathname === "/partner-with-us") {
      title = "Partner With Us | B2B Wholesale Distributors & Custom Corporate Supplies";
      desc = "Establish a wholesale or distribution partnership with Go Win. We support custom branding, OEM/ODM manufacturing, and bulk order supply chains.";
      keywords = "distribute office stationery, B2B wholesale partner, OEM folder manufacturer, corporate supplies distribution";
    } else if (pathname === "/contact-us") {
      title = "Contact Go Win | Stationery Factory, Sales & Custom Quotations";
      desc = "Contact Go Win for sales inquiries, custom manufacturing quotes, and office coordinates in Kolkata (Hanuman Agencies), Howrah, Hooghly, Delhi, and Mumbai.";
      keywords = "contact Go Win, Hanuman Agencies contact, stationery factory Howrah, Kolkata head office, bulk order inquiry";
      schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Go Win",
        "image": "https://gowinweb.com/assets/logo.jpg",
        "telephone": "+91-33-47475728",
        "email": "info@gowinweb.com",
        "areaServed": ["Kolkata", "Howrah", "Hooghly", "West Bengal", "India"],
        "address": [
          {
            "@type": "PostalAddress",
            "streetAddress": "19, Amartala Lane",
            "addressLocality": "Kolkata",
            "postalCode": "700001",
            "addressCountry": "IN"
          },
          {
            "@type": "PostalAddress",
            "streetAddress": "103, Dharmatala Road, Inside Ajmera Industries Complex, Salkia",
            "addressLocality": "Howrah",
            "postalCode": "711107",
            "addressCountry": "IN"
          }
        ]
      };
    } else if (pathname === "/site-map") {
      title = "Site Map | Go Win Directory of Products & Resources";
      desc = "Full HTML sitemap directory of all Go Win PP office files, presentation folders, customized packaging boxes, and career openings.";
      keywords = "sitemap Go Win, product directory, page index";
    } else if (pathname === "/privacy-policy") {
      title = "Privacy Policy | Go Win & Hanuman Agencies";
      desc = "Read our privacy policy outlining data collection guidelines, security standards, and communication policies for B2B requests.";
      keywords = "privacy policy Go Win, data security policy, B2B client terms";
    } else if (pathname === "/terms-conditions") {
      title = "Terms & Conditions | Go Win & Hanuman Agencies";
      desc = "View the official terms and conditions for placing custom orders, distribution contracts, and catalogs under Hanuman Agencies.";
      keywords = "terms and conditions Go Win, ordering policy, wholesale agreement";
    } else {
      // Dynamic product route
      const prodId = pathname.substring(1);
      const prod = products.find(p => p.id === prodId);
      if (prod) {
        title = `${prod.title} Manufacturer | Wholesale Custom PP B2B Catalog`;
        desc = `${prod.description} High-quality, durable, and 100% recyclable. Contact Go Win for customized branding options and bulk pricing.`;
        keywords = `${prod.title.toLowerCase()}, wholesale ${prod.title.toLowerCase()}, custom ${prod.title.toLowerCase()}, polypropylene ${prod.category.toLowerCase()}, bulk office supplies`;
        schema = {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": prod.title,
          "image": `https://gowinweb.com${prod.image}`,
          "description": prod.description,
          "category": prod.category,
          "brand": {
            "@type": "Brand",
            "name": "Go Win"
          },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "INR",
            "offerCount": "1",
            "price": "Contact for Quote",
            "seller": orgSchema
          }
        };
      }
    }

    // Apply document title
    document.title = title;

    // Helper function to create/update meta tags
    const updateMeta = (name, value, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', value);
    };

    // Update standard meta tags
    updateMeta('description', desc);
    updateMeta('keywords', keywords);
    updateMeta('robots', 'index, follow');

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const currentUrl = `https://gowinweb.com${pathname === '/' ? '' : pathname}`;
    canonical.setAttribute('href', currentUrl);

    // Update Open Graph (og:) tags
    updateMeta('og:title', title, true);
    updateMeta('og:description', desc, true);
    updateMeta('og:url', currentUrl, true);
    updateMeta('og:type', pathname === '/' ? 'website' : 'article', true);
    updateMeta('og:image', 'https://gowinweb.com/assets/pic-1.webp', true);

    // Update Twitter card tags
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', desc);
    updateMeta('twitter:url', currentUrl);
    updateMeta('twitter:image', 'https://gowinweb.com/assets/pic-1.webp');

    // Update JSON-LD Structured Data
    const schemaScript = document.getElementById('json-ld-schema');
    if (schemaScript) {
      if (schema) {
        schemaScript.textContent = JSON.stringify(schema, null, 2);
      } else {
        // Fallback to breadcrumb schema for other internal subpages
        const breadcrumbSchema = {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://gowinweb.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": title.split('|')[0].trim(),
              "item": currentUrl
            }
          ]
        };
        schemaScript.textContent = JSON.stringify(breadcrumbSchema, null, 2);
      }
    }
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
