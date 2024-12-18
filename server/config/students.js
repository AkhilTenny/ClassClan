const mongoose  = require('mongoose')
const bcrypt = require('bcrypt')


const studentSchema = mongoose.Schema({
  studentId:String,
  studentName:String,
  rollNo:Number,
  phoneNo:Number,
  DOB:String,
  admNo:Number,
  email:String,
  classId:String

})


const studentModel = new mongoose.model('student',studentSchema)

module.exports={
  studentModel
}