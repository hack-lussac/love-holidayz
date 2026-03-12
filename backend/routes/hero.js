const express = require("express")
const router = express.Router()
const multer = require("multer")
const Hero = require("../models/Hero")

/* UPLOAD CONFIG */

const storage = multer.diskStorage({

destination:(req,file,cb)=>{
cb(null,"uploads/")
},

filename:(req,file,cb)=>{
cb(null,Date.now()+"-"+file.originalname)
}

})

const upload = multer({storage})

/* GET HERO SLIDES */

router.get("/", async(req,res)=>{

try{

const slides = await Hero.find().sort({_id:-1})

res.json(slides)

}catch(err){

console.log(err)
res.status(500).json({error:"Server error"})

}

})

/* ADD HERO IMAGE */

router.post("/", upload.single("image"), async(req,res)=>{

try{

if(!req.file){
return res.status(400).json({error:"No image uploaded"})
}

const hero = new Hero({

title:req.body.title,
subtitle:req.body.subtitle,
image:req.file.filename

})

await hero.save()

res.json({message:"Hero image uploaded"})

}catch(err){

console.log(err)
res.status(500).json({error:"Server error"})

}

})

module.exports = router