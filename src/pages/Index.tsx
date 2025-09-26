import { useNavigate } from "react-router-dom"
import { motion } from "motion/react"
import Hero from "../components/Hero"
import Artist1 from "../assets/artist.webp"
import Artist2 from "../assets/artist-2.webp"
import Artist3 from "../assets/artist-3.webp"


const Index = ()=>{
    const navigate = useNavigate()
    return(
        <>
            <Hero/>
            <section className="bg-black text-red w-full pt-2 flex flex-col items-center overflow-hidden">
                <motion.h1 
                className="w-full h-20 text-3xl font-bold text-red-600 text-center pt-6"
                initial={{x:-1000 ,opacity:0}} whileInView={{x:0, opacity:1}} transition={{ease:"easeOut",duration:2, delay:0.85}}>Our Artists</motion.h1>
                <ul className="w-full gap-2 flex flex-col items-center md:flex-row md:justify-around mb-10">
                    <motion.li key={1} 
                    className="w-[60%] md:w-[30%] h-[55vh]"
                    initial={{opacity: 0}}
                    whileInView={{opacity:1}}
                    transition={{ease:"easeOut", delay:0.5, duration:2}}>
                        <motion.img src={Artist1} alt="artist-1" 
                        className="w-full h-[90%]"
                        initial={{opacity:0}}
                        animate={{opacity:1}}/>
                        <p className="bg-red-600 text-white text-center">Artist 1</p>
                    </motion.li>
                    <motion.li key={2} 
                    className="w-[60%] md:w-[30%] h-[55vh]"
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{ease: "easeOut", delay:0.75, duration:2}}>
                        <motion.img src={Artist2} alt="artist-2" className="w-full h-[90%]"/>
                        <p className="bg-red-600 text-white text-center">Artist 2</p>
                    </motion.li>
                    <motion.li key={3} 
                    className="w-[60%] md:w-[30%] h-[55vh]"
                    initial={{opacity: 0}}
                    whileInView={{opacity:1}}
                    transition={{ease:"easeOut", delay:1, duration:2}}>
                        <motion.img src={Artist3} alt="artist-3" 
                        className="w-full h-[90%]"
                        initial={{opacity:0}}
                        animate={{opacity:1}}/>
                        <p className="bg-red-600 text-white text-center">Artist 3</p>
                    </motion.li>
                </ul>
            </section>
            <hr className="w-full h-1 bg-red-600" />
            <section className="bg-black text-red w-full pt-2 flex flex-col items-center overflow-hidden">
                <motion.h1 
                initial={{x:-1000 ,opacity:0}} whileInView={{x:0, opacity:1}} transition={{ease:"easeOut",duration:1, delay:0.5}}
                className="w-full h-20 text-3xl font-bold text-red-600 text-center pt-6">Book A Session</motion.h1>
                <motion.p 
                initial={{x:200, opacity:0}} whileInView={{x: 0, opacity: 1}} transition={{ease:"easeOut", duration:2, delay: 0.75}} 
                className="text-white md:w-[80%] text-lg text-wrap pl-2 pr-2 md:pl-0 md:pr-2 mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac vestibulum metus, in rhoncus augue. Vivamus dictum blandit erat, eget consequat erat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac vestibulum metus, in rhoncus augue. Vivamus dictum blandit erat, eget consequat erat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac vestibulum metus, in rhoncus augue. Vivamus dictum blandit erat, eget consequat erat.
                </motion.p>
                <motion.button 
                initial={{scale:0, opacity:0}}
                whileInView={{scale: 1, opacity: 1}} 
                transition={{ease:"easeOut", duration:2, delay: 0.5}}
                className="cursor-pointer text-white border-red-600 border-[1px]  rounded-md mb-8 w-40 h-16 font-bold transition transition-discrete duration-200 delay-100 ease-in-out hover:scale-125 hover:bg-red-600" 
                onClick={()=>navigate("/contactUs")}>Book A Session</motion.button>
            </section>
        </>
    )
}


export default Index