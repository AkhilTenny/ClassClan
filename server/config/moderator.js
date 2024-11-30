const mongoose = require('mongoose');
const bcrypt = require("bcrypt");


const saltRounds = 10;

const moderatorSchema = new mongoose.Schema({
  username:{
    type:String,
    required:true,
  },
  password:{
    type:String,
    required:true
  }
})

const moderatorModel = new mongoose.model("moderator", moderatorSchema)

async function addModerator(userData){
  let hashedPassword
  return new Promise(async(resolve,reject)=>{
    try{
      hashedPassword = await bcrypt.hash(userData.password,saltRounds);

    }catch(err){
      reject(err)
    }
    let newModerator 
    try{
        newModerator = new moderatorModel({
        username:userData.username,
        password:hashedPassword
      })
    }
    catch(err){
      reject(err)
    }
    

    await newModerator.save();
    resolve(newModerator);
  })
}

module.exports= {
  addModerator,
  moderatorModel


}