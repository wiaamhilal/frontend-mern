import React from "react";
import SidebarDashboard from "./SidebarDashboard";
import MainDashboard from "./MainDashboard";

const Dashboard = () => {
  return (
    <div className="pt-4">
      <div className="row">
        <div className="sidebar col-2">
          <SidebarDashboard />
        </div>
        <div className="main col-10">
          <MainDashboard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
