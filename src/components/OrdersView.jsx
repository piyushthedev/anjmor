import React from 'react';
import { useApp } from '../context/AppContext';
import { Package, Clock, CheckCircle, Truck, Repeat, ArrowRight } from 'lucide-react';

export default function OrdersView() {
  const { orders, addToCart, setIsCartOpen, setActiveTab } = useApp();

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Package size={26} color="#00875A" /> My Orders ({orders.length})
        </h2>
        <p style={{ color: '#64748B', fontSize: '0.9rem' }}>
          Real-time delivery status & order history
        </p>
      </div>

      {orders.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '60px 20px',
          background: '#FFFFFF',
          borderRadius: '16px',
          border: '1px solid #E2E8F0'
        }}>
          <img
            src="/assets/images/order_empty.png"
            alt="No Orders"
            style={{ width: '160px', marginBottom: '16px' }}
            onError={(e) => { e.target.src = '/assets/images/cart_empty.png'; }}
          />
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '6px' }}>No orders yet</h3>
          <p style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '20px' }}>
            Start by adding some stationery or artist colors to your cart!
          </p>
          <button
            className="checkout-btn"
            style={{ width: 'auto', padding: '10px 24px', margin: '0 auto' }}
            onClick={() => setActiveTab('home')}
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {orders.map((ord) => (
            <div
              key={ord.id}
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid #E2E8F0',
                padding: '20px',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              {/* Header */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: '14px',
                borderBottom: '1px solid #F1F5F9',
                marginBottom: '14px'
              }}>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#0F172A' }}>
                    Order {ord.id}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#64748B' }}>
                    Placed on {ord.date}
                  </div>
                </div>

                {/* Status Badge */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: ord.status === 'Delivered' ? '#DCFCE7' : '#FEF3C7',
                  color: ord.status === 'Delivered' ? '#16A34A' : '#D97706',
                  padding: '6px 12px',
                  borderRadius: '9999px',
                  fontSize: '0.82rem',
                  fontWeight: 700
                }}>
                  {ord.status === 'Delivered' ? <CheckCircle size={14} /> : <Truck size={14} />}
                  <span>{ord.status}</span>
                  {ord.eta && <span style={{ opacity: 0.85 }}>({ord.eta})</span>}
                </div>
              </div>

              {/* Items List */}
              <div style={{ marginBottom: '16px' }}>
                {ord.items.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '0.88rem',
                      marginBottom: '6px',
                      color: '#334155'
                    }}
                  >
                    <span>{item.qty}x {item.name}</span>
                    <span style={{ fontWeight: 600 }}>₹{item.price * item.qty}</span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '12px',
                borderTop: '1px dashed #E2E8F0'
              }}>
                <div style={{ fontSize: '0.82rem', color: '#64748B' }}>
                  Total Paid: <strong style={{ color: '#0F172A', fontSize: '1rem' }}>₹{ord.total}</strong>
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={() => alert(`Invoice for ${ord.id} downloaded.`)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: '#475569'
                    }}
                  >
                    Invoice
                  </button>
                  <button
                    onClick={() => {
                      alert("Items added back to your cart!");
                      setIsCartOpen(true);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '6px 14px',
                      borderRadius: '8px',
                      background: '#00875A',
                      color: '#FFFFFF',
                      fontSize: '0.8rem',
                      fontWeight: 700
                    }}
                  >
                    <Repeat size={14} /> Repeat Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
