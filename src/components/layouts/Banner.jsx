import Button from "../Button";
import Image from "../Image";
import bannerImg from "/src/assets/bannerImg.png";
import bRight from "/src/assets/bRight.png";
import Icons from "../Icons";

const Banner = () => {
  return (
    <div className="min-h-200 flex items-center pb-30">
      <div className="container mx-auto flex items-center justify-between gap-10">
        {/* Flex left  */}
        <div className="w-[25%] z-30">
          <h3 className="font-rajdhani font-bold text-[28px] text-common uppercase">
            Hello i’m
          </h3>
          <h1 className="font-rajdhani font-bold text-[80px] text-common uppercase leading-[103.5px] py-5">
            Brooklyn <br /> Simmons
          </h1>
          <Button btnText={"View Portfolio"} />
        </div>
        {/* Flex left  */}
        {/* Flex middle  */}
        <div className="relative flex justify-center items-end h-175 w-[50%]">
          {/* Back text  */}
          <h1 className="absolute top-[89%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[190px] font-bold text-transparent uppercase tracking-wider [-webkit-text-stroke:1px_black] z-0 opacity-30 whitespace-nowrap select-none font-rajdhani">
            WEB DESIGN
          </h1>

          {/* Image start  */}
          <div className="relative z-10">
            <Image src={bannerImg} className="h-162.5 w-auto object-contain" />
          </div>
          {/* Image end  */}
          {/* Front text  */}
          <h1
            className="absolute -bottom-30 left-61 -translate-x-1/2 text-[158px] font-bold text-transparent uppercase tracking-tight [-webkit-text-stroke:1.5px_red] z-20 pointer-events-none select-none font-rajdhani whitespace-nowrap"
            aria-hidden="true"
          >
            WEB DESIGN
          </h1>
        </div>
        {/* Flex middle  */}
        {/* Flex right */}
        <div className="w-[25%] z-30 space-y-6">
          <div>
            <p className="font-rubik text-base text-common font-medium">
              About Me
            </p>
            <p className="font-rubik text-base text-[#5D6570] leading-7.5 w-[296.25px] pt-4">
              A personal <span className="text-red">portfolio</span> is a
              collection of to your work, that is achievements, and a skills
              that <span className="text-red">web design</span> highlights in
              your
            </p>
          </div>

          <div>
            <p className="font-rubik text-base text-common font-medium mb-4">
              Find me on
            </p>
            <Icons />
          </div>
        </div>
      </div>
      {/* Banner right side start  */}
      <div className="flex rotate-90 fixed lg:top-88 top-95 -right-23 z-30">
        <div className="py-2 px-5 bg-[#1F242E]">
          <h3 className="text-base text-center text-white font-medium font-rajdhani leading-5 uppercase rotate-180">
            48 Pre-built sites
          </h3>
        </div>
        <div className="py-2 px-4 bg-[#48A133]">
          <img className="rotate-275" src={bRight} alt="" />
        </div>
      </div>
      {/* Banner right side end  */}
    </div>
  );
};

export default Banner;
