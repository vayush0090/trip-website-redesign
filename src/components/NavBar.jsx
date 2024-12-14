// import React, { useState } from 'react'
// import { use } from 'react';
// import { MdMenu } from "react-icons/md";

// const NavBar = () => {

//     const [isMenuopen,setIsMenuOpen] = useState(false)

//     const toggleMenu = ()=>{
//         setIsMenuOpen(!isMenuopen)
//     }

//     console.log(isMenuopen);
    
//   return (
//     <>
//         <div className='bg-white py-2 sm:py-5 shadow-lg px-16 sticky top-0 z-20'>
//             <nav className='flex justify-between items-center'>
//                 <div className='left-side'>
//                     <a href="#"><h1 className='text-4xl font-bold'>Travel</h1></a>
//                 </div>
                
//                 <div className='right-side'>
//                     <ul className='hidden md:flex   space-x-6 font-semibold'>
//                         <a href="#"><li>Home</li></a>
//                         <a href="#destination"><li>Destination</li></a>
//                         <a href="#about"><li>About Us</li></a>
//                         <a href="#team"><li>Our Team</li></a>
//                         <a href="#contact"><li>Contact Us</li></a>
//                     </ul>
//                 </div>
//                 <div onClick={toggleMenu} className='md:hidden'>
//                         <MdMenu size={35}/>
//                 </div>
//             </nav>
//             {/* Mobile nav */}
//             {
//                     isMenuopen?<ul className='flex text-center gap-y-2 pt-5 flex-col md:hidden   font-semibold'>
//                     <a href="#"><li>Home</li></a>
//                         <a href="#destination"><li>Destination</li></a>
//                         <a href="#about"><li>About Us</li></a>
//                         <a href="#team"><li>Our Team</li></a>
//                         <a href="#contact"><li>Contact Us</li></a>
//                 </ul>:""
//             }
//         </div>
//     </>
//   )
// }

// export default NavBar



// -----------------------------------------------------------------------------





// import React, { useState } from 'react';
// import { MdMenu } from "react-icons/md";
// import { motion } from 'framer-motion';

// const NavBar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     const list = {
//         visible: {
//             opacity: 1,
//             transition: {
//                 staggerChildren: 0.2,
//             },
//         },
//         hidden: { opacity: 0 },
//     };

//     const item = {
//         visible: { opacity: 1, x: 0 },
//         hidden: { opacity: 0, x: -100 },
//     };

//     return (
//         <>
//             <div className='bg-white py-2 sm:py-5 shadow-lg px- sm:px-16 sticky top-0 z-20'>
//                 <nav className='flex justify-between items-center'>
//                     <div className='left-side'>
//                         <a href="#"><h1 className='text-4xl font-bold'>Travel</h1></a>
//                     </div>

//                     <div className='right-side'>
//                         <ul className='hidden md:flex space-x-6 font-semibold'>
//                             <a href="#"><li>Home</li></a>
//                             <a href="#destination"><li>Destination</li></a>
//                             <a href="#about"><li>About Us</li></a>
//                             <a href="#team"><li>Our Team</li></a>
//                             <a href="#contact"><li>Contact Us</li></a>
//                         </ul>
//                     </div>
//                     <div onClick={toggleMenu} className='md:hidden'>
//                         <MdMenu size={35} />
//                     </div>
//                 </nav>

//                 {/* Mobile nav */}
//                 {isMenuOpen && (
//                     <motion.ul
//                         className='flex text-center gap-y-2 pt-5 flex-col md:hidden font-semibold'
//                         initial="hidden"
//                         animate="visible"
//                         exit="hidden"
//                         variants={list}
//                     >
//                         <motion.a href="#" variants={item}><li>Home</li></motion.a>
//                         <motion.a href="#destination" variants={item}><li>Destination</li></motion.a>
//                         <motion.a href="#about" variants={item}><li>About Us</li></motion.a>
//                         <motion.a href="#team" variants={item}><li>Our Team</li></motion.a>
//                         <motion.a href="#contact" variants={item}><li>Contact Us</li></motion.a>
//                     </motion.ul>
//                 )}
//             </div>
//         </>
//     );
// };

// export default NavBar;


// ---------------------------------------------



import React, { useState } from 'react';
import { MdMenu } from "react-icons/md";
import { motion, AnimatePresence } from 'framer-motion';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const list = {
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
        hidden: { opacity: 0 },
    };

    const item = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100, transition: { duration: 0.5 } },  // Adjust exit duration here
    };

    return (
        <>
            <div className='bg-white py-2 sm:py-5 shadow-lg px-5 sm:px-16 sticky top-0 z-20'>
                <nav className='flex justify-between items-center'>
                    <div className='left-side'>
                        <a href="#"><h1 className='text-4xl font-bold'>Travel</h1></a>
                    </div>

                    <div className='right-side'>
                        <ul className='hidden md:flex space-x-6 font-semibold'>
                            <a href="#"><li>Home</li></a>
                            <a href="#destination"><li>Destination</li></a>
                            <a href="#about"><li>About Us</li></a>
                            <a href="#team"><li>Our Team</li></a>
                            <a href="#contact"><li>Contact Us</li></a>
                        </ul>
                    </div>
                    <div onClick={toggleMenu} className='md:hidden'>
                        <MdMenu size={35} />
                    </div>
                </nav>

                {/* Mobile nav */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.ul
                            className='flex text-center gap-y-2 pt-5 flex-col md:hidden font-semibold'
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={list}
                        >
                            <motion.a href="#" variants={item}><li>Home</li></motion.a>
                            <motion.a href="#destination" variants={item}><li>Destination</li></motion.a>
                            <motion.a href="#about" variants={item}><li>About Us</li></motion.a>
                            <motion.a href="#team" variants={item}><li>Our Team</li></motion.a>
                            <motion.a href="#contact" variants={item}><li>Contact Us</li></motion.a>
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default NavBar;
