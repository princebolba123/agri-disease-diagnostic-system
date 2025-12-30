import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import './css/Check2.css'

const Check2 = () => {

    const navigate = useNavigate();

  return (
    <div className="home-container">

      <h1 className="main-title">
        🌾 Crop Protection Portal
      </h1>

      <p className="sub-title">
        Simple guidance for farmers to identify crop diseases and protect crops safely.
      </p>


      {/* ---- MAIN SECTION CARDS ---- */}
      <div className="category-container">

        <div className="category-card" onClick={() => navigate("/kharif")}>
          <h2>Kharif Crops</h2>
          <p>Click to see crops grown in rainy season</p>
          <button className="see-btn">See More</button>
        </div>

        <div className="category-card" onClick={() => navigate("/rabi")}>
          <h2>Rabi Crops</h2>
          <p>Click to see crops grown in winter season</p>
          <button className="see-btn">See More</button>
        </div>

        <div className="category-card" onClick={() => navigate("/fruits")}>
          <h2>Fruit Crops</h2>
          <p>Click to see fruit diseases & solutions</p>
          <button className="see-btn">See More</button>
        </div>

        <div className="category-card" onClick={() => navigate("/citrus")}>
          <h2>Citrus Crops</h2>
          <p>Click to see diseases of citrus crops</p>
          <button className="see-btn">See More</button>
        </div>

        <div className="category-card" onClick={() => navigate("/vegetables")}>
          <h2>Vegetable Crops</h2>
          <p>Click to see vegetable diseases</p>
          <button className="see-btn">See More</button>
        </div>

        <div className="category-card" onClick={() => navigate("/yearly")}>
          <h2>Yearly / Permanent Crops</h2>
          <p>Click to see long-term crops</p>
          <button className="see-btn">See More</button>
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
              With simple guidance, modern solutions and farmer-friendly support,
              we help you save crops, increase yield and secure your income.
            </p>
          </div>

        </div>
      </div>

    </div>


    </div>
  );
};

export default Check2;
