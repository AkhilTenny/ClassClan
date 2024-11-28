import React from 'react'
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className='bg-gradient-to-t from-customBlue-1 to-customPink-2'>
      <section className='mx-auto w-screen  sm:w-screen  md:w-3/4 lg:w-1/2 shadow-2xl '>
        <Outlet/>
      </section>  
    </div>
    
  )
}

export default Layout
