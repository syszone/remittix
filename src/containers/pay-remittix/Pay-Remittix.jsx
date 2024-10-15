import React from "react";
import "./pay-remittix.css";

import {
  FeatureBox,
  ToggleTabs,
  BankAccount,
  RemittixButton,
} from "../../components";

import lightArrow from "../../assets/images/icon_light_arrow.png";
import darkArrow from "../../assets/images/icon_dark_arrow.png";
import iconUI from "../../assets/images/icon_ui.png";
import iconFee from "../../assets/images/icon_fee.png";
import iconSwift from "../../assets/images/icon_swift.png";
import iconEasy from "../../assets/images/icon_easy.png";
import bankUSA from "../../assets/images/bank_usa.png";
import bankGermany from "../../assets/images/bank_deutsch.png";
import arrowBank from "../../assets/images/icon_arrow_bank.png";

import leftIcon from "../../assets/images/circle_school.png"; // Import left icon (optional)
import rightIcon from "../../assets/images/icon_right_arrow_white.png"; // Import right icon
import stripe from "../../assets/images/stripe-logo.png"; // Import right icon
import wise from "../../assets/images/wise-logo.png"; // Import right icon
import rimittix from "../../assets/images/rimittix-logo.png"; // Import right icon
import coinbase from "../../assets/images/coinbase-logo.png"; // Import right icon

import cryptopayment from "../../assets/images/crypto-payment.svg"; // Import right icon
import bullet from "../../assets/images/bullet.png"; // Import right icon

