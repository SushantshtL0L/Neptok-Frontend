import React from 'react';
import "../Styles/Profile.css";
import profile from "../Assest/Profile.png";

const ProfileHeader = () => {
  // Example stats (can be fetched from an API or state)
  const profileStats = {
    followers: 10,
    following: 5,
    likes: 120,
  };

  return (
    <div className="profile-header">
      <img src={profile} alt="Profile.png" className="profile-pic" />
      <h1 className="username">Hari Bahadur</h1>
      <p className="bio">Welcome to my profile my name is hari bahadur</p>

      {/* Stats Section */}
      <div className="stats">
        <div className="stat-item">
          <span className="stat-number">{profileStats.followers}</span>
          <span className="stat-label">Followers</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{profileStats.following}</span>
          <span className="stat-label">Following</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{profileStats.likes}</span>
          <span className="stat-label">Likes</span>
        </div>
      </div>

      <button className="edit-profile-btn">Edit Profile</button>
    </div>
  );
};

export default ProfileHeader;