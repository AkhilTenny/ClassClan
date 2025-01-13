import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './components/Header';
import AddSudentConfirmModal from './components/AddSudentConfirmModal';


function AddStudent() {
  const [ confirmModal,setConfirmModal ] = useState(false);
  const [ addPass,setAddPass ] = useState(false);
  const {id} = useParams();
  const nameInput = useRef(null)
  const rollNoInput = useRef(null)
  const dobInput = useRef(null)
  const admNoInput = useRef(null)
  const phoneNoInput = useRef(null)
  const emailInput = useRef(null)
  const imageInput = useRef(null)


  const [details,setdetails]= useState({
    name:null,
    phoneNo:null,
    dob:null,
    admNo:null,
    email:null,
    rollNo:null
  })

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

  useEffect(()=>{

    const allFieldsAreFilled = Object.values(details).every(value => value !== null && value !== undefined && value !== '');

    if(allFieldsAreFilled ){
      setAddPass(true)
     }else{
      setAddPass(false)

     }
  
  },[details,addPass])

  const formChanged=(name,value)=>{
    console.log(name,value)
    
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
    <div className='w-full h-screen bg-white '>
      <Header />
      <div className='p-5'>
        <div className=' rounded-xl w-full  bg-gray-200  p-5 shadow-xl' >
          <h1 className='text-2xl mb-5 font-bold'>Add Student:</h1>
          <div className=' md:flex flex flex-col md:flex-row justify-center items-center w-full'>
           <div className="setConfirmModal'flex lg:justify-start justify-start items-center w-full md:w-1/2">
            <h1 >Student&nbsp;Image:&nbsp;</h1>
              <input
                  id="avatar"
                  type='file'
                  name="avatar"
                  accept="image/*"
                  autoComplete="off"
                  ref={imageInput}
              />
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
                  addPass ?
                  <button
                  className='shadow-xl bg-gradient-to-b text-white from-customPink-3 to-customPink-6  bg-lime-500 p-2 rounded-md mt-4'
                  onClick={()=>{
                    setConfirmModal(true)
                  }}
                >
                  Add Student &#43;
                </button> :
                 <button
                 className='shadow-xl bg-gradient-to-b text-white cursor-not-allowed from-gray-400 to-gray-500  bg-lime-500 p-2 rounded-md mt-4'
                 
               >
                 Add Student &#43;
               </button>
                }


             
            </div>
            {
              confirmModal && <AddSudentConfirmModal modalAction={setConfirmModal}  studentInfo={ details} clearInputs = {clearInputs}/>

            }
            
           
          </div>


           
        </div>
      </div>
     
    </div>
  )
}

export default AddStudent
