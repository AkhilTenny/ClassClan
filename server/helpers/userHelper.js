const jwt = require("jsonwebtoken")
const { studentModel } = require("../config/students");
const secretKey = process.env.tokenKey





function userSignIn(credentials){

  return new Promise(async(resolve, reject) => {

    studentModel.findOne({studentName:credentials.userName,admNo:credentials.admNo}).then(response=>{
      if(response.passcode == credentials.passcode){
        resolve(response)
      }else{
        reject("passcode is wrong")
      }
    }).catch(err=>{
      reject("no user found")
    })
  
    
  })
}

function createToken(userInfo){
  return new Promise((resolve, reject) => {
    const token = jwt.sign(userInfo,secretKey,{algorithm: 'HS256'})
    if(token){
      const userName = userInfo.studentName
      resolve({token,userName})
    }else{
      reject("error")
    }
  })
  
}

module.exports={
  userSignIn,
  createToken
}