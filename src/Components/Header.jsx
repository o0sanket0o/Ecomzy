import React from 'react'
import logo from '../assets/logo.png'
import { IoCart } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const navigate = useNavigate();
    const count = useSelector((state) => state.counter);
    
    
  return (
    <div className='bg-slate-900 fixed top-0 w-full z-50'>
            <div className='text-white flex flex-wrap justify-between lg:mx-60 lg:px-6 py-4 items-center sm:mx-32'>
                <img src={logo} alt="" className='h-10 min-w-12'/>
                <div className='flex gap-4 justify-center items-center'>
                    <p className='text-white hover:text-green-500 cursor-pointer transition duration-500' onClick={(() => {
                        navigate('/');
                    })}>Home</p>
                    <div className='relative' onClick={(() => {
                            navigate("/cart");
                        })}>
                        <IoCart className='text-3xl cursor-pointer transition duration-150 hover:text-green-400' />
                        {
                            // count?.length > 0 &&
                            <span className='text-white flex absolute top-[-4px] text-sm right-[-4px] bg-green-500 cursor-pointer h-3 w-3 p-3 animate-bounce rounded-full justify-center items-center'>{count.length}</span> 
                        }
                    </div>
                </div>
            </div>
    </div>
  )
}
