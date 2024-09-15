import React from 'react'
import myImage1 from '../assets/THM.jpg'
import myImage2 from '../assets/THM.jpg'
import myImage3 from '../assets/THM.jpg'
function Other() {
  return (
    <>
        <div className='md:py-10  md:hidden'>
    <div className='flex justify-center md:text-5xl text-3xl font-bold md:leading-15 mt-10'>Other Skills </div>
      <div className='flex justify-center text-lg py-5 z-20 text-center px-5'>Sharing your ideas clearly is key in today's world. Here are some other skills I have ...</div>
    </div>

    <div className=" md:py-10 mt-10 md:grid md:grid-cols-2  gap-6 w-4/5 m-auto">
    <div className='hidden md:block '>
    <div className='md:text-5xl text-2xl font-bold'>Other <br></br><span className='md:text-7xl text-blue-500 py-3'>Skills</span> </div>
    <div className='md:text-2xl md:py-3 line-clamp-2 lg:line-clamp-none overflow-hidden text-sm '>
    Sharing your ideas clearly is key in today's world. Here are some other skills I have ...</div>
    </div>

  <div className='bg-white'>
  <img src={myImage1} className='object-fill md:h-80  w-full'/></div>
<div className='bg-white  max-h-80 '>
<img src={myImage2} className='object-fill md:h-80  w-full'/></div>
<div className='bg-white max-h-80'>
<img src={myImage3} className='object-fill md:h-80  w-full'/></div>
</div>
    </>
  )
}

export default Other