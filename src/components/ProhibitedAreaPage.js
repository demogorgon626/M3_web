// src/components/ProhibitedAreaPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const ProhibitedAreaPage = () => {
  const [video, setVideo] = useState(null);
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Handle video file upload
  const handleUpload = (e) => {
    const file = e.target.files[0];
    setVideo(file);
    setResult('');  // Clear the result when a new video is uploaded
  };

  // Handle the video analysis when "Analyze Video" button is clicked
  const handleAnalyze = () => {
    if (!video) return; // Do nothing if no video is uploaded

    setIsLoading(true);
    setResult('');

    // Simulate video processing
    setTimeout(() => {
      setIsLoading(false);
      setResult('Human detected, no suspicious activity.');
    }, 2000);
  };

  return (
    <div className="container prohibited-area-container">
      <div className="upload-card">
        <h1 className="title">Prohibited Area Monitoring</h1>
        <p className="subtitle">Upload a video for analysis</p>

        {/* Video Upload Section */}
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

        {/* Video Preview */}
        {video && (
          <div className="video-preview">
            <video controls width="100%" height="auto">
              <source src={URL.createObjectURL(video)} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        {/* Loading and Result Section */}
        {isLoading && <div className="loader">Analyzing video...</div>}
        {result && <div className="result">{result}</div>}

        {/* Buttons */}
        <div className="button-group">
          <button className="secondary-button" onClick={() => navigate('/options')}>
            Back to Options
          </button>
          <button
            className="primary-button"
            disabled={!video || isLoading}
            onClick={handleAnalyze}
          >
            {isLoading ? 'Processing...' : 'Analyze Video'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProhibitedAreaPage;




// src/components/ProhibitedAreaPage.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../App.css';

// const ProhibitedAreaPage = () => {
//   const [video, setVideo] = useState(null);
//   const [result, setResult] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleUpload = (e) => {
//     const file = e.target.files[0];
//     setVideo(file);
//     setIsLoading(true);
//     setResult('');

//     // Simulate video processing
//     setTimeout(() => {
//       setIsLoading(false);
//       setResult('Human detected, no suspicious activity.');
//     }, 2000);
//   };

//   return (
//     <div className="container">
//       <div className="upload-card">
//         <h1 className="title">Prohibited Area Monitoring</h1>
//         <p className="subtitle">Upload a video for analysis</p>
//         <div className="upload-area">
//           <input
//             type="file"
//             id="video-upload"
//             accept="video/*"
//             onChange={handleUpload}
//             className="file-input"
//           />
//           <label htmlFor="video-upload" className="file-label">
//             {video ? video.name : 'Choose a video file'}
//           </label>
//         </div>
//         {isLoading && <div className="loader">Analyzing video...</div>}
//         {result && <div className="result">{result}</div>}
//         <div className="button-group">
//           <button className="secondary-button" onClick={() => navigate('/options')}>
//             Back to Options
//           </button>
//           <button className="primary-button" disabled={!video || isLoading}>
//             {isLoading ? 'Processing...' : 'Analyze Video'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProhibitedAreaPage;