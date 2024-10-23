import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Components/Header'
import { Posts } from './Components/Posts'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import {Cart} from './Pages/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='relative'>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
    </div>
  )
}

export default App
