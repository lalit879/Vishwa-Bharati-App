import React from "react";

const Pagination = ({ currentPage, totalPages, goToPage }) => {
  return (
    <div className="flex justify-center mt-10 gap-2" style={{ overflowAnchor: "none" }}> 
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-2 py-1 text-lg ${
          currentPage === 1
            ? "text-gray-400"
            : "text-blue-500 hover:text-blue-700"
        }`}
      >
        &laquo;
      </button>

      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i + 1}
          onClick={() => goToPage(i + 1)}
          className={`w-8 h-8 rounded-full text-sm font-semibold ${
            currentPage === i + 1
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-700"
          } hover:bg-blue-600 hover:text-white transition`}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-2 py-1 text-lg ${
          currentPage === totalPages
            ? "text-gray-400"
            : "text-blue-500 hover:text-blue-700"
        }`}
      >
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;
