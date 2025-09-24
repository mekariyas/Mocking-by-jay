const Contact  = () => {
    return(
        <>
          <section className="w-full h-[89vh] bg-black flex justify-center items-center">
            <h1 className="w-full h-20 text-4xl text-red-600 font-extrabold text-center">Book a Session</h1>
          </section>
          <hr className="w-full h-1 bg-red-600" />
          <section className="w-full bg-black flex justify-center items-center pt-8 pb-8">
            <form className="w-full md:w-[45%] md:border-2 md:border-red-600 md:rounded-md flex flex-col gap-3 pl-2 pr-2">
                <label className="text-white text-lg md:text-xl font-semibold pl-2">Fullname:</label>
                <input type="text" className="border-red-600 border-[1px] w-[80%] ml-18 rounded-md text-lg md:text-xl pl-2 pt-2 pb-2 text-white outline-none"/>
                <label className="text-white text-lg md:text-xl font-semibold pl-2">Email:</label>
                <input type="email" className="border-red-600 border-[1px] w-[80%] ml-18 rounded-md text-lg md:text-xl pl-2 pt-2 pb-2 text-white outline-none"/>
                <label className="text-white text-lg md:text-xl font-semibold pl-2">Phone:</label>
                <input type="tel" className="border-red-600 border-[1px] w-[80%] ml-18 rounded-md text-lg md:text-xl pl-2 pt-2 pb-2 text-white outline-none"/>
                <label className="text-white text-lg md:text-xl font-semibold pl-2">Date/time:</label>
                <input type="datetime-local" className="border-red-600 border-[1px] w-[80%] ml-18 rounded-md text-lg md:text-xl pl-2 pt-2 pb-2 text-white outline-none"/>
                <label className="text-white text-lg md:text-xl font-semibold pl-2">Session type:</label>
                <select className="border-red-600 border-[1px] w-[80%] ml-18 rounded-md text-lg md:text-xl pl-2 pt-2 pb-2 text-white outline-none">
                    <option className="bg-black text-white">Music Recording</option>
                    <option className="bg-black text-white">Mixing</option>
                    <option className="bg-black text-white">Collaboration</option>
                </select>
                <label className="text-white text-lg md:text-xl font-semibold pl-2">Message/special request:</label>
                <textarea className="resize-none border-red-600 border-[1px] w-[80%] ml-18 rounded-md text-lg md:text-xl pl-2 pt-2 pb-2 text-white outline-none"/>
                <input type="submit" className="bg-red-600 text-white mb-2 h-12 rounded-md"/>
            </form>
          </section>
        </>
    )
}

export default Contact