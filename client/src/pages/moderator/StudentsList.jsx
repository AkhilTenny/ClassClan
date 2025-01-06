import React, { useEffect,useState } from 'react'
import Header from './components/Header'
import { useNavigate, useParams } from 'react-router-dom'
import { useApi } from '../../action/api/moderatorAPIs';
import StudentListCard from './components/StudentListCard';
import EditStudentModal from './components/EditStudentModal';
import DeleteStudentConfirmModal from './components/DeleteStudentConfirmModal';

function StudentsList() {
  const {id} = useParams();
  const {getStudentsList} = useApi();
  const [editModal,setEditModal] = useState(false);
  const [deleteModal,setDeleteModal] = useState(false);
  const [currentEditingStudent,setCurrentEditingStudent] = useState(null)

  const [currentDeleteStudent,setCurrentDeleteStudent] = useState(null)
  const navigate = useNavigate();
  const [students,setStudents] = useState([])
 
  function addStudentAction(){
    navigate(`/moderator/editClass/${id}/addStudent`)
  }

  function openEditModal(studentId){
    setCurrentEditingStudent(studentId)
    setEditModal(true)
  }
  function closeEditModal(){
    setCurrentEditingStudent(null)

    setEditModal(false)
  }

  function openDeleteModal(studentId){
    setCurrentDeleteStudent(studentId)
    setDeleteModal(true)
  }
  function closeDeleteModal(){
    setCurrentDeleteStudent(null)

    setDeleteModal(false)
  }


   function addStudents(){
    getStudentsList(id).then(res=>{
      setStudents(res)
    })
  }
  useEffect(()=>{
    addStudents()
  },[])
  return (
    <div className='h-screen'>
      <Header/>
      <div className='p-3'>
          <div className='mt-5'>
            {
            students.map((value,index)=>(
            
              <StudentListCard student={value} index={index} openEditModal={openEditModal} openDeleteModal = {openDeleteModal}/>
            ))
            }
          <div >
            <button className='bg-customBlue-8 text-white py-1 rounded-md px-2'
            onClick={addStudentAction}
            >add students +</button>
          </div>
          {editModal && <EditStudentModal closeEditModal={closeEditModal} studentId = {currentEditingStudent}/>
           }
          {deleteModal && <DeleteStudentConfirmModal  closeDeleteModal={closeDeleteModal} studentId = {currentDeleteStudent} />

          }
            

          </div>
      </div>
    </div>
  )
}

export default StudentsList