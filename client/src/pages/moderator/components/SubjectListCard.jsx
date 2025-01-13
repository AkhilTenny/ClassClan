import React, { useState } from 'react'

function SubjectListCard(props) {


  return (
    <div 
    className='p-2 bg-white w-full mb-2 hover:bg-slate-100 cursor-pointer rounded-lg justify-between items-center bg-opacity-50 shadow-md '
    onClick={()=>{props.openModal(props.subject)}}
    >
      <div className='flex justify-center lg:h-56 h-24 items-center'>
        <h1 className='text-3xl'>{props.subject.subject}&#160;</h1>

      </div>

     
      
      
     
  </div>
  )
}

export default SubjectListCard
