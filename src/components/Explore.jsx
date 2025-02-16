// import React, { useState, useEffect } from 'react';
// import ReactPlayer from 'react-player';
// import '../Styles/Explore.css'; 

// const Explore = () => {
//   const [videos, setVideos] = useState([]);

  
//   useEffect(() => {
//     const mockVideos = [
//       {
//         id: 1,
//         url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
//         likes: 100,
//         comments: 25,
//         shares: 10,
//         user: 'user1',
//         description: 'This is a cool video!',
//       },
//       {
//         id: 2,
//         url: 'https://www.youtube.com/shorts/3jBAfYStEOw?feature=share',
//         likes: 200,
//         comments: 50,
//         shares: 20,
//         user: 'user2',
//         description: 'Check this out!',
//       },
//       // Add more videos here
//     ];
//     setVideos(mockVideos);
//   }, []);

//   return (
//     <div className="explore-container">
//       {videos.map((video) => (
//         <div key={video.id} className="video-container">
//           <ReactPlayer
//             url={video.url}
//             width="100%"
//             height="100%"
//             playing={true} 
//             loop={true}
//             muted={true} 
//             controls={false} 
//           />
//           <div className="video-overlay">
//             <div className="user-info">@{video.user}</div>
//             <div className="video-description">{video.description}</div>
//             <div className="action-buttons">
//               <div className="action-button">
//                 <i className="fas fa-heart"></i>
//                 <span>{video.likes}</span>
//               </div>
//               <div className="action-button">
//                 <i className="fas fa-comment"></i>
//                 <span>{video.comments}</span>
//               </div>
//               <div className="action-button">
//                 <i className="fas fa-share"></i>
//                 <span>{video.shares}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Explore;

// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
// import "../Styles/Explore.css";

// // Sample movie data (instead of fetching from API)
// const sampleMovies = [
//   { movie_id: 1, movie_name: "Inception", thumbnailupload: "https://via.placeholder.com/150" },
//   { movie_id: 2, movie_name: "Interstellar", thumbnailupload: "https://via.placeholder.com/150" },
//   { movie_id: 3, movie_name: "The Dark Knight", thumbnailupload: "https://via.placeholder.com/150" },
//   { movie_id: 4, movie_name: "Avengers: Endgame", thumbnailupload: "https://via.placeholder.com/150" },
//   { movie_id: 5, movie_name: "Parasite", thumbnailupload: "https://via.placeholder.com/150" },
//   { movie_id: 6, movie_name: "Joker", thumbnailupload: "https://via.placeholder.com/150" },
//   { movie_id: 7, movie_name: "Spider-Man: No Way Home", thumbnailupload: "https://via.placeholder.com/150" },
//   { movie_id: 8, movie_name: "Dune", thumbnailupload: "https://via.placeholder.com/150" },
// ];

// // Movie Carousel Component
// const Carousel = ({ movies, title }) => {
//   const navigate = useNavigate(); // ✅ Use navigate for routing

//   const handleMovieClick = (movie_id) => {
//     navigate(`/movie/${movie_id}`); // ✅ Redirect to movie details page
//   };

//   return (
//     <div className="section">
//       <h2>{title}</h2>
//       <div className="carousel">
//         {movies.map((movie) => (
//           <div className="movie-card" key={movie.movie_id} onClick={() => handleMovieClick(movie.movie_id)}>
//             <img
//               src={movie.thumbnailupload} 
//               alt={movie.movie_name}
//               style={{ cursor: "pointer" }}
//             />
//             <p>{movie.movie_name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Function to Get Random Movies
// const getRandomMovies = (movies, count) => {
//   if (movies.length <= count) return movies;
//   const shuffled = [...movies].sort(() => 0.5 - Math.random());
//   return shuffled.slice(0, count);
// };

// // Main Layout Component
// const MainLayout = ({ children }) => {
//   const [movies] = useState(sampleMovies); // Use static movie data

//   const topRecommendations = getRandomMovies(movies, 6);

//   return (
//     <div className="app-container">
//       <div className="main-content">
//         {/* ✅ Displaying movies from sample data */}
//         {topRecommendations.length > 0 && <Carousel movies={topRecommendations} title="Top Recommendations" />}
//         <Carousel movies={movies} title="New This Week" />
//         <Carousel movies={movies} title="Trending Now" />
//         {children && <div className="extra-content">{children}</div>}
//       </div>
//     </div>
//   );
// };

// MainLayout.propTypes = {
//   children: PropTypes.node,
// };

// export default MainLayout;
