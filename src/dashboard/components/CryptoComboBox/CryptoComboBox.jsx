import React, { useState } from "react";
import "./CryptoComboBox.css"; // Import encapsulated styles

const CryptoComboBox = ({ width = "358px", height = "64px", options }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="crypto-combobox-container" style={{ width, height }}>
      {/* Selected Item */}
      <div
        className="crypto-combobox-selected"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? (
          <>
            <img
              src={selectedOption.icon}
              alt={selectedOption.label}
              className="crypto-combobox-icon"
            />
            <span className="crypto-combobox-label">
              {selectedOption.label}
            </span>
          </>
        ) : (
          <span className="crypto-combobox-placeholder">Select a crypto</span>
        )}

        {/* Down Arrow */}
        <div className="crypto-combobox-arrow">&#9662;</div>
      </div>

      {/* Dropdown List */}
      {isOpen && (
        <ul className="crypto-combobox-list">
          {options.map((option, index) => (
            <li
              key={index}
              className="crypto-combobox-item"
              onClick={() => handleSelect(option)}
            >
              <img
                src={option.icon}
                alt={option.label}
                className="crypto-combobox-icon"
              />
              <span className="crypto-combobox-label">{option.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CryptoComboBox;
