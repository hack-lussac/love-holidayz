const mongoose = require("mongoose");

const EnquirySchema = new mongoose.Schema({

name:String,
phone:String,
destination:String,
message:String,
date:{type:Date,default:Date.now}

});

module.exports = mongoose.model("Enquiry",EnquirySchema);
