import React,{useState} from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import logo from "../../assets/Logo.webp";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";


const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },

  {
    id: 2,
    title: "About Us",
    path: "/about",
  },

  {
    id: 3,
    title: "Contact Us",
    path: "/contact",
  },
  
 
];
const Navbar = () => {

  const[open, setOpen] = useState(false);

  const handleOpen =() =>{
    setOpen(!open);
  }

  return (
    <nav className="bg-gradient-to-l from-[#995889] via-[#f7e7ca] text-white font-semibold fixed-top-left-0 w-full border-b-[1px] border-[#f1d6f1] ">
   
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container flex justify-between items-center"
      >
        {/* Logo section */}

        <div>
          <img src={logo} className="h-[120px] w-[350px] object-contain" />
         
        </div>
        {/* Menu section */}
        <div className=" text-xl hidden lg:block">
          <ul className="flex items-center gap-10">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={menu.path}
                  className="inline-block py-2 px-3 hover:text-[#F88B00] relative group cursor-pointer"
                >
                  <div className="w-2 h-2  absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden "></div>
                  {menu.title}
                </Link>
       
                
              </li>
              
            
              
              
            ))}
            
            <Link to="/login" >
            <button className="inline-block bg-[#F88B00] text-white font-semibold rounded-lg hover:bg-[#e2e46e] duration-200  hover:shadow-[0px_10px_8px_-7px_#69a79d] py-2 px-5">
              {" "}
              Login
              {/* <FaUserCircle  className="text-white"/> */}
            </button>
            </Link>
            <Link to="/help"> 
            <button className="inline-block bg-[#6EC1E4] text-white font-semibold rounded-lg hover:bg-[#e2e46e] duration-200 hover:shadow-[0px_10px_8px_-7px_#69a79d] py-2 px-5">
              Need Help?
            </button>
            </Link>
          </ul>
        </div>
        {/* Mobile Hamburger menu section */}
        <div className="lg:hidden">
          <button onClick={handleOpen}>
          <IoMdMenu className="text-4xl text-white" />
          </button>
          {
            open && (
              <div>
              <ul className="bg-white space-y-3 p-4 rounded-md shadow-md absolute right-10 top-24 z-50 text-black text-xl cursor-pointer">
                {NavbarMenu.map((menu) => (
                  <li key={menu.id}>
                    <Link 
                      to={menu.path}
                      className="inline-block text-xl p-4 hover:bg-blue-500 hover:text-white w-full rounded-md"
                    >
                      <div className="text-black text-2xl w-2 h-2 bg-[#f7cbf3] absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                      {menu.title}
                    </Link>
                  </li>
                ))} 
                
              </ul>
              </div>
            )
          }
          
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
