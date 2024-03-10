const mongoose = require('mongoose');

const schema = mongoose.Schema;
const User = require('./User');

const PostSchema = new schema({
    title: {type : String , required:true },
    description: String,
    author:String
},
{
    timestamps : true
});

let createPostModel = mongoose.model('Post', PostSchema);

module.exports = createPostModel;