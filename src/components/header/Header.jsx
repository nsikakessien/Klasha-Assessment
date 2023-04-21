import { ReactComponent as AvatarIcon } from "../../assets/svg/avatar.svg";
import { ReactComponent as DownwardCaret } from "../../assets/svg/downcaret.svg";

const Header = () => {
  return (
    <div className="border border-b-grey-100 py-[18px] fixed top-0 left-0 right-0 px-8">
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
