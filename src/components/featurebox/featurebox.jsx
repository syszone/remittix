import React from "react";
import "./featurebox.css";

const FeatureBox = ({
  type,
  heading,
  text,
  topImage,
  bottomImage,
  topImageTop = 27,
  linkText = "",
  linkUrl = "#",
  backgroundColor,
  textColor,
  headingColor,
  linkColor,
  headingFontSize = "18.424px",
  textFontSize = "17px",
  linkFontSize = "14px",
  justifyText = false, // New prop for text alignment
}) => {
  const boxClass = type === "light" ? "FeatureBox__light" : "FeatureBox__dark";
  const bottomImageClass =
    type === "light"
      ? "FeatureBox__bottom-image-light"
      : "FeatureBox__bottom-image-dark";

  // Function to determine if the input is a CSS variable or a direct color value
  const resolveColor = (color) => {
    if (color?.startsWith("--")) {
      return `var(${color})`;
    }
    return color;
  };

  return (
    <div
      className={`FeatureBox ${boxClass}`}
      style={{
        backgroundColor:
          backgroundColor || (type === "light" ? "#F0F0F5" : "#040F19"),
      }}
    >
      <img
        src={topImage}
        alt="Top"
        className="FeatureBox__top-image"
        style={{ top: `${topImageTop}px` }}
      />
      <h2
        className="FeatureBox__heading"
        style={{
          color: resolveColor(headingColor) || "inherit",
          fontSize: headingFontSize,
        }}
      >
        {heading}
      </h2>
      <div className="FeatureBox__divider-line"></div>
      <p
        className="FeatureBox__text"
        style={{
          color: resolveColor(textColor) || "inherit",
          fontSize: textFontSize,
          textAlign: justifyText ? "justify" : "left", // Apply text alignment based on the prop
        }}
      >
        {text}
      </p>
      {linkText && (
        <a
          href={linkUrl}
          className="FeatureBox__link"
          style={{
            color: resolveColor(linkColor) || "var(--color-primary)",
            fontSize: linkFontSize,
          }}
        >
          {linkText}
        </a>
      )}
      <img
        src={bottomImage}
        alt="Bottom"
        className={`FeatureBox__bottom-image ${bottomImageClass}`}
      />
    </div>
  );
};

export default FeatureBox;
