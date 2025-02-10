var express = require('express');
var router = express.Router();
let userHealper = require('../helpers/userHelper')

const findUser=(req,res,next)=>{
  console.log(res.headers)

}

/* GET users listing. */
router.post('/signIn', function(req, res, next) {

  const credentials = req.body.credentials
  
  userHealper.userSignIn(credentials).then(response=>{
    const userInfo = (({studentName,studentId})=>({studentName,studentId}))(response)
    userHealper.createToken(userInfo).then(response=>{
      console.log(response)
      res.status(200).json({response})
    }).catch(err=>{
      res.status(400).json({messag:"something went wrong"})

    })
  }).catch(err=>{
    res.status(400).json({message:"wrong credentials"})
  })
});

module.exports = router;
