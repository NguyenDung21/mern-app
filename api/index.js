import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "../api/Routes/User.route.js"
const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connect to Mongodb successfully");
})
.catch((err)=>{
    console.log(err);
})

app.listen(3000, ()=>{
    console.log("Server listenning port 3000!!");
});


// userRouter model
app.use('/api/user',userRouter);