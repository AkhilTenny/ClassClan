import React, { useEffect, useRef, useState } from 'react'
import Logo from "../../assets/ClassClan-tranparent.png"
import { userApi } from '../../action/api/userAPIs'
import { useUserToken } from '../../context/userAuthContext'
import { useNavigate } from 'react-router-dom'

function SignIn() {

  const navigate = useNavigate();
  const {signInUser} = userApi()
  const {signIn} = useUserToken();

  const [credentials,setCredentials] = useState({
    admNo:null,
    passcode:null,
    userName:null
  })
  const [finalPass,setFinalPass] = useState(false)



  const formChanged=(item,value)=>{
    setCredentials((previousState)=>{
      return{
        ...previousState, [item]:value
      }
    })
  }

  const signInAction =()=>{
    signInUser(credentials).then(res=>{
      signIn(res.token)
      navigate('/dashboard')
      
    })
  }


  useEffect(()=>{
    setFinalPass(Object.values(credentials).every(value => value != null && value != '' && value != undefined))
  },[credentials])


  return (
    <div className="h-screen flex flex-col  bg-[url('./assets/background.jpg')] bg-cover bg-center w-full font-mono font-bold text-white">
       <div className='w-full shadow-xl flex justify-center   lg:h-32 bg-gradient-to-t from-customPink-2 to-customPink-4'>
        <img className='w-3/4  lg:w-1/2  ' src={Logo} alt="" /> 
      </div>
      <div className='w-full h-1/2 flex items-end justify-center'> 
        <div className=" w-full p-8 m-2 rounded-full">
          <div className='mb-5'>
            <label htmlFor="userId">User Id: </label>
            <input 
              name='admNo'
              className='lg:p-4 opacity-65 focus:outline-none shadow-xl bg-customPink-1 p-2 w-full rounded-full text-black' 
              type="text" 
              onChange={(e)=>{formChanged("admNo",e.target.value)}}
            />
          </div>
          <div className='mb-5'>
            <label htmlFor="userId">User Name: </label>
            <input 
              name='userName'
              className='lg:p-4 opacity-65 focus:outline-none shadow-xl bg-customPink-1 p-2 w-full rounded-full text-black' 
              type="text" 
              onChange={(e)=>{formChanged("userName",e.target.value)}}
            />
          </div>
          <div>
            <label htmlFor="password">Passcode:</label>
            <input 
              name='passcode'
              className= 'lg:p-4 opacity-65 focus:outline-none shadow-xl bg-customPink-1 p-2 w-full rounded-full text-black' 
              type="number" 
              onChange={(e)=>{formChanged("passcode",e.target.value)}}
            />
          </div>
          <div className='flex justify-end'>
            {
              finalPass?
              <button className='shadow-xl mt-4 p-2 mr-2 bg-gradient-to-b from-customPink-3 to-customPink-6 rounded-full flex items-center justify-center'
              onClick={signInAction}

              >SignIn</button>
                :
              <button 
                className='shadow-xl mt-4 p-2 mr-2 bg-gradient-to-b cursor-not-allowed from-gray-500 to-gray-600 rounded-full flex items-center justify-center'
              
              >SignIn</button>

            }

          </div>
        </div>
        
          
      </div>
      <div className='flex-1 flex items-end justify-center pb-5'>
        <a className='underline text-sky-600 underline-offset-1' href='/moderator/Dashboard'>continue as moderator</a>

      </div>
    </div>
  )
}

export default SignIn
