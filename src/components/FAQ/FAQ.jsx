import React, { useState } from "react";
import "./FAQ.css";

const FAQ = ({ faqs, lightMode }) => {
  const [selectedTopic, setSelectedTopic] = useState("General");
  const [openFAQ, setOpenFAQ] = useState(null);

  const filterTopics = ["General", "Presale", "Dashboard", "Others"];

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="Faq__container">
      {/* Filter Buttons */}
      <div className="Faq__filters">
        {filterTopics.map((topic) => (
          <button
            key={topic}
            className={`Faq__filter-button ${
              selectedTopic === topic ? "selected" : ""
            }`}
            onClick={() => handleTopicClick(topic)}
          >
            {topic}
          </button>
        ))}
      </div>

      {/* FAQ Items */}
      <div className="Faq__items">
        {faqs
          .filter((faq) => faq.topic === selectedTopic)
          .map((faq, index) => (
            <div key={index} className="Faq__item">
              <div className="Faq__icon">
                <img
                  src={faq.icon}
                  alt="Icon"
                  style={{ width: "67px", height: "54.64px" }}
                />
              </div>
              <div
                className={`Faq__question ${
                  openFAQ === index ? "Faq__question--open" : ""
                } ${lightMode ? "light" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                <p>{faq.question}</p>
                <div className="Faq__gradient-line"></div>
                {openFAQ === index && (
                  <div className="Faq__answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FAQ;
