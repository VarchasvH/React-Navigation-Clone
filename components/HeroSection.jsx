const HeroSection = () => {
  return (
    <section className="min-h-[55rem] md:h-[55rem] w-full bg-purple-bg">
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-6xl md:text-7xl text-center font-extrabold mt-32 md:mt-10 md:mb-6 ">React Navigation</h1>
        <p className="text-lg md:text-2xl text-center font-bold md:mb-10 mt-6 w-[26rem] md:w-[44rem] pb-6 md:mt-4">This project is for educational purposes only. No affiliation with React Navigation or its creators is implied.</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-3">
          <button className="whitespace-nowrap h-14 w-40 bg-transparent hover:bg-purple-600 text-slate-100 font-semibold hover:text-purple-950 py-2 px-6 mb-4 md:mb-0 md:mr-4 border border-white-600 hover:border-transparent rounded outline outline-4 hover:outline-purple-600">
            Read Docs
          </button>
          <button className="whitespace-nowrap h-14 w-40 bg-slate-100 hover:bg-purple-600 text-purple-950 font-semibold hover:text-purple-950 py-2 px-6 border border-slate-100 hover:border-transparent rounded outline outline-slate-100 outline-4 hover:outline-purple-600">
            Try it
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;
