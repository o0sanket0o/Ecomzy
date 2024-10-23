import React, { useEffect, useState } from 'react'
import {baseUrl}from '../baseUrl'
import { useDispatch, useSelector } from 'react-redux'
import { Post } from './Post'
import { Spinner } from './Spinner'

export const Posts = ({className}) => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter);
    const [loader, setLoader] = useState(false)
    const [data, setData] = useState([])
    useEffect(() => {
        fetchData();
    }, [])
    async function fetchData(){
        try{
            setLoader(true);
            const rawData = await fetch(baseUrl);
            const data = await rawData.json();
            console.log(data);
            setData(data);
            setLoader(false);
        }
        catch(err){
            console.log("Error occured",err);
        }
    }
  return (
    <div className=''>
        {loader? (
            <Spinner />
        ) : (
            <div className='mt-32 mx-[20vh] grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6'>
                {
                    data.map((card) => {
                        return <Post key={card.id} card={card}/>
                    })
                }
            </div>
        )
    }
    </div>
  )
}

