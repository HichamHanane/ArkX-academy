const Posts = require('../Models/Post')
const Users = require('../Models/User')
const bcrypt = require('bcrypt')

const session = require('express-session')
const fs = require('fs');
const jwt = require('jsonwebtoken')
let { getPosts, AddPost, EditPost, DeletePost } = Posts;
let { getUsers , AddUser, AddSession_Id } = Users;
const { validationResult } = require('express-validator');
const { all } = require('../Routes/PostRoutes');

//let secretKey = fs.readFileSync('./secKey.key','utf-8');




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

// login WITH JWT 

// const login = (req, res) => {
//     console.log(secretKey);
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         errors.array().forEach(err=>{
//             res.status(400).send(err.msg);
//         }) 
//     }
//     else {
//         let user = {
//             username:req.body.username,
//             password:req.body.password
//         }
//         jwt.sign({user},secretKey,(err,token)=>{
//             if(err){
//                 res.status(400);
//             }
//             else{
//                 res.json(token);
//             }
//         })
        
//     }
// }

// SESSIONS AND COOKIES

const signup = (req,res)=>{
    let allUsers = getUsers();
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        errors.array().forEach(err=>{
            res.status(400).send(err.msg);
        }) 
    }
    else {
        let user = {
            id:allUsers.length+1,
            username:req.body.username,
            password:bcrypt.hashSync(req.body.password,10)
        }
        allUsers.push(user)
        AddUser(allUsers);
    }
}

const login = (req,res) =>{
    let users = getUsers()
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        errors.array().forEach(err=>{
            res.status(400).send(err.msg);
        }) 
    }
    else{
        // let hashpassword = bcrypt.hashSync("dfhvdgh",10)
        // let isMatch =  bcrypt.compareSync(password,hashpassword)
        let username= req.body.username;
        let password= req.body.password;
        let uniqueId = req.session.id;
        let indexOfUser;
        let searchForUser= users.find((user,index)=>{
            indexOfUser = index;
            return user.username == username && bcrypt.compareSync(password,user.password) == true;
        })
        if (searchForUser) {
            req.session.isAuth = true;
            searchForUser['session_id']=uniqueId;
            req.session.active = true;
            console.log(req.session);
            users.splice(indexOfUser,1,searchForUser);
            res.cookie('session_cookie',uniqueId);
            AddSession_Id(users)
            res.json(req.cookies['connect.sid'])
        }
        else{
            res.status(401).json("Username or password invalid")
        }


        //searchForUser ?  AddSession_Id(users): res.status(401).json("Username or password invalid")
    }
}

// protected route

const Home = (req,res) =>{
    if(req.cookies['session_cookie'] !=''){
        let users = getUsers();
        let cookie = req.cookies['session_cookie'];
        let user = users.find((user)=>{
            return user.session_id == cookie;
        })
        res.json(`WELCOME ${user.username} TO HOME PAGE`);

    }
    else{
        res.json('you have login first !!!');
    }
}

const Logout = (req,res)=>{
    res.cookie('session_cookie','');
    res.json('you logged out')
}

module.exports = { getAllPost, AddPosts, Edit, Delete, login , signup , Logout , Home}