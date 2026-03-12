const express = require("express")
const router = express.Router()

const Package = require("../models/Package")
const multer = require("multer")

/* =============================
UPLOAD CONFIG
============================= */

const storage = multer.diskStorage({

destination:(req,file,cb)=>{
cb(null,"uploads/")
},

filename:(req,file,cb)=>{
cb(null,Date.now()+"-"+file.originalname)
}

})

const upload = multer({storage})

/* =============================
GET ALL PACKAGES
============================= */

router.get("/", async(req,res)=>{

try{

const { type, state } = req.query

let filter = {}

if(type){
filter.type = new RegExp(type,"i")
}

if(state){
filter.state = new RegExp(state,"i")
}

const packages = await Package.find(filter)

res.json(packages)

}catch(err){

console.log(err)
res.status(500).json({error:"Server error"})

}

})

/* =============================
GET STATES LIST
============================= */

router.get("/states/list", async (req,res)=>{

try{

const states = await Package.distinct("state")

res.json(states)

}catch(err){

res.status(500).json({error:"Server error"})

}

})

/* =============================
GET SINGLE PACKAGE
============================= */

router.get("/:id", async(req,res)=>{

try{

const pkg = await Package.findById(req.params.id)

if(!pkg){
return res.status(404).json({error:"Package not found"})
}

res.json(pkg)

}catch(err){

console.log(err)
res.status(500).json({error:"Server error"})

}

})

/* =============================
ADD PACKAGE (MULTIPLE IMAGES)
============================= */

router.post("/", upload.array("images",10), async(req,res)=>{

try{

let images = []

if(req.files && req.files.length > 0){
images = req.files.map(file => file.filename)
}

const pkg = new Package({

title:req.body.title,
duration:req.body.duration,
price:Number(req.body.price),
category:req.body.category,
type:req.body.type,
state:req.body.state,
overview:req.body.overview,
itinerary:req.body.itinerary,
inclusions:req.body.inclusions,
popular:req.body.popular,
images:images

})

await pkg.save()

res.json(pkg)

}catch(err){

console.log("PACKAGE ERROR:",err)
res.status(500).json({error:"Server error"})

}

})

module.exports = router