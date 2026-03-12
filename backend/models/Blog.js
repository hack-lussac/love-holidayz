const mongoose = require("mongoose")

const BlogSchema = new mongoose.Schema({

title:{
type:String,
required:true
},

slug:{
type:String,
unique:true
},

content:{
type:String,
required:true
},

coverImage:{
type:String
},

tags:[
{
type:String
}
],

category:{
type:String,
enum:["Travel Guide","Destination","Tips","International","Domestic"]
},

createdAt:{
type:Date,
default:Date.now
}

})

module.exports = mongoose.model("Blog",BlogSchema)