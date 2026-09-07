import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Wallet, ArrowDownLeft, ArrowUpRight, Gift, Plus, ShieldCheck } from 'lucide-react';

export default function WalletView() {
  const { walletBalance, setWalletBalance, transactions } = useApp();
  const [addAmount, setAddAmount] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const handleAddMoney = (amount) => {
    const val = parseInt(amount, 10);
    if (!val || val <= 0) return;
    setWalletBalance((prev) => prev + val);
    setIsAdding(false);
    setAddAmount('');
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Wallet size={26} color="#00875A" /> Anjmor Cash Wallet
        </h2>
        <p style={{ color: '#64748B', fontSize: '0.9rem' }}>
          Instant cashback, referral rewards, and 1-click checkout
        </p>
      </div>

      {/* Hero Wallet Card */}
      <div className="wallet-hero-card">
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="wallet-balance-row">
            <div>
              <div style={{ fontSize: '0.85rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase' }}>
                Available Balance
              </div>
              <div className="wallet-balance-num">₹{walletBalance}.00</div>
            </div>
            <button
              onClick={() => setIsAdding(!isAdding)}
              style={{
                background: '#00875A',
                color: '#FFFFFF',
                padding: '10px 20px',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '0.88rem',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 4px 12px rgba(0, 135, 90, 0.4)'
              }}
            >
              <Plus size={16} /> Add Money
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#CBD5E1' }}>
            <ShieldCheck size={16} color="#10B981" />
            <span>100% Secured Wallet • Auto-applied at checkout for instant savings</span>
          </div>
        </div>
      </div>

      {/* Add Money Input */}
      {isAdding && (
        <div style={{
          background: '#FFFFFF',
          borderRadius: '16px',
          padding: '20px',
          border: '1px solid #E2E8F0',
          marginBottom: '24px',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '12px' }}>Enter Amount to Add:</h4>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '14px' }}>
            {['100', '250', '500', '1000'].map((amt) => (
              <button
                key={amt}
                onClick={() => setAddAmount(amt)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  border: '1px solid #CBD5E1',
                  background: addAmount === amt ? '#00875A' : '#F8FAFC',
                  color: addAmount === amt ? '#FFFFFF' : '#0F172A',
                  fontWeight: 600,
                  fontSize: '0.88rem'
                }}
              >
                +₹{amt}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input
              type="number"
              placeholder="Or enter custom amount"
              value={addAmount}
              onChange={(e) => setAddAmount(e.target.value)}
              style={{
                flex: 1,
                border: '1.5px solid #CBD5E1',
                borderRadius: '8px',
                padding: '8px 12px'
              }}
            />
            <button
              onClick={() => handleAddMoney(addAmount)}
              className="checkout-btn"
              style={{ width: 'auto', padding: '0 24px', height: '42px' }}
            >
              Proceed
            </button>
          </div>
        </div>
      )}

      {/* Referral Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)',
        border: '1px solid #FCD34D',
        borderRadius: '16px',
        padding: '20px',
        marginBottom: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#F59E0B', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Gift size={24} />
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#92400E' }}>Invite Friends & Earn ₹50 Cash</div>
            <div style={{ fontSize: '0.82rem', color: '#B45309' }}>Share your invite link. When friends place their first order, both earn ₹50 wallet cash!</div>
          </div>
        </div>
        <button
          onClick={() => alert("Referral link copied: https://anjmor.com/invite/ANJ892")}
          style={{
            background: '#D97706',
            color: '#FFFFFF',
            padding: '10px 18px',
            borderRadius: '8px',
            fontWeight: 700,
            fontSize: '0.85rem'
          }}
        >
          Share Link
        </button>
      </div>

      {/* Transaction History */}
      <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: '24px', border: '1px solid #E2E8F0' }}>
        <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px' }}>Recent Wallet Activity</h4>
        <div className="transaction-list">
          {transactions.map((t) => (
            <div key={t.id} className="transaction-item">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: t.type === 'credit' ? '#DCFCE7' : '#FEE2E2',
                  color: t.type === 'credit' ? '#16A34A' : '#EF4444',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {t.type === 'credit' ? <ArrowDownLeft size={18} /> : <ArrowUpRight size={18} />}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{t.title}</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B' }}>{t.date} • {t.id}</div>
                </div>
              </div>
              <div style={{
                fontWeight: 700,
                fontSize: '1rem',
                color: t.type === 'credit' ? '#16A34A' : '#EF4444'
              }}>
                {t.type === 'credit' ? '+' : '-'}₹{t.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
