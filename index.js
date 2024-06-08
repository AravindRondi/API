const bodyParser = require('body-parser');
const express=require('express');

const app=express();
const PORT=3000;
const api=require('./routes/auth')
app.use(bodyParser.json())


app.get('/',(req,res)=>{
    res.send("web application");
    res.end()
})
app.use('/api',api)
app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`)
})