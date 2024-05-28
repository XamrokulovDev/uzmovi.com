import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext';
import { NavLink } from 'react-router-dom';
import "./Cards.css"

const Cards = () => {
    const {data,setCard} = useContext(UserContext); 
  return (
    <div className='grid grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-2 gap-10'>
      {
        data?.map((item)=>(
          <div className="card transition-all hover:-translate-y-[25px] shadow-handle" key={item._id}>
            <img className='w-full' src={item.backdrop_path} alt="" />
            <div className="card_body px-5 py-3">
              <h3>{item.original_title}</h3>
              <p className='py-2'>{item.overview.slice(0,120)}...</p>
              <p>{item.first_aired}</p>
              <NavLink to="/card" className='movie_btn' onClick={()=>setCard(item)}>See movie</NavLink>
            </div>
          </div>
        ))
      } 
    </div>
  )
}

export default Cards