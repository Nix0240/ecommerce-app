import React from "react";

const Dropdown = ({ activeTab }) => {
  const renderDropdownContent = (index) => {
    switch (index) {
      case 0:
        return (
          <div className="h-[50px] w-full flex items-center space-x-8 px-6 bg-zinc-700 text-white">
            <div className="cursor-pointer">Lubricants</div>
            <div className="cursor-pointer">Chemicals</div>
            <div className="cursor-pointer">Supplies</div>
            <div className="cursor-pointer">Equipment</div>
            <div className="cursor-pointer">Auto Parts</div>
            <div className="cursor-pointer">Purchased Products</div>
          </div>
        );
      case 1:
        return (
          <div className="h-[50px] flex items-center space-x-8 px-6 bg-zinc-700 text-white">
            <div className="cursor-pointer">Healthcare</div>
            <div className="cursor-pointer">Automotive</div>
            <div className="cursor-pointer">Household</div>
            <div className="cursor-pointer">Industrial</div>
          </div>
        );
      case 2:
        return (
          <div className="h-[50px] flex items-center space-x-8 px-6 bg-zinc-700 text-white">
            <div className="cursor-pointer">Services</div>
            <div className="cursor-pointer">Products</div>
            <div className="cursor-pointer">Solutions</div>
            <div className="cursor-pointer">Consulting</div>
          </div>
        );
      case 3:
        return (
          <div className="h-[50px] flex items-center space-x-8 px-6 bg-zinc-700 text-white">
            <div className="cursor-pointer">About Us</div>
            <div className="cursor-pointer">Our Team</div>
            <div className="cursor-pointer">Contact</div>
            <div className="cursor-pointer">Careers</div>
          </div>
        );
      default:
        return null;
    }
  };

  return <div>{renderDropdownContent(activeTab)}</div>;
};

export default Dropdown;
