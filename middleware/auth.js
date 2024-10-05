const User  = require( "../models/User");
const jwt = require ("jsonwebtoken");

 const Authentication = async (req,res,next)=>{
    const token = req.header("Auth")
    try {
        if(!token) return res.json({messsage:"login First"})

        const decode = jwt.verify(token,"Vibhu123")

        // console.log("This Is Decoded data",decode);

        const id = decode.userId
        let user = await User.findById(id)
        if(!user) return res.json({messsage:"User Not Exist"})
        req.user = user

        next();
        
    } catch (error) {
        res.json({messsage:error})
    }
}

module.exports = {Authentication};