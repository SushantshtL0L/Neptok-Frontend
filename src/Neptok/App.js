import logo from './logo.svg';
import './Login.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./Login"; // Import the Login component
import SignUp from "./SignUp"; // Import the Signup component

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        Define Routes
        <Routes>
          <Route path="/ogin" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          {/* Add a default route to redirect to Login */}
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;