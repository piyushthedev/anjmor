import React, { useState } from 'react';
import { useApp } from './context/AppContext';
import { PRODUCTS, CATEGORIES } from './data/mockData';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import CategoryPills from './components/CategoryPills';
import ProductCard from './components/ProductCard';
import CategorySidebarView from './components/CategorySidebarView';
import BrandsView from './components/BrandsView';
import OrdersView from './components/OrdersView';
import WalletView from './components/WalletView';
import WishlistView from './components/WishlistView';
import ProductDetailModal from './components/ProductDetailModal';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import OrderSuccessModal from './components/OrderSuccessModal';
import SupportModal from './components/SupportModal';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import ProfileView from './components/ProfileView';
import OnboardingModal from './components/OnboardingModal';
import NotificationModal from './components/NotificationModal';
import { Sparkles, Zap, ShieldCheck, Award, ArrowRight } from 'lucide-react';

export default function App() {
  const { activeTab, setActiveTab, setActiveCategory } = useApp();
  const [homeCategoryFilter, setHomeCategoryFilter] = useState(null);

  const displayedProducts = homeCategoryFilter
    ? PRODUCTS.filter((p) => p.categoryId === homeCategoryFilter)
    : PRODUCTS;

  return (
    <div className="app-container">
      {/* Navbar */}
      <Navbar />

      {/* Main Content Body */}
      <main className="app-main-content">
        {activeTab === 'home' && (
          <>
            {/* Hero Slider */}
            <HeroBanner />

            {/* Quick Category Bar */}
            <CategoryPills
              selectedCategoryId={homeCategoryFilter}
              onSelectCategory={(id) => setHomeCategoryFilter(id)}
            />

            {/* Featured Section Header */}
            <div className="section-title-wrap">
              <div>
                <h3 className="section-title">
                  <Zap size={20} color="#00875A" fill="#00875A" />
                  {homeCategoryFilter
                    ? CATEGORIES.find((c) => c.id === homeCategoryFilter)?.name
                    : 'Instant Delivery Specials'}
                </h3>
                <p className="section-subtitle">
                  Guaranteed fast delivery in 15-30 minutes across West Champaran
                </p>
              </div>

              {homeCategoryFilter && (
                <button
                  onClick={() => {
                    setActiveCategory(homeCategoryFilter);
                    setActiveTab('categories');
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: '#00875A'
                  }}
                >
                  <span>View All in Category</span>
                  <ArrowRight size={16} />
                </button>
              )}
            </div>

            {/* Products Grid */}
            <div className="products-grid">
              {displayedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Trust Badges Banner */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              border: '1px solid #E2E8F0',
              padding: '28px 24px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '24px',
              margin: '40px 0 20px',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#DCFCE7', color: '#16A34A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Zap size={24} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>15-30 Mins Delivery</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Fastest doorstep delivery in town</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FEF3C7', color: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>100% Genuine Brands</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Direct from Camlin, Doms, Classmate</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#EFF6FF', color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Award size={24} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>B2B Wholesale Deals</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Special pricing for schools & offices</div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'categories' && <CategorySidebarView />}
        {activeTab === 'brands' && <BrandsView />}
        {activeTab === 'orders' && <OrdersView />}
        {activeTab === 'wallet' && <WalletView />}
        {activeTab === 'wishlist' && <WishlistView />}
        {activeTab === 'profile' && <ProfileView />}
      </main>

      {/* Global Modals & Drawers */}
      <ProductDetailModal />
      <CartDrawer />
      <CheckoutModal />
      <OrderSuccessModal />
      <SupportModal />
      <AuthModal />
      <OnboardingModal />
      <NotificationModal />

      {/* Footer */}
      <Footer />
    </div>
  );
}
