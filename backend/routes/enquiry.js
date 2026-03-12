const express = require("express")
const router = express.Router()

const Enquiry = require("../models/Enquiry")

router.post("/", async(req,res)=>{

const enquiry = new Enquiry(req.body)

await enquiry.save()

res.json({message:"Enquiry saved"})

})

module.exports = router
