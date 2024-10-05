// src/components/OptionsPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const OptionsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="options-card">
        <h1 className="title">Select Area Type</h1>
        <p className="subtitle">Choose the type of area you want to monitor</p>
        <div className="options-grid">
          <button className="option-button" onClick={() => navigate('/prohibited-area')}>
            Prohibited Area
          </button>
          <button className="option-button" onClick={() => navigate('/strictly-prohibited-area')}>
            Strictly Prohibited Area
          </button>
        </div>
        <button className="back-button" onClick={() => navigate('/')}>
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default OptionsPage;