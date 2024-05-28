import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'

const RouterLayout = () => {
  return (
    <>
        <header>
            <Navbar/>
                <div className='container mx-auto my-6'>
                <Outlet/>
                </div>
            <Footer/>
        </header>
    </>
  )
}

export default RouterLayout