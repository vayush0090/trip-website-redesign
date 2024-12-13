import React from 'react'

const PopularSectionCard = () => {
  return (
    <>
        <div className='bg-red-500 rounded-3xl w-[70vw] h-[50vh] sm:w-[50vw] sm:h-[50vh] md:w-[35vw] md:h-[50vh] overflow-hidden shadow-2xl'>
            <img src="https://images.pexels.com/photos/28749616/pexels-photo-28749616/free-photo-of-taj-mahal-in-agra-on-a-sunny-day.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full hover:scale-150 object-cover h-[100%]   transition-all ease-in duration-500 cursor-grab' alt="" />
        </div>
    </>
  )
}

export default PopularSectionCard