import React from 'react';
import './BankAccount.css'; // Import the CSS file

const BankAccount = ({ accounts }) => {
  return (
    <div className="bank-account-list">
      {accounts.map((account, index) => (
        <div key={index} className="bank-account-item">
          {/* Left Column: Bank Details */}
          <div className="bank-account-details">
            <div className="bank-name">{account.bankName}</div>
            <div className="iban"><span className='dark_text'>IBAN:</span> {account.iban}</div>
            <div className="swift-bic"><span className='dark_text'>SWIFT/BIC:</span> {account.swift}</div>
          </div>

          {/* Right Column: Country Flag Image */}
          <div className="bank-country-image">
            <img src={account.countryImage} alt={`${account.bankName} Country`} />
          </div>

          {/* Divider */}
          {index < accounts.length - 1 && (
            <div className="divider">
              <div className="divider-ellipse">
                <img src={account.ellipseImage} alt="Ellipse Icon" />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BankAccount;
