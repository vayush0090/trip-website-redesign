import React from 'react'

const BackgroundVideo = () => {
  return (
    <>
        {/* w-[80vw] h-[70vh] */}
      <video autoPlay loop muted playsInline className="background-video mx-auto rounded-3xl w-[80vw] h-[70vh] object-cover object-center ">
      {/* h-[80vh] w-[150vw]  */}
        <source src="/video/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      
    
    </>
  )
}

export default BackgroundVideo