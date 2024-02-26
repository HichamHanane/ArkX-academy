const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth2').Strategy;
const LocalStrategy = require('passport-local').Strategy;

let users = [
  {id:1,username:"hicham", password:"hnn@123"},
]
const GoogleConfig = () => {
  passport.use(new GoogleStrategy({
    clientID: '674201836259-q141i09liom0sf6bjo78g2rae3tugiaq.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://localhost:8000/callback",
    passReqToCallback: true
  },
    function (request, accessToken, refreshToken, profile, done) {
      return done(null, profile);

    }
  ));
  passport.serializeUser((user, done) => done(null, user))
  passport.deserializeUser((user, done) => done(null, user))
}

const LocalConfig =()=>{
  passport.use(new LocalStrategy({},(username,password,done)=>{
    let user = users.find(user => user.username == username && user.password == password);
    user ? done(null,user) : done(null,false,{message:"username or password incorrect !!!"})
  }));
  passport.serializeUser((user,done)=>done(null,user.id));
  passport.deserializeUser((id,done)=>{
    let user = users.find(user=> user.id == id);
    done(null,user);
  })
}

module.exports= {GoogleConfig , LocalConfig}
