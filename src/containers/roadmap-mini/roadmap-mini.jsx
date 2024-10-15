import React from "react";
import "./roadmap-mini.css";
import {
  RemittixCard,
  HeaderLabel,
  RemittixButton,
  FAQ,
} from "../../components";

import backgroundImageLeft from "../../assets/images/card_bkg_left.svg";
import backgroundImageRight from "../../assets/images/card_bkg_right.svg";

import bulletIcon from "../../assets/images/bullet.png";
import hexagonIcon_1 from "../../assets/images/icon_hexagon_1.svg";
import hexagonIcon_2 from "../../assets/images/icon_hexagon_2.svg";
import hexagonIcon_3 from "../../assets/images/icon_hexagon_3.svg";
import hexagonIcon_4 from "../../assets/images/icon_hexagon_4.svg";

import leftIcon from "../../assets/images/circle_school.png"; // Import left icon (optional)
import rightIcon from "../../assets/images/icon_arrow_white.png"; // Import right icon
import faqIcon from "../../assets/images/icon_faq.svg"; // Import right icon

const faqs = [
  // General
  {
    topic: "General",
    question: "What is Remittix?",
    answer:
      "Remittix is a platform designed to simplify crypto payments, allowing users to send and receive digital currencies securely and efficiently.",
    icon: faqIcon,
  },
  {
    topic: "General",
    question: "Is Remittix secure?",
    answer:
      "Yes, Remittix uses advanced encryption and security measures to ensure all transactions and personal data are protected from unauthorized access.",
    icon: faqIcon,
  },
  {
    topic: "General",
    question: "How do I create an account on Remittix?",
    answer:
      "To create an account, visit our official website and click on the 'Sign Up' button. Fill out the registration form with your details, and you’ll be ready to start using Remittix.",
    icon: faqIcon,
  },
  {
    topic: "General",
    question: "Are there any fees for using Remittix?",
    answer:
      "Remittix charges a small transaction fee, which varies depending on the type and volume of transactions. Check our fee schedule for detailed information.",
    icon: faqIcon,
  },
  {
    topic: "General",
    question: "Can I use Remittix internationally?",
    answer:
      "Yes, Remittix is designed to support international transactions, allowing users to send and receive payments globally, wherever cryptocurrencies are accepted.",
    icon: faqIcon,
  },
  {
    topic: "General",
    question: "What currencies does Remittix support?",
    answer:
      "Remittix supports a wide range of cryptocurrencies, including Bitcoin, Ethereum, and more. We are constantly expanding our list to accommodate more digital assets.",
    icon: faqIcon,
  },

  // Presale
  {
    topic: "Presale",
    question: "How can I participate in the presale?",
    answer:
      "To participate in the presale, visit our website and register for an account. Follow the instructions in the presale section to purchase tokens early.",
    icon: faqIcon,
  },
  {
    topic: "Presale",
    question: "What is the price of tokens during the presale?",
    answer:
      "The token price during the presale is set at a discounted rate. Please visit our presale page for the most up-to-date information on pricing and bonuses.",
    icon: faqIcon,
  },
  {
    topic: "Presale",
    question: "Are there any bonuses for early participants?",
    answer:
      "Yes, early participants in the presale can receive bonus tokens and other exclusive benefits. Check our presale page for details on available bonuses.",
    icon: faqIcon,
  },
  {
    topic: "Presale",
    question: "When will the presale end?",
    answer:
      "The presale will run for a limited period. To find out the exact end date, please visit our presale page, where we update the timeline regularly.",
    icon: faqIcon,
  },
  {
    topic: "Presale",
    question: "Is there a minimum investment for the presale?",
    answer:
      "Yes, there is a minimum investment required to participate in the presale. Please refer to the presale section for more information on the minimum investment amount.",
    icon: faqIcon,
  },
  {
    topic: "Presale",
    question: "How do I receive my tokens after the presale?",
    answer:
      "After the presale, your tokens will be distributed to your account's wallet address. Ensure your wallet is correctly set up to receive the tokens.",
    icon: faqIcon,
  },

  // Dashboard
  {
    topic: "Dashboard",
    question: "How do I access my dashboard?",
    answer:
      "Log in to your Remittix account, and you will be redirected to your dashboard, where you can manage your transactions and account settings.",
    icon: faqIcon,
  },
  {
    topic: "Dashboard",
    question: "Can I customize my dashboard view?",
    answer:
      "Yes, you can customize your dashboard by choosing different layouts, widgets, and themes to personalize your Remittix experience.",
    icon: faqIcon,
  },
  {
    topic: "Dashboard",
    question: "What information is available on the dashboard?",
    answer:
      "The dashboard provides an overview of your transactions, account balance, recent activities, and important notifications to keep you updated.",
    icon: faqIcon,
  },
  {
    topic: "Dashboard",
    question: "How do I update my account details on the dashboard?",
    answer:
      "To update your account details, go to the dashboard settings and click on 'Account Information'. Make the necessary changes and save your updates.",
    icon: faqIcon,
  },
  {
    topic: "Dashboard",
    question: "Can I set up notifications through the dashboard?",
    answer:
      "Yes, you can set up notifications by accessing the 'Notifications' tab in the dashboard and configuring your preferred alerts and reminders.",
    icon: faqIcon,
  },
  {
    topic: "Dashboard",
    question: "How can I view my transaction history on the dashboard?",
    answer:
      "Your transaction history is available under the 'Transactions' tab in the dashboard. You can filter and view detailed records of your past activities.",
    icon: faqIcon,
  },

  // Others
  {
    topic: "Others",
    question: "What is the difference between a crypto wallet and an exchange?",
    answer:
      "A crypto wallet is used to store and manage your cryptocurrencies, while an exchange is a platform where you can buy, sell, and trade digital assets.",
    icon: faqIcon,
  },
  {
    topic: "Others",
    question: "How can I recover my password?",
    answer:
      "If you've forgotten your password, click on the 'Forgot Password' link on the login page. Follow the instructions to reset your password securely.",
    icon: faqIcon,
  },
  {
    topic: "Others",
    question: "Does Remittix offer customer support?",
    answer:
      "Yes, Remittix offers customer support through our support center. You can reach us via chat, email, or phone for assistance with any queries or issues.",
    icon: faqIcon,
  },
  {
    topic: "Others",
    question: "How can I connect my crypto wallet to Remittix?",
    answer:
      "To connect your wallet, go to the 'Wallet' section in your account, select your preferred wallet provider, and follow the prompts to link it securely.",
    icon: faqIcon,
  },
  {
    topic: "Others",
    question: "Can I use Remittix on my mobile device?",
    answer:
      "Yes, Remittix is mobile-friendly and fully accessible via your smartphone’s browser, ensuring a smooth experience for managing your crypto on the go.",
    icon: faqIcon,
  },
  {
    topic: "Others",
    question: "What payment methods are supported?",
    answer:
      "Remittix supports various payment methods, including credit cards, bank transfers, and several major cryptocurrencies for seamless transactions.",
    icon: faqIcon,
  },
];

