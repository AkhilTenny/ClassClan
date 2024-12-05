import React from 'react'
import {useToken} from '../../../context/AuthContext'


function AccountModal({isClose}) {
  const {logout} = useToken()
  return (
    <div className='flex flex-col items-end justify-between absolute right-0 bg-gradient-to-b from-customPink-3 to-customPink-5 z-10 rounded-lg bg-customPink-2 p-2 w-52 h-52'>
            <button onClick={isClose} className='rounded-lg bg-white px-2 '>✖</button>
            <button onClick={   
              logout
              } 
              className='bg-customBlue-7 w-full p-2 text-white hover:bg-customBlue-6 rounded-md'>
                logout
                </button>
    </div> 
  )
}

export default AccountModal
