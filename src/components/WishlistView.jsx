import React from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS } from '../data/mockData';
import ProductCard from './ProductCard';
import { Heart } from 'lucide-react';

export default function WishlistView() {
  const { wishlist, setActiveTab } = useApp();

  const wishlistedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Heart size={26} color="#EF4444" fill="#EF4444" /> My Wishlist ({wishlistedProducts.length})
        </h2>
        <p style={{ color: '#64748B', fontSize: '0.9rem' }}>
          Saved items you love and plan to order
        </p>
      </div>

      {wishlistedProducts.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '60px 20px',
          background: '#FFFFFF',
          borderRadius: '16px',
          border: '1px solid #E2E8F0'
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: '#FEE2E2',
            color: '#EF4444',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px'
          }}>
            <Heart size={32} />
          </div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '6px' }}>Your wishlist is empty</h3>
          <p style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '20px' }}>
            Click the heart icon on any product to save it here!
          </p>
          <button
            className="checkout-btn"
            style={{ width: 'auto', padding: '10px 24px', margin: '0 auto' }}
            onClick={() => setActiveTab('home')}
          >
            Explore Catalog
          </button>
        </div>
      ) : (
        <div className="products-grid">
          {wishlistedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
