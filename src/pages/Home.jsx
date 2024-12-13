import React from 'react'
import MainPage from '../components/MainPage'
import BackgroundVideo from '../components/BackgroundVideo'
import PopularSection from '../components/PopularSection'
import OurTeam from '../components/OurTeam'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { IoIosArrowUp } from "react-icons/io";

const Home = () => {
  return (
    <>
        <MainPage />
        <PopularSection />
        <OurTeam/>
        <Contact />
        <Footer />

        <a href="#top"><div className='animate-bounce rounded-full bg-white shadow-2xl border-2 bottom-2 right-2 fixed '>
          <IoIosArrowUp size={40} />

        </div></a>
        
    </>
  )
}

export default Home