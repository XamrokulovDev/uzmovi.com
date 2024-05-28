import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import Cards from '../cards/Cards';
const Header = () => {
    const {data} = useContext(UserContext); 
  return (
    <div>
            <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-[70vh] mb-10"
      >
       {
        data?.map((item)=>{
            return(
                <SwiperSlide key={item._id} className='relative'>
                    <img src={item.backdrop_path} className='w-full' alt="" />
                    <div className='absolute bottom-0 left-0 bg-[#333333a1] p-10 text-white'>
                    <h3 className='text-[25px]'>{item.original_title}</h3>
                    <p className='text-[20px]'>{item.overview.slice(0,120)}...</p>
                    <p className='text-[20px]'>{item.first_aired}</p>
                    <button className='movie_btn'>See movie</button>
                    </div>
                </SwiperSlide>
            )
        })
       }
      </Swiper>
      <h1 className='text-[40px] text-center my-10'>Movies</h1>
      <Cards/>
    </div>
  )
}

export default Header