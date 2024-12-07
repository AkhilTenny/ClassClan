import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useApi } from '../../../action/api/moderatorAPIs';




function SignUp() {
  const {moderatorSignUp} = useApi()


  const navigate = useNavigate();

  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [conPassword,setConPassword] = useState('')
  const [pass,setPass] = useState(false)

  useEffect(()=>{

    if(conPassword === "" || password ===""){
      setPass(false)
    }else if(conPassword === password){
      setPass(true)
    }else{
      setPass(false)
    }
    if(username === ""){
      setPass(false)
    }    

  },[conPassword,password,username])

  const signInAction =async()=>{

    moderatorSignUp(username,password).then(res=>{
      navigate(0)
    }).catch(res=>{
      alert(res.responce.data.message)
    })
  
    
  }

  return (
    <div>
       <div className='bg-white h-screen '>
      
      <div className='w-full flex items-center justify-center h-1/2'>
          
          <div className='w-1/2 flex items-center justify-center'>
          <div className='flex flex-col'> 
                <div className='flex flex-col mt-4'>
                  <label htmlFor="Username">Username:</label>
                  <input placeholder='Enter username' className='placeholder:text-white bg-gradient-to-b from-customBlue-3 to-customBlue-6 text-white shadow-xl  ml-3 outline-none rounded-md p-1 lg:p-2' type="text" id="Username" name="Username" required
                  onChange={(e)=>{
                    setUsername(e.target.value)
                  }}
                  />
                </div>
                <div className='mt-4 flex flex-col'>
                  <label htmlFor="password">Password:</label>
                  <input 
                   className='bg-gradient-to-b from-customBlue-3 placeholder:text-white to-customBlue-6 text-white shadow-xl  ml-3 outline-none rounded-md p-1 lg:p-2'
                   placeholder='Enter password'
                   type="password"
                   id="Password"
                   name="Password"
                   onChange={(e)=>{
                    setPassword(e.target.value)
                   }} 
                     required
                     />                </div>
                <div className='mt-4 flex flex-col'>
                  <label htmlFor="confirmPassword">Confirm Password:</label>
                  <input 
                   className='bg-gradient-to-b from-customBlue-3 placeholder:text-white to-customBlue-6  shadow-xl text-white 6 ml-3 outline-none rounded-md p-1 lg:p-2'
                   placeholder='Enter password again'
                   type="password"
                   id="confirmPassword"
                   name="confirmPassword"
                   onChange={(e)=>{
                    setConPassword(e.target.value)
                   }} 
                     required
                     />
                </div>
                <div className='flex justify-end w-full'>
                  {
                    pass ?
                    <button 
                    onClick={signInAction}
                     className='shadow-xl bg-gradient-to-b from-customPink-3 to-customPink-6  bg-lime-500 p-2 rounded-md mt-4' type="submit" >Sign Up</button> :
                    <button className='shadow-xl bg-gradient-to-b from-gray-300 to-gray-500  p-2 rounded-md mt-4 cursor-not-allowed' type="submit" disabled={true}>Sign Up</button>


                  }
                </div>
         </div>
          </div>
      </div>
     
      
    </div>
    </div>
  )
}

export default SignUp
