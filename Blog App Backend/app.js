const express = require('express');
const app = express();
const posts = require('./Models/Post')
const router = require('./Routes/PostRoutes');
const session = require('express-session');
const cookieParser = require('cookie-parser');

let {getPosts} = posts;

app.use(express.json())
app.use(cookieParser());
app.use((err,req,res,next)=>{
    err ? res.send(err) : res.status(200)
})

app.use(session({
    secret:"hicham@hanane",
    resave : false,
    saveUninitialized : false
}));
app.use((req, res, next) => {
    console.log(`METHOD :${req.method} , PATH: ${req.url}`);
    next();
});
app.use('/',router);


app.listen(3030,()=>{
    console.log('live server is runing...');
})