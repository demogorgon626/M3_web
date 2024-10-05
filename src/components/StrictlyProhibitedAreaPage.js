// src/components/StrictlyProhibitedAreaPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const StrictlyProhibitedAreaPage = () => {
  const [video, setVideo] = useState(null);
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleUpload = (e) => {
    const file = e.target.files[0];
    setVideo(file);
    setIsLoading(true);
    setResult('');

    // Simulate video processing
    setTimeout(() => {
      setIsLoading(false);
      setResult('Human detected! Alarm triggered!');
    }, 2000);
  };

  return (
    <div className="container">
      <div className="upload-card">
        <h1 className="title">Strictly Prohibited Area Monitoring</h1>
        <p className="subtitle">Upload a video for immediate analysis</p>
        <div className="upload-area">
          <input
            type="file"
            id="video-upload"
            accept="video/*"
            onChange={handleUpload}
            className="file-input"
          />
          <label htmlFor="video-upload" className="file-label">
            {video ? video.name : 'Choose a video file'}
          </label>
        </div>
        {isLoading && <div className="loader">Analyzing video...</div>}
        {result && <div className="result alert">{result}</div>}
        <div className="button-group">
          <button className="secondary-button" onClick={() => navigate('/options')}>
            Back to Options
          </button>
          <button className="primary-button" disabled={!video || isLoading}>
            {isLoading ? 'Processing...' : 'Analyze Video'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StrictlyProhibitedAreaPage;