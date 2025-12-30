import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Import your New components
import NewHome from './NewHome';
import NewCropPage from './NewCropPage'; 
import NewDiseasePage from './NewDiseasePage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import DiagnosisPortal from './DiagnosisPortal';

// Import your existing components
import NewCropProtectionSection from './NewCropProtectionSection';

<Route path="/protection" element={<DiagnosisPortal />} />

function Routerpage() {
  return (
    <div>
      <Routes>
        {/* 1. Home Page with Kharif, Rabi, etc. cards */}
        <Route path="/" element={<NewHome />} />
        
        {/* 2. Page showing crops (Strawberry, Lemon, etc.) */}
        <Route path="/category/:categoryId" element={<NewCropPage />} />
        {/* 3. Page showing the 6 diseases for that crop */}
        <Route path="/category/:categoryId/:cropId" element={<NewDiseasePage />} />

        {/* Specialized routes */}
        <Route path="/category/:categoryId/:cropId/:diseaseIndex" element={<NewCropProtectionSection />} />        

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/protection" element={<DiagnosisPortal />} />
        
      </Routes>
    </div>
  );
}

export default Routerpage;