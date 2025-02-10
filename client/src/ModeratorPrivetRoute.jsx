import React, {  useEffect, useState } from 'react'
import { Outlet, Navigate, useLocation } from 'react-router-dom';

function ModeratorPrivetRoute() {
  const [pass,setPass] = useState(null);
  const location = useLocation();


  useEffect(()=>{
    const authToken = localStorage.getItem("moderatorAuthToken");

    if(!authToken && location.pathname != "/moderator/signIn"){
      setPass(false)
 
    }else{
      setPass(true)
 
}  },[location])
    
  if(pass == null){
    return(
      <div>loading...</div>
    )
  }
  

  return  pass ? (
    <div>
      <Outlet/>
    </div> ):(  
      <Navigate to="signIn"/>
  )
}

export default ModeratorPrivetRoute
