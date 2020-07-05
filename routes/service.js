const express=require('express')

const router=express.Router()

const serviceController=require('.././controller/service')

router.get('/services',serviceController.getServices)
router.get('/services/:service',serviceController.getService)
router.get('/apply',serviceController.getApplyPage)
router.post('/apply',serviceController.postApplyPage)

module.exports=router