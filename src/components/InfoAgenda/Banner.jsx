import React from "react";
import schoolBackG from "@assets/schoolBackG.png";
import Nav from "../Navbar/Nav";

const Banner = () => {
  return (
    <header
      className="relative w-full h-[90vh] bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: `url(${schoolBackG})` }}
    >
      {/* <Nav/> */}
      <Nav />

      {/* Black Transparent Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* Main Content */}
      <div className="relative ml-10 m z-20 px-6 h-full">
        {/* School Name */}
        <div className="flex flex-col items-center justify-center mt-20 h-[70%]">
          <h2 className="text-2xl md:text-3xl font-bold mb-28">
            Pemberitahuan PPDB 2020/2021
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipiscing aqua lorem ipsum
            dolor sit amet consectetur adipiscing aquatext-center
          </p>
        </div>
      </div>
    </header>
  );
};

export default Banner;
