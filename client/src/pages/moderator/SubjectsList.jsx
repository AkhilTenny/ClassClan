import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import { useApi } from '../../action/api/moderatorAPIs'
import { useParams, useSearchParams } from 'react-router-dom';
import AddSubjectModal from './components/AddSubjectModal';
import SubjectListCard from './components/SubjectListCard';
import EditSubjectModal from "./components/EditSubjectModal"



function SubjectsList() {
  const {getSubjectsList} = useApi();
  const {id} = useParams();
  const [subjects,setSubjects] = useState([]);
  const [addSubjectModal,setAddSubjectModal] = useState(false);
  const [editSubjectModal,setEditSubjectModal] = useState(false);
  const [editActiveModal,seteditActiveModal] = useState(null)



  function openEditModal(subject){
    seteditActiveModal(subject)
    setEditSubjectModal(true)
  }
  function closeEditModal(){
    seteditActiveModal(null)
    setEditSubjectModal(false)
  }


  function openAddModal(){
    setAddSubjectModal(true)
  }
  function closeAddModal(){
    setAddSubjectModal(false)
  }

  useEffect(()=>{
    getSubjectsList(id).then(res=>{
      setSubjects(res)
    })
  },[])
  return (
    <div className='bg-customPink-1   w-full h-screen'>
      <Header/>
      <div className='p-2'>
      <div className='grid grid-cols-4 gap-2 mt-5'>
        {
          subjects.map((value,index)=>{
            return <SubjectListCard subject={value} index={index} openModal={openEditModal}/>
          }) 
          
        }
      </div>
    
      <button className='bg-customBlue-8 text-white py-1 rounded-md px-2'
            onClick={openAddModal}
            >add subject +</button>

    {
      addSubjectModal&& 
        <AddSubjectModal closeModal={closeAddModal} subjects={subjects} />
    }{
      editSubjectModal &&
        <EditSubjectModal closeModal={closeEditModal} subject={editActiveModal} subjects={subjects}/>
    }
      </div>
     
    </div>
  )
}

export default SubjectsList
