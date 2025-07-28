import React from "react";

const InfoCard = ({ title, subtitle, value, icon, isVisible, index }) => {
  
  const delay = index * 50;

  return (
    // --- CHANGED: Made hover effects much more pronounced ---
    <div 
      className={`
        bg-gray-50 border-2 border-gray-200 text-center flex flex-col 
        justify-around items-center py-10 rounded-xl shadow p-4
        transform transition-all duration-300 ease-in-out cursor-pointer group
        hover:scale-105 hover:shadow-2xl hover:border-blue-500 hover:bg-white
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* The icon will now scale up on hover */}
      <div className="text-3xl mb-2 bg-white rounded-full w-fit p-[12px] shadow-md transition-transform duration-300 group-hover:scale-110">{icon}</div>
      <div>
          <h4 className="text-sm text-gray-600 font-medium">{title}</h4>
      </div>
      <div>
          {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
          {/* The value text will now change color on hover */}
          <p className="text-lg font-semibold mt-1 text-gray-800 transition-colors duration-300 group-hover:text-blue-600">{value}</p>
      </div>
    </div>
  );
};

export default InfoCard;
