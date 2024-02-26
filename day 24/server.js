const express = require('express');
const session = require('express-session')
const flash = require('express-flash');
const app = express();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy

let users = [
    {id:1 , username:'hicham',password:"hnn@123"},
]

app.use(express.json())
app.use(flash());


const passportConfig = ()=>{
    passport.use(new LocalStrategy({usernameField:"username",passwordField:"password"},  (username ,  password , done)=>{
        let user = users.find((user)=>{return user.username == username && user.password == password});
        user ? done(null,user) : done(null,false,{message:"username or password incorrect !!!"});
    }));
    passport.serializeUser((user,done)=>done(null,user.id));
    passport.deserializeUser((id,done)=>{
        let findUser = users.find(user=>user.id == id);
        done(null,findUser)
    })
}
passportConfig();

app.use(express.urlencoded({extended:false}));
app.use(session({
    secret:"hicham@123",
    resave : false,
    saveUninitialized : false
}))

app.use(passport.initialize());
app.use(passport.session());


app.set('view-engine','ejs')

// Routes
app.get('/login',(req,res)=>{
    res.render('Login.ejs');
})
app.post('/login',passport.authenticate('local',{
    successRedirect :'/home',
    failureRedirect : '/login',
    failureFlash : true
    
}))

const isAuth = (req,res,next)=>{
    req.isAuthenticated() ? next() : res.send('you have to log in first !!!');
}

app.get('/home',isAuth,(req,res)=>{
    console.log(req.user)
    res.render('Home.ejs',{name: req.user.username})
})

app.get('/logout',(req,res)=>{
    req.logOut((err)=>{
        if(err){
            console.log(err);
        }
        else{
            res.redirect('/login')
            console.log(req.user);
        }
    })
})



// PORT 
app.listen(7000,()=>{
    console.log('server is runing in port 7000...');
})