import React, { useState } from 'react';
import './EmailForm.css';

const EmailForm = ({ onFormComplete }) => {
  const [email, setEmail] = useState('');
  const [matric, setMatric] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const studentData = {
      name: matric,
      email: email,
    };

    onFormComplete(studentData); // Send data up to App.jsx
  };

  return (
    <div className="form-card">
      <h2>Get Course Materials</h2>
      <form onSubmit={handleSubmit}>
        <label>School Email Address</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Matric Number</label>
        <input
          type="text"
          required
          value={matric}
          onChange={(e) => setMatric(e.target.value)}
        />

        <button type="submit">Proceed to Payment</button>
      </form>
    </div>
  );
};

export default EmailForm;
