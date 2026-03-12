const express = require("express")
const router = express.Router()
const multer = require("multer")
const cloudinary = require("../config/cloudinary")

const storage = multer.memoryStorage()
const upload = multer({ storage })

router.post("/", upload.single("image"), async (req,res)=>{

const result = await cloudinary.uploader.upload_stream(
{ folder:"packages" },
(error,result)=>{
if(error) return res.status(500).json(error)

res.json({ image: result.secure_url })
}
).end(req.file.buffer)

})

module.exports = router