import React from 'react'
import { useNavigate } from 'react-router-dom'

function ModeratorClassCard(props) {
  const navigate = useNavigate();
  const editAction=(classId)=>{
    navigate(`/moderator/editClass/${classId}`)
  }
  return (
    <div className='w-full  px-5 '>
    <div className='rounded-md bg-gradient-to-r mt-5 from-customBlue-2 to-customPink-3 h-10 w-full opacity-65 shadow-md flex items-center justify-between'>
      <h1 className='ml-5'> {props.class.className}</h1>
      <button className='shadow-xl p-px bg-gradient-to-b from-customBlue-3 px-2 to-customBlue-6 mr-5 rounded-md ' onClick={(e)=>{
        editAction(props.class.classId)
      }}>Edit</button>

    </div>
    

  </div>
  )
}

export default ModeratorClassCard
