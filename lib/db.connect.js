import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { con: null, promise: null };
}

export default async function connectToDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    console.log("Connecting to MongoDB working!!");

    cached.promise = mongoose
      .connect(MONGO_URI)
      .then((mongoose) => {
        console.log("Connected To MongoDB !!");
        return mongoose;
      })
      .catch((err) => {
        console.log("Error occured while connecting to MongoDB", err);
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
