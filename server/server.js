const express=require('express');
const router=require('./routes/routes.js');

const app=express();

app.use('/',router)
app.listen(8000,err=>{
    if(err) console.log(err)
    console.log('Server is started at port number:8000')
})