
const router=require('express').Router()

router.get("/a",(req,res)=>{
    res.send("routing started by this rou")
})

module.exports=router