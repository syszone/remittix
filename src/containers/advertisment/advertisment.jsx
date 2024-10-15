import React from "react";
import "./advertisment.css";
import advertisment from "../../assets/images/advert/advert1.png"; // Import left icon (optional)

const Advertisment = () => {
  return (
    <div className="remtittix__advertisment section__padding">
      <img scr={advertisment} />
    </div>
  );
};

export default Advertisment;
