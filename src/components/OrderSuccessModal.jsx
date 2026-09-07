import React, { useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, Clock, MapPin, Package, Truck, ArrowRight, Home } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function OrderSuccessModal() {
  const { activeOrder, setActiveOrder, setActiveTab } = useApp();

  useEffect(() => {
    if (activeOrder) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Fallback gracefully
      }
    }
  }, [activeOrder]);

  if (!activeOrder) return null;

  return (
    <div className="modal-backdrop" onClick={() => setActiveOrder(null)}>
      <div
        className="modal-content-card"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '520px', textAlign: 'center', padding: '36px 28px' }}
      >
        {/* Celebration Icon */}
        <div style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          background: '#DCFCE7',
          color: '#16A34A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 18px'
        }}>
          <CheckCircle2 size={44} />
        </div>

        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
          Order Confirmed!
        </h3>
        <p style={{ color: '#64748B', fontSize: '0.88rem', marginBottom: '20px' }}>
          Your order <strong>{activeOrder.id}</strong> has been received by our Bettiah store.
        </p>

        {/* ETA Box */}
        <div style={{
          background: '#F0FDF4',
          border: '1.5px solid #86EFAC',
          borderRadius: '16px',
          padding: '16px',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px'
        }}>
          <img src="/assets/icons/scooter.png" alt="Scooter" style={{ height: '32px' }} onError={(e) => { e.target.style.display = 'none'; }} />
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#166534', textTransform: 'uppercase' }}>
              Estimated Delivery
            </div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#00875A' }}>
              ⚡ Arriving in {activeOrder.eta}
            </div>
          </div>
        </div>

        {/* Live Stepper */}
        <div style={{
          background: '#F8FAFC',
          borderRadius: '14px',
          padding: '18px 14px',
          marginBottom: '24px',
          border: '1px solid #E2E8F0'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
            {/* Step 1 */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#00875A', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '6px' }}>
                ✓
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#00875A' }}>Placed</span>
            </div>

            {/* Step 2 */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#00875A', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '6px' }}>
                ✓
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#00875A' }}>Packed</span>
            </div>

            {/* Step 3 */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#F59E0B', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '6px', animation: 'pulseGlow 1.5s infinite' }}>
                🛵
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#B45309' }}>On the Way</span>
            </div>

            {/* Step 4 */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#CBD5E1', color: '#64748B', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '6px' }}>
                4
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: 500, color: '#94A3B8' }}>Delivered</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            className="checkout-btn"
            style={{ flex: 1, justifyContent: 'center', height: '44px' }}
            onClick={() => {
              setActiveOrder(null);
              setActiveTab('orders');
            }}
          >
            Track in My Orders
          </button>
          <button
            onClick={() => {
              setActiveOrder(null);
              setActiveTab('home');
            }}
            style={{
              padding: '0 18px',
              borderRadius: '8px',
              border: '1.5px solid #CBD5E1',
              fontWeight: 600,
              fontSize: '0.9rem',
              color: '#475569'
            }}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}
