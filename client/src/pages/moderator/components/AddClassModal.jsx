import React, { useState } from 'react'
import { addClass } from '../../../action/api/moderatorAPIs';
import { useToken } from '../../../context/AuthContext';
import { useApi } from '../../../action/api/moderatorAPIs'; 

function AddClassModal() {
  const [className,setClassName]=  useState(null)
  const {addClass} = useApi()

  const {modToken} = useToken()

  const addClassAcion = ()=>{
   const body = {
      className:className
    }
    
    addClass(body).then(res=>{
      console.log(res)
    }).catch(res=>{
      console.log(res)
    })

  }

 
  
  return (
    <div className='flex flex-col  items-end justify-between z-10 bottom-0 rounded-lg bg-gradient-to-t from-customPink-3 to-customPink-5 shadow-lg p-2 w-52 h-36'>
      <div className='w-full flex justify-between '>
        <h1 className='text-lg'>Class Name:</h1>
        <button className='rounded-lg bg-white px-2 '>✖</button>
      </div >
      <div>
      <input onChange={(e)=>{setClassName(e.target.value)}} className='p-2 w-full rounded-md ' type="text" />
      </div>
      <div>
        <button onClick={addClassAcion} className='p-2 rounded-md bg-customPink-4'>add class</button>
      </div>

      </div>
      
  )
}

export default AddClassModal
