let wm=require("../model/wish")

let getw=async(req,res)=>{
    try {
        let data=await wm.find({"uid":req.params.id})
    res.json(data)
    } catch (error) {
        console.log("error")
        res.json(error)
    }
}

let getby=async(req,res)=>{
    try {
        let data=await wm.findById()
    } catch (error) {
        
    }
}

let addw=async(req,res)=>{
    try{
    let data=new wm({...req.body})
    data.save()
    res.json("whish list added")
    }
    catch(err){

    }
}
module.exports={getw,addw}