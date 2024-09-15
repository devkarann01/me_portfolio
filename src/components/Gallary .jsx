// import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react';
import { SlArrowRight , SlArrowLeft } from "react-icons/sl";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../App.css'
import { EffectCoverflow,Pagination,Navigation } from 'swiper/modules';
import Image1 from '../assets/THM.jpg'
import Image2 from '../assets/THM.jpg'
import Image3 from '../assets/THM.jpg'
import Image4 from '../assets/THM.jpg'
import Image5 from '../assets/THM.jpg'
import Image6 from '../assets/THM.jpg'
import { useState } from 'react';
import {motion} from 'framer-motion'


function Gallary () {

   

    let links=[
       Image1,Image2,Image3,Image4
    ]


    let logo=[
        Image6 ,
      Image5,
      Image5,
      Image6 
    ]

    const [category, setCategory] = useState(links);

    const chooseCategory = () => {
        setCategory(links)
    }

    const chooseAnotherCategory=()=>{
        setCategory(logo)
    }
  return (
    <>
             <motion.div
        className=" text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8}}
        variants={{
          hidden: { opacity: 0, x: -150 },
          visible: { opacity: 1, y: 0, x:0 },
}}>
      <div className='py-10'>
    <div className='flex justify-center md:text-5xl text-3xl font-bold md:leading-15'>Gallary</div>
      <div className='flex justify-center text-lg pt-5 z-20 text-center px-5'>My Gallary has been a journey of self-discovery and growth. My work details are as follows.</div>
    </div>

   <div className='flex justify-center gap-10 mb-5 transition duration-500 ease-in '>
    <button onClick={chooseCategory} className='px-5 py-2  mt-5 hover:bg-red text-black transition duration-500 bg-white text-sm rounded-lg '>Designs</button>
    <button onClick={chooseAnotherCategory} className='py-2  px-5 mt-5 hover:bg-red text-black transition duration-500 bg-white text-sm rounded-lg'>Logo</button>
   </div>

     <Swiper 
     effect={'coverflow'}
     grabCursor={true}
     spaceBetween={30}
     slidesPerView={3}
     centeredSlides={true}
     loop={true}
     sliderPerView={'auto'}
     coverflowEffect={
        {
            rotate:0,
            stretch:0,
            depth:100,
            modifier:2.5,
        }
     }
    pagination={{el:'.swiper-pagination', clickable:true}}
    navigation={{ 
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
        clickable:true ,
    }}
     modules={[EffectCoverflow,Pagination,Navigation]}
     className="pt-[1rem] pb-[2rem] lg:mx-auto max-w-6xl md:mx-[1.5rem]"
     >
     {category.map(link=>(
        <SwiperSlide key={link.name}
        className='min-h-80 h-auto min-w-64 w-full'
        >
            <img  src={link} alt={link.name} 
             className =' h-auto min-w-64 w-full' 
              
             />
        </SwiperSlide>
     ))}


        <div className='slider-controller'>
         <div className=' slider-arrow swiper-button-white md:bg-black  hidden md:block'>
         <SlArrowLeft className='swiper-button-prev p-2 rounded-full '/>

         </div>
         

         <div className=' slider-arrow swiper-button-white  md:bg-white rounded-full hidden md:block '>
         <SlArrowRight className='swiper-button-next p-2 rounded-full '/>

         </div>
       <div className='swiper-pagination'></div>
        </div>

     </Swiper>
     </motion.div>
    </>
  )
}

export default Gallary 