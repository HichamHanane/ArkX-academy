const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    title:String,
    description:String,
    owner:String,
})
let posts = mongoose.model("Posts",postSchema);

module.exports = posts;