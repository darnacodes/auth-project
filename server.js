const express= require ("express")
const app= express()
require('dotenv').config()

app.get ("/", (req, res)=>{
    res.send("hello migracode")
})


//port
const port= process.env.PORT || 4000

app.listen(port, () => {
   console.log("Listening on port" + port )
  });