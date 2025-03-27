import React, { useEffect, useState } from 'react'
import uploadNoteLogo from "../../assets/homework.png"
import noteLogo from "../../assets/notes.png"

import { useUserApi } from '../../action/api/userAPIs';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();

  function uploadNote(){
    navigate('/uploadnotes')
  }

  const {getUserInfo} = useUserApi();
  const [userInfo,setUserInfo] = useState([]);

  useEffect(()=>{
    getUserInfo().then(res=>{
      setUserInfo(res)
    })
  },[])
  console.log("there",userInfo.studentName)

  return (
    <div class="h-screen bg-white">
     <div className='bg-gray-200 h-16 w-full'>
      <h1 className='head-1'>Hey,{userInfo.studentName}</h1>
      </div>
      <div className='w-full mt-4 flex'>
        <div onClick={uploadNote} className='w-36 ml-4 rounded-lg p-3 cursor-pointer hover:bg-gray-300'> 
          <img src={uploadNoteLogo} alt="" />
          <h1  className="head-3">upload notes</h1>
        </div>
        <div className='w-36 p-3 rounded-lg cursor-pointer hover:bg-gray-300'> 
          <img src={noteLogo} alt="" />
          <h1 className="head-3">notes</h1>

        </div>
      </div>
    </div>
   
  )
}

export default Home
