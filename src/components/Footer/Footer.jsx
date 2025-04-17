import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-5 bg-[#702e4a] text-white ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4 ">
          {/* first section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-[#ffff] text-xl font-bold">Privacy and Policy</h1>
          
          </div>
          {/* second section */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-[#ffff] text-xl font-bold">Terms and Conditions</h1>
              {/* <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Web Development
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Software Development
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Apps Development
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    E-learning
                  </li>
                </ul>
              </div> */}
            </div>
            <div className="space-y-4">
              <h1 className="text-[#ffff] text-xl font-bold">Refund Policy</h1>
              <div className="text-dark2">
                {/* <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Home
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Services
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    About
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Contact
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
          {/* third section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-[#ffff] text-xlsfont-bold">Get In Touch</h1>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter your email"
                className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2"
              />
             
            </div>
            {/* social icons */}
            <div className="flex space-x-6 py-3">
              <a href="#">
                <FaWhatsapp className=" text-[#fff] cursor-pointer hover:text-[#1a1e29] hover:scale-105 duration-200" />
              </a>
              <a href="#">
                <FaInstagram className=" text-[#fff] cursor-pointer hover:text-[#1a1e29] hover:scale-105 duration-200" />
              </a>
              <a href="#">
                <TbWorldWww className=" text-[#fff] cursor-pointer hover:text-[#1a1e29] hover:scale-105 duration-200" />
              </a>
              <a href="#">
                <FaYoutube className=" text-[#fff] cursor-pointer hover:text-[#1a1e29] hover:scale-105 duration-200" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;