import React from "react";
import "./BlogShowcase.css";
import RemittixCard from "../RemittixCard/RemittixCard"; // Import the existing card component

const BlogShowcase = ({
  backgroundImage,
  blogImage,
  logo,
  heading,
  description,
  date,
  icon,
  readMoreLink,
}) => {
  return (
    <RemittixCard
      backgroundImage={backgroundImage}
      width="408px"
      height="544px"
      padding="0px"
    >
      <div className="blog-showcase__container">
        <div className="blog-showcase__image-container">
          <img src={blogImage} alt="Blog" className="blog-showcase__image" />
          <img src={logo} alt="Logo" className="blog-showcase__logo" />
        </div>
        <h2 className="blog-showcase__heading">{heading}</h2>
        <div className="blog-showcase__divider"></div>
        <p className="blog-showcase__description">{description}</p>
        <div className="blog-showcase__bottom-row">
          <span className="blog-showcase__date">{date}</span>
          <a href={readMoreLink} className="blog-showcase__read-more">
            Read More
            <img
              src={icon}
              alt="Read More Icon"
              className="blog-showcase__icon"
            />
          </a>
        </div>
      </div>
    </RemittixCard>
  );
};

export default BlogShowcase;
