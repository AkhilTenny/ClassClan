import React from 'react'
import { useApi } from '../../../action/api/moderatorAPIs'
import { useParams } from 'react-router-dom';

function AddSudentConfirmModal({modalAction,studentInfo,clearInputs}) {
  const {id} = useParams();
  
  const {addStudent} = useApi();

  const addStudentAction = (studentInfo,id)=>{
    addStudent(studentInfo,id).then(response=>{
      alert(`${response.data.response.studentName} is now added`);
      modalAction(false)
      clearInputs();

    }).catch(err=>{

    })
  }
  return (
    <div className='fixed inset-0 w-screen h-screen bg-gray-300 bg-opacity-50 flex justify-center items-center'>

        <div className='w-3/4 lg:w-1/2 p-5 bg-white rounded-2xl shadow-lg'>
          <div className='flex justify-end w-full'>
            <button
             className='cursor-pointer rounded-lg py-1 px-2  bg-customPink-6 text-white'
             onClick={()=>{
              modalAction(false)
             }
            }
             >X</button>
          </div>
          <div>
            <h1 className='text-2xl font-bold font-sans mb-5'>do you want to add:</h1>
            {studentInfo.name}, {studentInfo.rollNo}, {studentInfo.phoneNo}, {studentInfo.admNo}, {studentInfo.dob}, {studentInfo.email}
           
          </div>

          <div className='flex justify-between mt-5'>
            <button 
            className='p-2 bg-customPink-6 shadow-lg hover:bg-customPink-5 rounded-lg text-white'
            onClick={()=>{
              modalAction(false)
            }}
            >cancel</button>
            
            
            <button 
            className='p-2 bg-customBlue-6 shadow-lg hover:bg-customBlue-5  rounded-lg text-white'
            onClick={
              ()=>{
                addStudentAction(studentInfo,id)
              }
            }
            >Add Student</button>
          </div>
        </div>
      
    </div>
  )
}

export default AddSudentConfirmModal
