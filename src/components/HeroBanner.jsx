import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, ArrowRight, Zap, ShieldCheck, Truck } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    tag: '⚡ INSTANT 15-30 MIN DELIVERY',
    title: 'Colors, Canvases & Stationery Delivered In Minutes',
    desc: 'From professional artist acrylics to school notebooks & desk decor — Anjmor brings everything to your doorstep fast.',
    cta: 'Explore Paints & Arts',
    targetCategory: 4,
    bgColor: 'linear-gradient(135deg, #004D34 0%, #00875A 100%)',
    img: '/assets/images/offer_card_1.png'
  },
  {
    id: 2,
    tag: '🏛️ EXECUTIVE DESK DECOR',
    title: 'Ashoka Chakra & Brass Tabletop Miniatures',
    desc: 'Upgrade your office ambience with authentic handcrafted national emblems, globes & solid wood organizers.',
    cta: 'Shop Office Decor',
    targetCategory: 3,
    bgColor: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
    img: 'https://anjmor.eprofitbooks.com/ChildCategoryImage/64fac643-e09b-4321-b0a2-2108291884e8.png'
  },
  {
    id: 3,
    tag: '📦 B2B & INSTITUTIONAL SAVINGS',
    title: 'Bulk Copier Paper, Registers & Office Supplies',
    desc: 'Special wholesale rates for schools, coaching institutes, colleges, and corporate offices with tax invoice.',
    cta: 'View B2B Products',
    targetCategory: 12,
    bgColor: 'linear-gradient(135deg, #831843 0%, #BE185D 100%)',
    img: '/assets/images/delivery_scooter.png'
  }
];

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { setActiveTab, setActiveCategory } = useState ? useApp() : {};

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[currentSlide];

  return (
    <section className="hero-slider-section" style={{ background: slide.bgColor }}>
      <div className="hero-slide">
        <div className="hero-text-content">
          <div className="hero-pill">
            <Sparkles size={14} color="#FDE68A" />
            <span>{slide.tag}</span>
          </div>
          <h2>{slide.title}</h2>
          <p>{slide.desc}</p>
          <button
            className="hero-cta-btn"
            onClick={() => {
              if (setActiveCategory) setActiveCategory(slide.targetCategory);
              if (setActiveTab) setActiveTab('categories');
            }}
          >
            <span>{slide.cta}</span>
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="hero-img-wrap">
          <img
            src={slide.img}
            alt="Promotion"
            className="hero-banner-img"
            onError={(e) => { e.target.src = '/assets/images/delivery_scooter.png'; }}
          />
        </div>
      </div>

      {/* Slide Indicators */}
      <div style={{
        position: 'absolute',
        bottom: '12px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '8px',
        zIndex: 10
      }}>
        {SLIDES.map((s, idx) => (
          <div
            key={s.id}
            onClick={() => setCurrentSlide(idx)}
            style={{
              width: currentSlide === idx ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background: currentSlide === idx ? '#FFFFFF' : 'rgba(255, 255, 255, 0.4)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>
    </section>
  );
}
