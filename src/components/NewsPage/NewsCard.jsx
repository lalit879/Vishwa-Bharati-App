import React from 'react';

const NewsCard = ({ image, title, description }) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition-all duration-300">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-sm sm:text-base">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
        <a href="#" className="text-blue-600 text-sm font-semibold mt-2 inline-block">Read More...</a>
      </div>
    </div>
  );
};

export default NewsCard;
