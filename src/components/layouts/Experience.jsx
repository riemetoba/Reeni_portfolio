import Image from "../Image"
import webD from "/src/assets/webD.png"
import uiux from "/src/assets/uiux.png"
import wRsr from "/src/assets/wRsr.png"
import marketing from "/src/assets/marketing.png"


const Experience = () => {
  return (
    <section className='pt-22.5'>
                <div className="container">
                    <div className="flex items-center justify-between gap-7.5">
                        <div className="w-1/4">
                            <div className="py-10.25 border border-common/5 rounded-[10px]">
                                <div className="flex justify-center">
                                    <Image src={webD} alt="" />
                                </div>
                                <div className="">
                                    <h3 className='text-2xl text-common font-bold font-rajdhani leading-8.5 text-center mt-7.5'>Web Design</h3>
                                    <h4 className='text-base text-[#5D6570] font-rubik text-center mt-2.5'>120 Projects</h4>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/4">
                            <div className="py-10.25 border border-common/5 rounded-[10px]">
                                <div className="flex justify-center">
                                    <Image src={uiux} alt="" />
                                </div>
                                <div className="">
                                    <h3 className='text-2xl text-common font-bold font-rajdhani leading-8.5 text-center mt-7.5'>Ui/Ux Design</h3>
                                    <h4 className='text-base text-[#5D6570]  font-rubik text-center mt-2.5'>241 Projects</h4>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/4">
                            <div className="py-10.25 border border-common/5 rounded-[10px]">
                                <div className="flex justify-center">
                                    <Image src={wRsr} alt="" />
                                </div>
                                <div className="">
                                    <h3 className='text-2xl text-common font-bold font-rajdhani leading-8.5 text-center mt-7.5'>Web Research</h3>
                                    <h4 className='text-base text-[#5D6570] font-rubik text-center mt-2.5'>240 Projects</h4>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/4">
                            <div className="py-10.25 border border-common/5 rounded-[10px]">
                                <div className="flex justify-center">
                                    <Image src={marketing} alt="" />
                                </div>
                                <div className="">
                                    <h3 className='text-2xl text-common font-bold font-rajdhani leading-8.5 text-center mt-7.5'>Marketing</h3>
                                    <h4 className='text-base text-[#5D6570] font-rubik text-center mt-2.5'>331 Projects</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Experience