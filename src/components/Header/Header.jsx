import React, { useState } from "react";
import Logo from "../../assets/logo";
import Tabs from "./Tabs";
import { FaUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import Dropdown from "./Dropdown";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { applyFilters } from "../../redux/slices/productSlice";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeFilters = useSelector((state) => state.products.filters);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="h-auto">
      <div className="h-[60px] flex items-center px-4 bg-gray-900 text-white md:hidden">
        <div className="cursor-pointer" onClick={toggleMenu}>
          <GiHamburgerMenu size={20} />
        </div>

        <div className="flex-1 flex justify-center">
          <Logo />
        </div>

        <div className="flex space-x-4">
          <div className="cursor-pointer">
            <FaUser size={20} />
          </div>
          <div className="cursor-pointer">
            <MdOutlineShoppingCart size={20} />
          </div>
        </div>
      </div>

      <div className="px-4 py-2 bg-zinc-700 md:hidden relative">
        <input
          type="text"
          placeholder="Search by keyword, brand or SKU..."
          className="w-full p-2 pl-4 pr-10 rounded-sm focus:outline-none"
          value={activeFilters.searchTerm}
          onChange={(e) =>
            dispatch(
              applyFilters({ ...activeFilters, searchTerm: e.target.value })
            )
          }
        />
        <span className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400">
          <FaSearch />
        </span>
      </div>

      <div className="hidden md:flex h-[60px] items-center px-2 bg-gray-900 text-white">
        <div className="flex items-center">
          <div className="p-8">
            <Logo />
          </div>
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className="flex space-x-8 ml-auto pr-6 items-center ">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by keyword, brand or SKU..."
              className="w-full border rounded-sm p-2 pl-4 pr-10 focus:outline-none text-black"
              value={activeFilters.searchTerm}
              onChange={(e) =>
                dispatch(
                  applyFilters({ ...activeFilters, searchTerm: e.target.value })
                )
              }
            />
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600">
              <FaSearch />
            </span>
          </div>

          <div className="cursor-pointer">
            <FaUser />
          </div>
          <div className="cursor-pointer">
            <MdOutlineShoppingCart />
          </div>
        </div>
      </div>

      <div className="hidden md:block w-full">
        <div className="h-[50px] w-full flex items-center space-x-8 px-4 bg-zinc-700 text-white">
          <Dropdown activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>

      {isMenuOpen && (
        <div className=" md:hidden fixed top-0 left-0 w-full h-full bg-gray-900 text-white z-50">
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-white text-2xl">
              <IoMdClose />
            </button>
          </div>

          <div className="flex flex-col items-center mt-12 space-y-6 text-lg">
            {[
              "Browse Categories",
              "Who We Serve",
              "What We Do",
              "Who We Are",
            ].map((tab, index) => (
              <div
                key={index}
                className={`cursor-pointer py-2 px-4 ${
                  activeTab === index
                    ? "bg-zinc-700 text-white"
                    : "bg-transparent"
                }`}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
