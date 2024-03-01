const express = require('express');
const app = express();
const router = require('./Routes/Routes');

require('./DB/ConnectDB');



app.use(express.json());
app.use(express.urlencoded({ extended: false }));


    
app.use('/',router)



app.listen(2500,()=>{
    console.log("server is runing in port 2500....");
});
