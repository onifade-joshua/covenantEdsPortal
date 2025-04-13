import React from 'react';
import recordPayment from '../../utils/recordPayment';
import "./Payment.css";

const Payment = ({ student, onPaymentSuccess }) => {
  const handlePayment = () => {
    const amount = 150000; // ₦1,500 in kobo
    const reference = `CU-EDS-${Date.now()}`;

    window.MonnifySDK?.initialize({
      amount: amount / 100,
      currency: 'NGN',
      reference,
      customerName: student.name,
      customerEmail: student.email,
      apiKey: 'YOUR_MONNIFY_API_KEY',
      contractCode: 'YOUR_CONTRACT_CODE',
      paymentDescription: 'CU EDS Materials Access',
      isTestMode: true,
      onComplete: async function (response) {
        if (response.paymentReference && response.paymentStatus === 'PAID') {
          // Optional: Record payment
          await recordPayment({
            ...student,
            reference: response.paymentReference,
            amount: amount / 100,
          });

          onPaymentSuccess(); // Go to Step 3
        } else {
          alert('Payment not completed.');
        }
      },
      onClose: function () {
        alert('You closed the payment window.');
      },
    });
  };

  return (
    <div className="form-card">
      <h2>Pay to Access Materials</h2>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <button className="btn-pay w-100" onClick={handlePayment}>
        Pay ₦1,500 Now
      </button>
    </div>
  );
};

export default Payment;
