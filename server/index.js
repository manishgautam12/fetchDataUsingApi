import  express  from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors';
import  firstApi from "./controller/firstApi.js";
import secondApi from "./controller/secondApi.js";
import thirdApi from "./controller/thirdApi.js";
import fourthApi from "./controller/fourthApi.js";
import fifthApi from "./controller/fifthApi.js";


const app=express()
dotenv.config();
app.use(bodyParser.json());
const connect=async()=>{
    try {
       await mongoose.connect(process.env.MONGO)
       console.log("connected to mongodb");
    } catch (error) {
        throw error;
    }
}

mongoose.connection.on("disconnected",()=>{
    console.log("mongodb disconnected");
});
app.use(cors());

app.get("/api1",firstApi)
app.get("/api2",secondApi)
app.get("/api3",thirdApi);
app.get("/api4",fourthApi)
app.get("/api5",fifthApi)

app.listen(8090,()=>{
    connect();
    console.log("server is running on the port 8090")
})