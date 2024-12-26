import React from 'react'
import { useState,useEffect } from 'react'

const App = () => {
const [position , setPosition ] = useState({x: 0, y: 0})

 useEffect(() =>{
 
  setInterval(() => {
    
    const top =Math.floor(Math.random()* window.innerHeight -100)
    const left =Math.floor(Math.random()* window.innerWidth -100)
    setPosition({x: left, y: top})
  }, 1000);

 },[])

  return (
    <div className='h-screen w-full bg-black relative'>
      <div style={{
        top:position.y,
        left: position.x,
       

      }} className='h-10 w-10 rounded-xl bg-white absolute'></div>
    </div>
  )
}

export default App
