import Image from "../Image"
import linear from "/src/assets/linear.png"
import framer from "/src/assets/framer.png"
import notion from "/src/assets/notion.png"
import slack from "/src/assets/slack.png"
import upwork from "/src/assets/upwork.png"
import medium from "/src/assets/medium.png"
import amazon from "/src/assets/amazon.png"
import asana from "/src/assets/asana.png"


const Market = () => {
  return (
    <section>
        <div className="container lg:pb-20 pb-10">
            <div className="border-l-3 border-t-3 border-common/9 lg:mt-30.5 mt-15">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                          <Image src={linear} />
                          <Image src={framer} />
                          <Image src={notion} />
                          <Image src={slack} />
                    </div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                        <Image src={medium} />
                          <Image src={upwork} />
                          <Image src={amazon} />
                          <Image src={asana} />

                    </div>
                   </div>
        </div>
    </section>
  )
}

export default Market



// border 