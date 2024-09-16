import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

const AddCategoryPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    categoryPic: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    setFormData((prevData) => ({
        ...prevData,
        [name]: type === "file" ? files[0] : value,
      }));
  };
  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "hof1ji4h");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dj294wevk/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Image upload failed");
      }

      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      console.error("Error uploading image:", error);
      return "";
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    let categoryPicUrl = "";

    if (formData.categoryPic) {
      categoryPicUrl = await uploadImage(formData.categoryPic);
    }

    const categoryData = {
      ...formData,
      categoryPic: categoryPicUrl,
    };

    try {
      const response = await fetch("http://localhost:8000/api/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(categoryData),
      });

      if (!response.ok) {
        throw new Error("Failed to create category");
      }

      const result = await response.json();
      alert("Category created successfully...", result);
      navigate("/categories");
    } catch (error) {
      console.error("Error creating category:", error);
      alert("Can't create Category...");
    }
  };
  return (
    <div className="bg-gray-900 min-h-screen m-auto flex items-center justify-center relative">
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <h1 className="text-center text-white font-bold text-[48px]">
          Create Category
        </h1>

        <div className="flex flex-col items-center gap-2">
          <label className="text-white font-bold text-[24px]">
            Category Name <sup>*</sup>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Category Name"
            className="bg-gray-800 rounded-lg p-2 text-white"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <label className="text-white font-bold text-[24px]">
            Category Picture
          </label>
          <input type="file" name="categoryPic" className="text-white" onChange={handleChange}/>
        </div>
        <button
          type="submit"
          className="py-2 bg-green-700 rounded-lg text-white text-[24px] font-bold"
        >
          Create Category
        </button>
      </form>

      <div className="absolute top-2 right-2">
        <Link to="/categories">
          <button className="border-blue-700 border-2 rounded-lg py-1 px-4 bg-blue-800 text-white font-bold">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AddCategoryPage;
