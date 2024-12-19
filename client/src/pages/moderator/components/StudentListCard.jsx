import React from 'react'

function StudentListCard(props) {


  return (
    <div className='p-2 bg-white flex w-full mb-2  rounded-lg justify-between items-center bg-opacity-50 shadow-md'>
      <div className='flex'>
        <h1>{props.index + 1}.&#160;</h1>
        <h1>{props.student.studentName}</h1>
      </div>
      <div>
        <h1>{props.student.email}</h1>
      </div>
      <div>
      <button className='bg-customBlue-8 py-1 px-2 rounded-md text-white '
      onClick={()=>{
        props.openEditModal(props.student.studentId)
      }}
      >Edit</button>
      <button className='bg-customPink-6 py-1 px-2 ml-2 rounded-md text-white '
        onClick={()=>{
          props.openDeleteModal(props.student.studentId)
        }}
      >
        Delete</button>

    </div>
     
  </div>
  )
}

export default StudentListCard
