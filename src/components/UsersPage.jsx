import React from "react";
import SingleUser from "./SingleUser";
import { useState, useEffect } from "react";

const UsersPage = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8000/users");
        if (!response.ok) {
          console.log(`Failed to fetch users: ${response.status} ${response.statusText}`);
          return;
        }
    
        const result = await response.json();
        console.log("Fetched users:", result);
    
        const users = Array.isArray(result.data) ? result.data : [];
        setUserData(users);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const userDeleteHandler = async (userId) => {
    try {
      const response = await fetch(`http://localhost:8000/users/${userId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        console.log(`Failed to delete user.`);
        return;
      }
      setUserData(prevUsers => prevUsers.filter(user => user._id!== userId));
    } catch (error) {
      console.log("Error deleting user:", error);
    }
  };

  return (
    <div className="bg-gray-900 min-h-[100vh] flex flex-col p-4">
      {userData.map((user) => (
        <SingleUser
          key={user._id}
          fullName={user.fullName}
          userName={user.userName}
          email={user.email}
          userDeleteHandler={() => userDeleteHandler(user._id)}
        />
      ))}
    </div>
  );
};

export default UsersPage;