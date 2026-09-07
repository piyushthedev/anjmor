import React from 'react';
import { useApp } from '../context/AppContext';
import {
  User,
  Share2,
  Star,
  Info,
  Lock,
  Receipt,
  Instagram,
  Facebook,
  ChevronRight,
  LogOut,
  Package,
  Wallet,
  Heart
} from 'lucide-react';

export default function ProfileView() {
  const { user, openAuthModal, logoutUser, setActiveTab, walletBalance, setIsSupportOpen } = useApp();

  return (
    <div className="profile-view-container">
      {/* Purple Gradient Hero Header */}
      <div className="profile-hero-header">
        <div className="profile-avatar-circle">
          <User size={40} color="#94A3B8" />
        </div>
        <h2 className="profile-user-name">
          {user?.isLoggedIn ? user.name : 'Your Account'}
        </h2>
        <p className="profile-user-sub">
          {user?.isLoggedIn
            ? user.phone || user.email
            : 'Log in to view your complete profile'}
        </p>

        {user?.isLoggedIn ? (
          <div className="profile-quick-stats">
            <button className="profile-stat-badge" onClick={() => setActiveTab('orders')}>
              <Package size={16} />
              <span>Orders</span>
            </button>
            <button className="profile-stat-badge" onClick={() => setActiveTab('wallet')}>
              <Wallet size={16} />
              <span>₹{walletBalance} Wallet</span>
            </button>
            <button className="profile-stat-badge" onClick={() => setActiveTab('wishlist')}>
              <Heart size={16} />
              <span>Wishlist</span>
            </button>
          </div>
        ) : (
          <button
            className="profile-continue-btn"
            onClick={() => openAuthModal('login')}
          >
            Continue
          </button>
        )}
      </div>

      {/* Main Content List */}
      <div className="profile-menu-section">
        <h3 className="profile-section-title">Other Information</h3>

        <div className="profile-menu-card">
          <button className="profile-menu-item" onClick={() => {
            if (navigator.share) {
              navigator.share({ title: 'Anjmor App', text: 'Download Anjmor for 15-min instant stationery delivery!', url: window.location.href });
            } else {
              alert('Anjmor App Link copied to clipboard!');
            }
          }}>
            <div className="profile-item-left">
              <Share2 size={20} color="#475569" />
              <span>Share the app</span>
            </div>
            <ChevronRight size={18} color="#94A3B8" />
          </button>

          <button className="profile-menu-item" onClick={() => alert('Thank you for rating Anjmor 5 Stars!')}>
            <div className="profile-item-left">
              <Star size={20} color="#475569" />
              <span>Rate us</span>
            </div>
            <ChevronRight size={18} color="#94A3B8" />
          </button>

          <button className="profile-menu-item" onClick={() => setIsSupportOpen(true)}>
            <div className="profile-item-left">
              <Info size={20} color="#475569" />
              <span>About us</span>
            </div>
            <ChevronRight size={18} color="#94A3B8" />
          </button>

          <button className="profile-menu-item" onClick={() => window.open('#privacy', '_self')}>
            <div className="profile-item-left">
              <Lock size={20} color="#475569" />
              <span>Privacy policy</span>
            </div>
            <ChevronRight size={18} color="#94A3B8" />
          </button>

          <button className="profile-menu-item" onClick={() => window.open('#refund', '_self')}>
            <div className="profile-item-left">
              <Receipt size={20} color="#475569" />
              <span>Refund policy</span>
            </div>
            <ChevronRight size={18} color="#94A3B8" />
          </button>

          <button className="profile-menu-item" onClick={() => window.open('https://instagram.com', '_blank')}>
            <div className="profile-item-left">
              <Instagram size={20} color="#475569" />
              <span>Follow us on Instagram</span>
            </div>
            <ChevronRight size={18} color="#94A3B8" />
          </button>

          <button className="profile-menu-item" onClick={() => window.open('https://facebook.com', '_blank')}>
            <div className="profile-item-left">
              <Facebook size={20} color="#475569" />
              <span>Follow us on Facebook</span>
            </div>
            <ChevronRight size={18} color="#94A3B8" />
          </button>

          {user?.isLoggedIn && (
            <button className="profile-menu-item danger" onClick={() => logoutUser()}>
              <div className="profile-item-left">
                <LogOut size={20} color="#EF4444" />
                <span style={{ color: '#EF4444' }}>Sign Out</span>
              </div>
              <ChevronRight size={18} color="#EF4444" />
            </button>
          )}
        </div>
      </div>

      <div className="profile-footer-credit">
        <span>Made with ❤️ by Anjmor</span>
      </div>
    </div>
  );
}
