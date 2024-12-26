import React from 'react'

const App = () => {
  const data=[
    {
      "id": 1,
      "name": "Amit Sharma",
      "designation": "Software Engineer",
      "email": "amit.sharma@example.com",
      "imageUrl": "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      "id": 2,
      "name": "Priya Singh",
      "designation": "Project Manager",
      "email": "priya.singh@example.com",
      "imageUrl": "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      "id": 3,
      "name": "Ravi Verma",
      "designation": "UX Designer",
      "email": "ravi.verma@example.com",
      "imageUrl": "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      "id": 4,
      "name": "Neha Kapoor",
      "designation": "Data Analyst",
      "email": "neha.kapoor@example.com",
      "imageUrl": "https://randomuser.me/api/portraits/women/4.jpg"
    }
  ]
  




  return (
    <div className='p-6 h-screen w-full bg-black flex justify-between items-center'>

     {data.map((elem)=>{
       return(
        <div className=' rounded-2xl p-8 h-[22vw] w-[17vw] bg-white flex flex-col gap-4 items-center '>
        <div className='h-[8vw] w-[8vw] rounded-[50%] bg-gray-500 overflow-hidden'>
            <img className='object-cover h-[100%] w-[100%]' src={elem.imageUrl} alt="" />
        </div>
        <h1 className='text-medium font-semibold'>{elem.name}</h1>
        <h1 className='text-gray-300 font-semibold '> {elem.designation} </h1>
        <p className=''>{elem.email}</p>
     </div>
       )
     })}
      
    </div>
  )
}

export default App
