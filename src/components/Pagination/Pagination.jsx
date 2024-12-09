import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../redux/slices/productSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage, itemsPerPage, totalItems } = useSelector(
    (state) => state.products
  );

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      dispatch(setPage(currentPage - 1));
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      dispatch(setPage(currentPage + 1));
    }
  };

  return (
    <div className="flex items-center justify-center border rounded-sm text-gray-600">
      <button
        onClick={handlePrevious}
        className={`px-6 py-4 border-r ${
          currentPage === 1
            ? "text-gray-300 cursor-not-allowed"
            : "hover:text-gray-800"
        }`}
        disabled={currentPage === 1}
      >
        &#x2039;
      </button>
      <span className="px-6">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNext}
        className={`px-6 py-4 border-l ${
          currentPage === totalPages
            ? "text-gray-300 cursor-not-allowed"
            : "hover:text-gray-800"
        }`}
        disabled={currentPage === totalPages}
      >
        &#x203A;
      </button>
    </div>
  );
};

export default Pagination;