const RoadmapMini = () => {
  return (
    <div className="remtittix__roadmap section__padding">
      <div className="centered-container">
        <h1 className="heading__60 " style={{ marginBottom: 20 }}>
          Explore Our
          <span className="highlighted"> RoadMap</span>
        </h1>

        <div class="RemittixCardContainer" style={{ marginTop: 50 }}>
          <div class="RemittixCardWrapper indexUp">
            <RemittixCard backgroundImage={backgroundImageLeft}>
              <div className="roadmap-mini__RemittixCard-content">
                <div className="roadmap-mini__RemittixCard-top-row">
                  <HeaderLabel
                    text="Q3 2004 / Step 01"
                    type="label"
                    fontSize="18px"
                    fontWeight="500"
                    color="#F9FF38"
                    width="250px"
                    height="53px"
                    textAlign="left"
                    showBefore={false}
                    showAfter={false}
                  />
                  <img
                    src={hexagonIcon_1}
                    alt="Icon"
                    className="roadmap-mini__RemittixCard-icon"
                  />
                </div>
                <div className="roadmap-mini__RemittixCard-divider"></div>
                <div className="roadmap-mini__RemittixCard-text-row">
                  <img
                    src={bulletIcon}
                    alt="Bullet"
                    className="roadmap-mini__RemittixCard-bullet-icon"
                  />
                  <p className="roadmap-mini__RemittixCard-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </div>
              </div>
            </RemittixCard>
          </div>
          <div class="RemittixCardWrapper">
            <RemittixCard backgroundImage={backgroundImageRight}>
              <div className="roadmap-mini__RemittixCard-content">
                <div className="roadmap-mini__RemittixCard-top-row">
                  <HeaderLabel
                    text="Q3 2004 / Step 02"
                    type="label"
                    fontSize="18px"
                    fontWeight="500"
                    color="#F9FF38"
                    width="250px"
                    height="53px"
                    textAlign="left"
                    showBefore={false}
                    showAfter={false}
                  />
                  <img
                    src={hexagonIcon_2}
                    alt="Icon"
                    className="roadmap-mini__RemittixCard-icon"
                  />
                </div>
                <div className="roadmap-mini__RemittixCard-divider"></div>
                <div className="roadmap-mini__RemittixCard-text-row">
                  <img
                    src={bulletIcon}
                    alt="Bullet"
                    className="roadmap-mini__RemittixCard-bullet-icon"
                  />
                  <p className="roadmap-mini__RemittixCard-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </div>
              </div>
            </RemittixCard>
          </div>
          <div class="RemittixCardWrapper">
            <RemittixCard backgroundImage={backgroundImageLeft}>
              <div className="roadmap-mini__RemittixCard-content">
                <div className="roadmap-mini__RemittixCard-top-row">
                  <HeaderLabel
                    text="Q3 2004 / Step 03"
                    type="label"
                    fontSize="18px"
                    fontWeight="500"
                    color="#F9FF38"
                    width="250px"
                    height="53px"
                    textAlign="left"
                    showBefore={false}
                    showAfter={false}
                  />
                  <img
                    src={hexagonIcon_3}
                    alt="Icon"
                    className="roadmap-mini__RemittixCard-icon"
                  />
                </div>
                <div className="roadmap-mini__RemittixCard-divider"></div>
                <div className="roadmap-mini__RemittixCard-text-row">
                  <img
                    src={bulletIcon}
                    alt="Bullet"
                    className="roadmap-mini__RemittixCard-bullet-icon"
                  />
                  <p className="roadmap-mini__RemittixCard-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </div>
              </div>
            </RemittixCard>
          </div>
          <div class="RemittixCardWrapper">
            <RemittixCard backgroundImage={backgroundImageRight}>
              <div className="roadmap-mini__RemittixCard-content">
                <div className="roadmap-mini__RemittixCard-top-row">
                  <HeaderLabel
                    text="Q3 2004 / Step 04"
                    type="label"
                    fontSize="18px"
                    fontWeight="500"
                    color="#F9FF38"
                    width="250px"
                    height="53px"
                    textAlign="left"
                    showBefore={false}
                    showAfter={false}
                  />
                  <img
                    src={hexagonIcon_4}
                    alt="Icon"
                    className="roadmap-mini__RemittixCard-icon"
                  />
                </div>
                <div className="roadmap-mini__RemittixCard-divider"></div>
                <div className="roadmap-mini__RemittixCard-text-row">
                  <img
                    src={bulletIcon}
                    alt="Bullet"
                    className="roadmap-mini__RemittixCard-bullet-icon"
                  />
                  <p className="roadmap-mini__RemittixCard-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </div>
              </div>
            </RemittixCard>
          </div>
        </div>

        <div style={{ marginTop: 50 }}>
          <RemittixButton
            text="Join Presale"
            leftImage={leftIcon}
            rightImage={rightIcon}
            width="321px"
            showLeftImage={true} // Toggle to show the left image
            showRightImage={true} // Toggle to show the right image
            backgroundColor="#F9FF38" // Solid background color (no gradient)
            hoverColor="#000" // Hover color
            textColor="#000" // Text color
            hoverTextColor="#fff" // Text color on hover
            borderColor="#697783" // Border color matching background
            onClick={() => console.log("Button clicked")}
          />
        </div>

        <div class="responsive-box" style={{ marginTop: 60 }}>
          <div class="gradient-border"></div>
          <div class="content" style={{ paddingTop: 20 }}>
            <h1 className="heading__60 " style={{ marginBottom: 20 }}>
              Explore Our
              <span className="highlighted"> RoadMap</span>
            </h1>

            <p className="sub_heading__text">
              Below are several significant document that provide ab in-depth
              explanation of the <b>Rimittix</b> Ecosystem.
            </p>

            <div style={{ marginTop: 20, marginBottom: 40 }}>
              <FAQ faqs={faqs} lightMode={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapMini;
