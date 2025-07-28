// Home.jsx or App.jsx
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Chatbot from '../Chatbot';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 ">
      {/* Header */}
      <Header />


    

      {/* Footer */}
      <Footer />
      <Chatbot /> 
    </div>
  );
};

export default Home;