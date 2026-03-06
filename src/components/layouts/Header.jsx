import Image from "../Image"
import logo from "/src/assets/logo.png"


const Header = () => {
  return (
    <div className="bg-[#F4F4F4] py-5">
        <div className="container flex items-center">
            <div className="">
              <Image src={logo}/>
            </div>
        </div>

    </div>
  )
}

export default Header