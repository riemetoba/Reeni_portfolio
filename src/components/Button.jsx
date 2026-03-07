const Button = ({btnText, className}) => {
  return (
    <button className={`py-3 px-10 bg-red text-[#ffffff] text-sm font-rubik rounded-[27px] font-bold border-2 hover:bg-transparent hover:text-red hover:border-2 duration-300 cursor-pointer ${className}`}>{btnText}</button>
  )
}

export default Button
