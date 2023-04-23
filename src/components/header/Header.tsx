import React from "react";
import { ReactComponent as AvatarIcon } from "../../assets/svg/avatar.svg";
import { ReactComponent as DownwardCaret } from "../../assets/svg/downcaret.svg";

const Header = () => {
  return (
    <div className="border-b bg-white border-b-grey-100 h-[64px] flex items-center justify-end fixed top-0 left-0 right-0 px-8 ml-[280px]">
      <div className="flex justify-end items-center">
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
  );
};

export default Header;
