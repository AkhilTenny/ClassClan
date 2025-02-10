import { createContext,useState,useContext } from "react";
import {  useNavigate } from "react-router-dom";

const TokenContext = createContext();

export const useToken = ()=>{
  return useContext(TokenContext);
}


export const TokenProvider = ({children}) =>{
  const navigate = useNavigate()
  const [modToken,setModToken] = useState(localStorage.getItem('moderatorAuthToken') || 'null')
  const [token,setToken] = useState('null')
  const logout= ()=>{
    console.log("before",modToken)

    localStorage.removeItem('moderatorAuthToken');
    setModToken(null);
    navigate('moderator/signIn')

  }   
  const signIn = (token) =>{
    localStorage.setItem("moderatorAuthToken",token)
    setModToken(token)
  }

  return(
    <TokenContext.Provider value={{modToken,setModToken,token,setToken,logout,signIn}}>
    {children}
    </TokenContext.Provider>
  )
} 




