const User = require("../models/User")
const jwt = require("jsonwebtoken")

const generateToken = (user) =>{
    return jwt.sign ({id : user._id}, process.env.JWT_SECRET, {expiresIn : "1d"})
}

//Register user
const register = async (req, res)=>{
    try{
        const {username, email, password} = req.body;
        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).json({message : "Email already in use"});
        }
        const newUser = await User.create({username, email, password});
        res.status(201).json({message : "User created successfully", user : newUser});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message : "Server error"});
    }
}

//Login user
const login = async (req, res)=>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user|| !(await user.comparePassword(password))){
            return res.status(401).json({message : "Invalid credentials"});
        }

        const token = generateToken(user);
        res.cookie("jwt", token, {httpOnly : true, secure: true, maxAge : 24*60*60*1000});
        res.json({message : "User logged in successfully", user, token});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message : "Server error", err});
    }
}

const getUser = async (req, res) => {
    try {
        // ✅ `req.user` is set by the middleware (decoded JWT)
        const user = await User.findById(req.user.id); // ✅ Don't return password

        console.log("HI, I'm from getUser controller,", user);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};


//Logout user
const logout = (req, res)=>{
    res.clearCookie("jwt");
    res.json({message : "User logged out successfully"});
}

const meDashboard = (req, res)=>{
    res.json({message : `Hi ${req.user.username}, Welcome to your Dashboard!`});
}

module.exports = {register, login, logout, meDashboard, getUser};