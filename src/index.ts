import mongoose from "mongoose";

async function connectDB() {
  const db = await mongoose.connect("mongodb://localhost/typesgoosedb");
  console.log("Database is connected to", db.connection.db.databaseName);
}

connectDB();
