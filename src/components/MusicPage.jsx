import React, { useState, useRef, useEffect } from 'react';
import '../Styles/MusicPage.css';

const MusicPage = () => {
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const audioRefs = useRef([]);

  useEffect(() => {
    audioRefs.current = audioRefs.current.slice(0, musicLinks.length);
  }, []);

  const handlePlay = (index) => {
    if (currentPlaying !== null && currentPlaying !== index) {
      audioRefs.current[currentPlaying]?.pause();
    }
    setCurrentPlaying(index);
  };

  const musicLinks = [
    { title: 'SoundHelix - Song 1', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
    { title: 'SoundHelix - Song 2', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
    { title: 'SoundHelix - Song 3', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
    { title: 'SoundHelix - Song 4', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' },
    { title: 'SoundHelix - Song 5', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3' },
    { title: 'SoundHelix - Song 6', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3' },
    { title: 'SoundHelix - Song 7', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3' },
    { title: 'SoundHelix - Song 8', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3' },
    { title: 'SoundHelix - Song 9', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3' },
    { title: 'SoundHelix - Song 10', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3' },
  ];

  return (
    <div className="container">
      <h1 className="title">Welcome to Neptok Music</h1>
      <p className="subtitle">Explore and enjoy the music!</p>
      <div className="music-list">
        {musicLinks.map((music, index) => (
          <div key={index} className="music-player-container">
            <h3 className="music-title">{music.title}</h3>
            <audio
              ref={(el) => (audioRefs.current[index] = el)}
              controls
              className="audio-player"
              onPlay={() => handlePlay(index)}
            >
              <source src={music.url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicPage;