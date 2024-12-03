import React from 'react'
import { useState } from 'react'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function ModSignIn() {
  const [option,setOption] = useState(true);


  return(
    <div className='bg-white'>
      <div className='w-full h-10 flex justify-center items-center bg-gradient-to-t from-customBlue-3 to-customBlue-5 font-mono'>
        <h1 className='text-xl text-bold'>Moderator</h1>

      </div>
      {
          option ?
          <div className='w-full flex text-xl font-bold ' >
            <div className=' w-full flex  font-bold p-5 pt-10 cursor-pointer '>
                <div onClick={()=>setOption(true)} className='rounded-l-xl w-1/2 bg-gradient-to-b from-customBlue-3 to-customBlue-6 text-white shadow-xl h-10 flex items-center justify-center'>
                <h1>SignIn</h1>
              </div>
              <div onClick={()=>setOption(false)} className='rounded-r-xl w-1/2 bg-gradient-to-b from-customBlue-1 to-customBlue-3 h-10  flex items-center justify-center'>
                <h1 className=''>SignUp</h1>
              </div>
            </div>
        </div> : 
        <div className='w-full flex text-xl font-bold ' >
        <div className=' w-full flex  font-bold p-5 pt-10 cursor-pointer '>
            <div onClick={()=>setOption(true)} className='rounded-l-xl w-1/2 bg-gradient-to-b from-customBlue-1 to-customBlue-3   h-10 flex items-center justify-center'>
            <h1>SignIn</h1>
          </div>
          <div onClick={()=>setOption(false)} className='rounded-r-xl w-1/2 bg-gradient-to-b from-customBlue-3 to-customBlue-6 shadow-xl text-white h-10 flex items-center justify-center'>
            <h1 className=''>SignUp</h1>
          </div>
        </div>
    </div>
        }
        
        {
          option ?
          <SignIn/> : <SignUp/>
        }
    </div>
  
  )
}

export default ModSignIn
