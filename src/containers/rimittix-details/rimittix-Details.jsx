import React from "react";
import "./rimittix-details.css";
import { RemittixButton } from "../../components";
import leftIcon from "../../assets/images/circle_school.png"; // Import left icon (optional)
import rightIcon from "../../assets/images/icon_arrow_white.png"; // Import right icon

const RimittixDetails = () => {
  return (
    <div className="remtittix__details section__padding">
      <div className="centered-container">
        <h1 className="heading__60 black_text" style={{ marginBottom: 20 }}>
          <span className="highlight-word">
            Remittix in <span className="underlined">Det</span>ail
          </span>
        </h1>

        <p className="sub_heading__text" style={{ marginBottom: 60 }}>
          Below are several significant document that provide ab in-depth
          explanation of the <b>Rimittix</b> Ecosystem.
        </p>

        {/* Button without the left image */}
        <div className="button-container">
          <RemittixButton
            text="Audit"
            leftImage={leftIcon}
            rightImage={rightIcon}
            width="321px"
            showLeftImage={true} // Toggle to show the left image
            showRightImage={true} // Toggle to show the right image
            backgroundColor="#000" // Solid background color (no gradient)
            hoverColor="#F9FF38" // Hover color
            textColor="#FFF" // Text color
            hoverTextColor="#000" // Text color on hover
            borderColor="#697783" // Border color matching background
            onClick={() => console.log("Button clicked")}
          />

          <RemittixButton
            text="Whitepaper"
            leftImage={leftIcon}
            rightImage={rightIcon}
            width="321px"
            showLeftImage={true} // Toggle to show the left image
            showRightImage={true} // Toggle to show the right image
            backgroundColor="#000" // Solid background color (no gradient)
            hoverColor="#F9FF38" // Hover color
            textColor="#FFF" // Text color
            hoverTextColor="#000" // Text color on hover
            borderColor="#697783" // Border color matching background
            onClick={() => console.log("Button clicked")}
          />
        </div>
      </div>
    </div>
  );
};

export default RimittixDetails;
