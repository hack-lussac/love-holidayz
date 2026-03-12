const express = require("express")
const router = express.Router()
const Blog = require("../models/Blog")
const slugify = require("slugify")
const sanitizeHtml = require("sanitize-html")

/* ================================
   CREATE BLOG
================================ */

router.post("/", async (req,res)=>{

try{

const {title,content,coverImage,tags,category} = req.body

const cleanContent = sanitizeHtml(content)

const slug = slugify(title,{lower:true})

const blog = new Blog({

title,
slug,
content:cleanContent,
coverImage,
tags,
category

})

await blog.save()

res.json(blog)

}catch(err){

console.error(err)

res.status(500).json({error:"Blog creation failed"})

}

})

/* ================================
   GET ALL BLOGS
================================ */

router.get("/", async(req,res)=>{

try{

const blogs = await Blog.find().sort({createdAt:-1})

res.json(blogs)

}catch(err){

console.error(err)

res.status(500).json({error:"Failed to fetch blogs"})

}

})

/* ================================
   GET SINGLE BLOG
================================ */

router.get("/:slug", async(req,res)=>{

try{

const blog = await Blog.findOne({slug:req.params.slug})

if(!blog){

return res.status(404).json({error:"Blog not found"})

}

res.json(blog)

}catch(err){

res.status(500).json({error:"Error fetching blog"})

}

})

/* ================================
   DELETE BLOG
================================ */

router.delete("/:id", async(req,res)=>{

try{

await Blog.findByIdAndDelete(req.params.id)

res.json({message:"Blog deleted"})

}catch(err){

res.status(500).json({error:"Delete failed"})

}

})

module.exports = router