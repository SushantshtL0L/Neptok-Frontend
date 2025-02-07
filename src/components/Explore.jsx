import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import '../Styles/Explore.css'; 

const Explore = () => {
  const [videos, setVideos] = useState([]);

  
  useEffect(() => {
    const mockVideos = [
      {
        id: 1,
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        likes: 100,
        comments: 25,
        shares: 10,
        user: 'user1',
        description: 'This is a cool video!',
      },
      {
        id: 2,
        url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
        likes: 200,
        comments: 50,
        shares: 20,
        user: 'user2',
        description: 'Check this out!',
      },
      // Add more videos here
    ];
    setVideos(mockVideos);
  }, []);

  return (
    <div className="explore-container">
      {videos.map((video) => (
        <div key={video.id} className="video-container">
          <ReactPlayer
            url={video.url}
            width="100%"
            height="100%"
            playing={true} 
            loop={true}
            muted={true} 
            controls={false} 
          />
          <div className="video-overlay">
            <div className="user-info">@{video.user}</div>
            <div className="video-description">{video.description}</div>
            <div className="action-buttons">
              <div className="action-button">
                <i className="fas fa-heart"></i>
                <span>{video.likes}</span>
              </div>
              <div className="action-button">
                <i className="fas fa-comment"></i>
                <span>{video.comments}</span>
              </div>
              <div className="action-button">
                <i className="fas fa-share"></i>
                <span>{video.shares}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Explore;