import React, { useState } from 'react';
import { BRANDS, PRODUCTS } from '../data/mockData';
import ProductCard from './ProductCard';
import { Award } from 'lucide-react';

export default function BrandsView() {
  const [selectedBrand, setSelectedBrand] = useState(null);

  const filteredProducts = selectedBrand
    ? PRODUCTS.filter((p) => p.brand.toLowerCase().includes(selectedBrand.name.toLowerCase().split(' ')[0]))
    : PRODUCTS;

  return (
    <div>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Award size={26} color="#00875A" /> Official Brand Partners
        </h2>
        <p style={{ color: '#64748B', fontSize: '0.9rem' }}>
          100% genuine products sourced directly from trusted stationery and art manufacturers
        </p>
      </div>

      {/* Brands Grid */}
      <div className="brands-section" style={{ padding: '20px', marginBottom: '32px' }}>
        <div className="brands-grid">
          <div
            className={`brand-card ${selectedBrand === null ? 'active' : ''}`}
            onClick={() => setSelectedBrand(null)}
            style={{ border: selectedBrand === null ? '2px solid #00875A' : '1px solid #E2E8F0', background: selectedBrand === null ? '#E8F5E9' : '#F8FAFC' }}
          >
            <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#00875A' }}>All Brands</span>
          </div>
          {BRANDS.map((b) => (
            <div
              key={b.id}
              className={`brand-card ${selectedBrand?.id === b.id ? 'active' : ''}`}
              onClick={() => setSelectedBrand(b)}
              style={{ border: selectedBrand?.id === b.id ? '2px solid #00875A' : '1px solid #E2E8F0', background: selectedBrand?.id === b.id ? '#E8F5E9' : '#F8FAFC' }}
            >
              <img src={b.logo} alt={b.name} onError={(e) => { e.target.src = '/assets/icons/stationery.png'; }} />
              <span>{b.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Products under Brand */}
      <div>
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>
            {selectedBrand ? `${selectedBrand.name} Products` : 'All Brand Products'} ({filteredProducts.length})
          </h3>
        </div>

        <div className="products-grid">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
