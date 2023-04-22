import React from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Dashboard from "../../pages/dashboard/Dashboard";

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col ml-[280px] mt-[168px] w-full px-8">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
};

export default Layout;
