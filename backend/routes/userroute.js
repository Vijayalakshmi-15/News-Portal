let express=require("express")
let {add,login, updpwd, getd}=require("../controler/usercon")
let {addpost, getpost, getby, updpost, del}=require("../controler/postcont")
const { getw, addw} = require("../controler/wcon")

let route=new express.Router()
route.post("/reg",add)
route.post("/login",login)
route.post("/addpost",addpost)
route.get("/getpost",getpost)
route.get("/getby/:cat/:value",getby)
route.post("/updpost",updpost)
route.delete("/del/:_id",del)
route.get("/getw/:id",getw)
route.post("/addw",addw)
route.put("/updpwd",updpwd)
route.get("/getd/:_id",getd)

module.exports=route