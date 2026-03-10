import Button from "../Button";
import Image from "../Image";
import redIcon from "/src/assets/redIcon.png"

const PricePlan = () => {
  return (
    <section>
      <div className="container lg:py-20 py-10">
        {/* Title text part start */}
        <div className="pb-25">
          <h4 className="text-base text-red font-medium  font-rubik  text-center uppercase">
            My Price plan
          </h4>
          <h3 className="lg:text-5xl md:text-[32px] text-[22px] text-common font-bold font-rajdhani text-center lg:leading-15 lg:w-121 w-full mx-auto">
            Enhancing Collaboration between Remote
          </h3>
        </div>
        {/* Title text part end */}
        {/* Content start  */}
        <div className="flex justify-between items-center">
          {/* =====================> */}
          <div className="bg-[#F4F4F4] w-100 p-7 rounded-[15px] border-b-3 border-r-3 border-red">
            <p className="font-rajdhani font-bold text-lg text-common">Starter</p>
            <h5 className="font-rajdhani font-bold text-[48px] text-common">$ 5.00</h5>
            <p className="font-rajdhani font-bold text-lg text-common pb-13">Per Month</p>
            <div className="flex items-center gap-x-3 pb-4">
              <div className="">
                <Image src={redIcon}/>
              </div>
              <div className="">
                <p className="text-[#5D6570] font-rubik text-base">5 Social Media Account</p>
              </div>
            </div>
            <div className="flex items-center gap-x-3 pb-4">
              <div className="">
                <Image src={redIcon}/>
              </div>
              <div className="">
                <p className="text-[#5D6570] font-rubik text-base">Free Platform Access</p>
              </div>
            </div>
            <div className="flex items-center gap-x-3 pb-8">
              <div className="">
                <Image src={redIcon}/>
              </div>
              <div className="">
                <p className="text-[#5D6570] font-rubik text-base">24/7 Customer Support</p>
              </div>
            </div>
            <Button btnText={"Get Started"}/>
          </div>
          {/* ========================> */}
          <div className="hover:scale-y-125 duration-300 bg-[#F4F4F4] w-100 p-7 rounded-[15px] border-b-3 border-r-3 border-red">
            <p className="font-rajdhani font-bold text-lg text-common">Starter</p>
            <h5 className="font-rajdhani font-bold text-[48px] text-common">$ 5.00</h5>
            <p className="font-rajdhani font-bold text-lg text-common pb-13">Per Month</p>
            <div className="flex items-center gap-x-3 pb-4">
              <div className="">
                <Image src={redIcon}/>
              </div>
              <div className="">
                <p className="text-[#5D6570] font-rubik text-base">5 Social Media Account</p>
              </div>
            </div>
            <div className="flex items-center gap-x-3 pb-4">
              <div className="">
                <Image src={redIcon}/>
              </div>
              <div className="">
                <p className="text-[#5D6570] font-rubik text-base">Free Platform Access</p>
              </div>
            </div>
            <div className="flex items-center gap-x-3 pb-8">
              <div className="">
                <Image src={redIcon}/>
              </div>
              <div className="">
                <p className="text-[#5D6570] font-rubik text-base">24/7 Customer Support</p>
              </div>
            </div>
            <Button btnText={"Get Started"}/>
          </div>
          {/* ========================> */}
          <div className="bg-[#F4F4F4] w-100 p-7 rounded-[15px] border-b-3 border-r-3 border-red">
            <p className="font-rajdhani font-bold text-lg text-common">Starter</p>
            <h5 className="font-rajdhani font-bold text-[48px] text-common">$ 5.00</h5>
            <p className="font-rajdhani font-bold text-lg text-common pb-13">Per Month</p>
            <div className="flex items-center gap-x-3 pb-4">
              <div className="">
                <Image src={redIcon}/>
              </div>
              <div className="">
                <p className="text-[#5D6570] font-rubik text-base">5 Social Media Account</p>
              </div>
            </div>
            <div className="flex items-center gap-x-3 pb-4">
              <div className="">
                <Image src={redIcon}/>
              </div>
              <div className="">
                <p className="text-[#5D6570] font-rubik text-base">Free Platform Access</p>
              </div>
            </div>
            <div className="flex items-center gap-x-3 pb-8">
              <div className="">
                <Image src={redIcon}/>
              </div>
              <div className="">
                <p className="text-[#5D6570] font-rubik text-base">24/7 Customer Support</p>
              </div>
            </div>
            <Button btnText={"Get Started"}/>
          </div>
          {/* ========================> */}
        </div>
        {/* Content end  */}
      </div>
    </section>
  );
};

export default PricePlan;
