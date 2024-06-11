import User from '../models/User.model.js';
import bcryptjs from 'bcryptjs';
export const signup = async (req,res,next) =>{
    const {username,name,email,password}=req.body;
    const hashedPassword = bcryptjs.hashSync(password,10);
    const newUser = new User({username,name,email,password:hashedPassword});
    try{
    await newUser.save();
    res.status(200).json({message:"User Created Successfully"});
    }
    catch(error){
        next(error);
    }
};