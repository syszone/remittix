import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import { Navbar, DashboardNavbar } from "./components";
import {
  Footer,
  About,
  Blog,
  Faq,
  AcceptCrypto,
  HowToBuy,
  PayRemittix,
  PoweredBy,
  Reviews,
  Advertisment,
  ReadMapMini,
  RimittixDetails,
  Tokenomics,
  Header,
} from "./containers";

// Import the new pages
import Blogs from "./pages/Blogs";
import UseCase from "./pages/UseCase";
import HowItWorks from "./pages/HowItWorks";
import Login from "./pages/login"; // Add a login page
import Register from "./pages/Register";

import DashboardRoutes from "./dashboard/DashboardRoutes";
import PrivateRoute from "./utils/PrivateRoute"; // Private Route utility
import DashboardAdminNavbar from "./dashboard/components/DashboardAdminNavbar/DashboardAdminNavbar";

function AppContent() {
  const location = useLocation();

  // Check if the current route is part of the dashboard
  const isDashboardPage = location.pathname.startsWith("/dashboard");
  // Check if the current route is either login or register
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  //const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1050);
  const [toggleMenu, setToggleMenu] = useState(false);
  const isMobileView =
    typeof window !== "undefined" && window.innerWidth <= 1050;

  const handleToggleMenu = (state) => {
    setToggleMenu(state);
  };

  // const handleToggleMenu = () => setToggleMenu(!toggleMenu);
  //const handleCloseMenu = () => setToggleMenu(false);

  // Reset toggleMenu when route changes
  // useEffect(() => {
  //   setToggleMenu(false);
  // }, [location.pathname]);

  // Update isMobileView on resize
  // useEffect(() => {
  //   const handleResize = () => setIsMobileView(window.innerWidth <= 1050);
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // Close menu on resize to desktop to avoid showing it in large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1050 && toggleMenu) {
        setToggleMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [toggleMenu]);

  return (
    <div
      className={`App remittix_main-content ${
        toggleMenu && isMobileView ? "remittix_blur-background" : ""
      }`}
    >
      {!isDashboardPage &&
        !isAuthPage && ( // No navbar for dashboard and auth pages
          <Navbar toggleMenu={toggleMenu} onToggleMenu={handleToggleMenu} />
        )}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <PayRemittix />
              <AcceptCrypto />
              <Reviews />
              <Tokenomics />
              <HowToBuy />
              <PoweredBy />
              <RimittixDetails />
              <Advertisment />
              <ReadMapMini />
            </>
          }
        />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/use-case" element={<UseCase />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Dashboard Route */}
        <Route
          path="/dashboard/*"
          element={
            <PrivateRoute>
              <DashboardRoutes />
            </PrivateRoute>
          }
        />
      </Routes>

      {/* Conditionally render the footer if it's not the login or register page */}
      {!isDashboardPage && !isAuthPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
