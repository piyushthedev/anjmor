import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, MapPin, CreditCard, Banknote, QrCode, Wallet, CheckCircle, ShieldCheck } from 'lucide-react';

export default function CheckoutModal() {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    selectedPin,
    grandTotal,
    walletBalance,
    placeOrder,
    user,
    openAuthModal
  } = useApp();

  const [address, setAddress] = useState('Flat 204, Shanti Enclave, Station Road, Bettiah');
  const [paymentMethod, setPaymentMethod] = useState('UPI');
  const [isPlacing, setIsPlacing] = useState(false);

  if (!isCheckoutOpen) return null;

  const handlePay = (e) => {
    e.preventDefault();
    setIsPlacing(true);
    setTimeout(() => {
      placeOrder(paymentMethod, `${address} (${selectedPin.DisplayName})`);
      setIsPlacing(false);
    }, 900);
  };

  return (
    <div className="modal-backdrop" onClick={() => setIsCheckoutOpen(false)}>
      <div className="modal-content-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700 }}>Checkout & Delivery</h3>
          <button className="close-btn" onClick={() => setIsCheckoutOpen(false)}>
            <X size={18} />
          </button>
        </div>

        {/* Auth Account Prompt / User Details Banner */}
        {user?.isLoggedIn ? (
          <div style={{
            background: '#F8FAFC',
            border: '1px solid #E2E8F0',
            borderRadius: '12px',
            padding: '10px 14px',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.85rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontWeight: 700, color: '#0F172A' }}>Logged in as:</span>
              <span style={{ color: '#00875A', fontWeight: 600 }}>{user.name}</span>
              <span style={{ color: '#64748B', fontSize: '0.78rem' }}>({user.phone || user.email})</span>
            </div>
            <span style={{ fontSize: '0.72rem', background: '#DCFCE7', color: '#16A34A', padding: '2px 8px', borderRadius: '12px', fontWeight: 700 }}>VERIFIED</span>
          </div>
        ) : (
          <div style={{
            background: '#EFF6FF',
            border: '1px solid #BFDBFE',
            borderRadius: '12px',
            padding: '12px 14px',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '10px'
          }}>
            <div>
              <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#1E40AF' }}>Have an Anjmor account?</div>
              <div style={{ fontSize: '0.75rem', color: '#3B82F6' }}>Sign in to earn 5% wallet cashback on this order.</div>
            </div>
            <button
              type="button"
              onClick={() => openAuthModal('login')}
              style={{
                background: '#2563EB',
                color: '#FFF',
                border: 'none',
                padding: '6px 14px',
                borderRadius: '8px',
                fontSize: '0.78rem',
                fontWeight: 700,
                cursor: 'pointer',
                flexShrink: 0
              }}
            >
              Sign In Now
            </button>
          </div>
        )}

        <form onSubmit={handlePay}>
          {/* Serviceable Delivery Location Card */}
          <div style={{
            background: 'linear-gradient(135deg, #F0FDF4 0%, #E8F5E9 100%)',
            border: '1.5px solid #A7F3D0',
            borderRadius: '14px',
            padding: '14px 16px',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: '#00875A',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <MapPin size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#006644', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Delivering To
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0F172A' }}>
                  {selectedPin.DisplayName}
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                setIsCheckoutOpen(false);
                setIsPinModalOpen(true);
              }}
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#00875A',
                background: '#FFFFFF',
                border: '1px solid #00875A',
                borderRadius: '8px',
                padding: '6px 12px',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              Change Pincode
            </button>
          </div>

          {/* Delivery Address Input */}
          <div style={{ marginBottom: '22px' }}>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.84rem',
              fontWeight: 700,
              color: '#334155',
              marginBottom: '8px'
            }}>
              <span>Complete Delivery Address:</span>
              <span style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 500 }}>House No., Building & Landmark</span>
            </label>
            <textarea
              required
              rows={3}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="e.g. House No. 12, Shanti Enclave, Near Axis Bank, Station Road, Bettiah"
              style={{
                width: '100%',
                borderRadius: '10px',
                border: '1.5px solid #CBD5E1',
                padding: '12px 14px',
                fontSize: '0.9rem',
                outline: 'none',
                fontFamily: 'inherit',
                color: '#0F172A',
                lineHeight: '1.4',
                boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.03)'
              }}
            />
          </div>

          {/* Payment Method Selector */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#475569', marginBottom: '10px' }}>
              Select Payment Method:
            </label>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {/* UPI */}
              <label style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderRadius: '10px',
                border: `1.5px solid ${paymentMethod === 'UPI' ? '#00875A' : '#E2E8F0'}`,
                background: paymentMethod === 'UPI' ? '#F0FDF4' : '#FFFFFF',
                cursor: 'pointer'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'UPI'}
                    onChange={() => setPaymentMethod('UPI')}
                  />
                  <QrCode size={18} color="#00875A" />
                  <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>UPI / Google Pay / PhonePe / Paytm</span>
                </div>
                <span style={{ fontSize: '0.75rem', background: '#DCFCE7', color: '#16A34A', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>Fast</span>
              </label>

              {/* Wallet */}
              <label style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderRadius: '10px',
                border: `1.5px solid ${paymentMethod === 'Wallet' ? '#00875A' : '#E2E8F0'}`,
                background: paymentMethod === 'Wallet' ? '#F0FDF4' : '#FFFFFF',
                cursor: 'pointer'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'Wallet'}
                    onChange={() => setPaymentMethod('Wallet')}
                  />
                  <Wallet size={18} color="#B45309" />
                  <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>Anjmor Cash Wallet (Bal: ₹{walletBalance})</span>
                </div>
              </label>

              {/* COD */}
              <label style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderRadius: '10px',
                border: `1.5px solid ${paymentMethod === 'COD' ? '#00875A' : '#E2E8F0'}`,
                background: paymentMethod === 'COD' ? '#F0FDF4' : '#FFFFFF',
                cursor: 'pointer'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'COD'}
                    onChange={() => setPaymentMethod('COD')}
                  />
                  <Banknote size={18} color="#0F172A" />
                  <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>Cash on Delivery (Pay upon arrival)</span>
                </div>
              </label>
            </div>
          </div>

          {/* Place Order Button */}
          <button
            type="submit"
            className="checkout-btn"
            disabled={isPlacing}
            style={{ justifyContent: 'center', height: '48px' }}
          >
            {isPlacing ? 'Placing Order...' : `Pay & Place Order • ₹${grandTotal}`}
          </button>
        </form>
      </div>
    </div>
  );
}
