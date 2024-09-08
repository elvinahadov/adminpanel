import React from "react";
import Navbar from "./Navbar";
import UsersPage from "./UsersPage";
import ProductsPage from "./ProductsPage";

const Dashboard = ({ sidebarToggle, setSidebarToggle, selected }) => {
  return (
    <div className={`${sidebarToggle ? "" : " ml-64 "} w-full`}>
      <Navbar
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
      {selected === "users" ? <UsersPage /> : ""}
      {selected === "products" ? <ProductsPage /> : ""}
      
    </div>
  );
};

export default Dashboard;
