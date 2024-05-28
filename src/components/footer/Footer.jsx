import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <footer className='bg-[#222933] py-4'>
        <div className="pb-[15vh] max-lg:pb-0 max-md:pb-2 container w-[80vw] mx-auto flex justify-between items-start max-md:flex-col max-md:items-center max-lg:flex-col max-lg:items-center">
            <div className="logo">
                <NavLink to="/" className="w-[300px] max-md:w-[200px]"><img src={logo} alt="" className='w-[300px]'/></NavLink>
            </div>
            <div className="footer_menu flex justify-between items-center gap-[100px] mt-[30px]  max-md:mt-0 max-md:flex-col max-md:gap-5 max-lg:mt-0 max-lg:flex-col max-lg:gap-5">
                <li className="footer_menu_item"><NavLink to="/">Home</NavLink></li>
                <li className="footer_menu_item"><NavLink to="/Fantastik">Fantastik</NavLink></li>
                <li className="footer_menu_item"><NavLink to="/Anime">Anime</NavLink></li>
                <li className="footer_menu_item"><NavLink to="/Drama">Drama</NavLink></li>
                <li className="footer_menu_item"><NavLink to="/Horror">Horror</NavLink></li>
            </div>
        </div>
    </footer>
  )
}

export default Footer