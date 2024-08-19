import React from 'react';
import './certificates.css'

const certificates = [
  {src: '/certificates/Moringa Software Engineering.jpeg',alt: 'Moringa Cert'},
  { src: '/certificates/University of Eldoret Cert.jpg', alt: 'University Cert'}
  
];

function Certificates() {
  return (
    <div className="certificates-section">
      <h2>Certificates</h2>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-item">
            <a href={cert.src} target="_blank" rel="noopener noreferrer">
              <img src={cert.src} alt={cert.alt} className="certificate-img" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
