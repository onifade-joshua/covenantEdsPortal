import React from 'react';
import './AlertModal.css';

const AlertModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>📢 Important Notice</h2>
        <p>
          To access your course materials, please fill in your details and proceed to make a payment of ₦1,500.
        </p>
        <button onClick={onClose} style={{backgroundColor: "purple"}} >Got it</button>
      </div>
    </div>
  );
};

export default AlertModal;
