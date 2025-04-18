import React from 'react';
import './AlertModal.css';

const AlertModal = ({
  title = '📢 Important Notice',
  message
}) => {
  const handleClose = () => {
    // Try to close the current window/tab
    window.close();

    // Fallback: redirect to another page if close fails
    setTimeout(() => {
      window.location.href = 'https://google.com'; // 🔁 Replace with your own page if needed
    }, 500);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>{title}</h2>
        <p>{message || 'To access your course materials, please fill in your details and proceed to make a payment of ₦2,000.'}</p>
        <button onClick={handleClose} style={{ backgroundColor: 'purple' }}>
          Got it
        </button>
      </div>
    </div>
  );
};

export default AlertModal;
