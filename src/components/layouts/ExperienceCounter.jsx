const ExperienceCounter = () => {
  return (
    <section>
      <div className="container flex justify-between items-center gap-8 py-20">
        {/* Left side  */}
        <div className="lg:w-1/2 w-full">
          <div
            className="bg-[#F4F4F4] lg:px-13 px-5 lg:pt-9 pt-7.5 lg:pb-13 pb-7.5 rounded-[20px] overflow-hidden relative after:absolute 
                            after:h-full after:w-full after:top-50 after:left-100 after:blur-[90px]  "
          >
            <div className=" lg:flex gap-11 items-center ">
              <h3 className="lg:text-[167px] text-[100px] text-red font-bold font-inter lg:leading-45.75 leading-25 ">
                25
              </h3>
              <h2 className=" lg:text-[48px] text-[26px] text-common font-bold font-rajdhani lg:leading-15.5 leading-9 ">
                Years Of experience
              </h2>
            </div>
            <p className="lg:text-base text-sm  text-common font-normal font-rubik leading-6.5 lg:mt-10 mt-3 ">
              Business consulting consultants provide expert advice and guida
              the a businesses to help theme their performance efficiency
            </p>
          </div>
        </div>
        {/* Left side  */}
        {/* Right side  */}
        <div className="lg:w-1/2 w-full">
          <div className="">
            <div className="lg:flex md:flex justify-between items-center gap-8">
              {/* =================> */}
              <div className="lg:w-1/2 w-full lg:mt-0 mt-8 ">
                <div className="py-9 bg-[#f4f4f4] rounded-[20px] border-b-3 border-r-3 border-red">
                  <h2 className="text-[48px] text-common font-bold font-inter leading-15.5 text-center">
                    20k+
                  </h2>
                  <p className="text-base text-[#5D6570] font-normal font-rubik leading-6.5 mt-1 text-center">
                    Our Project Complete
                  </p>
                </div>
              </div>
              {/* =================> */}
              <div className="lg:w-1/2 w-full lg:mt-0 mt-8 ">
                <div className="py-9 bg-[#f4f4f4] rounded-[20px] border-b-3 border-r-3 border-red">
                  <h2 className="text-[48px] text-common font-bold font-inter leading-15.5 text-center">
                    10k+
                  </h2>
                  <p className="text-base text-[#5D6570] font-normal font-rubik leading-6.5 mt-1 text-center">
                    Our Natural Products
                  </p>
                </div>
              </div>
              {/* =================> */}
            </div>
          </div>

          <div className="">
            <div className="lg:flex md:flex justify-between items-center gap-8 mt-8">
              {/* =================> */}
              <div className="lg:w-1/2 w-full lg:mt-0 mt-8 ">
                <div className="py-9 bg-[#f4f4f4] rounded-[20px] border-b-3 border-r-3 border-red">
                  <h2 className="text-[48px] text-common font-bold font-inter leading-15.5 text-center">
                    200+
                  </h2>
                  <p className="text-base text-[#5D6570] font-normal font-rubik leading-6.5 mt-1 text-center">
                    Clients Reviews
                  </p>
                </div>
              </div>
              {/* =================> */}
              <div className="lg:w-1/2 w-full lg:mt-0 mt-8 ">
                <div className="py-9 bg-[#f4f4f4] rounded-[20px] border-b-3 border-r-3 border-red">
                  <h2 className="text-[48px] text-common font-bold font-inter leading-15.5 text-center">
                    1,000+
                  </h2>
                  <p className="text-base text-[#5D6570] font-normal font-rubik leading-6.5 mt-1 text-center">
                    our Satisfied Clientd
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right side  */}
      </div>
    </section>
  );
};

export default ExperienceCounter;
