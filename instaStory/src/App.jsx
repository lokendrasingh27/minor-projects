import React from 'react'
import Story from './Story'
import axios from "axios"
import { useState } from 'react'
import { useEffect } from 'react'
import { use } from 'react'
import { useReducer } from 'react'
import { useRef } from 'react'
const App =  () => {
const [user, setuser] = useState([])

const [Storyopen, setStoryopen] = useState(false)
const [storyImage, setstoryImage] = useState("")

const BarRef = useRef(null)
let grow=0;

const abc = async ()=>{
  const response = await axios.get("https://randomuser.me/api/?results=5")
  setuser(response.data.results)
}

  useEffect(()=>{
    abc()
  },[])

  const StoryHandler =(idx)=>{
    setStoryopen(true)  // open the story
    setstoryImage(user[idx].picture.medium) //;



    const interval = setInterval(()=>{
      if(grow<=100){
        grow+=1;
        BarRef.current.style.width = `${grow}%`
      }
     
    },50)
    
    setTimeout(() => {
      clearInterval(interval)
      setStoryopen(false) 
      setstoryImage(""); 
    }, 5000);
  }


  const CloseHandler =()=>{
    setStoryopen(false) // close the story
    setstoryImage("") // reset the image url
  }

  return (
    <div className='h-screen flex items-center justify-center  w-screen bg-zinc-200' >
      <div className={`h-96 w-72 border-2 border-zinc-500 ${Storyopen ? "hidden" :""} p-2 rounded-md`} >
      <h1 className='text-2xl font-semibold text-zinc-500  ' >Instagram</h1>
      <div className='story w-full flex overflow-auto gap-1  ' >
        {
          user.map( (user,idx) =>{
            return <Story key={idx} idx={idx} StoryHandler={StoryHandler} thumbnail={user.picture.large} />
            
          } )
        }
      </div>

      </div>

      <div className={`h-96 w-72 border-2 border-zinc-500 relative  overflow-hidden  ${!Storyopen ? "hidden": ""} rounded-md`} >
        <div className='absolute mt-1 rounded-lg px-1  h-2 w-full  border-zinc-600' >
          <div ref={
            BarRef
          } className='h-full w-0 bg-zinc-800 rounded-lg ' ></div>
        </div>
        <img className='h-full w-full object-cover'  src={storyImage} alt="" />
        <button onClick={CloseHandler} className='px-3 py-1  text-white top-4 right-2 text-zinc-700 font-bold  rounded-md absolute' >Close</button>

      </div>

    </div>
  )
}

export default App