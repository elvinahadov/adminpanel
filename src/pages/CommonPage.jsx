import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SingleCommon from "../components/SingleCommon";

const CommonPage = () => {
  const [commonData, setCommonData] = useState([]);
  useEffect(() => {
    const fetchCommons = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/common");
        if (!response.ok) {
          console.log(`Failed to fetch commons.`);
          return;
        }

        const result = await response.json();
        const common = Array.isArray(result.data) ? result.data : [];
        setCommonData(common);
        console.log("Fetched Commons:", result);
      } catch (error) {
        console.log("Error fetching Commons:", error);
      }
    };
    fetchCommons();
  }, []);
  const commonDeleteHandler = async (commonId) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/common/${commonId}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        console.log(`Failed to delete Common.`);
        return;
      }
      setCommonData((prevCommons) =>
        prevCommons.filter((common) => common._id !== commonId)
      );
    } catch (error) {
      console.log("Error deleting Common:", error);
    }
  };
  return (
    <div className="bg-gray-900 min-h-[100vh] flex flex-col p-4">
      <Link to="/addCommon">
        <button className="border-green-700 border-2 rounded-lg py-1 px-4 bg-green-800 text-white font-bold">
          Add FAQ
        </button>
      </Link>
      {commonData &&
        commonData.map((common) => {
          return (
            <SingleCommon
              key={common._id}
              title={common.title}
              description={common.description}
              content={common.content}
              code={common.code}
              commonDeleteHandler={() => {
                commonDeleteHandler(common._id);
              }}
            />
          );
        })}
    </div>
  );
};

export default CommonPage;
