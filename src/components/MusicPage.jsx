import React, { useState, useRef, useEffect } from 'react';
import '../Styles/MusicPage.css';

const MusicPage = () => {
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const audioRefs = useRef([]);

  // Ensure all audioRefs are correctly assigned
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
    { title: 'Chill Beat', url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Derek_Clegg/June_2019/Derek_Clegg_-_02_-_Chasing_Shadows.mp3' },
    { title: 'Uplifting Piano', url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Scott_Holmes/Upbeat_Party/Scott_Holmes_-_01_-_Upbeat_Party.mp3' },
    { title: 'Ambient Electronic', url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Kai_Engel/Satin/Kai_Engel_-_02_-_Satin.mp3' },
    { title: 'Jazz Vibes', url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Jahzzar/Bluesy_Jazz/Jahzzar_-_03_-_Siesta.mp3' },
    { title: 'Acoustic Folk', url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Jason_Shaw/Audionautix_Acoustic/Jason_Shaw_-_AUDIONAUTIX_ACOUSTIC_-_01_-_Running_Out.mp3' },
    { title: 'Epic Cinematic', url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Scott_Holmes/Epic_Cinematic_Music/Scott_Holmes_-_01_-_Epic_Cinematic_Music.mp3' },
    { title: 'Funky Groove', url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Jahzzar/Five_Bands/Jahzzar_-_03_-_Five_Bands.mp3' },
  ];

  return (
    <div className="container">
      <h1 className="title">Welcome to Neptok Music</h1>
      <p className="subtitle">Explore and enjoy the music!</p>

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
  );
};

export default MusicPage;
