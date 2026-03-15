import { useState } from "react";
import Image from "../Image";
import logo from "/src/assets/logo.png";
import { MdOutlineKeyboardArrowDown, MdClose } from "react-icons/md";
import { FaBarsStaggered } from "react-icons/fa6";
import Icons from "../Icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#F4F4F4] py-5 relative">
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="relative z-40">
          <Image src={logo} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-x-5 cursor-pointer">
            <li className="font-rajdhani text-base font-bold text-common hover:text-red duration-300">Home</li>
            <li className="font-rajdhani text-base font-bold text-common hover:text-red duration-300">About</li>
            <li className="font-rajdhani text-base font-bold text-common hover:text-red duration-300 flex items-center gap-1">
              Services <MdOutlineKeyboardArrowDown />
            </li>
            <li className="font-rajdhani text-base font-bold text-common hover:text-red duration-300 flex items-center gap-1">
              Blog <MdOutlineKeyboardArrowDown />
            </li>
            <li className="font-rajdhani text-base font-bold text-common hover:text-red duration-300 flex items-center gap-1">
              Project <MdOutlineKeyboardArrowDown />
            </li>
            <li className="font-rajdhani text-base font-bold text-common hover:text-red duration-300">Contact</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-x-3">
          <div className="hidden lg:block">
            <Icons />
          </div>
          
          {/* Hamburger Icon */}
          <div 
            onClick={toggleMenu}
            className="flex items-center justify-center bg-red rounded-full h-11 w-11 sm:h-12 sm:w-12 cursor-pointer relative z-50"
          >
            {isOpen ? (
              <MdClose className="text-white text-2xl" />
            ) : (
              <FaBarsStaggered className="text-white text-xl" />
            )}
          </div>
        </div>

        {/* Tablet Menu */}
        {isOpen && (
          <div 
            className="fixed inset-0 z-30"
            onClick={toggleMenu}
          ></div>
        )}

        <div className={`
          fixed top-0 right-0 h-full w-97.5 bg-white shadow-2xl z-40 px-8 py-10 transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          lg:hidden
        `}>
          <ul className="flex flex-col gap-y-6 mt-16">
            <li className="font-rajdhani text-lg font-bold text-common hover:text-red duration-300">Home</li>
            <li className="font-rajdhani text-lg font-bold text-common hover:text-red duration-300">About</li>
            <li className="font-rajdhani text-lg font-bold text-common hover:text-red duration-300 flex items-center justify-between">
              Services <MdOutlineKeyboardArrowDown />
            </li>
            <li className="font-rajdhani text-lg font-bold text-common hover:text-red duration-300 flex items-center justify-between">
              Blog <MdOutlineKeyboardArrowDown />
            </li>
            <li className="font-rajdhani text-lg font-bold text-common hover:text-red duration-300 flex items-center justify-between">
              Project <MdOutlineKeyboardArrowDown />
            </li>
            <li className="font-rajdhani text-lg font-bold text-common hover:text-red duration-300 border-b pb-4">Contact</li>
          </ul>

          <div className="mt-8 flex justify-start">
            <Icons />
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div 
            className="fixed inset-0 z-30 lg:hidden"
            onClick={toggleMenu}
          ></div>
        )}

        <div className={`
          fixed top-0 right-0 h-full w-97.5 bg-white shadow-2xl z-40 px-8 py-10 transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          lg:hidden
        `}>
          <ul className="flex flex-col gap-y-6 mt-16">
            <li className="font-rajdhani text-lg font-bold text-common">Home</li>
            <li className="font-rajdhani text-lg font-bold text-common">About</li>
            <li className="font-rajdhani text-lg font-bold text-common flex items-center justify-between">
              Services <MdOutlineKeyboardArrowDown />
            </li>
            <li className="font-rajdhani text-lg font-bold text-common flex items-center justify-between">
              Blog <MdOutlineKeyboardArrowDown />
            </li>
            <li className="font-rajdhani text-lg font-bold text-common flex items-center justify-between">
              Project <MdOutlineKeyboardArrowDown />
            </li>
            <li className="font-rajdhani text-lg font-bold text-common border-b pb-4">Contact</li>
          </ul>

          <div className="mt-8 flex justify-start">
            <Icons />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;