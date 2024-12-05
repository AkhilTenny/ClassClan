const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const classScheme = mongoose.Schema({
  classId:String,
  className:String,
  institution:String,
  students:[],
  year:Number,
  description:String,
  Subjects:[],
  moderatorId:String
})

const classModel = new mongoose.model("class",classScheme)

module.exports={
  classModel
}