import React, { useState, useEffect } from 'react'
import { FaResearchgate } from "react-icons/fa";
import Brand from "../assets/img/Brand.png"
import { Link } from 'react-router-dom';


export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className='text-white z-20'>
            <nav className={`flex justify-between z-20 items-center w-full px-14 md:px-28 transition-all duration-700 ease-in-out  ${scrolled ? 'fixed top-0 left-0 bg-primaryColor bg-opacity-75 shadow-2xl shadow-black py-' : 'fixed top-0 left-0 py-10'}`}>
                <div className='flex justify-between items-center '>
                    <div className='flex justify-between items-center space-x-10'>
                        <div className='flex justify-center items-center rounded-lg bg- bg-opacity-40'>
                            <img src={Brand} alt="" className={`${scrolled ? 'w-20' : 'w-24'}`} />
                        </div>
                        <div className='relative   '>
                            <div className=''>
                                <ul className='hidden lg:flex justify-around items-center'>
                                    <Link to='/'>
                                        <li className='navItems '>Home</li>
                                    </Link>
                                    <Link to='/services'>
                                        <li className='navItems'>Services</li>
                                    </Link>

                                    <Link to='/aboutus'>
                                        <li className='navItems'>About Us</li>
                                    </Link>
                                    <Link to="/contactus">
                                        <li className='navItems'>Contact</li>
                                    </Link>

                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    )
}
export default Navbar