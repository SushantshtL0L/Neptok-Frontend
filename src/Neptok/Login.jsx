import React, { useState, useEffect } from "react";
import "./Login.css"; // Import the updated CSS file

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    alert(`Logged in as ${username}`);
  };

  // 🌟 Generate Floating Particles
  useEffect(() => {
    const container = document.querySelector(".particles");
    if (!container) return;

    for (let i = 0; i < 20; i++) {
      const particle = document.createElement("span");
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      particle.style.animationDuration = `${Math.random() * 8 + 2}s`;
      particle.style.width = `${Math.random() * 5 + 5}px`;
      particle.style.height = `${Math.random() * 5 + 5}px`;
      container.appendChild(particle);
    }
  }, []);

  return (
    <div className="login-container">
      {/* 🔥 Dark Animated Background */}
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
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            required
          />

          <button type="submit" className="login-button">
            Log In
          </button>
        </form>

        <a href="#" className="login-link">
          Forgot Password?
        </a>

        <p className="login-signup-text">
          Don't have an account?{" "}
          <a href="#" className="login-signup-link">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;


