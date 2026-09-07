import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CATEGORIES, PRODUCTS } from '../data/mockData';
import ProductCard from './ProductCard';
import { Filter, Sparkles } from 'lucide-react';

export default function CategorySidebarView() {
  const { activeCategory, setActiveCategory } = useApp();
  const [selectedSubCat, setSelectedSubCat] = useState(null);

  const currentCat = CATEGORIES.find((c) => c.id === activeCategory) || CATEGORIES[0];

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchCat = p.categoryId === currentCat.id;
    if (!matchCat) return false;
    if (selectedSubCat) {
      return p.subcategoryId === selectedSubCat;
    }
    return true;
  });

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Sparkles size={22} color="#00875A" /> Category Explorer
        </h2>
        <p style={{ color: '#64748B', fontSize: '0.9rem' }}>
          Browse full catalog filtered by subcategories & real-time stock
        </p>
      </div>

      <div className="category-view-layout">
        {/* Left Sidebar */}
        <aside className="category-sidebar">
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', marginBottom: '8px', paddingLeft: '8px' }}>
            Main Categories
          </div>
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className={`sidebar-category-item ${currentCat.id === cat.id ? 'active' : ''}`}
              onClick={() => {
                setActiveCategory(cat.id);
                setSelectedSubCat(null);
              }}
            >
              <img
                src={cat.icon}
                alt={cat.name}
                style={{ width: '22px', height: '22px', objectFit: 'contain' }}
                onError={(e) => { e.target.src = '/assets/icons/stationery.png'; }}
              />
              <span>{cat.name}</span>
            </div>
          ))}
        </aside>

        {/* Right Products Panel */}
        <main>
          {/* Subcategory Pills */}
          <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '16px', marginBottom: '16px', borderBottom: '1px solid #E2E8F0' }}>
            <button
              onClick={() => setSelectedSubCat(null)}
              style={{
                padding: '6px 14px',
                borderRadius: '9999px',
                fontSize: '0.82rem',
                fontWeight: 600,
                background: selectedSubCat === null ? '#00875A' : '#F1F5F9',
                color: selectedSubCat === null ? '#FFFFFF' : '#475569',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease'
              }}
            >
              All {currentCat.name}
            </button>
            {currentCat.subcategories.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setSelectedSubCat(sub.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  background: selectedSubCat === sub.id ? '#00875A' : '#FFFFFF',
                  color: selectedSubCat === sub.id ? '#FFFFFF' : '#475569',
                  border: `1px solid ${selectedSubCat === sub.id ? '#00875A' : '#E2E8F0'}`,
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease'
                }}
              >
                {sub.image && (
                  <img src={sub.image} alt={sub.name} style={{ width: '16px', height: '16px', borderRadius: '50%', objectFit: 'cover' }} />
                )}
                <span>{sub.name}</span>
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="products-grid">
            {filteredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 20px', background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
              <img src="/assets/images/no_products_found.png" alt="Empty" style={{ width: '140px', marginBottom: '14px' }} onError={(e) => { e.target.src = '/assets/images/cart_empty.png'; }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '6px' }}>
                New Stock Arriving Soon
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.85rem' }}>
                Check back shortly for fresh inventory in this subcategory!
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
