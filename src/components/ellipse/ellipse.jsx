import React from 'react';
import './ellipse.css';

const Ellipse = ({ size = 544.91, borderAngle = 90, fillAngle = 90 }) => {
    return (
      <div
        className="ellipse"
        style={{
          '--size': `${size}px`,
          '--border-angle': `${borderAngle}deg`,
          '--fill-angle': `${fillAngle}deg`,
        }}
      ></div>
    );
  };
export default Ellipse;
