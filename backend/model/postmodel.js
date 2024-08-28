let mongoose=require("mongoose")
let pmod=new mongoose.Schema({
    "_id":String,
    "title":String,
    "uid":String,
    "date":String,
    "body":String,
    "cat":String,
    "name":String,
    "status":{
        type:Boolean,
        default:false
    }
})
let pm=new mongoose.model("pmodel",pmod)
module.exports=pm