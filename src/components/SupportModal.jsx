import React from 'react';
import { useApp } from '../context/AppContext';
import { X, Phone, Mail, MessageCircle, HelpCircle, FileText, Shield } from 'lucide-react';

export default function SupportModal() {
  const { isSupportOpen, setIsSupportOpen } = useApp();

  if (!isSupportOpen) return null;

  return (
    <div className="modal-backdrop" onClick={() => setIsSupportOpen(false)}>
      <div className="modal-content-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '500px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <HelpCircle size={22} color="#00875A" /> Anjmor Customer Support
          </h3>
          <button className="close-btn" onClick={() => setIsSupportOpen(false)}>
            <X size={18} />
          </button>
        </div>

        <p style={{ fontSize: '0.86rem', color: '#64748B', marginBottom: '20px' }}>
          Need assistance with your delivery, bulk order quotation, or artist supplies recommendation? We are available 7 days a week from 8 AM - 10 PM.
        </p>

        {/* Contact Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
          {/* Phone Call */}
          <a
            href="tel:+916207061688"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              padding: '14px 16px',
              borderRadius: '12px',
              border: '1.5px solid #E2E8F0',
              background: '#F8FAFC',
              transition: 'all 0.2s ease'
            }}
          >
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#DCFCE7', color: '#16A34A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Phone size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#0F172A' }}>Call Direct Hotline</div>
              <div style={{ fontSize: '0.8rem', color: '#00875A', fontWeight: 600 }}>+91-6207061688</div>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/916207061688?text=Hello%20Anjmor%20Support%2C%20I%20need%20help%20with%20my%20order"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              padding: '14px 16px',
              borderRadius: '12px',
              border: '1.5px solid #BBF7D0',
              background: '#F0FDF4',
              transition: 'all 0.2s ease'
            }}
          >
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#22C55E', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <MessageCircle size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#0F172A' }}>WhatsApp Chat</div>
              <div style={{ fontSize: '0.8rem', color: '#16A34A', fontWeight: 600 }}>Chat with support agent now</div>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:sales@anjmor.com"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              padding: '14px 16px',
              borderRadius: '12px',
              border: '1.5px solid #E2E8F0',
              background: '#F8FAFC',
              transition: 'all 0.2s ease'
            }}
          >
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#DBEAFE', color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Mail size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#0F172A' }}>Email Support</div>
              <div style={{ fontSize: '0.8rem', color: '#2563EB', fontWeight: 600 }}>sales@anjmor.com</div>
            </div>
          </a>
        </div>

        {/* Store & Developer Info */}
        <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '16px', fontSize: '0.78rem', color: '#64748B', lineHeight: 1.5 }}>
          <div><strong>Store Location:</strong> Bettiah, West Champaran, Bihar, 845451</div>
          <div><strong>App Developed by:</strong> Riya Techno Software Pvt. Ltd.</div>
        </div>
      </div>
    </div>
  );
}
