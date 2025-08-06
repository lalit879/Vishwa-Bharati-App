import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@assets/logo.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Student", path: "/student" },
    { label: "Registration", path: "/registration" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 frosty-glass bg-black/70">
      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        className="w-14 h-14 object-contain self-center"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-10 text-white font-medium text-sm tracking-wider">
        {navLinks.map((item, index) => (
          <li
            key={index}
            className="relative cursor-pointer group transition-all duration-300"
          >
            <Link
              to={item.path}
              className="group-hover:text-blue-400 transition-colors duration-300"
            >
              {item.label}
            </Link>
            <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-blue-400 rounded-full transition-all duration-300"></span>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-white z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-3/4 bg-black/90 backdrop-blur-md transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-white font-medium text-lg">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="hover:text-blue-400 transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;