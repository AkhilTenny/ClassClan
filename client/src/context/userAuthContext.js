import { createContext,useState,useContext } from "react";
import {  useNavigate } from "react-router-dom";

const UserAuthContext = createContext()

export const useUserToken =()=>{
  return useContext(UserAuthContext)
}


export const UserTokenProvider = ({children})=>{
  const navigate = useNavigate();
  const [userToken,setUserToken] = useState(localStorage.getItem("userAuthToken") || null)

  const signIn=(token)=>{
      
      setUserToken(token)
      localStorage.setItem("userAuthToken",token) 
  }

  const logout=()=>{
    setUserToken(null)
    localStorage.removeItem("userAuthToken")
    navigate('/start')
  }

  return(
    <UserAuthContext.Provider value={{signIn,logout,userToken}} >
      {children}
    </UserAuthContext.Provider>
  )
}