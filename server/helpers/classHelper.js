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
      classModel.findOneAndUpdate({classId:classId},{
        $set:{
          className:classInfo.className,
          institution:classInfo.institution,
          sYear:classInfo.sYear,
          eYear:classInfo.eYear,
        }}
      ).then(res=>{
        resolve(res)
      }).catch(err=>{
        reject(err)
      })
  })
  
}

function getSubjectsList(classId){
  return new Promise(async(resolve, reject) => {
    const foundClass = await classModel.findOne({classId:classId}).then(res=>{
      resolve(res.Subjects)
    }).catch(err=>{
      resolve("error")
    })

  })
  
}

 function addSubject(classId,subjectInfo){
  return new Promise(async(resolve, reject) => {

    const found = await classModel.findOne({classId:classId,"Subjects.subjectName":subjectInfo.subjectName})
    
  if(found == null){
    await classModel.findOneAndUpdate({classId:classId},{
      $push:{
        Subjects:subjectInfo
      }
    }).then(res=>{
      resolve(res)
    }).catch(err=>{
      reject(err)
    })
  }else{
    reject("error")
  }

   
  })
  
 }
  function editSubject(classId,subjectName,subjectDetails){
    return new Promise(async(resolve, reject) => {
     const hai =  await classModel.findOneAndUpdate({classId:classId},{
      $set:{
        "Subjects.$[upadateName].subject":subjectDetails.subject,
        "Subjects.$[upadateName].subjectName":subjectDetails.subjectName,
        "Subjects.$[upadateName].teacher":subjectDetails.teacher
      }
     },{
      "arrayFilters":[{
        "upadateName.subjectName":subjectName
      }]
     } ).then(response=>{
      resolve(response)
     }).catch(err=>{
      reject(err)
     })
    }) 
    
 }

 const deleteSubject =(classId,subjectName)=>{
  return new Promise(async(resolve, reject) => {
    await classModel.findOneAndUpdate({classId:classId},{
      $pull:{
        Subjects:{subjectName:subjectName}
      }
    }).then(response=>{
      resolve(response)
    }).catch(err=>{
      reject(err)
    })
  })
  
 }


module.exports={
  createClass,
  classList,
  getClassInfo,
  editClass,
  getSubjectsList,
  addSubject,
  editSubject,
  deleteSubject,

}