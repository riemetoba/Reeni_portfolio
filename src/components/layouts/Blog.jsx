import Image from "../Image";
import blogOne from "/src/assets/blogOne.png";
import blogTwo from "/src/assets/blogTwo.png";
import blogThree from "/src/assets/blogThree.png";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Blog = () => {
  return (
    <>
      <section>
        <div className="container lg:pb-30 pb-15 pt-5 px-5 lg:px-0">
          <div className="">
            <h4 className="text-base text-red font-medium font-rubik text-center uppercase pb-2">
              Blog and news
            </h4>
            <h3 className="lg:text-5xl md:text-[32px] text-[22px] text-common font-bold font-rajdhani text-center lg:leading-15 lg:w-159 w-full mx-auto">
              Elevating Personal Branding the through Powerful Portfolios
            </h3>
          </div>
          <div className="lg:flex justify-between items-center gap-7.5 lg:mt-13 mt-7.5">
            <div className="lg:w-[33%] w-full lg:mt-0 mt-7.5">
              <div className="pb-7.75 border-3 border-common/7 rounded-[22px]">
                <Image className="w-full" src={blogOne} />
                <h3 className="text-2xl text-common font-bold font-rajdhani mt-7.5 ml-7.5 w-[80%]">
                  Let’s bring your ideas to life! Contact me, and let’s
                </h3>
                <p className="text-[#5D6570] flex items-center text-[13px] font-rubik leading-7 cursor-pointer ml-7 mt-4">
                  Read More <MdOutlineKeyboardArrowRight />
                </p>
              </div>
            </div>
            <div className="lg:w-[33%] w-full lg:mt-0 mt-7.5">
              <div className="pb-7.75 border-3 border-common/7 rounded-[22px]">
                <Image className="w-full" src={blogTwo} />
                <h3 className="text-2xl text-common font-bold font-rajdhani mt-7.5 ml-7.5 w-[80%]">
                  Inspiring the World, One Project at a Time for the man
                </h3>
                <p className="text-[#5D6570] flex items-center text-[13px] font-rubik leading-7 cursor-pointer ml-7 mt-4">
                  Read More <MdOutlineKeyboardArrowRight />
                </p>
              </div>
            </div>

            <div className="lg:w-[33%] w-full lg:mt-0 mt-7.5">
              <div className="pb-7.75 border-3 border-common/7 rounded-[22px]">
                <Image className="w-full" src={blogThree} />
                <h3 className="text-2xl text-common font-bold font-rajdhani mt-7.5 ml-7.5 w-[80%]">
                  Each one showcases my approach and dedication man
                </h3>
               <p className="text-[#5D6570] flex items-center text-[13px] font-rubik leading-7 cursor-pointer ml-7 mt-4">
                  Read More <MdOutlineKeyboardArrowRight />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
