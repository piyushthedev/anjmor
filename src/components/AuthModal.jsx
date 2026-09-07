import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  X,
  Lock,
  Phone,
  Eye,
  EyeOff,
  Smartphone,
  Mail,
  User,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export default function AuthModal() {
  const {
    isAuthModalOpen,
    closeAuthModal,
    authMode,
    setAuthMode,
    loginUser,
    registerUser
  } = useApp();

  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isOtpLoginMode, setIsOtpLoginMode] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState('');

  // Register state
  const [regFullName, setRegFullName] = useState('');

  // Status
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isAuthModalOpen) return null;

  const handleSkip = () => {
    closeAuthModal();
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!phoneOrEmail.trim()) {
      setErrorMsg('Please enter your phone number or email.');
      return;
    }

    if (isOtpLoginMode) {
      if (!otpSent) {
        setOtpSent(true);
        return;
      }
      if (!otpCode || otpCode.length < 4) {
        setErrorMsg('Please enter a valid 4-digit OTP.');
        return;
      }
    } else {
      if (!password) {
        setErrorMsg('Please enter your password.');
        return;
      }
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      loginUser({
        name: phoneOrEmail.includes('@')
          ? phoneOrEmail.split('@')[0]
          : 'Rahul Sharma',
        phone: phoneOrEmail.includes('@') ? '+91 98765 43210' : phoneOrEmail,
        email: phoneOrEmail.includes('@') ? phoneOrEmail : 'rahul@anjmor.in'
      });
    }, 600);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!regFullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!phoneOrEmail.trim()) {
      setErrorMsg('Please enter your phone number.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      registerUser({
        name: regFullName.trim(),
        phone: phoneOrEmail.trim(),
        email: `${regFullName.toLowerCase().replace(/\s+/g, '')}@anjmor.in`
      });
    }, 600);
  };

  return (
    <div className="anjmor-auth-overlay" onClick={closeAuthModal}>
      <div className="anjmor-auth-card" onClick={(e) => e.stopPropagation()}>
        {/* Skip Login Top Right Button */}
        <button className="anjmor-skip-login-btn" onClick={handleSkip}>
          Skip login
        </button>

        {/* Anjmor Brand Logo Card */}
        <div className="anjmor-logo-card">
          <img
            src="/assets/icons/anjmor_logo.png"
            alt="Anjmor Logo"
            className="anjmor-logo-img"
            onError={(e) => {
              e.target.src = '/assets/images/cart_empty.png';
            }}
          />
        </div>

        {/* Header Title & Subtitle */}
        <div className="anjmor-auth-header">
          <h2 className="anjmor-auth-title">
            {authMode === 'login' ? 'Welcome Back!' : 'Create Account'}
          </h2>
          <p className="anjmor-auth-sub">
            {authMode === 'login'
              ? 'Sign in to continue shopping'
              : 'Join Anjmor for 15-min instant stationery delivery'}
          </p>
        </div>

        {errorMsg && (
          <div className="anjmor-auth-error">
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Login Form */}
        {authMode === 'login' ? (
          <form onSubmit={handleLoginSubmit} className="anjmor-auth-form">
            {/* Phone / Email Input */}
            <div className="anjmor-input-box">
              <Phone size={18} className="anjmor-input-icon" />
              <input
                type="text"
                className="anjmor-field"
                placeholder="Enter your phone number"
                value={phoneOrEmail}
                onChange={(e) => setPhoneOrEmail(e.target.value)}
                autoFocus
              />
            </div>

            {/* Password or OTP Input */}
            {isOtpLoginMode ? (
              otpSent && (
                <div className="anjmor-input-box">
                  <Smartphone size={18} className="anjmor-input-icon" />
                  <input
                    type="text"
                    className="anjmor-field"
                    placeholder="Enter 4-digit OTP code (e.g. 1234)"
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value)}
                  />
                </div>
              )
            ) : (
              <div className="anjmor-input-box">
                <Lock size={18} className="anjmor-input-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="anjmor-field"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="anjmor-eye-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            )}

            {/* Forgot Password Link */}
            {!isOtpLoginMode && (
              <div className="anjmor-forgot-wrap">
                <button
                  type="button"
                  className="anjmor-forgot-btn"
                  onClick={() => alert('Password reset SMS sent to your mobile number!')}
                >
                  Forgot Password?
                </button>
              </div>
            )}

            {/* Primary Sign In Button */}
            <button
              type="submit"
              className="anjmor-primary-btn"
              disabled={isLoading}
            >
              {isLoading
                ? 'Signing in...'
                : isOtpLoginMode
                ? otpSent
                  ? 'Verify OTP & Sign In'
                  : 'Send OTP Code'
                : 'Sign In'}
            </button>

            {/* Sign Up Switch Link */}
            <div className="anjmor-switch-text">
              <span>Don't have an account? </span>
              <button
                type="button"
                className="anjmor-switch-link"
                onClick={() => {
                  setAuthMode('register');
                  setErrorMsg('');
                }}
              >
                Sign Up
              </button>
            </div>

            {/* OR Divider */}
            <div className="anjmor-or-divider">
              <span>OR</span>
            </div>

            {/* OTP Toggle Option Button */}
            <button
              type="button"
              className="anjmor-otp-btn"
              onClick={() => {
                setIsOtpLoginMode(!isOtpLoginMode);
                setErrorMsg('');
              }}
            >
              <Smartphone size={18} color="#8B2FC9" />
              <span>{isOtpLoginMode ? 'Login with Password' : 'Login with OTP'}</span>
            </button>
          </form>
        ) : (
          /* Register Form */
          <form onSubmit={handleRegisterSubmit} className="anjmor-auth-form">
            <div className="anjmor-input-box">
              <User size={18} className="anjmor-input-icon" />
              <input
                type="text"
                className="anjmor-field"
                placeholder="Enter your full name"
                value={regFullName}
                onChange={(e) => setRegFullName(e.target.value)}
                autoFocus
              />
            </div>

            <div className="anjmor-input-box">
              <Phone size={18} className="anjmor-input-icon" />
              <input
                type="text"
                className="anjmor-field"
                placeholder="Enter your phone number"
                value={phoneOrEmail}
                onChange={(e) => setPhoneOrEmail(e.target.value)}
              />
            </div>

            <div className="anjmor-input-box">
              <Lock size={18} className="anjmor-input-icon" />
              <input
                type={showPassword ? 'text' : 'password'}
                className="anjmor-field"
                placeholder="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="anjmor-primary-btn" disabled={isLoading}>
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>

            <div className="anjmor-switch-text">
              <span>Already have an account? </span>
              <button
                type="button"
                className="anjmor-switch-link"
                onClick={() => {
                  setAuthMode('login');
                  setErrorMsg('');
                }}
              >
                Sign In
              </button>
            </div>
          </form>
        )}

        {/* Footer Legal Terms */}
        <div className="anjmor-auth-terms">
          <span>By signing in, you agree to our</span>
          <br />
          <a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
          <span> • </span>
          <a href="#terms" onClick={(e) => e.preventDefault()}>Terms & Conditions</a>
        </div>
      </div>
    </div>
  );
}
