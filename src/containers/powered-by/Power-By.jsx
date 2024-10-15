import React from "react";
import "./power-by.css";
import { PoweredBy, RemittixButton } from "../../components";

import leftArrow from "../../assets/images/icon_left_arrow_white.svg"; // Import left icon (optional)
import rightArrow from "../../assets/images/icon_right_arrow_white.svg"; // Import right icon

import logo1 from "../../assets/images/poweredby/adobe.svg";
import logo2 from "../../assets/images/poweredby/bing.svg";
import logo3 from "../../assets/images/poweredby/github.svg";
import logo4 from "../../assets/images/poweredby/google.svg";
import logo5 from "../../assets/images/poweredby/open-aI.svg";

const PowerBy = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5];

  return (
    <div className="remtittix__poweredby section__padding">
      <div className="centered-container">
        <h1 className="heading__60 black_text" style={{ marginBottom: 20 }}>
          <span className="highlight-word">
            <span className="underlined">Po</span>wered by
          </span>
        </h1>
      </div>
      <div className="centered-container">
        <PoweredBy
          logos={logos}
          leftIcon={leftArrow}
          rightIcon={rightArrow}
          logosPerSlide={4} // Number of logos per slide
        />
      </div>
    </div>
  );
};

export default PowerBy;
