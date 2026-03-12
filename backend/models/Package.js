const mongoose = require("mongoose")

const PackageSchema = new mongoose.Schema({

title:{
type:String,
required:true
},

duration:{
type:String
},

price:{
type:Number
},

images:[String],   // multiple gallery images

category:{
type:String
},

type:{
type:String,
enum:["Domestic","International"]
},

state:{
type:String
},

popular:{
type:Boolean,
default:false
},

overview:{
type:String
},

itinerary:{
type:String
},

inclusions:{
type:String
}

},{
timestamps:true
})

module.exports = mongoose.model("Package",PackageSchema)