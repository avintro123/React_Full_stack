import React, { useState } from 'react';
import cpl from './images/cpl.jpg';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className="relative z-50 flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
            <img src={cpl} height='75px' width='75px' className='rounded-full sm:h-14 sm:w-14 md:h-18 md:w-18 lg:h-22 lg:w-22 xl:h-24 xl:w-24' alt='img' />
            <h1 className="w-full text-2xl font-bold text-[#00df9a] sm:ml-6 ml-3 sm:text-md md:text-2xl lg:text-4xl xl:text-3xl">CHOPAL PREMIER LEAGUE</h1>
            <ul className="hidden md:flex">
                <li className="p-4">Home</li>
                <li className="p-4">Company</li>
                <li className="p-4">Resources</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
            </ul>

            <div onClick={handleNav} className="block md:hidden">
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-50' : 'fixed left-[-100%]'}>
                <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">CPL</h1>
                <ul className="uppercase p-4">
                    <li className="p-4 border-b border-gray-600">Home</li>
                    <li className="p-4 border-b border-gray-600">Company</li>
                    <li className="p-4 border-b border-gray-600">Resources</li>
                    <li className="p-4 border-b border-gray-600">About</li>
                    <li className="p-4">Contact</li>
                </ul>
            </div>
        </div>
    );
}
