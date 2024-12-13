import React from "react";
import PopularSectionCard from "./PopularSectionCard";

const PopularSection = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center mt-28 gap-y-4 mx-auto">
        <h1 id="destination" className="text-4xl font-bold">Popular Destinations</h1>
        <p className="text-gray-700 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis!
        </p>
        <p className="font-semibold text-xl">All Destination</p>
      </div>

      <div className="mt-28 grid w-[70%] gap-y-6 sm:grid sm:grid-cols-1 sm:w-[50vw] sm:gap-y-5   md:grid md:grid-cols-2 md:w-[72vw]  md:gap-6  lg:grid lg:grid-cols-2 lg:gap-6 lg:w-[72vw] m-auto  ">
        {/* <PopularSectionCard />
            <PopularSectionCard/>
            <PopularSectionCard/>
            <PopularSectionCard/>
            <PopularSectionCard/>
            <PopularSectionCard/> */}
        <div className="bg-red-500 rounded-3xl w-[70vw] h-[50vh] sm:w-[50vw] sm:h-[50vh] md:w-[35vw] md:h-[50vh] overflow-hidden shadow-2xl">
          <img
            src="https://images.pexels.com/photos/12446112/pexels-photo-12446112.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="w-full hover:scale-150 object-cover h-[100%]   transition-all ease-in duration-500 cursor-grab"
            alt=""
          />
        </div>
        <div className="bg-red-500 rounded-3xl w-[70vw] h-[50vh] sm:w-[50vw] sm:h-[50vh] md:w-[35vw] md:h-[50vh] overflow-hidden shadow-2xl">
          <img
            src="https://images.pexels.com/photos/28749616/pexels-photo-28749616/free-photo-of-taj-mahal-in-agra-on-a-sunny-day.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full hover:scale-150 object-cover h-[100%]   transition-all ease-in duration-500 cursor-grab"
            alt=""
          />
        </div>
        <div className="bg-red-500 rounded-3xl w-[70vw] h-[50vh] sm:w-[50vw] sm:h-[50vh] md:w-[35vw] md:h-[50vh] overflow-hidden shadow-2xl">
          <img
            src="https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="w-full hover:scale-150 object-cover h-[100%]   transition-all ease-in duration-500 cursor-grab"
            alt=""
          />
        </div>
        <div className="bg-red-500 rounded-3xl w-[70vw] h-[50vh] sm:w-[50vw] sm:h-[50vh] md:w-[35vw] md:h-[50vh] overflow-hidden shadow-2xl">
          <img
            src="https://images.pexels.com/photos/16952108/pexels-photo-16952108/free-photo-of-india-gate-silhouette-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="w-full hover:scale-150 object-cover h-[100%]   transition-all ease-in duration-500 cursor-grab"
            alt=""
          />
        </div>
        <div className="bg-red-500 rounded-3xl w-[70vw] h-[50vh] sm:w-[50vw] sm:h-[50vh] md:w-[35vw] md:h-[50vh] overflow-hidden shadow-2xl">
          <img
            src="https://images.pexels.com/photos/2063892/pexels-photo-2063892.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="w-full hover:scale-150 object-cover h-[100%]   transition-all ease-in duration-500 cursor-grab"
            alt=""
          />
        </div>
        <div className="bg-red-500 rounded-3xl w-[70vw] h-[50vh] sm:w-[50vw] sm:h-[50vh] md:w-[35vw] md:h-[50vh] overflow-hidden shadow-2xl">
          <img
            src="https://images.pexels.com/photos/13238814/pexels-photo-13238814.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="w-full hover:scale-150 object-cover h-[100%]   transition-all ease-in duration-500 cursor-grab"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default PopularSection;
