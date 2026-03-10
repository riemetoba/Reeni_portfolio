import Image from "../Image"


const Market = () => {
  return (
    <section>
        <div className="container lg:py-20 py-10">
            <div className="border border-[#9F9F9F] lg:mt-30.5 mt-15">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                        <Image className='border border-[#9F9F9F] w-full' />
                        <Image className='border border-[#9F9F9F] w-full' />
                        <Image className='border border-[#9F9F9F] w-full' />
                        <Image className='border border-[#9F9F9F] w-full' />
                    </div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                        <Image className='border border-[#9F9F9F] w-full' />
                        <Image className='border border-[#9F9F9F] w-full' />
                        <Image className='border border-[#9F9F9F] w-full' />
                        <Image className='border border-[#9F9F9F] w-full' />

                    </div>
                   </div>
        </div>
    </section>
  )
}

export default Market