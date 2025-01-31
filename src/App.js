import { Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./Neptok/Login.jsx";  // Adjusted import path
import SignUp from "./Neptok/Signup.jsx";  // Adjusted import path

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;