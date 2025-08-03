import React from 'react';
import { Link } from 'react-router-dom';
import PrincipalSpeech from "@assets/HomePage/PrincipalSpeech.png"

const PrincipalMsg = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Video Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md rounded-md overflow-hidden shadow-lg">
            <img
              src={PrincipalSpeech} // Replace with actual thumbnail
              alt="Principal"
              className="w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white/80 hover:bg-white p-4 rounded-full transition-all duration-300 ease-in-out">
                <svg
                  className="w-8 h-8 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
            Greetings from the Principal of
          </h2>
          <h3 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-4">
            VISHWA BHARATI SHIKSHA SADAN
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            "At Vishwa Bharati Shiksha Sadan, we believe that education is not
            just about books, but about building character, values, and vision.
            We are committed to nurturing young minds into responsible,
            compassionate, and capable individuals who can shape a better
            tomorrow."
          </p>
          <p className="text-gray-500 italic mb-6">
            — Principal, Vishwa Bharati Shiksha Sadan
          </p>
          <Link to="/info">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md transition-all duration-300">
              Further More
            </button>
          </Link>
          
        </div>
      </div>
    </section>
  );
};

export default PrincipalMsg;
