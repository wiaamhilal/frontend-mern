import React from "react";
import SidebarDashboard from "./SidebarDashboard";
import MainDashboard from "./MainDashboard";
import styled from "styled-components";

const Dashboard = () => {
  return (
    <Holder className="pt-4 m-4 m-md-0">
      <div className="row">
        <div className="sidebar col-2 d-none d-md-block ">
          <SidebarDashboard />
        </div>
        <div className="main col-12 col-md-10">
          <MainDashboard />
        </div>
      </div>
    </Holder>
  );
};
const Holder = styled.div`
  background-image: url("https://images.unsplash.com/photo-1615799998603-7c6270a45196?q=80&w=1604&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: contain;
  padding-bottom: 5px;
  min-height: 100vh;
`;
export default Dashboard;
