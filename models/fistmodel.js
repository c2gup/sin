

//import mongoose
const mongoose = require("mongoose");


//route handler
const singSchema = new mongoose.Schema({
    username:{
        type: String,
         required:true
    },
   password: {
        type: String,
        required:true,
    },
    email: {
        type:String,
        required:true,
    }},


    {timestamps:true},
);

//export
module.exports = mongoose.model("User", singSchema);