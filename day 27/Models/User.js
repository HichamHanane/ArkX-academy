const mongoose = require('mongoose');


const UserSchema =new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    createdAt:{
        type: Date,
        default : ()=> Date.now(),
    }
})

const User = mongoose.model('User',UserSchema)

module.exports = User;