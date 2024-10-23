import React, {useState, useEffect} from 'react'
import { Header } from '../Components/Header'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { CartPost } from './CartPost';

export const Cart = () => {
    const navigate = useNavigate();
    const counterArray = useSelector((state) => state.counter);
    const [totalPrice, settotalPrice] = useState(0);
    console.log('Current array is', counterArray);
    useEffect(() => {
        let sum = 0;
        counterArray.map((item) => {
            sum += item.price;
        })
        settotalPrice(sum);
    }, [counterArray])
  return (
    <div className='w-full h-auto flex'>
        <Header></Header>
        {
          (counterArray.length === 0) ? (
        <div className='flex h-[100vh] w-full justify-center gap-4 items-center flex-col'>
            <p className='text-gray-700 text-xl font-bold'>Your cart is empty!</p>
            <button className='bg-green-500 rounded-xl transition duration-500 uppercase text-white font-bold px-6 py-2 hover:bg-white hover:text-green-500 border-green-500 border-2' onClick={(() => {
              navigate('/');
            })}>Shop Now</button>
        </div>
          ):(
            <div className='flex flex-wrap justify-between mt-40 lg:mx-36 sm:mx-2 gap-8 w-[100vw]'>
              <div className='flex flex-col lg:w-7/12 sm:w-full'>
                {counterArray.map((post) => (
                  <CartPost post={post} key={post.id}/>
                ))}
              </div>
              {/* <div>Accha from right</div> */}
              <div className='w-full mx-4 lg:w-4/12 mt-4 lg:flex lg:flex-col gap-6 md:w-full sm:w-full items-left justify-between'>
                <div className=''>
                  <p className='uppercase text-green-600 font-bold text-lg'>Your cart</p>
                  <p className='uppercase text-green-600 font-bold text-5xl mb-4'>Summary</p>
                  <p className='text-xl text-gray-600 font-bold'>Total Items: <span className='font-normal text-black'>{counterArray.length}</span> </p>
                </div>
                <div className='flex  flex-col gap-4 sm:w-full sm:flex sm:justify-center sm:items-center'>
                  <div className='font-bold text-gray-700 text-xl'>Total Amount: <span className='text-black'>${totalPrice.toFixed(2)}</span> </div>
                  <button className='bg-green-700 mb-12 border border-green-700 text-white text-xl font-bold rounded py-4 w-full transition duration-500 hover:bg-white hover:text-green-700 sm:w-full'>Checkout Now</button>
                </div>
              </div>
            </div>
          )
        }
    </div>
  )
}
