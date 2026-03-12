const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const User = require("../models/User")
const TokenBlacklist = require("../models/TokenBlacklist")

const {generateAccessToken,generateRefreshToken} = require("../utils/generateTokens")

const router = express.Router()

// REGISTER
router.post("/register",async(req,res)=>{

try{

const {email,password} = req.body

const hash = await bcrypt.hash(password,10)

const user = await User.create({
email,
password:hash
})

res.json({message:"User created"})

}catch(err){
res.status(500).json(err)
}

})


// LOGIN
router.post("/login",async(req,res)=>{

try{

const {email,password} = req.body

const user = await User.findOne({email})

if(!user){
return res.status(400).json({message:"Invalid credentials"})
}

const match = await bcrypt.compare(password,user.password)

if(!match){
return res.status(400).json({message:"Invalid credentials"})
}

const accessToken = generateAccessToken(user)
const refreshToken = generateRefreshToken(user)

res.json({
accessToken,
refreshToken
})

}catch(err){
res.status(500).json(err)
}

})


// LOGOUT
router.post("/logout",async(req,res)=>{

try{

const token = req.headers.authorization.split(" ")[1]

await TokenBlacklist.create({token})

res.json({message:"Logged out successfully"})

}catch(err){
res.status(500).json(err)
}

})

module.exports = router