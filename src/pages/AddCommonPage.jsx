import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

const AddCommonPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    code: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const commonData = {
      ...formData,
    };

    try {
      const response = await fetch("http://localhost:8000/api/common", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commonData),
      });

      if (!response.ok) {
        throw new Error("Failed to create common");
      }

      const result = await response.json();
      alert("Common created successfully...", result);
      navigate("/common");
    } catch (error) {
      console.error("Error creating common:", error);
      alert("Can't create Common...");
    }
  };

return (
  <div className="bg-gray-900 min-h-screen m-auto flex items-center justify-center relative">
    <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
      <h1 className="text-center text-white font-bold text-[48px]">
        Create Common
      </h1>

      <div className="flex flex-col items-center gap-2">
        <label className="text-white font-bold text-[24px]">
          Common Name <sup>*</sup>
        </label>
        <input
          type="text"
          name="title"
          placeholder="Common Title"
          className="bg-gray-800 rounded-lg p-2 text-white"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <label className="text-white font-bold text-[24px]">
          Common Description <sup>*</sup>
        </label>
        <input
          type="text"
          name="description"
          placeholder="Common Description"
          className="bg-gray-800 rounded-lg p-2 text-white"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <label className="text-white font-bold text-[24px]">
          Common Content <sup>*</sup>
        </label>
        <input
          type="text"
          name="content"
          placeholder="Common Content"
          className="bg-gray-800 rounded-lg p-2 text-white"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <label className="text-white font-bold text-[24px]">
          Common Code <sup>*</sup>
        </label>
        <input
          type="text"
          name="code"
          placeholder="Common Code"
          className="bg-gray-800 rounded-lg p-2 text-white"
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="py-2 bg-green-700 rounded-lg text-white text-[24px] font-bold"
      >
        Create Common
      </button>
    </form>

    <div className="absolute top-2 right-2">
      <Link to="/common">
        <button className="border-blue-700 border-2 rounded-lg py-1 px-4 bg-blue-800 text-white font-bold">
          Back
        </button>
      </Link>
    </div>
  </div>
);
};
export default AddCommonPage;
