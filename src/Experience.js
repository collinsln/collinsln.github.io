import React from 'react';
import './experience.css'; // Import the CSS for styling

function Experience() {
  return (
    <div className="experience-section">
      <div className="timeline">
        <div className="timeline-item">
          <h3>Solar Panda - Full Stack Engineer</h3>
          <p><strong>August 2023 - Present</strong></p>
          <p>
            Developed and maintained software applications to support the loan application and approval process for solar panel installations.
            Integrated third-party APIs and services to facilitate seamless communication.
          </p>
        </div>
        <div className="timeline-item">
          <h3>James Finlay's - Software and Data Engineer</h3>
          <p><strong>February 2020 - July 2023</strong></p>
          <p>
            Designed scalable data pipelines, created ETL processes, and developed a dynamic website for product sales and management.
          </p>
        </div>
        <div className="timeline-item">
          <h3>Economic Industries - Junior Developer</h3>
          <p><strong>January 2019 - January 2020</strong></p>
          <p>
            Developed and maintained an Android app for mobile access to product catalogs and inventory management, integrated secure payment gateways.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
