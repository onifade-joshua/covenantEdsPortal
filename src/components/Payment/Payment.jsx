import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import AlertModal from '../AlertModal/AlertModal';
import SubmitAlert from '../AlertModal/SubmitAlert';
import './Payment.css'; // Import your CSS file for styling

const Payment = ({ student }) => {
  const [form, setForm] = useState({
    name: student.name || '',
    email: student.email || '',
    matric: student.matric || '',
  });

  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setUploading(true);
      setError('');

      // Send email with student details to your inbox
      const templateParams = {
        name: form.name,
        email: form.email,
        matric: form.matric,
      };

      await emailjs.send(
        'service_43gg1az',       // ✅ Your EmailJS Service ID
        'template_gd1mlcl',      // ✅ Your Template ID
        templateParams,
        'DUwpHpX2m1EJDDFkk'      // ✅ Your Public Key
      );

      setUploading(false);
      setShowAlert(true); // Show "Check your mail" alert
    } catch (err) {
      console.error('Submission error:', err);
      setUploading(false);
      setError('Something went wrong. Please try again.');
    }
  };

  const closeModal = () => {
    setShowAlert(false);
  };

  return (
    <div className="form-card">
      <h2>Manual Bank Transfer Payment</h2>
      <p>To complete your payment, transfer <strong>₦2,000</strong> to:</p>
      
      <ul>
        {/* <li><strong>Account Name:</strong> Joshua Onifade</li> */}
        <li><strong>Account Number:</strong> 6505699189</li>
        <li><strong>Bank:</strong> Providus Bank</li>
      </ul>

      <p>After payment, fill in the details below:</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Matric Number"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Student Email Address"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="matric"
          placeholder="Full Name (as on bank transfer)"
          value={form.matric}
          onChange={handleChange}
          required
        />

        {error && <p className="error">{error}</p>}

        <button type="submit" disabled={uploading}>
          {uploading ? 'Submitting...' : 'Submit Payment Details'}
        </button>
      </form>

      {showAlert && (
        <SubmitAlert message="Your payment is being confirmed. While you wait, check your mail for the course material download URL." onClose={closeModal} />
      )}
    </div>
  );
};

export default Payment;
