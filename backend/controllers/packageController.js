const Package = require("../models/Package")

/* GET PACKAGES */

exports.getPackages = async(req,res)=>{

try{

const { type, state, popular } = req.query

let filter = {}

if(type) filter.type = type
if(state) filter.state = state
if(popular) filter.popular = true

const packages = await Package.find(filter).sort({createdAt:-1})

res.json(packages)

}catch(err){

res.status(500).json({error:"Server error"})

}

}

/* GET SINGLE PACKAGE */

exports.getPackage = async(req,res)=>{

try{

const pkg = await Package.findById(req.params.id)

if(!pkg){
return res.status(404).json({error:"Package not found"})
}

res.json(pkg)

}catch(err){

res.status(500).json({error:"Server error"})

}

}

/* CREATE PACKAGE */

exports.createPackage = async(req,res)=>{

try{

const pkg = new Package(req.body)

await pkg.save()

res.status(201).json(pkg)

}catch(err){

res.status(500).json({error:"Create failed"})

}

}

/* UPDATE PACKAGE */

exports.updatePackage = async(req,res)=>{

try{

const pkg = await Package.findByIdAndUpdate(
req.params.id,
req.body,
{ new:true }
)

res.json(pkg)

}catch(err){

res.status(500).json({error:"Update failed"})

}

}

/* DELETE PACKAGE */

exports.deletePackage = async(req,res)=>{

try{

await Package.findByIdAndDelete(req.params.id)

res.json({message:"Package deleted"})

}catch(err){

res.status(500).json({error:"Delete failed"})

}

}