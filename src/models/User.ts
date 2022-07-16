import { prop, getModelForClass } from "@typegoose/typegoose";

class User {
  @prop({ required: true }) // mongoose
  firstname: string; // typescript

  @prop({ required: true })
  lastname: string;

  @prop({ required: true, trim: true })
  email: string;

  @prop({ required: true, minlength: 6 })
  password: string;
}

const UserModel = getModelForClass(User);

export default UserModel;
