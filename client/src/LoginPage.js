import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './css/AuthPages.css';

const LoginPage = () => {
  const navigate = useNavigate(); // Initialize the navigation hook

  const handleLogin = (e) => {
    e.preventDefault();
    // Later, you will add your database verification here.
    // For now, we navigate directly to the Home Page.
    navigate('/'); 
  };

  return (
    <div className="auth-screen">
      <div className="auth-glass-container">
        <div className="auth-brand">
          <h2 className="brand-logo"><span>Gramora</span></h2>
          <p className="auth-tagline">Farmer Login & Secure Access</p>
        </div>

        <form className="auth-glass-form" onSubmit={handleLogin}>
          <div className="input-field">
            <label>Email Address</label>
            <input type="email" placeholder="enter your email" required />
          </div>

          <div className="input-field">
            <label>Password</label>
            <input type="password" placeholder="••••••••" required />
          </div>

          <button type="submit" className="glow-auth-btn">Verify & Enter</button>
        </form>

        <div className="auth-switch">
          <p>New to Gramora? <Link to="/register">Create Account</Link></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;