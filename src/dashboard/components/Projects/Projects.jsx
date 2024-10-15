import React, { useState } from "react";

import calendarIcon from "../../../assets/images/dashboard/calender_icon.png";
import "./Projects.css"; // Encapsulated styles for Projects component
import logo from "../../../assets/images/logo.png";
import projectsData from "./projectsData.json"; // Import dynamic JSON data

import bkg1 from "../../../assets/images/dashboard/slider_bkg/bkg1.png";
import bkg2 from "../../../assets/images/dashboard/slider_bkg/bkg2.png";
import bkg3 from "../../../assets/images/dashboard/slider_bkg/bkg3.png";
import bkg4 from "../../../assets/images/dashboard/slider_bkg/bkg4.png";

// Mapping the background names to their imported images
const backgroundImages = {
  bkg1: bkg1,
  bkg2: bkg2,
  bkg3: bkg3,
  bkg4: bkg4,
};

const Projects = ({ rowsPerPage = 4 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination calculations
  const totalPages = Math.ceil(projectsData.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentProjects = projectsData.slice(indexOfFirstRow, indexOfLastRow);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="projects-container">
      <h3 className="projects-title">Latest Projects</h3>
      <div className="projects-cards">
        {currentProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <div
              className="project-card-inner"
              style={{
                backgroundImage: `url(${backgroundImages[project.background]})`,
              }}
            >
              <div className="slide-content">
                <div className="slide-logo">
                  <img src={logo} alt="Remittix Logo" />
                  <span>Remittix</span>
                </div>

                <h3
                  className="slide-heading"
                  dangerouslySetInnerHTML={{ __html: project.heading }}
                ></h3>
                <p className="slide-paragraph">{project.paragraph}</p>
              </div>
            </div>

            <div className="project-details-container">
              <div className="project-date">
                <img src={calendarIcon} alt="Calendar Icon" />
                <span className="date-text">{project.date}</span>
              </div>
              <h4 className="project-title">{project.title}</h4>
              <p className="project-description">{project.description}</p>
              <div className="read-more">
                Read More <span className="arrow">&gt;</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          className={`pagination-btn ${currentPage === 1 ? "disabled" : ""}`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &laquo;
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`pagination-btn ${
              currentPage === i + 1 ? "selected" : ""
            }`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          className={`pagination-btn ${
            currentPage === totalPages ? "disabled" : ""
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &raquo;
        </button>
      </div>
    </div>
  );
};

export default Projects;
