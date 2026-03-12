const express = require("express")
const router = express.Router()

const TokenBlacklist = require("../models/TokenBlacklist")

router.post("/", async(req,res)=>{

const token = req.headers.authorization.split(" ")[1]

await TokenBlacklist.create({token})

res.json({message:"Logged out"})

})

module.exports = router