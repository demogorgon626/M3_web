// src/components/HomePage.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../App.css';

// import M3logo from '../pictures/M3logo.png';

// const HomePage = () => {
//   return (
//     <div className="home-container">
//       <header className="home-header">
//         <img src={M3logo} alt="SecureZone Logo" className="logo" />
//         <nav>
//           <Link to="/login" className="nav-button">Log In</Link>
//           <Link to="/signup" className="nav-button primary">Sign Up</Link>
//         </nav>
//       </header>
//       <main>
//         <section className="hero">
//           <h1>Welcome to M3</h1>
//           <p>Advanced AI-powered surveillance for your most sensitive areas</p>
//           <Link to="/signup" className="cta-button">Get Started</Link>
//         </section>
//         <section className="features">
//           <h2>Our Services</h2>
//           <div className="feature-grid">
//             <div className="feature-card">
//               <img src="/prohibited-icon.png" alt="Prohibited Area Monitoring" />
//               <h3>Prohibited Area Monitoring</h3>
//               <p>Detect and alert for unauthorized access in restricted zones</p>
//             </div>
//             <div className="feature-card">
//               <img src="/strictly-prohibited-icon.png" alt="Strictly Prohibited Area Monitoring" />
//               <h3>Strictly Prohibited Area Monitoring</h3>
//               <p>Immediate alarm triggering for high-security areas</p>
//             </div>
//             <div className="feature-card">
//               <img src="/ai-icon.png" alt="AI-Powered Analysis" />
//               <h3>AI-Powered Analysis</h3>
//               <p>Advanced algorithms for accurate threat detection</p>
//             </div>
//           </div>
//         </section>
//         <section className="about">
//           <h2>About SecureZone</h2>
//           <p>SecureZone is a leading provider of AI-powered surveillance solutions. Our cutting-edge technology ensures the highest level of security for your sensitive areas, giving you peace of mind 24/7.</p>
//         </section>
//         <section className="contact">
//           <h2>Contact Us</h2>
//           <p>Need help? Our support team is available 24/7.</p>
//           <p>Email: support@securezone.com</p>
//           <p>Phone: 1-800-SECURE-Z</p>
//         </section>
//       </main>
//       <footer>
//         <p>&copy; 2024 SecureZone. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;




import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import M3logo from '../pictures/M3logo.png';

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Responsive Navigation Bar */}
      <header className="navbar">
        <div className="logo-container">
          <img src={M3logo} alt="SecureZone Logo" className="logo" />
        </div>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/login" className="nav-button">Log In</Link>
          <Link to="/signup" className="nav-button primary">Sign Up</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main>
        <section className="hero">
          <div className="hero-content fade-in">
            <h1>Welcome to M3</h1>
            <p>Your AI-powered surveillance solution for restricted zones</p>
            <Link to="/signup" className="cta-button slide-up">Get Started</Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          <h2 className="section-title">Our Services</h2>
          <div className="feature-grid">
            <div className="feature-card hover-grow">
              <img src="/prohibited-icon.png" alt="Prohibited Area Monitoring" />
              <h3>Prohibited Area Monitoring</h3>
              <p>Real-time alerts for unauthorized access in prohibited areas.</p>
            </div>
            <div className="feature-card hover-grow">
              <img src="/strictly-prohibited-icon.png" alt="Strictly Prohibited Area Monitoring" />
              <h3>Strictly Prohibited Area Monitoring</h3>
              <p>Instant alarms for human detection in high-security zones.</p>
            </div>
            <div className="feature-card hover-grow">
              <img src="/ai-icon.png" alt="AI-Powered Analysis" />
              <h3>AI-Powered Analysis</h3>
              <p>Cutting-edge neural networks for highly accurate threat detection.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; 2024 SecureZone. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default HomePage;

