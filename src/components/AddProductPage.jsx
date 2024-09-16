import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddProductPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen m-auto flex items-center justify-center relative">
      <form className="flex flex-col gap-8">
        <h1 className="text-center text-white font-bold text-[48px]">
          Create Product
        </h1>

        <div className="flex flex-col items-center gap-2">
          <label className="text-white font-bold text-[24px]">
            Product Name <sup>*</sup>
          </label>
          <input
            type="text"
            name="productName"
            placeholder="Product Name"
            className="bg-gray-800 rounded-lg p-2 text-white"
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <label className="text-white font-bold text-[24px]">
            Product Price <sup>*</sup>
          </label>
          <input
            type="number"
            name="productPrice"
            placeholder="Product Price"
            className="bg-gray-800 rounded-lg p-2 text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <label className="text-white font-bold text-[24px]">
            Product Category <sup>*</sup>
          </label>
          <input
            type="text"
            name="productCategory"
            placeholder="Product Category"
            className="bg-gray-800 rounded-lg p-2 text-white"
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <label className="text-white font-bold text-[24px]">
            Product Quantity <sup>*</sup>
          </label>
          <input
            type="number"
            name="productQuantity"
            placeholder="Product Quantity"
            className="bg-gray-800 rounded-lg p-2 text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <label className="text-white font-bold text-[24px]">
            Product Picture
          </label>
          <input type="file" className="text-white" />
        </div>
        <div className="flex flex-col items-center">
          <div>
          <label className="text-white font-bold text-[23px] mr-5">
            New Arrivals
          </label>
          <input type="checkbox" name="newArrivals"/>
          </div>
          <div>
          <label className="text-white font-bold text-[23px] mr-5">
            Top Selling
          </label>
          <input type="checkbox" name="topSelling"/>
          </div>
        </div>

        <button
          type="submit"
          className="py-2 bg-green-700 rounded-lg text-white text-[24px] font-bold"
        >
          Create Product
        </button>
      </form>

      <div className="absolute top-2 right-2">
        <Link to="/products">
          <button className="border-blue-700 border-2 rounded-lg py-1 px-4 bg-blue-800 text-white font-bold">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AddProductPage;
