import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/AuthPages.css';

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Database connection will be added here later.
    navigate('/'); 
  };

  return (
    <div className="auth-screen">
      <div className="auth-glass-container">
        <div className="auth-brand">
          <h2 className="brand-logo"><span>Gramora</span></h2>
          <p className="auth-tagline">Join the Smart Protection Portal</p>
        </div>

        <form className="auth-glass-form" onSubmit={handleRegister}>
          <div className="input-field">
            <label>Full Name</label>
            <input type="text" placeholder="Your Name" required />
          </div>
          
          <div className="input-field">
            <label>Email Address</label>
            <input type="email" placeholder="email@example.com" required />
          </div>

          <div className="input-field">
            <label>Set Password</label>
            <input type="password" placeholder="Create strong password" required />
          </div>

          <button type="submit" className="glow-auth-btn">Create & Enter</button>
        </form>

        <div className="auth-switch">
          <p>Already have Gramora? <Link to="/login">Log In to Account</Link></p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;