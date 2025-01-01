'use client';
import React from 'react';
import Link from "next/link";
import { useState } from "react";
import Image from 'next/image';

const Header = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    };

    return (
        <>
           
            <div className='w-full h-[100px] absolute bg-transparent flex items-center justify-between'>
                <div className='w-full flex items-center justify-between mx-3 md:mx-[100px]'>
                    {/* Left side empty */}
                    <div className="flex-grow w-0 md:w-[300px]"></div>

                    {/* Links - animated sliding nav */}
                    <div
                        className={`${
                            open ? "translate-x-0" : "-translate-x-full"
                        } md:flex md:translate-x-0 md:static w-full md:w-auto bg-gray-800 md:bg-transparent absolute top-0 left-0 h-screen md:h-auto z-40 transition-transform duration-500 ease-in-out`}
                    >
                        <ul className="flex flex-col md:flex-row md:justify-center mr-[170px] md:items-center md:gap-x-4 lg:gap-x-5 md:text-md md:text-sm lg:text-md xl:text-md text-white md:text-black font-bold">
                            <li className="p-4 hover:underline underline-offset-2">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="p-4 hover:underline underline-offset-2">
                                <Link href="/shop">Shop</Link>
                            </li>
                            <li className="p-4 hover:underline underline-offset-2">
                                <Link href="/about">About</Link>
                            </li>
                            <li className="p-4 hover:underline underline-offset-2">
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Icons on the right with spacing */}
                    <div className="flex gap-5 mr-[250px] md:ml-20 md:mr-0 items-center justify-between">
                        {/* Icons */}
                        <Link href="account">
                            <Image src="/icons/account.png" alt="Account" width={28} height={28} className="text-2xl hover:text-red-500 hover:scale-125 h-7 w-7" />
                        </Link>
                        <Link href="#">
                            <Image src="/icons/search.png" alt="Search" width={24} height={24} className="text-2xl hover:text-red-500 hover:scale-125" />
                        </Link>
                        <Link href="/wishlist">
                            <Image src="/icons/heart.png" alt="Wishlist" width={24} height={24} className="text-2xl hover:text-red-500 hover:scale-125" />
                        </Link>
                        <Link href="/cart">
                            <Image src="/icons/cart.png" alt="Cart" width={24} height={24} className="text-2xl hover:text-red-500 hover:scale-125" />
                        </Link>
                    </div>

                    {/* Toggle button for mobile */}
                    <button className="text-black block md:hidden text-3xl z-50" onClick={toggle} aria-label="Toggle menu">
                        ☰
                    </button>
                </div>
            </div>

           
        </>
    );
}

export default Header;