import React from 'react';
import logo from '../assets/cu-logo.jpg';

const Header = () => (
  <header className="text-center py-3 border-bottom bg-white">
    <img src={logo} alt="CU Logo" className="img-fluid mb-2" style={{ maxWidth: '100px' }} />
    <h1 className="h4 fw-bold" style={{color: "purple"}}>Start Learning: Access Materials Here</h1>
    <h6 className="h5 text-muted">Samjodatech Solutions NG</h6>
  </header>
);

export default Header;
