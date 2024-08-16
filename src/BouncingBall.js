import React from 'react';
import './bouncingball.css'; // Import the CSS file

const BouncingBall = () => {
  return (
    <div className="bouncing-ball-container">
      <div className="ball ball1"></div>
      <div className="ball ball2"></div>
      <div className="ball ball3"></div>
    </div>
  );
};

export default BouncingBall;
