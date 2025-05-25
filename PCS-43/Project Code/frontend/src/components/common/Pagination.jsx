import React from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const Pagination = ({ page=0, setPage, totalPages }) => {
  const handlePages = (index) => {
    setPage(index);
  };

  const handleNextPage = () => {
    setPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const handlePrevPage = () => {
    setPage((prev) => Math.max(prev - 1, 0));
  };

  // Pagination logic
  const visiblePages = 5;
  let startPage = Math.max(0, page - Math.floor(visiblePages / 2));
  let endPage = Math.min(totalPages - 1, startPage + visiblePages - 1);

  // Ensure we do not exceed the bounds of the pagination
  if (endPage - startPage < visiblePages - 1) {
    if (startPage === 0) {
      endPage = Math.min(visiblePages - 1, totalPages - 1);
    } else if (endPage === totalPages - 1) {
      startPage = Math.max(0, endPage - (visiblePages - 1));
    }
  }
  return (
    <div className="w-full align-middle justify-between flex font-mono mt-16 m-auto max-w-xl">
      {/* Left button */}
      <button
        onClick={handlePrevPage}
        disabled={page === 0}
        type="button"
        className="bg-white disabled:cursor-not-allowed disabled:opacity-60 h-10 mt-1 py-2 hover:bg-gray-300  px-2"
      >
        <MdOutlineKeyboardArrowLeft className="text-2xl" />
      </button>

      {/* Page numbers */}
      <div className="flex text-2xl gap-2 justify-center text-gray-700">
        {Array(5).fill(null).map((_,i) => (
          <button
            key={i}
            className={`p-2 px-4 mx-1 ${
              page === i ? " bg-blue-700 text-white " : "hover:bg-gray-200 bg-white"
            }`}
          >
            {i+1}
          </button>
        ))}

        {/* Actual logic */}
        {/* {Array.from(
          { length: endPage - startPage + 1 },
          (_, i) => startPage + i
        ).map((i) => (
          <button
            key={i}
            onClick={() => handlePages(i)}
            className={`p-2 mx-1 ${
              page === i ? "text-[#d60b8c] border-t-2 border-[#d60b8c]" : ""
            }`}
          >
            {i + 1}
          </button>
        ))} */}
      </div>

      {/* Right button */}
      <button
        onClick={handleNextPage}
        disabled={page >= totalPages - 1}
        type="button"
        className="bg-white disabled:cursor-not-allowed disabled:opacity-60 h-10 mt-1 hover:bg-gray-200 py-2 px-2"
      >
        <MdOutlineKeyboardArrowRight className="text-2xl" />
      </button>
    </div>
  );
};

export default Pagination;
