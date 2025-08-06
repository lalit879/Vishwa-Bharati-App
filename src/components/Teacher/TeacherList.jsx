import React, { useEffect, useState } from "react";
import TeacherCard from "./TeacherCard";
import { FaSearch } from "react-icons/fa";
import Banner from "./Banner"
import Footer from "../Footer/Footer";

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 6;

  useEffect(() => {
    fetch("/data/teachers.json")
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);

  const filtered = teachers.filter((t) =>
    t.name.toLowerCase().includes(query.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <>
      <Banner />
      <div className="min-h-screen bg-[#f9fbfd] px-4 sm:px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Teachers</h2>
            <div className="relative w-60">
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

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {paginated.map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-3 py-1 rounded-full border text-sm ${
                  i + 1 === page
                    ? "bg-blue-500 text-white"
                    : "bg-white text-blue-500 border-blue-500 hover:bg-blue-100"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TeacherList;
