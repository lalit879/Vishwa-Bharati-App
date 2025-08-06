import React, { useEffect, useState, useRef } from "react";
import StudentCard from "./StudentCard";
import { FaSearch } from "react-icons/fa";
import Banner from "./Banner";
import Footer from "../Footer/Footer";
import Pagination from "../common/Pagination";

const itemsPerPage = 9;

const StudentList = () => {
  // const sectionRef = useRef(null);
  const [students, setStudents] = useState([]);
  const [query, setQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("/data/students.json")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(query.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);
  const paginatedStudents = filteredStudents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);

      // setTimeout(() => {
      //   sectionRef.current?.scrollIntoView({
      //     behavior: "smooth",
      //     block: "start",
      //   });
      // }, 100);
    }
  };

  return (
    <>
      <Banner />
      <div className="bg-[#f9fbfd] px-4 sm:px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Students</h2>
            <div className="relative w-full sm:w-64">
              <FaSearch className="absolute top-2.5 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search Students"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <hr className="border-t border-gray-300 mb-6" />

          {paginatedStudents.length > 0 ? (
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6">
              {paginatedStudents.map((student) => (
                <StudentCard key={student.id} student={student} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-10">
              No students found.
            </p>
          )}

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            goToPage={goToPage}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudentList;
