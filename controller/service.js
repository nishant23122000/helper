const path=require('path')
const fs=require('fs')
const  Helper=require('../models/helper')
const p=path.join(__dirname,'../','data','services.json')

const getServiceDetails=(callback)=>{
    fs.readFile(p,(error,fileContent)=>{
        if(error)
            console.log(error)
        else
            callback(JSON.parse(fileContent)['category'])
    })
}
exports.getServices=(req,res,next)=>{
     getServiceDetails((fileContent)=>{
        res.render('helper/services',{pageTitle:'services',services:fileContent,path:'/services'})
   })
}

exports.getService=(req,res,next)=>{
    var data,arg,image;
    getServiceDetails((fileContent)=>{
             for(var i=0;i<fileContent.length;i++){
                for(var j=0;j<fileContent[i]['service'].length;j++){
                     data=fileContent[i]['service'][j]
                     arg=req.params.service
                     if(data===arg){
                        image=fileContent[i]['images'][j]
                     }
                 }
            }
            res.render('helper/service_hire',{pageTitle:'service_hire',service:arg,image:image,path:'/services'})
        })
}

exports.getApplyPage=(req,res,next)=>{
    res.render('helper/apply',{pageTitle:'apply',path:'/apply'})
}

exports.postApplyPage=(req,res,next)=>{
    const name=req.body.name
    const email=req.body.email
    const image=req.body.image
    const phoneno=req.body.phoneno
    const profession=req.body.profession
    const experience=req.body.experience
    const workinghrs=req.body.workinghrs
    const wageperday=req.body.wageperday 
    const helper=new Helper(name,email,image,phoneno,experience,profession,workinghrs,wageperday)
    helper.save((helper_data)=>{
       console.log(helper_data)
        res.render('helper/apply_result',{pageTitle:'result',path:'/apply',helper_data:helper_data})
    })
    
}