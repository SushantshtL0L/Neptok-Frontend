// import React, { useState } from "react";
// import { FaUpload, FaPlay } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import "../Styles/UploadPage.css";

// const UploadPage = () => {
//   const [videos, setVideos] = useState([]);
//   const navigate = useNavigate();

//   const handleUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const videoURL = URL.createObjectURL(file);
//       setVideos([...videos, videoURL]);
//       navigate("/upload"); // Navigate to UploadPage
//     }
//   };

//   const triggerFileInput = () => {
//     document.getElementById("fileInput").click(); // Trigger the file input click
//   };

//   return (
//     <div className="upload-page">
//       <button className="upload-button" onClick={triggerFileInput}>
//         <FaUpload /> Upload
//       </button>

//       {/* Hidden file input that is triggered by the button click */}
//       <input
//         id="fileInput"
//         type="file"
//         accept="video/*"
//         className="hidden"
//         onChange={handleUpload}
//       />

//       <div className="video-container">
//         {videos.map((video, index) => (
//           <div key={index} className="video-wrapper">
//             <video src={video} controls className="video-player" />
//             <div className="play-icon">
//               <FaPlay />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UploadPage;










// import React, { useState } from "react";
// import { FaUpload } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "../Styles/UploadPage.css";

// const UploadPage = () => {
//   const [uploadStatus, setUploadStatus] = useState(""); // to show upload status
//   const navigate = useNavigate();

  // const handleUpload = async (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     // Create a local preview URL
  //     const videoURL = URL.createObjectURL(file);

  //     const formData = new FormData();
  //     formData.append("video", file);
  //     formData.append("userId", "1"); // Replace with actual user ID from authentication

  //     try {
  //       setUploadStatus("Uploading...");

  //       // Send the video file to the backend
  //       const response = await axios.post("http://localhost:5000/upload", formData, {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       });

  //       // On successful upload, set the status and navigate
  //       if (response.data) {
  //         setUploadStatus("Upload successful!");
  //         console.log("Video uploaded:", response.data);
  //         // Optionally, navigate to another page after upload
  //         navigate("/videos");
  //       }
  //     } catch (error) {
  //       setUploadStatus("Upload failed!");
  //       console.error("Error uploading video:", error);
  //     }
  //   }
  // };

  // const triggerFileInput = () => {
  //   document.getElementById("fileInput").click(); // Trigger the file input click
  // };
  

//   const handleUpload = async (file) => {
//     const formData = new FormData();
//     formData.append('video', file);

//     try {
//       const response = await axios.post('http://localhost:5000/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log('Upload successful:', response.data);
//     } catch (error) {
//       console.error('Error uploading video:', error.response?.data || error.message);
//     }
//   };

//   return (
//     <div className="upload-page">
//       <button className="upload-button" onClick={triggerFileInput}>
//         <FaUpload /> Upload
//       </button>

//       {/* Hidden file input that is triggered by the button click */}
//       <input
//         id="fileInput"
//         type="file"
//         accept="video/*"
//         className="hidden"
//         onChange={handleUpload}
//       />

//       <div className="upload-status">{uploadStatus}</div> {/* Display upload status */}
//     </div>
//   );
// };

// export default UploadPage;











import React, { useState } from "react";
import { FaUpload, FaPlay, FaPaperPlane } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../Styles/UploadPage.css";

const UploadPage = () => {
  const [videos, setVideos] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const videoURL = URL.createObjectURL(file);
      setVideos([...videos, videoURL]);
      setSelectedFile(file);
      navigate("/upload"); // Navigate to UploadPage
    }
  };

  const triggerFileInput = () => {
    document.getElementById("fileInput").click(); // Trigger the file input click
  };

  const handleSubmit = async () => {
    if (!selectedFile) return alert("Please select a file to upload.");

    const formData = new FormData();
    formData.append("video", selectedFile);
    formData.append("description", description);

    try {
      const response = await fetch("http://localhost:5000/api/videos/upload", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      alert("Upload successful: " + result.message);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Upload failed.");
    }
  };

  return (
    <div className="upload-page" style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f4f4f4",
      padding: "20px"
    }}>
      <button
        className="upload-button"
        onClick={triggerFileInput}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        <FaUpload /> Upload
      </button>

      {/* Styled file input */}
      <input
        id="fileInput"
        type="file"
        accept="video/*"
        className="hidden"
        onChange={handleUpload}
        style={{ display: "none" }}
      />

      {/* Description Input */}
      <textarea
        placeholder="Enter video description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{
          marginTop: "15px",
          width: "300px",
          height: "80px",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc"
        }}
      />

      {/* Submit Button */}
      <button
        className="submit-button"
        onClick={handleSubmit}
        style={{
          marginTop: "15px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "10px"
        }}
      >
        <FaPaperPlane /> Submit
      </button>

      <div className="video-container" style={{ marginTop: "20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
        {videos.map((video, index) => (
          <div key={index} className="video-wrapper" style={{ position: "relative", width: "300px", borderRadius: "10px", overflow: "hidden", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
            <video src={video} controls className="video-player" style={{ width: "100%", borderRadius: "10px" }} />
            <div className="play-icon" style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "24px",
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
              padding: "10px",
              borderRadius: "50%"
            }}>
              <FaPlay />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadPage;















// import React, { useState } from "react";
// import { FaUpload } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "../Styles/UploadPage.css";

// const UploadPage = () => {
//   const [uploadStatus, setUploadStatus] = useState(""); // to show upload status
//   const [videoPreview, setVideoPreview] = useState(""); // to show video preview
//   const navigate = useNavigate();

//   const handleUpload = async () => {
//     const fileInput = document.getElementById('fileInput');
//     const file = fileInput.files[0]; // Get the selected file

//     if (!file) {
//       setUploadStatus('Please select a file first.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('video', file);
//     formData.append('userId', '1'); // Replace with actual user ID from authentication

//     try {
//       setUploadStatus('Uploading...');

//       // Send the video file to the backend
//       const response = await axios.post('http://localhost:5000/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       // On successful upload, set the status and navigate
//       if (response.data) {
//         setUploadStatus('Upload successful!');
//         console.log('Video uploaded:', response.data);
//         // Optionally, navigate to another page after upload
//         navigate('/videos');
//       }
//     } catch (error) {
//       setUploadStatus('Upload failed!');
//       console.error('Error uploading video:', error.response?.data || error.message);
//     }
//   };

//   const triggerFileInput = () => {
//     document.getElementById('fileInput').click(); // Trigger the file input click
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setVideoPreview(URL.createObjectURL(file)); // Create a preview URL
//     }
//   };

//   return (
//     <div className="upload-page">
//       <button className="upload-button" onClick={triggerFileInput}>
        
//       </button>

//       {/* Hidden file input that is triggered by the button click */}
//       <input
//         id="fileInput"
//         type="file"
//         accept="video/*"
//         className="hidden"
//         onChange={handleFileChange}
//       />

//       {/* Video preview */}
//       {videoPreview && (
//         <video controls src={videoPreview} className="video-preview" />
//       )}

//       {/* Upload button */}
//       <button className="upload-button" onClick={handleUpload}>
//         <FaUpload /> Upload
//       </button>

//       <div className="upload-status">{uploadStatus}</div> {/* Display upload status */}
//     </div>
//   );
// };

// export default UploadPage;
