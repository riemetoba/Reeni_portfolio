import Image from "../Image";
import linear from "/src/assets/linear.png";
import framer from "/src/assets/framer.png";
import notion from "/src/assets/notion.png";
import slack from "/src/assets/slack.png";
import upwork from "/src/assets/upwork.png";
import medium from "/src/assets/medium.png";
import amazon from "/src/assets/amazon.png";
import asana from "/src/assets/asana.png";

const Market = () => {
  return (
    <section>
      <div className="container lg:pb-20 pb-10">
        <div className="border border-[#D9DDE0] lg:mt-30.5 mt-15">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
            <Image
              className="border border-[#D9DDE0] w-full"
              src={linear}
              alt=""
            />
            <Image
              className="border border-[#D9DDE0] w-full"
              src={framer}
              alt=""
            />
            <Image
              className="border border-[#D9DDE0] w-full"
              src={notion}
              alt=""
            />
            <Image
              className="border border-[#D9DDE0] w-full"
              src={slack}
              alt=""
            />
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
            <Image
              className="border border-[#D9DDE0] w-full"
              src={medium}
              alt=""
            />
            <Image
              className="border border-[#D9DDE0] w-full"
              src={upwork}
              alt=""
            />
            <Image
              className="border border-[#D9DDE0] w-full"
              src={amazon}
              alt=""
            />
            <Image
              className="border border-[#D9DDE0] w-full"
              src={asana}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Market;


