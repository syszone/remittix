import React from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import logo from "../../assets/images/logo.png";
import blackBtnEllips from "../../assets/images/btn_ellips_dark.png";
import yellowBtnEllips from "../../assets/images/btn_ellips_yellow.png";
import blackArrow from "../../assets/images/icon_arrow_black.png";
import whitekArrow from "../../assets/images/icon_arrow_white.png";
import closeIcon from "../../assets/images/icon_close.png";
import { Link } from "react-router-dom";
import RemittixButton from "../RemittixButton/RemittixButton";
import "./navbar.css";

// Menu Component to render links
const Menu = ({ closeMenu }) => (
  <>
    <p>
      <Link to="/how-it-works" onClick={closeMenu}>
        How it Works
      </Link>
    </p>
    <p>
      <a href="#tokenomitc" onClick={closeMenu}>
        Tokonomics
      </a>
    </p>
    <p>
      <Link to="/use-case" onClick={closeMenu}>
        Use Cases
      </Link>
    </p>
    <p>
      <Link to="/blog" onClick={closeMenu}>
        Blog
      </Link>
    </p>
    <p>
      <a href="#documents" onClick={closeMenu}>
        Documents
      </a>
    </p>
  </>
);

const Navbar = ({ toggleMenu, onToggleMenu }) => {
  const [animationClass, setAnimationClass] = React.useState("slide-down");
  const navigate = useNavigate(); // Hook for navigation

  // Ensure menu toggle only triggers in mobile view
  const handleMenuToggle = () => {
    if (window.innerWidth <= 1050) {
      setAnimationClass("slide-down");
      onToggleMenu(true);
    }
  };

  const handleLoginClick = () => {
    navigate("/login"); // Navigates to the login page
  };

  const closeMenuWithAnimation = () => {
    setAnimationClass("slide-up"); // Trigger slide-up animation
    setTimeout(() => {
      onToggleMenu(false); // Close menu after animation finishes
    }, 400); // Match the animation duration in CSS
  };

  return (
    <>
      <div className="remtittix_navbar">
        <div className="remtittix_navbar-links">
          <Link to="/" className="remtittix_navbar-links_logo">
            <img src={logo} alt="Remttix Logo" />
            <span> Remittix </span>
          </Link>
          <div className="remittix_3line">
            {!toggleMenu && (
              <RiMenu3Line
                color="#F9FF38"
                size={27}
                onClick={() => {
                  setAnimationClass("slide-down"); // Trigger slide-down on open
                  onToggleMenu(true); // Open menu
                }}
              />
            )}
          </div>
          <div className="remtittix_navbar-links_container right-align">
            <Menu closeMenu={closeMenuWithAnimation} />
          </div>

          <div className="remtittix_navbar-button">
            <button className="button-highlight">
              <div className="btn_content">
                <div className="btn_text">
                  <span className="btn-txt">Join Presale</span>
                </div>
                <div className="btn_image_container">
                  <div className="btn_Image bottom">
                    <img src={yellowBtnEllips} alt="Yellow Ellips" />
                  </div>
                  <div className="btn_Image top">
                    <img src={blackArrow} alt="Arrow" />
                  </div>
                </div>
              </div>
            </button>

            <button onClick={handleLoginClick}>
              <div className="btn_content">
                <div className="btn_text">
                  <span className="btn-txt">Login</span>
                </div>
                <div className="btn_image_container">
                  <div className="btn_Image bottom">
                    <img src={blackBtnEllips} alt="Black Ellips" />
                  </div>
                  <div className="btn_Image top">
                    <img src={whitekArrow} alt="White Arrow" />
                  </div>
                </div>

                <div className="ellipse_container"></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Rendered via Portal */}
      {createPortal(
        <div className={`remittix_mobile-menu ${toggleMenu ? "active" : ""}`}>
          {toggleMenu && (
            <div
              className={`remittix_navbar-menu_container ${animationClass} mobileMenu`}
              style={{ zIndex: 1000 }} // Keep mobile menu on top
            >
              <div className="remittix_navbar-menu_inner">
                {/* Logo and Close Button */}
                <div className="remittix_navbar-header">
                  <Link
                    to="/"
                    className="remittix_navbar-links_logo"
                    onClick={closeMenuWithAnimation}
                  >
                    <img src={logo} alt="Remittix Logo" />
                    <span>Remittix</span>
                  </Link>
                  <img
                    src={closeIcon}
                    alt="Close Icon"
                    className="remittix_navbar-close_icon"
                    onClick={closeMenuWithAnimation}
                  />
                </div>

                {/* Divider */}
                <div className="remittix_navbar-divider"></div>

                {/* Menu Links */}
                <div className="remittix_navbar-menu_items">
                  <Menu closeMenu={closeMenuWithAnimation} />
                </div>

                {/* Divider */}
                <div className="remittix_navbar-divider"></div>

                {/* Login and Presale Button */}
                <div className="remittix_navbar-menu_container-button">
                  <RemittixButton text="Login" onClick={handleLoginClick} />
                </div>
              </div>
            </div>
          )}
        </div>,
        document.body // Portal renders the mobile menu outside the main app
      )}
    </>
  );
};

export default Navbar;
