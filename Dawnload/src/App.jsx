import React from 'react'
import { useRef } from 'react'


const App = () => {

  const btnRef=useRef("")
  const progRef=useRef("")
  const perRef=useRef("")
  var grow=0;

  const handleClick=()=>{

const interval=setInterval(()=>{
  if(grow<=100){
    grow+=1;
    progRef.current.style.width=`${grow}%`;
    perRef.current.innerText=grow+"%";
  }
},50)

setTimeout(() => {
  clearInterval(interval)
  btnRef.current.innerText="Downloaded";
}, 5000);

  }

  
  return (
    <div className='h-screen w-full  bg-black text-white flex items-center justify-center'>
      <div className='p-4 h-[10vw] w-[30vw] rounded-2xl bg-gray-400 flex gap-4 flex-col' id="card">
        <div className='flex w-full justify-between items-center  gap-10' >
            <h2 className='text-xl font-semibold'>index.html</h2>
            <button onClick={handleClick} ref={btnRef} className='px-6 py-2 bg-blue-500 rounded-xl font-semibold'>Download</button>
        </div>
        <div className=' flex  gap-10 items-center ' >
            <div className=' rounded-xl overflow-hidden w-[15vw] h-[0.4vw] bg-red-500' >
                <div ref={progRef} className=' w-[0vw] h-[0.4vw] bg-green-500 ' id="growth"></div>
                
            </div>
            <h1 ref={perRef} className='text-2xl font-bold  '>100%</h1>
        </div>
    </div>
    </div>
  )
}

export default App
