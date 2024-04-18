import React from "react";
import logo from '../assets/logo.jpeg';

const Nav = () => {
    return ( 
        <>
            <nav className="navbar h-[100px] w-[100%] text-black flex justify-between items-center px-[3vw]  bg-gradient-to-b from-violet-400 from-[-50%] to-white">
                <div className="flex gap-[20px] nav-left">
                    <div className="flex">
                        <img src={logo} alt="Logo" className='h-[12vh] w-[12vh]' />
                        <h1 className="mx-1 my-5 font-serif semi-bold text-[27px]">WorkSphere</h1>
                    </div>
                    <a href="/GetStarted" path="/pages/GetStarted" className="my-7 font-semibold">Features</a>
                    <a href="/About" path="/pages/About" className="my-7 font-semibold">About Us</a>
                </div>
                
                <div className="nav-right text font-semibold flex justify-center items-center gap-[2vw]">
                    <a href="/Login" path="/pages/Login">Login</a>
                    <button className="bg-[#7558E6] px-3 py-2 rounded-3xl text-white "><a href="/GetStarted" path="/pages/GetStarted">Get Started →</a></button>
                </div>
            </nav>
        </>
     );
}

export default Nav;
