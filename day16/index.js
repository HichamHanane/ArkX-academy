const express = require('express');  
const app = express();



app.get('/',(req,res)=>{
    res.end('Welcome to my Express.js server!')
})

app.listen(8808)