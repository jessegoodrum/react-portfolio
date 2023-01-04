import React, { useState } from 'react';
import YoutubeEmbed from '../embed/YouTubeEmbed.components';
import "./carousel.styles.scss"

const Carousel = (props) => {



  const [currentIndex, setCurrentIndex] = useState(0);
  const [isEnlarged, setIsEnlarged] = useState(false);
  
    const handleClick = () => {
      setIsEnlarged(!isEnlarged);
    };


  const handlePrevClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(props.images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex === props.images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="carousel">  
    
    <div onClick={handleClick}>
      {isEnlarged ? (
        <div className="enlarged-image-overlay">
          <div className="enlarged-image-container">
            <img className = 'carousel-image' src={props.images[currentIndex]} alt="" />

          </div>
        </div>
      ) : (
        <img className = 'carousel-image' src={props.images[currentIndex]} alt="" />
      )}
    </div>
      
      <div>
      <button className='button previous round' onClick={handlePrevClick}>&#8249;</button>
      <button className='button next round' onClick={handleNextClick}>&#8250;</button>
      </div>
      <YoutubeEmbed embedId={props.embedId} />
    </div>
  );
}

export default Carousel;