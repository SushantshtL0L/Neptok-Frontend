import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios
import "../Styles/EditProfile.css";

const EditProfile = ({ userId, initialData, onSave, onClose }) => {
  const [name, setName] = useState(initialData.name);
  const [bio, setBio] = useState(initialData.bio);

  // Update the profile via the backend when saving
  const handleSave = async () => {
    if (!name && !bio) {
      alert("Please enter either a name or a bio to save changes.");
      return;
    }

    try {
      const response = await axios.put('http://localhost:5000/api/profile', {
        username: userId,  // Send username as part of the body
        name,
        bio,
      });

      if (response.data.success) {
        onSave({ name, bio }); // Call onSave to update the parent component
        onClose(); // Close the modal after saving
      } else {
        console.error("Error updating profile:", response.data.message);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("There was an error updating the profile.");
    }
  };

  return (
    <div className="edit-profile-container">
      <h2 className="edit-profile-title">Edit Profile</h2>
      <input
        type="text"
        placeholder="Change Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="edit-profile-input"
      />
      <textarea
        placeholder="Change Bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        className="edit-profile-textarea"
      />
      <button onClick={handleSave} className="save-btn">
        Save Changes
      </button>
      <button onClick={onClose} className="cancel-btn">
        Cancel
      </button>
    </div>
  );
};

export default EditProfile;
