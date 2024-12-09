import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Filter from "../components/Filter/Filter";
import ProductCard from "../components/Product/ProductCard";
import Pagination from "../components/Pagination/Pagination";
import {
  setProducts,
  setSortBy,
  setPage,
  applyFilters,
  setLoading,
} from "../redux/slices/productSlice";
import { CiFilter } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { products } from "../data/productData";
import SkeletonLoader from "../components/Loader/SkeletonLoader";

const ProductListingPage = () => {
  const breadcrumbItems = [
    "Browse Categories",
    "Lubricants",
    "Hydraulics fluids",
  ];

  const dispatch = useDispatch();
  const {
    filteredProducts,
    currentPage,
    itemsPerPage,
    sortBy,
    totalItems,
    filters,
    loading,
  } = useSelector((state) => state.products);

  const [isReadMore, setIsReadMore] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  useEffect(() => {
    dispatch(setLoading(true));

    dispatch(setProducts(products));
  }, [dispatch]);

  useEffect(() => {
    dispatch(setLoading(true));

    dispatch(applyFilters(filters));
    dispatch(setSortBy(sortBy));
  }, [filters, sortBy, dispatch]);

  useEffect(() => {
    dispatch(setPage(currentPage));
  }, [currentPage, dispatch]);

  const handleSortChange = (e) => {
    dispatch(setSortBy(e.target.value));
    dispatch(setPage(1));
  };

  const handlePageChange = (page) => {
    dispatch(setPage(page));
  };

  const activeFilterCount = Object.values(filters).flat().length;

  const toggleFilterModal = () => {
    setIsFilterModalOpen(!isFilterModalOpen);
  };

  const handleReadMoreToggle = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="h-full">
      <div className="flex flex-col px-4 md:px-8 py-2">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <div className="px-4 md:px-8 py-4 text-start">
        <h1 className="text-lg md:text-xl font-semibold">Hydraulic Fluids</h1>
        <p className="text-sm md:text-base text-gray-700 mt-2">
          {!isReadMore ? (
            <>
              Hydraulic oil is a fluid that has several functions. It serves as
              an energy transfer or power transmission medium, lubricant, and
              sealant. Also, it is a fluid that cools the equipment and carries
              contaminants away. Based on the division of hydraulics into
              hydrodynamics and hydrostatics, we have different hydraulic
              fluids.
              <button
                onClick={handleReadMoreToggle}
                className="text-blue-500 ml-2 hover:underline"
              >
                Read more
              </button>
            </>
          ) : (
            <>
              Hydraulic oil is a fluid that has several functions. It serves as
              an energy transfer or power transmission medium, lubricant, and
              sealant. Also, it is a fluid that cools the equipment and carries
              contaminants away. Based on the division of hydraulics into
              hydrodynamics and hydrostatics, we have different hydraulic
              fluids. Firstly, hydraulic fluids for hydrodynamic applications
              are called power-transmission oils. Secondly, hydraulic fluids for
              hydrostatic application are called hydraulic oils.
              <button
                onClick={handleReadMoreToggle}
                className="text-blue-500 ml-2 hover:underline"
              >
                Show less
              </button>
            </>
          )}
        </p>
      </div>

      <div className="flex flex-col md:flex-row px-4 md:px-8">
        <div className="hidden md:block md:w-1/4">
          <Filter />
        </div>

        <div className="w-full md:w-3/4 mt-4 md:mt-0">
          <div className="flex justify-between items-center my-4">
            <div>
              Showing{" "}
              <span className="font-semibold">
                {(currentPage - 1) * itemsPerPage + 1}-
                {Math.min(currentPage * itemsPerPage, totalItems)}
              </span>{" "}
              of {totalItems}
            </div>
            <button
              onClick={toggleFilterModal}
              className="md:hidden flex items-center gap-1 py-2 text-sm rounded-sm"
            >
              <CiFilter />
              <span className="flex items-center">
                FILTER
                {activeFilterCount > 0 && (
                  <span className="text-xs">({activeFilterCount})</span>
                )}
              </span>
            </button>
            <div className="hidden lg:flex gap-4 items-center">
              <div>
                <span className="mr-2 font-semibold">Sort By:</span>
                <select
                  className="p-4 border rounded-sm"
                  value={sortBy}
                  onChange={handleSortChange}
                >
                  <option value="lowToHigh">Price: Low to High</option>
                  <option value="highToLow">Price: High to Low</option>
                </select>
              </div>
              <Pagination
                totalItems={totalItems}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
            {loading ? (
              <SkeletonLoader count={12} height={200} width="100%" />
            ) : (
              filteredProducts.map((product) => (
                <ProductCard key={product.sku} product={product} />
              ))
            )}
          </div>

          <div className="flex justify-center my-4">
            <Pagination
              totalItems={totalItems}
              itemsPerPage={itemsPerPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>

      {isFilterModalOpen && (
        <div className="fixed inset-0 z-50 bg-white bg-opacity-80">
          <div className="absolute top-0 left-0 w-full h-full bg-white">
            <div className="flex justify-between items-center p-4 border-b border-gray-300">
              <h3 className="text-lg font-semibold">Filters</h3>
              <button
                onClick={toggleFilterModal}
                className="text-gray-700 text-2xl"
              >
                <IoIosClose />
              </button>
            </div>

            <div className="p-4">
              <Filter />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductListingPage;
