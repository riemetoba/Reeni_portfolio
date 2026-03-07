import Image from "../Image";
import logo from "/src/assets/logo.png";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="bg-[#F4F4F4] py-15">
      <div className="container flex items-start justify-between">
        <div className="">
          <Image src={logo} />
          <h2 className="text-[50px] font-rajdhani w-100 leading-15 py-8">
            <span className="font-bold">Get Ready</span> To Create Great
          </h2>
          <div className="flex items-center border-b border-b-[#D9DDE0] pb-4 w-82.5">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 text-[#5D6570] outline-none"
            />
            <CiMail />
          </div>
        </div>
        <div className="">
          <h4 className="font-rajdhani font-bold text-2xl text-common pb-8">Quick Link</h4>
          <ul>
            <li className="font-rubik text-base text-common pt-4">About Me</li>
            <li className="font-rubik text-base text-common pt-4">Service</li>
            <li className="font-rubik text-base text-common pt-4">Contact Us</li>
            <li className="font-rubik text-base text-common pt-4">Blog Post</li>
            <li className="font-rubik text-base text-common pt-4">Pricing</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
