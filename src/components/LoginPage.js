import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';



// Import images from the src/pictures folder
import M3logo from '../pictures/M3logo.png';
import googleIcon from '../pictures/google-icon.png';
import facebookIcon from '../pictures/facebook-icon.png';
import twitterIcon from '../pictures/twitter-icon.png';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@gmail.com' && password === 'password') {
      navigate('/options');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Display the logo */}
        <div className="logo-container">
          <img src={M3logo} alt="SecureZone Logo" className="logo" />
        </div>
        <h1 className="login-title">Welcome</h1>
        <form onSubmit={handleLogin} className="login-form">
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
          <div className="form-group remember-me">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember me
            </label>
          </div>
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>

        {/* Forgot password link */}
        <div className="forgot-password">
          <a href="/forgot-password">Forgot your password?</a>
        </div>

        {/* Social login options */}
        <div className="divider">
          <span>or</span>
        </div>
        <div className="social-login">
          <button className="social-button">
            <img src={googleIcon} alt="Google" />
          </button>
          <button className="social-button">
            <img src={facebookIcon} alt="Facebook" />
          </button>
          <button className="social-button">
            <img src={twitterIcon} alt="Twitter" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;



// // src/components/LoginPage.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../App.css';

// // Import images from the src/pictures folder
// import M3logo from '../pictures/M3logo.png';
// import googleIcon from '../pictures/google-icon.png';
// import facebookIcon from '../pictures/facebook-icon.png';
// import twitterIcon from '../pictures/twitter-icon.png';

// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username === 'admin' && password === 'password') {
//       navigate('/options');
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div className="container">
//       <div className="login-card">
//         <div className="logo">
//           {/* Use the imported image for the logo */}
//           <img src={M3logo} alt="Company Logo" />
//         </div>
//         <h1 className="title">Welcome</h1>
//         <form onSubmit={handleLogin}>
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
//             <label>
//               <input
//                 type="checkbox"
//                 checked={rememberMe}
//                 onChange={(e) => setRememberMe(e.target.checked)}
//               />
//               Remember me
//             </label>
//           </div>
//           <button type="submit" className="button">
//             Log In
//           </button>
//         </form>
//         <div className="forgot-password">
//           <a href="/forgot-password">Forgot your password?</a>
//         </div>
//         <div className="divider">
//           <span>or</span>
//         </div>
//         <div className="social-login">
//           <button className="social-button">
//             {/* Use the imported Google icon */}
//             <img src={googleIcon} alt="Google" />
//           </button>
//           <button className="social-button">
//             {/* Use the imported Facebook icon */}
//             <img src={facebookIcon} alt="Facebook" />
//           </button>
//           <button className="social-button">
//             {/* Use the imported Twitter icon */}
//             <img src={twitterIcon} alt="Twitter" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;