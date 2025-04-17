
import BannerPng from "../../assets/cow7.jpg";
import React, { useState, useRef, useEffect } from 'react';
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa6";

const Hero = () => {

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section>
      <div className=" bg-gradient-to-l from-[#eee7de] via-[#f5e7e4] py-10 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0  ">
        {/* Banner Image */}
        <div className="container flex justify-center items-center min-h-[550px] ">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={BannerPng}
            alt=""
            className=" md:max-w-[450px] object-cover w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
          />
        </div>
        {/* Banner Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
            <h1 className="text-4xl sm:text-3xl font-bold !leading-snug">
              Each One Donate Rs 1
              <h1 className="text-4xl sm:text-3xl font-bold !leading-snug">
                {" "}
                Help Us to Help Cattle: Donate Rs 1 Daily
              </h1>
            </h1>

            <p className="text-gray-600 text-xl tracking-wide leading-5">
              Dear Gau Premi,
              
                Under the leadership of Shri Kamlakant Tari, Shikeri Goshala
                Mayem is relentlessly working to support stray and injured
                cattle across Goa. Currently, Sikeri Gaushala is caring for over
                5,500 Desi Cattle. We invite every citizen to be a part of this
                noble cause by contributing just Rs 1 per day (yearly Rs 365)
                towards Gauseva. This donation can be renewed every year, as
                long as the donor wishes to continue supporting the initiative.
              </p>
             
          
            <p className="text-gray-600 text-xl tracking-wide leading-5">
              Join us in making a difference for our beloved cattle!
            </p>
            
              <button className="bg-[#702e4a] text-white text-xl font-semibold rounded-lg flex items-center gap-4 group shadow-[0px_10px_8px_-7px_#0a050a] hover:shadow-[0px_10px_8px_-7px_#eafadb] cursor-pointer py-4 px-6">
                <FaRegUser className=" text-2xl  duration-300 "/>
                Individual Donation
                <FaCaretDown onClick={() => setOpen(!open)}
                 />
              </button>
          
              {open && (
        <div className="absolute w-40 bg-[#eec9e9] border border-[#efd1f7] rounded shadow-md z-50">
          <Link
            to="/individual_donation"
            className="block px-4 py-2 text-gray-800 font-bold hover:bg-gray-300 "
          >
            Individual Donation
          </Link>
          <Link
            to="/family_donation"
            className="block px-4 py-2 text-gray-800 font-bold hover:bg-gray-300"
          >
            Family Donation
          </Link>
          <Link
            to="/cow_adoption"
            className="block px-4 py-2 text-gray-800 font-bold hover:bg-gray-300"
          >
            Cow Adoption
          </Link>
          <Link
            to="/calf_adoption"
            className="block px-4 py-2 text-gray-800 font-bold hover:bg-gray-300"
          >
            Calf Adoption
          </Link>
          <Link
            to="/custom_amount"
            className="block px-4 py-2 text-gray-800 font-bold hover:bg-gray-300"
          >
            Custom Amount Donation
          </Link>
          <Link
            to="/gau_daan"
            className="block px-4 py-2 text-gray-800 font-bold hover:bg-gray-300"
          >
           Gau Daan
          </Link>
          <Link
            to="/feed_fodder"
            className="block px-4 py-2 text-gray-800 font-bold hover:bg-gray-300"
          >
           Feed Fodder
          </Link>
        </div>
      )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;


