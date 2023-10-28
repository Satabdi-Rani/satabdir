import React, {useState} from 'react';
import {FaBars, FaTimes, FaLinkedin, FaGithub, FaFacebook} from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai';
import logo from "../assets/logo.png";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () =>setNav(!nav)


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
            <div onClick={handleClick} className='md:hidden z-10'>
               {!nav? <FaBars /> : <FaTimes/> }
            </div>

            {/* Mobile Menu */}
                <ul className={!nav? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                    <li className='py-6 text-4xl'>Home</li>
                    <li className='py-6 text-4xl'>About</li>
                    <li className='py-6 text-4xl'>Skills</li>
                    <li className='py-6 text-4xl'>Work</li>
                    <li className='py-6 text-4xl'>Contact</li>
                </ul>
            

            {/* Social Icon */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300 ' href="/">LinkedIn <FaLinkedin size={30}></FaLinkedin> </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300 ' href="/">Github <FaGithub size={30}></FaGithub> </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a className='flex justify-between items-center w-full text-gray-300 ' href="/">Email <AiOutlineMail size={30}></AiOutlineMail> </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-gray-300 ' href="/">Resume <FaLinkedin size={30}></FaLinkedin> </a>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;