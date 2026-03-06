import Image from "../Image"
import logo from "/src/assets/logo.png"


const Header = () => {
  return (
    <div className="bg-[#F4F4F4] py-5">
        <div className="container flex items-center justify-between">
            <div className="">
              <Image src={logo}/>
            </div>
            <div className="">
              <ul className="flex items-center gap-x-5">
                <li className="font-rajdhani text-base font-bold text-common">Home</li>
                <li className="font-rajdhani text-base font-bold text-common">About</li>
                <li className="font-rajdhani text-base font-bold text-common">Services</li>
                <li className="font-rajdhani text-base font-bold text-common">Blog</li>
                <li className="font-rajdhani text-base font-bold text-common">Project</li>
                <li className="font-rajdhani text-base font-bold text-common">Contact</li>
              </ul>
            </div>
        </div>

    </div>
  )
}

export default Header
