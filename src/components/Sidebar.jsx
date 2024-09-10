import React from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebarToggle, setSidebarToggle }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-gray-800 transition-transform ${
        sidebarToggle ? "-translate-x-full" : "translate-x-0"
      }`}
    >
      <div className="my-2 mb-4">
        <h1 className="text-2xl text-white font-bold">Admin Dashboard</h1>
      </div>
      <hr />
      <div className="flex flex-col items-start text-white mt-2 gap-4 p-4">
        <Link to="/">
          <button className="flex items-center">
            <FaHome className="inline-block w-6 h-6" />
            Home
          </button>
        </Link>
        <Link to="/users">
          <button>
            <FaUser className="inline-block w-6 h-6" />
            Users
          </button>
        </Link>
        <Link to="/products">
          <button>
            <AiFillProduct className="inline-block w-6 h-6" />
            Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
