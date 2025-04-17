
import { useState } from "react";
import { MdKeyboardArrowRight, MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { HiOutlinePencilAlt, HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";

function Individual_donation_form () {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email:"",
    phone: "",
    account:"",
    country: "India",
    address1: "",
    address2: "",
    city: "",
    zip: "",
    state: "",
    postalCode: "",
    dob: "",
    rebate: "",
    suggestedBy: "",
    reason: "",
    agreement: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName) {
      alert("Please enter your first name.");
      return;
    }

    if (!formData.lastName) {
      alert("Please enter your last name.");
      return;
    }

    if (!formData.email) {
      alert("Please enter your email address.");
      return;
    }
    if (!formData.phone) {
      alert("Please enter your phone number.");
      return;
    }

    if (!formData.address1) {
      alert("Please enter your address line 1.");
      return;
    }

    if (!formData.city) {
      alert("Please enter your city.");
      return;
    }

    if (!formData.zip) {
      alert("Please enter your zip/postal code.");
      return;
    }
    if (!formData.suggestedBy) {
      alert("Please suggestedBy.");
      return;
    }
    if (!formData.agreement) {
      alert("Please agree to the donation terms.");
      return;
    }

    // If everything is valid, proceed
    alert("Form submitted successfully!");
    // submit logic here (e.g., API call)
  };

  return (
    <div className="bg-gradient-to-l from-[#eee7de] via-[#f5e7e4] min-h-screen flex justify-center items-start py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white rounded-xl shadow p-6 space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center pb-2 border-b border-gray-200 bg-gray-50">
          Add Your Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[18px]">
        <div className="flex items-center border px-3 py-1 bg-transparent inset-shadow-sm inset-shadow-gray-300 border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-400">
        <FaRegUser className="w-5 h-4 text-gray-400 "/>
          <input 
            name="firstName"
            type="text"
            placeholder="First Name*"
            className="w-full p-4  outline-none "
            value={formData.firstName}
            onChange={handleChange}
            required
          />
    </div>

          <input
            name="lastName"
             type="text"
            placeholder="Last Name"
            className="w-full p-4 pl-10 inset-shadow-sm inset-shadow-gray-500/50 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-400"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center border px-3 py-1 bg-transparent inset-shadow-sm inset-shadow-gray-300 border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-400 text-[18px]">
          <MdOutlineMail className="w-6 h-6 text-gray-400 "  />
        <input
          name="email"
           type="email"
          placeholder="E-mail Address*"
          className="w-full p-4 outline-none"
          value={formData.email}
          onChange={handleChange}
        />
        </div>
        <div className="flex items-center border px-3 py-1 bg-transparent inset-shadow-sm inset-shadow-gray-300 border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-400 text-[18px]">
        <FaPhoneFlip className="w-6 h-6 text-gray-400 "  />
        <input
          name="phone"
           type="number"
          placeholder=""
          className="w-full p-4 outline-none"
          value={formData.phone}
          onChange={handleChange}
        />
        </div>
        <label className="flex items-center space-x-2 text-[18px] text-gray-600">
          <input type="checkbox" name="account" className="w-5 h-5 border border-gray-50" checked={formData.account} onChange={handleChange} required  />
          <span>Create an account</span>
          <HiOutlineQuestionMarkCircle  className="w-7 h-7 text-gray-400"/>
        </label>
        <input
          name="address1"
           type="text"
          placeholder="Address line 1*"
          className="w-full p-4 pl-10 inset-shadow-sm inset-shadow-gray-500/50 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-400 text-[18px]"
          value={formData.address1}
          onChange={handleChange}
          required
        />
        <input
          name="address2"
           type="text"
          placeholder="Address line 2"
          className="w-full p-4 pl-10 inset-shadow-sm inset-shadow-gray-500/50 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-400 text-[18px]"
          value={formData.address2}
          onChange={handleChange}
        />
        <input
          name="city"
           type="text"
          placeholder="City*"
          className="w-full p-4 pl-10 inset-shadow-sm inset-shadow-gray-500/50 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-400 text-[18px]"
          value={formData.city}
          onChange={handleChange}
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[18px]">
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full p-4 pl-10 inset-shadow-sm inset-shadow-gray-300 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-400"
          >
            <option value="">Select State</option>
            <option value="Goa">Goa</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Karnataka">Karnataka</option>
          </select>

          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            placeholder="Zip / Postal Code*"
            className="w-full p-4 pl-10 inset-shadow-sm inset-shadow-gray-300 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-400"
          />
      


        <div className="mb-4">
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          placeholder="DD/MM/YYYY"
          className="w-full p-4 pl-10 inset-shadow-sm inset-shadow-gray-300 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-400"
        />
      </div>
        <div className="mb-4">

       
          <label className="block mb-1 text-[18px]">Income Tax Rebate</label>
          <div className="flex items-center gap-6">
            <label className="flex items-center">
              <input
                type="radio"
                name="rebate"
                value="yes"
                checked={formData.rebate === "yes"}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="rebate"
                value="no"
                checked={formData.rebate === "no"}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>
        </div>
        {/* Suggested By & Reason */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-[18px]">
          <input
            type="text"
            name="suggestedBy"
            value={formData.suggestedBy}
            onChange={handleChange}
            placeholder="Suggested by person *"
            className="w-full p-4 pl-10 inset-shadow-sm inset-shadow-gray-300 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-400"
          />

          <select
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="w-full p-4 pl-10 inset-shadow-sm inset-shadow-gray-300 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-400"
          >
            <option value="">Give Reason for Donation</option>
            <option value="Support">Willingness to Help or Support</option>
            <option value="Religious">Religious Duty</option>
            <option value="Recommendation">Based on Recommendation</option>
          </select>
        </div>

        {/* Agreement */}
        <div className="mb-4">
          <label className="block font-medium mb-2">
            I agree to Donate Rs 365 per year to Shikeri Goashala towards
            Gauseva. *
          </label>
          <div className="flex items-center gap-6">
            <label className="flex items-center">
              <input
                type="radio"
                name="agreement"
                value="yes"
                checked={formData.agreement === "yes"}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="agreement"
                value="no"
                checked={formData.agreement === "no"}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>

        <div className="w-full max-w-3xl mx-auto bg-white p-6 md:p-10 rounded-xl shadow-md mt-6">
          <h2 className="text-center text-lg italic mb-4 text-gray-600">
            Donation Summary :
          </h2>

          <div className="border rounded-lg overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center px-4 py-3 bg-gray-100 border-b">
              <h3 className="font-semibold text-lg">Donation Summary</h3>
              <button className="flex items-center text-green-600 hover:underline text-sm font-medium">
                Edit Donation <HiOutlinePencilAlt className="ml-1 w-4 h-4" />
              </button>
            </div>

            {/* Details */}
            <div className="px-4 py-3 space-y-4 text-sm sm:text-base">
              <div className="flex justify-between">
                <span className="text-gray-700">Payment Amount</span>
                <span className="font-semibold">₹365</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Giving Frequency</span>
                <span className="font-semibold">One time</span>
              </div>
              <div className="flex justify-between font-bold  border-t pt-3">
                <span>Donation Total</span>
                <span>₹365</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button className=" mt-10 w-[300px] h-[70px] text-[22px] bg-[#7a445b] hover:bg-[#db86a9] text-white  rounded-lg  transition cursor-pointer font-semibold  items-center">
            Donate Now
            <MdKeyboardArrowRight className="w-[25px] h-[25px] ml-[211px] mt-[-27px]" />
          </button>
        </div>

        <p className="flex items-center justify-center border-t border-gray-200 text-gray-500 bg-gray-50 text-sm mt-12 py-4">
          <CiLock className="w-4 h-4 mr-1 text-gray-400" />
          Secure Donation
        </p>
      </form>
    </div>
  );
}
export default Individual_donation_form;

