import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/VideoGrid.css";
import { FaTrash } from "react-icons/fa"; // Import delete icon

const VideoGrid = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/videos/video-list'); // Update with your backend URL
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };
    fetchVideos();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this video?')) {
      try {
        await axios.delete(`http://localhost:5000/api/videos/delete/${id}`);
        // Remove the deleted video from state
        setVideos(videos.filter(video => video.id !== id));
      } catch (error) {
        console.error('Error deleting video:', error);
        alert('Failed to delete video. Please try again.');
      }
    }
  };

  return (
    <div className="video-grid">
      {videos.length > 0 ? (
        videos.map((video, index) => (
          <div key={index} className="video-item">
            <video
              id={video.id}
              className="video-player"
              src={`http://localhost:5000${video.video_url}`}
              poster="https://via.placeholder.com/150"
              controls
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="video-info">
              <h3>{video.description}</h3>
              <span className="views">{video.size} bytes</span>
              <button
                className="delete-button"
                onClick={() => handleDelete(video.id)}
                style={{
                  marginTop: "15px",
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <FaTrash /> Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Loading videos...</p>
      )}
    </div>
  );
};

export default VideoGrid;
