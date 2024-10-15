import React from "react";
import "./how-to-buy.css";
import { FeatureBox } from "../../components";

import lightArrow from "../../assets/images/icon_white_circle_arrow.svg";

import iconWallet from "../../assets/images/icon_wallet.svg";
import iconSignUp from "../../assets/images/icon_signup.svg";
import iconClaim from "../../assets/images/icon_claim.svg";

const HowToBuy = () => {
  return (
    <div className="remtittix__how-to-buy section__padding">
      <div className="centered-container">
        <h1 className="heading__60 black_text" style={{ marginBottom: 20 }}>
          <span className="highlight-word">
            How to <span className="underlined">Bu</span>
          </span>
          y
        </h1>
        <p className="sub_heading__text">
          Use the contract information below to add the <b>Rimittix</b> token to
          your wallet.
        </p>
      </div>

      <div className="FeatureBoxContainer">
        <div className="FeatureBoxWrapper">
          <FeatureBox
            type="light"
            heading="Connect Wallet"
            text="Feature that allows users to link their cryptocurrency wallets to decentralized applications (dApps), enabling secure transactions and interactions with blockchain networks. This process typically involves using popular wallets like MetaMask, Trust Wallet..."
            topImage={iconWallet}
            bottomImage={lightArrow}
            topImageTop={40}
            textColor="var(--color-dark-text)"
            textFontSize="13px"
            linkText="Learn more"
            linkUrl="https://example.com"
            backgroundColor="#fff"
            justifyText={true}
          />
        </div>

        <div className="FeatureBoxWrapper middle-box">
          <FeatureBox
            type="light"
            heading="Sign-Up"
            text="Feature that allows users to link their cryptocurrency wallets to decentralized applications (dApps), enabling secure transactions and interactions with blockchain networks. This process typically involves using popular wallets like MetaMask, Trust Wallet..."
            topImage={iconSignUp}
            bottomImage={lightArrow}
            topImageTop={40}
            textColor="var(--color-dark-text)"
            textFontSize="13px"
            backgroundColor="#fff"
            justifyText={true}
          />
        </div>

        <div className="FeatureBoxWrapper">
          <FeatureBox
            type="light"
            heading="Buy & Claim"
            text="Feature that allows users to link their cryptocurrency wallets to decentralized applications (dApps), enabling secure transactions and interactions with blockchain networks. This process typically involves using popular wallets like MetaMask, Trust Wallet..."
            topImage={iconClaim}
            bottomImage={lightArrow}
            topImageTop={40}
            textColor="var(--color-dark-text)"
            textFontSize="13px"
            linkText="Learn more"
            linkUrl="https://example.com"
            backgroundColor="#fff"
            justifyText={true}
          />
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
