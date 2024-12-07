import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useToken } from '../../../context/AuthContext';

const moderatorApiAction = require("../../../action/api/moderatorAPIs")

const baseURL = process.env.REACT_APP_BASE_URL;



function SignIn() {

  const navigate = useNavigate();
  const {  signIn, } = useToken();

  const [formInputs,setformInputs] = useState({
    username:'',
    password:''  })

  const [pass,setPass] = useState(false)

  useEffect(()=>{
      if(formInputs.username != '' && formInputs.password !=""){
        setPass(true)
      }else{
        setPass(false)
      }

  },[formInputs])

   const signInAction= ()=>{
    moderatorApiAction.moderatorSignIn(formInputs.username,formInputs.password).then((res)=>{
      signIn(res.token)
      navigate("/moderator/dashboard")
    }).catch(res=>{
      alert("check you login details again")
    })

   }

      
    



  
  
  
  return (
    
    <div className='bg-white h-screen '>
     
      <div className='w-full flex items-center justify-center h-1/2'>
          <div className='w-1/2 flex items-center justify-center'>
            <div >
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
                    onClick={signInAction}
                    className='shadow-xl  mr-2  bg-gradient-to-b from-customPink-3 to-customPink-6 rounded-md p-2 mt-4 flex items-center justify-center ' 
                    type="submit">
                      Sign In
                    </button>
                    :
                    <button 
                    className='shadow-xl  mr-2  bg-gradient-to-b from-gray-300 to-gray-600 rounded-md p-2 mt-4 flex items-center justify-center cursor-not-allowed' 
                    disabled={true} 
                    >
                      Sign In
                    </button>

                  }


                </div>
            </div>
          </div>
      </div>
     
      
    </div>
 
  )
}

export default SignIn
