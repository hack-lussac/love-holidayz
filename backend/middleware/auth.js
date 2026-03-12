const jwt = require("jsonwebtoken")
const TokenBlacklist = require("../models/TokenBlacklist")

module.exports = async (req,res,next)=>{

try{

const header = req.headers.authorization

if(!header){
return res.status(401).json({message:"No token"})
}

const token = header.split(" ")[1]

const blacklisted = await TokenBlacklist.findOne({token})

if(blacklisted){
return res.status(401).json({message:"Token revoked"})
}

const decoded = jwt.verify(token,process.env.JWT_SECRET)

req.user = decoded

next()

}catch(err){

return res.status(401).json({message:"Invalid token"})

}

}