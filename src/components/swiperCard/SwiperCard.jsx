import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext';
import { NavLink } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import "./swiperCard.css"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
const SwiperCard = () => {
    const {data,setCard} = useContext(UserContext); 

       const oneYearAgo = new Date();
       oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 3);
   

       const filteredData = data?.filter((item) => {
           const releaseDate = new Date(item.first_aired);
           return releaseDate >= oneYearAgo;
       });
  return (
    <Swiper
    slidesPerView={3}
    spaceBetween={30}
    autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination,Autoplay]}
    className="mySwiper"
  >
    {
        filteredData?.map((item)=>(
          <SwiperSlide className="card transition-all hover:-translate-y-[25px] shadow-handle" key={item._id}>
            <img className='w-full' src={item.backdrop_path} alt="" />
            <h3>{item.original_title}</h3>
            <p>{item.overview.slice(0,120)}...</p>
            <p>{item.first_aired}</p>
            <NavLink to="/card" className='movie_btn' onClick={()=>setCard(item)}>See movie</NavLink>

          </SwiperSlide>
        ))
      } 
  </Swiper>
  )
}

export default SwiperCard