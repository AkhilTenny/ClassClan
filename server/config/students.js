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
  passcode:Number,
  classId:String

})

const noteSchema = new mongoose.Schema({
  title: String,
  date: String,
  subject: String,
  files: [
    {
      fileName: String,
      filePath: String,
    },
  ],
});

const Note = new mongoose.model("Note", noteSchema);


const studentModel = new mongoose.model('student',studentSchema)

module.exports={
  studentModel,
  Note
}