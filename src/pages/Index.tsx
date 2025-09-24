import { useNavigate } from "react-router-dom"
import Hero from "../components/Hero"
import Artist1 from "../assets/artist.webp"
import Artist2 from "../assets/artist-2.webp"
import Artist3 from "../assets/artist-3.webp"


const Index = ()=>{
    const navigate = useNavigate()
    return(
        <>
            <Hero/>
            <section className="bg-black text-red w-full pt-2 flex flex-col items-center">
                <h1 className="w-full h-20 text-3xl font-bold text-red-600 text-center pt-6">Our Artists</h1>
                <ul className="w-full flex gap-2 flex flex-col items-center md:flex-row md:justify-around mb-10">
                    <li key={1} className="w-[60%] md:w-[30%] h-[55vh]">
                        <img src={Artist1} alt="artist-1" className="w-full h-[90%]"/>
                        <p className="bg-red-600 text-white text-center">Artist 1</p>
                    </li>
                    <li key={2} className="w-[60%] md:w-[30%] h-[55vh]">
                        <img src={Artist2} alt="artist-2" className="w-full h-[90%]"/>
                        <p className="bg-red-600 text-white text-center">Artist 2</p>
                    </li>
                    <li key={3} className="w-[60%] md:w-[30%] h-[55vh]">
                        <img src={Artist3} alt="artist-3" className="w-full h-[90%]"/>
                        <p className="bg-red-600 text-white text-center">Artist 3</p>
                    </li>
                </ul>
            </section>
            <hr className="w-full h-1 bg-red-600" />
            <section className="bg-black text-red w-full pt-2 flex flex-col items-center">
                <h1 className="w-full h-20 text-3xl font-bold text-red-600 text-center pt-6">Book A Session</h1>
                <p className="text-white md:w-[80%] text-lg text-wrap pl-2 pr-2 md:pl-0 md:pr-2 mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac vestibulum metus, in rhoncus augue. Vivamus dictum blandit erat, eget consequat erat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac vestibulum metus, in rhoncus augue. Vivamus dictum blandit erat, eget consequat erat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac vestibulum metus, in rhoncus augue. Vivamus dictum blandit erat, eget consequat erat.
                </p>
                <button className="cursor-pointer text-white border-red-600 border-[1px] rounded-md mb-8 w-40 h-16 font-bold translate-all duration-200 delay-50 ease-in-out hover:bg-red-600" onClick={()=>navigate("/contactUs")}>Book A Session</button>
            </section>
        </>
    )
}


export default Index