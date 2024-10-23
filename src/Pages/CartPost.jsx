import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { add, remove } from '../Redux/Slices/counterSlice';

export const CartPost = (props) => {
    const currPost = props.post;
    const dispatch = useDispatch();
    console.log('We came for', currPost);
  return (
    <div className='flex gap-12 w-full max-h-[300px] h-full border-b-2 p-4 pb-8 border-black'>
        <div className='w-[180px] max-h-[250px] flex justify-center items-center'>
            <img src={currPost.image} alt="" className='max-h-[250px] max-w-[180px]'/>
        </div>
        <div className='flex flex-col justify-between gap-4'>
            <h2 className='text-lg font-bold'>{currPost.title}</h2>
            <p className='text-gray-700 line-clamp-3 leading-5 text-ellipsis 
            h-auto overflow-hidden'>{currPost.description}</p>
            <div className='flex justify-between items-center'>
                <div className='text-green-600 font-bold'>${currPost.price}</div>
                <p onClick={(() => {
                    dispatch((remove(currPost.id)));
                })} className='flex cursor-pointer justify-center items-center bg-red-200 rounded-full h-10 text-lg text-red-900 w-10 transition duration-500 hover:bg-red-700 hover:text-white'><MdDelete /></p>
            </div>
        </div>
    </div>
  )
}
