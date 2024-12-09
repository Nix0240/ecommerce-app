import React, { useState } from "react";
import Logo from "../../assets/logo";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);
  const [email,setEmail]=useState('')

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full px-8 py-4 lg:py-8 ">
        <div className="text-white flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0  text-start py-2 px-2">
          <div>
            <p className="text-lg font-semibold">Join our newsletter</p>
            <p className="pt-2 text-sm">
              We'll send you a nice letter once per week. No spam.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              className="px-4 py-4 rounded-sm border focus:outline-none text-black border-gray-300 "
              placeholder="Email address"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <button className="bg-yellow-500 px-8 py-4 rounded-sm text-gray-800 text-sm tracking-wide font-semibold">
              SUBSCRIBE
            </button>
          </div>
        </div>

        <hr className="my-6 border-gray-200 dark:border-gray-700" />

        <div className="md:flex  py-2 px-2 md:gap-20 gap-6">
          <div className="flex flex-col  mb-6 md:mb-0 pr-16">
            <Logo />
            <p className="text-white pt-6 text-sm text-wrap text-left">
              Delivering unique and complete solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:gap-20 gap-6 text-left">
            <div>
              <div
                className="flex justify-between items-center cursor-pointer md:cursor-auto"
                onClick={() => toggleSection("product")}
              >
                <h2 className="text-sm font-bold text-white md:font-semibold md:text-gray-400">
                  Product
                </h2>
                <button
                  className="text-white text-lg md:hidden"
                  onClick={() => toggleSection("product")}
                >
                  {openSection === "product" ? "-" : "+"}
                </button>
              </div>

              <ul
                className={`${
                  openSection === "product" ? "block" : "hidden md:block"
                } mt-2 md:mt-0 text-gray-200 text-sm space-y-2 pt-2`}
              >
                <li>
                  <a href="#" className="hover:underline">
                    Lubricants
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Chemicals
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Equipment
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Auto Parts
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Supplies
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div
                className="flex justify-between items-center cursor-pointer md:cursor-auto"
                onClick={() => toggleSection("services")}
              >
                <h2 className="text-sm font-bold text-white md:font-semibold md:text-gray-400">
                  Services
                </h2>
                <button
                  className="text-white text-lg md:hidden"
                  onClick={() => toggleSection("services")}
                >
                  {openSection === "services" ? "-" : "+"}
                </button>
              </div>

              <ul
                className={`${
                  openSection === "services" ? "block" : "hidden md:block"
                } mt-2 md:mt-0 text-gray-200 text-sm space-y-2 pt-2`}
              >
                <li>
                  <a href="#" className="hover:underline">
                    Recycling
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Industrial
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Equipment
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Lab Analysis
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Engine Testing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Vehicle Wash
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div
                className="flex justify-between items-center cursor-pointer md:cursor-auto"
                onClick={() => toggleSection("resources")}
              >
                <h2 className="text-sm font-bold text-white md:font-semibold md:text-gray-400">
                  Resources
                </h2>
                <button
                  className="text-white text-lg md:hidden"
                  onClick={() => toggleSection("resources")}
                >
                  {openSection === "resources" ? "-" : "+"}
                </button>
              </div>

              <ul
                className={`${
                  openSection === "resources" ? "block" : "hidden md:block"
                } mt-2 md:mt-0 text-gray-200 text-sm space-y-2 pt-2`}
              >
                <li>
                  <a href="#" className="hover:underline">
                    Blog & News
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Product Information
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Data Sheets
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Application Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Website Feedback
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div
                className="flex justify-between items-center cursor-pointer md:cursor-auto"
                onClick={() => toggleSection("careers")}
              >
                <h2 className="text-sm font-bold text-white md:font-semibold md:text-gray-400">
                  Careers
                </h2>
                <button
                  className="text-white text-lg md:hidden"
                  onClick={() => toggleSection("careers")}
                >
                  {openSection === "careers" ? "-" : "+"}
                </button>
              </div>

              <ul
                className={`${
                  openSection === "careers" ? "block" : "hidden md:block"
                } mt-2 md:mt-0 text-gray-200 text-sm space-y-2 pt-2`}
              >
                <li>
                  <a href="#" className="hover:underline">
                    Join Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Available Positions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Driver
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Warehouse
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Technicians
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Sales
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 dark:border-gray-700" />

        <div className="sm:flex  sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            © 2024 Ipsum Industries. All Rights Reserved.
          </span>
          <div className="flex mt-4 justify-center text-gray-400 sm:mt-0 space-x-4 cursor-pointer">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
