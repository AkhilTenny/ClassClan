var express = require('express');
var router = express.Router();
const moderator = require('../config/moderator')

/* All routes For the moderator pages. */

router.post('/signUp', function(req, res, next) {
  moderator.addModerator(req.body).then(
    (response)=>{
      res.status(200).json({message:"signIn successfull"})
    }).catch((error)=>{
      res.status(400).json({message:"signIn failed"})
    })
  
  
});

module.exports = router;
