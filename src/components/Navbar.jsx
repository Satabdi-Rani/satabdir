import React from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import logo from "../assets/logo.png";

const Navbar = () => {
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
               <img src={logo} alt="LogoImage" style={{width: '110px'}}/>
            </div>

            {/* Menu */}
                <ul className='hidden md:flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
           

            {/* Hamburger MEnu */}
            <div className='md:hidden z-10'>
               <FaBars />
            </div>
            {/* Mobile Menu */}
                <ul className='hidden absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'>
                    <li className='py-6 text-4xl'>Home</li>
                    <li className='py-6 text-4xl'>About</li>
                    <li className='py-6 text-4xl'>Skills</li>
                    <li className='py-6 text-4xl'>Work</li>
                    <li className='py-6 text-4xl'>Contact</li>
                </ul>
            

            {/* Social Icon */}
            <div className='hidden'></div>

        </div>
    );
};

export default Navbar;