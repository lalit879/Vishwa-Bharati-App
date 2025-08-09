import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import schoolBackG from '../assets/schoolBackG.png';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Student', path: '/student' },
    { name: 'Registration', path: '/registration' },
    { name: 'Contact Us', path: '/contact' },
];

const Registration = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    dob: '',
    applyingForClass: '',
    previousSchool: '', // --- ADDED ---
    address: '', // --- ADDED ---
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration Form Submitted:', formData);
    alert('Thank you for your registration! We will get in touch with you shortly.');
    setFormData({
      studentName: '',
      parentName: '',
      email: '',
      phone: '',
      dob: '',
      applyingForClass: '',
      previousSchool: '', // --- ADDED ---
      address: '', // --- ADDED ---
    });
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-white flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url(${schoolBackG})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
      
      {/* Consistent Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-2 frosty-glass bg-black/60">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-16 h-16 object-contain self-center" />
        </Link>
        <ul className="flex space-x-10 text-white font-medium text-sm tracking-wider">
          {navLinks.map((link) => (
            <li key={link.name} className="relative cursor-pointer group transition-all duration-300">
              <Link to={link.path} className="group-hover:text-blue-400 transition-colors duration-300">
                {link.name}
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-blue-400 rounded-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>
      </nav>

      {/* Form Container */}
      <div className="relative z-20 max-w-2xl w-full frosty-glass p-8 md:p-10 rounded-2xl mt-24">
        <h2 className="text-3xl font-bold text-white text-center mb-2">Admission Registration</h2>
        <p className="text-center text-gray-300 mb-8">Begin your journey with us.</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} placeholder="Student's Full Name" required className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2aa7e2] placeholder-gray-400" />
            <input type="text" name="parentName" value={formData.parentName} onChange={handleChange} placeholder="Parent's/Guardian's Name" required className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2aa7e2] placeholder-gray-400" />
          </div>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2aa7e2] placeholder-gray-400" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2aa7e2] placeholder-gray-400" />
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2aa7e2] text-gray-400" />
          </div>
          <select name="applyingForClass" value={formData.applyingForClass} onChange={handleChange} required className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2aa7e2] text-gray-300">
            <option value="" disabled>Applying for Class...</option>
            {[...Array(12).keys()].map(i => <option key={i+1} value={i+1} className="bg-gray-800">Class {i+1}</option>)}
          </select>
          {/* --- ADDED FIELDS --- */}
          <input type="text" name="previousSchool" value={formData.previousSchool} onChange={handleChange} placeholder="Previous School Name (if any)" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2aa7e2] placeholder-gray-400" />
          <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Full Address" required rows="3" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2aa7e2] placeholder-gray-400"></textarea>
          
          <div>
            {/* --- CHANGED: Updated button class --- */}
            <button type="submit" className="w-full button-primary py-3 px-4 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
