import { useNavigate} from "react-router-dom"

import HeroImg from "../assets/hero.webp"

const Hero = () => {
  const navigate = useNavigate()
  return (
    <section className="w-full h-[87vh] relative">
      <section className="w-full h-full absolute pt-6 linear backdrop-grayscale backdrop-brightness-50 flex flex-col items-center">
                <h1 className="w-full h-20 text-4xl text-red-600 font-extrabold text-center">Mocking By Jay</h1>
                <p className="text-white w-[80%] md:w-[60%] mt-8 text-wrap text-xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac vestibulum metus, in rhoncus augue. Vivamus dictum blandit erat, eget consequat erat. Nullam at dolor a justo vehicula viverra.</p>
                <section className="w-[80%] md:w-[60%]  h-[20vh] flex justify-center  items-center gap-6 mt-10">
                  <button className="w-[25%] h-[45%] text-white font-bold text-xl bg-red-600 rounded-md cursor-pointer" onClick={()=>navigate("/bookArtist")}>Book Artist</button>
                  <button className="w-[25%] h-[45%] text-white font-bold text-xl bg-black  rounded-md cursor-pointer" onClick={()=>navigate("/about")}>See More</button>
                </section>
                
      </section>
        <img src={HeroImg} alt="Hero-image" className="w-full h-full" loading="lazy" />
    </section>
  )
}

export default Hero