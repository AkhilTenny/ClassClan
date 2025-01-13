import React, { useEffect, useState } from 'react'
import { useApi } from '../../../action/api/moderatorAPIs';
import { useParams } from 'react-router-dom';

function AddSubjectModal(props) {
  const {id} = useParams();
  const {addSubject} = useApi(); 
  const [subjectDetails,setSubjectDetails] = useState({
    subject:null,
    subjectName:null,
    teacher:null
  });

  const [addPass,setAddPass] = useState(false)
  const [duplicateError,setDuplicateError] = useState(false)
  const [finalPass,setFinalPass] = useState(false)

  function addClassAction(){
    addSubject(id,subjectDetails).then(res=>{
      props.closeModal()
    })
  }

  function formChanged(item,value){
     
    
        setSubjectDetails((previousState)=>{
          return{
            ...previousState,[item]:value
          }
        })
      }
      useEffect(()=>{
        console.log(subjectDetails)

        setAddPass(Object.values(subjectDetails).every(value => value !== null && value !== '' && value !== undefined));
        setDuplicateError(props.subjects.some((value)=>subjectDetails.subjectName == value.subjectName))
        setFinalPass(addPass && !duplicateError)

      },[subjectDetails,duplicateError,addPass])
  
  return (
    <div className='fixed inset-0 w-screen h-screen bg-gray-300 bg-opacity-50 flex justify-center items-center'>
              <div className='p-5 bg-customPink-1 rounded-md lg:w-1/2 w-3/4'>
                  <div className='flex justify-end'>
                <button
                  className='cursor-pointer rounded-lg py-1 px-2  bg-customPink-6 text-white'
                  onClick={()=>{
                    props.closeModal()
                  }
                  }
                >X</button>
              </div>
            <h2 className='text-xl font-bold'>Add Subject</h2>
            <div >
              <div className='lg:flex md:flex mt-2 justify-between'>
                <h2>Subject Short Name:</h2>
                <input type="text" 
                    className='rounded-md p-1 '

                  onChange={(e)=>{
                    formChanged("subject",e.target.value)
                  }}
                />
              </div>
              
              <div  className='lg:flex md:flex mt-2 justify-between'>
                <h2>Subject Full Name:</h2>
                <input type="text" 
                    className='rounded-md p-1'

                  onChange={(e)=>{
                    formChanged("subjectName",e.target.value)
                  }}              
                />
              </div>
              <div  className='lg:flex md:flex mt-2 justify-between'>
                <h2>Teacher:</h2>
                <input type="text" 
                  className='rounded-md p-1 '

                  onChange={(e)=>{
                    
                    formChanged("teacher",e.target.value)
                  }}                  
                  />
              </div>
            </div>
            {
                  finalPass ?
                  <button
                  className='shadow-xl bg-gradient-to-b text-white from-customPink-3 to-customPink-6  bg-lime-500 p-2 rounded-md mt-4'
                  onClick={addClassAction}
                >
                 Add Subject
                </button> :
                 <button
                 className='shadow-xl bg-gradient-to-b text-white cursor-not-allowed from-gray-400 to-gray-500  bg-lime-500 p-2 rounded-md mt-4'
                 
               >
                  Add Subject
               </button>
                }
                {
                  duplicateError &&
                  <div className='w-full flex  text-red-700 mt-3'>
                  <h1>Subject called "{subjectDetails.subjectName}" already exits. &#9888;</h1>
                  </div>
                }
            </div>
            

    </div>
  )
}

export default AddSubjectModal
