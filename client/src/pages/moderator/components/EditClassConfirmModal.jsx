import React from 'react'
import { useApi } from '../../../action/api/moderatorAPIs'

function EditClassConfirmModal(props) {
  const {editClass} = useApi()
  const closeModal = ()=>{
    props.closeModal()
  }
  const editClassAction=()=>{
     editClass(props.id,props.details).then(res=>{
    }).catch(err=>{
      alert(err)
    })
    closeModal()
  }
  return (
    <div className='fixed inset-0 w-screen h-screen bg-gray-300 bg-opacity-50 flex justify-center items-center'>
        <div className='p-5 bg-white rounded-md '>
          <div className='flex justify-end'>
          <button
             className='cursor-pointer rounded-lg py-1 px-2  bg-customPink-6 text-white'
             onClick={()=>{
              closeModal()
             }
            }
             >X</button>
          </div>
          <div className='mt-5'>
            <h2>confirm before editing:</h2>
            {props.details.className},  {props.details.institution},  {props.details.sYear},  {props.details.eYear}
          </div>

          <div className='flex justify-between mt-5'>
          <button 
            className='p-2 bg-customPink-6 shadow-lg hover:bg-customPink-5 rounded-lg text-white'
            onClick={()=>{
              closeModal()
            }}
            >cancel</button>
            
          <button 
            className='p-2 bg-customBlue-6 shadow-lg hover:bg-customBlue-5  rounded-lg text-white'
            onClick={
             
                editClassAction
          
            }
            >Confirm</button>
          </div>
        </div>
    </div>
  )
}

export default EditClassConfirmModal
