import React from 'react';
import { useApp } from '../context/AppContext';
import { Bell } from 'lucide-react';

export default function NotificationModal() {
  const { isNotificationOpen, closeNotification } = useApp();

  if (!isNotificationOpen) return null;

  const handleEnable = () => {
    if ('Notification' in window) {
      Notification.requestPermission();
    }
    closeNotification();
  };

  return (
    <div className="modal-backdrop" onClick={closeNotification}>
      <div className="notification-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="notification-bell-icon">
          <Bell size={42} color="#D97706" fill="#FBBF24" />
        </div>
        <p className="notification-desc">
          Stay up to date with the latest updates, alerts, and messages sent just for you.
        </p>
        <div className="notification-btn-group">
          <button className="notification-btn-primary" onClick={handleEnable}>
            Enable Notifications
          </button>
          <button className="notification-btn-secondary" onClick={closeNotification}>
            No, thanks
          </button>
        </div>
      </div>
    </div>
  );
}
