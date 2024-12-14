import React from "react";
import MainPage from "../components/MainPage";
import BackgroundVideo from "../components/BackgroundVideo";
import PopularSection from "../components/PopularSection";
import OurTeam from "../components/OurTeam";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";

const Home = () => {
  return (
    <>
      <MainPage />
      <PopularSection />
      <OurTeam />
      <Contact />
      <Footer />

      <a href="tel:+919874561230">
        <div className="animate-bounce rounded-full p-2 bg-white shadow-2xl border-2 bottom-28 right-2 fixed ">
          <IoIosCall size={25} />
        </div>
      </a>
      <a href="mailto:m.bluth@example.com?subject=Hello%20there&body=I%20hope%20you%20are%20doing%20well!" target="_blank">
        <div className="animate-bounce rounded-full p-2 bg-white shadow-2xl border-2 bottom-[60px] right-2 fixed ">
          <IoMdMail size={24} />
        </div>
      </a>
      <a href="#top">
        <div className="animate-bounce rounded-full bg-white shadow-2xl border-2 bottom-2 right-2 fixed ">
          <IoIosArrowUp size={40} />
        </div>
      </a>
    </>
  );
};

export default Home;
