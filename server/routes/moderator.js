var express = require('express');
var router = express.Router();
const moderator = require('../config/moderator')
const moderatorHelper = require("../helpers/moderatorHelper");


/* All routes For the moderator pages. */

router.post('/signUp', function(req, res, next) {
  moderator.addModerator(req.body).then(
    (response)=>{
      res.status(200).json({message:"signIn successfull"})
    }).catch((error)=>{
      res.status(400).json({message:"signIn failed"})
    })
  
  
});

router.post("/signIn",function(req,res,next){
  moderatorHelper.findUser(req.body.username).then((res1)=>{
    moderatorHelper.checkPassword(req.body).then((res2)=>{
      console.log("res 2:",res2)
      const  token = moderatorHelper.createUserToken(req.body.username)
      res.status(200).json({message:"login successfull",token})
      }).catch((err1)=>{
        console.log("err2", err2)
      res.status(400).json({message:"Cross Check That Password!"})
    })
  }).catch((err2)=>{
    res.status(400).json({message:"User Not Found!"})
  })

})

router.post("/addClass",function(req,res){
  authenticationToken = req.headers['authorization']
  moderatorHelper.findUserWithToken(authenticationToken).then((res)=>{
    
  }).catch((err)=>{
    res.status(400).json({message:"err"})
  })

})

module.exports = router;
