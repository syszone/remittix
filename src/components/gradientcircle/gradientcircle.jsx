import React from 'react';
import './gradientcircle.css';

const GradientCircle = ({ 
    size = 100, 
    wrapperGradientStart = 'yellow', // Outer wrapper gradient start color
    wrapperGradientEnd = 'white', // Outer wrapper gradient end color
    circleColor = 'rgba(255, 255, 255, 0.1)', // Minimal color for the inner circle
    circleGradientEnd = 'rgba(255, 255, 255, 0)', // Fully transparent for the rest
    fillAngle = 180 // Angle for the inner circle gradient
  }) => {
    return (
      <div
        className="gradient-wrapper"
        style={{
          '--size': `${size}px`,
          '--wrapper-gradient-start': wrapperGradientStart,
          '--wrapper-gradient-end': wrapperGradientEnd,
        }}
      >
        <div
          className="maincircle"
          style={{
            '--fill-angle': `${fillAngle}deg`,
            '--circle-color': circleColor,
            '--circle-gradient-end': circleGradientEnd,
            width: `${size}px`,
            height: `${size}px`,
          }}
        ></div>
      </div>
    );
  };
  
  export default GradientCircle;