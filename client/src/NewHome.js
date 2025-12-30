import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './css/NewHome.css';
import './css/Home.css';
import gramoralogo from './images/gramoralogo.png'




const NewHome = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetching the keys (kharif, rabi, citrus, etc.) from your server
    fetch('http://localhost:5000/api/crop-types')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error("Database error:", err));
  }, []);

  return (
    <>
    
    
         <header className="glass-nav-container">
      {/* Top Bar - Matches mnmdn.png layout */}
      <div className="top-utility-bar">
        <div className="content-width flex-header">
          <div className="top-links">
            <Link to="/sell">Sell on Gramora</Link>
            <Link to="/bulk">Bulk Order Inquiries</Link>
            <Link to="/corporate">Corporate Site</Link>
          </div>
          <div className="contact-badge">
            Contact Us: +91 7667-3880-28
          </div>
        </div>
      </div>

      {/* Main Glass Header */}
      <div className="main-glass-header">
        <div className="content-width flex-header">
          <div className="brand-logo-area">
            <img src={gramoralogo} alt="Gramora" className="main-logo" />
          </div>

          <div className="glass-search-box">
            <input type="text" placeholder="Search Crops..." />
            <button className="orange-search-btn">Search</button>
          </div>

          <div className="user-access-area">
            <div className="lang-picker">
              <span className="globe-icon">🌐</span> English ▾
            </div>
            <div className="auth-links">
              <Link to="/login" className="login-link">👤 Login</Link>
              <Link to="/register" className="register-link">📝 Register</Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Lower Glass Navigation */}
      <nav className="category-nav-glass">
        <div className="content-width">
          <ul className="nav-menu-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/category/kharif">Kharif Crops</Link></li>
            <li><Link to="/category/rabi">Rabi Crops</Link></li>
            <li><Link to="/category/zaid">Zaid Crops</Link></li>
            <li><Link to="/protection">Diagnostic Portal</Link></li>
          </ul>
        </div>
      </nav>
    </header>

    <div className="hero-banner-innovative">
      <div className="banner-overlay"></div>
      <div className="banner-content-inner">
        <div className="status-badge">
          <span className="dot"></span> LIVE DATA PORTAL 2025
        </div>
        
        <h1 className="portal-title">
          Crop Protection <span>& Digital Diagnostics</span>
        </h1>
        
        <p className="portal-description">
          An advanced repository for organic and chemical management. 
          Identify threats, explore cures, and safeguard your harvest with precision data.
        </p>

        <div className="feature-grid">
          <div className="mini-card">
            <span className="mini-icon">🛡️</span>
            <div>
              <h4>Bio-Shield</h4>
              <p>Organic Cures</p>
            </div>
          </div>
          <div className="mini-card">
            <span className="mini-icon">🔬</span>
            <div>
              <h4>Rapid ID</h4>
              <p>Disease Library</p>
            </div>
          </div>
          <div className="mini-card">
            <span className="mini-icon">📊</span>
            <div>
              <h4>Smart Analytics</h4>
              <p>Protection Guides</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="home-wrapper">
      <div className="category-grid">
        {categories.map((type) => (
          <Link to={`/category/${type}`} key={type} className="category-card">
            
            
            <div className="card-body">
              <div className="text-section">
                <h3>{type.charAt(0).toUpperCase() + type.slice(1)} Crops</h3>
                <p>Seasonal Species Protection</p>
              </div>
              <div className="icon-circle">
                <span>→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>


        <div className="home-container">
        
      <div className="hero-section">
        <img src="https://www.upl-ltd.com/images/crop-protection/Business-Crop-protection-banner.jpg" alt="Gramora Crop Protection" />
       
        <div className="hero-banner">
          
          <div className="banner-left">
            <div className="circle-icon">
              <img src="https://www.upl-ltd.com/images/crop-protection/solution-crop-protection-top-image-final.png" alt="Gramora Icon"/>
            </div>

            <h2>Crop Protection  
              <br/>Management & Methods
            </h2>
          </div>

          <div className="banner-right">
            <p>
              Gramora is committed to helping farmers protect their crops.
              With simple guidance, modern solutions and farmer-friendly support.
              We help you save crops, increase yield and secure your income.
            </p>
          </div>

        </div>
      </div>

    </div>
    


    <footer className="diagnostics-footer">
      {/* Innovative Top Advantage Bar - Based on land.jpg */}
      <div className="footer-advantage-strip">
        <div className="advantage-glass-card">
          <div className="adv-item"><span>🌿</span> No Chemical Residues</div>
          <div className="adv-item"><span>⏳</span> No Pre-Harvest Interval</div>
          <div className="adv-item"><span>🦋</span> Supports Biodiversity</div>
          <div className="adv-item"><span>🛡️</span> Low Resistance Risk</div>
        </div>
      </div>

      <div className="footer-main-layer">
        <div className="footer-grid-container">
          {/* Brand Identity */}
          <div className="footer-brand-col">
            <h2 className="footer-logo">Agri<span>Shield</span></h2>
            <p>
              An advanced repository for organic and chemical management. 
              Safeguarding your harvest with precision data and digital diagnostics.
            </p>
            <div className="portal-status-footer">
              <span className="live-pulse"></span> LIVE DATA PORTAL 2025
            </div>
          </div>

          {/* Seasonal Navigation - Based on kndanl.png */}
          <div className="footer-nav-col">
            <h4>Seasonal Protection</h4>
            <ul>
              <li><Link to="/category/kharif">Kharif Crops</Link></li>
              <li><Link to="/category/rabi">Rabi Crops</Link></li>
              <li><Link to="/category/zaid">Zaid Crops</Link></li>
              <li><Link to="/category/perennial">Perennial Species</Link></li>
            </ul>
          </div>

          {/* Quick Support */}
          <div className="footer-contact-col">
            <h4>Diagnostic Support</h4>
            <p>📍 Central Agriculture Hub, India</p>
            <p>📞 1800-DIAGNOSE (Toll Free)</p>
            <p>📧 support@agrishield.gov</p>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="footer-bottom-bar">
        <div className="footer-grid-container flex-bottom">
          <p>© 2025 AgriShield Precision Protection. All Rights Reserved.</p>
          <div className="legal-links">
            <span>Privacy Policy</span>
            <span>Data Protocols</span>
          </div>
        </div>
      </div>
    </footer>
    
    </>
  );
};

export default NewHome;