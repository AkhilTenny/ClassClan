import React from 'react'
import avatarLogo from "../../assets/avatar-logo.png" 
import Modal from './components/Modal';

import { useState } from 'react'


const user = "Akhil"

function  Dashboard() {
  function isModalOpen(){
    setModalOpen(true)
  }
  function isModalClose(){
    setModalOpen(false)
  }
  const [ModalOpen,setModalOpen] = useState(false)
  return (
    <div className="h-screen bg-[url('./assets/background.jpg')] bg-cover bg-center">
      <div className='flex w-full justify-between h-16 items-center bg-gradient-to-t from-customPink-3 to-customPink-5'>
        <h1 className='text-xl ml-3 font-bold cursor-pointer'>Moderator: {user}</h1>
        <div className='relative  '>
          <img onClick={isModalOpen} className=' w-10 h-10 mr-5 cursor-pointer' src={avatarLogo} alt="" />
          {
            ModalOpen?
            <Modal isClose={isModalClose}/>:
          <div></div>
          }
          
        </div>
        
      </div>
      <div >
        <div className='pt-5'>
        <h1 className='text-xl ml-3 font-bold cursor-pointer'>Your classes:</h1>
        </div>
        <div className='w-full  px-5 '>
          <div className='rounded-md bg-gradient-to-r mt-5 from-customBlue-2 to-customPink-3 h-10 w-full opacity-65 shadow-md flex items-center justify-between'>
            <h1 className='ml-5'> S1 CT</h1>
            <button className='shadow-xl p-px bg-gradient-to-b from-customBlue-3 px-2 to-customBlue-6 mr-5 rounded-md '>Edit</button>

          </div>
          <div className='rounded-md bg-gradient-to-r mt-5 from-customBlue-2 to-customPink-3 h-10 w-full opacity-65 shadow-md flex items-center justify-between'>
            <h1 className='ml-5'>S3 CT</h1>
            <button className='shadow-xl p-px bg-gradient-to-b from-customBlue-3 px-2 to-customBlue-6 mr-5 rounded-md '>Edit</button>

          </div>
          <div className='rounded-md bg-gradient-to-r mt-5 from-customBlue-2 to-customPink-3 h-10 w-full opacity-65 shadow-md flex items-center justify-between'>
            <h1 className='ml-5'>S6 CT</h1>
            <button className='shadow-xl p-px bg-gradient-to-b from-customBlue-3 px-2 to-customBlue-6 mr-5 rounded-md '>Edit</button>

          </div>

        </div>
        <div className='p-5'>
        <button className='shadow-xl p-px bg-gradient-to-b from-customPink-4 px-2 to-customPink-5 mr-5 rounded-md '>Add Class +</button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
