import React, { createContext, useContext, useState, useEffect } from 'react';
import { DELIVERY_PINCODES, PRODUCTS, COUPONS } from '../data/mockData';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [selectedPin, setSelectedPin] = useState(DELIVERY_PINCODES[0]);
  const [cartItems, setCartItems] = useState([
    { ...PRODUCTS[0], quantity: 1 },
    { ...PRODUCTS[2], quantity: 1 }
  ]);
  const [wishlist, setWishlist] = useState([102, 107]);
  const [activeTab, setActiveTab] = useState('home');
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isPinModalOpen, setIsPinModalOpen] = useState(false);
  const [activeOrder, setActiveOrder] = useState(null);
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [walletBalance, setWalletBalance] = useState(250);
  const [transactions, setTransactions] = useState([
    { id: 'TXN1001', type: 'credit', title: 'Welcome Cashback Bonus', amount: 150, date: '05 Sep 2026' },
    { id: 'TXN1002', type: 'credit', title: 'Referral Reward Credit', amount: 100, date: '04 Sep 2026' }
  ]);
  const [orders, setOrders] = useState([
    {
      id: 'ANJ-89214',
      date: '05 Sep 2026, 11:30 AM',
      items: [
        { name: 'Camel Artist Acrylic Color 12 Shades', qty: 1, price: 325 },
        { name: 'Anjmor Classic Ashoka Chakra Brass', qty: 1, price: 699 }
      ],
      total: 1024,
      status: 'On the way',
      eta: '12 mins',
      pincode: '845102 - West Champaran'
    }
  ]);

  // Auth State
  const [user, setUser] = useState({
    name: 'Rahul Sharma',
    email: 'rahul.sharma@anjmor.in',
    phone: '+91 98765 43210',
    accountType: 'individual',
    isLoggedIn: true
  });
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'register'

  // Onboarding & Notification Modals
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(true);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const openOnboarding = () => setIsOnboardingOpen(true);
  const closeOnboarding = () => setIsOnboardingOpen(false);
  const openNotification = () => setIsNotificationOpen(true);
  const closeNotification = () => setIsNotificationOpen(false);

  const openAuthModal = (mode = 'login') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const loginUser = (userData) => {
    setUser({ ...userData, isLoggedIn: true });
    setIsAuthModalOpen(false);
    // Optionally trigger notification alert after login
    setTimeout(() => setIsNotificationOpen(true), 800);
  };

  const registerUser = (userData) => {
    setUser({ ...userData, isLoggedIn: true });
    setIsAuthModalOpen(false);
    setTimeout(() => setIsNotificationOpen(true), 800);
  };

  const logoutUser = () => {
    setUser(null);
  };

  // Cart operations
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, delta) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
    setAppliedCoupon(null);
  };

  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  // Calculations
  const itemTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalSavings = cartItems.reduce(
    (acc, item) => acc + (item.mrp - item.price) * item.quantity,
    0
  );
  const deliveryFee = itemTotal >= 199 || itemTotal === 0 ? 0 : 30;
  const handlingFee = itemTotal > 0 ? 5 : 0;
  const discountAmount = appliedCoupon ? appliedCoupon.discount : 0;
  const grandTotal = Math.max(0, itemTotal + deliveryFee + handlingFee - discountAmount);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Apply Coupon
  const applyCoupon = (code) => {
    const found = COUPONS.find((c) => c.code.toUpperCase() === code.trim().toUpperCase());
    if (!found) {
      return { success: false, message: 'Invalid coupon code.' };
    }
    if (itemTotal < found.minOrder) {
      return {
        success: false,
        message: `Min order value for this coupon is ₹${found.minOrder}.`
      };
    }
    setAppliedCoupon(found);
    return { success: true, message: `Coupon applied! You saved ₹${found.discount}` };
  };

  // Place Order Flow
  const placeOrder = (paymentMethod, addressText) => {
    const newOrder = {
      id: `ANJ-${Math.floor(10000 + Math.random() * 90000)}`,
      date: 'Just now',
      items: cartItems.map((i) => ({ name: i.name, qty: i.quantity, price: i.price })),
      total: grandTotal,
      status: 'Placed',
      eta: '18-25 mins',
      pincode: selectedPin.DisplayName,
      address: addressText || 'House #12, Station Road, Bettiah, West Champaran',
      paymentMethod
    };

    setOrders((prev) => [newOrder, ...prev]);
    setActiveOrder(newOrder);
    clearCart();
    setIsCheckoutOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        selectedPin,
        setSelectedPin,
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        wishlist,
        toggleWishlist,
        activeTab,
        setActiveTab,
        activeCategory,
        setActiveCategory,
        selectedProduct,
        setSelectedProduct,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isSupportOpen,
        setIsSupportOpen,
        isPinModalOpen,
        setIsPinModalOpen,
        activeOrder,
        setActiveOrder,
        appliedCoupon,
        setAppliedCoupon,
        applyCoupon,
        searchQuery,
        setSearchQuery,
        walletBalance,
        setWalletBalance,
        transactions,
        orders,
        placeOrder,
        itemTotal,
        totalSavings,
        deliveryFee,
        handlingFee,
        discountAmount,
        grandTotal,
        cartCount,
        user,
        isAuthModalOpen,
        authMode,
        setAuthMode,
        openAuthModal,
        closeAuthModal,
        loginUser,
        registerUser,
        logoutUser,
        isOnboardingOpen,
        openOnboarding,
        closeOnboarding,
        isNotificationOpen,
        openNotification,
        closeNotification
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
