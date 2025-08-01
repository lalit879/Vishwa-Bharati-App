// Home.jsx or App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/AboutPage/About';
import Home from './components/HomePage/Home';
import GalleryPage from './components/GalleryPage/GalleryPage';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
    </Router>
    </>
  );
};

export default App;