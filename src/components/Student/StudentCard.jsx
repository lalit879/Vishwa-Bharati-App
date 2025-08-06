import React from "react";
import { FaUserCircle } from "react-icons/fa";

const StudentCard = ({ student }) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md py-8 px-6 w-full hover:shadow-lg transition">
        <div className="flex flex-col items-center">
          <FaUserCircle className="text-gray-400 text-6xl mb-6" />
          <div className="flex flex-col items-start text-center text-sm text-gray-700 leading-loose">
            <p>
              <strong>Name</strong> : {student.name}
            </p>
            <p>
              <strong>E-mail</strong> : {student.email}
            </p>
            <p>
              <strong>Grade</strong> : {student.grade}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentCard;