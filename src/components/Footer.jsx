import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Twitter, Facebook, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 pt-12 pb-6 px-6 md:px-16">
      
      <div className="grid md:grid-cols-4 gap-10">
        {/* Logo & Contact */}
        <div>
          <Link to="/">
            <img
              src={logo}
              alt="School Logo"
              className=" h-20 w-20 mb-4 object-cover rounded-full border-4 hover:scale-105 transition-all duration-300"
            />


          </Link>
          <p className="text-sm">Bihiya Chaurasta, Bhojpur, Bihar (802154)</p>
          <p className="text-sm mt-3 font-medium text-blue-700 cursor-pointer hover:underline transition-all duration-200">
            info@vishwabharati.com
          </p>
        </div>

        {/* Explore Links */}
        <div>
          <h4 className="font-bold text-lg mb-3 border-b border-gray-400 pb-1">
            Explore
          </h4>
          <ul className="space-y-2 text-sm">
            {['Welcome', 'School Profile', 'News', 'Gallery'].map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-blue-600 hover:translate-x-1 transition-all duration-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* General Pages */}
        <div>
          <h4 className="font-bold text-lg mb-3 border-b border-gray-400 pb-1">
            General Pages
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              'Teacher Data',
              'New Student Admission',
              'Guide',
              'Location',
              'Contact',
            ].map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-blue-600 hover:translate-x-1 transition-all duration-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-bold text-lg mb-3 border-b border-gray-400 pb-1">
            Connect With Us
          </h4>
          <div className="flex space-x-5 mt-4">
            <div className="p-2 bg-white rounded-full shadow hover:shadow-md cursor-pointer transition-transform duration-200 hover:scale-110">
              <Twitter className="text-blue-500" titleAccess="Twitter" />
            </div>
            <div className="p-2 bg-white rounded-full shadow hover:shadow-md cursor-pointer transition-transform duration-200 hover:scale-110">
              <Facebook className="text-blue-700" titleAccess="Facebook" />
            </div>
            <div className="p-2 bg-white rounded-full shadow hover:shadow-md cursor-pointer transition-transform duration-200 hover:scale-110">
              <Instagram className="text-pink-500" titleAccess="Instagram" />
            </div>
          </div>
        </div>
      </div>

      {/* Divider and Bottom Text */}
      <div className="mt-10 border-t border-gray-300 pt-4 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()}
        <span className="font-semibold"> Vishwa Bharati Shiksha Sadan</span>. All rights reserved.
        <br />
        
        
      </div>
    </footer>
  );
};

export default Footer;