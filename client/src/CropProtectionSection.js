import React from 'react'
import './css/CropProtectionSection.css'


const CropProtectionSection = () => {
  return (
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
        <img src="https://5.imimg.com/data5/SELLER/Default/2020/9/PE/UJ/KJ/2707316/coriander-1000x1000.jpg" alt="Crop Protection" />
      </div>
    </section>
  );
};

export default CropProtectionSection
