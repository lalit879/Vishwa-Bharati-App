// Home.jsx or App.jsx
import React from 'react';
import Banner from './Banner/Banner';
import Footer from '../Footer/Footer';
import Tables from './Tables/Tables';
import SchoolInfo from './Cards/SchoolInfo';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 ">
      {/* Nav & Banner */}
      <Banner/>

      <SchoolInfo />

      {/* Tables */}
      <main className="flex-grow">
        <Tables />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;