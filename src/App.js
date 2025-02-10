import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Login from "./Neptok/Login.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./Neptok/Signup.jsx";
import Home from "./components/Home.jsx";
import Explore from "./components/Explore.jsx";
import ProfilePage from "./components/ProfilePage.jsx";
import Sidebar from "./components/Sidebar.jsx";
import MusicPage from "./components/MusicPage.jsx"; 
import Navbar from "./components/Navbar.jsx"; 
 

function App() {
  return (
    <div className="app-container">
      <Routes>
        {/* Authentication Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Main Routes with Sidebar */}
        <Route
          path="/home"
          element={
            <>
              <Navbar/>
              <Sidebar />
              <Home />
            </>
          }
        />

        <Route
          path="/explore"
          element={
            <>
              <Navbar/>
              <Sidebar />
              <Explore />
            </>
          }
        />

        <Route
          path="/profile"
          element={
            <>
              <Navbar/>
              <Sidebar />
              <ProfilePage />
            </>
          }
        />

        {/* Music Page Route with Sidebar */}
        <Route
          path="/music"
          element={
            <>
              <Navbar/>
              <Sidebar />
              <MusicPage />
            </>
          }
        />

        {/* Additional Routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/music" element={<MusicPage />} />

        {/* Redirect unknown routes to login */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
