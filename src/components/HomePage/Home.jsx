// Home.jsx or App.jsx
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Chatbot from '../Chatbot';
import Nav from '../Navbar/Nav';
import Banner from './Banner/Banner';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 ">
      {/* Header */}
      <Banner />



    

      {/* Footer */}
      <Footer />
      <Chatbot /> 
    </div>
  );
};

export default Home;