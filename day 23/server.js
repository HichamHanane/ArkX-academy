const express = require('express');
const bycrypt = require('bcrypt');
const fs = require('fs');
const app = express();

app.use(express.json())
let users = fs.readFileSync('./users.json','utf-8');

app.post('/signup',(req,res)=>{
    let userObj = {
        id : users.length+1,
        username : req.body.username,
        password : bycrypt.hashSync(req.body.password , 10)
    }
    users.push(userObj);
    res.json(users);
})




app.listen(4500,()=>{
    console.log('server is runing in 4500....');
})
