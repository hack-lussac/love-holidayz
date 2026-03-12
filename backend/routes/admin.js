const express = require("express")
const router = express.Router()

const Admin = require("../models/Admin")
const jwt = require("jsonwebtoken")

router.post("/login", async(req,res)=>{

const {email,password} = req.body

const admin = await Admin.findOne({email,password})

if(!admin){
return res.status(401).json({error:"Invalid credentials"})
}

const token = jwt.sign(
{id:admin._id},
process.env.JWT_SECRET,
{expiresIn:"1d"}
)

res.json({token})

})

module.exports = router