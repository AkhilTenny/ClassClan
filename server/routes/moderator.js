var express = require('express');
var router = express.Router();
const tokenKey = process.env.tokenKey
const jwt = require("jsonwebtoken")
const moderatorHelper = require("../helpers/moderatorHelper");
const classHelper = require('../helpers/classHelper')

/* middleware to check and return the userId with Token */

function findUser(req,res,next){

  const tokenData = jwt.verify(req.headers['authorization'],tokenKey)
  if(tokenData){
    
    moderatorHelper.findModeratorDataWithId(tokenData.moderatorId).then((moderatorData)=>{
      req.moderatorData = moderatorData[0]
    
      next()
    })

    
  }else{
    res.status(400).json({message:"token is expired"})
  }
}


/* All routes For the moderator pages. */

router.post('/signUp', function(req, res, next) {
  moderatorHelper.addModerator(req.body).then(
    (response)=>{
      res.status(200).json({message:"signIn successfull"})
    }).catch((error)=>{
      res.status(400).json({message:"signIn failed"})
    })
  
  
});

router.post("/signIn",function(req,res,next){
  console.log(req.body.username)

  moderatorHelper.findUser(req.body.username).then((res1)=>{
    moderatorHelper.checkPassword(req.body).then(async(res2)=>{
      console.log("res 2:",res2)
      const  token = await moderatorHelper.createUserToken(req.body.username)
      console.log("token on login:",token)
      res.status(200).json({message:"login successfull",token})
      }).catch((err1)=>{
      res.status(400).json({message:"Cross Check That Password!"})
    })
  }).catch((err2)=>{
    res.status(400).json({message:"User Not Found!"})
  })

})

router.post("/addClass",findUser,function(req,res){
  const moderatorId = req.moderatorData.moderatorId
  const className = req.body.className
  classHelper.createClass(className,moderatorId)

})

router.get('/classList',findUser,function(req,res){
  classHelper.classList(req.moderatorData.moderatorId).then((classList)=>{
    res.status(200).json({classList})
  })
})


router.get("/getClassInfo/:id",(req,res)=>{
  classHelper.getClassInfo(req.params['id']).then((response)=>{
    res.status(200).json({response})
  }).catch((err)=>{
    res.status(400).json({
      err
    })
  })
})

module.exports = router;
