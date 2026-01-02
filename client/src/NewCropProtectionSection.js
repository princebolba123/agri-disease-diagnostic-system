import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './css/NewCropProtection.css'; 
import gramoralogo from './images/gramoralogo.png';

const NewCropProtectionSection = () => {
  const { categoryId, cropId, diseaseIndex } = useParams();
  const [diseaseData, setDiseaseData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://agri-disease-diagnostic-system.onrender.com/api/agriculture')
      .then(res => res.json())
      .then(data => {
        if (data?.crop?.cropType) {
          const category = data.crop.cropType[categoryId.toLowerCase()];
          if (category?.crops) {
            const crop = Object.values(category.crops).find(
              c => c.name.toLowerCase() === cropId.toLowerCase() || c.name === cropId
            );
            if (crop?.diseases?.[diseaseIndex]) {
              setDiseaseData(crop.diseases[diseaseIndex]);
            }
          }
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch Error:", err);
        setLoading(false);
      });
  }, [categoryId, cropId, diseaseIndex]);

  if (loading) return <div className="soft-loader">Syncing Diagnostic Data...</div>;

  return (
    <div className="protection-page">
      {/* Lighter, softer background overlay */}
      <div className="soft-bg-overlay"></div>

      <header className="minimal-glass-nav">
        <div className="content-width flex-header">
          <img src={gramoralogo} alt="Gramora" className="main-logo" />
          <div className="nav-info">
            <span className="status-indicator">●</span>
            <span className="status-text">SECURE REPOSITORY</span>
          </div>
        </div>
      </header>

      <main className="protection-container">
        <div className="protection-grid">
          
          <div className="content-side">
            <Link to={`/category/${categoryId}/${cropId}`} className="soft-back-btn">
              ← Back to Disease List
            </Link>
            
            <div className="main-info-card frosted-card">
              <h1 className="title-text">{diseaseData.name}</h1>
              <div className="soft-divider"></div>
              <p className="description-text">{diseaseData.description}</p>

              <div className="treatment-grid">
                <div className="treatment-box organic-box">
                  <div className="treatment-header">
                    <div className="dot green"></div>
                    <h3>Organic Management</h3>
                  </div>
                  <p>{diseaseData.organicCure}</p>
                </div>

                <div className="treatment-box chemical-box">
                  <div className="treatment-header">
                    <div className="dot orange"></div>
                    <h3>Chemical Control</h3>
                  </div>
                  <p>{diseaseData.chemicalCure}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="visual-side">
            <div className="image-card frosted-card">
              <img src={diseaseData.image} alt={diseaseData.name} className="disease-img" />
              <div className="image-caption">Specimen Analysis View</div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default NewCropProtectionSection;