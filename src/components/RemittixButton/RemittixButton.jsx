import React, { useState } from 'react';
import './RemittixButton.css';

const RemittixButton = ({
  text,
  leftImage = null, // Image on the left
  rightImage = null, // Image on the right
  showLeftImage = true, // Toggle display for left image
  showRightImage = true, // Toggle display for right image
  width = '100%', // Default width is 100%, can be set via props
  height = '64px', // Fixed height
  backgroundColor = '#F9FF38', // Default background color
  hoverColor = '#D4E014', // Default hover color
  textColor = '#000', // Default text color
  hoverTextColor = '#000', // Text color on hover
  gradientStartColor = null, // Start color for gradient
  gradientEndColor = null, // End color for gradient (optional)
  borderColor = '#000', // Default border color
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Determine if gradient should be applied
  const backgroundStyle = gradientStartColor && gradientEndColor
    ? `linear-gradient(90deg, ${gradientStartColor} 0%, ${gradientEndColor} 95%`
    : backgroundColor;

  return (
    <button
      className="remittix__button"
      onClick={onClick}
      style={{
        width: width,
        height: height,
        background: isHovered ? hoverColor : backgroundStyle, // Apply hover color or default background
        color: isHovered ? hoverTextColor : textColor, // Change text color on hover
        borderColor: borderColor, // Apply border color
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {showLeftImage && leftImage && (
        <img src={leftImage} alt="left icon" className="remittix__button-left-image" />
      )}
      <span className="remittix__button-text">{text}</span>
      {showRightImage && rightImage && (
        <img src={rightImage} alt="right icon" className="remittix__button-right-image" />
      )}
    </button>
  );
};

export default RemittixButton;
