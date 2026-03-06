import React from 'react';

const Navbar = () => {
    return (
        <div className="shadow-lg mx-auto px-10 py-3.5">
            <div className="navbar-start">
                <div className="dropdown hover:via-yellow-500">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="text-black menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li className='text-black'><a>Home</a></li>
                        <li className='text-black'><a>FAQ</a></li>
                        <li className='text-black'><a>Changelog</a></li>
                        <li className='text-black'><a>Blog</a></li>
                        <li className='text-black'><a>Download</a></li>
                        <li className='text-black'><a>Contact</a></li>
                    </ul>
                </div>
                <a className="text-xl text-black font-bold">CS-Ticket System</a>
            </div>
            <div className="navbar-end">
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='text-black font-medium'><a>Home</a></li>
                        <li className='text-black font-medium'><a>FAQ</a></li>
                        <li className='text-black font-medium'><a>Changelog</a></li>
                        <li className='text-black font-medium'><a>Blog</a></li>
                        <li className='text-black font-medium'><a>Download</a></li>
                        <li className='text-black font-medium'><a>Contact</a></li>
                    </ul>
                </div>
                <a className="btn border-0  hover:via-purple-800 bg-linear-to-br from-[#632EE3] to-[#9F62F2] items-center"><span className='font-bold'>+</span>New Ticket</a>
            </div>
        </div>
    );
};

export default Navbar;