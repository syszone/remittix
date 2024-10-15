import React, { useState, useEffect } from 'react';
import './ReviewSlider.css';
import leftArrow from '../../assets/images/slider_left_arrow.png'; // Replace with your actual path
import rightArrow from '../../assets/images/slider_right_arrow.png'; // Replace with your actual path
import icon from '../../assets/images/icon_light_arrow.png'; // Example icon for bottom left

const ReviewSlider = ({ reviews }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
    // Update mobile state based on window size
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    // Handle left arrow click
    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
      );
    };
  
    // Handle right arrow click
    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= reviews.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    return (
      <div className="review-slider">
        <div className="review-slider__column review-slider__column--left" onClick={handlePrev}>
          <img src={leftArrow} alt="Left Arrow" className='review_arrowButtons' />
        </div>
        <div className="review-slider__column review-slider__column--center">
          {reviews.slice(currentIndex, currentIndex + (isMobile ? 1 : 2)).map((review, index) => (
            <div key={index} className="review-slider__item">
              <div className="review-slider__header">
                <span className="review-slider__circle red"></span>
                <span className="review-slider__circle yellow"></span>
                <span className="review-slider__circle green"></span>
              </div>
              <img src={review.image} alt="Review" className="review-slider__image" />
              <h3 className="review-slider__heading">{review.heading}</h3>
              <p className="review-slider__description">{review.description}</p>
              <img src={icon} alt="Icon" className="review-slider__icon" />
            </div>
          ))}
        </div>
        <div className="review-slider__column review-slider__column--right" onClick={handleNext}>
          <img src={rightArrow} alt="Right Arrow" className='review_arrowButtons' />
        </div>
      </div>
    );
  };
  
  export default ReviewSlider;