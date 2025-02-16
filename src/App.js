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
import UploadPage from "./components/UploadPage.jsx"; // Import UploadPage

 

function App() {
  return (
    <div className="app-container">
      <Routes>
        {/* Authentication Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

      {/* Protected Admin Route
      <Route element={<ProtectedRoute user={user} />}>
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Route>   */}

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

        <Route
          path="/upload"
          element={
            <>
              <Navbar />
              <Sidebar />
              <UploadPage />
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
        {/* <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/music" element={<MusicPage />} />
        <Route path="/upload" element={<UploadPage />} /> */}
        

        {/* Redirect unknown routes to login */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
