import React, { useState } from 'react';
import "./carousel.styles.scss"

const Carousel = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
      <img className = 'carousel-image' src={props.images[currentIndex]} alt="carousel" />
      <div>
      <button className='button previous round' onClick={handlePrevClick}>&#8249;</button>
      <button className='button next round' onClick={handleNextClick}>&#8250;</button>
      </div>
      
    </div>
  );
}

export default Carousel;