import React, { useState, useEffect } from "react";
import "./Login.css"; 
import { Link } from "react-router-dom";
import logo from "../Assest/Logo.png"; 

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    alert(`Logged in as ${username}`);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  // Generate Floating Particles
  useEffect(() => {
    const container = document.querySelector(".particles");
    if (!container) return;

    const particles = [];
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement("span");
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      particle.style.animationDuration = `${Math.random() * 8 + 2}s`;
      particle.style.width = `${Math.random() * 5 + 5}px`;
      particle.style.height = `${Math.random() * 5 + 5}px`;
      container.appendChild(particle);
      particles.push(particle);
    }

    // Cleanup particles on unmount
    return () => {
      particles.forEach((particle) => particle.remove());
    };
  }, []);

  return (
    <>
      
      <div className="neptok-logo">
        <img src={logo} alt="Logo.png" className="logo-image" />
        <span className="logo-text">Neptok</span>
      </div>

      
      <div className="login-container">
        
        <div className="animated-bg"></div>
        <div className="particles"></div>

        <div className="login-card">
          <h1 className="login-title">Neptok</h1>
          <p className="login-subtitle">Welcome back! Please log in.</p>

          {error && <p className="login-error">{error}</p>}

          <form onSubmit={handleSubmit} className="login-form">
            <input
              type="text"
              placeholder="Username or Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="login-input"
              required
              aria-label="Username or Email"
            />

            <div className="password-container">
              <input
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
                required
                aria-label="Password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="eye-button"
                aria-label={isPasswordVisible ? "Hide password" : "Show password"}
              >
                {isPasswordVisible ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>

            <Link to="/home">
              <button type="submit" className="login-button">
                Log In
              </button>
            </Link>
          </form>

          <a href="#" className="login-link">
            Forgot Password?
          </a>

          <p className="login-signup-text">
            Don't have an account?{" "}
            <Link to="/signup" className="login-signup-link">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;