import React from 'react';
import './css/DiagnosisPortal.css';

const DiagnosisPortal = () => {
  const diagnostics = [
    { id: 1, crop: "Wheat", issue: "Yellow Rust", status: "Critical", cure: "Organic Bio-Shield" },
    { id: 2, crop: "Citrus", issue: "Leaf Miner", status: "Warning", cure: "Neem Protocol" },
    { id: 3, crop: "Tomato", issue: "Early Blight", status: "Stable", cure: "Copper Protocol" },
  ];

  return (
    <div className="diagnosis-page">
      {/* Header Section */}
      <section className="portal-hero">
        <div className="glass-content-card">
          <div className="live-status-badge">
            <span className="pulse-dot"></span> SMART ANALYTICS ACTIVE
          </div>
          <h1>Crop Health <span>Intelligence Portal</span></h1>
          <p>Scanning 60+ crop species for digital diagnostics and precision management.</p>
        </div>
      </section>

      {/* Main Dashboard Grid */}
      <div className="portal-grid">
        {/* Left: Rapid ID Search */}
        <aside className="diagnostic-tools">
          <div className="tool-card glass">
            <h3>Rapid ID Search</h3>
            <input type="text" placeholder="Describe symptoms (e.g., yellow spots)..." />
            <button className="scan-btn">Initiate Diagnosis</button>
          </div>
          
          <div className="tool-card glass highlight">
            <h3>Bio-Shield Status</h3>
            <p>98% Efficiency in Organic Cures.</p>
          </div>
        </aside>

        {/* Right: Active Threats / Disease Library */}
        <main className="disease-library">
          <div className="library-header">
            <h2>Active <span>Diagnostic Reports</span></h2>
          </div>
          <div className="reports-container">
            {diagnostics.map(item => (
              <div key={item.id} className="report-glass-item">
                <div className="report-info">
                  <h4>{item.crop}: {item.issue}</h4>
                  <span className={`status-pill ${item.status.toLowerCase()}`}>{item.status}</span>
                </div>
                <div className="report-cure">
                  <p>Recommended: <strong>{item.cure}</strong></p>
                  <button className="view-cure-btn">View Full Protocol</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DiagnosisPortal;