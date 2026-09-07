import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Plus, Minus, Trash2, ArrowRight, Tag, ShieldCheck, Zap } from 'lucide-react';

export default function CartDrawer() {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    updateQuantity,
    removeFromCart,
    itemTotal,
    totalSavings,
    deliveryFee,
    handlingFee,
    discountAmount,
    grandTotal,
    appliedCoupon,
    applyCoupon,
    setAppliedCoupon,
    setIsCheckoutOpen,
    setActiveTab
  } = useApp();

  const [couponCode, setCouponCode] = useState('');
  const [couponMessage, setCouponMessage] = useState(null);

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (!couponCode) return;
    const res = applyCoupon(couponCode);
    setCouponMessage(res);
    if (res.success) {
      setCouponCode('');
    }
  };

  return (
    <div className="drawer-backdrop" onClick={() => setIsCartOpen(false)}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="cart-drawer-header">
          <h3>
            My Cart ({cartItems.reduce((a, b) => a + b.quantity, 0)} items)
          </h3>
          <button className="close-btn" onClick={() => setIsCartOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="cart-drawer-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty-state">
              <img
                src="/assets/images/cart_empty.png"
                alt="Empty Cart"
                className="cart-empty-img"
                onError={(e) => { e.target.src = '/assets/icons/stationery.png'; }}
              />
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '6px' }}>Your cart is empty</h4>
              <p style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '20px' }}>
                Add your favorite stationery, paints, notebooks and art supplies!
              </p>
              <button
                className="checkout-btn"
                style={{ justifyContent: 'center', width: 'auto', padding: '10px 24px' }}
                onClick={() => {
                  setIsCartOpen(false);
                  setActiveTab('home');
                }}
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <>
              {/* Delivery ETA banner */}
              <div style={{
                background: '#F0FDF4',
                border: '1px solid #BBF7D0',
                borderRadius: '10px',
                padding: '10px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.82rem',
                color: '#166534',
                fontWeight: 600,
                marginBottom: '16px'
              }}>
                <Zap size={16} color="#16A34A" />
                <span>Delivering in <strong>15-30 minutes</strong> to your doorstep</span>
              </div>

              {/* Cart Items List */}
              <div style={{ marginBottom: '20px' }}>
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item-row">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-img"
                      onError={(e) => { e.target.src = '/assets/icons/stationery.png'; }}
                    />
                    <div className="cart-item-details">
                      <div className="cart-item-name">{item.name}</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748B', marginBottom: '6px' }}>{item.unit}</div>
                      <div className="cart-item-price">
                        ₹{item.price * item.quantity}
                        <span style={{ fontSize: '0.75rem', color: '#94A3B8', textDecoration: 'line-through', marginLeft: '6px' }}>
                          ₹{item.mrp * item.quantity}
                        </span>
                      </div>
                    </div>

                    <div className="qty-stepper">
                      <button className="qty-btn" onClick={() => updateQuantity(item.id, -1)}>
                        <Minus size={14} />
                      </button>
                      <span className="qty-count">{item.quantity}</span>
                      <button className="qty-btn" onClick={() => updateQuantity(item.id, 1)}>
                        <Plus size={14} />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{ color: '#94A3B8', padding: '4px' }}
                      title="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Coupon Section */}
              <div className="coupon-section">
                <Tag size={18} color="#D97706" />
                {appliedCoupon ? (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#B45309' }}>
                        '{appliedCoupon.code}' Applied
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#64748B' }}>
                        Saving ₹{appliedCoupon.discount} on this order
                      </div>
                    </div>
                    <button
                      onClick={() => setAppliedCoupon(null)}
                      style={{ color: '#EF4444', fontSize: '0.8rem', fontWeight: 600 }}
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} style={{ display: 'flex', gap: '8px', width: '100%' }}>
                    <input
                      type="text"
                      className="coupon-input"
                      placeholder="ENTER COUPON (e.g. ANJMOR50)"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <button type="submit" className="coupon-apply-btn">Apply</button>
                  </form>
                )}
              </div>
              {couponMessage && (
                <div style={{
                  fontSize: '0.78rem',
                  marginTop: '6px',
                  color: couponMessage.success ? '#16A34A' : '#EF4444',
                  fontWeight: 500
                }}>
                  {couponMessage.message}
                </div>
              )}

              {/* Bill Details */}
              <div className="bill-breakdown">
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>
                  Bill Details
                </div>
                <div className="bill-row">
                  <span>Item Total</span>
                  <span>₹{itemTotal}</span>
                </div>
                <div className="bill-row">
                  <span>Handling Fee</span>
                  <span>₹{handlingFee}</span>
                </div>
                <div className="bill-row">
                  <span>Delivery Fee</span>
                  {deliveryFee === 0 ? (
                    <span style={{ color: '#16A34A', fontWeight: 600 }}>FREE</span>
                  ) : (
                    <span>₹{deliveryFee}</span>
                  )}
                </div>
                {appliedCoupon && (
                  <div className="bill-row" style={{ color: '#16A34A' }}>
                    <span>Coupon Discount ({appliedCoupon.code})</span>
                    <span>-₹{appliedCoupon.discount}</span>
                  </div>
                )}
                <div className="bill-row total">
                  <span>To Pay</span>
                  <span>₹{grandTotal}</span>
                </div>
                {totalSavings > 0 && (
                  <div style={{ fontSize: '0.78rem', color: '#16A34A', fontWeight: 600, marginTop: '8px', textAlign: 'center', background: '#DCFCE7', padding: '6px', borderRadius: '6px' }}>
                    🎉 You are saving ₹{totalSavings + (appliedCoupon ? appliedCoupon.discount : 0)} on this order!
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Footer Checkout */}
        {cartItems.length > 0 && (
          <div className="cart-drawer-footer">
            <button
              className="checkout-btn"
              onClick={() => setIsCheckoutOpen(true)}
              id="proceed-to-checkout-btn"
            >
              <div>
                <div style={{ fontSize: '0.8rem', opacity: 0.9 }}>TOTAL</div>
                <div style={{ fontSize: '1.15rem', fontWeight: 800 }}>₹{grandTotal}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>Proceed to Checkout</span>
                <ArrowRight size={18} />
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
