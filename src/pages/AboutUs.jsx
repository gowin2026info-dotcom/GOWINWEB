import React from 'react';
import { Download, CheckCircle, Target, Award, Recycle } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="about-page container py-4">
      {/* Hero Header */}
      <div className="text-center mb-2">
        <h1 className="section-title center">About Go Win</h1>
        <p className="section-desc mt-1">Established in 2026, manufacturing professional PP office stationery and packaging.</p>
      </div>

      {/* History Grid */}
      <div className="grid-2 mt-2">
        <div className="about-text">
          <h2>Our History</h2>
          <p className="mt-1">
            Go Win has been a pioneer in the design and production of high-quality Polypropylene (PP) office stationery, files, folders, and customized packaging solutions. We have grown from a small manufacturing facility to a leading supplier for domestic and international B2B markets.
          </p>
          <p className="mt-1">
            Our brand is synonymous with innovation, durability, and reliability. We consistently invest in modern technology, high-output extrusion machinery, and automatic high-frequency welding to provide stationery that stands the test of time.
          </p>
          <div className="mt-2">
            <a href="/Presentation_2012.pdf" download className="btn btn-primary">
              <Download size={16} /> Download Corporate Profile
            </a>
          </div>
        </div>
        <div className="about-img-box">
          <img src="/assets/pic-1.webp" alt="Go Win Office Stationery Showcase" className="about-page-img card" style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
        </div>
      </div>

      {/* Business Philosophy Banner */}
      <div className="philosophy-banner mt-2 text-center card">
        <h3>Our Business Philosophy</h3>
        <p className="philosophy-quote">"Today's Quality is Tomorrow's Market"</p>
        <p className="philosophy-desc">
          Quality is not just a standard for us; it is a promise. Every folder, clip, sheet protector, and box we manufacture undergoes rigorous stress and temperature testing to guarantee maximum longevity and reliability.
        </p>
      </div>

      {/* Core Values */}
      <div className="values-section mt-2">
        <h2 className="text-center mb-2">Our Core Values</h2>
        <div className="grid-4">
          <div className="card text-center value-card">
            <div className="value-icon"><CheckCircle size={28} /></div>
            <h4>Honesty</h4>
            <p>We build relationships on absolute honesty and corporate integrity.</p>
          </div>
          <div className="card text-center value-card">
            <div className="value-icon"><Target size={28} /></div>
            <h4>Simplicity</h4>
            <p>Streamlined designs, efficient production, and easy-to-use solutions.</p>
          </div>
          <div className="card text-center value-card">
            <div className="value-icon"><Award size={28} /></div>
            <h4>Transparency</h4>
            <p>Clear B2B dealings, direct communication, and reliable lead times.</p>
          </div>
          <div className="card text-center value-card">
            <div className="value-icon"><Recycle size={28} /></div>
            <h4>Commitment</h4>
            <p>Dedicated to delivering the highest value to our clients and environment.</p>
          </div>
        </div>
      </div>

      {/* Environmental Values */}
      <div className="environmental-block mt-2 card">
        <div className="grid-2">
          <div className="env-icon-wrapper flex-center">
            <Recycle size={120} className="eco-large-icon" style={{ color: '#00d4b2' }} />
          </div>
          <div>
            <h3>Eco-Friendly & Sustainable</h3>
            <p className="mt-1">
              As a responsible manufacturer, we recognize the critical role we play in the fight against plastic pollution. We specialize strictly in Polypropylene (PP) rather than PVC. Unlike PVC, PP does not contain chlorine and is 100% recyclable, emitting only carbon dioxide and water vapor if incinerated.
            </p>
            <ul className="env-list mt-1">
              <li>Zero ozone-depleting materials used in manufacturing</li>
              <li>Reclaimed and recycled factory trim used in utility grade lines</li>
              <li>Lead-free, phthalate-free, non-toxic formulations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
