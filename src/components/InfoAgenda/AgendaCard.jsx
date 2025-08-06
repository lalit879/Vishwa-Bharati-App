// components/AgendaCard.jsx
import React from 'react';

const AgendaCard = ({ icon: Icon, iconColor, title, line1, line2 }) => {
  return (
    <div className="border-2 border-blue-300 rounded-lg py-6 px-4 text-center">
      <Icon className={`mx-auto text-3xl mb-4 ${iconColor}`} />
      <p className="font-semibold mb-4">{title}</p>
      <p className="mt-1">{line1}</p>
      <p className="text-sm text-gray-500">{line2}</p>
    </div>
  );
};

export default AgendaCard;
