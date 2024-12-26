import React, { useState } from 'react'
import Status from './Status'
import axios from 'axios'
import { useEffect } from'react'
import { useRef } from'react'

const App = () => {

  const [user, setUser] = useState([])
  const [Storyopen, setStoryopen] = useState(false)
const [storyImage, setstoryImage] = useState("")

const BarRef = useRef(null)
let grow=0;

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



    const abc = async ()=>{
      const response = await axios.get("https://randomuser.me/api/?results=5")
      setUser(response.data.results)
    }
  
    useEffect(()=>{
      abc()
    }, [])

   


  
  return (

    <div className='h-screen w-full bg-black flex items-center justify-center'>

      <div className={`scroll h-[30vw] w-[25vw] rounded-xl border-2 ${Storyopen ? "hidden" :""} border-green-500 overflow-y-auto  `}>
        <div className='h-[5vw] w-full bg-green-5 flex items-center  text-green-500 px-4 text-3xl font-bold'>What's App</div>
        <div><h1 className='text-white ml-6 font-bold text-xl'>STATUS</h1></div>
          <div className='status h-full w-full   overflow-auto'>
         {
           user.map((item, index) => (
             <Status  key={index} StoryHandler={StoryHandler} idx={index} name={item.name.first} url={item.picture.large} />
           ))
         }
         
          
          </div>
      </div>
      <div className={`h-[30vw] w-[25vw] border-2 border-zinc-500 relative  overflow-hidden  ${!Storyopen ? "hidden": ""} rounded-md`} >
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

export default App
