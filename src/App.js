// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoginPage from './components/LoginPage';
// import OptionsPage from './components/OptionsPage';
// import ProhibitedAreaPage from './components/ProhibitedAreaPage';
// import StrictlyProhibitedAreaPage from './components/StrictlyProhibitedAreaPage';
// import './App.css'; // Import global styles

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/options" element={<OptionsPage />} />
//         <Route path="/prohibited-area" element={<ProhibitedAreaPage />} />
//         <Route path="/strictly-prohibited-area" element={<StrictlyProhibitedAreaPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignUpPage';
import OptionsPage from './components/OptionsPage';
import ProhibitedAreaPage from './components/ProhibitedAreaPage';
import StrictlyProhibitedAreaPage from './components/StrictlyProhibitedAreaPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/options" element={<OptionsPage />} />
          <Route path="/prohibited-area" element={<ProhibitedAreaPage />} />
          <Route path="/strictly-prohibited-area" element={<StrictlyProhibitedAreaPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;