import React, { useState } from "react";
import { ReactComponent as LeftCaret } from "../../assets/svg/left-caret.svg";
import { ReactComponent as RightCaret } from "../../assets/svg/right-caret.svg";

interface Prop {
  currentPage: number;
}

const pages = ["1", "2", "3", "...", "8", "9", "10"];

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="bg-white border border-grey-600 rounded-[5px] flex justify-between items-center w-[375px] py-2 px-4">
      <div className="">
        <LeftCaret />
      </div>
      {pages.map((page) => (
        <div key={page} className="">
          <div
            className={`${
              currentPage === Number(page) ? "bg-grey-150" : "bg-white"
            } rounded-[20px] flex justify-center cursor-pointer items-center w-[25px] h-[25px]  font-semibold ${
              currentPage === Number(page) ? "text-grey-900" : "text-grey-250"
            }`}
            onClick={() => setCurrentPage(Number(page))}
          >
            {page}
          </div>
        </div>
      ))}
      <div className="">
        <RightCaret />
      </div>
    </div>
  );
};

export default Pagination;
