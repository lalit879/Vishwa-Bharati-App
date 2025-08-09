import React from 'react';

const RecentPostTags = ({ label }) => {
  return (
    <button className="px-3 py-1 text-sm border border-blue-500 text-blue-600 rounded-full hover:bg-blue-100 transition">
      {label}
    </button>
  );
};

export default RecentPostTags;
