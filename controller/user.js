const Helper=require('../models/helper')

exports.getHomePage=(req,res,next)=>{
    res.render('user/home',{pageTitle:'helper',path:'/'})
}

exports.postBooking=(req,res,next)=>{
    const name=req.body.name
    const phoneno=req.body.phoneno
    const address=req.body.address
    const place=req.body.place
    const workingtime=req.body.workingtime
    const email=req.body.email
    const budget=req.body.budget
    const teaxarea=req.body.teaxarea
    const service=req.body.service
    Helper.findByServiceName(service,(serviceman)=>{
        console.log(serviceman)
        res.render('user/booking',{pageTitle:'booking',service:serviceman,name:service,path:'/services'})
    })
    
}