import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../Redux/Slices/counterSlice';
import toast from 'react-hot-toast';


export const Post = (props) => {
    const card = props.card;
    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    const heading = card.title.substring(0, 20) + '...';
    function check(card){
        return count.some(item => item.id === card.id);
    }
  return (
    <div className=' group shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col justify-center items-center rounded-lg hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] transition duration-300 hover:scale-110'>
        <div className='w-8/12 flex flex-col gap-4 justify-center items-center'>
            <h2 className='mt-6 text-lg w-full font-bold truncate overflow-hidden'>{card.title}</h2>
            <p className='leading-5 text-center text-sm line-clamp-2 h-auto overflow-hidden text-ellipsis'>{card.description}</p>
            <div className='w-full h-[200px] flex justify-center items-center'>
                <img src={card.image} alt="" className='object-scale-down h-full max-h-[200px] w-full max-w-full'/>
            </div>
        </div>
        <div className='w-full flex justify-between items-center p-4'>
            <p className='text-md text-green-600 font-bold'>${card.price}</p>
            {
                check(card) ? (
                    <button className='border-gray-700 font-bold text-gray-700  rounded-full group-hover:bg-gray-700 px-3 py-1 border-2 text-sm uppercase group-hover:text-white' onClick={() => {
                        dispatch(remove(card.id));
                        toast.error("Removed Item");
                    }}>Remove Item</button>
                    
                ) : (
                    <button className='border-gray-700 font-bold text-gray-700 rounded-full group-hover:bg-gray-700  group-hover:text-white px-3 py-1 border-2 text-sm uppercase' onClick={() => {
                        dispatch(add(card));
                        toast.success("Item added to cart");
                    }}>Add To Cart</button>
                )
            }
        </div>
    </div>
  )
}
