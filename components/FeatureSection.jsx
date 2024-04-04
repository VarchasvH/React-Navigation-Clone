const FeatureSection = () => {
  return (
    <section className="h-auto md:h-[50rem] w-full bg-gray-bg grid place-items- md:place-items-center grid-cols-1 md:grid-cols-2 gap-2">
      
        <div className="flex flex-col gap-4 mt-40 ">
              <h1 className="text-3xl flex justify-context align-items ml-48 font-extrabold">Easy to Use</h1>
              <p className="text-slate-300 text-xl grid col-span-1 text-pretty ml-48">Start quickly with built-in navigators that deliver a seamless out-of-the-box experience.
        </p>
        </div>
        <div className="flex flex-col gap-4 mt-44 ">
              <h1 className="text-3xl flex justify-context align-items mx-36 font-extrabold">Components built for iOS and Android</h1>
              <p className="text-slate-300 text-xl grid col-span-1 text-wrap mx-36">Platform-specific look-and-feel with smooth animations and gestures.
        </p>
        </div>
        <div className="flex flex-col gap-4">
              <h1 className="text-3xl flex justify-context align-items ml-48 font-extrabold">Completely customizable</h1>
              <p className="text-slate-300 text-xl grid col-span-1 text-wrap ml-48">If you know how to write apps using JavaScript you can customize any part of React Navigation.
        </p>
        </div>
        <div className="flex flex-col gap-4">
              <h1 className="text-3xl flex justify-context align-items mx-36 font-extrabold">Extensible platform</h1>
              <p className="text-slate-300 text-xl grid col-span-1 text-pretty mx-36">React Navigation is extensible at every layer— you can write your own navigators or even replace the user-facing API.
        </p>
        </div>

      
        
        
    </section>
  )
}

export default FeatureSection