import mongoose from "mongoose"

export const connectDB = async () => {
    try {
await mongoose.connect("mongodb://localhost:27017/expenai");
    console.log("Connected to mongodb");
    }
    catch(err) {
        console.log("Not connected to db", err);
    }
    
}