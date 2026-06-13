import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ChevronRight } from 'lucide-react';

export default function TermsConditions() {
  return (
    <div className="terms-page container py-4">
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <Link to="/">Home</Link>
        <ChevronRight size={14} />
        <span>Terms & Conditions</span>
      </div>

      <div className="text-center mb-2">
        <div className="flex-center" style={{ gap: '0.5rem', color: 'var(--primary)' }}>
          <FileText size={40} />
        </div>
        <h1 className="section-title center">Terms & Conditions</h1>
        <p className="section-desc mt-1">Last Updated: June 13, 2026</p>
      </div>

      <div className="card mt-2">
        <p>
          Welcome to the website of <strong>Go Win</strong>, a commercial brand of <strong>Hanuman Agencies</strong>. By accessing or using <strong>gowinweb.com</strong>, you agree to comply with and be bound by the following terms and conditions of use. If you disagree with any part of these terms, please do not access or use our website.
        </p>

        <h3 className="mt-2">1. Intellectual Property Rights</h3>
        <p className="mt-1">
          All content, trade names, graphics, logos, images, product specifications, and files displayed on this website are the intellectual property of Hanuman Agencies and the Go Win brand, protected by copyright, trademark, and other proprietary laws. You may download and print pages or catalog PDFs solely for non-commercial B2B review or ordering purposes.
        </p>

        <h3 className="mt-2">2. Product Catalogs and Accuracy</h3>
        <p className="mt-1">
          Go Win and Hanuman Agencies make every effort to ensure that product specifications, dimensions, material types (such as Polypropylene guidelines), and colors in our online catalog are accurate and up-to-date. However, we do not warrant that product descriptions or other site content are entirely error-free, complete, or permanent. Specifications are subject to change without prior notice.
        </p>

        <h3 className="mt-2">3. B2B Inquiries and Custom Orders</h3>
        <p className="mt-1">
          Submitting an inquiry through our quick B2B forms, partnership applications, or contact pages does not constitute a binding sales agreement or contract. All commercial orders, wholesale prices, custom silk-screen printings, packaging designs, and shipping schedules are subject to separate formal agreements signed directly under Hanuman Agencies' business policies.
        </p>

        <h3 className="mt-2">4. Prohibited Uses</h3>
        <p className="mt-1">
          You agree not to use the website in any way that causes or may cause damage to the site or impairment of its accessibility. You must not use our forms or systems to transmit spam, viruses, or host malicious scripts.
        </p>

        <h3 className="mt-2">5. Limitation of Liability</h3>
        <p className="mt-1">
          In no event shall Hanuman Agencies, the Go Win brand, its directors, or employees be liable for any direct, indirect, incidental, or consequential damages arising out of the use or inability to use this website or its downloadable assets.
        </p>

        <h3 className="mt-2">6. Governing Law</h3>
        <p className="mt-1">
          These terms and conditions are governed by and construed in accordance with the laws of India, and any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts of Kolkata, India.
        </p>

        <h3 className="mt-2">7. Contact Details</h3>
        <p className="mt-1">
          For any questions concerning these Terms & Conditions, please contact our legal desk:
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
