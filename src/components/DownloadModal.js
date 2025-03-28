import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import ReactMarkdown from 'react-markdown';

Modal.setAppElement('#__docusaurus');

const DownloadModal = ({ isOpen, onClose }) => {
  const [changelog, setChangelog] = useState('');

  useEffect(() => {
    fetch('/files/changelog.md')
      .then((response) => response.text())
      .then((text) => setChangelog(text))
      .catch((error) => console.error('Failed to load changelog:', error));
  }, []);

  const handleDownload = () => {
    const fileUrl = '/files/Obsidian Essentials.mcaddon';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Obsidian Essentials.mcaddon';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Download Modal"
      className="download-modal"
      overlayClassName="download-modal-overlay"
    >
      <div className="modal-content">
        <h3>Changelog</h3>
        <div className="modal-changelog">
          <ReactMarkdown>{changelog}</ReactMarkdown>
        </div>

        <button onClick={handleDownload} className="download-button">
          Download Now
        </button>

        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default DownloadModal;