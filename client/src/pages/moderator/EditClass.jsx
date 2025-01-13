import React, { useEffect,useRef,useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useApi } from '../../action/api/moderatorAPIs'
import EditClassConfirmModal from './components/EditClassConfirmModal'
import Header from './components/Header'


function EditClass() {
 
  const classNameInput = useRef(null);
  const classInstitutionInput = useRef(null);
  const startYearInput = useRef(null);
  const endYearInput = useRef(null);

 

  const {id} = useParams()

  const [details,setDetails] = useState([])
  const [apiDetails,setApiDetails] = useState([])
  const [pass,setPass] = useState(false);
  const [yearPass,setYearPass] = useState(true)
  const [confirmModal,setConfirmModal] = useState(false)

  const {getClassInfo,editClass}  = useApi();
  const navigate = useNavigate();
  const studentsClickAction=()=>{
    navigate('studentsList')
  }
  const subjectsClickAction=()=>{
    navigate('subjectsList')
  }
  useEffect(()=>{  
    getClassInfo(id).then((res)=>{
      setInputs(res.data.response[0])
    }).catch(err=>{
      alert(err)
    })
    
  },[''])

  const closeModal = ()=>{
    setConfirmModal(false)
  }

  const checkYear = (year)=>{
    if(year =="sYear"){
      let year = startYearInput.current.value;
      let yearLength = year.toString().length
      if(yearLength == 4 && year.toString().startsWith('20')){
        setYearPass(true)
        setPass(true)
      }else{
        setYearPass(false)
        setPass(false)
      }

    }else if(year == "eYear"){
      let year = endYearInput.current.value;
      let yearLength = year.toString().length
      if(yearLength == 4 && year.toString().startsWith('20')){
        setYearPass(true)
        setPass(true)
      }else{
        setYearPass(false)
        setPass(false)
      }
    }else{
      return 0;
    }
  }
  useEffect(()=>{

    if(apiDetails.className == details.className &&
      apiDetails.institution == details.institution &&
      apiDetails.sYear == details.sYear &&
      apiDetails.eYear == details.eYear
    ){
      setPass(false)
    }else{
      setPass(true)
    }

  },[details])

  const editClassAction=()=>{
    setConfirmModal(true)
  }

  const setInputs = (classData)=>{

    setApiDetails({
      className:classData.className || '',
      institution:classData.institution || '',
      sYear:classData.sYear || '',
      eYear:classData.eYear || ''
    })

    setDetails({
      className:classData.className || '',
      institution:classData.institution || '',
      sYear:classData.sYear || '',
      eYear:classData.eYear || ''
    })

    classNameInput.current.value = classData.className || ''
    classInstitutionInput.current.value = classData.institution || ""
    startYearInput.current.value = classData.sYear || "";
    endYearInput.current.value = classData.eYear || "";
  }

  const formChanged=(name,value)=>{
    switch(name){
      case "className":
        setDetails((previousState)=>{
          return{
            ...previousState,className:value
          }
        })
        break;
        case "institution":
          setDetails((previousState)=>{
            return{
              ...previousState,institution:value
            }
          })
          break;
        case "sYear":
          
          setDetails((previousState)=>{
            return{
              ...previousState,sYear:value
            }
          })
          checkYear("sYear");
          break;
        case "eYear":
          
          setDetails((previousState)=>{
            return{
              ...previousState,eYear:value
            }    
          })
          checkYear("eYear");
          
          break;

    }
  }

  return (
    <div className='w-full h-screen bg-customPink-1' >
    <Header/>
    <div  className='p-4 ' >
    <div>
        <h2 className='text-lg mt-4'>Class Name:</h2>
        <input  
          type="text"
          ref={classNameInput}
          name="className"
          onChange={(e)=>{
            formChanged(e.target.name,e.target.value)
          }}
          className='p-2 w-full rounded-md'  />
      </div>

      <div>
        <h2 className='text-lg mt-4'> College/School:</h2>
        <input type="text"
          ref={classInstitutionInput}
         name="institution"
         onChange={(e)=>{
          formChanged(e.target.name,e.target.value)
        }}
           className='p-2 w-full rounded-md' />
      </div>

      <div className='w-full flex mt-4'>
        <div className='w-1/2 pr-2'>
            <h2 className='text-lg'>Starting Year:</h2>
            <input type="number"
                    ref={startYearInput}
                    onChange={(e)=>{
                      formChanged(e.target.name,e.target.value)
                    }}
                    name="sYear" className='p-2 w-full rounded-md'   />
         </div>
         <div className='w-1/2 pl-2'>
            <h2 className='text-lg'>Ending Year:</h2>
            <input type="number"
                   ref={endYearInput}
                   name="eYear" 
                   onChange={(e)=>{
                    formChanged(e.target.name,e.target.value)
                  }}
                   className='p-2 w-full rounded-md' />
         </div>
         
        
      </div>
      <div>
         {
          yearPass  ||
          <div className='w-full flex justify-center text-red-700 mt-3'>
            <h2>Please Enter a Valid Year 	&#9888;</h2>

          </div>

         }
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
         onClick={subjectsClickAction}
        >
          <div className='w-full h-full backdrop-brightness-120 bg-white/20  rounded-lg flex justify-center items-center'>
            <h1 className='[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] text-3xl font-mono text-black font-bold'>Subjects</h1>
            </div>

        </div>
      </div>
      
      <div className='w-full flex justify-end'>
        {
          pass?
          <button 
            onClick={editClassAction}
            className='px-3 py-1 bg-customBlue-7 text-white mt-2 rounded-lg' >Done</button> :
          <button className='px-3 py-1 bg-gray-400 text-white mt-2 rounded-lg' >Done</button>


        }
      </div>
    </div>{
      confirmModal &&
  <EditClassConfirmModal closeModal={closeModal} id={id} details={details} />}
    </div>
  )
}

export default EditClass
