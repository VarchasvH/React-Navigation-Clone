const FeatureSection = () => {
  return (
    <section className="h-[60rem] md:h-[50rem] w-full bg-gray-bg grid place-items-center md:grid-cols-2">
      {/* First Feature */}
      <div className="flex flex-col justify-center items-center mt-8 md:mt-0 md:w-1/2 ">
        <h1 className="text-2xl md:text-4xl font-extrabold md:text-left text-left mb-4  md:whitespace-normal md:pr-[170px] pr-72">Easy to Use</h1>
        <p className="text-slate-400 text-xl md:text-left text-left px-7 md:px-0">Start quickly with built-in navigators that deliver a seamless out-of-the-box experience.</p>
      </div>
      {/* Second Feature */}
      <div className="flex flex-col justify-center items-center mt-8 md:mt-0 md:w-1/2">
        <h1 className="text-2xl md:text-4xl font-extrabold md:text-left text-left mb-4 px-7 md:px-0 md:text-pretty">Components built for iOS and Android</h1>
        <p className="text-slate-400 text-xl md:text-left text-left px-7 md:px-0">Platform-specific look-and-feel with smooth animations and gestures.</p>
      </div>
      {/* Third Feature */}
      <div className="flex flex-col justify-center items-center mt-8 md:mt-0 md:w-1/2">
        <h1 className="text-2xl md:text-4xl font-extrabold md:text-left text-left mb-4 pr-[120px] md:whitespace-nowrap md:pl-44">Completely customizable</h1>
        <p className="text-slate-400 text-xl md:text-left text-left px-7 md:px-0">If you know how to write apps using JavaScript you can customize any part of React Navigation.</p>
      </div>
      {/* Fourth Feature */}
      <div className="flex flex-col justify-center items-center mt-8 md:mt-0 md:w-1/2">
        <h1 className="text-2xl md:text-4xl font-extrabold md:text-left text-left mb-4 md:pr-[30px] pr-[200px]">Extensible platform</h1>
        <p className="text-slate-400 text-xl md:text-left text-left px-7 md:px-0">React Navigation is extensible at every layer— you can write your own navigators or even replace the user-facing API.</p>
      </div>
    </section>
  );
};

export default FeatureSection;