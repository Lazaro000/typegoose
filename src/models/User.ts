import { prop, getModelForClass } from "@typegoose/typegoose";

class User {
  @prop()
  firstname: string;
  @prop()
  lastname: string;
  @prop()
  email: string;
  @prop()
  password: string;
}

const UserModel = getModelForClass(User);

export default UserModel;
