import React, { useState } from "react";
import Select from "react-select";
import RemittixButton from "./../../components/RemittixButton/RemittixButton";

import CryptoComboBox from "../components/CryptoComboBox/CryptoComboBox";
import PhoneInput from "../components/PhoneInput/PhoneInput";

import iconInfo from "../../assets/images/icon_info.png";
import ReactCountryFlag from "react-country-flag";
import iconRightArrow from "../../assets/images/icon_right_arrow_white.png";
import iconSecurity from "../../assets/images/icon_security.png";
import circleSchool from "../../assets/images/circle_school.png";
import "./../style/ProfilePage.css";

const Profile = () => {
  const countryOptions = [
    {
      value: "+44",
      label: (
        <>
          <ReactCountryFlag
            countryCode="GB"
            svg
            style={{ marginRight: "8px" }}
          />{" "}
          UK
        </>
      ),
    },
    {
      value: "+1",
      label: (
        <>
          <ReactCountryFlag
            countryCode="US"
            svg
            style={{ marginRight: "8px" }}
          />{" "}
          USA
        </>
      ),
    },
  ];

  const [selectedTab, setSelectedTab] = useState("Personal Info");

  const [countryCode, setCountryCode] = useState(countryOptions[0].value);

  const handleCountryChange = (selectedOption) => {
    setCountryCode(selectedOption.value);
  };

  const [isEnabled, setIsEnabled] = useState(true); // True for 'Enable', false for 'Disable'

  return (
    <div className="dashboard-page profile-page dashboard-flex">
      {/* First Row */}
      <div className="profile-header">
        <h1>My Profile Details</h1>
        <div className="profile-tab-outer">
          <div className="profile-tabs">
            <RemittixButton
              text="Personal Info"
              leftImage={iconInfo}
              rightImage={iconRightArrow}
              showLeftImage={true}
              showRightImage={true}
              hoverColor="rgba(249, 255, 56, 0.20)"
              backgroundColor={
                selectedTab === "Personal Info"
                  ? "rgba(249, 255, 56, 0.50)"
                  : "transparent"
              }
              textColor={selectedTab === "Personal Info" ? "#000" : "#FFF"}
              hoverTextColor="#FFF"
              borderColor="rgba(255, 255, 255, 0.12)"
              width="250px"
              height="48px"
              leftMargine="10px"
              onClick={() => setSelectedTab("Personal Info")}
            />
            <RemittixButton
              text="Account Security"
              leftImage={iconSecurity}
              rightImage={iconRightArrow}
              showLeftImage={true}
              showRightImage={true}
              hoverColor="rgba(249, 255, 56, 0.20)"
              backgroundColor={
                selectedTab === "Account Security"
                  ? "rgba(249, 255, 56, 0.50)"
                  : "transparent"
              }
              textColor={selectedTab === "Account Security" ? "#000" : "#FFF"}
              hoverTextColor="#FFF"
              borderColor="rgba(255, 255, 255, 0.12)"
              width="250px"
              height="48px"
              leftMargine="10px"
              onClick={() => setSelectedTab("Account Security")}
            />
          </div>
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

              <div className="input-group">
                <label>Phone Number</label>
                <div className="phone-input">
                  {/* Wrapper to control width */}
                  <div className="select-wrapper">
                    <Select
                      options={countryOptions}
                      defaultValue={countryOptions[0]}
                      isSearchable={false}
                      onChange={handleCountryChange}
                      styles={{
                        control: (base) => ({
                          ...base,
                          width: "100%", // Ensure full width in wrapper
                          minHeight: "64px",
                          background: "rgba(17, 24, 30, 0.32)",
                          border: "none",
                          boxShadow: "none",
                        }),
                        singleValue: (base) => ({
                          ...base,
                          color: "rgba(255, 255, 255, 0.7)",
                          fontSize: "16px",
                          fontWeight: "700",
                          display: "flex",
                          alignItems: "center",
                        }),
                        option: (base, state) => ({
                          ...base,
                          background: state.isSelected
                            ? "rgba(249, 255, 56, 0.40)"
                            : state.isFocused
                            ? "rgba(249, 255, 56, 0.10)"
                            : "rgba(17, 24, 30, 0.32)",
                          color: state.isSelected
                            ? "#000"
                            : "rgba(255, 255, 255, 0.7)",
                        }),
                        menu: (base) => ({
                          ...base,
                          background: "rgba(17, 24, 30, 0.9)",
                          borderRadius: "8px",
                          zIndex: 10,
                          width: "100%", // Match control width for consistency
                        }),
                      }}
                    />
                  </div>

                  <input
                    type="text"
                    style={{
                      width: "10px",
                      textAlign: "center",
                      color: "rgba(255, 255, 255, 0.7)",
                      fontWeight: "700",
                    }}
                    value={countryCode}
                    readOnly
                  />
                  <input
                    type="text"
                    style={{
                      flex: 1,
                      marginLeft: "8px",

                      padding: "22px",
                      color: "rgba(255, 255, 255, 0.35)",
                      fontSize: "16px",
                      fontWeight: "700",
                    }}
                    placeholder="Enter phone number"
                  />
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
            hoverColor="rgba(249, 255, 56, 0.20)"
            textColor="#000"
            hoverTextColor="#FFF"
            backgroundColor="rgba(249, 255, 56, 0.50)"
            borderColor="rgba(255, 255, 255, 0.12)"
            width="250px"
            leftMargine="10px"
          />
        </div>
      </div>

      {/* Second Row */}
      <div className="profile-options">
        <div className="option-box option-box-auth">
          <h1>Two-Factor Authentication</h1>
          <p>
            With 2-Step Verification, also called two-factor authentication, you
            can add an extra layer of security to your account in addition to
            your password.
          </p>
          <div className="auth-options">
            <div className="toggle-buttons">
              <button
                className={`toggle-button ${isEnabled ? "toggle-active" : ""}`}
                onClick={() => setIsEnabled(true)}
              >
                <img src={circleSchool} alt="Enable" /> Enable
              </button>
              <button
                className={`toggle-button ${!isEnabled ? "toggle-active" : ""}`}
                onClick={() => setIsEnabled(false)}
              >
                <img src={circleSchool} alt="Disable" /> Disable
              </button>
            </div>
            <div className="auth-status">
              <span>Current Status:</span>
              <button className="status-button">Disabled</button>
            </div>
          </div>
        </div>

        <div className="option-box option-box-wallet">
          <h1>Receiving Wallet</h1>
          <p>
            Add or update your Ethereum wallet address to receive your $RTX
            tokens.
          </p>
          <div className="wallet-options">
            <button className="wallet-update">Update Wallet</button>
            <span className="wallet-text">Receiving Wallet</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
