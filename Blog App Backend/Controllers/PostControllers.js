const Posts = require('../Models/Post')
const fs = require('fs');
const jwt = require('jsonwebtoken')
let { getPosts, AddPost, EditPost, DeletePost } = Posts;
const { validationResult } = require('express-validator')

let secretKey = fs.readFileSync('./secKey.key','utf-8');



const getAllPost = (req, res) => {
    res.json(getPosts());
}
const AddPosts = (req, res) => {
    let data = getPosts();

    if (req.body) {
        data.push(req.body);
        Posts.AddPost(data)
        res.send(data);
    }
    else {
        res.status(400).json({ message: "There is no data" });
    }

}

const Edit = (req, res) => {
    //res.json(EditPost())
    let data = getPosts();
    if (req.body) {
        let oldPost = data.filter((post) => {
            return post.id == req.body.id
        })
        let index;
        oldPost.length != 0 ? index = data.indexOf(oldPost[0]) : res.status(402).json({ message: "post not found" })
        data.splice(index, 1, req.body);
        EditPost(data);
    }
    else {
        res.status(400).json({ message: "you sent no data" });
    }
}

const Delete = (req, res) => {
    let data = getPosts();
    let id = req.params.id;
    let d = data.find((p) => p.id == id);
    if (d) {
        let searchObj = data.filter((p, i) => {
            return p.id != id;
        })
        DeletePost(searchObj);
    }
    else {
        res.status(404).json({ message: 'Not found' })

    }
}

const login = (req, res) => {
    console.log(secretKey);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        errors.array().forEach(err=>{
            res.status(400).send(err.msg);
        }) 
    }
    else {
        let user = {
            username:req.body.username,
            password:req.body.password
        }
        jwt.sign({user},secretKey,(err,token)=>{
            if(err){
                res.status(400);
            }
            else{
                res.json(token);
            }
        })
        
    }
}

module.exports = { getAllPost, AddPosts, Edit, Delete, login }