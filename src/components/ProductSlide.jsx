import React from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS } from '../data/mockData';
import { 
  X, 
  Star, 
  ShieldCheck, 
  Zap, 
  Heart, 
  Plus, 
  Minus, 
  Package, 
  Sparkles,
  ArrowRight,
  ShoppingBag,
  Tag
} from 'lucide-react';

export default function ProductSlide() {
  const {
    selectedProduct,
    setSelectedProduct,
    isProductSlideOpen,
    closeProductSlide,
    cartItems,
    addToCart,
    updateQuantity,
    wishlist,
    toggleWishlist
  } = useApp();

  if (!isProductSlideOpen || !selectedProduct) return null;

  const cartItem = cartItems.find((i) => i.id === selectedProduct.id);
  const isWishlisted = wishlist.includes(selectedProduct.id);

  // Compute related products matching category or brand
  let relatedProducts = PRODUCTS.filter(
    (p) => p.id !== selectedProduct.id && (p.categoryId === selectedProduct.categoryId || p.brand === selectedProduct.brand)
  );

  // Backfill if needed so we always have at least 4 suggestions
  if (relatedProducts.length < 4) {
    const extra = PRODUCTS.filter((p) => p.id !== selectedProduct.id && !relatedProducts.includes(p));
    relatedProducts = [...relatedProducts, ...extra].slice(0, 6);
  } else {
    relatedProducts = relatedProducts.slice(0, 6);
  }

  return (
    <div className="product-slide-backdrop" onClick={closeProductSlide}>
      <div className="product-slide-panel" onClick={(e) => e.stopPropagation()}>
        {/* Header Bar */}
        <div className="product-slide-header">
          <div className="product-slide-breadcrumbs">
            <span className="slide-badge-category">
              <Tag size={12} /> {selectedProduct.category}
            </span>
            <span className="slide-badge-brand">{selectedProduct.brand}</span>
          </div>
          <button className="slide-close-btn" onClick={closeProductSlide} aria-label="Close panel">
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="product-slide-body">
          {/* Main Product Hero */}
          <div className="slide-hero-image-wrap">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="slide-hero-img"
              onError={(e) => { e.target.src = '/assets/icons/stationery.png'; }}
            />
            {selectedProduct.discount && (
              <span className="slide-discount-tag">{selectedProduct.discount}</span>
            )}
          </div>

          {/* Title & Ratings */}
          <div className="slide-product-details">
            <h2 className="slide-product-title">{selectedProduct.name}</h2>
            <p className="slide-product-unit">{selectedProduct.unit}</p>

            <div className="slide-rating-row">
              <div className="slide-rating-badge">
                <Star size={13} fill="#D97706" color="#D97706" />
                <span>{selectedProduct.rating}</span>
              </div>
              <span className="slide-review-count">({selectedProduct.reviews} customer reviews)</span>
            </div>

            {/* Price Box */}
            <div className="slide-price-box">
              <div className="slide-price-main">
                <span className="slide-price-current">₹{selectedProduct.price}</span>
                <span className="slide-price-mrp">₹{selectedProduct.mrp}</span>
              </div>
              <span className="slide-save-pill">
                Save ₹{selectedProduct.mrp - selectedProduct.price}
              </span>
            </div>

            {/* Description */}
            <p className="slide-description">{selectedProduct.description}</p>

            {/* Trust Highlights */}
            <div className="slide-trust-list">
              <div className="slide-trust-item">
                <Zap size={15} color="#00875A" />
                <span>Instant 15-30 Min Delivery in West Champaran</span>
              </div>
              <div className="slide-trust-item">
                <ShieldCheck size={15} color="#8B2FC9" />
                <span>100% Original Brand Certified</span>
              </div>
              <div className="slide-trust-item">
                <Package size={15} color="#2563EB" />
                <span>Available for Bulk School & Office Orders</span>
              </div>
            </div>

            {/* Add to Cart Actions */}
            <div className="slide-action-bar">
              {cartItem ? (
                <div className="qty-stepper slide-qty-stepper">
                  <button className="qty-btn" onClick={() => updateQuantity(selectedProduct.id, -1)}>
                    <Minus size={16} />
                  </button>
                  <span className="qty-count">{cartItem.quantity}</span>
                  <button className="qty-btn" onClick={() => updateQuantity(selectedProduct.id, 1)}>
                    <Plus size={16} />
                  </button>
                </div>
              ) : (
                <button className="slide-add-cart-btn" onClick={() => addToCart(selectedProduct)}>
                  <ShoppingBag size={18} />
                  <span>Add to Cart • ₹{selectedProduct.price}</span>
                </button>
              )}

              <button
                className={`slide-wishlist-btn ${isWishlisted ? 'wishlisted' : ''}`}
                onClick={() => toggleWishlist(selectedProduct.id)}
                title="Save to Wishlist"
              >
                <Heart
                  size={20}
                  color={isWishlisted ? "#EF4444" : "#64748B"}
                  fill={isWishlisted ? "#EF4444" : "none"}
                />
              </button>
            </div>
          </div>

          {/* Related Products / Suggestions Section */}
          <div className="slide-related-section">
            <div className="slide-related-header">
              <div>
                <h3 className="slide-related-title">
                  <Sparkles size={18} color="#8B2FC9" />
                  <span>Related Products & Suggestions</span>
                </h3>
                <p className="slide-related-subtitle">Popular items in {selectedProduct.category}</p>
              </div>
            </div>

            <div className="slide-related-carousel">
              {relatedProducts.map((relItem) => {
                const isRelInCart = cartItems.some((c) => c.id === relItem.id);
                return (
                  <div
                    key={relItem.id}
                    className="related-product-card"
                    onClick={() => setSelectedProduct(relItem)}
                  >
                    <div className="related-img-wrap">
                      <img
                        src={relItem.image}
                        alt={relItem.name}
                        onError={(e) => { e.target.src = '/assets/icons/stationery.png'; }}
                      />
                      <span className="related-badge">{relItem.category}</span>
                    </div>

                    <div className="related-card-info">
                      <h4 className="related-card-title">{relItem.name}</h4>
                      <div className="related-card-footer">
                        <div className="related-card-price">
                          <span className="price-bold">₹{relItem.price}</span>
                          <span className="price-mrp">₹{relItem.mrp}</span>
                        </div>
                        <button
                          className="related-add-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(relItem);
                          }}
                        >
                          {isRelInCart ? 'Added ✓' : '+ Add'}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
