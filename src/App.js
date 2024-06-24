import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/LandingPage';
import About from './pages/About';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact-us" element={<contact-us />} /> */}

      </Routes>
    </BrowserRouter>
  );

}

export default App;
