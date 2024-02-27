const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Users = require('./Models/User')


app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/day27')
.then(()=>{
    console.log('connected successfully ');
})
.catch(err=>console.log(err));



// Fetch users
app.get('/users',async(req,res)=>{
    let users = []
    let limit = 2
    let user = await Users.find({}).limit(limit)
    users.push(user);
    let skip = limit
    while(user.length){
        user = await Users.find({}).skip(skip).limit(limit);
        skip = skip+limit;
        if(user.length)
            users.push(user);
    }
    res.send(users)
})

// Add users
app.post('/AddUser',async(req,res)=>{
    let newUser = new Users();
    newUser.name =req.body.name;
    newUser.email =req.body.email;
    newUser.age =req.body.age;
    await newUser.save();
    let user = await Users.find({})
    res.send(user)
})

//Fetch by name and email

app.post('/getUser', async(req,res)=>{
    let user =await Users.findOne({name:req.body.name,email:req.body.email});
    // user ? res.send(user) : res.status(401).send('user not found !!!');
    console.log(user);
    if(user){
        res.send(user);
    }
    else{
        res.json({message:'user not found !!!'});
    }
})

app.put('/editEmail/:name',async (req,res)=>{
    // res.send(req.params.name)
    let user = await Users.findOneAndUpdate({name:req.params.name},{$set:{email:req.body.email}});

    if(user){
        res.json(user)
    }
    else{
        res.json('user not found')
    }
})

app.get('/delete',async(req,res)=>{
    let deletedCount = (await Users.deleteMany({createdAt:{$lt:"2024-02-27"}})).deletedCount;
    let user =await Users.find()
    res.send(user)
    console.log(deletedCount);

})
app.listen(3600,()=>{
    console.log('server is runing in port 3600...');
});