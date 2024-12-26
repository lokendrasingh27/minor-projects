import React from 'react'
import { useState } from 'react';

const App = () => {
  const teams = [
    "Mumbai Indians",
    "Chennai Super Kings",
    "Royal Challengers Bangalore",
    "Kolkata Knight Riders",
    "Delhi Capitals",
    "Punjab Kings",
    "Rajasthan Royals",
    "Sunrisers Hyderabad",
    "Lucknow Super Giants",
    "Gujarat Titans"
  ];

const [winner , setWinner ] = useState("")

const generateWinner = () => {
  const randomTeamIndex = Math.floor(Math.random() * teams.length);
  setWinner(teams[randomTeamIndex]);
}
  return (
    <div className=' h-screen w-full flex flex-col items-center justify-evenly bg-black '>
      <div className='h-[10vw] w-full  flex flex-col gap-20 items-center justify-center'>
        <h1 className='text-white text-6xl font-bold text-red-400'>TATA IPL 2025 Winner</h1>
      <h1 className='text-4xl text-white font-bold '>{winner}</h1>
      </div>
      <button onClick={generateWinner} className='text-white rounded-2xl text-2xl px-8 py-3 bg-blue-500 font-semibold'>Predict Winner</button>
    </div>
  )
}

export default App
