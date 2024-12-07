import axios from "axios";
import { useToken } from "../../context/AuthContext";

const baseURL = process.env.REACT_APP_BASE_URL;

export const useApi=()=>{

  const {modToken} = useToken()

  const headers = {
    'Content-Type': 'application/json',
    'authorization': modToken,
  }

  const getClassList=()=>{
  return new Promise((resolve, reject) => {

    axios.get(`${baseURL}/moderator/classList`,{headers}).then(res=>{
      resolve(res)
  }).catch(err=>{
    reject(err.response)
  })
  

  })
 }

  const addClass = (body)=>{
  return new Promise(async(resolve, reject) => {

    axios.post(`${baseURL}/moderator/addClass`,body,{
      'Content-Type': 'application/json',
      'authorization': modToken,
    }).then(res=>[
      resolve(res)
    ]).catch(res=>{
      reject(res)
    })

  })
  
 }

  const moderatorSignIn= (username,password)=>{
  return new Promise(async(resolve, reject) => {
    await axios.post(`${baseURL}/moderator/signIn`, {
      username: username,
      password: password,
    }).then((res)=>{
      resolve(res.data)
    }).catch((res)=>{
      reject(res.response.data.message)
    })
    
  })
  }

   const moderatorSignUp =(username,password)=>{
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
  return{
    moderatorSignIn,
    moderatorSignUp,
    getClassList,
    addClass
  }
  
  


}

 
