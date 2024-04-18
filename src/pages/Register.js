import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Login';
import { FaUser ,FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Register = () => {
    return (  
<>
            <div className="container h-[86.5vh] w-full  flex justify-center items-center ">
            <div className='Wrapper w-[460px] h-[500px] border-[1px] border-solid border-transparent  text-blue-900 px-[] py-[] flex flex-col '>

                <form action="" className='h-[800px] flex flex-col justify-center items-center '>
                    <div className="heading  h-[80px] w-full flex  justify-center items-center ">
                        <h1 className='text-[30px] font-bold'>Register</h1>
                    </div>

                    <div className='inputs  h-[260px] w-full flex flex-col justify-center gap-5 items-center px-[20px] '>
                        <div className='input-box w-[100%] h-[50px] flex justify-center items-center gap-[10px]'>
                            <FaUser className='icon text-[16px]' />
                            <input className='h-[40px] w-full border-gray-400 border-[1px] border-solid px-[5px] rounded-[5px]' type='text' placeholder='Name' required/>
                        </div>
                        
                        <div className='input-box w-[100%] h-[50px] flex justify-center items-center gap-[10px]'>
                            <MdEmail className='icon text-[18px]' />
                            <input className='h-[40px] w-full border-gray-400 border-[1px] border-solid px-[5px] rounded-[5px]' type='email' placeholder='Email' required/>
                        </div>

                        <div className='input-box w-[100%] h-[50px] flex justify-center items-center gap-[10px]'>
                            <FaLock className='icon text-[16px]' />
                            <input className='h-[40px] w-full border-gray-400 border-[1px] border-solid px-[5px] rounded-[5px]' type='password' placeholder='Password' required/>
                        </div>

                        <div className='input-box w-[100%] h-[50px] flex justify-center items-center gap-[10px]'>
                            <FaLock className='icon text-[16px]' />
                            <input className='h-[40px] w-full border-gray-400 border-[1px] border-solid px-[5px] rounded-[5px]' type='password' placeholder='Confirm Password' required/>
                        </div>
                    </div>
                            <div className='rem-forget flex flex-col justify-center items-center font-semibold h-[120px] gap-[10px] w-full  px-[10px] '>
                                {/* <label><input type='checkbox'/>Remember Me</label> */}
                                {/* <a href='#' className='hover:underline hover:underline-blue-400 text-blue-600'>Forget Password ?</a> */}
                                <button type='submit' className='border-2 border-solid border-transparent px-[30px] py-[10px] text-white bg-[#7558E6] rounded-[5px] w-[25vw] '><a href="/Dashboard" path="/pages/Dashboard">Register →</a></button>
                            </div>


                            <div className="register-link font-semibold text-center flex justify-center items-center gap-[10px]  h-[45px] w-full">
                                <p>Already have an account?</p>
                                <a href='/Login' path="/Login" className='hover:underline hover:underline-blue-400 text-blue-600'>Login</a> 
                            </div>

                </form>
            </div>
            </div>
        </>
    );
}
 
export default Register;