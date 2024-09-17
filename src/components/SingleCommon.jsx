import React from "react";

const SingleCommon = ({
  title,
  description,
  content,
  code,
  commonDeleteHandler,
}) => {
  return (
    <div className="bg-gray-800 h-[120px] my-2 w-full">
      <div className="py-4 flex items-center justify-between gap-6 px-6">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-20">
            <div>
              <h1 className="text-white text-[28px] font-bold">{`Title : ${title}`}</h1>
              <p className="text-white text-[18px] font-bold">{`Description : ${description}`}</p>
            </div>
            <div>
              <p className="text-white text-[18px] font-bold">{`Content : ${content}`}</p>
              <p className="text-white text-[18px] font-bold">{`Code : ${code}`}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <button className="border-yellow-700 border-2 rounded-lg py-1 px-4 bg-yellow-500 text-black font-bold">
            Edit
          </button>
          <button
            className="border-red-800 border-2 rounded-lg py-1 px-4 bg-red-500 text-black font-bold"
            onClick={commonDeleteHandler}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCommon;
