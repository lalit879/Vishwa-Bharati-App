import React from "react";

const StudentCard = ({ student }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg border hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-blue-700">{student.name}</h3>
      <p className="text-sm text-gray-700">Email: {student.email}</p>
      <p className="text-sm text-gray-700 mb-2">Grade: {student.grade}</p>
      <button className="bg-blue-500 text-white text-sm px-3 py-1 rounded-md hover:bg-blue-600">View</button>
    </div>
  );
};

export default StudentCard;
