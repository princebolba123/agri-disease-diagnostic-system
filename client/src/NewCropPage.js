import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './css/NewDiseasePage.css'; // Reusing the beautiful styles
import gramoralogo from './images/gramoralogo.png';

const NewCropPage = () => {
  const { categoryId } = useParams();
  const [crops, setCrops] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://agri-disease-diagnostic-system.onrender.com/api/agriculture')
      .then(res => res.json())
      .then(data => {
        if (data && data.crop && data.crop.cropType) {
          const categoryKey = Object.keys(data.crop.cropType).find(
            key => key.toLowerCase() === categoryId.toLowerCase()
          );

          const categoryData = data.crop.cropType[categoryKey];
          
          if (categoryData && categoryData.crops) {
            setCategoryName(categoryData.cropTypeName);
            setCrops(Object.values(categoryData.crops));
          }
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) return <div className="loading-screen">Loading {categoryId} Gallery...</div>;

  return (
    <div className="impact-page-wrapper">
      {/* Top Navbar */}
      <header className="impact-nav">
        <div className="impact-nav-content">
          <img 
            src={gramoralogo} 
            alt="Gramora" 
            className="impact-logo" 
            onClick={() => navigate('/')} 
          />
          <div className="system-status">● GRAMORA CROP DATABASE</div>
        </div>
      </header>

      {/* Hero Banner Section */}
      <section className="disease-hero">
        <div className="hero-gradient-box">
          {/* Back Button on Top Left of Banner */}
          <button onClick={() => navigate('/')} className="hero-corner-back">
            ← Home
          </button>

          <div className="hero-text-content">
            <span className="hero-tag">Season: {categoryId}</span>
            <h1 className="hero-title">{categoryName || categoryId} <span>Crops</span></h1>
            <p className="hero-subtitle">
              Browse the official list of <strong>{categoryName}</strong> crops. 
              Select a crop to check for diseases, health issues, and treatment guides.
            </p>
          </div>

          <div className="hero-stats">
            <div className="stat-circle">
              <strong>{crops.length}</strong>
              <span>Species</span>
            </div>
          </div>
        </div>
      </section>

      {/* Crop Grid Section */}
      <section className="disease-grid-section">
        <div className="grid-header">
          <h2>Select your crop:</h2>
          <div className="header-line"></div>
        </div>

        <div className="impact-disease-grid">
          {crops.length > 0 ? (
            crops.map((crop, index) => (
              <Link 
                to={`/category/${categoryId}/${crop.name}`} 
                key={index} 
                className="impact-card"
              >
                <div className="impact-card-img-container">
                  <img 
                    src={crop.image || "https://placehold.co/600x400?text=Crop+Image"} 
                    alt={crop.name} 
                  />
                  <div className="impact-card-overlay">
                    <span>Explore Diseases</span>
                  </div>
                </div>
                <div className="impact-card-body">
                  <h3>{crop.name}</h3>
                  <p style={{fontStyle: 'italic', color: '#1a4d2e', marginBottom: '10px'}}>
                    {crop.botanical || "Botanical Species"}
                  </p>
                  <div className="card-divider"></div>
                  <div className="impact-card-footer">
                    <span className="treatment-badge">View Health Report →</span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="no-data-card" style={{gridColumn: '1/-1', textAlign: 'center', padding: '50px'}}>
              <h3>No crops found in this category.</h3>
              <p>Please check your database connection.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default NewCropPage;