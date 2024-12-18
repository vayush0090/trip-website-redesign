import React from "react";
import BackgroundVideo from "./BackgroundVideo";


const MainPage = () => {
  return (
    <>
      
      
        <div className="relative w-[80vw] h-[70vh] rounded-3xl mx-auto   ">
          <BackgroundVideo />
          <div className="bg-black w-[80vw] h-[70vh] opacity-10 rounded-3xl absolute top-0"></div>
          {/* <h1 className="lg:top-32 lg:text-4xl md:text-6xl text-xl w-[50vw] left-16 top-36 tracking-wider font-bold drop-shadow-2xl   text-white md:top-40 md:left-32 sm:text-3xl sm:top-36 absolute md:w-[39vw] md:leading-[75px] md:tracking-wide">Live your dream destinations.</h1> */}
          <h1 className="absolute  text-slate-900 bottom-48 left-5  w-[60vw] text-4xl drop-shadow-2xl font-bold tracking-wide lg:text-6xl ">
            Live your dream destinations.
          </h1>
          <p className="absolute text-slate-900 lg:text-3xl lg:font-semibold   text-[18px] bottom-24  left-5 drop-shadow-2xl tracking-wide  ">
            Your Experience Begins With Ours
          </p>
          {/* <p className="absolute bottom-40 sm:bottom-40 text-xl drop-shadow-2xl font-semibold md:tracking-wider md:text-2xl  text-white left-16 md:left-32 md:bottom-36">Your Experience Begins With Ours</p> */}
        </div>
      
      
    </>
  );
};

export default MainPage;
