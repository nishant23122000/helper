const path=require('path')
const fs=require('fs')

const p=path.join(__dirname,'../','data','helper.json')
const fetchData=(cb)=>{
    fs.readFile(p,(error,fileContent)=>{
        
        if(error)
                cb([])
        else
        cb(JSON.parse(fileContent))
 })
}

module.exports=class Helper{
    constructor(name,email,photoURL,phoneNo,experience,profession,workingHrs,wagePerDay) {
        this.name=name,
        this.email=email,
        this.photoURL=photoURL,
        this.phoneNo=phoneNo
        this.experience=experience
        this.profession=profession
        this.workingHrs=workingHrs
        this.wagePerDay=wagePerDay
    }

    save(cb) {
        this.id=Math.random()
        fetchData((helper_data)=>{
            const res=helper_data.find((helper)=>helper.email===this.email)
            if(res)
            {
                cb(null)
               
            }else{
                helper_data.push(this)
                fs.writeFile(p,JSON.stringify(helper_data),(error)=>{
                    console.log(error)
                })
                cb(this)
                
            }
        })
    }

    static findByServiceName(service,cb){
        fetchData((helpers)=>{
       
             const serviceman=helpers.filter((help)=>help['profession']===service)
            if(serviceman.length)
                cb(serviceman)
            else
                cb(null)
        })
    }
    
}