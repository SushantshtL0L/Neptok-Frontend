import React from 'react';
import "../Styles/Profile.css";

const ProfileHeader = () => {
  // Example stats (can be fetched from an API or state)
  const profileStats = {
    followers: 1000,
    following: 500,
    likes: 12000,
  };

  return (
    <div className="profile-header">
      <img src="https://via.placeholder.com/150" alt="Profile" className="profile-pic" />
      <h1 className="username">@username</h1>
      <p className="bio">This is a sample bio for the TikTok profile.</p>

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