const PayRemittix = () => {
  // Example bank accounts data
  const bankAccounts = [
    {
      bankName: "HSBC Bank",
      iban: "GB29NWBK60161331926819",
      swift: "HBUKGB4B",
      countryImage: bankGermany, // Path to country image
      ellipseImage: arrowBank, // Path to ellipse image
    },
    {
      bankName: "Deutsche Bank",
      iban: "DE89370400440532013000",
      swift: "DEUTDEFF",
      countryImage: bankUSA, // Path to country image
      ellipseImage: arrowBank, // Path to ellipse image
    },
  ];

  const tabs = [
    {
      label: "Select Bank",
      content: (
        <div className="tab-content-box">
          <h3 className="tab-heading">
            Which{" "}
            <span className="highlight-word">
              b<span className="underlined">ank accoun</span>t
            </span>{" "}
            would you like to send funds to?
          </h3>
          <p className="tab-description">
            <BankAccount accounts={bankAccounts} />
          </p>
        </div>
      ),
    },
    {
      label: "Instruction",
      content: (
        <div className="tab-content-box">
          <h3 className="tab-heading">Instructions</h3>
          <p className="tab-description">
            Here are the instructions for using this service.
          </p>
        </div>
      ),
    },
  ];

  return (
    <>
      <div
        className="remtittix__payremittix section__padding light_background"
        id="payremittix"
      >
        <div className="remtittix__payremittix-content">
          <p
            className="sub_heading__text"
            style={{ fontWeight: "bold", margin: "30px 0 30px 30px" }}
          >
            <span className="highlight-word">
              P<span className="underlined">ay Rimitti</span>x
            </span>
          </p>
          <h1 className="heading__50" style={{ color: "#000" }}>
            Pay Any Fiat Bank <br /> Account Using
            <span className="highlight-word">
              C<span className="underlined">rypt</span>o
            </span>
          </h1>

          <div className="remtittix__payremittix-featurebox-grid">
            <FeatureBox
              type="light"
              heading="Friendly UI"
              text="Make a crypto payment directly to a bank account over 40 currencies direct from your browser."
              topImage={iconUI}
              bottomImage={lightArrow}
              backgroundColor="#F2F5F6"
            />

            <FeatureBox
              type="dark"
              heading="Swifter than SWIFT"
              text="Crypto is received instantly and fiat paid out on local payment rails, meaning same-day clearance times."
              topImage={iconSwift}
              bottomImage={darkArrow}
              headingColor="#fff"
            />

            <FeatureBox
              type="dark"
              heading="No FX fees"
              text="The cost of a cross-border transfer is fixed at 1%. No FX, wire, or hidden fees. What you see is what they get."
              topImage={iconFee}
              bottomImage={darkArrow}
              headingColor="#fff"
            />

            <FeatureBox
              type="light"
              heading="Super easy"
              text="Your recipient will receive a bank transfer and have no idea the payment originated in crypto."
              topImage={iconEasy}
              bottomImage={lightArrow}
              backgroundColor="#F2F5F6"
            />
          </div>
        </div>
        <div className="remtittix__payremittix-content_bankdetails">
          <ToggleTabs tabs={tabs} />
          <div>
            {/* Button without the left image */}
            <RemittixButton
              text="Add New Bank"
              leftImage={leftIcon}
              rightImage={rightIcon}
              showLeftImage={true} // Toggle to show the left image
              showRightImage={true} // Toggle to show the right image
              backgroundColor="#000" // Solid background color (no gradient)
              hoverColor="#F9FF38" // Hover color
              textColor="#FFF" // Text color
              hoverTextColor="#000" // Text color on hover
              borderColor="#697783" // Border color matching background
              onClick={() => console.log("Button clicked")}
            />
          </div>
        </div>
      </div>
      <div className="remtittix__payremittix_extended-section section__padding light_alternate_background">
        <div className="remtittix__payremittix-content">
          <h1 className="heading__50" style={{ color: "#000" }}>
            <span className="highlight-word">
              Cry<span className="underlined">pto</span>
            </span>{" "}
            Payments. Fiat{" "}
            <span className="highlight-word">
              Sim<span className="underlined">plicity.</span>
            </span>
          </h1>
          <p className="sub_heading__text">
            <b>Rimittix</b> is designed to be just like the best fintech apps
            you already know and love. When you need to send crypto, but you
            want them to receive fiat, <b>Rimittix</b> is the tool to use.
          </p>
        </div>
        <div className="remtittix__payremittix-content_exchangedetails">
          <div className="exchange-card stripe">
            <img src={stripe} />
            <p>Fiat- Fiat payments</p>
          </div>

          <div className="exchange-card wise">
            <img src={wise} />
            <p>Fiat- Fiat payments</p>
          </div>

          <div className="exchange-card rimittix">
            <img src={rimittix} />
            <p>Crypto-Fiat Transfers</p>
          </div>

          <div className="exchange-card coinbase">
            <img src={coinbase} />
            <p>Crypto-Fiat Transfers</p>
          </div>
        </div>
      </div>

      {/* <div className="remtittix__payremittix_extended-section section__padding dark_background dark_background-image ">
        <div className="remtittix__payremittix-content_exchangedetails">
          <img
            src={cryptopayment}
            className="responsive-svg"
            alt="Crypto Payment"
          />
        </div>
        <div className="remtittix__payremittix-content_exchangedetails">
          <h1 className="heading__50">
            Accept <span className="highlighted"> Crypto Payments </span> With
            Ease
          </h1>
          <ul class="custom-bullet-list">
            <li>
              <img src={bullet} alt="bullet icon" className="custom-bullet" />
              <span>
                If you are interested in a 'Stripe-for-crypto' like product, try
                Remittix Checkout.
              </span>
            </li>

            <li>
              <img src={bullet} alt="bullet icon" className="custom-bullet" />
              <span>
                Checkout allows you to create simple crypto-checkout experiences
                for customers, enabling them to buy goods and services with
                crypto with the safety and ease-of-use of a traditional fiat
                checkout.
              </span>
            </li>

            <li>
              <img src={bullet} alt="bullet icon" className="custom-bullet" />
              <span>
                You can spin up checkouts through the Rimittix interface or the
                Checkouts API and accept payments straight into your wallet with
                0% fee.
              </span>
            </li>

            <li>
              <img src={bullet} alt="bullet icon" className="custom-bullet" />
              <span>
                You can cash-out your crypto however you like, including to 40+
                different fiat currencies.
              </span>
            </li>
          </ul>

          <div></div>
        </div>
      </div> */}
    </>
  );
};

export default PayRemittix;
