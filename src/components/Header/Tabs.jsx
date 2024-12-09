import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Tabs = ({ activeTab, setActiveTab, isOpen, toggleMenu }) => {


  return (
    <div>
     
      <div className="hidden md:flex flex-col mx-auto border-l-[0.1px] border-gray-600">
        <div className="flex">
          {[
            "Browse Categories",
            "Who We Serve",
            "What We Do",
            "Who We Are",
          ].map((tab, index) => (
            <div
              key={index}
              className={`cursor-pointer py-[18px] px-6 border-r-[0.11px] border-zinc-700 ${
                activeTab === index ? "bg-zinc-700 text-white" : "bg-transparent"
              }`}
              onClick={() => setActiveTab(index)}
            >
              <div className="flex items-center">
                <div>{tab}</div>
                <div className="pt-1 pl-3">
                  <MdKeyboardArrowDown />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default Tabs;
