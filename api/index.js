import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "../api/Routes/User.route.js"
import authRouter from "../api/Routes/auth.route.js"
const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connect to Mongodb successfully");
})
.catch((err)=>{
    console.log(err);
})

app.use(express.json());

app.listen(3000, ()=>{
    console.log("Server listenning port 3000!!");
});


// userRouter model
app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);

app.use((err,req,res,next)=> {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode,

    })

})