const express = require('express');
const app = express();
const passport = require('express-passport');
const localStategy = require('passport-local').Strategy;
const Users = require('./Models/User')
const router = require('./Routes/PostRoutes');
const session = require('express-session');
const cookieParser = require('cookie-parser');

let {getUsers} = Users;

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
const passportConfig=()=>{
    passport.use(new localStategy({usernameField:'username' , passwordField:'password'} , (username,password,done)=>{
        let users = getUsers();
        let user = users.find(user => user.username == username && user.password == password );
        user ? done(null,user) : done(null,false,{message:'username or password incorrect !!!'})
    }));
    passport.serializeUser((user,done)=>done(null,user.id));
    passport.deserializeUser((id,done)=>{
        let users = getUsers();
        let findUser = users.find(user=>user.id == id);
        done(null,findUser)
    })

}
passportConfig();
app.use(passport.initialize());
app.use(passport.session());
app.use('/',router);


app.listen(3030,()=>{
    console.log('live server is runing...');
})