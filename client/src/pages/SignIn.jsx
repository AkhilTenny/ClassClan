import React from 'react'
import Logo from "../assets/ClassClan-tranparent.png"

function SignIn() {
  return (
    <div className="h-screen flex flex-col  bg-[url('./assets/background.jpg')] bg-cover bg-center w-full font-mono font-bold text-white">
       <div className='w-full shadow-xl flex justify-center   lg:h-32 bg-gradient-to-t from-customPink-2 to-customPink-4'>
        <img className='w-3/4  lg:w-1/2  ' src={Logo} alt="" /> 
      </div>
      <div className='w-full h-1/2 flex items-end justify-center'> 
        <div className=" w-full p-8 m-2 rounded-full">
          <div className='mb-5'>
            <label htmlFor="userId">User Id: </label>
            <input className='lg:p-4 opacity-65 focus:outline-none shadow-xl bg-customPink-1 p-2 w-full rounded-full text-black' type="text" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input className= 'lg:p-4 opacity-65 focus:outline-none shadow-xl bg-customPink-1 p-2 w-full rounded-full text-black' type="password" />
          </div>
          <div className='flex justify-end'>
          <button className='shadow-xl mt-4 p-2 mr-2 bg-gradient-to-b from-customPink-3 to-customPink-6 rounded-full flex items-center justify-center'>SignIn</button>

          </div>
        </div>
        
          
      </div>
      <div className='flex-1 flex items-end justify-center pb-5'>
        <a className='underline text-sky-600 underline-offset-1' href='/moderator'>continue as moderator</a>

      </div>
    </div>
  )
}

export default SignIn
