import React, { useState } from "react";
import { FaUpload, FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../Styles/UploadPage.css";

const UploadPage = () => {
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const videoURL = URL.createObjectURL(file);
      setVideos([...videos, videoURL]);
      navigate("/upload"); // Navigate to UploadPage
    }
  };

  const triggerFileInput = () => {
    document.getElementById("fileInput").click(); // Trigger the file input click
  };

  return (
    <div className="upload-page">
      <button className="upload-button" onClick={triggerFileInput}>
        <FaUpload /> Upload
      </button>

      {/* Hidden file input that is triggered by the button click */}
      <input
        id="fileInput"
        type="file"
        accept="video/*"
        className="hidden"
        onChange={handleUpload}
      />

      <div className="video-container">
        {videos.map((video, index) => (
          <div key={index} className="video-wrapper">
            <video src={video} controls className="video-player" />
            <div className="play-icon">
              <FaPlay />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadPage;
