//inbuit library
const express=require('express')
const bodyparser=require('body-parser')
const path=require('path')

//user library
const userRoutes=require('./routes/user')
const serviceRouter=require('./routes/service')
const otherRoutes=require('./routes/other')

const app=express()

app.use(bodyparser.urlencoded())
app.use(express.static(path.join(__dirname,'./','public')))
app.set('view engine','ejs')
app.set('views','views')
app.use(userRoutes)
app.use(serviceRouter)
app.use(otherRoutes)


app.listen(3000,()=>{
    console.log('server started on port 3000')
})  