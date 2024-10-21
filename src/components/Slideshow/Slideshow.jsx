import React, { useState, useEffect } from "react";
import slide1 from "../../assets/images/bank_slide/slide1.svg";
import slide2 from "../../assets/images/bank_slide/slide2.svg";
import slide3 from "../../assets/images/bank_slide/slide3.svg";
import slide4 from "../../assets/images/bank_slide/slide4.svg";
import "./Slideshow.css";

const Slideshow = () => {
  const slides = [slide1, slide2, slide3];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide}
          alt={`Slide ${index + 1}`}
          className={`slide ${index === currentSlide ? "active" : ""}`}
        />
      ))}
    </div>
  );
};

export default Slideshow;
