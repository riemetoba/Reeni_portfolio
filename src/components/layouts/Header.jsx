import Image from "../Image";
import logo from "/src/assets/logo.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  return (
    <div className="bg-[#F4F4F4] py-5">
      <div className="container flex items-center justify-between">
        {/* Logo start  */}
        <div className="">
          <Image src={logo} />
        </div>
        {/* Logo end  */}
        {/* Menu start  */}
        <div className="">
          <ul className="flex items-center gap-x-5">
            <li className="font-rajdhani text-base font-bold text-common">
              Home
            </li>
            <li className="font-rajdhani text-base font-bold text-common">
              About
            </li>
            <li className="font-rajdhani text-base font-bold text-common flex items-center gap-1">
              Services{" "}
              <span>
                <MdOutlineKeyboardArrowDown />
              </span>
            </li>
            <li className="font-rajdhani text-base font-bold text-common flex items-center gap-1">
              Blog{" "}
              <span>
                <MdOutlineKeyboardArrowDown />
              </span>
            </li>
            <li className="font-rajdhani text-base font-bold text-common flex items-center gap-1">
              Project{" "}
              <span>
                <MdOutlineKeyboardArrowDown />
              </span>
            </li>
            <li className="font-rajdhani text-base font-bold text-common">
              Contact
            </li>
          </ul>
        </div>
        {/* Menu start  */}
      </div>
    </div>
  );
};

export default Header;
