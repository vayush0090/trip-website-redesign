import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
        <div id='about' className='mt-14 bg-slate-900 flex flex-col md:flex-row lg:flex-row md:flex md:justify-around md:items-center lg:flex lg:justify-around lg:items-center py-20'>
            {/* leftside */}
            <div className='md:flex md:flex-col flex flex-col justify-center items-center text-center  pb-6 md:pb-0    space-y-7'>
                <div>
                    <h1 className='lg:text-3xl text-white font-semibold'>Travel Agency</h1>
                </div>
                <div>
                    <p className='text-gray-500 text-sm md:w-[30vw]  '>Making the world a better place through constructing elegant hierarchies.</p>
                </div>
                <div className='flex gap-x-4'>
                    <FaFacebook size={30} className='text-white'/>
                    <FaInstagram size={30} className='text-white'/>
                    <FaXTwitter size={30} className='text-white'/>
                    <FaYoutube size={30} className='text-white'/>
                </div>
            </div>
            {/* rightside */}
            <div className='px-2'>
                <div className='flex justify-evenly space-x-16'>
                    <div className='space-y-5 text-left'>
                        <div className='text-white lg:text-xl font-semibold'>Destination</div>
                        <div className='text-white text-sm space-y-2'>
                            <div>Eygpt</div>
                            <div>Turkey</div>
                            <div>USA</div>
                            <div>France</div>
                        </div>
                    </div>
                    <div className='space-y-5 text-left'>
                        <div className='text-white lg:text-xl font-semibold'>Useful Links</div>
                        <div className='text-white text-sm space-y-2'>
                            <div>About Us</div>
                            <div>Travel Blog</div>
                            <div>Be Our Partner</div>
                            <div>F.A.Q</div>
                        </div>
                    </div>
                    <div className='space-y-5 text-left'>
                        <div className='text-white lg:text-xl font-semibold'>Legal</div>
                        <div className='text-white text-sm space-y-2'>
                            <div>Terms of service</div>
                            <div>Privacy policy</div>
                            <div>License</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

        <div className=''>
        <div className='px-14 pb-6 bg-slate-900 space-y-7 flex flex-col  justify-start'>
            <div>
                <hr className='border-gray-700 ' />
            </div>
            <div>
                <h1 className='text-gray-500'>© 2024 Your Company, Inc. All rights reserved.</h1>
            </div>
        </div>
        </div>
    </>
  )
}

export default Footer