import mongoose, { Schema, model } from "mongoose";
import makeOrderDB from "./db";

const connectDB = async () => {
    await mongoose.connect(<string>process.env.DB_URI);
}
const orderDB = makeOrderDB({Schema , model});

export {connectDB , orderDB};