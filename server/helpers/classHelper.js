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
/* Find classes of given moderator*/
function classList(moderatorId){
  return new Promise(async(resolve, reject) => {

   const classList = await classModel.aggregate([
      {$match:{
        moderatorId:moderatorId
      }}
    ])
    if(classList){
      resolve(classList)
    }else{
      reject(false)
    }
  })
  
}


function getClassInfo(classId){
  return new Promise(async(resolve, reject) => {
    
    await classModel.aggregate([
      {$match:{
        classId:classId
      }}
    ]).then(res=>{
      resolve(res)
    }).catch(err=>{
      reject(err)
    })

    
  }) 
  
}


function editClass(classId,classInfo){
   return new Promise(async(resolve, reject) => {
    await classModel.findOneAndUpdate({classId:classId},{$set{
      
    }})
  })
  
}


module.exports={
  createClass,
  classList,
  getClassInfo

}