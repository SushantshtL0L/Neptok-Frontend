// import { useState, useRef, useCallback } from "react"; // Added useRef and useCallback
// import { FaPlay, FaPause, FaHeart, FaComment, FaShare } from "react-icons/fa";
// import "../Styles/MusicPage.css"; // Import the CSS file
// import testImage1 from "../Assest/test.png";
// import testImage2 from "../Assest/test2.png";
// import testImage3 from "../Assest/test3.png";
// import { useEffect } from 'react';


// const musicList = [
//   {
//     id: 1,
//     title: "Song 1",
//     artist: "Artist 1",
//     cover: "https://via.placeholder.com/150",
//     audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
//   },
//   {
//     id: 2,
//     title: "Song 2",
//     artist: "Artist 2",
//     cover: "https://via.placeholder.com/150",
//     audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
//   },
//   {
//     id: 3,
//     title: "Song 3",
//     artist: "Artist 3",
//     cover: "https://via.placeholder.com/150",
//     audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
//   },
// ];

// const videosUsingMusic = [
//   { id: 1, video: testImage1, user: "@user1", likes: 100, comments: 20 },
//   { id: 2, video: testImage2, user: "@user2", likes: 200, comments: 30 },
//   { id: 3, video: testImage3, user: "@user3", likes: 300, comments: 40 },
// ];

// export default function MusicPage() {
//   const [selectedMusic, setSelectedMusic] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const audioRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0); // For video navigation
//   const videoRefs = useRef([]); // For video navigation
//   const touchStartY = useRef(0); // For touch swipe functionality

//   // Handle play/pause for music
//   const handlePlayPause = (music) => {
//     if (selectedMusic?.id === music.id) {
//       if (isPlaying) {
//         audioRef.current.pause();
//       } else {
//         audioRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     } else {
//       setSelectedMusic(music);
//       setIsPlaying(true);
//       if (audioRef.current) {
//         audioRef.current.pause();
//         audioRef.current.src = music.audio;
//         audioRef.current.play();
//       }
//     }
//   };

//   // Handle swipe for video navigation
//   const handleSwipe = useCallback((e) => {
//     const deltaY = e.deltaY || 0; // For mouse scroll
//     const direction = deltaY > 0 ? 1 : -1; // Determine scroll direction

//     setCurrentIndex((prev) => {
//       let newIndex = prev + direction;
//       if (newIndex < 0) return 0;
//       if (newIndex >= videosUsingMusic.length) return videosUsingMusic.length - 1;
//       return newIndex;
//     });
//   }, []);

//   // Handle touch swipe for mobile
//   const handleTouchStart = (e) => {
//     touchStartY.current = e.touches[0].clientY;
//   };

//   const handleTouchMove = (e) => {
//     const touchEndY = e.touches[0].clientY;
//     const deltaY = touchStartY.current - touchEndY;

//     if (Math.abs(deltaY) > 50) {
//       // Minimum swipe distance
//       if (deltaY > 0) {
//         // Swipe up
//         setCurrentIndex((prev) => Math.min(prev + 1, videosUsingMusic.length - 1));
//       } else {
//         // Swipe down
//         setCurrentIndex((prev) => Math.max(prev - 1, 0));
//       }
//     }
//   };

//   // Scroll to the current video
//   useEffect(() => {
//     if (videoRefs.current[currentIndex]) {
//       videoRefs.current[currentIndex].scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   }, [currentIndex]);

//   // Add event listener for mouse scroll
//   useEffect(() => {
//     window.addEventListener("wheel", handleSwipe);
//     return () => window.removeEventListener("wheel", handleSwipe);
//   }, [handleSwipe]);

//   return (
//     <div className="music-page">
//       {/* Music List */}
//       <div className="music-list">
//         <h2>Trending Music</h2>
//         {musicList.map((music) => (
//           <div
//             key={music.id}
//             className={`music-item ${selectedMusic?.id === music.id ? "active" : ""}`}
//             onClick={() => handlePlayPause(music)}
//           >
//             <img src={music.cover} alt={music.title} className="music-cover" />
//             <div className="music-details">
//               <h3>{music.title}</h3>
//               <p>{music.artist}</p>
//             </div>
//             <button className="play-button">
//               {selectedMusic?.id === music.id && isPlaying ? <FaPause /> : <FaPlay />}
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Video Feed */}
//       <div
//         className="video-feed"
//         onTouchStart={handleTouchStart}
//         onTouchMove={handleTouchMove}
//       >
//         <h2>Videos Using This Music</h2>
//         {videosUsingMusic.map((video, index) => (
//           <div
//             key={video.id}
//             ref={(el) => (videoRefs.current[index] = el)}
//             className={`video-container ${index === currentIndex ? "active" : ""}`}
//           >
//             <img src={video.video} alt={`Video ${video.id}`} className="video-img" />
//             <div className="video-details">
//               <span className="username">{video.user}</span>
//               <div className="actions">
//                 <button aria-label="Like" className="action-button">
//                   <FaHeart className="icon" /> {video.likes}
//                 </button>
//                 <button aria-label="Comment" className="action-button">
//                   <FaComment className="icon" /> {video.comments}
//                 </button>
//                 <button aria-label="Share" className="action-button">
//                   <FaShare className="icon" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Audio Player */}
//       <audio ref={audioRef} src={selectedMusic?.audio} />
//     </div>
//   );
// }