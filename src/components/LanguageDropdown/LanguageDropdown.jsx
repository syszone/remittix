import React, { useState } from "react";
import Flag from "react-world-flags";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./LanguageDropdown.css";

const languages = [
  { code: "US", name: "English" },
  { code: "FR", name: "Français" },
  { code: "ES", name: "Español" },
];

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]); // Default to English

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language); // Update selected language
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="language-dropdown">
      {/* Dropdown trigger */}
      <div className="language-dropdown-toggle" onClick={toggleDropdown}>
        <Flag
          code={selectedLanguage.code}
          style={{ width: "25px", height: "25px" }}
        />
        <span>{selectedLanguage.name}</span>
        <RiArrowDropDownLine className="dropdown-icon" />
      </div>

      {/* Dropdown content */}
      {isOpen && (
        <div className="language-dropdown-menu">
          {languages.map((language) => (
            <div
              key={language.code}
              className="language-item"
              onClick={() => handleLanguageChange(language)}
            >
              <Flag
                code={language.code}
                style={{ width: "25px", height: "25px" }}
              />
              <span>{language.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
