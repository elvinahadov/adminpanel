import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AddUserPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: "",
    fullName: "",
    email: "",
    password: "",
    profilePic: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const uploadImage = async (file) => {
    const uploadData = new FormData();
    uploadData.append("file", file);
    uploadData.append("upload_preset", "hof1ji4h");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dj294wevk/image/upload",
        {
          method: "POST",
          body: uploadData,
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

    let profilePicUrl = "";

    if (formData.profilePic) {
      profilePicUrl = await uploadImage(formData.profilePic);
    }

    // Prepare the data to be sent to the server
    const userData = {
      ...formData,
      profilePic: profilePicUrl, // Update with the uploaded image URL
    };

    try {
      const response = await fetch("http://localhost:8000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      const result = await response.json();
      alert("User created successfully...",result);
      navigate("/users");
    } catch (error) {
      console.error("Error creating user:", error);
      alert("Can't create user...");
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen m-auto flex items-center justify-center relative">
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <h1 className="text-center text-white font-bold text-[48px]">
          Create User
        </h1>

        <div className="flex flex-col items-center gap-2">
          <label className="text-white font-bold text-[24px]">
            User Name <sup>*</sup>
          </label>
          <input
            type="text"
            name="userName"
            placeholder="User Name"
            onChange={handleChange}
            className="bg-gray-800 rounded-lg p-2 text-white"
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <label className="text-white font-bold text-[24px]">
            Full Name<sup>*</sup>
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            onChange={handleChange}
            className="bg-gray-800 rounded-lg p-2 text-white"
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <label className="text-white font-bold text-[24px]">
            Email address <sup>*</sup>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            onChange={handleChange}
            className="bg-gray-800 rounded-lg p-2 text-white"
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <label className="text-white font-bold text-[24px]">
            Password <sup>*</sup>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="bg-gray-800 rounded-lg p-2 text-white"
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <label className="text-white font-bold text-[24px]">
            Profile Picture <sup>*</sup>
          </label>
          <input
            type="file"
            name="profilePic"
            onChange={handleChange}
            className="text-white"
          />
        </div>

        <button
          type="submit"
          className="py-2 bg-green-700 rounded-lg text-white text-[24px] font-bold"
        >
          Create User
        </button>
      </form>
      <div className="absolute top-2 right-2">
        <Link to="/users">
          <button className="border-blue-700 border-2 rounded-lg py-1 px-4 bg-blue-800 text-white font-bold">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AddUserPage;
