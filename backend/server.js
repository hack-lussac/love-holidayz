require("dotenv").config()

const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const path = require("path")
const helmet = require("helmet")
const rateLimit = require("express-rate-limit")
const fs = require("fs")

/* ROUTES */
const heroRoutes = require("./routes/hero")
const packageRoutes = require("./routes/packages")
const enquiryRoutes = require("./routes/enquiry")
const blogRoutes = require("./routes/blog")
const uploadRoutes = require("./routes/upload")
const adminRoutes = require("./routes/admin")
const authRoutes = require("./routes/authRoutes")

const app = express()

/* =========================
   SECURITY MIDDLEWARE
========================= */

app.use(
helmet({
crossOriginResourcePolicy:false
})
)

app.use(cors())

const limiter = rateLimit({
windowMs: 15 * 60 * 1000,
max: 100,
message:"Too many requests from this IP, please try again later."
})

app.use(limiter)

app.use(express.json())

/* =========================
   ENSURE UPLOAD FOLDER
========================= */

const uploadDir = path.join(__dirname,"uploads")

if(!fs.existsSync(uploadDir)){
fs.mkdirSync(uploadDir)
}

/* =========================
   DATABASE CONNECTION
========================= */

mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/loveholidayz")
.then(()=>{
console.log("MongoDB Connected")
})
.catch(err=>{
console.log("MongoDB Error:",err)
})

/* =========================
   STATIC FILES
========================= */

app.use("/uploads", express.static(uploadDir))

/* =========================
   API ROUTES
========================= */

app.use("/api/auth", authRoutes)
app.use("/api/admin", adminRoutes)

app.use("/api/packages", packageRoutes)
app.use("/api/enquiry", enquiryRoutes)
app.use("/api/blog", blogRoutes)
app.use("/api/upload", uploadRoutes)
app.use("/api/hero", heroRoutes)

/* =========================
   FOOTER API
========================= */

app.get("/api/footer",(req,res)=>{

res.json({

offer:{
discount:"10% OFF",
title:"Himachal Tour Package"
},

company:{
name:"Flyways Trip",
description:"Premium domestic and international travel packages",
phone:"+91 9911585642",
email:"booking@FlywaysTrip.com",
address:"Janakpuri Delhi",
website:"www.FlywaysTrip.com",
gst:"07CNNPS9806C1ZL"
},

quickLinks:[
{name:"About Us",url:"/about"},
{name:"Gallery",url:"/gallery"},
{name:"Contact",url:"/contact"}
],

destinations:[
"Himachal",
"Uttarakhand",
"Kerala",
"Rajasthan"
]

})

})

/* =========================
   HEALTH CHECK
========================= */

app.get("/",(req,res)=>{
res.send("Flyways Trip Backend Running 🚀")
})

/* =========================
   GLOBAL ERROR HANDLER
========================= */

app.use((err,req,res,next)=>{
console.error(err.stack)

res.status(500).json({
error:"Internal Server Error"
})

})

/* =========================
   SERVER START
========================= */

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
console.log(`Server running on port ${PORT}`)
})