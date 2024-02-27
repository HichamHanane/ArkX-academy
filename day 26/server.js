const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Posts = require('./models/Post');


app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/ArkX')
.then(()=>{
    console.log('connected successfully');
})
.catch((err)=>{
    console.log(err);
});


app.post('/post',async(req,res)=>{
    let newPost = new Posts();
    newPost.title = req.body.title;
    newPost.description = req.body.description;
    newPost.owner = req.body.owner;
    await newPost.save();
    res.send('Post was created !');
})
app.get('/post',async (req,res)=>{
    let posts = await Posts.find();
    res.send(posts);
})


app.listen(9000,()=>{
    console.log("server is runing in port 9000....");
})



  

