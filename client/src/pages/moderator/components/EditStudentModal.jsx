import React, { useRef,useState,useEffect } from 'react'
import { useApi } from '../../../action/api/moderatorAPIs'
import EditSudentConfirmModal from './EditSudentConfirmModal'

function EditStudentModal(props) {

    const nameInput = useRef(null)
    const rollNoInput = useRef(null)
    const dobInput = useRef(null)
    const admNoInput = useRef(null)
    const phoneNoInput = useRef(null)
    const emailInput = useRef(null)
    const imageInput = useRef(null)
    const {getStudentInfo} = useApi();

     const [editPass,setEditPass] = useState(false)

     

      const [confirmModal,setConfirmModal] = useState(false)
      const [details,setdetails]= useState({
          name:null,
          phoneNo:null,
          dob:null,
          admNo:null,
          email:null,
          rollNo:null,

        })
      const [apiDetails,setApiDetails]= useState({
          name:null,
          phoneNo:null,
          dob:null,
          admNo:null,
          email:null,
          rollNo:null,
          passcode:null

      })
    

      useEffect(()=>{
        if(details.name == apiDetails.name &&
           details.rollNo == apiDetails.rollNo && 
           details.email == apiDetails.email && 
           details.admNo == apiDetails.admNo  && 
           details.phoneNo == apiDetails.phoneNo &&
           details.dob == apiDetails.dob 
    
          ){
          setEditPass(false)
        }else{
          setEditPass(true)

        }
      },[details,editPass])


      useEffect(()=>{
        getStudentInfo(props.studentId).then(res=>{
          setInputs(res)
        }).catch(err=>{
          props.closeEditModal()
        })
      },'')
      const setInputs = (studentInfo)=>{
        setApiDetails({
          name:studentInfo[0].studentName,
          phoneNo:studentInfo[0].phoneNo,
          dob:studentInfo[0].dob,
          admNo:studentInfo[0].admNo,
          email:studentInfo[0].email,
          rollNo:studentInfo[0].rollNo,
          passcode:studentInfo[0].rollNo
        })
        setdetails({
          name:studentInfo[0].studentName,
          phoneNo:Number(studentInfo[0].phoneNo),
          dob:studentInfo[0].dob,
          admNo:studentInfo[0].admNo,
          email:studentInfo[0].email,
          rollNo:studentInfo[0].rollNo
        })
        nameInput.current.value = studentInfo[0].studentName
        rollNoInput.current.value = studentInfo[0].rollNo
        emailInput.current.value = studentInfo[0].email
        admNoInput.current.value = studentInfo[0].admNo
        phoneNoInput.current.value = studentInfo[0].phoneNo
        dobInput.current.value = studentInfo[0].DOB
        
    
    
      }

      console.log(apiDetails)

      const clearInputs = ()=>{
        setdetails({
          name:null,
          phoneNo:null,
          dob:null,
          admNo:null,
          email:null,
          rollNo:null
        })
        nameInput.current.value = ""
        rollNoInput.current.value = ""
        emailInput.current.value = ""
        admNoInput.current.value = ""
        phoneNoInput.current.value = ""
        dobInput.current.value = ""
        imageInput.current.value = ""
        
    
    
      }
    

      const formChanged=(name,value)=>{
        
        switch(name){
          case "name":
            setdetails((previousState)=>{
              return{
                ...previousState,name:value
              }
            })
            break;
            case "phoneNo":
              setdetails((previousState)=>{
                return{
                  ...previousState,phoneNo:value
                }
              })
              break;
              case "dob":
                console.log("set akkam")
                setdetails((previousState)=>{
                  return{
                    ...previousState,dob:value
                  }
                })
                break;
                case "admNo":
                  setdetails((previousState)=>{
                    return{
                      ...previousState,admNo:value
                    }
                  })
                  break;
                  case "email":
                    setdetails((previousState)=>{
                      return{
                        ...previousState,email:value
                      }
                    })
                    break;
                    case "rollNo":
                    setdetails((previousState)=>{
                      return{
                        ...previousState,rollNo:value
                      }
                    })
                    break;
        }
      }
  
  return (
    <div className='fixed inset-0 w-screen h-screen bg-gray-300 bg-opacity-50 flex justify-center items-center'>
      <div className='p-5 lg:w-1/2 w-full'>
     
        <div className=' rounded-xl w-full  bg-gray-200  p-5 shadow-xl' >
        <div className='flex justify-end w-full'>
            <button
             className='cursor-pointer rounded-lg py-1 px-2  bg-customPink-6 text-white'
             onClick={()=>{
              props.closeEditModal()
             }
            }
             >X</button>
          </div>
          <h1 className='text-2xl mb-5 font-bold'>Add Student:</h1>
          <div className=' md:flex flex flex-col md:flex-row justify-center items-center w-full'>
           <div className="setConfirmModal'flex lg:justify-start justify-start items-center w-full md:w-1/2">
            <h1 >Student&nbsp;Passcode:&nbsp;{apiDetails.passcode}</h1>
              
           </div>
            <div className='flex md:justify-start justify-between mt-2 items-center w-full md:w-1/2'>
              <h1>Name: &nbsp;</h1>
              <input 
                onChange={(e)=>{
                  formChanged(e.target.name,e.target.value)
                }}
                type="text"
                name='name'
                className='rounded-md p-1'
                ref={nameInput}
              />
            </div>
            
          </div>

          <div className='md:flex justify-around items-center mt-2'>
            <div className='flex md:justify-start justify-between w-full md:w-1/2'>
              <h1>Phone&nbsp;No:&nbsp;</h1>
              <input 
                onChange={(e)=>{
                  formChanged(e.target.name,e.target.value)
                }}
                type="number" 
                name="phoneNo" 
                className='rounded-md p-1'
                ref={phoneNoInput}

              />
            </div>
            <div className='flex md:justify-start justify-between mt-2 w-full md:w-1/2'>
              <h1>Date&nbsp;Of&nbsp;Birth:&nbsp;</h1>
              <input 
                onChange={(e)=>{
                  console.log("heeelo")
                  formChanged(e.target.name,e.target.value)
                }}
                type="date"
                name="dob" 
                className='rounded-md p-1' 
                ref={dobInput}
              />
            </div>
           
          </div>

          <div className='md:flex justify-around items-center mt-2'>
            <div className='flex md:justify-start justify-between  w-full md:w-1/2'>
              <h1>Addmission&nbsp;No:&nbsp;</h1>
              <input 
                onChange={(e)=>{
                  formChanged(e.target.name,e.target.value)
                }}
                type="number" 
                name="admNo" 
                className='rounded-md p-1 w-32'
                ref={admNoInput}

              />
            </div>
            <div className='flex md:justify-start justify-between  w-full md:w-1/2 mt-2'>
              <h1>Email&nbsp;Id:&nbsp;</h1>
              <input 
                onChange={(e)=>{
                  formChanged(e.target.name,e.target.value)
                }}
                type="email"
                name="email"  
                className='rounded-md p-1'
                ref={emailInput}
              />
            </div>
           
          </div>

          <div className='md:flex justify-between items-center mt-2'>
            <div className='flex md:justify-start justify-between  items-center w-full md:w-1/2'>
              <h1>RollNo:&nbsp;</h1>
              <input 
                onChange={(e)=>{
                  formChanged(e.target.name,e.target.value)
                }}
                type="number" 
                name="rollNo" 
                className='rounded-md p-1 w-16'
                ref={rollNoInput}

              />
            </div>
            <div>
                {
                  editPass ?
                  <button
                  className='shadow-xl bg-gradient-to-b text-white from-customPink-3 to-customPink-6  bg-lime-500 p-2 rounded-md mt-4'
                  onClick={()=>{
                    setConfirmModal(true)
                  }}
                >
                 Edit
                </button> :
                 <button
                 className='shadow-xl bg-gradient-to-b text-white cursor-not-allowed from-gray-400 to-gray-500  bg-lime-500 p-2 rounded-md mt-4'
                 
               >
                 Edit
               </button>
                }


             
            </div>
            {
              confirmModal && <EditSudentConfirmModal modalAction={setConfirmModal} studentId={props.studentId}  studentInfo={details} closeEditModal = { props.closeEditModal}/>

            }
            
           
          </div>


           
        </div>
      </div>
    </div>
  )
}

export default EditStudentModal
