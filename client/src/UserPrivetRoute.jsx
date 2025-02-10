import React, { useEffect, useState } from 'react'
import { Outlet, Navigate, useLocation } from 'react-router-dom';

function UserPrivetRoute() {

  const location = useLocation();
  const [pass,setPass] = useState(null);

  useEffect(()=>{
    const userAuthToken = localStorage.getItem("userAuthToken")
    if(!userAuthToken && location.pathname != '/signIn'){
      setPass(false)
    }else{
      setPass(true)
    }
  },[location])
  if(pass == null){
    console.log("ahjoi")
    return(
      <div>loading...</div>
    )
  }

  return pass?(
   
    <div>
      <Outlet/>
    </div>):(
      <Navigate to='signIn'/> 
    )

  
}

export default UserPrivetRoute
