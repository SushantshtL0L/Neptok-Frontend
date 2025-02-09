import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Login from "./Neptok/Login.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./Neptok/Signup.jsx";
import Home from "./components/Home.jsx";
import Explore from "./components/Explore.jsx";
import ProfilePage from "./components/ProfilePage.jsx";
import Sidebar from "./components/Sidebar.jsx";
import MusicPage from "./components/MusicPage.jsx"; // Import the MusicPage component

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
              <Sidebar />
              <Home />
            </>
          }
        />

        <Route
          path="/explore"
          element={
            <>
              <Sidebar />
              <Explore />
            </>
          }
        />

        <Route
          path="/profile"
          element={
            <>
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
