import React from 'react';
import { useApp } from '../context/AppContext';
import { Heart, Plus, Minus, Zap, Star } from 'lucide-react';

export default function ProductCard({ product }) {
  const {
    cartItems,
    addToCart,
    updateQuantity,
    wishlist,
    toggleWishlist,
    setSelectedProduct
  } = useApp();

  const cartItem = cartItems.find((i) => i.id === product.id);
  const isWishlisted = wishlist.includes(product.id);

  return (
    <div className="product-card">
      {/* Top Badges */}
      <div className="product-card-badge-row">
        <span className="discount-badge">{product.discount}</span>
        <button
          className="wishlist-heart-btn"
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            size={16}
            color={isWishlisted ? "#EF4444" : "#94A3B8"}
            fill={isWishlisted ? "#EF4444" : "none"}
          />
        </button>
      </div>

      {/* Image Thumbnail */}
      <div className="product-img-wrap" onClick={() => setSelectedProduct(product)}>
        <img
          src={product.image}
          alt={product.name}
          className="product-main-img"
          loading="lazy"
          onError={(e) => {
            e.target.src = '/assets/icons/stationery.png';
          }}
        />
        <div className="eta-pill">
          <Zap size={12} color="#00875A" fill="#00875A" />
          <span>15 mins</span>
        </div>
      </div>

      {/* Body */}
      <div className="product-card-body">
        <div className="product-brand">{product.brand}</div>
        <h4 className="product-title" onClick={() => setSelectedProduct(product)} title={product.name}>
          {product.name}
        </h4>
        <div className="product-unit">{product.unit}</div>

        {/* Ratings preview */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px', fontSize: '0.75rem', color: '#64748B' }}>
          <Star size={12} color="#F59E0B" fill="#F59E0B" />
          <span style={{ fontWeight: 600, color: '#0F172A' }}>{product.rating}</span>
          <span>({product.reviews})</span>
        </div>

        {/* Price & Action */}
        <div className="product-price-action-row">
          <div className="price-block">
            <span className="current-price">₹{product.price}</span>
            <span className="mrp-price">₹{product.mrp}</span>
          </div>

          {cartItem ? (
            <div className="qty-stepper">
              <button
                className="qty-btn"
                onClick={() => updateQuantity(product.id, -1)}
                title="Decrease quantity"
              >
                <Minus size={14} />
              </button>
              <span className="qty-count">{cartItem.quantity}</span>
              <button
                className="qty-btn"
                onClick={() => updateQuantity(product.id, 1)}
                title="Increase quantity"
              >
                <Plus size={14} />
              </button>
            </div>
          ) : (
            <button
              className="add-btn"
              onClick={() => addToCart(product)}
              id={`add-product-${product.id}`}
            >
              + ADD
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
