import React from 'react'
import gramoralogo from './images/gramoralogo.png'
import './css/Home.css'
import { useNavigate } from "react-router-dom";



function Home() {

        const navigate = useNavigate();


  return (
    <div>
      {/* <!-- ===== TOP BAR ===== --> */}
<div class="top-bar">
    <div>Sell on Gramora</div>
    <div>Bulk Order Inquiries</div>
    <div>Corporate Site</div>
    <div class="highlight">Contact Us: +91 7667-3880-28</div>
</div>

{/* <!-- ===== MAIN HEADER ===== --> */}
<div class="main-header">

    {/* <!-- Logo --> */}
    <div class="logo">    
        <img src={gramoralogo} width={400}/>
        <span></span>
    </div>

    {/* <!-- Search --> */}
    <div class="search-box">
        <input type="text" placeholder="Search Crops..."/>
        <button><p>Search</p></button>
    </div>

    {/* <!-- Right Section --> */}
    <div class="header-right">
        <div class="language">🌐 English ▾</div>
        <div class="icon">👤 Login</div>
        <div class="icon">📝 Register</div>  
        
        
    </div>

</div>


{/* <!-- ===== HERO ===== --> */}
<section class="hero">
    <div class="hero-content">
        <h1>"Apki Fasal, Hamari Jimmedari - Gramora"</h1>
        <button>Explore Gramora</button>
    </div>

    <div class="slider-dots">
        <span class="active"></span>
        <span></span>
        <span></span>
    </div>
</section>

{/* <!-- ===== FEATURES ===== --> */}
<section class="features">
    <div class="feature">
        <span>👨‍🌾</span>
        <p></p>
    </div>

    <div class="feature">
        <span>🍊</span>
        <p>Organically grown</p>
    </div>

    <div class="feature">
        <span>🛡️</span>
        <p>Crop Defender</p>
    </div>
</section>

<section className="crop-protection-section">
      <div className="crop-left">
        <h1>Crop Protection in Agriculture</h1>

        <p>
          Crop protection is the practice of protecting plants against pests,
          diseases, and harmful influences to ensure healthy growth and reliable
          harvests. It is essential in agriculture for achieving healthy,
          high-yielding crops.
        </p>

        <p>
          With proper crop protection, farmers can control pests and diseases,
          minimize resistance, reduce chemical dependency and strengthen plant
          resilience.
        </p>

        <h3>Key Advantages</h3>

        <ul>
          <li>
            <b>Easy integration</b> – Fits into existing farming practices
            without special equipment.
          </li>
          <li>
            <b>No chemical residues</b> – Improves food safety and quality.
          </li>
          <li>
            <b>No pre-harvest interval</b> – Safe to apply till harvest.
          </li>
          <li>
            <b>Low resistance risk</b> – Reduces pest resistance.
          </li>
          <li>
            <b>Supports soil health & biodiversity</b> – Improves fertility and
            plant strength.
          </li>
        </ul>

        <button className="advantage-btn">
          Advantages →
        </button>
      </div>

      <div className="crop-right">
        <img src="https://www.koppert.com/content/_processed_/c/e/csm_Coleomegilla_maculata_-_Biological_control_agent_-_Koppert13_abc12fb051.jpg" width={250} />
      </div>
    </section>

    <div className="home-container-diseases">

      <h1 className="main-title">
        🌾 Crop Protection Portal
      </h1>

      <p className="sub-title">
        Simple guidance for farmers to identify crop diseases and protect crops safely.
      </p>
    </div>

<div className="category-container">

        <div className="category-card" onClick={() => navigate("/kharif")}>
          <h2>Kharif Crops (🌧️खरीफ फसलें)</h2>
          <p>Click to see crops grown in rainy season</p>
          <button className="see-btn">See More</button>
        </div>

        <div className="category-card" onClick={() => navigate("/rabi")}>
          <h2>Rabi Crops (❄️ रबी फसलें)</h2>
          <p>Click to see crops grown in winter season</p>
          <button className="see-btn">See More</button>
        </div>

        <div className="category-card" onClick={() => navigate("/zaid")}>
          <h2>Zaid Crops (🌤️ ज़ायद फसलें)</h2>
          <p>Click to see crops grown in summer season</p>
          <button className="see-btn">See More</button>
        </div>

        <div className="category-card" onClick={() => navigate("/fruit")}>
          <h2>Fruit Crops (फल फसलें)</h2>
          <p>Click to see fruit diseases & solutions</p>
          <button className="see-btn">See More</button>
        </div>

        <div className="category-card" onClick={() => navigate("/citrus")}>
          <h2>Citrus Crops (साइट्रस फसलें)</h2>
          <p>Click to see diseases of citrus crops</p>
          <button className="see-btn">See More</button>
        </div>

        <div className="category-card" onClick={() => navigate("/vegetable")}>
          <h2>Vegetable Crops (सब्ज़ी फसलें)</h2>
          <p>Click to see vegetable diseases</p>
          <button className="see-btn">See More</button>
        </div>

        <div className="category-card" onClick={() => navigate("/perennial")}>
          <h2>Perennial Crops (बहुवर्षीय फसलें)</h2>
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
              With simple guidance, modern solutions and farmer-friendly support.
              We help you save crops, increase yield and secure your income.
            </p>
          </div>

        </div>
      </div>

    </div>


    </div>
    
    

    


   
  )
}

export default Home
