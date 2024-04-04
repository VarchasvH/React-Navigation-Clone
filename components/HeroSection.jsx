const HeroSection = () => {
  return (
    <section className="min-h-[55rem] md:h-[55rem] w-full bg-purple-bg">
        <h1 className="text-7xl grid place-items-center font-extrabold w-full pt-64 pr-10">React Navigation
        </h1>
        <p className="text-xl font-bold grid place-items-center p-7">Routing and navigation for Expo and React Native apps.</p>
        
      <div className="flex justify-center">
  <button class="whitespace-nowrap h-14 w-32 bg-transparent hover:bg-purple-600 text-slate-100 font-semibold hover:text-purple-950 py-2 px-6 mr-4 border border-white-600 hover:border-transparent rounded outline outline-4 hover:outline-purple-600">
    Read Docs
  </button>
  <button class="h-14 w-32 bg-slate-100 hover:bg-purple-600 text-purple-950 font-semibold hover:text-purple-950 py-2 px-6 ml-4 border border-slate-100 hover:border-transparent rounded outline outline-slate-100 outline-4 hover:outline-purple-600">
    Try it
  </button>
</div>




    </section>
  )
}

export default HeroSection