import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';

// Import the logo image from the pictures folder
import M3logo from '../pictures/M3logo.png';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    // Here you would typically send the signup data to your backend
    console.log('Signup:', { username, email, password });
    // For now, we'll just redirect to the login page
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <div className="auth-card">
        {/* Display the logo */}
        <div className="logo-container">
          <img src={M3logo} alt="Company Logo" className="signup-logo" />
        </div>
        <h1 className="title">Create an Account</h1>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm your password"
            />
          </div>
          <button type="submit" className="button">Sign Up</button>
        </form>
        <p className="auth-link">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;



// src/components/SignupPage.js
// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import '../App.css';

// const SignupPage = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSignup = (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       alert("Passwords don't match");
//       return;
//     }
//     // Here you would typically send the signup data to your backend
//     console.log('Signup:', { username, email, password });
//     // For now, we'll just redirect to the login page
//     navigate('/login');
//   };

//   return (
//     <div className="container">
//       <div className="auth-card">
//         <img src="/logo.png" alt="Logo" className="logo" />
//         <h1 className="title">Create an Account</h1>
//         <form onSubmit={handleSignup}>
//           <div className="form-group">
//             <label htmlFor="username">Username</label>
//             <input
//               id="username"
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//           <label htmlFor="email">Email</label>
//             <input
//               id="email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               id="password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="confirmPassword">Confirm Password</label>
//             <input
//               id="confirmPassword"
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="button">Sign Up</button>
//         </form>
//         <p className="auth-link">
//           Already have an account? <Link to="/login">Log in</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignupPage;