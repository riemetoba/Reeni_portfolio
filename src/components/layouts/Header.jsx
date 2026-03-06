import Image from "../Image"
import logo from "/src/assets/logo.png"


const Header = () => {
  return (
    <div className="bg-[#F4F4F4] py-5">
        <div className="container flex items-center">
            <div className="">
              <Image src={logo}/>
            </div>
            <div className="">
              <ul className="flex items-center gap-x-5">
                <li className="font-rajdhani text-base font-bold text-common">Home</li>
              </ul>
            </div>
        </div>

    </div>
  )
}

export default Header
// Home
// About
// Services 
// Blog 
// Project 
// Contact