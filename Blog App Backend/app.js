const express = require('express');
const app = express();
const posts = require('./Models/Post')
const router = require('./Routes/PostRoutes')

let {getPosts} = posts;

app.use(express.json())

app.use((err,req,res,next)=>{
    err ? res.send(err) : res.status(200)
})

app.use((req, res, next) => {
    console.log(`METHOD :${req.method} , PATH: ${req.url}`);
    next();
});
app.use('/',router);


app.listen(3030,()=>{
    console.log('live server is runing...');
})