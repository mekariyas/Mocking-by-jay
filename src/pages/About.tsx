import City from "../assets/city.webp"

const About  = ()=>{
    return(
        <> 
          <section className="bg-black text-red w-full pt-2 flex flex-col items-center">
            <h1 className="w-full h-20 text-3xl font-bold text-red-600 text-center pt-6">About Us</h1>
            <p className="text-white md:w-[80%] text-lg text-wrap pl-2 pr-2 md:pl-0 md:pr-2 mb-8">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
               Sed rutrum sit amet urna blandit ornare. Morbi molestie aliquam libero a hendrerit. 
               Donec sagittis nisl vitae lorem eleifend gravida. Sed vehicula cursus nisi et ultrices. 
               Curabitur pellentesque ac diam vitae tristique. Duis pharetra iaculis consectetur. 
               In lacinia justo dui, feugiat malesuada justo aliquam at.
            </p>
          </section>
          <hr className="w-full h-1 bg-red-600" />
          <section className="bg-black text-red w-full pt-2 flex flex-col items-center">
            <h2 className="w-full md:w-[80%] h-20 text-3xl font-bold text-red-600 text-center md:text-left pt-6">Our principles</h2>
            <ul className="w-[80%] mt-2 flex justify-start gap-8 flex-wrap mb-10 pb-8">
              <li key={1} className="w-[90%] md:w-[45%]">
                <h3 className="text-red-600 text-xl text-center md:text-left font-semibold">Independence</h3>
                <p className="text-white text-lg text-wrap mt-4 pl-8 md:pl-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed rutrum sit amet urna blandit ornare. Morbi molestie aliquam libero a hendrerit. 
                  Donec sagittis nisl vitae lorem eleifend gravida. Sed vehicula cursus nisi et ultrices. 
                  Curabitur pellentesque ac diam vitae tristique. Duis pharetra iaculis consectetur. 
                  In lacinia justo dui, feugiat malesuada justo aliquam at.
                </p>
              </li>
              <li key={2} className="w-[90%] md:w-[45%]">
                <h3 className="text-red-600 text-xl text-center md:text-left font-semibold">Innovation</h3>
                <p className="text-white text-lg text-wrap mt-4 pl-8 md:pl-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed rutrum sit amet urna blandit ornare. Morbi molestie aliquam libero a hendrerit. 
                  Donec sagittis nisl vitae lorem eleifend gravida. Sed vehicula cursus nisi et ultrices. 
                  Curabitur pellentesque ac diam vitae tristique. Duis pharetra iaculis consectetur. 
                  In lacinia justo dui, feugiat malesuada justo aliquam at.
                </p>
              </li>
              <li key={3} className="w-[90%] md:w-[45%]">
                <h3 className="text-red-600 text-xl text-center md:text-left font-semibold">Community</h3>
                <p className="text-white text-lg text-wrap mt-4 pl-8 md:pl-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed rutrum sit amet urna blandit ornare. Morbi molestie aliquam libero a hendrerit. 
                  Donec sagittis nisl vitae lorem eleifend gravida. Sed vehicula cursus nisi et ultrices. 
                  Curabitur pellentesque ac diam vitae tristique. Duis pharetra iaculis consectetur. 
                  In lacinia justo dui, feugiat malesuada justo aliquam at.
                </p>
              </li>
              <li key={4} className="w-[90%] md:w-[45%]">
                <h3 className="text-red-600 text-xl text-center md:text-left font-semibold">Talent</h3>
                <p className="text-white text-lg text-wrap mt-4 pl-8 md:pl-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed rutrum sit amet urna blandit ornare. Morbi molestie aliquam libero a hendrerit. 
                  Donec sagittis nisl vitae lorem eleifend gravida. Sed vehicula cursus nisi et ultrices. 
                  Curabitur pellentesque ac diam vitae tristique. Duis pharetra iaculis consectetur. 
                  In lacinia justo dui, feugiat malesuada justo aliquam at.
                </p>
              </li>
            </ul>
          </section>
          <hr className="w-full h-1 bg-red-600" />
          <section className="bg-black text-red w-full pt-10 pb-10 flex  justify-around flex-wrap items-center">
            <section className="w-[90%] md:w-[45%] h-[60vh] flex justify-center items-center">
                <img src={City} alt="City-image" loading="lazy" className="w-[75%] h-[75%] rounded-md"/>
            </section>
            <section className="w-[90%] md:w-[45%] h-[60vh] flex flex-col items-center">
                <h3 className="w-full h-20 text-3xl font-bold text-red-600 text-center md:text-left pt-8 pb-2">Our Urban Community</h3>
                <p  className="text-white text-lg text-wrap">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed rutrum sit amet urna blandit ornare. Morbi molestie aliquam libero a hendrerit. 
                    Donec sagittis nisl vitae lorem eleifend gravida. Sed vehicula cursus nisi et ultrices. 
                    Curabitur pellentesque ac diam vitae tristique. Duis pharetra iaculis consectetur. 
                    In lacinia justo dui, feugiat malesuada justo aliquam at.
                </p>
            </section>
          </section>
        </>
)}


export default About