const express = require('express');
const passport = require('passport');
const session= require('express-session');
const flash = require('express-flash')
const app = express();

const {GoogleConfig , LocalConfig} =require('./auth');

app.use(express.json())




GoogleConfig();
LocalConfig();


app.use(session({
    secret:'hnn@123',
    resave : false,
    saveUninitialized : false
}))
app.use(express.urlencoded({extended:false}));

app.set('view-engine','ejs')

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.get('/login',(req,res)=>{
    res.render('Login.ejs')
})


app.get('/googleAuth',passport.authenticate('google',{scope:['profile']}))

app.get('/home',isAuth,(req,res)=>{
    // res.send('Welcome')

    if(req.user.displayName){
        res.send(req.user.displayName);
        return;
    }
    if(req.user){
        res.send(req.user.username);
        return;
    }

})

app.post('/login/localStrategy',passport.authenticate('local',{
    successRedirect : '/home',
    failureRedirect:'/login',
    failureFlash : true
}))

app.get('/callback',passport.authenticate('google',{
    successRedirect : '/home',
    failureRedirect :'/login'
}))

app.get('/logout',(req,res)=>{
    req.logOut((err)=>{
        if(err){
            console.log(err);
        }
        else{
            res.redirect('/login')
            
        }
    })
})

function isAuth(req,res,next){
    req.isAuthenticated() ? next() : res.sendStatus(401);
}


app.listen(8000,()=>{
    console.log('server is runing in port 8000....');
})
