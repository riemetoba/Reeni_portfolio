import Image from "../Image";
import testIcon from "/src/assets/testimonial-icon.png";

const Testimonial = () => {
  return (
    <section>
      <div className="container lg:py-20 py-10">
        {/* Title text start  */}
        <div className="">
          <h4 className="text-base text-red font-medium  font-rubik  text-center uppercase">
            Our Testimonial
          </h4>
          <h3 className="lg:text-5xl md:text-[32px] text-[22px] text-common font-bold font-rajdhani text-center lg:leading-15 lg:w-121 w-full mx-auto">
            Enhancing Collaboration between Remote
          </h3>
        </div>
        {/* Title text end  */}
        <div className="lg:flex justify-between items-center gap-8 lg:mt-13 mt-7.5">
            {/* Flex left  */}
          <div className="lg:w-1/2 w-full lg:mt-0 mt-7.5">
            <div className="p-9.5 bg-[#F4F4F4] border-b-3 border-r-3 border-red rounded-[20px]">
              <Image src={testIcon} />
              <p className="text-lg text-[#5D6570] font-rubik leading-7.5 mt-10.5">
                A personal portfolio is a curated collection of an individual's
                professional work, showcasing their skilA personal portfolio is
                a curated collection of an individual's professional work,
                showcasing their skills,
              </p>
              <h3 className="text-lg text-common font-bold font-rajdhani leading-7.5 mt-9">
                Cameron Williamson
              </h3>
              <h4 className="text-base text-[#5D6570] font-rubik leading-7.5">
                Ui/Ux Designer
              </h4>
            </div>
          </div>
          {/* Flex left  */}
          {/* Flex right  */}
          <div className="lg:w-1/2 w-full lg:mt-0 mt-7.5">
            <div className="p-9.5 bg-[#F4F4F4] border-b-3 border-r-3 border-red rounded-[20px]">
              <Image src={testIcon} />
              <p className="text-lg text-[#5D6570] font-rubik leading-7.5 mt-10.5">
                A personal portfolio is a curated collection of an individual's
                professional work, showcasing their skilA personal portfolio is
                a curated collection of an individual's professional work,
                showcasing their skills,
              </p>
              <h3 className="text-lg text-common font-bold font-rajdhani leading-7.5 mt-9">
                Cameron Williamson
              </h3>
              <h4 className="text-base text-[#5D6570] font-rubik leading-7.5">
                Ui/Ux Designer
              </h4>
            </div>
          </div>
          {/* Flex right  */}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
