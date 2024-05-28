import React from 'react'
import SwiperCard from '../swiperCard/SwiperCard'

const Card = ({card}) => {
  return (
    <>
    <div key={card._id} className='flex justify-between items-center max-md:flex-col gap-28 max-md:gap-3 my-10 max-md:my-1 max-lg:flex-col max-lg:gap-3 max-lg:my-1'>
      <img src={card.backdrop_path} className='w-1/2 max-md:w-full max-lg:w-full' alt="" />
       <div className='max-md:w-full'>
        <h1 className='text-[30px] my-10'>{card.original_title}</h1>
        <p className='my-10 text-[20px]'>{card.overview}</p>
        <p className='text-[20px]'>{card.first_aired}</p>
      </div>    
    </div>
   <div className='mt-52'>
   <SwiperCard/>
   </div>
    </>
  )
}

export default Card