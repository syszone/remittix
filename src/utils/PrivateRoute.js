import React from "react";
import { Navigate } from "react-router-dom";

// Simple function to check if you're in development mode
const isDevelopmentMode = () => {
  return process.env.NODE_ENV === "development";
};

const isAuthenticated = () => {
  // Bypass authentication in development mode for testing
  if (isDevelopmentMode()) {
    return true;
  }
  // Simple check for an authentication token
  return localStorage.getItem("authToken") ? true : false;
};

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
