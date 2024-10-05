const User = require( "../models/User");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

 const register = async (req, res) => {
    const { name, gmail, password } = req.body
    try {
        let user = await User.findOne({ gmail })

        if (user) return res.json({ message: "User Already exist" })

        const hashpass = await bcrypt.hash(password, 10)

        user = await User.create({ name, gmail, password: hashpass })

        // user = await User.create({ name, gmail, password })

        res.json({ message: "User Register Succesfully", user })
    } catch (error) {
        res.json({ message: error })
    }
}

 const login = async (req,res)=>{
    const {gmail,password} = req.body

    try{
        let user = await User.findOne({gmail});

        if(!user) return res.json({message:"user not exist"})

        const validPass = await bcrypt.compare(password,user.password);

        if(!validPass) return res.json({message:"Invalid credentials"})

        const token = jwt.sign({userId:user._id},"henil15",{
            expiresIn:'1d'
        })

        res.json({message:`Welcome ${user.name}`,token})

    }catch(error){
        res.json({message:error.message})
    }
}

 const profile = async (req,res)=>{
    res.json({user : req.user})
}


module.exports = {register, login, profile}