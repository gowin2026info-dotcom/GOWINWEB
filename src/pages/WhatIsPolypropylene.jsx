import React from 'react';
import { HelpCircle, ChevronRight, Recycle, Flame, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhatIsPolypropylene() {
  return (
    <div className="pp-page container py-4">
      {/* Page Header */}
      <div className="breadcrumbs">
        <Link to="/">Home</Link>
        <ChevronRight size={14} />
        <span>What is Polypropylene?</span>
      </div>

      <div className="text-center mb-2">
        <h1 className="section-title center">What is Polypropylene (P.P.)?</h1>
        <p className="section-desc mt-1">Discover why Polypropylene is the superior choice for modern office stationery and packaging.</p>
      </div>

      {/* Main Info Blocks */}
      <div className="grid-2 mt-2">
        <div className="card">
          <h3 className="flex-center" style={{ gap: '0.5rem', justifyContent: 'flex-start' }}>
            <Info size={24} style={{ color: 'var(--secondary)' }} />
            The Chemistry of PP
          </h3>
          <p className="mt-1">
            Polypropylene (PP) is a thermoplastic polymer produced by the addition polymerization of propylene. It is a highly stable plastic that is semi-rigid, lightweight, and incredibly resistant to chemical solvents, acids, and fatigue.
          </p>
          <p className="mt-1">
            Unlike PVC (Polyvinyl Chloride), which contains chlorine and requires heavy chemical plasticizers (like phthalates) to make it flexible, PP is naturally flexible and stable. This means it doesn't leach toxic chemicals over time.
          </p>
        </div>

        <div className="card">
          <h3 className="flex-center" style={{ gap: '0.5rem', justifyContent: 'flex-start' }}>
            <Recycle size={24} style={{ color: 'var(--secondary)' }} />
            Environmental Advantages
          </h3>
          <p className="mt-1">
            PP is widely regarded as one of the most eco-friendly plastics. Its low melting point means it requires less energy to manufacture and recycle.
          </p>
          <ul className="mt-1" style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><strong>100% Recyclable:</strong> Can be melted and extruded into new sheets repeatedly.</li>
            <li><strong>Non-Toxic:</strong> Free of heavy metals, phthalates, and chlorine.</li>
            <li><strong>Clean Incineration:</strong> Burns to release only water vapor and CO2.</li>
          </ul>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="comparison-section mt-2">
        <h2 className="text-center mb-2">Comparison: Polypropylene (PP) vs. PVC</h2>
        <div className="table-responsive">
          <table className="specs-table">
            <thead>
              <tr>
                <th>Property</th>
                <th>Polypropylene (PP)</th>
                <th>Polyvinyl Chloride (PVC)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Toxicity</strong></td>
                <td>Non-toxic, safe for food contact & kids</td>
                <td>Contains chlorine and plasticizers</td>
              </tr>
              <tr>
                <td><strong>Recyclability</strong></td>
                <td>Highly recyclable (resin code #5)</td>
                <td>Extremely difficult to recycle</td>
              </tr>
              <tr>
                <td><strong>Durability</strong></td>
                <td>High fatigue resistance, won't crack or tear easily</td>
                <td>Can become brittle and crack with age</td>
              </tr>
              <tr>
                <td><strong>Environmental Impact</strong></td>
                <td>Clean production, carbon/hydrogen structure</td>
                <td>Releases dioxins during production and burning</td>
              </tr>
              <tr>
                <td><strong>Temperature Tolerance</strong></td>
                <td>High (up to 120°C / 248°F)</td>
                <td>Low (softens or cracks in extreme weather)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Why Choose Go Win Banner */}
      <div className="eco-banner mt-2 card text-center">
        <h3>Go Win's Sustainable Manufacturing</h3>
        <p className="mt-1">
          By utilizing advanced PP sheets in all our files and folders, we ensure our clients receive stationery that is water-resistant, archively safe (acid-free, copy-safe), and environmentally responsible. We do not use PVC in our primary sheet lines, keeping our commitment to the planet intact.
        </p>
        <div className="mt-2">
          <Link to="/contact-us" className="btn btn-secondary">
            Inquire About Custom Orders
          </Link>
        </div>
      </div>
    </div>
  );
}
