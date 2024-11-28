import React from 'react'
import Logo from "../assets/ClassClan-tranparent.png"
import { useNavigate } from 'react-router-dom'

function StartPage() {
  const Navigate = useNavigate();

  const continueAction = ()=>{
    Navigate("/signIn")
  }
  return (
    <div className="h-screen  bg-[url('./assets/background.jpg')] bg-cover bg-center w-full font-mono font-bold text-white">
      <div className='w-full shadow-xl flex justify-center   lg:h-32 bg-gradient-to-t from-customPink-2 to-customPink-4 '>
        <img className='w-3/4  lg:w-1/2  ' src={Logo} alt="" /> 
      </div>
      <div className=' w-full h-1/2 flex items-end'>
        <div className=' shadow-2xl mx-2 w-full h-20 backdrop-blur-xl rounded-full flex items-center justify-between'>
          <h1 className=' text-2xl ml-4'>Get Started...</h1>
          <button onClick={continueAction} className='shadow-xl w-16 mr-2 h-16 bg-gradient-to-b from-customPink-3 to-customPink-6 rounded-full flex items-center justify-center'>
              <h1  className='text-4xl'>&#x3e;</h1>
          </button>
        </div>
      </div>
    </div>
  )
}

export default StartPage
