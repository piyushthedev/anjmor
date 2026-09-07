import React from 'react';
import { useApp } from '../context/AppContext';
import { CATEGORIES } from '../data/mockData';

export default function CategoryPills({ selectedCategoryId, onSelectCategory }) {
  return (
    <div className="category-quick-bar">
      <div className="section-title-wrap">
        <div>
          <h3 className="section-title">Shop by Category</h3>
          <p className="section-subtitle">Top curated stationery, craft, art & decor collections</p>
        </div>
      </div>

      <div className="category-scroll-container">
        <div
          className={`category-quick-card ${selectedCategoryId === null ? 'active' : ''}`}
          onClick={() => onSelectCategory(null)}
        >
          <div className="category-icon-circle">
            <img src="/assets/images/all_category.png" alt="All" onError={(e) => { e.target.src = '/assets/icons/stationery.png'; }} />
          </div>
          <span className="category-card-name">All Items</span>
        </div>

        {CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className={`category-quick-card ${selectedCategoryId === cat.id ? 'active' : ''}`}
            onClick={() => onSelectCategory(cat.id)}
          >
            <div className="category-icon-circle">
              <img src={cat.icon} alt={cat.name} onError={(e) => { e.target.src = '/assets/icons/stationery.png'; }} />
            </div>
            <span className="category-card-name">{cat.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
