import Icons from "../Icons";
import Image from "../Image";
import logo from "/src/assets/logo.png";
import { CiMail } from "react-icons/ci";
import { HiMail } from "react-icons/hi";
import { IoLocationSharp, IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-[#F4F4F4] py-15 px-5 lg:px-0">
      <div className="container flex flex-col lg:flex-row items-start justify-between">
        <div className="w-[50%]">
          <Image src={logo} />
          <h2 className="text-[30px] lg:text-[50px] font-rajdhani w-100 lg:leading-15 py-8">
            <span className="font-bold">Get Ready</span> To <br />Create Great
          </h2>
          <div className="flex items-center border-b border-b-[#D9DDE0] pb-4 w-65 lg:w-82.5 mb-10 lg:mb-0">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 text-[#5D6570] outline-none"
            />
            <CiMail />
          </div>
        </div>
        <div className="w-[50%]">
          <div className="flex flex-col lg:flex-row items-start justify-between">
            <div className="">
              <h4 className="font-rajdhani font-bold text-2xl text-common pb-8">
                Quick Link
              </h4>
              <ul>
                <li className="font-rubik text-base text-common pt-4 cursor-pointer">
                  About Me
                </li>
                <li className="font-rubik text-base text-common pt-4 cursor-pointer">
                  Service
                </li>
                <li className="font-rubik text-base text-common pt-4 cursor-pointer">
                  Contact Us
                </li>
                <li className="font-rubik text-base text-common pt-4 cursor-pointer">
                  Blog Post
                </li>
                <li className="font-rubik text-base text-common pt-4 cursor-pointer">
                  Pricing
                </li>
              </ul>
            </div>
            <div className="">
              <h4 className="font-rajdhani font-bold text-2xl text-common pb-10">
                Contact
              </h4>
              {/* icon + content part start */}
              <div className="flex items-center">
                <div className="flex items-center justify-center rounded-full border-2 border-[#D9DDE0] h-10 w-10">
                  <HiMail />
                </div>
                <p className="text-base font-rubik text-common ml-3">
                  nafiz125@gmail.com
                </p>
              </div>
              <div className="flex items-center mt-3">
                <div className="flex items-center justify-center rounded-full border-2 border-[#D9DDE0] h-10 w-10">
                  <IoLocationSharp />
                </div>
                <p className="text-base font-rubik text-common ml-3">
                  3891 Ranchview Dr. Richardson
                </p>
              </div>
              <div className="flex items-center mt-3 mb-8">
                <div className="flex items-center justify-center rounded-full border-2 border-[#D9DDE0] h-10 w-10">
                  <IoCall />
                </div>
                <p className="text-base font-rubik text-common ml-3">
                  01245789321
                </p>
              </div>
              <Icons />
            </div>
          </div>
        </div>
      </div>
       <div className="container lg:flex md:flex justify-between items-center py-7 border-t border-[#D9DDE0] lg:mt-31.75 mt-15">
          <p className="text-sm text-[#5D6570] font-normal font-rubik leading-7.5 text-start">
            © InversWeb 2026 | All Rights Reserved
          </p>
          <p className="text-sm text-common font-normal font-rubik leading-7.5 text-start">
            Trams & Condition Privacy Policy Contact Us
          </p>
        </div>
    </div>
  );
};

export default Footer;
