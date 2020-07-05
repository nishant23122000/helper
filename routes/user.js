const express=require('express')
const router=express.Router()

const userController=require('.././controller/user')

router.get('/',userController.getHomePage)  

router.post('/booking',userController.postBooking)

module.exports=router