import React from "react";
import "./header.css";
import globe from "../../assets/images/globe.png";
import globe_circle from "../../assets/images/globe_circle.png";
import logo from "../../assets/images/logo.png";
import {
  ComboBox,
  Button,
  Ellipse,
  GradientCircle,
  RemittixButton,
  Slideshow,
} from "../../components";

import blackBtnEllips from "../../assets/images/btn_ellips_dark.png";
import yellowBtnEllips from "../../assets/images/btn_ellips_yellow.png";
import blackArrow from "../../assets/images/icon_arrow_black.png";
import whitekArrow from "../../assets/images/icon_arrow_white.png";
import bitcoin from "../../assets/images/logos_bitcoin.png";
import etherium from "../../assets/images/token-branded_ankreth.png";
import usdt from "../../assets/images/cryptocurrency-color_usdt.png";
import bnb from "../../assets/images/cryptocurrency-color_bnb.png";
import solana from "../../assets/images/token-branded_solana.png";
import visa from "../../assets/images/ri_visa-line.png";
import mastercard from "../../assets/images/logos_mastercard.png";

import leftIcon from "../../assets/images/circle_school.png"; // Import left icon (optional)
import rightIcon from "../../assets/images/icon_arrow_white.png"; // Import right icon

const Header = () => {
  // Dynamically created options array
  const cryptocurrencies = [
    { icon: bitcoin, label: "BTC", amount: "$45,000" },
    { icon: etherium, label: "ETH", amount: "$3,200" },
    { icon: usdt, label: "USDT", amount: "$1" },
    { icon: bnb, label: "BNB", amount: "$430" },
    { icon: solana, label: "SOL", amount: "$150" },
  ];

  return (
    <div className="remtittix__header section__padding" id="home">
      <div className="remtittix__header-content">
        <h1 className="heading__text">
          Fiat Rails For <br />
          <span className="highlighted"> Crypto Payments </span>
        </h1>
        <p className="sub_heading__text">
          <b>Rimittix</b> connects crypto with <b>40+</b> fiat currencies in{" "}
          <b>170+</b> countries.
        </p>
        <div className="remittix_header_heading_btn">
          <RemittixButton
            text="Login"
            leftImage={leftIcon}
            rightImage={rightIcon}
            showLeftImage={true} // Toggle to show the left image
            showRightImage={true} // Toggle to show the right image
            backgroundColor="transparent" // Solid background color (no gradient)
            hoverColor="#F9FF38" // Hover color
            textColor="#FFF" // Text color
            hoverTextColor="#000" // Text color on hover
            borderColor="#697783" // Border color matching background
            onClick={() => console.log("Button clicked")}
          />

          <RemittixButton
            text="Join Presale"
            leftImage={leftIcon}
            rightImage={rightIcon}
            showLeftImage={true} // Toggle to show the left image
            showRightImage={true} // Toggle to show the right image
            hoverColor="transparent" // Hover color
            textColor="#000" // Text color
            hoverTextColor="#FFF" // Text color on hover
            borderColor="#697783" // Border color matching background
            onClick={() => console.log("Button clicked")}
          />
        </div>
        <div className="remtittix__header-content_tokensales">
          <div className="remtittix__header-content_tokensales_statistic">
            <div>
              <span className="dark_text">1RTX =</span> $0.01
            </div>
            <div>
              <span className="dark_text">Presale Stage:</span> Stage 1
            </div>
          </div>

          <div className="remtittix__header-content_tokensales-statusbar">
            <div className="remtittix__header-content_tokensales_statusbar-progress">
              75%
            </div>
          </div>

          <div className="remtittix__header-content_tokensales_card">
            <div className="remtittix__header-content_tokensales_card-box">
              USDT Raised:{" "}
              <div className="remtittix__header-content_tokensales_amount">
                $17,200,000
              </div>
            </div>
            <div className="remtittix__header-content_tokensales_card-box">
              Tokens Sold:{" "}
              <div className="remtittix__header-content_tokensales_amount">
                265,000,000
              </div>
            </div>
          </div>

          <div className="remtittix__header-content_tokensales_sale">
            <div className="remtittix__header-button">
              <button className="button-highlight">
                <div className="btn_content">
                  <div className="btn_text">
                    <span>Join Presale</span>
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
            </div>
            <div className="crypto-logos-container">
              <img src={bitcoin} alt="Bitcoin" className="crypto-logo" />
              <img src={etherium} alt="Ethereum" className="crypto-logo" />
              <img src={usdt} alt="USDT" className="crypto-logo" />
              <img src={bnb} alt="BNB" className="crypto-logo" />
              <img src={solana} alt="Solana" className="crypto-logo" />
              <img src={visa} alt="Visa" className="crypto-logo" />
              <img src={mastercard} alt="Mastercard" className="crypto-logo" />
            </div>
          </div>
        </div>
      </div>
      <Slideshow interval={4000} transitionEffect="slide-left" />

      <div className="remtittix__header-content_tokensales_mobile">
        <div className="remtittix__header-content_tokensales_statistic">
          <div>
            <span className="dark_text">1RTX =</span> $0.01
          </div>
          <div>
            <span className="dark_text">Presale Stage:</span> Stage 1
          </div>
        </div>

        <div className="remtittix__header-content_tokensales-statusbar">
          <div className="remtittix__header-content_tokensales_statusbar-progress">
            75%
          </div>
        </div>

        <div className="remtittix__header-content_tokensales_card">
          <div className="remtittix__header-content_tokensales_card-box">
            USDT Raised:{" "}
            <div className="remtittix__header-content_tokensales_amount">
              $17,200,000
            </div>
          </div>
          <div className="remtittix__header-content_tokensales_card-box">
            Tokens Sold:{" "}
            <div className="remtittix__header-content_tokensales_amount">
              265,000,000
            </div>
          </div>
        </div>

        <div className="remtittix__header-content_tokensales_sale">
          <div className="remtittix__header-button"></div>
          <div className="crypto-logos-container">
            <img src={bitcoin} alt="Bitcoin" className="crypto-logo" />
            <img src={etherium} alt="Ethereum" className="crypto-logo" />
            <img src={usdt} alt="USDT" className="crypto-logo" />
            <img src={bnb} alt="BNB" className="crypto-logo" />
            <img src={solana} alt="Solana" className="crypto-logo" />
            <img src={visa} alt="Visa" className="crypto-logo" />
            <img src={mastercard} alt="Mastercard" className="crypto-logo" />
          </div>
        </div>
      </div>
      {/* <!-- New section starts here --> */}
      <div className="remtittix__new-section">
        <div className="remtittix__section-divider"></div>

        <div className="remtittix__new-section-content">
          <div className="remtittix__header_global-reach">
            <div className="image-overlap-wrapper">
              <img src={globe} alt="Remttix Logo" className="image-base" />
              <img
                src={globe_circle}
                alt="Remttix Logo"
                className="image-overlay"
              />
            </div>
          </div>
          <div className="remtittix__header_why-us">
            {/* <!-- Content for Why Us --> */}
            <p
              className="sub_heading__text highlighted"
              style={{ marginTop: 40, marginBottom: 20 }}
            >
              Why Rimittix?
            </p>
            <h1
              className="heading__50"
              style={{ marginTop: 20, marginBottom: 40 }}
            >
              Connecting crypto with local payment rails everywhere
            </h1>
            <p
              className="sub_heading__text"
              style={{ marginTop: 40, marginBottom: 20 }}
            >
              <b className="highlighted">Rimittix</b> enables crypto holders and
              web3 companies to issue crypto-to-fiat payments all over the
              world, mostly on local payment rails.
            </p>
            <p
              className="sub_heading__text"
              style={{ marginTop: 40, marginBottom: 20 }}
            >
              Finally, crypto-performance and fiat usability are one and the
              same.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
