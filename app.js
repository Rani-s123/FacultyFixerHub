const express = require("express");
const path = require("path");
const bcrypt=require("bcrypt");
const app = express();
app.use(express.json());
const pug = require("pug");
const login=require("./login.js");
const registeration=require("./registeration.js");

// getting-started.js
const mongoose = require('mongoose');
const { json } =require("express");
const bodyParser = require("body-parser");

const registered=require("./register.js")
const adds=require("./add.js")

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/project');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const port = 800;

app.use('/static', express.static('static')) // For serving static files
// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

app.use(express.urlencoded({extended:false}));

app.get('/', (req, res)=>{
    // const con = "This is the best content on the internet so far so use it wisely"
    // const params = {'title': 'PUBG is the best game', "constent": con}
    const params = { }
    res.status(200).render('index.pug', params);
})



app.get('/indexss.pug',(req,res)=>{
  const params={}
  res.status(200).render('indexss.pug',params);
})

app.get('/indexsss.pug',(req,res)=>{
  const params={}
  res.status(200).render('indexsss.pug',params);
})




app.post("/index", async (req, res)=>{

  const {email,password, browser}=req.body;

  registeration.findOne({email:email})
  .then(user=>{
    if(user){
      if(user.password === password && user.browser ===browser && browser=== "University"){
        res.render("indexsss")
      }else if(user.password === password && user.browser === browser && browser==="JobApplier"){
        res.render("indexss")
      }
    }else{
      res.json("No record existed")
    }
  })

})

app.get('/index.pug', (req, res)=>{
  // const con = "This is the best content on the internet so far so use it wisely"
  // const params = {'title': 'PUBG is the best game', "constent": con
  const params = { }
  res.status(200).render('index.pug',params);
})

app.get('/job.pug', (req, res)=>{
    // const con = "This is the best content on the internet so far so use it wisely"
    // const params = {'title': 'PUBG is the best game', "constent": con}
    const params = { }
    res.status(200).render('job.pug', params);
})

app.get('/joblists.pug', (req, res)=>{
    // const con = "This is the best content on the internet so far so use it wisely"
    // const params = {'title': 'PUBG is the best game', "constent": con}
    const params = { }
    res.status(200).render('joblists.pug', params);
})

app.get('/contact.pug', (req, res)=>{
    // const con = "This is the best content on the internet so far so use it wisely"
    // const params = {'title': 'PUBG is the best game', "constent": con}
    const params = { }
    res.status(200).render('contact.pug', params);
})

app.get('/jobdetail.pug', (req, res)=>{
    
    const params = { }
    res.status(200).render('jobdetail.pug', params);
})



  app.post("/jobdetail", async (req, res)=>{
    const main={
      name:req.body.name,
      email:req.body.email,
      phone:req.body.phone,
      date:req.body.date,
      caste:req.body.caste,
      file:req.body.file,
      letter:req.body.letter
    }
  
    await registered.insertMany([main])
  
    res.render("jobdetail")
  })

  app.get('/add.pug', (req, res)=>{
  
    const params = { }
    res.status(200).render('add.pug', params);
})

app.post("/add", async(req, res)=>{
  const mains={
    jobtitle:req.body.jobtitle,
    jobdescription:req.body.jobdescription,
    joblocation:req.body.joblocation,
    salary:req.body.salary,
    application:req.body.application,
    url:req.body.url,
    summary:req.body.summary
  }

  await adds.insertMany([mains])

  res.render("add")

})

// START THE SERVER

app.post("/registeration" ,async(req,res)=>{

  const mains={
    name:req.body.name,
    email:req.body.email,
    password:req.body.password,
    passwordrepeat:req.body.passwordrepeat,
    browser:req.body.browser
  }
  
  await registeration.insertMany([mains])

  res.render("index")

})


app.listen(port, ()=>{
  console.log(`The application started successfully on port ${port}`);
});




