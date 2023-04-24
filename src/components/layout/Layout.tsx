import React, { useState } from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Dashboard from "../../pages/dashboard/Dashboard";

const Layout = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex">
      <div
        className={`max-[376px]:${
          !showMenu ? "hidden" : null
        } transition-all max-[376px]:z-20`}
      >
        <Sidebar handleMenu={handleMenu} showMenu={showMenu} />
      </div>
      <div className="flex flex-col md:ml-[280px] mt-[168px] w-full px-8">
        <Header handleMenu={handleMenu} showMenu={showMenu} />
        <Dashboard />
      </div>
    </div>
  );
};

export default Layout;
