const Posts = require('../Posts.json');
const fs = require('fs/promises')
const getPosts = ()=>{
    return Posts;
}

const AddPost= async(data)=>{
    fs.writeFile('./Posts.json',JSON.stringify(data))
    // await fs.writeFile('../Posts.json',JSON.stringify(data));
}

const EditPost=async(data)=>{
    //console.log('is working ');
    fs.writeFile('./Posts.json',JSON.stringify(data))

}
const DeletePost=async(data)=>{
    fs.writeFile('./Posts.json',JSON.stringify(data))
    console.log('Post deleted !!!!');
}
module.exports={getPosts,AddPost,EditPost,DeletePost};