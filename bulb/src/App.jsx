import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const App = () => {

  const [isOn, setIsOn] = useState(false)

  const btnRef=useRef(null)
  const bulbRef=useRef(null)

  const handleClick = () => {
    if(!isOn){
      bulbRef.current.style.boxShadow = "0 0 20px yellow";
       bulbRef.current.style.backgroundColor = "#4CAF50";
       setIsOn(true);
    }
    else{
      bulbRef.current.style.boxShadow = "none";
      bulbRef.current.style.backgroundColor = "gray";
      setIsOn(false);
    }
   }

  return (
    <div className='h-screen w-full bg-black flex flex-col  justify-evenly items-center'>
      <div ref={bulbRef} className='h-[10vw] w-[10vw] bg-gray-400 rounded-[50%]'></div>
      <button onClick={handleClick} ref={btnRef} className='px-8 py-3 bg-zinc-400 rounded-xl font-bold '>TURN ON </button>
    </div>
  )
}

export default App
