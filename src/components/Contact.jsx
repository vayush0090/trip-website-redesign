// import React from "react";
// import { FaPhoneAlt } from "react-icons/fa";

// const Contact = () => {

//   return (
//     <>
//       <div id="contact" className="text-center text-4xl font-bold mt-20 ">
//         Contact Us
//       </div>
//       <div className="md:flex md:items-center md:flex-col md:justify-between flex flex-col justify-center items-center gap-y-9 lg:flex-row  lg:flex lg:justify-between lg:items-center mt-20 lg:ml-6  ">
//         <div className="flex flex-col  gap-y-9 ">
//           {/* <h1 className="font-bold text-gray-950 text-3xl">Contact Us</h1> */}
//           <div className="pl-6 flex flex-col gap-y-9   lg:h-[90vh] lg:w-[40vw] lg:px-32 lg:pt-40  ">
//             <div className="flex flex-col ">
//               <p className=" md:text-xl text-gray-950 font-semibold">
//                 Head Office
//               </p>
//               <p className="text-gray-700 md:text-sm">
//                 John Doe, 456 Elm Street, Suite 3, Los Angeles, CA 90001, USA
//               </p>
//             </div>
//             <div>
//               <p className="md:text-xl text-gray-950 font-semibold">
//                 Branch Office
//               </p>
//               <p className="text-gray-700 md:text-sm">
//                 4-158/9 5th Cross Road, Sainikpuri, Secunderabad 500094, IND
//               </p>
//             </div>
//             <div className="space-y-2">
//               <div className="flex items-center space-x-2 ">
//                 <FaPhoneAlt size={20} />
//                 <p className="md:text-xl text-gray-950 font-semibold">
//                   Numbers
//                 </p>
//               </div>
//               <p className="text-gray-700 md:text-sm">+91 9646823181</p>
//             </div>
//           </div>

//           {/* <div className="google-map">
//           <iframe className="w-full h-[40vh]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.808393052441!2d77.29890417495795!3d28.665455282585782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb820b9e4349%3A0x7c9242e7eb62e8c3!2sUSAP%20University%20School%20of%20Architecture%20and%20Planning!5e0!3m2!1sen!2sin!4v1734083208189!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
// </div> */}

//           {/* <div>
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14005.055482800226!2d77.18302194715778!3d28.65181679076559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d029c5f402ed3%3A0x942174294c9dd946!2sKarol%20Bagh%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1734160280425!5m2!1sen!2sin"
//               width="600"
//               height="450"
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </div> */}
//         </div>
//         {/* contact form */}
//         {/* min-h-screen */}


//         {/* form section  */}

        

//         <div>
//           <div className="flex justify-center w-[80vw] md:w-[50vw]   items-center  ">
//             <form className="bg-white p-6 rounded-lg shadow-2xl w-full    max-w-lg">
//               <h1 className="text-2xl font-bold mb-4 text-center">
//                 Request A Custom Quote
//               </h1>

//               <div className="mb-4">
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Name *
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   required
//                 />
//               </div>

//               <div className="mb-4">
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Email *
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   required
//                 />
//               </div>

//               <div className="mb-4">
//                 <label
//                   htmlFor="phone"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Phone *
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   required
//                 />
//               </div>

//               <div className="mb-4">
//                 <label
//                   htmlFor="pickup-location"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Pickup Location *
//                 </label>
//                 <input
//                   type="text"
//                   id="pickup-location"
//                   className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   required
//                 />
//               </div>

//               <div className="mb-4">
//                 <label
//                   htmlFor="drop-location"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Drop Location *
//                 </label>
//                 <input
//                   type="text"
//                   id="drop-location"
//                   className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   required
//                 />
//               </div>

//               <div className="mb-4">
//                 <label
//                   htmlFor="date-of-journey"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Date of Journey
//                 </label>
//                 <input
//                   type="date"
//                   id="date-of-journey"
//                   className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>







//       </div>

//       <div className="py-6 md:py-10 w-[85vw] mx-auto bg-slate-200 rounded-2xl shadow-2xl mt-10" >
//         <div className=" w-[80vw] rounded-3xl mx-auto ">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14005.055482800226!2d77.18302194715778!3d28.65181679076559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d029c5f402ed3%3A0x942174294c9dd946!2sKarol%20Bagh%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1734160280425!5m2!1sen!2sin"
//             className="w-[80vw] h-[50vh] md:w-[80vw] md:h-[80vh] rounded-3xl  "
            
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;







// ----------------------------------------------------------



// import React, { useRef } from "react";
// import emailjs from "emailjs-com";
// import { FaPhoneAlt } from "react-icons/fa";

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();
    
//     emailjs.sendForm(
//       "service_hd8netg",  // Replace with your EmailJS Service ID
//       "template_aemcu9k", // Replace with your EmailJS Template ID
//       form.current,
//       "a4l_c85f48uAglQ0M"   // Replace with your EmailJS Public Key
//     )
//     .then(
//       (result) => {
//         alert("Message sent successfully!");
//       },
//       (error) => {
//         alert("Failed to send the message. Please try again.");
//       }
//     );

//     e.target.reset();
//   };

