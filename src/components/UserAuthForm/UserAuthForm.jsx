import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./UserAuthForm.css";

const UserAuthForm = ({ formType }) => {
  const isLogin = formType === "login";

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false); // Password visibility toggle
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    if (isLogin) {
      console.log("Logging in with", { email, password });
    } else {
      console.log("Registering with", {
        fullName,
        email,
        password,
        confirmPassword,
      });
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-title">
        <h1 className="heading__30">
          {isLogin ? "Sign In With " : "Start Your Journey"}
        </h1>
        <h1 className="heading__40 highlighted">
          {" "}
          {isLogin
            ? "Your Remittix Account"
            : "Create Your Remittix Account"}{" "}
        </h1>
      </div>
      <div className="auth-innerbox">
        {/* <div className="auth-logo">
          <span className="poweredby">powered by</span>
          <img src="/path-to-logo.png" alt="Logo" />
          <span>MyApp</span>
        </div> */}

        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <label>Full Name</label>
              <input
                type="text"
                className="input-box"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </>
          )}

          <label>Email</label>
          <input
            type="email"
            className="input-box"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password and Confirm Password Fields */}
          {isLogin ? (
            <>
              {/* Password Field (for both login and register) */}
              <div className="auth-password-field">
                <label>Password</label>
                <div className="password-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="input-box"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              <div className="auth-row">
                <div className="auth-remember">
                  <input type="checkbox" id="rememberMe" className="checkbox" />
                  <label htmlFor="rememberMe" className="remember-text">
                    Remember me
                  </label>
                </div>
                <div className="auth-forgot">
                  <span className="forgot-password">Forgot Password?</span>
                </div>
              </div>
            </>
          ) : (
            // Render the Password and Confirm Password for register (side by side)
            <div className="auth-password-row">
              <div className="auth-password-field">
                <label>Password</label>
                <div className="password-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="input-box"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <div className="auth-password-field">
                <label>Confirm Password</label>
                <div className="password-wrapper">
                  {" "}
                  {/* Add wrapper for consistency */}
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className="input-box"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="auth-buttons">
            <button type="submit" className="auth-button">
              {isLogin ? "Login" : "Register"}
            </button>
          </div>
        </form>

        <div className="auth-footer">
          {isLogin ? (
            <p>
              Don't have an account? <a href="/register">Sign up here</a>
            </p>
          ) : (
            <p>
              Already have an account? <a href="/login">Login here</a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserAuthForm;
