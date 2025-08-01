import React from 'react';
import { useNavigate } from 'react-router-dom';
import schoolBackG from '@assets/schoolBackG.png';
import Nav from '../../Navbar/Nav';

const Banner = () => {

  const navigate = useNavigate();

      const goToContactPage = () => {
        navigate('/contact'); // Navigate to the '/contact' route
      };

  return (
    <header
      className="relative w-full h-[100vh] bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: `url(${schoolBackG})` }}
    >
      {/* <Nav/> */}
      <Nav/>

      {/* Black Transparent Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* Main Content */}
      <div className="relative ml-10 z-20 px-6 flex flex-col items-start justify-center h-full">
        {/* School Name */}
        <div className='flex flex-col items-start justify-around h-[70%]'>
          <h1 className="text-white text-2xl sm:text-2xl md:text-3xl font-semibold tracking-wide mb-6 drop-shadow">
            VISHWA BHARATI SHIKSHA SADAN
          </h1>
          <button onClick={goToContactPage} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md shadow-md transition-colors duration-300 ease-in-out">
            Contact us
          </button>

        </div>
      </div>
    </header >
  );
};

export default Banner;
