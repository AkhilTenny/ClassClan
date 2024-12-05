const mongoose  = require('mongoose')
const bcrypt = require('bcrypt')


const studentSchema = mongoose.Schema({
  studentId:String,
  studentName:String,
  rollNo:Number,
  phoneNo:Number,
  DOB:Date,
  admNo:Number,
  email:String,
  classId:String

})