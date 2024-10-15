import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/Auth.css";
import { UserAuthForm } from "../components";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy login logic
    localStorage.setItem("authToken", "mockAuthToken");
    navigate("/dashboard/home");
  };

  return (
    <div className="LoginPage dashboard-background">
      <UserAuthForm formType="login" />

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

export default Login;
