import React from "react";
import { ReactComponent as AvatarIcon } from "../../assets/svg/avatar.svg";
import { ReactComponent as DownwardCaret } from "../../assets/svg/downcaret.svg";
import { ReactComponent as Hamburger } from "../../assets/svg/hamburger.svg";

export interface MenuProps {
  showMenu: boolean;
  handleMenu: () => void;
}

const Header = ({ showMenu, handleMenu }: MenuProps) => {
  return (
    <div className="border-b bg-white border-b-grey-100 h-[64px] flex items-center justify-end fixed top-0 left-0 right-0 px-8 md:ml-[280px]">
      <div className="flex md:justify-end justify-between w-full items-center">
        <Hamburger className="md:hidden" onClick={handleMenu} />
        <div className="flex items-center">
          <div className="flex items-center mr-[22px]">
            <AvatarIcon />
            <DownwardCaret />
          </div>
          <div className="flex items-center">
            <div className="font-semibold">En</div>
            <DownwardCaret />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
