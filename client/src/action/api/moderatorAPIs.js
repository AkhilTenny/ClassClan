import axios from "axios";
import { useToken } from "../../context/AuthContext";

const baseURL = process.env.REACT_APP_BASE_URL;


 function CreateModeratorAPIHeader(){
  const {modToken} = useToken()

  const headers = {
    'Content-Type': 'application/json',
    'authorization': modToken,
  }
  return {headers}
 }


 export const addClass = (body)=>{
  axios.post(`${baseURL}/moderator/addClass`,body,CreateModeratorAPIHeader())
 }

 export const moderatorSignIn= (username,password)=>{
  return new Promise(async(resolve, reject) => {
    await axios.post(`${baseURL}/Moderator/signIn`, {
      username: username,
      password: password,
    }).then((res)=>{
      resolve(res.data)
    }).catch((res)=>{
      reject(res.response.data.message)
    })
    
  })
  }

  export const moderatorSignUp =(username,password)=>{
    return new Promise(async(resolve, reject) => {
      await axios.post(`${baseURL}/moderator/signUp`,{
        username:username,
        password:password
      })
      .then((res)=>{
        resolve(res)
      }).catch((res)=>{
        reject(res)

      })
    })
    
  }
  
  
