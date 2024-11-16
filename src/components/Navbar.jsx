/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosSearch, IoIosHeartEmpty } from "react-icons/io";
import { PiShoppingCartSimple } from "react-icons/pi";
import avatarImg from "../assets/avatar.png";
import { useSelector } from "react-redux";
import logo from '../../public/logo1_svg.svg'

const navigatin = [
  {
    name: "DashBoard",
    href: "/dashboard",
  },
  {
    name: "Orders",
    href: "/Orders",
  },
  {
    name: "Cart",
    href: "/Cart",
  },
  {
    name: "Check out",
    href: "/checkout",
  },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropDown] = useState(false);
  // console.log(isDropdownOpen);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const currentUser = true;

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6 border-slate-700">
      <nav className="flex justify-between items-center">
        {/* left side */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
          <img src={logo} alt="" className="h-20" />
          </Link>
          {/* search input */}
          <div className="relative sm:w-72 w-40 space-x-2">
            <IoIosSearch className="absolute inline-block left-3 inset-y-2" />
            <input
              type="text"
              placeholder="Search here"
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
            />
          </div>
        </div>
        {/* rightside */}
        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div>
            {currentUser ? (
              <>
                <button onClick={() => setIsDropDown(!isDropdownOpen)}>
                  <img
                    src={avatarImg}
                    alt=""
                    className={` size-7 rounded-full ${
                      currentUser ? "ring-2 ring-blue-500" : ""
                    }`}
                  />
                </button>
                {/* Dropdown */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                    <ul className="py-2">
                      {navigatin.map((item) => (
                        <li
                          key={item.name}
                          onClick={() => setIsDropDown(!isDropdownOpen)}
                        >
                          <Link
                            to={item.href}
                            className="block px-4 py-2 text-sm hover:bg-gray-500"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <HiOutlineUserCircle className="size-6" />
              </Link>
            )}
          </div>
          <button className="hidden sm:block">
            <IoIosHeartEmpty className="size-6" />
          </button>
          <Link
            to="/cart"
            className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-md"
          >
            <PiShoppingCartSimple className="" />
            <span className="text-sm font-semibold sm:ml-1">
              {cartItems.length}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
