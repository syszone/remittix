import React from "react";
import "./blog.css";
import { BlogShowcase } from "../../components";

import backgroundImageLeft from "../../assets/images/card_bkg_left.svg";
import backgroundImageRight from "../../assets/images/card_bkg_right.svg";

import blogImage1 from "../../assets/images/blog/blog1.png";
import blogImage2 from "../../assets/images/blog/blog2.png";
import blogImage3 from "../../assets/images/blog/blog3.png";
import blogImage4 from "../../assets/images/blog/blog4.png";
import blogImage5 from "../../assets/images/blog/blog5.png";
import blogImage6 from "../../assets/images/blog/blog6.png";

import logoPath from "../../assets/images/logo_w_text.svg";
import readMoreIcon from "../../assets/images/icon_dark_arrow.png";

const Blog = () => {
  return (
    <div className="remtittix__blogList section__padding">
      <h1 className="heading__35 ">
        <span className="highlighted">Digging Deep:</span> A Dive into the Inner
        Workings of Crypto Mining
      </h1>
      <p className="sub_heading__text " style={{ marginBottom: 20 }}>
        The future of mining: Exploring blockchain innovation and its impact on
        the industry.
      </p>

      <div className="BlogList__container">
        <BlogShowcase
          backgroundImage={backgroundImageLeft}
          blogImage={blogImage1}
          logo={logoPath}
          heading="Understanding Blockchain Technology"
          description="A deep dive into blockchain technology and its applications in various industries..."
          date="Oct 5, 2024"
          icon={readMoreIcon}
          readMoreLink="/blog/blockchain"
        />
        <BlogShowcase
          backgroundImage={backgroundImageRight}
          blogImage={blogImage2}
          logo={logoPath}
          heading="Crypto Wallets: A Beginner’s Guide"
          description="An introduction to crypto wallets, their uses, and how to choose the right one for you..."
          date="Sep 25, 2024"
          icon={readMoreIcon}
          readMoreLink="/blog/crypto-wallets"
        />
        <BlogShowcase
          backgroundImage={backgroundImageLeft}
          blogImage={blogImage3}
          logo={logoPath}
          heading="Decentralized Finance (DeFi) Explained"
          description="Explore the world of decentralized finance and how it is revolutionizing the financial sector..."
          date="Aug 18, 2024"
          icon={readMoreIcon}
          readMoreLink="/blog/defi-explained"
        />
        <BlogShowcase
          backgroundImage={backgroundImageRight}
          blogImage={blogImage4}
          logo={logoPath}
          heading="Top 10 Crypto Exchanges in 2024"
          description="A review of the top 10 crypto exchanges, comparing their features, fees, and more..."
          date="Jul 12, 2024"
          icon={readMoreIcon}
          readMoreLink="/blog/crypto-exchanges"
        />
        <BlogShowcase
          backgroundImage={backgroundImageLeft}
          blogImage={blogImage5}
          logo={logoPath}
          heading="Smart Contracts: The Future of Automation"
          description="Discover how smart contracts work and their potential applications in various industries..."
          date="Jun 30, 2024"
          icon={readMoreIcon}
          readMoreLink="/blog/smart-contracts"
        />
        <BlogShowcase
          backgroundImage={backgroundImageRight}
          blogImage={blogImage6}
          logo={logoPath}
          heading="What Are NFTs? Understanding the Hype"
          description="A beginner’s guide to NFTs and why they have become a trend in the digital world..."
          date="May 15, 2024"
          icon={readMoreIcon}
          readMoreLink="/blog/nfts"
        />
      </div>
    </div>
  );
};

export default Blog;