//   return (
//     <>
//       <div id="contact" className="text-center text-4xl font-bold mt-20">
//         Contact Us
//       </div>
//       <div className="md:flex md:items-center md:flex-col md:justify-between flex flex-col justify-center items-center gap-y-9 lg:flex-row lg:justify-between lg:items-center mt-20 lg:ml-6">
//         <div className="flex flex-col gap-y-9">
//           <div className="pl-6 flex flex-col gap-y-9 lg:h-[90vh] lg:w-[40vw] lg:px-32 lg:pt-40">
//             <div className="flex flex-col">
//               <p className="md:text-xl text-gray-950 font-semibold">Head Office</p>
//               <p className="text-gray-700 md:text-sm">John Doe, 456 Elm Street, Suite 3, Los Angeles, CA 90001, USA</p>
//             </div>
//             <div>
//               <p className="md:text-xl text-gray-950 font-semibold">Branch Office</p>
//               <p className="text-gray-700 md:text-sm">4-158/9 5th Cross Road, Sainikpuri, Secunderabad 500094, IND</p>
//             </div>
//             <div className="space-y-2">
//               <div className="flex items-center space-x-2">
//                 <FaPhoneAlt size={20} />
//                 <p className="md:text-xl text-gray-950 font-semibold">Numbers</p>
//               </div>
//               <p className="text-gray-700 md:text-sm">+91 9646823181</p>
//             </div>
//           </div>
//         </div>

//         <div className="flex justify-center w-[80vw] md:w-[50vw] items-center">
//           <form ref={form} onSubmit={sendEmail} className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-lg">
//             <h1 className="text-2xl font-bold mb-4 text-center">Request A Custom Quote</h1>

//             <div className="mb-4">
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name *</label>
//               <input type="text" name="user_name" id="name" className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm" required />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
//               <input type="email" name="user_email" id="email" className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm" required />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone *</label>
//               <input type="tel" name="user_phone" id="phone" className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm" required />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="pickup-location" className="block text-sm font-medium text-gray-700">Pickup Location *</label>
//               <input type="text" name="pickup_location" id="pickup-location" className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm" required />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="drop-location" className="block text-sm font-medium text-gray-700">Drop Location *</label>
//               <input type="text" name="drop_location" id="drop-location" className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm" required />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="date-of-journey" className="block text-sm font-medium text-gray-700">Date of Journey</label>
//               <input type="date" name="date_of_journey" id="date-of-journey" className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm" />
//             </div>

//             <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;

// ---------------------------------------------------------

import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState({ text: "", type: "" }); // State for messages

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hd8netg",  // Replace with your EmailJS Service ID
        "template_aemcu9k", // Replace with your EmailJS Template ID
        form.current,
        "a4l_c85f48uAglQ0M" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          setMessage({ text: "Message sent successfully!", type: "success" }); // Success message
          setTimeout(() => setMessage({ text: "", type: "" }), 5000);
        },
        (error) => {
          setMessage({
            text: "Failed to send the message. Please try again.",
            type: "error",
          }); // Error message
          setTimeout(() => setMessage({ text: "", type: "" }), 5000);
        }
      );

    e.target.reset();
  };

  return (
    <>
      <div id="contact" className="text-center text-4xl font-bold mt-20">
        Contact Us
      </div>

      <div className="md:flex md:items-center md:flex-col md:justify-between flex flex-col justify-center items-center gap-y-9 lg:flex-row lg:justify-between lg:items-center mt-10 lg:ml-6 bg-white mx-auto w-[95vw] rounded-3xl shadow-2xl  px-4 py-8">

        {/* address section  */}

        <div className="flex flex-col gap-y-9">
          <div className="pl-6 flex flex-col gap-y-9 lg:h-[90vh] lg:w-[40vw] lg:px-32 lg:pt-40">
            <div className="flex flex-col">
              <p className="md:text-xl text-gray-950 font-semibold">Head Office</p>
              <p className="text-gray-700 md:text-sm">
                John Doe, 456 Elm Street, Suite 3, Los Angeles, CA 90001, USA
              </p>
            </div>
            <div>
              <p className="md:text-xl text-gray-950 font-semibold">
                Branch Office
              </p>
              <p className="text-gray-700 md:text-sm">
                4-158/9 5th Cross Road, Sainikpuri, Secunderabad 500094, IND
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <FaPhoneAlt size={20} />
                <p className="md:text-xl text-gray-950 font-semibold">Numbers</p>
              </div>
              <p className="text-gray-700 md:text-sm">+91 9646823181</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center w-[80vw] md:w-[50vw] items-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-lg"
          >
            <h1 className="text-2xl font-bold mb-4 text-center">
              Request A Custom Quote
            </h1>

            {/* Display success or error message */}
            {message.text && (
              <div
                className={`mb-4 p-4 text-center text-white rounded-md ${
                  message.type === "success"
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}
              >
                {message.text}
              </div>
            )}

            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name *
              </label>
              <input
                type="text"
                name="user_name"
                id="name"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email *
              </label>
              <input
                type="email"
                name="user_email"
                id="email"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone *
              </label>
              <input
                type="tel"
                name="user_phone"
                id="phone"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="pickup-location"
                className="block text-sm font-medium text-gray-700"
              >
                Pickup Location *
              </label>
              <input
                type="text"
                name="pickup_location"
                id="pickup-location"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="drop-location"
                className="block text-sm font-medium text-gray-700"
              >
                Drop Location *
              </label>
              <input
                type="text"
                name="drop_location"
                id="drop-location"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="date-of-journey"
                className="block text-sm font-medium text-gray-700"
              >
                Date of Journey
              </label>
              <input
                type="date"
                name="date_of_journey"
                id="date-of-journey"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>


            {/* map feature */}

      <div className="py-6 md:py-10 w-[85vw] mx-auto bg-slate-200 rounded-2xl shadow-2xl mt-10" >
         <div className=" w-[80vw] rounded-3xl mx-auto ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14005.055482800226!2d77.18302194715778!3d28.65181679076559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d029c5f402ed3%3A0x942174294c9dd946!2sKarol%20Bagh%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1734160280425!5m2!1sen!2sin"
           className="w-[80vw] h-[50vh] md:w-[80vw] md:h-[80vh] rounded-3xl  "
            
           allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;

