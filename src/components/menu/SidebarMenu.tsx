import React, { useEffect, useRef, useState } from "react";
import Button from "../button/Button";
import { ReactComponent as SideCaretIcon } from "../../assets/svg/side-caret.svg";
import { ReactComponent as SupportIcon } from "../../assets/svg/support.svg";

interface SubMenu {
  title: string;
  icon: React.ReactNode;
  clickedIcon: React.ReactNode;
}

interface MenuProps {
  title: string;
  subMenu: SubMenu[];
}

interface Props {
  menu: MenuProps[];
}

const SidebarMenu = ({ menu }: Props) => {
  const [selectedMenu, setSelectedMenu] = useState<string>("Dashboard");

  const handleClick = (text: string) => {
    setSelectedMenu(text);
  };

  return (
    <div className="">
      {menu.map((item) => (
        <div key={item.title} className="last:mb-0 mb-4">
          <p className="text-grey-200 text-base mb-4">{item.title}</p>
          <div className="">
            {item.subMenu.map((sub) => (
              <div
                key={sub.title}
                className="flex items-center mb-4 last:mb-0 cursor-pointer"
                onClick={() => handleClick(sub.title)}
              >
                <div className="mr-2">
                  {selectedMenu === sub.title ? sub.clickedIcon : sub.icon}
                </div>
                <p
                  className={`${
                    selectedMenu === sub.title
                      ? "text-red-200 font-semibold"
                      : "text-grey-900"
                  } text-base font-[inter]`}
                >
                  {sub.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="mt-[142px]">
        <Button className="rounded-[39px] w-[120px] flex items-center mb-[14px] bg-red-200 py-2 pl-[10px]">
          <SupportIcon className="mr-[15px]" />
          <p className="text-xs font-semibold font-[inter] text-white">
            Support
          </p>
        </Button>
        <Button>
          <SideCaretIcon className="mr-[14px]" />
          <p className="text-xs font-semibold font-[inter]">Hide panel</p>
        </Button>
      </div>
    </div>
  );
};

export default SidebarMenu;
