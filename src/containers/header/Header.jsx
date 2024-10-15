import React from "react";
import "./header.css";
import globe from "../../assets/images/globe.png";
import globe_circle from "../../assets/images/globe_circle.png";
import logo from "../../assets/images/logo.png";
import { ComboBox, Button, Ellipse, GradientCircle } from "../../components";
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
      <div className="remtittix__header-content_bankdetails">
        <div className="remtittix__header-content_bankdetails-innerbox">
          <div className="remtittix__header-content_bankdetails-logo">
            <span className="poweredby">powered by</span>
            <img src={logo} alt="Remttix Logo" />
            <span> Remittix </span>
          </div>
          <div>
            <h1 className="heading__30">Enter Destination</h1>
            <h1 className="heading__40 highlighted">Bank Account Details</h1>
          </div>

          {/* <div className='remtittix__header-content_bankdetails-inputbox'>
          <div className="row">
            <span>IBAN</span>
            <input className='input-box'></input>
          </div>

          <div className="row">
            <span>You send</span>
            <select className='combo-box'></select>
          </div>

          <div className="row">
            <span>They receive</span>
            <div className='info-box'> </div>
          </div>
        </div> */}

          <div className="remtittix__header-content_bankdetails-inputbox">
            <span>IBAN</span>
            <input className="input-box" />

            <span className="secondry-color-text">You send</span>
            {/* Pass the dynamic options to the ComboBox */}
            <ComboBox
              options={cryptocurrencies}
              placeholder="Choose a currency..."
            />

            <span className="secondry-color-text" style={{ marginTop: 20 }}>
              They receive
            </span>
            <div className="info-box">
              <div className="left-section">
                <span className="currency-symbol">$</span>
                <span className="currency-amount">2786.39</span>
              </div>
              <span className="currency-label">EUR</span>
            </div>

            <div className="dividing-stroke"> </div>
            <div>
              <Button text="Connect wallet & Pay" highlighted={true} />
              <Button text="Pay Manually" highlighted={false} />
            </div>
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
