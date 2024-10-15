import React from 'react';
import './button.css'; // Import the CSS styles

const Button = ({ text, highlighted }) => {
  return (
    <button className={`custom-button ${highlighted ? 'highlighted' : 'simple'}`}>
      {text}
    </button>
  );
};

export default Button;
