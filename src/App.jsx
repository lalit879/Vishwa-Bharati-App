// Home.jsx or App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/AboutPage/About';
import Home from './components/HomePage/Home';
import GalleryPage from './components/GalleryPage/GalleryPage';
import InfoAgenda from './components/InfoAgenda/InfoAgenda';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/InfoAgenda" element={<InfoAgenda />} />
        </Routes>
    </Router>
    </>
  );
};

export default App;