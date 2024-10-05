const express=require('express')
const app=express();
require("dotenv").config();
const dbConnect = require("./dbConnect/dbConnect");
const cors = require("cors")
const useRouter = require("./routes/user");
const recipeRouter = require("./routes/recipe");

//cors
app.use(
    cors({
        origin: "*",
    })
);

//body
app.use(express.json());
app.use(express.urlencoded({
    extended : false
}));

//routes
app.use("/api", useRouter);
app.use('/api',recipeRouter)

//database connect
dbConnect();

//server
const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>{
    
    console.log(`Server started on ${PORT}`);
    
});