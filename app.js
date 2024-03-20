import express, { urlencoded } from "express";
import dotenv from "dotenv";
import {router}   from "./routes/recipes.routes.js";
import mongoose from "mongoose";
import cors from "cors";



dotenv.config();


// Create express app
const app = express();

// apply middlewares
app.use(express.json());
app.use(express.urlencoded ({extended: false}));
app.use(cors());

// use routes
app.use('/recipes', router)

const PORT = process.env.PORT || 5050;

// make database connection 
await mongoose.connect(process.env.MONGO_URI)

// Listen for incoming requests
app.listen(PORT, () => {
    console.log(`Express app is running on ${PORT}`);
  
  });
  
