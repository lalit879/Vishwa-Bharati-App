import React from 'react';

const SchoolCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md px-6 py-10 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default SchoolCard;
