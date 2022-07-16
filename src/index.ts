import { connect } from "mongoose";
import UserModel from "./models/User";

async function connectDB() {
  const db = await connect("mongodb://localhost/typesgoosedb");
  console.log("Database is connected to", db.connection.db.databaseName);
}

connectDB();

async function executeQueries() {
  const user = new UserModel({
    firstname: "Joe",
    lastname: "Doe",
    email: "joedoe@gmail.com",
    password: "123456",
  });

  await user.save();
  console.log();
}
