let mongoose=require("mongoose")
let wish=new mongoose.Schema({
    "_id":String,
    "uid":String
    }
)
let wm=mongoose.model("wmodel",wish)
module.exports=wm