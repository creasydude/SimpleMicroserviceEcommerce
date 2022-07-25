import mongoose, { Schema, model } from "mongoose";
import makeProductDb from "./db";

const connectDB = async () => {
  await mongoose.connect(<string>process.env.DB_URI);
};
const ProductDb = makeProductDb({ Schema, model });

export { connectDB, ProductDb };
