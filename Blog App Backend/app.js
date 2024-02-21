const express = require('express');
const app = express();
const posts = require('./Models/Post')
const router = require('./Routes/PostRoutes')

let {getPosts} = posts;

app.use(express.json())
app.use('/',router);


app.listen(3030,()=>{
    console.log('live server is runing...');
})