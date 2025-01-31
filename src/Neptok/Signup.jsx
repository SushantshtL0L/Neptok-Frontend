import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import "./Signup.css"; // Import the CSS file

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    alert(`Signed up as ${username}`);
  };

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
    <div className="signup-container">
      {/* Dark Animated Background */}
      <div className="animated-bg"></div>
      <div className="particles"></div>

      <div className="signup-card">
        <h1 className="signup-title">Neptok</h1>
        <p className="signup-subtitle">Create your account</p>

        {error && <p className="signup-error">{error}</p>}

        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="signup-input"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="signup-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signup-input"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="signup-input"
            required
          />
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>

        {/* Add the 'Link' component for routing to the login page */}
        <p className="signup-login-text">
          Already have an account?{" "}
          <Link to="/login" className="signup-login-link">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

