import React from "react";
import "./footer.css";
import logoBlack from "../../assets/images/logo_black.png";
import {
  Facebook,
  Twitter,
  LinkedIn,
  X,
  Telegram,
  Instagram,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="remtittix__footer  section__padding">
      {/* <!-- First Row --> */}
      <div className="remtittix__footer-row">
        <div className="remtittix__footer-left">
          <div className="remtittix_navbar-links_logo ">
            <img src={logoBlack} alt="Remttix Logo" />
            <span className="black_text"> Remittix </span>
          </div>

          {/* <img src="path/to/logo.png" alt="Logo" className="remtittix__footer-logo"/> */}
        </div>
        <div className="remtittix__footer-right">
          <a
            href="/privacy-policy"
            className="remtittix__footer-link menu-item"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="remtittix__footer-link menu-item"
          >
            Terms of Service
          </a>
        </div>
      </div>

      {/* <!-- Divider --> */}
      <div className="remtittix__footer-divider"></div>

      {/* <!-- Second Row --> */}
      <div className="remtittix__footer-row">
        <div className="remtittix__footer-left">
          <p
            className="remtittix__footer-text"
            style={{ marginBottom: 30, color: "#030303", fontWeight: "bold" }}
          >
            Disclaimer
          </p>
          <p className="remtittix__footer-text">
            Digital currencies may be unregulated in your jurisdiction. The
            value of digital currencies may go down as well as up. Profits may
            be subject to capital gains or other taxes applicable in your
            jurisdiction.
          </p>
        </div>
        <div className="remtittix__footer-right column_2">
          <div className="remtittix__footer-contact-info">
            <p
              className="remtittix__footer-text"
              style={{ marginBottom: 30, color: "#030303", fontWeight: "bold" }}
            >
              Contact info
            </p>
            <ul className="remtittix__footer-contact">
              <li>support@rimittitx.com</li>
              <li>marketing@rimittix.com</li>
              <li>investors@rimittix.com</li>
            </ul>
          </div>

          <div className="remtittix__footer-social">
            <p
              className="remtittix__footer-text"
              style={{ marginBottom: 30, color: "#030303", fontWeight: "bold" }}
            >
              Follow us on:
            </p>
            <div>
              <a href="#" className="remtittix__footer-social-icon">
                <X />
              </a>
              <a href="#" className="remtittix__footer-social-icon">
                <Telegram />
              </a>
              <a href="#" className="remtittix__footer-social-icon">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Divider --> */}
      <div className="remtittix__footer-divider"></div>

      {/* <!-- Third Row --> */}
      <div className="remtittix__footer-row">
        <div className="remtittix__footer-left">
          <a href="/about-us" className="remtittix__footer-link  menu-item">
            About Us
          </a>
          <a href="/ecosystem" className="remtittix__footer-link  menu-item">
            Ecosystem
          </a>
          <a href="/tokenomics" className="remtittix__footer-link  menu-item">
            Tokenomics
          </a>
          <a href="/roadmap" className="remtittix__footer-link  menu-item">
            Roadmap
          </a>
          <a href="/whitepaper" className="remtittix__footer-link  menu-item">
            Whitepaper
          </a>
          <a href="/how-to-buy" className="remtittix__footer-link  menu-item">
            How to buy?
          </a>
        </div>
        <div className="remtittix__footer-right">
          <p className="remtittix__footer-text">
            © All Rights reserved by Rimittix - 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
