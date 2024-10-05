// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

import M3logo from '../pictures/M3logo.png';

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <img src={M3logo} alt="SecureZone Logo" className="logo" />
        <nav>
          <Link to="/login" className="nav-button">Log In</Link>
          <Link to="/signup" className="nav-button primary">Sign Up</Link>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h1>Welcome to M3</h1>
          <p>Advanced AI-powered surveillance for your most sensitive areas</p>
          <Link to="/signup" className="cta-button">Get Started</Link>
        </section>
        <section className="features">
          <h2>Our Services</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <img src="/prohibited-icon.png" alt="Prohibited Area Monitoring" />
              <h3>Prohibited Area Monitoring</h3>
              <p>Detect and alert for unauthorized access in restricted zones</p>
            </div>
            <div className="feature-card">
              <img src="/strictly-prohibited-icon.png" alt="Strictly Prohibited Area Monitoring" />
              <h3>Strictly Prohibited Area Monitoring</h3>
              <p>Immediate alarm triggering for high-security areas</p>
            </div>
            <div className="feature-card">
              <img src="/ai-icon.png" alt="AI-Powered Analysis" />
              <h3>AI-Powered Analysis</h3>
              <p>Advanced algorithms for accurate threat detection</p>
            </div>
          </div>
        </section>
        <section className="about">
          <h2>About SecureZone</h2>
          <p>SecureZone is a leading provider of AI-powered surveillance solutions. Our cutting-edge technology ensures the highest level of security for your sensitive areas, giving you peace of mind 24/7.</p>
        </section>
        <section className="contact">
          <h2>Contact Us</h2>
          <p>Need help? Our support team is available 24/7.</p>
          <p>Email: support@securezone.com</p>
          <p>Phone: 1-800-SECURE-Z</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 SecureZone. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;