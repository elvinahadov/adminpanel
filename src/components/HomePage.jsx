import React from "react";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

const HomePage = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [selected, setSelected] = useState("");
  return (
    <div className="flex">
      <Sidebar
        sidebarToggle={sidebarToggle}
        selected={selected}
        setSelected={setSelected}
      />
      <Dashboard
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
        selected={selected}
      />
    </div>
  );
};

export default HomePage;
