import React from "react";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

const HomePage = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <div className="flex">
      <Sidebar sidebarToggle={sidebarToggle} />
      <Dashboard
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
    </div>
  );
};

export default HomePage;