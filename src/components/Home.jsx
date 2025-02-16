import { useState, useEffect, useRef } from "react";
import { FaHeart, FaComment, FaBookmark, FaShare } from "react-icons/fa";
import "../Styles/Home.css";
import testImage1 from "../Assest/test.png";
import testImage2 from "../Assest/test2.png";
import testImage3 from "../Assest/test3.png";

export default function TikTokClone() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openCommentIndex, setOpenCommentIndex] = useState(null); // Track which comment box is open
  const videoRefs = useRef([]);
  const touchStartY = useRef(0);

  const images = [testImage1, testImage2, testImage3];

  const scrollToVideo = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleSwipe = (e) => {
    const deltaY = e.deltaY || 0;
    const direction = deltaY > 0 ? 1 : -1;

    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = 0;
    if (newIndex >= images.length) newIndex = images.length - 1;

    setCurrentIndex(newIndex);
  };

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    const touchEndY = e.touches[0].clientY;
    const deltaY = touchStartY.current - touchEndY;

    if (Math.abs(deltaY) > 50) {
      if (deltaY > 0) {
        setCurrentIndex((prev) => Math.min(prev + 1, images.length - 1));
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  useEffect(() => {
    scrollToVideo(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    window.addEventListener("wheel", handleSwipe);
    return () => window.removeEventListener("wheel", handleSwipe);
  }, [currentIndex]);

  const toggleCommentBox = (index) => {
    setOpenCommentIndex(openCommentIndex === index ? null : index);
  };

  return (
    <div className="container">
      <div
        className="video-feed"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {images.map((image, index) => (
          <div
            key={index}
            ref={(el) => (videoRefs.current[index] = el)}
            className={`video-container ${index === currentIndex ? "active" : ""}`}
          >
            <img src={image} alt={`Video ${index}`} className="video-img" />
            <div className="actions">
              <button aria-label="Like" className="action-button">
                <FaHeart className="icon" /> 40
              </button>
              <button
                aria-label="Comment"
                className="action-button"
                onClick={() => toggleCommentBox(index)}
              >
                <FaComment className="icon" /> 11
              </button>
              <button aria-label="Bookmark" className="action-button">
                <FaBookmark className="icon" /> 2
              </button>
              <button aria-label="Share" className="action-button">
                <FaShare className="icon" /> 5
              </button>
            </div>

            {/* Comment Box */}
            {openCommentIndex === index && (
              <div className="comment-box">
                <div className="comments">
                  <p>User1: Nice video!</p>
                  <p>User2: Amazing content!</p>
                </div>
                <input type="text" placeholder="Add a comment..." />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
