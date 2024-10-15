import React from "react";
import "./tokenomics.css";
import logo from "../../assets/images/logo.png";
import vDivider from "../../assets/images/virticle_column_divider.png";
import tokenomics from "../../assets/images/tokenomics.png";
import hDivider from "../../assets/images/horizantal_divider.png";
import copyAddress from "../../assets/images/icon_copy.png";

const fullAddress =
  "0x3e9b4e7e849b2b584a786d7a84c5f2c5d6ea13e9f6d242e19c00b7de5110452a";
const handleCopyAddress = () => {
  // Create a temporary textarea element to copy the full address
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = fullAddress;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);

  // Optional: Show an alert or notification that the address was copied
  alert("Contract address copied to clipboard!");
};

// Function to truncate the address
const truncateAddress = (address) => {
  return `${address.substring(0, 25)}...`;
};

const Tokenomics = () => {
  return (
    <div className="remtittix__tokenomics section__padding">
      <div className="centered-container">
        <h1 className="heading__60 highlighted" style={{ marginBottom: 20 }}>
          Tokenomics
        </h1>
        <p className="sub_heading__text">
          <b>Rimittix</b> coin (RMX) has a supply of 150 billion coins, a
          testament to its exclusivity and value preservation.
        </p>
      </div>

      <div className="remtittix__tokenomics_columns">
        <div className="remtittix__tokenomics_left_content">
          <div className="remtittix__tokenomics_right_content_tokenomics-header">
            <div className="remtittix__tokenomics_row">
              <img src={logo} alt="Remttix Logo" className="logo_image" />
              <span className="table_name"> COIN </span>
              <img src={vDivider} className="v_divider" />
              <span className="column_name col1"> Billion </span>
              <img src={vDivider} className="v_divider" />
              <span className="column_name col2"> % </span>
            </div>
          </div>
          <div className="remtittix__tokenomics_right_content_tokenomics-content">
            <div className="top-streak"></div>

            <div className="remtittix__tokenomics_row">
              <div className="remtittix__tokenomics_column column-left remtittix__tokenomics_column--width-large">
                Presale
              </div>
              <div className="remtittix__tokenomics_column column-center">
                50
              </div>
              <div className="remtittix__tokenomics_column column-center remtittix__tokenomics_column--width-small">
                33.3%
              </div>
            </div>
            <div className="remtittix__tokenomics_row">
              <div className="remtittix__tokenomics_column column-left remtittix__tokenomics_column--width-large">
                Team
              </div>
              <div className="remtittix__tokenomics_column column-center">
                1.5
              </div>
              <div className="remtittix__tokenomics_column column-center remtittix__tokenomics_column--width-small">
                1.0%
              </div>
            </div>
            <div className="remtittix__tokenomics_row">
              <div className="remtittix__tokenomics_column column-left remtittix__tokenomics_column--width-large">
                Miners
              </div>
              <div className="remtittix__tokenomics_column column-center">
                75
              </div>
              <div className="remtittix__tokenomics_column column-center remtittix__tokenomics_column--width-small">
                50.0%
              </div>
            </div>
            <div className="remtittix__tokenomics_row">
              <div className="remtittix__tokenomics_column column-left remtittix__tokenomics_column--width-large">
                Community & Ecosystem
              </div>
              <div className="remtittix__tokenomics_column column-center">
                19
              </div>
              <div className="remtittix__tokenomics_column column-center remtittix__tokenomics_column--width-small">
                12.7%
              </div>
            </div>
            <div className="remtittix__tokenomics_row">
              <div className="remtittix__tokenomics_column column-left remtittix__tokenomics_column--width-large">
                Liquidity
              </div>
              <div className="remtittix__tokenomics_column column-center">
                4.5
              </div>
              <div className="remtittix__tokenomics_column column-center remtittix__tokenomics_column--width-small">
                3%
              </div>
            </div>
          </div>

          <div className="remtittix__tokenomics_right_content_tokenomics-footer">
            <div className="top-streak"></div>
            <div className="remtittix__tokenomics_row">
              <div className="remtittix__tokenomics_column column-left remtittix__tokenomics_column--width-large column_name">
                Total
              </div>
              <div className="remtittix__tokenomics_column column-center column_name">
                4.5
              </div>
              <div className="remtittix__tokenomics_column column-center remtittix__tokenomics_column--width-small column_name">
                3%
              </div>
            </div>
            <div className="bottom-streak"></div>
          </div>
        </div>
        <div className="remtittix__tokenomics_right_content">
          <img src={tokenomics} className="tokenomics_image" />
        </div>
      </div>

      <img
        src={hDivider}
        alt="Divider"
        className="remtittix__horizontal_divider"
      />

      <div className="centered-container">
        <h1 className="heading__60" style={{ marginBottom: 20 }}>
          <span className="highlighted">Remittix</span> Token Details
        </h1>
        <p className="sub_heading__text">
          Use the contract information below to add the <b>Rimittix</b> token to
          your wallet.
        </p>
      </div>
      <div className="centered-container">
        <div className="remtittix__grid_container  ">
          <div className="remtittix__grid_item">
            <div className="label-container ">
              <div className="label label-wide">Contract Address</div>

              <div className="label label-small">
                <img
                  src={copyAddress}
                  alt="Copy Contract Address"
                  style={{ cursor: "pointer" }}
                  onClick={handleCopyAddress}
                />
              </div>
            </div>
            <div className="value label-xl" id="contractAddress">
              {truncateAddress(fullAddress)}
            </div>
          </div>
          <div className="remtittix__grid_item">
            <div className="label label-medium">Token Name</div>

            <div className="value label-medium">Remittix</div>
          </div>
          <div className="remtittix__grid_item ">
            <div className="label label-medium">Token Symbol</div>
            <div className="value label-medium">RTX</div>
          </div>
          <div className="remtittix__grid_item">
            <div className="label label-medium">Token Supply</div>
            <div className="value label-medium">835,000,000</div>
          </div>
          <div className="remtittix__grid_item">
            <div className="label label-medium">Network</div>
            <div className="value label-medium">Ethereum</div>
          </div>
          <div className="remtittix__grid_item">
            <div className="label label-medium">Decimal</div>
            <div className="value label-medium">18</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
