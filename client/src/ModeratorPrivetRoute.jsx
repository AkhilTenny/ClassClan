import React, { useContext, useEffect, useState } from 'react'
import { Outlet, Navigate, useLocation } from 'react-router-dom';

function ModeratorPrivetRoute() {
  const [pass,setPass] = useState(true);
  const location = useLocation();


  useEffect(()=>{
    if(localStorage.getItem("moderatorAuthToken") != null || location.pathname == "/moderator/signIn"){
      console.log("hai")
    }else{
      setPass(false)

    }
  },[])
    
  

  return  pass ? (
    <div>
      <Outlet/>
    </div> ):(
      <Navigate to="signIn"/>
  )
}

export default ModeratorPrivetRoute
