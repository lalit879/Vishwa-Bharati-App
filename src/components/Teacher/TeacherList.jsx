import React, { useEffect, useState } from "react";
import TeacherCard from "./TeacherCard";
import { FaSearch } from "react-icons/fa";
import Banner from "./Banner";
import Footer from "../Footer/Footer";
import Pagination from "../common/Pagination";

const itemsPerPage = 6;

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  const [query, setQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("/data/teachers.json")
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  const filteredTeachers = teachers.filter((t) =>
    t.name.toLowerCase().includes(query.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredTeachers.length / itemsPerPage);
  const paginatedTeachers = filteredTeachers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <>
      <Banner />
      <div className="bg-[#f9fbfd] px-4 sm:px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Teachers</h2>
            <div className="relative w-full sm:w-64">
              <FaSearch className="absolute top-2.5 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search Teacher"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <hr className="border-t border-gray-300 mb-6" />

          {paginatedTeachers.length > 0 ? (
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6">
              {paginatedTeachers.map((teacher) => (
                <TeacherCard key={teacher.id} teacher={teacher} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-10">
              No teachers found.
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

export default TeacherList;
