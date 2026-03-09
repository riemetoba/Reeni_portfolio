import portfolioOne from "/src/assets/portfolioOne.png";
import portfolioTwo from "/src/assets/portfolioTwo.png";
import portfolioThree from "/src/assets/portfolioThree.png";
import portfolioFour from "/src/assets/portfolioFour.png";
import { GoArrowUpRight } from "react-icons/go";


const Portfolio = () => {
  return (
    <section>
      <div className="container lg:py-25 py-15">
        <div className="">
          <h4 className="text-base text-red font-medium  font-rubik  text-center uppercase">
            Latest Portfolio
          </h4>
          <h2 className="lg:text-[48px] text-[22px] md:text-[32px] text-common font-bold font-rajdhani text-center">
            Transforming Ideas into Exceptional
          </h2>
          <p className="text-base text-[#5D6570] font-rubik text-center lg:w-156.75 mx-auto ">
            Business consulting consultants provide expert advice and guida
            businesses to help them improve their performance, efficiency, and
            organizational
          </p>
        </div>

        <div className="mt-15 lg:flex md:flex justify-between ">
          <div className="lg:w-1/2 md:w-1/2 w-full">
            <div className="px-6 ">
              <div className="p-5 border border-[#D9DDE0] rounded-[20px]">
                <img src={portfolioOne} />
              </div>
              <div className=" flex justify-between items-center mt-8.25">
                <div className="">
                  <h2 className="lg:text-2xl text-[20px] text-common font-bold font-rajdhani">
                    My Journey as a Creator
                  </h2>
                  <p className="text-base text-[#5D6570] font-rubik mt-2.5">
                    Development Coaches
                  </p>
                </div>
                <div className="p-3 border border-[#D9DDE0] rounded-[10px] text-common cursor-pointer">
                  <GoArrowUpRight />
                </div>
              </div>
              <div className=""></div>
            </div>
            <div className="px-6 lg:mt-35 md:mt-25 mt-15 ">
              <div className="p-5 border border-[#D9DDE0] rounded-[20px]">
                <img src={portfolioTwo} />
              </div>
              <div className=" flex justify-between items-center mt-8.25">
                <div className="">
                  <h2 className="lg:text-2xl text-[20px] text-common font-bold font-rajdhani">
                    My Portfolio of Innovation
                  </h2>
                  <p className="text-base text-[#5D6570] font-rubik mt-2.5">
                    App Development
                  </p>
                </div>
                <div className="p-3 border border-[#D9DDE0] rounded-[10px] text-common cursor-pointer">
                  <GoArrowUpRight />
                </div>
              </div>
              <div className=""></div>
            </div>
          </div>
          <div className="lg:w-1/2 md:w-1/2 w-full  lg:mt-25 md:mt-20 mt-15">
            <div className="px-6 ">
              <div className="p-5 border border-[#D9DDE0] rounded-[20px]">
                <img src={portfolioThree} />
              </div>
              <div className=" flex justify-between items-center mt-8.25">
                <div className="">
                  <h2 className="lg:text-2xl text-[20px] text-common font-bold font-rajdhani">
                    My Professional Portfolio
                  </h2>
                  <p className="text-base text-[#5D6570] font-rubik mt-2.5">
                    Development Coaches
                  </p>
                </div>
                <div className="p-3 border border-[#D9DDE0] rounded-[10px] text-common cursor-pointer">
                  <GoArrowUpRight />
                </div>
              </div>
              <div className=""></div>
            </div>
            <div className="px-6 lg:mt-35 md:mt-25 mt-15 ">
              <div className="p-5 border border-[#D9DDE0] rounded-[20px]">
                <img src={portfolioFour} />
              </div>
              <div className=" flex justify-between items-center mt-8.25">
                <div className="">
                  <h2 className="lg:text-2xl text-[20px] text-common font-bold font-rajdhani">
                    A Portfolio of Creativity and Passion
                  </h2>
                  <p className="text-base text-[#5D6570] font-rubik mt-2.5">
                    Business Development
                  </p>
                </div>
                <div className="p-3 border border-[#D9DDE0] rounded-[10px] text-common cursor-pointer">
                  <GoArrowUpRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
