const cloudinary = require("cloudinary").v2

cloudinary.config({
  cloud_name: "divbawnlb",
  api_key: "588471453726241",
  api_secret: "6i0nKKdJmLDJt38LOF6Qy2rRBRQ"
})

module.exports = cloudinary