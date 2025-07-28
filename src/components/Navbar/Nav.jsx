import React from "react";
import logo from "@assets/logo.png";

const Nav = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-2 frosty-glass bg-black/60">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="w-16 h-16 object-contain self-center"
        />

        {/* Menu */}
        <ul className="flex space-x-10 text-white font-medium text-sm tracking-wider">
          {["Home", "About", "Student", "Registration", "Contact Us"].map(
            (item, index) => (
              <li
                key={index}
                className="relative cursor-pointer group transition-all duration-300"
              >
                <span className="group-hover:text-blue-400 transition-colors duration-300">
                  {item}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-blue-400 rounded-full transition-all duration-300"></span>
              </li>
            )
          )}
        </ul>
      </nav>
    </>
  );
};

export default Nav;