import React, { useState } from "react";
import RemittixButton from "./RemittixButton";
import iconInfo from "../../../assets/images/dashboard/icon_info.png";
import iconRightArrow from "../../../assets/images/dashboard/icon_right_arrow_white.png";
import iconSecurity from "../../../assets/images/dashboard/icon_security.png";
import "./ProfilePage.css";

const ProfilePage = () => {
  const [selectedTab, setSelectedTab] = useState("Personal Info");

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>My Profile Details</h1>

        <div className="profile-tabs">
          <RemittixButton
            text="Personal Info"
            leftImage={iconInfo}
            rightImage={iconRightArrow}
            showLeftImage={true}
            showRightImage={true}
            hoverColor="transparent"
            backgroundColor={
              selectedTab === "Personal Info"
                ? "rgba(249, 255, 56, 0.10)"
                : "transparent"
            }
            textColor={selectedTab === "Personal Info" ? "#000" : "#FFF"}
            hoverTextColor="#FFF"
            borderColor="#697783"
            width="250px"
            onClick={() => setSelectedTab("Personal Info")}
          />
          <RemittixButton
            text="Account Security"
            leftImage={iconSecurity}
            rightImage={iconRightArrow}
            showLeftImage={true}
            showRightImage={true}
            hoverColor="transparent"
            backgroundColor={
              selectedTab === "Account Security"
                ? "rgba(249, 255, 56, 0.10)"
                : "transparent"
            }
            textColor={selectedTab === "Account Security" ? "#000" : "#FFF"}
            hoverTextColor="#FFF"
            borderColor="#697783"
            width="250px"
            onClick={() => setSelectedTab("Account Security")}
          />
        </div>

        <div className="profile-content">
          {selectedTab === "Personal Info" ? (
            <div className="info-content">
              <div className="input-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" />
              </div>
              <div className="input-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email address" />
              </div>
              <div className="input-group phone-input">
                <label>Phone Number</label>
                <div className="phone-input">
                  <select>
                    <option>UK</option>
                    <option>USA</option>
                  </select>
                  <input type="text" placeholder="Enter phone number" />
                </div>
              </div>
            </div>
          ) : (
            <div className="security-content">
              <div className="input-group">
                <label>Current Password</label>
                <input type="password" placeholder="Enter current password" />
              </div>
              <div className="input-group">
                <label>New Password</label>
                <input type="password" placeholder="Enter new password" />
              </div>
              <div className="input-group">
                <label>Confirm Password</label>
                <input type="password" placeholder="Confirm new password" />
              </div>
            </div>
          )}
          <RemittixButton
            text="Update Profile"
            leftImage={iconInfo}
            showLeftImage={true}
            showRightImage={false}
            hoverColor="transparent"
            textColor="#000"
            hoverTextColor="#FFF"
            borderColor="#697783"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
