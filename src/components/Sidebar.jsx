import React from "react";
import { FaHome, FaCompass, FaMusic, FaUpload, FaUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import "../Styles/Sidebar.css";

const Sidebar = () => {
  const location = useLocation();

  const hiddenRoutes = ["/login", "/signup"];
  if (hiddenRoutes.includes(location.pathname)) {
    return null;
  }

  return (
    <div className="sidebar">
      {/* Search Box */}
      <div className="search-box">
        <FiSearch className="search-icon" />
        <input type="text" placeholder="Search" className="search-input" />
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="nav-list">
          <li className={location.pathname === "/home" ? "active" : ""}>
            <Link to="/home">
              <FaHome className="nav-icon" /> Home
            </Link>
          </li>

          <li className={location.pathname === "/music" ? "active" : ""}>
            <Link to="/music">
              <FaMusic className="nav-icon" /> Music
            </Link>
          </li>

          <li className={location.pathname === "/upload" ? "active" : ""}>
            <Link to="/upload">
              <FaUpload className="nav-icon" /> Upload
            </Link>
          </li>

          <li className={location.pathname === "/profile" ? "active" : ""}>
            <Link to="/profile">
              <FaUser className="nav-icon" /> Profile
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;