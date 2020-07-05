const express=require('express')

const router=express.Router()


router.get('/about',(req,res,next)=>{
    res.render('about',{pageTitle:'about',path:'/about'})
})
router.use((req,res,next)=>{
    res.status(404).render('404',{pageTitle:'page not found',path:''})
})



module.exports=router