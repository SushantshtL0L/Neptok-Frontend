import React from 'react';

const VideoGrid = () => {
  const videos = Array(9).fill({
    thumbnail: 'https://via.placeholder.com/150',
    views: '1',
  });

  return (
    <div className="video-grid">
      {videos.map((video, index) => (
        <div key={index} className="video-item">
          <img src={video.thumbnail} alt={`Video ${index + 1}`} />
          <span className="views">{video.views} views</span>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;