import React from "react";
import Image from "../Image";
import logo from "/src/assets/logo.png";
import { CiMail } from "react-icons/ci";


const Footer = () => {
  return (
    <div className="bg-[#F4F4F4] py-15">
      <div className="container flex items-center justify-between">
        <div className="">
          <Image src={logo} />
          <h2 className="text-[50px] font-rajdhani w-100 leading-15 py-8">
            <span className="font-bold">Get Ready</span> To Create Great
          </h2>
          <div className="flex items-center">
            <input type="email" placeholder="Email Address" className="border-b pb-4 text-[#5D6570] border-b-[#D9DDE0] outline-none 82.5" />
            <CiMail className=""/>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
