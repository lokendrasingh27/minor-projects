import React, { useState } from 'react'

const App = () => {

  const [position , setPosition ] = useState({x: 0, y: 0})

  const handleMouseMove = (e) => {
    setPosition({x: e.clientX, y: e.clientY})
  }

  
  return (
    <div onMouseMove={(e)=>{handleMouseMove(e)}} className='h-screen w-full bg-black relative'>
      <div style={{top:position.y,
        left: position.x,
        }} className='h-10 w-10 rounded-full bg-green-500 absolute'></div>
    </div>
  )
}

export default App
