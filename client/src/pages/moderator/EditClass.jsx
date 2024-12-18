import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useApi } from '../../action/api/moderatorAPIs'
import Header from './components/Header'


function EditClass() {
  const {id} = useParams()
  const {getClassInfo}  = useApi();
  const navigate = useNavigate();
  const studentsClickAction=()=>{
    navigate('studentsList')
  }
  useEffect(()=>{
    getClassInfo(id).then((res)=>{
      console.log(res.data.response[0].className)
    }).catch(err=>{
      console.log(err)
    })
    
  },[''])

  return (
    <div className='w-full h-screen'>
    <Header/>
    <div  className='p-4 ' >
    <div>
        <h2 className='text-lg mt-4'>Class Name:</h2>
        <input  type="text" name="className" className='p-2 w-full rounded-md'  />
      </div>

      <div>
        <h2 className='text-lg mt-4'> College/School:</h2>
        <input type="text" name="className"  className='p-2 w-full rounded-md' />
      </div>

      <div className='w-full flex mt-4'>
        <div className='w-1/2 pr-2'>
            <h2 className='text-lg'>Starting Year:</h2>
            <input type="text" name="className" className='p-2 w-full rounded-md'   />
         </div>
         <div className='w-1/2 pl-2'>
            <h2 className='text-lg'>Ending Year:</h2>
            <input type="text" name="className" className='p-2 w-full rounded-md' />
         </div>
      </div>
      <div className='flex '>
      <div 
      className=" bg-[url('./assets/students.jpeg')] bg-cover bg-center w-1/2 h-52 lg:h-64 mt-5 opacity-75 shadow-lg   rounded-lg cursor-pointer"
      onClick={studentsClickAction}
      >
          <div className='w-full h-full backdrop-brightness-120 bg-white/10  rounded-lg flex justify-center items-center'>
            <h1 className='[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] text-3xl font-mono text-black font-bold'>Students</h1>
            </div>

        </div>
        <div 
        className=" bg-[url('./assets/subjects.jpeg')] bg-cover bg-center w-1/2 h-52 lg:h-64 mt-5 opacity-75 shadow-lg  ml-5 rounded-lg cursor-pointer"
        
        >
          <div className='w-full h-full backdrop-brightness-120 bg-white/20  rounded-lg flex justify-center items-center'>
            <h1 className='[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] text-3xl font-mono text-black font-bold'>Subjects</h1>
            </div>

        </div>
      </div>
      

    </div>
      
    </div>
  )
}

export default EditClass
