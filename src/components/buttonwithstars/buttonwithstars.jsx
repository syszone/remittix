import React, { useEffect } from 'react';
import './buttonwithstars.css'; // Assuming CSS is in a separate file

const ButtonWithStars = () => {
  useEffect(() => {
    const ellipseContainer = document.querySelector('.ellipse_container');
    const ellipseCount = 10; // Number of ellipses (stars)

    for (let i = 0; i < ellipseCount; i++) {
      const ellipse = document.createElement('div');
      ellipse.classList.add('ellipse');

      // Random size between 3px and 10px for stars
      const size = Math.floor(Math.random() * 7) + 3;
      ellipse.style.width = `${size}px`;
      ellipse.style.height = `${size}px`;

      // Random position on the left side
      const positionX = Math.random() * 30; // Random position within 30px width
      const positionY = Math.random() * 100; // Between 0% and 100% height
      ellipse.style.left = `${positionX}px`;
      ellipse.style.top = `${positionY}%`;

      // Random opacity (some stars fade out more than others)
      const randomOpacity = Math.random() * 0.5 + 0.5; // Between 0.5 and 1
      ellipse.style.opacity = randomOpacity;

      // Random gradient or solid fill for stars
      if (Math.random() > 0.5) {
        // Gradient fill for some ellipses
        const color1 = `#F9FF38`;
        const color2 = `#ffffff`;
        ellipse.style.background = `linear-gradient(45deg, ${color1}, ${color2})`;
      } else {
        // Solid color fill for others
        ellipse.style.background = `#F9FF38`;
      }

      // Append to container
      ellipseContainer.appendChild(ellipse);
    }
  }, []);

  return (
    <button>
      <div className="btn_content">
        <div className="btn_image_container">
          <div className="btn_Image bottom"><img src="blackBtnEllips.png" alt="Black Ellips" width="30" height="30" /></div>
          <div className="btn_Image top"><img src="whitekArrow.png" alt="White Arrow" width="30" height="30" /></div>
        </div>
        <div className="btn_text"><span className="btn-txt">Login</span></div>
        {/* Ellipses (stars) */}
        <div className="ellipse_container"></div>
      </div>
    </button>
  );
};

export default ButtonWithStars;
