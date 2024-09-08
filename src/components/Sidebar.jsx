import React from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { useState } from "react";

const Sidebar = ({
  sidebarToggle,
  setSidebarToggle,
  selected,
  setSelected,
}) => {
  return (
    <div
      className={`${
        sidebarToggle ? "hidden" : "block"
      } w-64 bg-gray-800 fixed h-full px-4 py-2`}
    >
      <div className="my-2 mb-4">
        <h1 className="text-2xl text-white font-bold">Admin Dashboard</h1>
      </div>
      <hr />

      <div className="flex flex-col  items-start text-white mt-2 gap-4">
        <button
          className="flex items-center"
          onClick={() => {
            setSelected("home");
          }}
        >
          <FaHome className="inline-block w-6 h-6 " />
          Home
        </button>
        <button
          className="flex items-center"
          onClick={() => {
            setSelected("users");
          }}
        >
          <FaUser className="inline-block w-6 h-6 " />
          Users
        </button>
        <button
          className="flex items-center"
          onClick={() => {
            setSelected("products");
          }}
        >
          <AiFillProduct className="inline-block w-6 h-6 " />
          Products
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
