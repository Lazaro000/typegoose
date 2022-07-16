import { connect } from "mongoose";
import ProductModel from "./models/Product";
import RoleModel from "./models/Role";
import UserModel from "./models/User";

async function connectDB() {
  const db = await connect("mongodb://localhost/typesgoosedb");
  console.log("Database is connected to", db.connection.db.databaseName);
}

connectDB();

async function executeQueries() {
  const user = new UserModel({
    /**
     * * Create an User
     */
    firstname: "Joe",
    lastname: "Doe",
    email: "    joedoe@gmail.com",
    password: "123456",
  });

  await user.save();
  console.log("User created: ", user);

  /**
   * * Find an User
   */
  const user2 = await UserModel.find({}, { firstname: 1 });
  console.log("User found:", user2);

  const id = "624468c1abad6548541efc24";
  const user3 = await UserModel.findById(id, { firstname: 1, _id: 0 });
  console.log("User found:", user3);

  const user4 = await UserModel.findOneAndUpdate(
    { _id: id },
    { firstname: "Ryan", lastname: "Ray" },
    { new: true }
  );
  console.log("User found:", user4);

  const user5 = await UserModel.findByIdAndUpdate(
    id,
    { firstname: "Ryan", lastname: "Ray" },
    { new: true }
  );
  console.log("User found:", user5);

  /**
   * * Delete an User
   */
  const user6 = await UserModel.findByIdAndDelete(id);
  console.log("User deleted:", user6);

  const user7 = await UserModel.findOneAndDelete({ email: "joedoe@gmail.com" });
  console.log("User deleted:", user7);
  const user8 = await UserModel.deleteMany({ email: "joedoe@gmail.com" });
  console.log("Users deleted:", user8);

  /**
   * * Create a Product
   */
  const product = await ProductModel.create({
    name: "laptop",
    price: 30,
    url: "product-01",
    tags: ["laptop", "gaming", "razer"],
    comments: [{ text: "awesome product" }, { text: "product x" }],
    owner: "624468c1abad6548541efc24",
  });

  /**
   * Find a Product
   */
  const product2 = await ProductModel.findById(id).populate("owner");
  console.log("Product found:", product2);

  /**
   * Create some roles
   */
  const results = await RoleModel.insertMany([
    { name: "admin" },
    { name: "guest" },
    { name: "user" },
  ]);
  console.log(results);

  /**
   * * Create a user with role
   */
  const newUser = await UserModel.create({
    firstname: "John",
    lastname: "Doe",
    password: "123456",
    email: "john@email.com",
    role: ["6243cc2ef04e53a3402567ae", "6243cc2ef04e53a3402567af"],
  });
  console.log(newUser);

  const user10 = await ProductModel.findById(
    "6243cea4e5e18ed01a35fe77"
  ).populate("roles", "name -_id");
  console.log(user10);

  const product4 = await new ProductModel({
    name: "mouse",
    price: 300,
    url: "mouse-gaming",
    tags: ["electronics", "computer"],
    owner: "6243cc1aeb3466f4226251a5",
    comments: [
      {
        text: "this is a comment",
      },
      {
        text: "awesome product",
      },
    ],
  });
  console.log(product4);
}

executeQueries();
