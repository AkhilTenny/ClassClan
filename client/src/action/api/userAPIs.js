import axios from "axios"






export const userApi=()=>{
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





  return{
    signInUser
  }
}