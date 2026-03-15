import Image from "../Image";
import serviceImg from "/src/assets/serviceImg.png";

const Service = () => {
  return (
    <section>
      <div className="container lg:py-20 py-10 px-5 lg:px-0">
        {/* Title text start  */}
        <h4 className="text-base text-red font-medium font-rubik text-center uppercase">
          Latest Service
        </h4>
        <h2 className="lg:text-5xl text-[22px] md:text-[32px] text-common font-bold font-rajdhani text-center lg:leading-15 py-3">
          Inspiring The World One Project
        </h2>
        <p className="text-base text-[#5D6570] font-rubik text-center lg:w-156.75 w-full mx-auto lg:mt-0 mt-1.25 ">
          Business consulting consultants provide expert advice and guida
          businesses to help them improve their performance, efficiency, and
          organizational
        </p>
        {/* Title text end  */}
        <div className="lg:flex justify-between items-center lg:mt-15 mt-7.5">
          <div className="lg:w-1/2 w-full">
            <div className="">
              <div className="py-8.5 px-9.5 bg-[#f4f4f4] rounded-[20px] border-b-3 border-r-3 border-red">
                <h2 className="text-2xl text-common font-bold font-rajdhani leading-15">
                  01. A Portfolio of Creativity
                </h2>
                <p className="text-base text-[#5D6570] font-rubik leading-6.5 mt-1">
                  Business consulting consultants provide expert advice and
                  guida the a businesses to help theme their performance
                  efficiency
                </p>
              </div>
            </div>
            <div className="my-4">
              <div className="py-8.5 px-9.5 bg-[#f4f4f4] rounded-[20px] border-b-3 border-r-3 border-red">
                <h2 className="text-2xl text-common font-bold font-rajdhani leading-15">
                  02. My Portfolio of Innovation
                </h2>
                <p className="text-base text-[#5D6570] font-rubik leading-6.5 mt-1">
                  My work is driven by the belief that thoughtful design and
                  strategic planning can empower brands, transform businesses
                </p>
              </div>
            </div>
            <div className="">
              <div className="py-8.5 px-9.5 bg-[#f4f4f4] rounded-[20px] border-b-3 border-r-3 border-red">
                <h2 className="text-2xl text-common font-bold font-rajdhani leading-15">
                  03. A Showcase of My Projects
                </h2>
                <p className="text-base text-[#5D6570] font-rubik leading-6.5 mt-1">
                  In this portfolio, you’ll find a curated selection of projects
                  that highlight my skills in Main Areas, e.g., responsive web
                  design
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="lg:mt-0 mt-7.5">
              <Image src={serviceImg} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
