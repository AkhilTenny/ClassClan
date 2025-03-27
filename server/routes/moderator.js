var express = require('express');
var router = express.Router();
const tokenKey = process.env.tokenKey
const jwt = require("jsonwebtoken")
const moderatorHelper = require("../helpers/moderatorHelper");
const classHelper = require('../helpers/classHelper')
const studentHelper = require('../helpers/studentHelper');
const { response } = require('../app');

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


router.post("/addStudent",findUser,(req,res)=>{
  
  studentHelper.addStudent(req.body.studentDetails,req.body.classId).then((response)=>{
    console.log(response)
    res.status(200).json({response})
  }).catch((err)=>{

    res.status(400).json({
      err
    })
  })
})



router.get('/getStudentsList/:classId',findUser,(req,res)=>{
  const classId = req.params['classId']
  studentHelper.getStudentsList(classId).then(response=>{
    res.status(200).json(response)
  }).catch(err=>{
    res.status(400).json(err)
  })
})


router.get('/getStudentInfo/:studentId',findUser,(req,res)=>{

  studentHelper.getStudentInfo(req.params['studentId']).then(response=>{
    res.status(200).json(response)
  }).catch(err=>{
    res.status(400).json(
      err
    )
  })
})

router.post('/editStudent',findUser,(req,res)=>{

  const studentInfo = req.body.studentInfo
  const studentId = req.body.studentId;

  studentHelper.editStudent(studentInfo,studentId).then(response=>{
    res.status(200).json(response)
  }).catch(err=>{
    res.status(400).json(err)

  })
})

router.post('/deleteStudent',findUser,(req,res)=>{
  const studentId = req.body.studentId;

  studentHelper.deleteStudent(studentId).then(response=>{
    res.status(200).json(response)
  }).catch(err=>{
    res.status(400).json(err)
  })
})


router.post('/editClass',findUser,(req,res)=>{
  const classInfo = req.body.classData;
  const classId = req.body.classId
  classHelper.editClass(classId,classInfo).then(response=>{
    res.status(200).json(response)
  }).catch(err=>{
    res.status(400).json(err)
  })
})
 

router.get("/getSubjectsList/:classId",findUser,(req,res)=>{
  const classId = req.params.classId;
  classHelper.getSubjectsList(classId).then(response=>{
     console.log
    res.status(200).json(response)
  }).catch(err=>{
    res.status(400).json("error")
  })

})

router.post('/addSubject',findUser,(req,res)=>{
  const subjectInfo = req.body.subjectInfo
  const classId = req.body.classId
  
  classHelper.addSubject(classId,subjectInfo)
  .then(response=>{
    res.status(200).json(response)
  }).catch(err=>{
    res.status(400).json(err)
  })
})

router.post("/editSubject",findUser,async(req,res)=>{
  
  const classId = req.body.classId;
  const subjectName = req.body.subjectName;
  const subjectDetails = req.body.subjectDetails;
  
  await classHelper.editSubject(classId,subjectName,subjectDetails).then(response=>{
    res.status(200).json(response)
  }).catch(err=>{ 

    res.status(400).json(err)
  })
})


router.post('/deleteSubject',findUser,(req,res)=>{
  const classId = req.body.classId
  const subjectName = req.body.subjectName
  classHelper.deleteSubject(classId,subjectName).then(response=>{
    res.status(200).json(response)
  }).catch(err=>{
    res.status(400).json(err)
  })
})



module.exports = router;
