import React from 'react'
import { useState } from 'react'
import avatarLogo from "../../../assets/avatar-logo.png" 
import AccountModal from './AccountModal'

function Header() {

  const [ModalOpen,setModalOpen] = useState(false)
  function isModalOpen(){
    setModalOpen(true)
  }
  function isModalClose(){
    setModalOpen(false)
  }
  return (
    <div className='flex w-full justify-between h-16 items-center bg-gradient-to-t from-customPink-3 to-customPink-5'>
        <h1 className='text-xl ml-3 font-bold cursor-pointer'>Moderator: AKhil</h1>
        <div className='relative  '>
          <img onClick={isModalOpen} className=' w-10 h-10 mr-5 cursor-pointer' src={avatarLogo} alt="" />
          {
            ModalOpen?
            <AccountModal isClose={isModalClose}/>:
          <div></div>
          }
          
        </div>
        
      </div>
  )
}

export default Header
