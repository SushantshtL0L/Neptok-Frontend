import React from 'react';
import "../Styles/VideoGrid.css";

const VideoGrid = () => {
  const videos = [
    {
      videoUrl: 'https://www.example.com/video1.mp4',
      thumbnail: 'https://via.placeholder.com/150',
      views: '1,000',
      title: 'Funny Dance Moves',
      duration: '30',
    },
    {
      videoUrl: 'https://www.example.com/video2.mp4',
      thumbnail: 'https://via.placeholder.com/150',
      views: '2,500',
      title: 'Adorable Puppies',
      duration: '45',
    },
    {
      videoUrl: 'https://www.example.com/video3.mp4',
      thumbnail: 'https://via.placeholder.com/150',
      views: '5,000',
      title: 'Epic Basketball Shot',
      duration: '60',
    },
    {
      videoUrl: 'https://www.example.com/video4.mp4',
      thumbnail: 'https://via.placeholder.com/150',
      views: '3,200',
      title: 'Wanderlust Travels',
      duration: '120',
    },
  ];

  return (
    <div className="video-grid">
      {videos.map((video, index) => (
        <div key={index} className="video-item">
          <video
            className="video-player"
            src={video.videoUrl}
            poster={video.thumbnail} // Shows thumbnail before video plays
            controls
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="video-info">
            <h3>{video.title}</h3>
            <span className="views">{video.views} views</span>
            <span className="duration">{video.duration} sec</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;
