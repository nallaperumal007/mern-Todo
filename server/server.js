const express=require('express');
const router=require('./routes/routes');

const app=express();
require('./models/db');
app.use('/',router)
app.listen(8000,err=>{
    if(err) console.log(err)
    console.log('Server is started at port number:8000')
})