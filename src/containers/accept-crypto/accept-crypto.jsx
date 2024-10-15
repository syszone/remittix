import React from "react";
import "./accept-crypto.css";

import cryptopayment from "../../assets/images/crypto-payment.svg"; // Import right icon
import bullet from "../../assets/images/bullet.png"; // Import right icon

const AcceptCrypto = () => {
  return (
    <div className="remtittix__acceptcrypto section__padding dark_background dark_background-image ">
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
              for customers, enabling them to buy goods and services with crypto
              with the safety and ease-of-use of a traditional fiat checkout.
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
    </div>
  );
};

export default AcceptCrypto;
