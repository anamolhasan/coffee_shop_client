import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      {/* <Header /> */}
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
