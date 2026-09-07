import React from 'react';
import { useApp } from '../context/AppContext';
import { X, Star, ShieldCheck, Zap, Heart, Plus, Minus, CheckCircle, Package } from 'lucide-react';

export default function ProductDetailModal() {
  const {
    selectedProduct,
    setSelectedProduct,
    cartItems,
    addToCart,
    updateQuantity,
    wishlist,
    toggleWishlist
  } = useApp();

  if (!selectedProduct) return null;

  const cartItem = cartItems.find((i) => i.id === selectedProduct.id);
  const isWishlisted = wishlist.includes(selectedProduct.id);

  return (
    <div className="modal-backdrop" onClick={() => setSelectedProduct(null)}>
      <div
        className="modal-content-card"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '680px', padding: '0' }}
      >
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 20px',
          borderBottom: '1px solid #E2E8F0'
        }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#64748B', textTransform: 'uppercase' }}>
            {selectedProduct.brand} • {selectedProduct.category}
          </span>
          <button className="close-btn" onClick={() => setSelectedProduct(null)}>
            <X size={18} />
          </button>
        </div>

        {/* Content Layout */}
        <div className="product-detail-layout">
          {/* Left Column: Image */}
          <div style={{
            background: '#F8FAFC',
            borderRadius: '16px',
            padding: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              style={{ maxHeight: '240px', maxWidth: '100%', objectFit: 'contain' }}
              onError={(e) => { e.target.src = '/assets/icons/stationery.png'; }}
            />
            <div style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              background: '#EF4444',
              color: '#FFFFFF',
              fontSize: '0.72rem',
              fontWeight: 700,
              padding: '3px 8px',
              borderRadius: '6px'
            }}>
              {selectedProduct.discount}
            </div>
          </div>

          {/* Right Column: Info */}
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px', lineHeight: 1.3 }}>
              {selectedProduct.name}
            </h3>
            <div style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '12px' }}>
              {selectedProduct.unit}
            </div>

            {/* Ratings */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2px', background: '#FEF3C7', padding: '2px 6px', borderRadius: '6px' }}>
                <Star size={12} color="#D97706" fill="#D97706" />
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#B45309' }}>{selectedProduct.rating}</span>
              </div>
              <span style={{ fontSize: '0.78rem', color: '#64748B' }}>({selectedProduct.reviews} customer reviews)</span>
            </div>

            {/* Price Box */}
            <div style={{
              background: '#F0FDF4',
              border: '1px solid #BBF7D0',
              borderRadius: '12px',
              padding: '12px 16px',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'baseline',
              gap: '10px'
            }}>
              <span style={{ fontSize: '1.6rem', fontWeight: 800, color: '#00875A' }}>
                ₹{selectedProduct.price}
              </span>
              <span style={{ fontSize: '0.95rem', color: '#94A3B8', textDecoration: 'line-through' }}>
                ₹{selectedProduct.mrp}
              </span>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#16A34A', marginLeft: 'auto' }}>
                Save ₹{selectedProduct.mrp - selectedProduct.price}
              </span>
            </div>

            {/* Description */}
            <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.5, marginBottom: '20px' }}>
              {selectedProduct.description}
            </p>

            {/* Features */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8rem', color: '#0F172A', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Zap size={14} color="#00875A" /> Instant 15-30 Min Delivery in West Champaran
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={14} color="#00875A" /> 100% Genuine Certified Product
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Package size={14} color="#00875A" /> Available for B2B Bulk Orders
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              {cartItem ? (
                <div className="qty-stepper" style={{ flex: 1, height: '44px', justifyContent: 'center' }}>
                  <button className="qty-btn" onClick={() => updateQuantity(selectedProduct.id, -1)}>
                    <Minus size={16} />
                  </button>
                  <span className="qty-count" style={{ fontSize: '1rem', minWidth: '32px' }}>
                    {cartItem.quantity}
                  </span>
                  <button className="qty-btn" onClick={() => updateQuantity(selectedProduct.id, 1)}>
                    <Plus size={16} />
                  </button>
                </div>
              ) : (
                <button
                  className="checkout-btn"
                  style={{ flex: 1, height: '44px', justifyContent: 'center' }}
                  onClick={() => addToCart(selectedProduct)}
                >
                  Add to Cart • ₹{selectedProduct.price}
                </button>
              )}

              <button
                className="wishlist-heart-btn"
                style={{ width: '44px', height: '44px' }}
                onClick={() => toggleWishlist(selectedProduct.id)}
              >
                <Heart
                  size={20}
                  color={isWishlisted ? "#EF4444" : "#64748B"}
                  fill={isWishlisted ? "#EF4444" : "none"}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
