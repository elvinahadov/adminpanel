import React from "react";
import User from "../assets/user.svg"

const SingleCategory = ({name,id,categoryPic,deleteCategory}) => {
  return (
    <div className="bg-gray-800 h-[120px] my-2 w-full">
      <div className="py-4 flex items-center justify-between gap-6 px-6">
        <div className="flex items-center gap-8">
          <div className="w-[80px] h-[80px]">
            <img
              src={categoryPic ? categoryPic:User}
              className="rounded-full"
            />
          </div>
          <div>
            <h1 className="text-white text-[28px] font-bold">{name}</h1>
            <p className="text-white text-[18px] font-bold">{id}</p>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <button className="border-yellow-700 border-2 rounded-lg py-1 px-4 bg-yellow-500 text-black font-bold">
            Edit
          </button>
          <button className="border-red-800 border-2 rounded-lg py-1 px-4 bg-red-500 text-black font-bold" onClick={deleteCategory}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCategory;
