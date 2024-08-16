import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you save the CSS as Navbar.css
import BouncingBall from './BouncingBall';

function Navbar() {
  return (
    
    <div className="sidebar">
       <BouncingBall/>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/experience" className="nav-link">Experience</Link>
        <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" className="nav-link">GitHub</a>
        <Link to="/download" className="nav-link">Download</Link>
        <Link to="/certificates" className="nav-link">Certification</Link>
      </div>

      {/* Thumbnail Images */}
      <div className="thumbnail-section">
        <img src="/thumbnails/moringa-logo.png" alt="Moringa School" className="thumbnail-img" />
        <img src="/thumbnails/university-logo.jpeg" alt="University of Eldoret" className="thumbnail-img" />
      </div>
     
    </div>
  );
}

export default Navbar;
