import React from "react";
import "./reviews.css";
import reviewstars from "../../assets/images/reviews_5_star.png";
import { ReviewSlider, RemittixButton } from "../../components";
import image1 from "../../assets/images/reviews/image1.png";
import image2 from "../../assets/images/reviews/image2.png";
import leftIcon from "../../assets/images/circle_school.png"; // Import left icon (optional)
import rightIcon from "../../assets/images/icon_arrow_white.png"; // Import right icon

const reviewsData = [
  {
    image: image1,
    heading: "Great Service!",
    description: "This service has been amazing for my business!",
  },
  {
    image: image2,
    heading: "Fast and Reliable",
    description: "Payments are always processed quickly.",
  },
  {
    image: image1,
    heading: "Highly Recommend",
    description:
      "I would recommend this service to anyone looking for secure payments.",
  },
  {
    image: image2,
    heading: "Top Notch Support",
    description: "Customer support is always responsive and helpful.",
  },
];

const Reviews = () => {
  return (
    <div className="remtittix__reviews section__padding light_background">
      <h1 className="heading__50" style={{ color: "#000", marginBottom: 20 }}>
        <span className="highlight-word">
          Co<span className="underlined">mmu</span>
        </span>
        nity Revi<span className="underlined">ews</span>
      </h1>

      <img src={reviewstars} />

      <ReviewSlider reviews={reviewsData} />
      {/* Button without the left image */}
      <div style={{ marginBottom: 40 }}>
        <RemittixButton
          text="Join Presale"
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
  );
};

export default Reviews;
