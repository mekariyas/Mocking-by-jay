import { useNavigate} from "react-router-dom"
import { motion } from "motion/react"
import HeroImg from "../assets/hero.webp"

const Hero = () => {
  const navigate = useNavigate()
  return (
    <section className="w-full h-[87vh] relative">
      <section className="w-full h-full absolute pt-6 linear backdrop-grayscale backdrop-brightness-50 flex flex-col items-center overflow-hidden">
                <motion.h1 className="w-full h-20 text-4xl text-red-600 font-extrabold text-center" 
                initial={{scale:0, opacity: 0}} 
                whileInView={{scale: 1, opacity: 1}} 
                transition={{ease:"easeOut", duration:1, delay: 0.4}}>Mocking By Jay</motion.h1>
                <motion.p className="text-white w-[80%] md:w-[60%] mt-8 text-wrap text-xl font-semibold"
                initial={{x:200, opacity:0}} whileInView={{x: 0, opacity: 1}} transition={{ease:"easeOut", duration:2, delay: 0.75}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac vestibulum metus, in rhoncus augue. Vivamus dictum blandit erat, eget consequat erat. Nullam at dolor a justo vehicula viverra.
                </motion.p>
                <section className="w-[80%] md:w-[60%]  h-[20vh] flex justify-center  items-center gap-8 mt-10">
                  <motion.button 
                  className="w-[25%] h-[45%] text-white font-bold text-xl bg-red-600 rounded-md cursor-pointer transition transition-discrete duration-200 delay-100 ease-in-out hover:scale-125" 
                  onClick={()=>navigate("/bookArtist")}
                  initial={{scale:0 , opacity:0}} whileInView={{scale: 1, opacity:1}} transition={{ease: "easeOut", duration:2, delay:0.5}}>Book Artist</motion.button>
                  <motion.button 
                  className="w-[25%] h-[45%] text-white font-bold text-xl bg-black  rounded-md cursor-pointer transition transition-discrete duration-200 delay-100 ease-in-out hover:scale-125" 
                  onClick={()=>navigate("/about")}
                  initial={{scale:0, opacity: 0}} whileInView={{scale: 1, opacity: 1}} transition={{ease: "easeOut", duration:2, delay:0.65}}
                  >See More</motion.button>
                </section>
                
      </section>
        <img src={HeroImg} alt="Hero-image" className="w-full h-full" loading="lazy"/>
    </section>
  )
}

export default Hero