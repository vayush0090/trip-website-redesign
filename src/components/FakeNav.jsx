import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const FakeNav = () => {
  return (
    <>
      <nav id="top" className="lg:flex  lg:justify-start lg:items-center md:flex md:justify-start md:items-center sm:flex bg-slate-900 py-4 md:pl-28 sm:pl-28  sm:px-28 sm:text-left items-center justify-center lg:pl-28 flex">
        <div className="flex   items-center sm:gap-4 gap-2">
          <div>
            <FaFacebook  className="text-white" />
          </div>
          <div>
            <FaXTwitter className="text-white" />
          </div>
          <div>
            <FaInstagram className="text-white" />
          </div>
        </div>
        <p className="sm:mx-4 mx-1">|</p>
        <div className="flex  items-center gap-2">
          <div className="">
            <FaPhoneAlt size={13} className="text-white" />
          </div>
          <div>
            <p className="text-white text-sm sm:text-[18px]">+91 9015901409</p>
          </div>
        </div>
        <p className="sm:mx-4 mx-1">|</p>
        <div className="flex  items-center gap-2">
          <div>
            <MdEmail size={13} className="text-white" />
          </div>
          <div>
            <p className="text-white text-sm sm:text-[18px]">info@xyz.com</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default FakeNav;