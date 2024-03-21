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



const PORT = process.env.PORT || 5050;

// make database connection 
try {
  await mongoose.connect(process.env.MONGO_URI)
} catch (error) {
  console.log(error)
}

// use routes
app.use('/recipes', router)

// Listen for incoming requests
app.listen(PORT, () => {
    console.log(`Express app is running on ${PORT}`);
  
  });
  
