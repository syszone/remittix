import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/images/logo.png";
import blackBtnEllips from "../../assets/images/btn_ellips_dark.png";
import yellowBtnEllips from "../../assets/images/btn_ellips_yellow.png";
import blackArrow from "../../assets/images/icon_arrow_black.png";
import whitekArrow from "../../assets/images/icon_arrow_white.png";
import { Link } from "react-router-dom";
import "./navbar.css";

const Menu = () => (
  <>
    <p>
      <Link to="/how-it-works">How it Works</Link>
    </p>
    <p>
      <a href="#tokenomitc">Tokonomics</a>
    </p>
    <p>
      <Link to="/use-case">Use Cases</Link>
    </p>
    <p>
      <Link to="/blog">Blog</Link>
    </p>
    <p>
      <a href="#documents">Documents</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const handleLoginClick = () => {
    navigate("/login"); // Navigates to the login page
  };

  return (
    <div className="remtittix_navbar">
      <div className="remtittix_navbar-links">
        <Link to="/" className="remtittix_navbar-links_logo">
          <img src={logo} alt="Remttix Logo" />
          <span> Remittix </span>
        </Link>
        <div className="remtittix_navbar-links_container right-align">
          <Menu />
        </div>

        <div className="remtittix_navbar-button">
          <button className="button-highlight">
            <div className="btn_content">
              <div className="btn_text">
                <span className="btn-txt">Join Presale</span>
              </div>
              <div className="btn_image_container">
                <div className="btn_Image bottom">
                  <img src={yellowBtnEllips} />
                </div>
                <div className="btn_Image top">
                  <img src={blackArrow} />
                </div>
              </div>
            </div>
          </button>

          {/* Add the onClick handler to the Login button */}
          <button onClick={handleLoginClick}>
            <div className="btn_content">
              <div className="btn_text">
                <span className="btn-txt">Login</span>
              </div>
              <div className="btn_image_container">
                <div className="btn_Image bottom">
                  <img src={blackBtnEllips} />
                </div>
                <div className="btn_Image top">
                  <img src={whitekArrow} />
                </div>
              </div>

              <div className="ellipse_container"></div>
            </div>
          </button>
        </div>
      </div>
      <div className="remtittix_navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#F9FF38"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#F9FF38"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="remtittix_navbar-menu_container scale-up-center">
            <div className="remtittix_navbar-menu_container-links">
              <Menu />

              <div className="remtittix_navbar-menu_container-button">
                <button className="button-highlight">Join Presale</button>
                <button onClick={handleLoginClick}>Login</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
