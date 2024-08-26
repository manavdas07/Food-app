import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://manavdas09:sept%400702@cluster0.hevnlz7.mongodb.net/food-delivery')
    .then(()=>console.log("DB Connected"))
}