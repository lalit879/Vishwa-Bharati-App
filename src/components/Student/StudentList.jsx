import React, { useEffect, useState } from "react";
import StudentCard from "./StudentCard";
import Nav from "../Navbar/Nav";
import Footer from "../Footer/Footer";
import Banner from "./Banner";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("/data/students.json")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error("Error loading students:", err));
  }, []);

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Banner />
      <div className="min-h-screen bg-[#f9fbfd] py-10 px-4 sm:px-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Student List</h2>

        <input
          type="text"
          placeholder="Search by name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="mb-6 w-full sm:w-1/3 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <StudentCard key={student.id} student={student} />
            ))
          ) : (
            <p className="text-gray-600">No students found.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudentList;
