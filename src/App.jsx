// Home.jsx or App.jsx
import React from 'react';
import Header from './components/Header';
import HomeContent from './components/HomeContent';
import Footer from './components/Footer';
import SchoolInfo from './components/Cards/SchoolInfo';
import Chatbot from './components/Chatbot';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 ">
      {/* Top Section */}
      <Header />

      <SchoolInfo />

      {/* Middle Content */}
      <main className="flex-grow">
        <HomeContent />
      </main>

      {/* Footer at Bottom */}
      <Footer />
      <Chatbot /> 
    </div>
  );
};

export default Home;