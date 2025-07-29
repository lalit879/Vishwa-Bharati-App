// Home.jsx or App.jsx
import React from 'react';
import Footer from '../Footer/Footer';
import Chatbot from '../Chatbot';
import Banner from './Banner/Banner';
import PrincipalMsg from './PrincipalMsg/PrincipalMsg';
import SchoolProfileSection from './SchoolProfile/SchoolProfileSection';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 ">
      {/* Header */}
      <Banner />

      <PrincipalMsg />
      <SchoolProfileSection />
      {/* Footer */}
      <Footer />
      <Chatbot /> 
    </div>
  );
};

export default Home;