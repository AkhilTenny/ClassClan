
const student = require("../config/students");
const studentModel = student.studentModel;
const crypto = require("crypto")
const size=10


const saltRounds = 10;

function addStudent(studentDetails,classId){
  return new Promise(async(resolve, reject) => {

    const randomByte = crypto.randomBytes(size)
    const cryptoId = randomByte.toString('hex')

    let newStudent;

    try{
      newStudent = studentModel({
        studentId:cryptoId,
        studentName:studentDetails.name,
        rollNo:studentDetails.rollNo,
        phoneNo:studentDetails.phoneNo,
        DOB:studentDetails.dob,
        admNo:studentDetails.admNo,
        email:studentDetails.email,
        classId:classId
      })
      await newStudent.save();
      resolve(newStudent)
    }catch(err){
      reject(err)
    }
  })
  
}

function getStudentsList(classId){
  return new Promise(async(resolve, reject) => {
    try{
      const studentsList = await studentModel.aggregate([
        {
          $match: {
            classId:classId
          }
        }
      ])
      resolve(studentsList)
    }catch{
      reject("no students Found")
    }
  })
  
}

function getStudentInfo(studentId){
  return new Promise(async(resolve, reject) => {
    try{
      const studentInfo = await studentModel.aggregate([
        {
          $match: {
            studentId:studentId
          }
        }
      ])
      resolve(studentInfo)
    }catch{
        reject("user Not Found")
    }
  })
  
}

function editStudent(studentDetails,studentId){
  return new Promise(async(resolve, reject) => {

   

      studentModel.findOneAndUpdate({studentId:studentId},{

        $set: {
          studentName:studentDetails.name,
          rollNo:studentDetails.rollNo,
          phoneNo:studentDetails.phoneNo,
          DOB:studentDetails.dob,
          admNo:studentDetails.admNo,
          email:studentDetails.email,
        }
      }).then(res=>{
        resolve(res)
      })
      
    
  })
  
}

function deleteStudent(studentId){
  return  new Promise(async(resolve, reject) => {
    await studentModel.findOneAndDelete({studentId:studentId}).then(response=>{
      resolve(response)
    }).catch(err=>{
      reject(err)
    })
  })
  
}


module.exports={
  addStudent,
  getStudentsList,
  getStudentInfo,
  editStudent,
  deleteStudent
}