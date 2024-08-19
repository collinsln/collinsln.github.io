// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Experience from './Experience';
import Download from './Download';
import Certificates from './Certificates';
import './App.css';
function App() {
  return (
    <div>
      <Navbar />
      <div className="main-content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/download" element={<Download />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
