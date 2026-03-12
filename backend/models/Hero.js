const mongoose = require("mongoose")

const HeroSchema = new mongoose.Schema({

title:String,
subtitle:String,
image:String,
active:{
type:Boolean,
default:true
}

})

module.exports = mongoose.model("Hero",HeroSchema)