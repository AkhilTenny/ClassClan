const classConfig = require('../config/classes')
const classModel = classConfig.classModel
const crypto = require("crypto")
const size = 10; 

function createClass(className,moderatorId){
  return new Promise(async(resolve,reject)=>{
    const randomByte = crypto.randomBytes(size)
    const cryptoId = randomByte.toString('hex') 
    const newClass = new classModel({
      classId:cryptoId,
      className:className,
      moderatorId:moderatorId
    })
    await newClass.save()
  })
  
  
}


module.exports={
  createClass,

}