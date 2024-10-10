// src/components/DownloadSection.js

import React from 'react';
import './DownloadSection.css';  // Custom CSS file

const DownloadSection = () => {
  return (
    <div className="download-section">
      <div className="download-header">
        <h1>Azalea Add-on Downloader</h1>
      </div>

      <button className="download-button">Download Now</button>

      <div className="options">
        <select>
          <option value="version1">Version 1.0</option>
          <option value="version2">Version 2.0</option>
          <option value="version3">Version 3.0 (Beta)</option>
        </select>

        <input type="text" placeholder="Enter custom settings..." />
      </div>

      <div className="description">
        <p>Azalea Add-on enhances your experience with new features and customizations. Choose the version and adjust settings before downloading.</p>
      </div>
    </div>
  );
};

export default DownloadSection;
