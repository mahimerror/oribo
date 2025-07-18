import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { IoMdMenu } from "react-icons/io";
import { RiCloseLargeLine } from "react-icons/ri";
import { useState } from "react";

const Navbar = () => {
  const [navToogle, setNavToogle] = useState(false);

  return (
    <div>
      <nav className="w-11/12 mx-auto">
        <div className="flex gap-5 justify-between items-center">
          <div className="logo">
            <Link to="/">
              <button>
                <img src={logo} className="h-10 md:h-12 xl:h-14 my-2" alt="Oribo" />
              </button>
            </Link>
          </div>
          <div className="mid-nav hidden md:block font-semibold">
            <ul className="flex gap-5">
              <NavLink
                className="transition duration-500 ease-in-out hover:text-[#2081F9]"
                to="/"
              >
                <button>HOME</button>
              </NavLink>
              <NavLink
                className="transition duration-500 ease-in-out hover:text-[#2081F9]"
                to="/services"
              >
                <button>SERVICES</button>
              </NavLink>
              <NavLink
                className="transition duration-500 ease-in-out hover:text-[#2081F9]"
                to="/protfolio"
              >
                <button>PROTFOLIO</button>
              </NavLink>
              <NavLink
                className="transition duration-500 ease-in-out hover:text-[#2081F9]"
                to="/blogs"
              >
                <button>BLOGS</button>
              </NavLink>
              <NavLink
                className="transition duration-500 ease-in-out hover:text-[#2081F9]"
                to="/contact"
              >
                <button>CONTACT US</button>
              </NavLink>
            </ul>
          </div>
          <div className="end-nav">
            <div className="hidden md:block">
              <Link to="/contact">
                <button className="font-bold px-4 py-3 transition duration-500 ease-in-out bg-[#2081F9] hover:bg-[#F99820] text-white rounded">
                  APPOINTMENT
                </button>
              </Link>
            </div>
            <div className="md:hidden text-2xl">
              <div className="bg-[#F0F0F0] rounded flex items-center justify-center w-10 h-10">
                <button onClick={() => setNavToogle(!navToogle)}>
                  {navToogle ? <RiCloseLargeLine /> : <IoMdMenu />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {navToogle && (
        <div className="monNav md:hidden w-11/12 mx-auto my-5">
          <div className="font-semibold">
            <ul className="">
              <NavLink className="transition duration-500 ease-in-out hover:text-[#2081F9]">
                <button>HOME</button>
              </NavLink>
              <hr className="my-2" />
              <NavLink className="transition duration-500 ease-in-out hover:text-[#2081F9]">
                <button>SERVICES</button>
              </NavLink>
              <hr className="my-2" />
              <NavLink className="transition duration-500 ease-in-out hover:text-[#2081F9]">
                <button>PROTFOLIO</button>
              </NavLink>
              <hr className="my-2" />
              <NavLink className="transition duration-500 ease-in-out hover:text-[#2081F9]">
                <button>BLOGS</button>
              </NavLink>
              <hr className="my-2" />
              <NavLink className="transition duration-500 ease-in-out hover:text-[#2081F9]">
                <button>CONTACT US</button>
              </NavLink>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
