import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { applyFilters } from "../../redux/slices/productSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const activeFilters = useSelector((state) => state.products.filters);
  const sortBy = useSelector((state) => state.products.sortBy);

  const [openCategory, setOpenCategory] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serializedFilters = encodeURIComponent(JSON.stringify(activeFilters));
    params.set("sortBy", sortBy);
    params.set("filter", serializedFilters);
    navigate({ search: params.toString() }, { replace: true });
  }, [sortBy, activeFilters, navigate, dispatch]);

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const handleSelectChange = (category, e) => {
    const selectedValues = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    const filteredValue = { ...activeFilters, [category]: selectedValues };
    dispatch(applyFilters(filteredValue));
  };

  const clear = () => {
    dispatch(
      applyFilters({
        ...activeFilters,
        viscosity: [],
        size: [],
        brand: [],
      })
    );
  };

  const removeFilter = (category, value) => {
    dispatch(
      applyFilters({
        ...activeFilters,
        [category]: activeFilters[category].filter((item) => item !== value),
      })
    );
  };

  const renderActiveFilters = () => {
    const activeViscosity = activeFilters?.viscosity?.length > 0;
    const activeSize = activeFilters?.size?.length > 0;
    const activeBrand = activeFilters?.brand?.length > 0;

    if (activeViscosity || activeSize || activeBrand) {
      return (
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-semibold">Active Filters</h3>
            <button className="text-red-500 text-sm pl-14" onClick={clear}>
              Clear All
            </button>
          </div>

          <div className="flex flex-wrap mt-2">
            {activeFilters.viscosity.map((item, index) => (
              <div
                key={`viscosity-${index}`}
                className="flex items-center space-x-1 text-sm bg-gray-200 text-gray-800 px-4 py-2 mb-2 mr-2 rounded-sm"
              >
                <span>{item}</span>
                <button
                  className="pl-2 text-xs"
                  onClick={() => removeFilter("viscosity", item)}
                >
                  X
                </button>
              </div>
            ))}

            {activeFilters.size.map((item, index) => (
              <div
                key={`size-${index}`}
                className="flex items-center space-x-1 text-sm bg-gray-200 text-gray-800 px-4 py-2 rounded-sm mb-2 mr-2"
              >
                <span>{item}</span>
                <button
                  className="pl-2 text-xs"
                  onClick={() => removeFilter("size", item)}
                >
                  X
                </button>
              </div>
            ))}

            {activeFilters.brand.map((item, index) => (
              <div
                key={`brand-${index}`}
                className="flex items-center space-x-1 text-sm bg-gray-200 text-gray-800 px-4 py-2 rounded-sm mb-2 mr-2"
              >
                <span>{item}</span>
                <button
                  className="pl-2 text-xs"
                  onClick={() => removeFilter("brand", item)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col pr-8">
      <h5 className="flex font-semibold text-md pb-8">Filters</h5>
      {renderActiveFilters()}
      <div className="flex justify-between items-center">
        <h3 className="text-md font-semibold">Brand</h3>
        <button
          className="text-green-500 text-md"
          onClick={() => toggleCategory("brand")}
        >
          {openCategory === "brand" ? "-" : "+"}
        </button>
      </div>
      {openCategory === "brand" && (
        <div className="mt-2">
          <div className="border-t border-gray-200 pt-2">
            <select
              multiple
              id="brand"
              value={activeFilters.brand}
              onChange={(e) => handleSelectChange("brand", e)}
              className="w-full p-2 bg-transparent appearance-none overflow-auto max-h-40 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 focus:outline-none focus:border-transparent"
            >
              <option value="Mobil">Mobil</option>
              <option value="Old World">Old World</option>
              <option value="Peak">Peak</option>
            </select>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center mt-4">
        <h3 className="text-md font-semibold">Viscosity</h3>
        <button
          className="text-green-500 text-md"
          onClick={() => toggleCategory("viscosity")}
        >
          {openCategory === "viscosity" ? "-" : "+"}
        </button>
      </div>
      {openCategory === "viscosity" && (
        <div className="mt-2">
          <div className="border-t border-gray-200 pt-2">
            <select
              multiple
              id="viscosity"
              value={activeFilters.viscosity}
              onChange={(e) => handleSelectChange("viscosity", e)}
              className="w-full p-2 bg-transparent appearance-none overflow-auto max-h-40 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 focus:outline-none focus:border-transparent"
            >
              <option value="0w-20">0w-20</option>
              <option value="0w-30">0w-30</option>
              <option value="5w-30">5w-30</option>
            </select>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center mt-4">
        <h3 className="text-md font-semibold">Size</h3>
        <button
          className="text-green-500 text-md"
          onClick={() => toggleCategory("size")}
        >
          {openCategory === "size" ? "-" : "+"}
        </button>
      </div>
      {openCategory === "size" && (
        <div className="mt-2">
          <div className="border-t border-gray-200 pt-2">
            <select
              multiple
              id="size"
              value={activeFilters.size}
              onChange={(e) => handleSelectChange("size", e)}
              className="w-full p-2 bg-transparent appearance-none overflow-auto max-h-40 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 focus:outline-none focus:border-transparent"
            >
              <option value="1 Quart">1 Quart</option>
              <option value="2 Quart">2 Quart</option>
              <option value="3 Quart">3 Quart</option>
              <option value="4 Quart">4 Quart</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
