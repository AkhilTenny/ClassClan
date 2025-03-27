var express = require('express');
var router = express.Router();
const tokenKey = process.env.tokenKey
const jwt = require("jsonwebtoken");
const multer = require("multer");
const student = require("../config/students");
const Note = student.Note;


let userHealper = require('../helpers/userHelper');
const { JsonWebTokenError } = require('jsonwebtoken');

const findUser=(req,res,next)=>{
  const tokenData = jwt.verify(req.headers['authorization'],tokenKey)
  if(tokenData){
    req.userInfo = tokenData;
    next()
  }else{
    res.status(400).json({message:"don't mess with the use token"})
  }

}

function createNodeId(req,res,next){
  const ramdomBytes = crypto.randomBytes(size) 
  const cyrptoId = ramdomBytes.toString('hex')
  req.noteId = cyrptoId;
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

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


router.post('/getUserInfo',findUser,function(req,res,next){
  const userInfo = req.userInfo;
  res.status(200).json({userInfo})
})


router.post('/uploadnotes',upload.array("notes", 5),findUser,async function(req,res,next){
 
  try {
    const { title, date, subject } = req.body;
    const files = req.files.map(file => ({
      fileName: file.filename,
      filePath: `/uploads/${file.filename}`,
    }));

    // Save to Database
    const newNote = new Note({
      title,
      date,
      subject,
      files,
    });

    const savedNote = await newNote.save(); // Save to MongoDB



} catch (error) {
  console.error(error);
  res.status(500).json({ message: "Error uploading notes" });
}}
)

module.exports = router;
