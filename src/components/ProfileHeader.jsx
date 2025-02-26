import React, { useState, useEffect } from "react";
import "../Styles/Profile.css";
import profile from "../Assest/Profile.png";
import EditProfile from "./EditProfile"; // Import the EditProfile component
import axios from "axios"; // Import axios for API calls

const ProfileHeader = ({ username }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // State for modal visibility
  const [profileData, setProfileData] = useState({
    name: "Hari Bahadur",
    bio: "Welcome to my profile my name is Hari Bahadur",
    followers: 10,
    following: 5,
    likes: 120,
  });

  // Fetch the profile data when the component mounts (optional)
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/profile/${balkumari}`);
        setProfileData(response.data.profile); // Assuming the profile data is under 'profile' in the response
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfile();
  }, [username]);

  // Update profile data after save
  const handleProfileUpdate = (updatedProfile) => {
    setProfileData((prevData) => ({
      ...prevData,
      ...updatedProfile, // Merge updated profile data
    }));
  };

  return (
    <div className="profile-header">
      <img src={profile} alt="Profile" className="profile-pic" />
      <h1 className="username">{profileData.name}</h1>
      <p className="bio">{profileData.bio}</p>

      {/* Stats Section */}
      <div className="stats">
        <div className="stat-item">
          <span className="stat-number">{profileData.followers}</span>
          <span className="stat-label">Followers</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{profileData.following}</span>
          <span className="stat-label">Following</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{profileData.likes}</span>
          <span className="stat-label">Likes</span>
        </div>
      </div>

      {/* Edit Profile Button */}
      <button
        className="edit-profile-btn"
        onClick={() => setIsEditModalOpen(true)} // Open the modal
      >
        Edit Profile
      </button>

      {/* Render the EditProfile form as a modal */}
      {isEditModalOpen && (
        <div className="modal-overlay">
          <EditProfile
            username={username} // Pass username to EditProfile for profile update
            initialData={profileData} // Pass initial profile data to EditProfile
            onSave={handleProfileUpdate} // Pass the handler to update profile
            onClose={() => setIsEditModalOpen(false)} // Close the modal
          />
        </div>
      )}
    </div>
  );
};

export default ProfileHeader;
