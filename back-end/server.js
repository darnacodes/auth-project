const express= require ("express")
require('dotenv').config()
const bcrypt = require ("bcrypt")

//const jwt = require("jsonwebtoken");
const generateJwt= require("./utils/jwt.js")
const authorize = require("./middleware/authorize.js")
//const { response } = require("express")

const app= express()
const users=[]
//middleware
app.use(express.json())

const cors= require ('cors')
app.use(cors())


app.get ("/", (req, res)=>{
    res.send("hello migracode")
});



app.post("/users/sign-up", async function (req, res){
    const { email, name, password }= request.body
    //same as above const email= request.body.email

    const salt= await bcrypt.genSalt(10)
    const encryptedPassword = await bcrypt.hash(password, salt);
    const userId=users.length
    const newUser={
        id:userId,
        name: name,
        email:email,
        password:encryptedPassword // encrypt password from library
    }
    users.push(newUser)

    res.send({jwtToken: generateJwt(userId), isAuthenticated: true})
});

app.post("/users/sign-in", async function (req, res){
    const {email, password}= request.body

    const foundUser= users.find(function (user){
        return user.email==email
    })

    if (foundUser== undefined){
        return res.status(401).json({error:"Invalid Credential", isAuthenticated: false});
    }

    const isPasswordValid= await bcrypt.compare(password, foundUser.password)
    if (isPasswordValid == false){
        return res.status(401).json({error:"Invalid Credential", isAuthenticated: false});
    }

    res.send({jwtToken: generateJwt(foundUser.id), isAuthenticated: true})
});


app.get ("/quotes", authorize,(req, res)=>{
    res.send("a beautiful quote")
})

//port
const port= process.env.PORT || 4000

app.listen(port, () => {
   console.log("Listening on port" + port )
  });