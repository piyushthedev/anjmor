import React from 'react';
import { useApp } from '../context/AppContext';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  const { setActiveTab, setActiveCategory, setIsSupportOpen } = useApp();

  return (
    <footer className="footer-wrap">
      <div className="footer-container">
        {/* Col 1 */}
        <div className="footer-col">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <img
              src="/assets/icons/anjmor_logo.png"
              alt="Anjmor"
              style={{ height: '42px', borderRadius: '8px' }}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.1 }}>Anjmor</h3>
              <span style={{ fontSize: '0.75rem', color: '#10B981', fontWeight: 600 }}>Stationery & Art Superstore</span>
            </div>
          </div>
          <p style={{ fontSize: '0.85rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '16px' }}>
            Anjmor is West Champaran's premier instant delivery destination for professional artist paints, sketch supplies, notebooks, school utilities, and executive desk decor.
          </p>
          <div style={{ fontSize: '0.82rem', color: '#CBD5E1', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={14} color="#10B981" /> +91-6207061688
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail size={14} color="#10B981" /> sales@anjmor.com
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={14} color="#10B981" /> West Champaran, Bihar, India
            </div>
          </div>
        </div>

        {/* Col 2 */}
        <div className="footer-col">
          <h4>Top Categories</h4>
          <ul>
            <li onClick={() => { setActiveCategory(4); setActiveTab('categories'); }}>Paints & Canvas</li>
            <li onClick={() => { setActiveCategory(10); setActiveTab('categories'); }}>Drawing Essentials</li>
            <li onClick={() => { setActiveCategory(3); setActiveTab('categories'); }}>Office & Desk Decor</li>
            <li onClick={() => { setActiveCategory(11); setActiveTab('categories'); }}>Journaling & Crafts</li>
            <li onClick={() => { setActiveCategory(12); setActiveTab('categories'); }}>Notebooks & Copier Paper</li>
          </ul>
        </div>

        {/* Col 3 */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li onClick={() => setActiveTab('home')}>Home Store</li>
            <li onClick={() => setActiveTab('brands')}>Partner Brands</li>
            <li onClick={() => setActiveTab('orders')}>Order Tracking</li>
            <li onClick={() => setActiveTab('wallet')}>Anjmor Cash Wallet</li>
            <li onClick={() => setIsSupportOpen(true)}>24x7 Customer Help</li>
          </ul>
        </div>

        {/* Col 4 */}
        <div className="footer-col">
          <h4>Institutional B2B</h4>
          <p style={{ fontSize: '0.84rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '14px' }}>
            Bulk supply contracts for schools, colleges, banks, coaching institutes, and corporate offices with GST tax invoice.
          </p>
          <button
            onClick={() => setIsSupportOpen(true)}
            style={{
              background: '#00875A',
              color: '#FFFFFF',
              padding: '10px 18px',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.85rem'
            }}
          >
            Request B2B Quote
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <div>
          © {new Date().getFullYear()} Anjmor. All rights reserved. Platform engineered by <strong>Riya Techno Software Pvt. Ltd.</strong>
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
          <span style={{ cursor: 'pointer' }}>Terms of Service</span>
          <span style={{ cursor: 'pointer' }}>Refund Policy</span>
        </div>
      </div>
    </footer>
  );
}
