import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import leftNavNormal from "../../../assets/images/dashboard/slider_nav_left_normal.png";
import leftNavHover from "../../../assets/images/dashboard/slider_nav_left_highligted.png";
import rightNavNormal from "../../../assets/images/dashboard/slider_nav_right_normal.png";
import rightNavHover from "../../../assets/images/dashboard/slider_nav_right_highligted.png";

import bkg1 from "../../../assets/images/dashboard/slider_bkg/bkg1.png";
import bkg2 from "../../../assets/images/dashboard/slider_bkg/bkg2.png";
import bkg3 from "../../../assets/images/dashboard/slider_bkg/bkg3.png";
import bkg4 from "../../../assets/images/dashboard/slider_bkg/bkg4.png";

import logo from "../../../assets/images/logo.png";
import "./ContentSlider.css";

const sliderData = [
  {
    heading:
      'Fiat Rails <br/> <span class="highlighted">For Crypto Businesses</span>',
    paragraph:
      "Rimittix is a Web3 DeFi crypto exchange that allows users to Buy, Sell and Swap cryptocurrency",
    background: bkg1,
  },
  {
    heading:
      'Pay Any Fiat Bank <br/> <span class="highlighted">Account Using Crypto</span>',
    paragraph:
      "Rimittix is a Web3 DeFi crypto exchange that allows users to Buy, Sell and Swap cryptocurrency",
    background: bkg2,
  },
  {
    heading:
      'Cross-border Bank Transfers Using <br/> <span class="highlighted">Crypto</span>',
    paragraph:
      "Rimittix is a Web3 DeFi crypto exchange that allows users to Buy, Sell and Swap cryptocurrency",
    background: bkg1,
  },
  {
    heading:
      'Fiat Rails <br/> <span class="highlighted">For Crypto Businesses</span>',
    paragraph:
      "Rimittix is a Web3 DeFi crypto exchange that allows users to Buy, Sell and Swap cryptocurrency",
    background: bkg4,
  },
];

const ContentSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = sliderData.length;
  const slideWidth = 460 + 12;
  const sliderRef = useRef(null);

  const clonedSlides = [
    sliderData[totalSlides - 1],
    ...sliderData,
    sliderData[0],
  ];

  useEffect(() => {
    if (currentSlide === totalSlides + 1) {
      setTimeout(() => {
        sliderRef.current.style.transition = "none";
        setCurrentSlide(1);
      }, 500);
    }

    if (currentSlide === 0) {
      setTimeout(() => {
        sliderRef.current.style.transition = "none";
        setCurrentSlide(totalSlides);
      }, 500);
    }
  }, [currentSlide, totalSlides]);

  const handleNextSlide = () => {
    sliderRef.current.style.transition = "transform 0.5s ease-in-out";
    setCurrentSlide((prev) => prev + 1);
  };

  const handlePrevSlide = () => {
    sliderRef.current.style.transition = "transform 0.5s ease-in-out";
    setCurrentSlide((prev) => prev - 1);
  };

  return (
    <div className="content-slider-box">
      <div className="content-slider-header">
        <h2 className="content-slider-title">Latest Promotions</h2>
        <div className="content-slider-nav">
          <button className="slider-nav-button" onClick={handlePrevSlide}>
            <img src={leftNavNormal} alt="Previous" className="nav-normal" />
            <img
              src={leftNavHover}
              alt="Previous Hover"
              className="nav-hover"
            />
          </button>
          <button className="slider-nav-button" onClick={handleNextSlide}>
            <img src={rightNavNormal} alt="Next" className="nav-normal" />
            <img src={rightNavHover} alt="Next Hover" className="nav-hover" />
          </button>
        </div>
      </div>

      <div
        className="content-slider-slides"
        style={{ transform: `translateX(-${currentSlide * slideWidth}px)` }}
        ref={sliderRef}
      >
        {clonedSlides.map((slide, index) => (
          <div className="content-slide" key={index}>
            <div
              className="content-slide-inner"
              style={{ backgroundImage: "url(${slide.background})" }}
            >
              <div className="slide-content">
                <Link to="/" className="slide-logo">
                  <img src={logo} alt="Remittix Logo" />
                  <span>Remittix</span>
                </Link>

                <h3
                  className="slide-heading"
                  dangerouslySetInnerHTML={{ __html: slide.heading }}
                ></h3>
                <p className="slide-paragraph">{slide.paragraph}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentSlider;
