import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const OurTeam = () => {
  return (
    <>
        <div id='team' className='text-4xl mt-14 text-center font-bold '>
            Our Team
        </div>

        <div className='mt-11 bg-white shadow-2xl rounded-3xl  xl py-9 w-[90vw] mx-auto '>
            <div className='flex flex-col items-center text-center mx-4 gap-y-4'>
                <div className='font-semibold'> Meet our leadership</div>
                <div className='text-gray-700  w-[50vw]'> We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</div>
            </div>

            {/* our teams profile */}
            
            <div className='mt-16 grid grid-cols-1 gap-y-16 md:gap-y-24 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3  w-[70vw] mx-auto'>
                <div className='flex flex-col items-center text-center gap-y-4'>
                    <div className='w-[40vw] md:w-[15vw] lg:w-[10vw]  '>
                        <img className='w-full rounded-full' src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="" />
                    </div>
                    <div>
                    <h1 className=''>Whitney Francis</h1>
                    <p className='text-gray-700 text-sm'>Copywriter</p>
                    </div>
                    <div className='flex space-x-3'>
                    <FaXTwitter/>
                    <FaLinkedin/>

                    </div>
                </div>
                <div className='flex flex-col items-center text-center gap-y-4'>
                    <div className='w-[40vw] md:w-[15vw] lg:w-[10vw]'>
                        <img className='w-full rounded-full' src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="" />
                    </div>
                    <div>
                    <h1 className=''>Whitney Francis</h1>
                    <p className='text-gray-700 text-sm'>Copywriter</p>
                    </div>
                    <div className='flex space-x-3'>
                    <FaXTwitter/>
                    <FaLinkedin/>

                    </div>
                </div>
                <div className='flex flex-col items-center text-center gap-y-4'>
                    <div className='w-[40vw] md:w-[15vw] lg:w-[10vw]'>
                        <img className='w-full rounded-full' src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="" />
                    </div>
                    <div>
                    <h1 className=''>Whitney Francis</h1>
                    <p className='text-gray-700 text-sm'>Copywriter</p>
                    </div>
                    <div className='flex space-x-3'>
                    <FaXTwitter/>
                    <FaLinkedin/>

                    </div>
                </div>
                <div className='flex flex-col items-center text-center gap-y-4'>
                    <div className='w-[40vw]  md:w-[15vw] lg:w-[10vw]'>
                        <img className='w-full rounded-full' src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="" />
                    </div>
                    <div>
                    <h1 className=''>Whitney Francis</h1>
                    <p className='text-gray-700 text-sm'>Copywriter</p>
                    </div>
                    <div className='flex space-x-3'>
                    <FaXTwitter/>
                    <FaLinkedin/>

                    </div>
                </div>
                <div className='flex flex-col items-center text-center gap-y-4'>
                    <div className='w-[40vw]  md:w-[15vw] lg:w-[10vw]'>
                        <img className='w-full rounded-full' src="https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="" />
                    </div>
                    <div>
                    <h1 className=''>Whitney Francis</h1>
                    <p className='text-gray-700 text-sm'>Copywriter</p>
                    </div>
                    <div className='flex space-x-3'>
                    <FaXTwitter/>
                    <FaLinkedin/>

                    </div>
                </div>
                <div className='flex flex-col items-center text-center gap-y-4'>
                    <div className='w-[40vw] md:w-[15vw] lg:w-[10vw] '>
                        <img className='w-full rounded-full' src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="" />
                    </div>
                    <div>
                    <h1 className=''>Whitney Francis</h1>
                    <p className='text-gray-700 text-sm'>Copywriter</p>
                    </div>
                    <div className='flex space-x-3'>
                    <FaXTwitter/>
                    <FaLinkedin/>

                    </div>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default OurTeam