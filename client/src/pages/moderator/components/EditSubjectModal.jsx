import {React,useEffect,useRef,useState} from 'react'
import { useApi } from '../../../action/api/moderatorAPIs';
import { useParams } from 'react-router-dom';

function EditSubjectModal(props) {

  const {editSubject,deleteSubject}= useApi()
  const {id} = useParams();

  const [pass,setPass] = useState(false)
  const [addPass,setAddPass] = useState(false);
  const [duplicateError,setDuplicateError] = useState(false);
  const [finalPass,setFinalPass] = useState(false)
 
  const [subjectApiDetails,setSubjectsApiDetails] = useState({
    subject:null,
    subjectName:null,
    teacher:null
    }
  )
   const [subjectDetails,setSubjectDetails] = useState({
    subject:null,
    subjectName:null,
    teacher:null
    }
  )

  const subjectRef = useRef();
  const subjectNameRef = useRef();
  const teacherRef = useRef();   


  function editAction(){
    editSubject(id,props.subject.subjectName,subjectDetails).then(res=>{
      props.closeModal()
    }).catch(err=>{
      alert("Unkown error happened")
    })
  }

  function deleteAction(){
    deleteSubject(id,props.subject.subjectName).then(res=>{
      props.closeModal()
    }).catch(err=>{
      alert("Unkown error happened")
    })
  }



  useEffect(()=>{

    const subject = props.subject.subject;
    const subjectName = props.subject.subjectName;
    const teacher = props.subject.teacher;

    setSubjectDetails({
      subject:subject,
      subjectName:subjectName,
      teacher:teacher
    })
    
    subjectRef.current.value = subject;
    subjectNameRef.current.value = subjectName;
    teacherRef.current.value = teacher
  },[])

  useEffect(()=>{


    setAddPass(Object.values(subjectDetails).every(value=> value != null && value != '' && value != undefined ));
    //The code below finds if there is any subject with the same className expect the currect class, so for that we need to filter out the currect subject and check all other subjects
    setDuplicateError(props.subjects.filter(value=> value.subjectName != props.subject.subjectName).some(value => subjectDetails.subjectName == value.subjectName))

    setFinalPass(addPass && !duplicateError)


  },[subjectDetails,addPass,duplicateError])
   
  function formChanged(item,value){
    setSubjectDetails((previousValue)=>{
      return{
        ...previousValue,[item]:value
      }
    })
  }
  return (
    <div className='fixed inset-0 w-screen h-screen bg-gray-300 bg-opacity-50 flex justify-center items-center'>
              <div className='p-5 bg-customPink-1 rounded-md lg:w-1/2 w-3/4'>
                  <div className='flex justify-end'>
                <button
                  className='cursor-pointer rounded-lg py-1 px-2  bg-customPink-6 text-white'
                  onClick={props.closeModal}
                >X</button>
              </div>
            <h2 className='text-xl font-bold'>Add Subject</h2>
            <div >
              <div className='lg:flex md:flex mt-2 justify-between'>
                <h2>Subject Short Name:</h2>
                <input type="text" 
                 ref={subjectRef}
                  onChange={(e)=>{
                    formChanged("subject",e.target.value)
                  }}
                />
              </div>
              
              <div  className='lg:flex md:flex mt-2 justify-between'>
                <h2>Subject Full Name:</h2>
                <input type="text" 
                  ref={subjectNameRef}
                  onChange={(e)=>{
                    formChanged("subjectName",e.target.value)
                  }}              
                />
              </div>
              <div  className='lg:flex md:flex mt-2 justify-between'>
                <h2>Teacher:</h2>
                <input type="text" 
                  ref={teacherRef}
                  onChange={(e)=>{
                    formChanged("teacher",e.target.value)
                  }}                  
                  />
              </div>
            </div>
            <div className='flex justify-between'>
              <div>
                <button 
                  className='shadow-xl bg-gradient-to-b text-white from-customPink-5 to-customPink-6  bg-lime-500 p-2 rounded-md mt-4'
                  onClick={deleteAction}
                >
                  Delete
                </button>
              </div>
            {
                  finalPass ?
                  <button
                  className='shadow-xl bg-gradient-to-b text-white from-customBlue-3 to-customBlue-6  bg-lime-500 p-2 rounded-md mt-4'
                  onClick={editAction} 
                  
                >
                 Edit Subject
                </button> :
                 <button
                 className='shadow-xl bg-gradient-to-b text-white cursor-not-allowed from-gray-400 to-gray-500  bg-lime-500 p-2 rounded-md mt-4'
                                
               >
                 Edit Subject
                 </button>
                }
            </div>
            
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

export default EditSubjectModal