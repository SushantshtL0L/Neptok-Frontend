// import React, { useState, useEffect } from "react";
// import { Link, useNavigate} from "react-router-dom"; // Import Link for routing
// import "./Signup.css"; // Import the CSS file
// import logo from "../Assest/Logo.png";
// import api from "../Api";

// const Signup = () => {
//   const [username, setUsername] = useState("");
  
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
  

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     if (!username || !password || !confirmPassword) {
//       setError("Please fill in all fields.");
//       return;
//     }
  
//     if (password !== confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }
  
//     setError("");
  
//     const trimmedUsername = username.trim();
//     const trimmedPassword = password.trim();
//     const trimmedConfirmPassword = confirmPassword.trim();
//     const payload = {
//       name: trimmedUsername,
//       password: trimmedPassword,
//       confirmPassword: trimmedConfirmPassword
//     };
  
//     try {
//       console.log('Full URL:', api.defaults.baseURL + '/users/add');
//       console.log('Request Payload:', payload);
//       const response = await api.post("/users/add", payload);
  
//       if (response.status === 200 || response.status === 201) {
//         alert("Signup successful!");
//         navigate("/login");
//       } else {
//         setError(response.data.message || "Signup failed");
//       }
//     } catch (error) {
//       console.error("Server Response:", error.response?.data);
//       console.error("Request Sent:", error.config);
//       setError(error.response?.data?.message || "Error connecting to the server");
//     }
//   };
  

//   useEffect(() => {
//     const container = document.querySelector(".particles");
//     if (!container) return;

//     for (let i = 0; i < 20; i++) {
//       const particle = document.createElement("span");
//       particle.style.left = `${Math.random() * 100}vw`;
//       particle.style.top = `${Math.random() * 100}vh`;
//       particle.style.animationDuration = `${Math.random() * 8 + 2}s`;
//       particle.style.width = `${Math.random() * 5 + 5}px`;
//       particle.style.height = `${Math.random() * 5 + 5}px`;
//       container.appendChild(particle);
//     }
//   }, []);

//   return (
//     <>

//       <div className="neptok-logo">
//             <img src={logo} alt="Neptok Logo" className="logo-image" />
//             <span className="logo-text">Neptok</span>
//           </div>
    
//     <div className="signup-container">
      
//       <div className="animated-bg"></div>
//       <div className="particles"></div>

//       <div className="signup-card">
//         <h1 className="signup-title">Neptok</h1>
//         <p className="signup-subtitle">Create your account</p>

//         {error && <p className="signup-error">{error}</p>}

//         <form onSubmit={handleSubmit} className="signup-form">
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="signup-input"
//             required
//           />
          
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="signup-input"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             className="signup-input"
//             required
//           />
//           <button type="submit" className="signup-button">
//             Sign Up
//           </button>
//         </form>

//         {/* Linking */}
//         <p className="signup-login-text">
//           Already have an account?{" "}
//           <Link to="/login" className="signup-login-link">
//             Log In
//           </Link>
//         </p>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Signup;
import React, { useState, useEffect } from "react";
import { Link, useNavigate} from "react-router-dom"; // Import Link for routing
import "./Signup.css"; // Import the CSS file
import logo from "../Assest/Logo.png";
import api from "../Api";

const Signup = () => {
  const [username, setUsername] = useState("");
  
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!username || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
  
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
  
    setError("");
  
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();
    const trimmedConfirmPassword = confirmPassword.trim();
    const payload = {
      name: trimmedUsername,
      password: trimmedPassword,
      confirmPassword: trimmedConfirmPassword
    };
  
    try {
      console.log('Full URL:', api.defaults.baseURL + '/users/add');
      console.log('Request Payload:', payload);
      const response = await api.post("/users/add", payload);
  
      if (response.status === 200 || response.status === 201) {
        alert("Signup successful!");
        navigate("/login");
      } else {
        setError(response.data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Server Response:", error.response?.data);
      console.error("Request Sent:", error.config);
      setError(error.response?.data?.message || "Error connecting to the server");
    }
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
    <>

      <div className="neptok-logo">
            <img src={logo} alt="Neptok Logo" className="logo-image" />
            <span className="logo-text">Neptok</span>
          </div>
    
    <div className="signup-container">
      
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

        {/* Linking */}
        <p className="signup-login-text">
          Already have an account?{" "}
          <Link to="/login" className="signup-login-link">
            Log In
          </Link>
        </p>
      </div>
    </div>
    </>
  );
};

export default Signup;


