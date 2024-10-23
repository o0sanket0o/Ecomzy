import React from 'react'
import { Header } from '../Components/Header'
import { Posts } from '../Components/Posts'


export const Home = () => {
  return (
    <div>
        <Header></Header>
        <Posts className='mt-16'></Posts>
    </div>
  )
}
