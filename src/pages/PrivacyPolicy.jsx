import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ChevronRight } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="privacy-page container py-4">
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <Link to="/">Home</Link>
        <ChevronRight size={14} />
        <span>Privacy Policy</span>
      </div>

      <div className="text-center mb-2">
        <div className="flex-center" style={{ gap: '0.5rem', color: 'var(--primary)' }}>
          <ShieldCheck size={40} />
        </div>
        <h1 className="section-title center">Privacy Policy</h1>
        <p className="section-desc mt-1">Last Updated: June 13, 2026</p>
      </div>

      <div className="card mt-2">
        <p>
          At <strong>Go Win</strong>, a brand owned and operated under <strong>Hanuman Agencies</strong>, we respect your privacy and are committed to protecting the personal data you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>gowinweb.com</strong> and use our B2B inquiry forms.
        </p>

        <h3 className="mt-2">1. Information We Collect</h3>
        <p className="mt-1">
          We collect information that you voluntarily provide to us when you fill out B2B inquiry forms, newsletter sign-ups, partnership requests, or job applications. This may include:
        </p>
        <ul className="mt-1" style={{ paddingLeft: '1.5rem' }}>
          <li>Contact details (Name, Email address, Phone number)</li>
          <li>Business details (Company name, distribution setup, geographic location)</li>
          <li>Job application info (Resume/CV files, cover letter details)</li>
        </ul>

        <h3 className="mt-2">2. How We Use Your Information</h3>
        <p className="mt-1">
          We use the collected information under the authority of Hanuman Agencies to:
        </p>
        <ul className="mt-1" style={{ paddingLeft: '1.5rem' }}>
          <li>Respond to B2B product inquiries and provide custom price quotations.</li>
          <li>Process applications for our distribution and partnership programs.</li>
          <li>Process job applications for listed career openings.</li>
          <li>Improve our website performance, layout, and B2B catalogue experience.</li>
        </ul>

        <h3 className="mt-2">3. Data Sharing and Protection</h3>
        <p className="mt-1">
          We do not sell, trade, or lease your personal information to third parties. We employ high-standard physical, electronic, and administrative safeguards to protect your personal details against unauthorized access, theft, or misuse. All form submissions are handled securely under Hanuman Agencies' internal IT guidelines.
        </p>

        <h3 className="mt-2">4. Cookies and Web Analytics</h3>
        <p className="mt-1">
          Our website may use cookies to improve user experience, monitor site usage patterns, and optimize layout responsiveness. You can choose to disable cookies in your web browser settings, although this might affect some interactive site features.
        </p>

        <h3 className="mt-2">5. Contact Information</h3>
        <p className="mt-1">
          If you have questions or concerns regarding Hanuman Agencies' privacy management or this policy, please reach out to us at:
        </p>
        <p className="mt-1 font-semibold">
          Hanuman Agencies (Go Win Brand)<br />
          Administrative Office: 19, Amartala Lane, Kolkata - 700001<br />
          Email: info@gowinweb.com | Phone: +91 -33 47475728
        </p>
      </div>
    </div>
  );
}
