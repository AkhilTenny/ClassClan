import axios from "axios"
import { useUserToken } from "../../context/userAuthContext"






export const useUserApi=()=>{

  const {userToken} = useUserToken();

  const headers = {
    "Content-Type": "application/json",
    'authorization': userToken,
  }

  function signInUser(credentials){
    return new Promise((resolve, reject) => {
      axios.post('/user/signIn',{credentials}).then(res=>{
        const response = res.data.response
        resolve(response)
      }).catch(err=>{
        const errorMessage = err.response.data.message
        reject(errorMessage)
      })  
    
    })
  }


  function getUserInfo(){
    return new Promise((resolve, reject) => {
      axios.post('/user/getUserInfo',{userToken},{headers}).then(res=>{
        resolve(res.data.userInfo)
      }).catch(err=>{
        console.log(err)
        reject(err)
      })
    })
    
  }

  function uploadNotes(formData){
    return new Promise((resolve, reject) => {
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }
      axios.post('/user/uploadnotes',formData,{headers: { "Content-Type": "multipart/form-data", 'authorization': userToken, }}).then(res=>{
        console.log("happy happy")
      })
    })
    
  }





  return{
    signInUser,
    getUserInfo,
    uploadNotes
  }
}