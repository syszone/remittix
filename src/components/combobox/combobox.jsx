import React, { useState } from 'react';
import './combobox.css'; // Import the custom CSS

const ComboBox = ({ options = [], placeholder = "Select an option" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggles the dropdown open/close
  };

  const handleSelect = (option) => {
    setSelectedOption(option); // Set the selected option (full object)
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="combobox-container">
      <div className="combobox-header" onClick={toggleDropdown}>
        {/* Display the selected option or the placeholder */}
        {selectedOption ? (
          <div className="combobox-selected-item">
            <img src={selectedOption.icon} alt={selectedOption.label} className="combo-icon" />
            <span className="combo-amount">{selectedOption.amount}</span>
            <span className="combo-label">{selectedOption.label}</span>
          </div>
        ) : (
          <span className="combobox-selected">{placeholder}</span>
        )}
        <span className={`combobox-arrow ${isOpen ? 'open' : ''}`} />
      </div>
      {isOpen && (
        <ul className="combobox-list">
          {options.map((option, index) => (
            <li
              key={index}
              className={`combobox-option ${selectedOption?.label === option.label ? 'selected' : ''}`}
              onClick={() => handleSelect(option)}
            >
              <img src={option.icon} alt={option.label} className="combo-icon" />
              <span className="combo-amount">{option.amount}</span>
              <span className="combo-label">{option.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ComboBox;
