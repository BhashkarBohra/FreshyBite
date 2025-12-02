import mongoose from "mongoose";


// connect from the mongodb atlas
export const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URL).then(()=>console.log("DB Connected"));
}