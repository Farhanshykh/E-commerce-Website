"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="w-full h-[60px] flex justify-center pt-10 items-center absolute z-50">
        <div className=" mx-0 md:mx-[90px] lg:[120px] w-full h-[50px] flex justify-between">
          {/* first div  */}
          <div className=" w-[50px] md:w-[100px] lg:[150px] pl-4">
            <button
              className="text-black block md:hidden text-3xl z-50"
              onClick={toggle}
              aria-label="Toggle menu"
            >
              ☰
            </button>
            

            <div
              className={`${
                open ? "translate-x-0" : "-translate-x-full"
              } md:flex md:translate-x-0 md:static w-full md:w-auto bg-gray-800 opacity-90 md:bg-transparent absolute top-0 left-0 h-screen md:h-auto z-40 transition-transform duration-500 ease-in-out`}
            >
                <button onClick={closeMenu} aria-label="Close menu" className="text-white flex md:hidden absolute top-8 right-8 text-4xl"><IoCloseCircle /></button>
                
                <ul className="md:hidden flex flex-col text-center justify-between  gap-8 poppins text-sm font-semibold text-white py-28 pl-8">
              <li className="cursor-pointer hover:underline underline-offset-2 h-auto w-auto">
                <Link href="/">Home</Link>
              </li>
              <li className="cursor-pointer hover:text-white hover:underline underline-offset-2">
                <Link href="/shop">Shop</Link>
              </li>
              <li className="cursor-pointer hover:text-white hover:underline underline-offset-2">
                <Link href="/about">About</Link>
              </li>
              <li className="cursor-pointer hover:text-white hover:underline underline-offset-2">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
            </div>
          </div>

          {/* Second div  */}
          <div className=" w-0 md:w-[400px] lg:w-[500px] h-auto md:p-4 flex justify-center items-center cursor-pointer">
            <ul className="hidden md:flex justify-between  gap-12 poppins text-sm font-semibold">
              <li className="cursor-pointer hover:underline underline-offset-2 h-auto w-auto">
                <Link href="/">Home</Link>
              </li>
              <li className="cursor-pointer hover:underline underline-offset-4">
                <Link href="/shop">Shop</Link>
              </li>
              <li className="cursor-pointer hover:underline underline-offset-2">
                <Link href="/about">About</Link>
              </li>
              <li className="cursor-pointer hover:underline underline-offset-2">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* third div  */}
          <div className="  w-[150px] px-2 md:px-0 md:w-[200px] flex justify-between items-center">
            <Link href="account">
              <Image
                src="/icons/account.png"
                alt="Account"
                width={28}
                height={28}
                className="text-2xl hover:text-red-500 hover:scale-125 h-7 w-7"
              />
            </Link>
            <Link href="#">
              <Image
                src="/icons/search.png"
                alt="Search"
                width={24}
                height={24}
                className="text-2xl hover:text-red-500 hover:scale-125"
              />
            </Link>
            <Link href="/wishlist">
              <Image
                src="/icons/heart.png"
                alt="Wishlist"
                width={24}
                height={24}
                className="text-2xl hover:text-red-500 hover:scale-125"
              />
            </Link>
            <Link href="/cart">
              <Image
                src="/icons/cart.png"
                alt="Cart"
                width={24}
                height={24}
                className="text-2xl hover:text-red-500 hover:scale-125"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
