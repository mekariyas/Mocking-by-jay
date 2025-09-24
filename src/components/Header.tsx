import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link, NavLink } from "react-router-dom"
import Logo from "../assets/logo.jpg"
const Header = ()=>{
    const navigate = useNavigate()
    const [isVisible, setIsVisible] = useState<boolean>(false)
    return(
    <header className="w-full h-20 sticky top-0 z-[10] bg-black text-red-600 flex  items-center justify-between">
        <Link to="/" className="w-14 h-12 border-white flex justify-center items-center">
            <img src={Logo} alt="logo" className="w-full h-full rounded-md ml-2 object-fit-cover"/>
        </Link>
        <button className="w-12 h-12 md:hidden border-white border-[1px] flex flex-col  justify-around items-center rounded-md cursor-pointer mr-2" onClick={()=>setIsVisible(!isVisible)}>
            <section className={`w-[95%] h-[2px] bg-white relative z-[2] translate-all ease-in-out duration-100 ${isVisible? "rotate-45 mt-[18.5px]": ""}`}></section>
            <section className={`w-[95%] h-[2px] bg-white translate-all ease-in-out duration-100 ${isVisible? "hidden": ""}`}></section>
            <section className={`w-[95%] h-[2px] bg-white relative z-[4] translate-all ease-in-out duration-100 ${isVisible? "-rotate-45 mb-6": ""}`}></section>
        </button>
        <nav className={`${isVisible? "flex flex-col bg-black":"hidden"}  absolute top-20 md:static w-full h-[20vh]  md:w-[55%] md:mr-2 md:h-12 md:flex  md:flex-row md:justify-around`}>
            <NavLink to="/" className={({ isActive }: { isActive: boolean }) =>`${isActive ? "border-b-[1px] border-b-red-600" : ""} md:w-24 md:text-lg pt-3 text-center`}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }: { isActive: boolean }) =>`${isActive ? "border-b-[1px] border-b-red-600" : ""} md:w-24 md:text-lg pt-3 text-center`}>About</NavLink>
            <NavLink to="/contactUs" className={({ isActive }: { isActive: boolean }) =>`${isActive ? "border-b-[1px] border-b-red-600" : ""} md:w-24 md:text-lg pt-3 text-center`}>Contact-Us</NavLink>
            <button className="md:w-40 md:h-full  bg-red-600 text-white cursor-pointer font-semibold md:rounded-md mt-1 md:mt-0" onClick={()=>navigate("/bookArtist")}> Book Artist</button>
        </nav>
    </header>)
}

export default Header