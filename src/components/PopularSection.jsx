import React from "react";
import PopularSectionCard from "./PopularSectionCard";


const PopularSection = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center mt-28 gap-y-4 mx-5">
        <h1 id="destination" className="text-4xl font-bold">Popular Destinations</h1>
        <p className="text-gray-700 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis!
        </p>
        <p className="font-semibold text-xl">All Destination</p>
      </div>

      <div className="mt-11 grid w-[70%] gap-y-6 sm:grid sm:grid-cols-1 sm:w-[50vw] sm:gap-y-5   md:grid md:grid-cols-2 md:w-[72vw]  md:gap-6  lg:grid lg:grid-cols-2 lg:gap-6 lg:w-[72vw] m-auto  ">
        {/* <PopularSectionCard />
            <PopularSectionCard/>
            <PopularSectionCard/>
            <PopularSectionCard/>
            <PopularSectionCard/>
            <PopularSectionCard/> */}
        <div className="bg-red-500 rounded-3xl w-[70vw] h-[40vh] sm:w-[50vw] sm:h-[50vh] md:w-[35vw] md:h-[50vh] overflow-hidden shadow-2xl" >
          <img
            src="https://images.unsplash.com/photo-1732639840730-a3cdf066a9e6?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full hover:scale-150 object-cover h-[100%]   transition-all ease-in duration-500 cursor-grab"
            alt=""
          />
        </div>
        <div className="bg-red-500 rounded-3xl w-[70vw] h-[40vh] sm:w-[50vw] sm:h-[50vh] md:w-[35vw] md:h-[50vh] overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1645980901327-14dcec2543f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full hover:scale-150 object-cover h-[100%]   transition-all ease-in duration-500 cursor-grab"
            alt=""
          />
        </div>
        <div className="bg-red-500 rounded-3xl w-[70vw] h-[40vh] sm:w-[50vw] sm:h-[50vh] md:w-[35vw] md:h-[50vh] overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full hover:scale-150 object-cover h-[100%]   transition-all ease-in duration-500 cursor-grab"
            alt=""
          />
        </div>
        <div className="bg-red-500 rounded-3xl w-[70vw] h-[40vh] sm:w-[50vw] sm:h-[50vh] md:w-[35vw] md:h-[50vh] overflow-hidden shadow-2xl">
          <img
            src="https://plus.unsplash.com/premium_photo-1682091942392-bc2842010e75?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full hover:scale-150 object-cover h-[100%]   transition-all ease-in duration-500 cursor-grab"
            alt=""
          />
        </div>
        <div className="bg-red-500 rounded-3xl w-[70vw] h-[40vh] sm:w-[50vw] sm:h-[50vh] md:w-[35vw] md:h-[50vh] overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1456334694595-f251aa3e1cd0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full hover:scale-150 object-cover h-[100%]   transition-all ease-in duration-500 cursor-grab"
            alt=""
          />
        </div>
        <div className="bg-red-500 rounded-3xl w-[70vw] h-[40vh] sm:w-[50vw] sm:h-[50vh] md:w-[35vw] md:h-[50vh] overflow-hidden shadow-2xl">
          <img
            src="https://plus.unsplash.com/premium_photo-1673697239984-b089baf7b6e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full hover:scale-150 object-cover h-[100%]   transition-all ease-in duration-500 cursor-grab"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default PopularSection;

























