const express = require('express')
const app = express()
const port = 3000

   
app.use(express.json())
app.get('/sucessful',(req,res)=>{
    if(!req.query.user){
          return res.json({"message":"title cannot be empty"})
    }
    const user =users.find(u=>u.username===req.query.user)
    if(user){
        return  res.json({"message":"Decription cannot be empty"})
    }
    else{
        return  res.json({"message":"due should be valid future date"})
     } 
})
app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`)
})      