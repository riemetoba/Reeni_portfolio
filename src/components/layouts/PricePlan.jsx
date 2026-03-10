import Button from "../Button";
import Image from "../Image";
import redIcon from "/src/assets/redIcon.png";

const PricePlan = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title text */}
        <div className="text-center mb-20">
          <p className="text-red text-base font-rubik uppercase">
            My Price Plan
          </p>
          <h3 className="text-5xl text-common font-rajdhani leading-15 font-bold">
            Enhancing Collaboration <br /> between Remote
          </h3>
        </div>
        {/* Title text */}
        {/* cards start */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* 1 =======================> */}
          <div className="bg-[#F4F4F4] rounded-[14px] border-b-3 border-r-3 border-red p-8 shadow-sm">
            <p className="text-common font-rajdhani font-bold text-base mb-2">
              Starter
            </p>
            <h3 className="text-common font-rajdhani font-bold text-5xl mb-1">
              $ 5.00
            </h3>
            <p className="text-common font-rajdhani font-bold text-base mb-12">
              Per Month
            </p>

            <ul className="space-y-3 text-[#5D6570]">
              <li className="flex items-start gap-x-3">
                <Image src={redIcon} /> 5 Social Media Account
              </li>
              <li className="flex items-start gap-x-3">
                <Image src={redIcon} /> Free Platform Access
              </li>
              <li className="flex items-start gap-x-3">
                <Image src={redIcon} /> 24/7 Customer Support
              </li>
            </ul>

            <Button className={"mt-8"} btnText={"Get Started"} />
          </div>

          {/* 2 =======================> */}
          <div className="bg-[#F4F4F4] rounded-[14px] border-b-3 border-r-3 border-red p-8 shadow-sm scale-105 md:-mt-7 md:-mb-7">
            <p className="text-common font-rajdhani font-bold text-base mb-2">
              Basic
            </p>
            <h3 className="text-common font-rajdhani font-bold text-5xl mb-1">
              $ 230.00
            </h3>
            <p className="text-common font-rajdhani font-bold text-base mb-12">
              Per Month
            </p>

            <ul className="space-y-3 text-[#5D6570]">
              <li className="flex items-start gap-x-3">
                <Image src={redIcon} /> 5 Social Media Account
              </li>
              <li className="flex items-start gap-x-3">
                <Image src={redIcon} /> Free Platform Access
              </li>
              <li className="flex items-start gap-x-3">
                <Image src={redIcon} /> Marketing Platform
              </li>
              <li className="flex items-start gap-x-3">
                <Image src={redIcon} /> 24/7 Customer Support
              </li>
              <li className="flex items-start gap-x-3">
                <Image src={redIcon} /> Life time support
              </li>
            </ul>

            <Button className={"mt-8"} btnText={"Get Started"} />
          </div>

          {/* 3 =======================> */}
          <div className="bg-[#F4F4F4] rounded-[14px] border-b-3 border-r-3 border-red p-8 shadow-sm">
            <p className="text-common font-rajdhani font-bold text-base mb-2">
              Premium
            </p>
            <h3 className="text-common font-rajdhani font-bold text-5xl mb-1">
              $ 45.00
            </h3>
            <p className="text-common font-rajdhani font-bold text-base mb-12">
              Per Month
            </p>

            <ul className="space-y-3 text-[#5D6570]">
              <li className="flex items-start gap-x-3">
                <Image src={redIcon} /> 5 Social Media Account
              </li>
              <li className="flex items-start gap-x-3">
                <Image src={redIcon} /> Free Platform Access
              </li>
              <li className="flex items-start gap-x-3">
                <Image src={redIcon} /> 24/7 Customer Support
              </li>
            </ul>

            <Button className={"mt-8"} btnText={"Get Started"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricePlan;
