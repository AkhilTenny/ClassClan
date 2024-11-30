const moderatorConfig = require("../config/moderator")
const mongoose = require('mongoose')
const moderatorModel = moderatorConfig.moderatorModel
const bcrypt = require("bcrypt")
const { token } = require("morgan")
const jwt = require("jsonwebtoken")
const secretKey = process.env.tokenKey


async function findUser(username){
  return new Promise(async(resolve,reject)=>{
    const userFound = await moderatorModel.aggregate([
      {
        $match: {
          username:username
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
    const userFound = await moderatorModel.aggregate([
      {
        $match: {
          username:userData.username
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

async function createUserToken(username){

  const token = jwt.sign({username},secretKey,{expiresIn:'1d'})
  return token;

}

module.exports={
  findUser,
  checkPassword,
  createUserToken

}