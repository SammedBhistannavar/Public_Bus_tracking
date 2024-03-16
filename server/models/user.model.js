const mongoose = require("mongoose");


const userschema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },

    email:{
     type:String,
     require:true
    },
    
    Mobile_no:{
        type:Number,
        require:true
    },

    start_point:{
     type:String,
     require:true,
    },

    destiation:{
    type:String,
    require:true
    },

})

const user = mongoose.model("User_info",userschema)

module.exports =user;