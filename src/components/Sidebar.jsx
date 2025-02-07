import React from "react";
import { FaHome, FaCompass, FaUser, FaUpload } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom"; 

const Sidebar = () => {
  const location = useLocation(); 


  const hiddenRoutes = ["/login", "/signup"];
  if (hiddenRoutes.includes(location.pathname)) {
    return null;
  }

  return (
    <div className="sidebar">
      <div className="search-box">
        <FiSearch className="search-icon" />
        <input type="text" placeholder="Search" className="search-input" />
      </div>
      <nav>
        <ul className="nav-list">
          <li className={location.pathname === "/home" ? "active" : ""}>
            <Link to="/home">
              <FaHome className="nav-icon" /> Home
            </Link>
          </li>
          <li className={location.pathname === "/explore" ? "active" : ""}>
            <Link to="/explore">
              <FaCompass className="nav-icon" /> Explore
            </Link>
          </li>
          <li>
            <FaUser className="nav-icon" /> Music
          </li>
          <li>
            <FaUpload className="nav-icon" /> Upload
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
