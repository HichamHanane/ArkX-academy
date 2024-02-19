
const EventEmitter = require('events');

let event = new EventEmitter();

let users = [
    {cin:"bk562135" , name :"hicham"}
];

event.on("logIn" , (cin) =>{
    let isFound = false;
    for(let i=0; i<users.length;i++){
        if(users[i].cin == cin){
            isFound = true
        }
    }
    isFound ? console.log('welcome') : console.log('user not found');
    console.log(isFound);
})

event.emit('logIn','bk56215')