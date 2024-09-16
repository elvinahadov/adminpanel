import React from "react";
import { Link } from "react-router-dom";
import SingleCategory from "../components/SingleCategory";
import { useEffect } from "react";
import { useState } from "react";

const CategoryPage = () => {
  const [categoryData, setCategoryData] = useState([]);
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
        console.log("Fetched users:", result);
      } catch (error) {
        console.log("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);
  const categoryDeleteHandler = async (categoryId) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/categories/${categoryId}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        console.log(`Failed to delete category.`);
        return;
      }
      setCategoryData((prevCategorys) =>
        prevCategorys.filter((category) => category._id !== categoryId)
      );
    } catch (error) {
      console.log("Error deleting category:", error);
    }
  };
  return (
    <div className="bg-gray-900 min-h-[100vh] flex flex-col p-4">
      <Link to="/addCategory">
        <button className="border-green-700 border-2 rounded-lg py-1 px-4 bg-green-800 text-white font-bold">
          Add Category
        </button>
        </Link>
        {categoryData &&
          categoryData.map((category) => {
            return (
              <SingleCategory
                key={category._id}
                name={category.name}
                id={category._id}
                categoryPic={category.categoryPic}
                deleteCategory={() =>categoryDeleteHandler(category._id)}
              />
            );
          })}
    </div>
  );
};

export default CategoryPage;
