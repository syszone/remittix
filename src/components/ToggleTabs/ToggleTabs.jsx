import React, { useState } from 'react';
import './ToggleTabs.css'; // Import the CSS file

const ToggleTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label); // Set default active tab to the first one

  return (
    <div className="toggle-tabs-container">
      <div className="toggle-tabs">
        {tabs.map((tab) => (
          <button style={{padding:0}}
            key={tab.label}
            className={`toggle-tab ${activeTab === tab.label ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {tabs.map((tab) =>
          activeTab === tab.label ? (
            <div key={tab.label} className="tab-pane">
              {tab.content}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default ToggleTabs;
