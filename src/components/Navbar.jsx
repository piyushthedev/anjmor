import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS, DELIVERY_PINCODES } from '../data/mockData';
import { 
  MapPin, 
  Search, 
  ShoppingBag, 
  Heart, 
  Wallet, 
  HelpCircle, 
  ChevronDown, 
  X,
  Clock,
  Menu,
  Home,
  Grid,
  Award,
  Package,
  User,
  LogIn,
  LogOut,
  UserCheck
} from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const {
    selectedPin,
    setSelectedPin,
    cartCount,
    grandTotal,
    setIsCartOpen,
    wishlist,
    walletBalance,
    activeTab,
    setActiveTab,
    searchQuery,
    setSearchQuery,
    setSelectedProduct,
    isPinModalOpen,
    setIsPinModalOpen,
    setIsSupportOpen,
    user,
    openAuthModal,
    logoutUser
  } = useApp();

  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Search filter
  const searchResults = searchQuery.trim()
    ? PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <header className="navbar-wrapper">
      {/* Top Notice */}
      <div className="top-notice-bar">
        <div className="top-notice-content">
          <img 
            src="/assets/icons/scooter.png" 
            alt="Delivery" 
            className="scooter-icon-anim" 
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <span>⚡ <strong>Superfast 15-30 Mins Delivery</strong> in West Champaran, Bihar | Free Delivery over ₹199</span>
        </div>
        <button 
          onClick={() => setIsSupportOpen(true)}
          style={{ color: '#F59E0B', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}
        >
          <HelpCircle size={14} /> Help & Support
        </button>
      </div>

      {/* Main Navbar */}
      <div className="navbar-container">
        {/* Hamburger button for mobile */}
        <button className="mobile-hamburger-btn" onClick={() => setIsMobileMenuOpen(true)}>
          <Menu size={24} />
        </button>
        {/* Brand */}
        <div 
          className="nav-brand" 
          onClick={() => { setActiveTab('home'); setSearchQuery(''); }}
          style={{ cursor: 'pointer' }}
        >
          <img 
            src="/assets/icons/anjmor_logo.png" 
            alt="Anjmor Logo" 
            className="brand-logo-img"
            onError={(e) => { e.target.src = '/assets/icons/stationery.png'; }}
          />
          <div className="brand-info">
            <h1>Anjmor</h1>
            <span className="brand-tagline">Stationery & Art Store</span>
          </div>
        </div>

        {/* Location / Pincode Selector */}
        <div 
          className="location-selector"
          onClick={() => setIsPinModalOpen(true)}
          title="Change Delivery Pincode"
        >
          <MapPin size={20} color="#00875A" />
          <div className="location-details">
            <span className="location-title">Delivery To</span>
            <span className="location-name">{selectedPin.DisplayName}</span>
          </div>
          <ChevronDown size={14} color="#64748B" />
        </div>

        {/* Search Bar */}
        <div className="search-wrapper">
          <div className="search-input-box">
            <Search size={18} color="#94A3B8" />
            <input
              type="text"
              placeholder="Search pens, paints, sketchbooks, office decor..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} style={{ color: '#94A3B8' }}>
                <X size={16} />
              </button>
            )}
          </div>

          {/* Search Dropdown */}
          {isSearchFocused && searchQuery.trim() && (
            <div className="search-dropdown">
              <div style={{ padding: '4px 8px 8px', fontSize: '0.75rem', fontWeight: 600, color: '#64748B' }}>
                Found {searchResults.length} products
              </div>
              {searchResults.length > 0 ? (
                searchResults.map((product) => (
                  <div
                    key={product.id}
                    className="search-result-item"
                    onClick={() => {
                      setSelectedProduct(product);
                      setSearchQuery('');
                    }}
                  >
                    <img src={product.image} alt={product.name} className="search-result-img" />
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.86rem' }}>{product.name}</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748B' }}>
                        ₹{product.price} <span style={{ textDecoration: 'line-through' }}>₹{product.mrp}</span> • {product.category}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div style={{ padding: '16px', textAlign: 'center', color: '#64748B', fontSize: '0.85rem' }}>
                  No products found for "{searchQuery}".
                </div>
              )}
            </div>
          )}
        </div>

        {/* Action Buttons */}
          {/* Mobile nav actions are hidden via CSS, but we keep them here for the overlay */}
          {isMobileMenuOpen && (
            <div className="mobile-menu-overlay" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="mobile-menu" onClick={e => e.stopPropagation()}>
                <button className="close-mobile-menu" onClick={() => setIsMobileMenuOpen(false)} style={{ background: 'none', border: 'none' }}>
                  <X size={24} />
                </button>
                {/* Replicate nav actions */}
                <button className={`nav-btn ${activeTab === 'categories' ? 'active' : ''}`} onClick={() => { setActiveTab('categories'); setIsMobileMenuOpen(false); }}>Categories</button>
                <button className={`nav-btn ${activeTab === 'brands' ? 'active' : ''}`} onClick={() => { setActiveTab('brands'); setIsMobileMenuOpen(false); }}>Brands</button>
                <button className={`nav-btn ${activeTab === 'orders' ? 'active' : ''}`} onClick={() => { setActiveTab('orders'); setIsMobileMenuOpen(false); }}>My Orders</button>
                <button className="wallet-badge-btn" onClick={() => { setActiveTab('wallet'); setIsMobileMenuOpen(false); }} title="Anjmor Cash Wallet">
                  <Wallet size={16} />
                  <span>₹{walletBalance}</span>
                </button>

                {/* Mobile Auth Button */}
                {user?.isLoggedIn ? (
                  <button className="nav-btn" onClick={() => { logoutUser(); setIsMobileMenuOpen(false); }}>
                    <LogOut size={18} color="#EF4444" />
                    <span>Sign Out ({user.name.split(' ')[0]})</span>
                  </button>
                ) : (
                  <button className="nav-btn auth-nav-btn" onClick={() => { openAuthModal('login'); setIsMobileMenuOpen(false); }}>
                    <LogIn size={18} color="#00875A" />
                    <span>Sign In / Register</span>
                  </button>
                )}

                <button className="nav-btn" onClick={() => { setActiveTab('wishlist'); setIsMobileMenuOpen(false); }} title="Wishlist" style={{ position: 'relative' }}>
                  <Heart size={19} color={wishlist.length > 0 ? '#EF4444' : '#64748B'} fill={wishlist.length > 0 ? '#EF4444' : 'none'} />
                  {wishlist.length > 0 && (
                    <span style={{
                      position: 'absolute',
                      top: '2px',
                      right: '2px',
                      background: '#EF4444',
                      color: '#fff',
                      borderRadius: '50%',
                      fontSize: '0.68rem',
                      width: '16px',
                      height: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold'
                    }}>{wishlist.length}</span>
                  )}
                </button>
                <button className="cart-btn-primary" onClick={() => { setIsCartOpen(true); setIsMobileMenuOpen(false); }} id="cart-main-button">
                  <ShoppingBag size={18} />
                  <span>Cart</span>
                  {cartCount > 0 && (
                    <span className="cart-count-bubble">{cartCount}</span>
                  )}
                </button>
              </div>
            </div>
          )}
          <div className="nav-actions">
            {/* Categories Tab */}
            <button
              className={`nav-btn ${activeTab === 'categories' ? 'active' : ''}`}
              onClick={() => setActiveTab('categories')}
            >
              Categories
            </button>

            {/* Brands Tab */}
            <button
              className={`nav-btn ${activeTab === 'brands' ? 'active' : ''}`}
              onClick={() => setActiveTab('brands')}
            >
              Brands
            </button>

            {/* Orders Tab */}
            <button
              className={`nav-btn ${activeTab === 'orders' ? 'active' : ''}`}
              onClick={() => setActiveTab('orders')}
            >
              My Orders
            </button>

            {/* Wallet */}
            <button
              className="wallet-badge-btn"
              onClick={() => setActiveTab('wallet')}
              title="Anjmor Cash Wallet"
            >
              <Wallet size={16} />
              <span>₹{walletBalance}</span>
            </button>

            {/* User Profile / Auth Button */}
            {user?.isLoggedIn ? (
              <div className="user-dropdown-container" style={{ position: 'relative' }}>
                <button
                  className="user-profile-btn"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                >
                  <UserCheck size={18} color="#00875A" />
                  <span>{user.name.split(' ')[0]}</span>
                  <ChevronDown size={14} color="#64748B" />
                </button>

                {isUserMenuOpen && (
                  <div className="user-dropdown-menu" onClick={() => setIsUserMenuOpen(false)}>
                    <div className="user-dropdown-header">
                      <div className="user-dropdown-name">{user.name}</div>
                      <div className="user-dropdown-sub">{user.email || user.phone}</div>
                    </div>
                    <button className="user-dropdown-item" onClick={() => setActiveTab('orders')}>
                      <Package size={16} />
                      <span>My Orders</span>
                    </button>
                    <button className="user-dropdown-item" onClick={() => setActiveTab('wallet')}>
                      <Wallet size={16} />
                      <span>Cash Wallet (₹{walletBalance})</span>
                    </button>
                    <button className="user-dropdown-item" onClick={() => setActiveTab('wishlist')}>
                      <Heart size={16} />
                      <span>My Wishlist</span>
                    </button>
                    <div className="user-dropdown-divider"></div>
                    <button className="user-dropdown-item danger" onClick={() => logoutUser()}>
                      <LogOut size={16} />
                      <span>Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                className="nav-btn auth-nav-btn"
                onClick={() => openAuthModal('login')}
              >
                <LogIn size={18} color="#00875A" />
                <span>Sign In</span>
              </button>
            )}

            {/* Wishlist */}
            <button
              className="nav-btn"
              onClick={() => setActiveTab('wishlist')}
              title="Wishlist"
              style={{ position: 'relative' }}
            >
              <Heart size={19} color={wishlist.length > 0 ? '#EF4444' : '#64748B'} fill={wishlist.length > 0 ? '#EF4444' : 'none'} />
              {wishlist.length > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '2px',
                  right: '2px',
                  background: '#EF4444',
                  color: '#fff',
                  borderRadius: '50%',
                  fontSize: '0.68rem',
                  width: '16px',
                  height: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold'
                }}>{wishlist.length}</span>
              )}
            </button>

            {/* Cart Button */}
            <button
              className="cart-btn-primary"
              onClick={() => setIsCartOpen(true)}
              id="cart-main-button"
            >
              <ShoppingBag size={18} />
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="cart-count-bubble">{cartCount}</span>
              )}
            </button>
          </div>
      </div>

      {/* Mobile Bottom Navigation Bar matching official screenshot */}
      <nav className="mobile-bottom-nav">
        <button
          className={`mobile-nav-item ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => setActiveTab('home')}
        >
          <Home size={20} />
          <span>Home</span>
        </button>

        <button
          className={`mobile-nav-item ${activeTab === 'categories' ? 'active' : ''}`}
          onClick={() => setActiveTab('categories')}
        >
          <Grid size={20} />
          <span>Categories</span>
        </button>

        {/* Center Elevated Floating Cart Button */}
        <button
          className="mobile-center-cart-btn"
          onClick={() => setIsCartOpen(true)}
          aria-label="Shopping Cart"
        >
          <div className="mobile-cart-circle">
            <ShoppingBag size={22} color="#FFFFFF" />
            {cartCount > 0 && (
              <span className="mobile-cart-count">{cartCount}</span>
            )}
          </div>
        </button>

        <button
          className={`mobile-nav-item ${activeTab === 'orders' ? 'active' : ''}`}
          onClick={() => setActiveTab('orders')}
        >
          <Package size={20} />
          <span>Orders</span>
        </button>

        <button
          className={`mobile-nav-item ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          <User size={20} />
          <span>Profile</span>
        </button>
      </nav>


      {/* Pincode Selection Modal */}
      {isPinModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsPinModalOpen(false)}>
          <div className="modal-content-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '460px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', paddingBottom: '12px', borderBottom: '1px solid #E2E8F0' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={20} color="#00875A" /> Select Delivery Location
              </h3>
              <button onClick={() => setIsPinModalOpen(false)} className="close-btn"><X size={18} /></button>
            </div>
            <p style={{ fontSize: '0.84rem', color: '#64748B', marginBottom: '18px', lineHeight: '1.4' }}>
              We deliver instant 15-30 minute stationery & art orders across these serviceable locations in West Champaran, Bihar:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {DELIVERY_PINCODES.map((pin) => {
                const isSelected = selectedPin.PinId === pin.PinId;
                return (
                  <div
                    key={pin.PinId}
                    onClick={() => {
                      setSelectedPin(pin);
                      setIsPinModalOpen(false);
                    }}
                    style={{
                      padding: '14px 16px',
                      borderRadius: '12px',
                      border: `1.5px solid ${isSelected ? '#00875A' : '#E2E8F0'}`,
                      background: isSelected ? '#F0FDF4' : '#FFFFFF',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.2s ease',
                      boxShadow: isSelected ? '0 4px 12px rgba(0, 135, 90, 0.12)' : 'none'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        background: isSelected ? '#00875A' : '#F1F5F9',
                        color: isSelected ? '#FFFFFF' : '#64748B',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <MapPin size={20} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0F172A', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span>{pin.DisplayName}</span>
                          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#00875A', background: '#DCFCE7', padding: '1px 6px', borderRadius: '4px' }}>
                            {pin.Pincode}
                          </span>
                        </div>
                        <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Clock size={12} color="#00875A" /> Instant 15-30 Mins Delivery
                        </div>
                      </div>
                    </div>

                    {isSelected ? (
                      <span style={{ fontSize: '0.78rem', background: '#00875A', color: '#fff', padding: '4px 10px', borderRadius: '6px', fontWeight: 700 }}>
                        Selected ✓
                      </span>
                    ) : (
                      <span style={{ fontSize: '0.78rem', color: '#00875A', fontWeight: 700 }}>
                        Select
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
