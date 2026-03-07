import Button from "../Button";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import Image from "../Image";
import bannerImg from "/src/assets/bannerImg.png";

const Banner = () => {
  return (
    <div className="py-15">
      <div className="flex items-center justify-between container">
        {/* Flex left  */}
        <div className="">
          <h3 className="font-rajdhani font-bold text-[28px] text-common uppercase">
            Hello i’m
          </h3>
          <h1 className="font-rajdhani font-bold text-[90px] text-common uppercase w-101.25 leading-[103.5px] py-5">
            Brooklyn Simmons
          </h1>
          <Button btnText={"View Portfolio"} />
        </div>
        {/* Flex left  */}
        {/* Flex middle  */}

        <div className="relative flex justify-center items-end h-175">
          {/* Grey Outline Text (Back) */}
          <h1
            className="absolute bottom-24 text-[160px] font-extrabold 
      text-transparent tracking-[10px] 
      [-webkit-text-stroke:2px_#d1d5db] z-0"
          >
            WEB DESIGN
          </h1>

          {/* Red Outline Text (Front of grey but behind image) */}
          <h1
            className="absolute bottom-10 text-[140px] font-extrabold 
      text-transparent tracking-[10px] 
      [-webkit-text-stroke:2px_red] z-10"
          >
            WEB DESIGN
          </h1>

          {/* Image (Top Layer) */}
         <Image src={bannerImg} className={"relative z-20 w-155"}/>
        </div>

        {/* Flex middle  */}
        {/* Flex right  */}
        <div className="">
          <p className="font-rubik text-base text-common">About Me</p>
          <p className="font-rubik text-base text-[#5D6570] leading-7.5 w-74 py-8">
            A personal <span className="text-red">portfolio</span> is a
            collection of to your work, that is achievements, and a skills that{" "}
            <span className="text-red">web design</span> highlights in your
          </p>
          <p>Find me on</p>
          {/* Icons start  */}
          <div className="flex items-center gap-x-3 pt-4">
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
          </div>
          {/* Icons end */}
        </div>
        {/* Flex right  */}
      </div>
    </div>
  );
};

export default Banner;
