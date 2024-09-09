import React from "react";
import Navbar from "./Navbar";

const Dashboard = ({ sidebarToggle, setSidebarToggle }) => {
  return (
    <div className="w-full bg-gray-900">
      <Navbar
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
    </div>
  );
};

export default Dashboard;
