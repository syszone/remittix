import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/Auth.css";
import { UserAuthForm } from "../components";
const Register = () => {
  return (
    <div className="register-container dashboard-background">
      <UserAuthForm formType="register" />

      <div className="auth-footer-links">
        <a href="/privacy-policy" className="footer-link">
          Privacy Policy
        </a>
        <a href="/terms-conditions" className="footer-link">
          Terms & Conditions
        </a>
        <span className="footer-link copyright">
          &copy; 2024 Remittix, All Rights Reserved
        </span>
      </div>
    </div>
  );
};

export default Register;
