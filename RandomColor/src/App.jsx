import React, { useRef } from 'react'

const App = () => {

  const boxRef = useRef(null)

  const handleClick = () => {

    const red=Math.floor(Math.random()*256)
    const green=Math.floor(Math.random()*256)
    const blue=Math.floor(Math.random()*256)
    boxRef.current.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
   
   }


  return (
    <div className='p-4'>
      <div ref={boxRef} className='h-[15vw] w-[15vw] bg-black  rounded-2xl'></div>
      <button onClick={handleClick} className='px-10 py-3 bg-blue-400 rounded-xl mt-4'>CLICK</button>
    </div>
  )
}

export default App
