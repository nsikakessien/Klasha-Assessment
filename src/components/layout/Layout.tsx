import React, { useState } from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex">
      <div
        className={`${
          !showMenu ? "hidden" : null
        } md:block transition-all z-20`}
      >
        <Sidebar handleMenu={handleMenu} showMenu={showMenu} />
      </div>
      <div className="flex flex-col md:ml-[280px] mt-[168px] w-full px-8">
        <Header handleMenu={handleMenu} showMenu={showMenu} />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
