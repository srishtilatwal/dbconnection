import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8000;
const MONGO = process.env.MONGO_URL;

mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log("Database is connected successfully.");
    app.listen(PORT,()=>{
        console.log(`Server is runnning on PORTs : ${PORT}`);
    });
}).catch ((error)=>{
    console.log(err);
});
const userSchema = new mongoose.Schema({
    name:String,
    age: Number,
});
const UserModel = mongoose.model("username", userSchema)

app.get("/getusers", async (req , res)=>{
    const UserData = await UserModel.find();
    res.JSON(UserData);
});

