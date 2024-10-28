import React, { useState, useEffect } from "react";
import Select from "react-select";
import ReactCountryFlag from "react-country-flag";
import "./PhoneInput.css";
import phoneInputData from "./PhoneInput.json";

const PhoneInput = () => {
  const [countryOptions, setCountryOptions] = useState([]);
  const [countryCode, setCountryCode] = useState("");

  // Load data from JSON on component mount
  useEffect(() => {
    const loadCountryOptions = phoneInputData.map((country) => ({
      value: country.value,
      label: (
        <div className="select-option">
          <ReactCountryFlag countryCode={country.countryCode} svg />
          <span>{country.label}</span>
        </div>
      ),
      countryCode: country.countryCode,
    }));
    setCountryOptions(loadCountryOptions);
    setCountryCode(loadCountryOptions[0].value); // Set default to first option
  }, []);

  const handleCountryChange = (selectedOption) => {
    setCountryCode(selectedOption.value);
  };

  return (
    <div className="input-group">
      <label>Phone Number</label>
      <div className="phone-input">
        <div className="select-wrapper">
          <Select
            options={countryOptions}
            value={countryOptions.find(
              (option) => option.value === countryCode
            )}
            isSearchable={false}
            onChange={handleCountryChange}
            styles={{
              control: (base) => ({
                ...base,
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
                color: state.isSelected ? "#000" : "rgba(255, 255, 255, 0.7)",
              }),
              menu: (base) => ({
                ...base,
                background: "rgba(17, 24, 30, 0.9)",
                borderRadius: "8px",
                zIndex: 10,
              }),
            }}
          />
        </div>

        <input
          type="text"
          value={countryCode}
          readOnly
          className="country-code-input"
        />

        <input
          type="text"
          placeholder="Enter phone number"
          className="phone-number-input"
        />
      </div>
    </div>
  );
};

export default PhoneInput;
