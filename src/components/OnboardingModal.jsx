import React from 'react';
import { useApp } from '../context/AppContext';

export default function OnboardingModal() {
  const { isOnboardingOpen, closeOnboarding, openAuthModal } = useApp();

  if (!isOnboardingOpen) return null;

  const handleGetStarted = () => {
    closeOnboarding();
    openAuthModal('login');
  };

  return (
    <div className="onboarding-overlay">
      {/* Hero Welcome Slide */}
      <div className="onboarding-slide slide-dark">
        <div className="onboarding-bg-image" />
        <div className="onboarding-content-bottom">
          <h1 className="onboarding-title-large">
            Your Stationery<br />Starts Here
          </h1>
          <p className="onboarding-desc-dark">
            Everything you need for school, office, and creativity in one place.
          </p>
          <button className="onboarding-btn-outline" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
