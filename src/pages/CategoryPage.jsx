import React from "react";
import {Link} from "react-router-dom"

const CategoryPage = () => {
  return (
    <div className="bg-gray-900 min-h-[100vh] flex flex-col p-4">
      <Link to="/">
        <button className="border-green-700 border-2 rounded-lg py-1 px-4 bg-green-800 text-white font-bold">
          Add Category
        </button>
      </Link>
    </div>
  );
};

export default CategoryPage;
