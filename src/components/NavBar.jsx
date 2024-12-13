import React, { useState } from 'react'
import { use } from 'react';
import { MdMenu } from "react-icons/md";

const NavBar = () => {

    const [isMenuopen,setIsMenuOpen] = useState(false)

    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuopen)
    }

    console.log(isMenuopen);
    
  return (
    <>
        <div className='bg-white py-5 shadow-lg px-16 sticky top-0 z-20'>
            <nav className='flex justify-between items-center'>
                <div className='left-side'>
                    <a href="#"><h1 className='text-4xl font-bold'>Travel</h1></a>
                </div>
                
                <div className='right-side'>
                    <ul className='hidden md:flex   space-x-6 font-semibold'>
                        <a href="#"><li>Home</li></a>
                        <a href="#destination"><li>Destination</li></a>
                        <a href="#about"><li>About Us</li></a>
                        <a href="#team"><li>Our Team</li></a>
                        <a href="#contact"><li>Contact Us</li></a>
                    </ul>
                </div>
                <div onClick={toggleMenu} className='md:hidden'>
                        <MdMenu size={35}/>
                </div>
            </nav>
            {/* Mobile nav */}
            {
                    isMenuopen?<ul className='flex text-center gap-y-2 pt-5 flex-col md:hidden   font-semibold'>
                    <a href="#"><li>Home</li></a>
                        <a href="#destination"><li>Destination</li></a>
                        <a href="#about"><li>About Us</li></a>
                        <a href="#team"><li>Our Team</li></a>
                        <a href="#contact"><li>Contact Us</li></a>
                </ul>:""
            }
        </div>
    </>
  )
}

export default NavBar