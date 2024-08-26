import mongoose from "mongoose";

// Define the user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cartData: {
        type: Object,
        default: {}
    }
}, { minimize: false });

// Compile the model
const userModel = mongoose.model("user", userSchema);

// Add a log to confirm the schema is created
console.log("User model created:", userModel);

export default userModel;
