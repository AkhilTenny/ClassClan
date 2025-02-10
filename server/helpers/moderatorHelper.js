const moderatorConfig = require("../config/moderators")
const mongoose = require('mongoose')
const moderatorModel = moderatorConfig.moderatorModel
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const secretKey = process.env.tokenKey
const classHelper = require("./classHelper")
const crypto = require("crypto")
const size=10


const saltRounds = 10;


async function findUser(username){
  return new Promise(async(resolve,reject)=>{
    const userFound = await moderatorModel.aggregate([
      {
        $match: {
          moderatorName:username
        }
      }
    ])

    if(userFound.length >0){
      resolve(userFound)
    }else{
      reject("user not found")
    }
  })

}
async function checkPassword(userData){
  return new Promise(async(resolve,reject)=>{
    console.log(userData)
    
    const userFound = await moderatorModel.aggregate([
      {
        $match: {
          moderatorName:userData.username
        }
      }
    ])
    const autenthicate = await bcrypt.compare(userData.password,userFound[0].password)

    if(autenthicate){
      resolve(autenthicate)
    }else{
      reject(false)
    }

  })
}

async function addModerator(userData){
  let hashedPassword
  return new Promise(async(resolve,reject)=>{
     const ramdomBytes = crypto.randomBytes(size) 
     const cyrptoId = ramdomBytes.toString('hex')
    try{
      hashedPassword = await bcrypt.hash(userData.password,saltRounds);

    }catch(err){
      reject(err)
    }
    let newModerator 
    try{
        newModerator = new moderatorModel({
        moderatorId:cyrptoId,
        moderatorName:userData.username,
        password:hashedPassword,

      })
    }
    catch(err){
      reject(err)
    }
    

    await newModerator.save();
    resolve(newModerator);
  })
}


async function findModeratorId(username){
  const cryptoId = await moderatorModel.aggregate([
    [
      {
        $match: {
          moderatorName:username
        }
      },{
        $project: {
          moderatorId:1,
          _id:0
        }
      }
    ]
  ])
  const moderatorId = cryptoId[0]
  return moderatorId;
} 

function findModeratorDataWithId(moderatorId){
  return new Promise(async(resolve, reject) => {
    const moderatorData = await moderatorModel.aggregate([
      {
        $match:{
          moderatorId:moderatorId
        }
      }
    ])
    resolve(moderatorData)
  })
  
}

 async function createUserToken(username){
    const moderatorId = await findModeratorId(username)
    const token = jwt.sign(moderatorId,secretKey,{expiresIn:'5d'})
    console.log("token",moderatorId)
    return token  


}





module.exports={
  findUser,
  checkPassword,
  createUserToken,
  findModeratorId,
  addModerator,
  findModeratorDataWithId,

}
