const Users = require('../users.json');
const fs = require('fs/promises')
const getUsers = ()=>{
    return Users;
}

const AddUser= async(data)=>{
    fs.writeFile('./users.json',JSON.stringify(data))
    // await fs.writeFile('../Posts.json',JSON.stringify(data));
}
const AddSession_Id= async(data)=>{
    fs.writeFile('./users.json',JSON.stringify(data))
    // await fs.writeFile('../Posts.json',JSON.stringify(data));
}


module.exports={getUsers,AddUser,AddSession_Id};