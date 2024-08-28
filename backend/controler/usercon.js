let usermod=require("../model/usermodel")
let jwt=require("jsonwebtoken")
let bcrypt=require("bcrypt")

let add=async(req,res)=>{
    try {
        let result=await usermod.findById({"_id":req.body._id})
        if(result){
            res.json({"msg":"email already exists"})
        }
        else{
            let hash=await bcrypt.hash(req.body.pwd,8)
            let data=new usermod({...req.body,"pwd":hash})
            data.save()
            res.json({"msg":"Registered Successfully"})
        }
    } catch (error) {
        console.log(error)
    }
}

let login=async(req,res)=>{
    try {
        let data=await usermod.findById({"_id":req.body._id})
        if(data){
            let f=await bcrypt.compare(req.body.pwd,data.pwd)
            if(f){
                res.json({"token":jwt.sign({"_id":req.body._id,},"fsd4"),"name":data.name,"_id":data._id})
            }
            else{
                res.json({"msg":"check password"})
            }
        }
        else{
            res.json({"msg":"check mail"})
        }
    } catch (error) {
        
    }
}

let updpwd=async(req,res)=>{
    try {
        f=await usermod.findById({"_id":req.body._id})
        if(f){
        await usermod.findByIdAndUpdate({"_id":req.body._id},{"pwd":await bcrypt.hash(req.body.pwd,10)})
        res.json({"msg":"password changed"})
        }
        else{
            res.json({"msg":"enter correct mail"})
        }
    } catch (error) {
        
    }
}
let getd=async(req,res)=>{
    try {
        let data=await usermod.findById({"_id":req.params._id})
        res.json(data)
    } catch (error) {
        
    }
}
module.exports={add,login,updpwd,getd}