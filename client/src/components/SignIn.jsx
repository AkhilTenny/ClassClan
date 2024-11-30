import React from 'react'
import { useState,useEffect } from 'react'

function SignIn(props) {

  const [formInputs,setformInputs] = useState({
    username:'',
    password:''  })

    console.log(formInputs)
  const [pass,setPass] = useState(false)

  useEffect(()=>{
      if(formInputs.username != '' && formInputs.password !=""){
        setPass(true)
      }else{
        setPass(false)
      }

  },[formInputs])


  return (
    
    <div className='bg-white h-screen '>
     
      <div className='w-full flex items-center justify-center h-1/2'>
          <div className='w-1/2 flex items-center justify-center'>
            <form action="/login" method="POST">
                <div className='flex flex-col'>
                  <label htmlFor="Username">Username:</label>
                  <input 
                  onChange={(e)=>{
                    setformInputs(
                      (previousValues)=>({
                        ...previousValues,
                        username:e.target.value
                      })
                    )
                  }} 
                  placeholder='Enter username' 
                  className='placeholder:text-white bg-gradient-to-b from-customBlue-3 to-customBlue-6 text-white shadow-x  ml-3 outline-none rounded-md p-1 lg:p-2' 
                  type="text" 
                  id="Username" 
                  name="Username" 
                  required/>
                </div>
                <div  className='flex flex-col mt-4'>
                  <label htmlFor="password">Password:</label>
                  <input 
                  onChange={(e)=>{
                    setformInputs(
                      (previousValues)=>({
                        ...previousValues,
                        password:e.target.value
                      })
                    )
                  }} 
                  placeholder='Enter password' 
                  className='placeholder:text-white bg-gradient-to-b from-customBlue-3 to-customBlue-6 text-white shadow-x  ml-3 outline-none rounded-md p-1 lg:p-2' 
                  type="password" 
                  id="password" 
                  name="password" 
                  required/>
                </div>
                <div className='flex justify-end w-full'>
                  {
                    pass?
                    <button 
                    className='shadow-xl  mr-2  bg-gradient-to-b from-customPink-3 to-customPink-6 rounded-md p-2 mt-4 flex items-center justify-center ' 
                    type="submit">
                      Sign In
                    </button>
                    :
                    <button 
                    className='shadow-xl  mr-2  bg-gradient-to-b from-gray-300 to-gray-600 rounded-md p-2 mt-4 flex items-center justify-center cursor-not-allowed' 
                    disabled={true} 
                    type="submit">
                      Sign In
                    </button>

                  }


                </div>
            </form>
          </div>
      </div>
     
      
    </div>
 
  )
}

export default SignIn
