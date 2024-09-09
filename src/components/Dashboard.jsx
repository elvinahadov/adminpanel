import React from "react";
import Navbar from "./Navbar";
import UsersPage from "./UsersPage";
import ProductsPage from "./ProductsPage";
import AddUserPage from "./AddUserPage"

const Dashboard = ({ sidebarToggle, setSidebarToggle, selected }) => {
  return (
    <div className={`${sidebarToggle ? "" : " ml-64 "} w-full bg-gray-900`}>
      <Navbar
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
      
      {selected === "users" ? <UsersPage /> : ""}
      {selected === "products" ? <ProductsPage /> : ""}   
      {selected === "addUser" ?<AddUserPage/>:""}
    </div>
  );
};

export default Dashboard;