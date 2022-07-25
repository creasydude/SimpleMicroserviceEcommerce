import mongoose, { model, Schema } from "mongoose";
import makeUserDb from "./db";

const connectDb = async () => {
  await mongoose.connect(<string>process.env.DB_URI);
};

const userDb = makeUserDb({ Schema, model });

export { connectDb, userDb };
