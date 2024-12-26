import React from 'react'

const Status = ({idx,name,url,StoryHandler}) => {
  return (
    
        <div className=' px-4 h-[7vw] w-full   flex items-center gap-40 '>
            <div className='h-[6vw] w-[6vw] rounded-full bg-white overflow-hidden'>
                <img onClick={()=>{StoryHandler(idx)}} className='h-full w-full object-cover' src={url} alt="" />
            </div>
            <h1 className='text-white font-semibold '>{name}  </h1>
          </div>
    
  )
}

export default Status
