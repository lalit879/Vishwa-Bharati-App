import React from 'react';

const FeaturedNews = ({ image, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 my-10 items-center">
      <img src={image} alt={title} className="w-full md:w-1/2 h-64 object-cover rounded-md" />
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-600 text-sm md:text-base">{description}</p>
        <a href="#" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Read More</a>
      </div>
    </div>
  );
};

export default FeaturedNews;
