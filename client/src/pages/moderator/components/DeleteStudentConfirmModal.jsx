import React, { useEffect,useState } from 'react'
import { useApi } from '../../../action/api/moderatorAPIs'


function DeleteStudentConfirmModal(props) {
  const {getStudentInfo} = useApi();
  const {deleteStudent} = useApi(); 
  const [studentInfo,setStudentInfo] = useState([]);


  useEffect(()=>{
    getStudentInfo(props.studentId).then(res=>{
      setStudentInfo(res[0])
      
    }).catch(err=>{
      props.closeDeleteModal(false)
    })
  },"")

  const deleteStudentAction =(studentId)=>{
    deleteStudent(studentId).then(res=>{
      props.closeDeleteModal(false)
    }).catch(err=>{
      alert(err)
    })
  }
  return (
    <div className='fixed inset-0 w-screen h-screen bg-gray-300 bg-opacity-50 flex justify-center items-center'>

        <div className='w-3/4 lg:w-1/2 p-5 bg-white rounded-2xl shadow-lg'>
          <div className='flex justify-end w-full'>
            <button
             className='cursor-pointer rounded-lg py-1 px-2  bg-customPink-6 text-white'
             onClick={()=>{
              props.closeDeleteModal(false)
             }
            }
             >X</button>
          </div>
          <div>
            <h1 className='text-2xl font-bold font-sans mb-5'>do you want to Delete {studentInfo.studentName} ?</h1>
            
           
          </div>

          <div className='flex justify-between mt-5'>
            <button 
            className='p-2 bg-customPink-6 shadow-lg hover:bg-customPink-5 rounded-lg text-white'
            onClick={()=>{
              props.closeDeleteModal(false)
            }}
            >Cancel</button>
            
            
            <button 
            className='p-2 bg-customBlue-6 shadow-lg hover:bg-customBlue-5  rounded-lg text-white'
            onClick={
              ()=>{
                deleteStudentAction(props.studentId)
              }
            }
            >Delete</button>
          </div>
        </div>
      
    </div>
  )
}

export default DeleteStudentConfirmModal
