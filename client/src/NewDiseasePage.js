import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './css/NewDiseasePage.css'; 
import gramoralogo from './images/gramoralogo.png';

const NewDiseasePage = () => {
  const { categoryId, cropId } = useParams(); 
  const [diseases, setDiseases] = useState([]);
  const [cropName, setCropName] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://agri-disease-diagnostic-system.onrender.com/api/agriculture')
      .then(res => res.json())
      .then(data => {
        if (data?.crop?.cropType) {
          const categoryData = data.crop.cropType[categoryId.toLowerCase()];
          if (categoryData?.crops) {
            const cropsList = Object.values(categoryData.crops);
            const foundCrop = cropsList.find(c => 
              c.name === cropId || c.name.toLowerCase() === cropId.toLowerCase()
            );
            if (foundCrop) {
              setCropName(foundCrop.name);
              setDiseases(foundCrop.diseases || []);
            }
          }
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading diseases:", err);
        setLoading(false);
      });
  }, [categoryId, cropId]);

  if (loading) return <div className="loading-screen">Opening Gramora Health Records...</div>;

  return (
    <>
 <header className="glass-nav-container">
          
    
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
    
              <div className="system-status">● VERIFIED PROTECTION DATA</div>
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
      

      {/* Hero Banner Section */}
      <section className="disease-hero">
        <div className="hero-gradient-box">
          {/* Back Button on Top Left of Banner */}
          <button 
  onClick={() => navigate(`/category/${categoryId}`)} 
  className="hero-corner-back"
>
  ← Back to {categoryId} Crops
</button>

          <div className="hero-text-content">
            <span className="hero-tag">Farmer Support Portal</span>
            <h1 className="hero-title">{cropName || cropId} <span>Cures</span></h1>
            <p className="hero-subtitle">
              Below are the common health issues for your crop. We provide 
              <strong> organic methods </strong> and <strong> chemical treatments </strong> 
              to save your yield.
            </p>
          </div>

          <div className="hero-stats">
            <div className="stat-circle">
              <strong>{diseases.length}</strong>
              <span>Issues</span>
            </div>
          </div>
        </div>
      </section>

      {/* Disease Grid Section */}
      <section className="disease-grid-section">
        <div className="grid-header">
          <h2>Which problem are you seeing?</h2>
          <div className="header-line"></div>
        </div>

        <div className="impact-disease-grid">
          {diseases.length > 0 ? (
            diseases.map((disease, index) => (
              <Link 
                to={`/category/${categoryId}/${cropId}/${index}`} 
                key={index} 
                className="impact-card"
              >
                <div className="impact-card-img-container">
                  <img 
                    src={disease.image || "https://placehold.co/600x400?text=No+Photo"} 
                    alt={disease.name} 
                  />
                  <div className="impact-card-overlay">
                    <span>View All Cures</span>
                  </div>
                </div>
                <div className="impact-card-body">
                  <h3>{disease.name}</h3>
                  <div className="card-divider"></div>
                  <div className="impact-card-footer">
                    <span className="treatment-badge">Organic + Chemical Guide</span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="no-data-card">
              <h3>No diseases found for this crop yet.</h3>
              <p>Check back later for updated treatment guides.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default NewDiseasePage;