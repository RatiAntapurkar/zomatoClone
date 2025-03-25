import mongoose from "mongoose";
export const connectDB =async()=>{
    await mongoose.connect('mongodb+srv://videolecture4:tYK486shNEaWYJQe@cluster0.pu5an.mongodb.net/food-sel').then(()=>console.log('DB connected'));
}//tYK486shNEaWYJQe
//videolecture4
//mongodb+srv://videolecture4:tYK486shNEaWYJQe@cluster0.pu5an.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//


