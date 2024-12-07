const mongoose = require('mongoose');
const bcrypt = require("bcrypt");



const moderatorSchema = new mongoose.Schema({
 
  moderatorId:String,
  moderatorName:{
    type:String,
    required:true,
  },
  password:{
    type:String,
    required:true
  },
  classes:[]
})

const moderatorModel = new mongoose.model("moderator", moderatorSchema)



module.exports= {
  moderatorModel


}