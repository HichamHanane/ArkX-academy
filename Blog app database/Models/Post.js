const mongoose = require('mongoose');

const schema = mongoose.Schema;
const User = require('./User');

const PostSchema = new schema({
    title: String,
    description: String,
    author:{
        type : mongoose.SchemaTypes.ObjectId,
        ref:'User',
    }
},
{
    timestamps : true
});

let createPostModel = mongoose.model('Post', PostSchema);

module.exports = createPostModel;