import React from "react";
import { FaUserCircle } from "react-icons/fa";

const TeacherCard = ({ teacher }) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md py-8 px-6 w-full hover:shadow-lg transition">
        <div className="flex flex-col items-center">
          <FaUserCircle className="text-gray-400 text-6xl mb-6" />
          <div className="flex flex-col items-start text-center text-sm text-gray-700 leading-loose">
            <p>
              <strong>Name</strong> : {teacher.name}
            </p>
            <p>
              <strong>Employee ID</strong> : {teacher.employee_id}
            </p>
            <p>
              <strong>Subject</strong> : {teacher.subject}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherCard;
