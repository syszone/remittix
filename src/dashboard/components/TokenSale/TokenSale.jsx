import React from "react";
import "./TokenSale.css"; // Custom styles for this component
import bitcoin from "../../../assets/images/logos_bitcoin.png";
import etherium from "../../../assets/images/token-branded_ankreth.png";
import usdt from "../../../assets/images/cryptocurrency-color_usdt.png";
import bnb from "../../../assets/images/cryptocurrency-color_bnb.png";
import solana from "../../../assets/images/token-branded_solana.png";
import visa from "../../../assets/images/ri_visa-line.png";
import mastercard from "../../../assets/images/logos_mastercard.png";
import logo from "../../../assets/images/logo.png"; // For the ETH input box

import sparkling from "../../../assets/images/dashboard/sparkling.png";

import { ComboBox } from "../../../components";
import CryptoComboBox from "../CryptoComboBox/CryptoComboBox";

const cryptocurrencies = [
  { icon: bitcoin, label: "BTC" },
  { icon: etherium, label: "ETH" },
  { icon: usdt, label: "USDT" },
  { icon: bnb, label: "BNB" },
  { icon: solana, label: "SOL" },
];

const TokenSale = () => {
  const progressPercent = 75;

  return (
    <div className="tokensale-container">
      {/* First Row */}
      <div className="tokensale-row tokensale-header">
        <span>
          1 RTX = <span className="highlight">$0.01</span>
        </span>
        <span className="tokensale-stage">
          Current Stage: <span className="highlight">Stage 1</span>
        </span>
      </div>

      {/* Second Row */}
      <div className="tokensale-row tokensale-middle-text tokensale-gradiantbox">
        *Until Price Increase
      </div>

      {/* Third Row (Countdown Timer) */}
      <div className="tokensale-row tokensale-countdown">
        <div className="countdown-box">
          <div className="countdown-number">12</div>
          <div className="countdown-label">Days</div>
        </div>
        <div className="countdown-box">
          <div className="countdown-number">24</div>
          <div className="countdown-label">Hours</div>
        </div>
        <div className="countdown-box">
          <div className="countdown-number">36</div>
          <div className="countdown-label">Minutes</div>
        </div>
        <div className="countdown-box selected">
          <div className="countdown-number">56</div>
          <div className="countdown-label selected-text">Seconds</div>
        </div>
      </div>

      {/* Fourth Row (Progress Bar) */}
      <div className="tokensale-progress">
        <div className="progress-bar">
          {/* Dynamically set percentage and width */}
          <div
            className="progress-fill"
            style={{ width: `${progressPercent}%` }}
          >
            <span
              className="progress-text"
              style={{ left: `${progressPercent}%` }}
            >{`${progressPercent}%`}</span>
          </div>
        </div>
      </div>

      {/* Fifth Row (USDT Raised) */}
      <div className="tokensale-row tokensale-raised">
        <div className="raised-box">
          <span className="raised-label">USDT Raised:</span>
          <div className="raised-value-box">
            <span className="raised-value">$1,000,000</span>
          </div>
        </div>
        <div className="raised-box">
          <span className="raised-label">Total Supply:</span>
          <div className="raised-value-box">
            <span className="raised-value">10,000 RTX</span>
          </div>
        </div>
      </div>

      {/* Sixth Row (Accepted Payments) */}
      <div className="tokensale-row tokensale-payments">
        <span className="accepted-text">Buy with:</span>
        <div className="tokensale-crypto-logos-container">
          <img src={bitcoin} alt="Bitcoin" className="crypto-logo" />
          <img src={etherium} alt="Ethereum" className="crypto-logo" />
          <img src={usdt} alt="USDT" className="crypto-logo" />
          <img src={bnb} alt="BNB" className="crypto-logo" />
          <img src={solana} alt="Solana" className="crypto-logo" />
          <img src={visa} alt="Visa" className="crypto-logo" />
          <img src={mastercard} alt="Mastercard" className="crypto-logo" />
        </div>
      </div>

      {/* Divider */}
      <div className="tokensale-divider"></div>

      {/* Seventh Row (Payment Method and Amount of ETH) */}
      <div
        className="tokensale-row tokensale-payment-method"
        style={{ marginBottom: 30, marginTop: 40 }}
      >
        <div
          className="tokensale-payment-method-box"
          style={{ width: "358px" }}
        >
          <label className="tokensale-payment-label">
            Select Payment Method
          </label>
          {/* ComboBox Component */}
          <CryptoComboBox options={cryptocurrencies} />
        </div>

        <div className="tokensale-amount-box" style={{ width: "358px" }}>
          <label className="tokensale-payment-label">
            Amount of ETH you Pay
          </label>
          <div className="tokensale-input-box">
            <input
              type="text"
              placeholder="Enter Amount"
              className="tokensale-input"
            />
            <button className="tokensale-max-btn">Max</button>
          </div>
        </div>
      </div>

      {/* Eighth Row (Amount Received) */}
      <div className="tokensale-receive">
        <label className="tokensale-payment-label-white">
          Amount of RTX You Receive
        </label>
        <div className="tokensale-input-box" style={{ marginTop: 10 }}>
          <input type="text" placeholder="0" className="tokensale-input" />
          <img src={logo} alt="Logo" className="tokensale-input-logo" />
        </div>
      </div>

      {/* Ninth Row (Buy Now Button) */}
      <div className="tokensale-row tokensale-buy">
        <button className="buy-now-btn">
          Buy Now
          <img src={sparkling} alt="Sparkling" className="sparkling-icon" />
        </button>
      </div>

      {/* Tenth Row (Promo Code) */}
      <div className="tokensale-row tokensale-promo">
        <div className="tokensale-input-box">
          <input
            type="text"
            placeholder="Apply Your Promo Code?"
            className="tokensale-input"
          />
          <button className="apply-btn">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default TokenSale;
