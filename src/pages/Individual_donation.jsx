import React from "react";
import { useState } from "react";
import { CiLock } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Individual_donation = () => {
  const presetAmounts = [
    365, 730, 1095, 1460, 1825, 2190, 2555, 2920, 3285, 3650,
  ];
  const [amount, setAmount] = useState(365);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-l from-[#eee7de] via-[#f5e7e4] p-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-xl font-semibold pb-2 border-b border-gray-200 bg-gray-50">
          Choose Amount for Individual Donation
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-[17px] text-center  py-5 leading-relaxed ">
          "How much would you like to donate? Your kindness as a contributor to
          the Gomantak Gausevak Mahasangh helps us provide love, care, and
          protection to our precious cattle.<br></br> Every rupee you give goes
          directly to supporting their well-being. Thank you for your heartfelt
          generosity—together, we are creating a brighter, kinder future for
          them."
        </p>

        {/* Custom amount input */}
        <div className=" mt-5 flex items-center h-[80px] px-4 py-5 border-1 border-gray-350 rounded-md overflow-hidden  inset-shadow-sm inset-shadow-gray-500/50 mb-6 focus:outline-none focus:ring-2 focus:ring-green-200">
          <span className="px-4 text-xl bg-gray-50 ">₹</span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value || 0))}
            className="w-full text-5xl  font-semibold  p-2 outline-none"
          />
        </div>

        {/* Preset buttons */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
          {presetAmounts.map((amt) => (
            <button
              key={amt}
              onClick={() => setAmount(amt)}
              className={` h-[70px] py-4 rounded-lg font-medium text-2xl mt-2 ${
                amount === amt
                  ? " text-[#944666]  bg-[#fff] border border-[#944666] "
                  : " text-white bg-[#944666] hover:bg-[#ce7e9f]"
              }`}
            >
              ₹ {amt}
            </button>
          ))}
        </div>

        {/* Donate Button with Arrow Icon */}
        <div className="flex items-center justify-center">
          <Link to ="/individual_donation_form">
          <button
            className=" mt-10 w-[300px] h-[70px] text-[22px] bg-[#7a445b] hover:bg-[#db86a9]  text-white  rounded-lg  transition cursor-pointer font-semibold  items-center"
            disabled={!amount}
          >
            Donate
            <MdKeyboardArrowRight className="w-[25px] h-[25px] ml-[186px] mt-[-27px]" />
          </button>
          </Link>
        </div>
        {/* Secure Donation Info */}
        <p className="flex items-center justify-center border-t border-gray-200 text-gray-500 bg-gray-50 text-sm mt-12 py-4">
          <CiLock className="w-4 h-4 mr-1 text-gray-400" />
          Secure Donation
        </p>
      </div>
    </div>
  );
};

export default Individual_donation;
