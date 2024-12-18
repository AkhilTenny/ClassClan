import axios from "axios";
import { useToken } from "../../context/AuthContext";

const baseURL = process.env.REACT_APP_BASE_URL

export const useApi=()=>{

  const {modToken} = useToken()

  const headers = {
    "Content-Type": "application/json",
    'authorization': modToken,
  }

  const getClassList=()=>{
  return new Promise((resolve, reject) => {
    axios.get(`/moderator/classList`,{headers}).then(res=>{
      console.log("haisugano")

      resolve(res)
  }).catch(err=>{
    console.log("err")

    reject(err.response)
  })
  

  })
 }

  const addClass = (body)=>{
  return new Promise(async(resolve, reject) => {

    axios.post(`/moderator/addClass`,body,{headers}).then(res=>[
      resolve(res)
    ]).catch(res=>{
      reject(res)
    })

  })
  
 }

  const moderatorSignIn = (username,password)=>{
  return new Promise(async(resolve, reject) => {
    await axios.post(`/moderator/signIn`, {
      username: username,
      password: password,
    }).then((res)=>{
      resolve(res.data)
    }).catch((res)=>{
      reject(res.response.data.message)
    })
    
  })
  }
  
  const addStudent = (studentDetails,classId)=>{
    return new Promise(async(resolve,reject)=>{
       await axios.post(`/moderator/addStudent`,
        {studentDetails,classId:classId}
        ,{headers}).then(res=>{
        resolve(res)
       }).catch(err=>{
        reject(err)
       })
    })

  }

   const moderatorSignUp = (username,password)=>{
    return new Promise(async(resolve, reject) => {
      await axios.post(`/moderator/signUp`,{
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

  const getClassInfo=(classId)=>{
    return new Promise(async(resolve, reject) => {
        await axios.get(`/moderator/getClassInfo/${classId}`).then((res)=>{
          resolve(res)
        }).catch(err=>{
          console.log(err)

          reject(err)
        })
    })
    
  }
  const getStudentsList=async(classId)=>{

    return new Promise(async(resolve, reject) => {
      await axios.get(`/moderator/getStudentsList/${classId}`,{headers}).then(res=>{
        
        resolve(res.data)
      }).catch(err=>{
        reject(err)
      })
  })}
  const getStudentInfo=(studentId)=>{
    return new Promise(async(resolve, reject) => {
      await axios.get(`/moderator/getStudentInfo/${studentId}`,{headers}).then(res=>{
        resolve(res.data)
      }).catch(err=>{
        resolve(err)
      })
    })
    
  }

  const editStudent=(studentInfo,studentId)=>{
    return new Promise(async(resolve, reject) => {
      await axios.post('/moderator/editStudent',{
        studentInfo,studentId:studentId
    }
    ,{headers}).then(res=>{
      resolve(res)
    }).catch(err=>{
      reject(err)
    })
    })
    
  }


  
  

 


  return{
    moderatorSignIn,
    moderatorSignUp,
    getClassList,
    addClass,
    getClassInfo,
    addStudent,
    getStudentsList,
    getStudentInfo,
    editStudent
  }
  
  


}

 
