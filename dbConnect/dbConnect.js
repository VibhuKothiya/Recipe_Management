const mongoose = require("mongoose");
require("dotenv").config();

function dbConnect (){
    mongoose.connect(process.env.DB_URI).then(()=>{
        console.log("Database Connect Successfully");
        
    })
    .catch((error)=>{
        console.log((error, "Error"));
     
    })
}

module.exports = dbConnect;