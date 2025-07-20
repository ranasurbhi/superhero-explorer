import React, { useState } from 'react';
import './Auth.css';

const Auth = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [signupData, setSignupData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleFlip = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Flip clicked, current state:', isFlipped);
    setIsFlipped(prevState => !prevState);
  };

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignupChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', loginData);
    // Add your login logic here
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log('Signup:', signupData);
    // Add your signup logic here
  };

  return (
    <div className="auth-page">
      <div className="auth-background"></div>
      
      <div className="auth-container">
        <div className={`auth-card ${isFlipped ? 'flipped' : ''}`}>
          
          {/* Login Side */}
          <div className="auth-side login-side">
            <div className="auth-content">
              <div className="auth-header">
                <h2 className="auth-title">Welcome Back</h2>
                <p className="auth-subtitle">Sign in to your superhero account</p>
              </div>

              <form onSubmit={handleLoginSubmit} className="auth-form">
                <div className="input-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={loginData.email}
                    onChange={handleLoginChange}
                    required
                  />
                  <span className="input-highlight"></span>
                </div>

                <div className="input-group">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={handleLoginChange}
                    required
                  />
                  <span className="input-highlight"></span>
                </div>

                <div className="auth-options">
                  <label className="checkbox-container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Remember me
                  </label>
                  <a href="#" className="forgot-link">Forgot Password?</a>
                </div>

                <button type="submit" className="auth-button primary">
                  <span>Sign In</span>
                  <div className="button-glow"></div>
                </button>
              </form>

              <div className="auth-switch">
                <p>Don't have an account?</p>
                <button 
                  type="button"
                  onClick={handleFlip} 
                  className="switch-button"
                >
                  Create Account
                </button>
              </div>
            </div>
          </div>

          {/* Signup Side */}
          <div className="auth-side signup-side">
            <div className="auth-content">
              <div className="auth-header">
                <h2 className="auth-title">Join the Heroes</h2>
                <p className="auth-subtitle">Create your superhero account</p>
              </div>

              <form onSubmit={handleSignupSubmit} className="auth-form">
                <div className="input-group">
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={signupData.username}
                    onChange={handleSignupChange}
                    required
                  />
                  <span className="input-highlight"></span>
                </div>

                <div className="input-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={signupData.email}
                    onChange={handleSignupChange}
                    required
                  />
                  <span className="input-highlight"></span>
                </div>

                <div className="input-group">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={signupData.password}
                    onChange={handleSignupChange}
                    required
                  />
                  <span className="input-highlight"></span>
                </div>

                <div className="input-group">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={signupData.confirmPassword}
                    onChange={handleSignupChange}
                    required
                  />
                  <span className="input-highlight"></span>
                </div>

                <div className="auth-options">
                  <label className="checkbox-container">
                    <input type="checkbox" required />
                    <span className="checkmark"></span>
                    I agree to the Terms & Conditions
                  </label>
                </div>

                <button type="submit" className="auth-button primary">
                  <span>Create Account</span>
                  <div className="button-glow"></div>
                </button>
              </form>

              <div className="auth-switch">
                <p>Already have an account?</p>
                <button 
                  type="button"
                  onClick={handleFlip} 
                  className="switch-button"
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="auth-decoration">
            <div className="floating-orb orb-1"></div>
            <div className="floating-orb orb-2"></div>
            <div className="floating-orb orb-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
