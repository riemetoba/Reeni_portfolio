import Image from "../Image";
import logo from "/src/assets/logo.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";


const Header = () => {
  return (
    <nav className="bg-[#F4F4F4] py-5">
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
        {/* Icons start  */}
        <div className="flex items-center gap-x-3">
          <div className="flex items-center justify-center bg-[#0A0A0A]/5 rounded-full h-15 w-15">
            <FaInstagram className="text-common text-xl" />
          </div>
            <div className="flex items-center justify-center bg-[#0A0A0A]/5 rounded-full h-15 w-15">
            <FaLinkedinIn className="text-common text-xl" />
          </div>
            <div className="flex items-center justify-center bg-[#0A0A0A]/5 rounded-full h-15 w-15">
            <FaTwitter className="text-common text-xl" />
          </div>
          <div className="flex items-center justify-center bg-[#0A0A0A]/5 rounded-full h-15 w-15">
            <FaFacebookF className="text-common text-xl" />
          </div>
          <div className="flex items-center justify-center bg-red rounded-full h-15 w-15">
            <FaBarsStaggered className="text-[#ffffff] text-xl" />
          </div>
        </div>
        {/* Icons end */}
      </div>
    </nav>
  );
};

export default Header;
