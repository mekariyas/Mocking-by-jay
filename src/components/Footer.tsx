import { FaXTwitter,FaSoundcloud } from "react-icons/fa6";
import { FaInstagram,FaFacebookF } from "react-icons/fa";

const Footer  = ()=>{
    return(
    <footer className="w-full bg-gray-900 h-[30vh] pt-6 flex flex-col items-center">
        <h1 className="w-full text-3xl  text-center text-white font-bold">Our Socials</h1>
        <ul className="w-[80%] mt-6 flex justify-around">
             <li key={1}><FaXTwitter className="w-20 h-8 text-white"/></li>
             <li key={2}><FaInstagram className="w-20 h-8 text-white"/></li>
             <li key={3}><FaSoundcloud className="w-20 h-8 text-white"/></li>
             <li key={4}><FaFacebookF className="w-20 h-8  text-white"/></li>
        </ul>
        <p className="w-[80%] mt-6 text-white text-center md:text-xl">&copy; 2025 Mocking By Jay. All rights reserved. </p>
    </footer>)
}

export default Footer