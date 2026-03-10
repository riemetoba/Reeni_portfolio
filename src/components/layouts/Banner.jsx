import React, { useState } from "react";
import Button from "../Button";
import Image from "../Image";
import bannerImg from "/src/assets/bannerImg.png";
import bRight from "/src/assets/bRight.png";
import logo from "/src/assets/logo.png";
import dropDownImg from "/src/assets/dropDownImg.png";
import Icons from "../Icons";
import { FaFacebookMessenger } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoMdLocate } from "react-icons/io";

const Banner = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative pb-25 flex items-center overflow-hidden">
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
          <h1 className="absolute top-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[190px] font-bold text-transparent uppercase tracking-wider [-webkit-text-stroke:2px_black] z-0 opacity-30 whitespace-nowrap select-none font-rajdhani">
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

      {/* massenger button */}
      <div className="fixed bottom-50 right-5 z-40">
        <div
          onClick={() => setOpen(true)}
          className="p-4 text-[30px] text-white rounded-full bg-red shadow-lg cursor-pointer hover:scale-110 transition-transform"
        >
          <FaFacebookMessenger />
        </div>
      </div>
      {/* massenger button */}

      {/* right badge */}
      <div className="flex rotate-90 fixed lg:top-88 top-95 -right-23 z-30">
        <div className="lg:py-2.5 py-2 px-6 bg-common">
          <h3 className="text-[16px] text-white font-medium font-rajdhani leading-5 uppercase rotate-180">
            48 Pre-built sites
          </h3>
        </div>
        <div className="lg:py-2.5 py-2 px-3.75 bg-[#48A133]">
          <Image className=" rotate-275" src={bRight} />
        </div>
      </div>
      {/* right badge */}

      {/* right slide start*/}
      {open && (
        <div
          className="fixed inset-0 bg-black/20 z-49"
          onClick={() => setOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-87.5 lg:w-100 bg-white shadow-2xl transition-transform duration-400 z-50 overflow-y-auto ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 bg-[#EDEDED] flex justify-between items-center">
          <Image className="w-24" src={logo} alt="Logo" />
          <button
            onClick={() => setOpen(false)}
            className="p-2 bg-common/5 rounded-full hover:bg-red hover:text-white transition-colors"
          >
            <RxCross2 size={24} />
          </button>
        </div>

        <div className="p-8">
          <Image
            className="w-full rounded-lg"
            src={dropDownImg}
            alt="Profile"
          />
          <h3 className="text-common text-xl font-bold font-rubik mt-6 leading-7">
            Freelancer delivering <br /> exceptional Webflow, and Next.js
            solutions.
          </h3>
          <p className="text-[#5D6570] text-base font-rubik mt-4 leading-relaxed">
            I am a skilled freelancer specializing in Webflow development, Figma
            design, and Next.js projects. I deliver creative, dynamic, and
            user-centric web solutions.
          </p>

          <div className="mt-10 space-y-6">
            <ContactInfo
              icon={<IoCall />}
              title="Call Now"
              detail="+92 (8800) - 98670"
            />
            <ContactInfo
              icon={<MdEmail />}
              title="Mail Us"
              detail="example@info.com"
            />
            <ContactInfo
              icon={<IoMdLocate />}
              title="My Address"
              detail="66 Broklyant, New York 3269"
            />
          </div>

          <div className="mt-10">
            <p className="font-bold mb-4">FIND WITH ME</p>
            <Icons />
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, title, detail }) => (
  <div className="flex items-center gap-4">
    <div className="p-3 border-2 border-common/7 rounded-[5px] text-[#5D6570]">
      {icon}
    </div>
    <div>
      <p className="text-[15px] font-rajdhani font-semibold text-red uppercase">
        {title}
      </p>
      <p className="text-base text-common font-rubik">{detail}</p>
    </div>
  </div>
);

export default Banner;
