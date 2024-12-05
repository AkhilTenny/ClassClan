import React, { useState } from 'react'
import axios from 'axios'
import { useToken } from '../../../context/AuthContext';

const baseURL = process.env.REACT_APP_BASE_URL;
 

function AddClassModal() {
  const {modToken} = useToken()
  const [className,setClassName]=  useState(null)
  const classNameTypo = (value)=>{
      setClassName(value)
  }
  const addClassAcion = async()=>{
    const headers = {
      'Content-Type': 'application/json',
      'authorization': modToken,
    }
    const body = {
      className:className
    }
    axios.post(`${baseURL}/moderator/addClass`,body,{headers})

  }
  
  return (
    <div className='flex flex-col  items-end justify-between z-10 bottom-0 rounded-lg bg-gradient-to-t from-customPink-3 to-customPink-5 shadow-lg p-2 w-52 h-36'>
      <div className='w-full flex justify-between '>
        <h1 className='text-lg'>Class Name:</h1>
        <button className='rounded-lg bg-white px-2 '>✖</button>
      </div >
      <div>
      <input onChange={(e)=>{classNameTypo(e.target.value)}} className='p-2 w-full rounded-md ' type="text" />
      </div>
      <div>
        <button onClick={addClassAcion} className='p-2 rounded-md bg-customPink-4'>add class</button>
      </div>

      </div>
      
  )
}

export default AddClassModal
