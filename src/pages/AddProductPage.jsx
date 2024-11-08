import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddProductPage = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    quantity: "",
    productPic: "",
    categoryId: "",
    newArrivals: false,
    topSelling: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, type, checked, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "hof1ji4h");

    try {
      const response = await fetch("https://api.cloudinary.com/v1_1/dj294wevk/image/upload", {
        method: "POST",
        body: formData,
      });

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

    let productPicUrl = "";

    if (formData.productPic) {
      productPicUrl = await uploadImage(formData.productPic);
    }

    const productData = {
      ...formData,
      productPic: productPicUrl,
    };

    try {
      const response = await fetch("http://localhost:8000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      if (!response.ok) {
        throw new Error("Failed to create product");
      }

      const result = await response.json();
      alert("Product created successfully", result);
      navigate("/products");
    } catch (error) {
      console.error("Error creating product:", error);
      alert("Can't create Product...");
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/categories");
        if (!response.ok) {
          console.log(`Failed to fetch categories.`);
          return;
        }

        const result = await response.json();
        const categories = Array.isArray(result.data) ? result.data : [];
        setCategoryData(categories);
      } catch (error) {
        console.log("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen m-auto flex items-center justify-center relative">
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <h1 className="text-center text-white font-bold text-[48px]">Create Product</h1>

        <div className="flex flex-col items-center gap-2">
          <label className="text-white font-bold text-[24px]">
            Product Name <sup>*</sup>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            className="bg-gray-800 rounded-lg p-2 text-white"
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <label className="text-white font-bold text-[24px]">
            Product Price <sup>*</sup>
          </label>
          <input
            type="number"
            name="price"
            placeholder="Product Price"
            className="bg-gray-800 rounded-lg p-2 text-white [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <label className="text-white font-bold text-[24px]">
            Product Category <sup>*</sup>
          </label>
          <select name="categoryId" id="category" onChange={handleChange}>
            {categoryData && categoryData.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col items-center gap-2">
          <label className="text-white font-bold text-[24px]">
            Product Quantity <sup>*</sup>
          </label>
          <input
            type="number"
            name="quantity"
            placeholder="Product Quantity"
            className="bg-gray-800 rounded-lg p-2 text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <label className="text-white font-bold text-[24px]">
            Product Picture
          </label>
          <input
            type="file"
            name="productPic"
            className="text-white"
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center gap-2 justify-center">
          <label className="text-white font-bold text-[24px]">
            New Arrivals
          </label>
          <input
            type="checkbox"
            name="newArrivals"
            className="bg-gray-800 rounded-lg p-2 text-white"
            checked={formData.newArrivals}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center gap-2 justify-center">
          <label className="text-white font-bold text-[24px]">
            Top Selling
          </label>
          <input
            type="checkbox"
            name="topSelling"
            className="bg-gray-800 rounded-lg p-2 text-white"
            checked={formData.topSelling}
            onChange={handleChange}
          />
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
